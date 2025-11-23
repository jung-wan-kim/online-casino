'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAuthenticated } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">👑</span>
          <span className="text-xl font-display font-bold text-casino-gold">
            ROYAL CASINO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/games" className="hover:text-casino-gold transition-colors">
            게임
          </Link>
          <Link href="/promotions" className="hover:text-casino-gold transition-colors">
            프로모션
          </Link>
          <Link href="/tournaments" className="hover:text-casino-gold transition-colors">
            토너먼트
          </Link>
          <Link href="/help" className="hover:text-casino-gold transition-colors">
            고객지원
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
                <span className="text-casino-gold font-bold">
                  ${user?.balance?.toLocaleString() || '0'}
                </span>
              </div>
              <Link href="/profile">
                <Button variant="ghost" size="sm">
                  {user?.username}
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  로그인
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="primary" size="sm">
                  회원가입
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <Link href="/games" className="block hover:text-casino-gold transition-colors">
              게임
            </Link>
            <Link href="/promotions" className="block hover:text-casino-gold transition-colors">
              프로모션
            </Link>
            <Link href="/tournaments" className="block hover:text-casino-gold transition-colors">
              토너먼트
            </Link>
            <Link href="/help" className="block hover:text-casino-gold transition-colors">
              고객지원
            </Link>
            {!isAuthenticated && (
              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link href="/auth/login" className="block">
                  <Button variant="ghost" size="sm" className="w-full">
                    로그인
                  </Button>
                </Link>
                <Link href="/auth/signup" className="block">
                  <Button variant="primary" size="sm" className="w-full">
                    회원가입
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
