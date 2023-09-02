const parseString = require('xml2js').parseString

export const formatXMlImage = (strXML: string): any => {
	let imgStr: string = ''
	let srcString
	const expression = /img.+?src=(["'])(.+)\1/
	const subImage = `<br><img src="./images/img-none.svg">`

	if (strXML) {
		parseString(strXML, function (err: any, result: any) {
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

export const formatXMlText = (strXML: string): any => {
	let formatText: string = ''

	if (strXML) {
		parseString(
			strXML,
			{
				trim: true,
				normalize: true,
				emptyTag: () => ({}),
				ignoreAttrs: true
			},
			function (err: any, result: any) {
				// console.log(result.scandoc)

				for (let i = 0; i < result.scandoc.sentence.length - 4; i++) {
					if (typeof result.scandoc.sentence[i] === 'string') {
						formatText += ` ${result.scandoc.sentence[i].trim()}`
					}

					if (typeof result.scandoc.sentence[i]._ === 'string') {
						formatText += ` ${result.scandoc.sentence[i]._.trim()}`
					}

					if (result.scandoc.sentence[i].entity) {
						if (typeof result.scandoc.sentence[i].entity[0] === 'string') {
							formatText += ` ${result.scandoc.sentence[i].entity[0].trim()}`
						}

						if (
							result.scandoc.sentence[i].entity[0].entity !== undefined &&
							typeof result.scandoc.sentence[i].entity[0].entity[0].entity ===
								'string'
						) {
							if (
								result.scandoc.sentence[i].entity[0].entity[0].entity !==
									undefined &&
								typeof result.scandoc.sentence[i].entity[0].entity[0].entity ===
									'string'
							) {
								formatText += ` ${result.scandoc.sentence[i].entity[0].entity[0].entity}`
								if (
									typeof result.scandoc.sentence[i].entity[0].entity[0]
										.entity[0]._ === 'string' &&
									result.scandoc.sentence[i].entity[0].entity[0].entity[0]._ !==
										undefined
								) {
									formatText +=
										result.scandoc.sentence[i].entity[0].entity[0].entity[0]._
								}
							}
						}
					}
				}
			}
		)

		return formatText.replace(/(<([^>]+)>)/gi, '').replace(/[()]/g, '')
	}
}
