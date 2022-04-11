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
      objectType: 'feed', // 메시지 형식 : 피드 타입
      content: {
        title: '개성 넘치고 귀여운 인싸 친구, 아이비',
        description: '나와 잘 맞는 식물 친구는?',
        imageUrl: '/images/wedding.png', // 메인으로 보여질 이미지 주소
        link: {
          webUrl: '공유할 링크 주소',
          mobileWebUrl: '공유할 링크 주소',
        },
      },
      buttons: [
        {
          title: '나도 테스트 해보기', // 버튼 이름
          link: {
            webUrl: '공유할 링크 주소',
            mobileWebUrl: '공유할 링크 주소',
          },
        },
      ],
    })
  }

  return shareKakao
}

export default useShareKakao
