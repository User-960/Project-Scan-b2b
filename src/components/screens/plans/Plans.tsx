import cn from 'clsx'
import localFont from 'next/font/local'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import { GlobalSvgSelector } from '@/components/ui/svg-selector/GlobalSvgSelector'

import { useAuth } from '@/components/hooks/useAuth'

import styles from './Plans.module.scss'
import { plans } from './plans.data'

const ferryFont = localFont({
	src: '../../../assets/fonts/ferry_black.otf',
	display: 'swap'
})

const Plans: FC = () => {
	const { isAuth } = useAuth()

	return (
		<section className={styles.sectionPlans}>
			<h2 className={cn(ferryFont.className, styles.title)}>наши тарифы</h2>

			<ul className={styles.listPlans}>
				{plans.map(plan => (
					<li key={plan.id} className={styles.itemPlans}>
						<div
							className={cn(styles.planTitle, {
								[styles.planBeginner]: plan.title === 'Beginner',
								[styles.planPro]: plan.title === 'Pro',
								[styles.planBusiness]: plan.title === 'Business'
							})}
						>
							<div className={styles.planTitleBlock}>
								<h6 className={styles.planTitleText}>{plan.title}</h6>
								<p className={styles.planTitleDesc}>{plan.description}</p>
							</div>
							<GlobalSvgSelector id={plan.img} />
						</div>
						<div className={styles.planInfo}>
							{isAuth && plan.title === 'Beginner' ? (
								<div className={styles.planInfoBadge}>Текущий тариф</div>
							) : null}

							<div className={styles.planPrice}>
								<p className={styles.planPriceFull}>
									<span className={styles.newPrice}>{plan.newPrice} ₽</span>
									<span className={styles.oldPrice}>{plan.oldPrice} ₽</span>
								</p>
								<p className={styles.installmentPrice}>{plan.installment}</p>
							</div>

							<div className={styles.planConditions}>
								<h6 className={styles.planConditionsTitle}>В тариф входит:</h6>
								<ul className={styles.listPlanConditions}>
									{plan.conditions.map(condition => (
										<li
											key={condition.id}
											className={styles.itemPlanConditions}
										>
											{condition.status && <GlobalSvgSelector id='tick' />}
											<p className={styles.itemPlanConditionsText}>
												{condition.condition}
											</p>
										</li>
									))}
								</ul>
							</div>

							{!isAuth || (isAuth && plan.title !== 'Beginner') ? (
								<Button
									size='medium'
									state='btnAvailable'
									clickHandler={() => console.log('1')}
								>
									Подробнее
								</Button>
							) : (
								<Button
									size='medium'
									state='btnBlock'
									clickHandler={() => console.log('1')}
								>
									Перейти в личный кабинет
								</Button>
							)}
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Plans
