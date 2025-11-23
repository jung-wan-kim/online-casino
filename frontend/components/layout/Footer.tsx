import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-casino-dark-100 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-display font-bold text-casino-gold mb-4">
              Royal Casino
            </h3>
            <p className="text-sm text-gray-400">
              프리미엄 온라인 카지노 게임 플랫폼으로 최고의 게임 경험을 제공합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/games" className="hover:text-casino-gold transition-colors">
                  게임
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="hover:text-casino-gold transition-colors">
                  프로모션
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="hover:text-casino-gold transition-colors">
                  토너먼트
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-casino-gold transition-colors">
                  회사 소개
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/help" className="hover:text-casino-gold transition-colors">
                  도움말
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-casino-gold transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-casino-gold transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="hover:text-casino-gold transition-colors">
                  책임감 있는 게임
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">법적 고지</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-casino-gold transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-casino-gold transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-casino-gold transition-colors">
                  라이선스
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Royal Casino. All rights reserved.
          </p>
          <p className="mt-2">
            18세 이상만 이용 가능합니다. 책임감 있게 게임하세요.
          </p>
        </div>
      </div>
    </footer>
  )
}
