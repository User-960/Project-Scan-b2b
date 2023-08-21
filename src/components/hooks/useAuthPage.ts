import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from './useAuth'
import { IAuthFields } from '@/interfaces/form.interface'
import AuthService from '@/services/auth.service'

export const useAuthPage = () => {
	const [type, setType] = useState('login')
	const [errorText, setErrorText] = useState<string>('')
	const { push } = useRouter()
	const { isAuth, setIsAuth } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const { mutateAsync, isLoading } = useMutation(
		['auth'],
		({ login, password }: IAuthFields) =>
			AuthService.main(login, password, type),
		{
			onSuccess: data => {
				if (typeof data !== 'string') {
					setIsAuth(true)
					reset()
					push('/')
				} else {
					setErrorText(data)
				}
			}
		}
	)

	useEffect(() => {
		if (isAuth) {
			push('/')
		}
	}, [isAuth])

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		await mutateAsync(data)
	}

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit,
			errorText
		}),
		[errors, isLoading]
	)
}