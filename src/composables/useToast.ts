// import { ref } from "vue"
import { ElNotification } from 'element-plus'

export const generateToast = (title: string, message: string | unknown, type: string) => {
  ElNotification({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dangerouslyUseHTMLString: true,
    title: title,
    message: message,
    type: type,
  })
}
