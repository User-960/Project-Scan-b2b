// const formatXMlImage = (strXML: string): any => {
// 	let test: string = ''
// 	const subString = '<br><img src='
// 	const subImage = `<br><img src="./images/img-none.svg">`
// 	if (strXML) {
// 		parseString(strXML, function (err: any, result: any) {
// 			test = result.scandoc._
// 			test ? test : (test = `${subImage}`)
// 		})
// 	}
// 	return test.length < 360
// 		? test.split(subString).join().split('>').join().slice(2, -2)
// 		: (test = `${subImage}`)
// 				.split(subString)
// 				.join()
// 				.split('>')
// 				.join()
// 				.slice(2, -2)
// }
//-----------------------------------------------------------------

const xml2js = require('xml2js')

export const formatXMlImage = (strXML: string): any => {
	let imgStr: string = ''
	let srcString
	const expression = /img.+?src=(["'])(.+)\1/
	const subImage = `<br><img src="./images/img-none.svg">`

	if (strXML) {
		xml2js.parseString(strXML, function (err: any, result: any) {
			imgStr = result.scandoc._

			if (imgStr) {
				if (imgStr.length > 550) {
					imgStr = subImage
				}
				srcString = (imgStr.match(expression) || [])[2] ?? null
			} else {
				imgStr = subImage
				srcString = (imgStr.match(expression) || [])[2] ?? null
			}
		})
	}
	return srcString
}

export const formatXMlText = (strXML: string): any => {
	let formatXML: string = ''
	const parser = new DOMParser()
	let xmlDoc

	if (strXML) {
		xmlDoc = parser.parseFromString(strXML, 'text/xml')
		formatXML = new XMLSerializer()
			.serializeToString(xmlDoc)
			.trim()
			.replace(/(<([^>]+)>)/gi, '')
			.replace(/[a-zA-Z]/g, '')
			.replace(/[&]|[#]|[;]|[:]|[/]|[=]/g, '')
			.replace(/""/g, '')
			.replace(/"-"/g, '')
			.replace(/_/g, '')
			.replace(/[.]/g, '. ')
			.replace(/[.]/g, '. ')
			.replace(/".3"/g, '')
			.replace(/(.?-)/g, '')
			.replace(/(\d+%)/g, '')
			.replace(/[0-9]{5}/g, '')
			.slice(0, 500)

		return (formatXML += '...')
	}
}
