// @ts-ignore exist force
import { join } from 'path-browserify'
import { alovaInstance } from './index'

// function transformPath(path: string | string[]) {
//   string
// }

const API_PATH = "E:/Workspace/Python/Projects/Drone" // hard-hat-detection

export async function helmetDetect(_path: string) {

  const text = await alovaInstance.Post('http://localhost:5000/detect', JSON.stringify({ path: _path })).then((response: any) => response.text())

  const data = JSON.parse(text);

  [...data].forEach(async (item) => {
    const filePath = join(API_PATH, item) //.replaceAll('/', '\\')

    console.log(filePath)

    /* const { img } =  */await getImage(filePath)

    // 将 res 转成base64
    // const base64 = btoa(img)

    const _img = document.createElement('img')

    _img.src = `http://localhost:5000/file?path=${filePath}`

    document.body.appendChild(_img)

    Object.assign(_img.style, {
      zIndex: '1111111',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%'
    })

    // console.log('res', res)
  })

  // read data
  console.log('data', data)
}

async function getImage(path: string) {
  return new Promise(async resolve => {
    const res = await alovaInstance.Get(`http://localhost:5000/file`, {
      params: {
        path
      }
    }).then((response: any) => response.text())
      .catch(err => {
        console.error('e', err)
        setTimeout(() => getImage(path), 3000)
      })

    resolve(res)
  })
}

// helmetDetect('E:/Workspace/Python/Projects/Drone/hard-hat-detection/images/demo')