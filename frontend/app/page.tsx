import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-casino-dark via-casino-dark-100 to-casino-dark-200" />

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-casino-gold/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-casino-cyan/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              <span className="neon-text">ROYAL CASINO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              프리미엄 온라인 카지노 게임 경험
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/games">
                <Button size="lg" variant="primary">
                  게임 시작하기
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="lg" variant="secondary">
                  회원가입
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Games Section */}
        <section className="py-20 px-4 bg-casino-dark-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-center mb-12">
              인기 게임
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blackjack */}
              <GameCard
                title="블랙잭"
                description="딜러와 21에 가까운 숫자를 만드는 클래식 카드 게임"
                image="/images/blackjack.jpg"
                href="/games/blackjack"
              />

              {/* Baccarat */}
              <GameCard
                title="바카라"
                description="뱅커와 플레이어 중 9에 가까운 쪽에 베팅하는 게임"
                image="/images/baccarat.jpg"
                href="/games/baccarat"
                badge="곧 출시"
              />

              {/* Poker */}
              <GameCard
                title="포커"
                description="Texas Hold'em 멀티플레이어 포커 게임"
                image="/images/poker.jpg"
                href="/games/poker"
                badge="곧 출시"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-center mb-12">
              왜 Royal Casino인가?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <FeatureCard
                icon="🎲"
                title="공정한 게임"
                description="검증된 RNG 시스템으로 완전한 공정성 보장"
              />
              <FeatureCard
                icon="⚡"
                title="빠른 속도"
                description="2초 이내 로딩, 60fps 부드러운 게임플레이"
              />
              <FeatureCard
                icon="🔒"
                title="안전한 거래"
                description="최고 수준의 보안으로 자산 보호"
              />
              <FeatureCard
                icon="🎁"
                title="푸짐한 보너스"
                description="신규 가입 보너스 및 다양한 프로모션"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function GameCard({
  title,
  description,
  image,
  href,
  badge
}: {
  title: string
  description: string
  image: string
  href: string
  badge?: string
}) {
  return (
    <Link href={href}>
      <div className="group card glass overflow-hidden hover:border-casino-gold/50 cursor-pointer relative">
        {badge && (
          <div className="absolute top-4 right-4 z-10 bg-casino-gold text-casino-dark px-3 py-1 rounded-full text-sm font-semibold">
            {badge}
          </div>
        )}
        <div className="aspect-video bg-gradient-to-br from-casino-dark-200 to-casino-dark-300 flex items-center justify-center">
          <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform">
            🎴
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-casino-gold transition-colors">
            {title}
          </h3>
          <p className="text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}
