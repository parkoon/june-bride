import { useEffect } from 'react'

declare global {
  interface Window {
    Kakao: any
  }
}

function useShareKakao() {
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY)
  }, [])

  const shareKakao = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: 'https://developers.kakao.com',
      templateId: 74896,
    })
  }

  return shareKakao
}

export default useShareKakao
