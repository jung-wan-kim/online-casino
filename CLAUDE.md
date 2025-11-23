# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

온라인 카지노 플랫폼 - 블랙잭, 바카라, 포커 3가지 카드 게임을 제공하는 웹 기반 카지노 플랫폼입니다.

## 개발 환경 설정

### Docker를 사용한 로컬 개발 환경

```bash
# 데이터베이스 서비스 시작
docker-compose up -d

# 개별 서비스 시작
docker-compose up -d postgres    # PostgreSQL (포트 5432)
docker-compose up -d mongodb     # MongoDB (포트 27017)
docker-compose up -d redis       # Redis (포트 6379)

# 관리 도구
# pgAdmin: http://localhost:5050 (admin@casino.com / admin)
# Mongo Express: http://localhost:8081
# Redis Commander: http://localhost:8082

# 전체 서비스 중지
docker-compose down
```

### 프로젝트 구조

```
online-casino/
├── frontend/           # Next.js 14+ (React) - SSR/SSG, Tailwind CSS, Three.js
├── backend/            # NestJS (Node.js + TypeScript) - GraphQL, REST API
├── shared/             # 프론트엔드/백엔드 공유 타입 및 유틸리티
├── infrastructure/     # Docker, Kubernetes, Terraform
├── scripts/            # 유틸리티 스크립트
└── docs/               # 프로젝트 문서
    ├── PROJECT_PLAN.md      # 프로젝트 기획서
    ├── ARCHITECTURE.md      # 시스템 아키텍처 설계
    └── ROADMAP.md           # 개발 로드맵
```

## 기술 스택

### Frontend
- **Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS, Radix UI
- **3D Graphics**: Three.js, WebGL
- **Animation**: Framer Motion, React Spring
- **State Management**: Zustand
- **Real-time**: Socket.io Client, WebRTC

### Backend
- **Framework**: NestJS (Node.js + TypeScript)
- **API**: GraphQL (Apollo Server), REST
- **Real-time**: Socket.io, Redis Pub/Sub
- **Authentication**: JWT, OAuth 2.0

### Database
- **PostgreSQL**: 사용자, 거래, 게임 설정
- **MongoDB**: 게임 히스토리, 로그
- **Redis**: 세션, 캐시, 실시간 게임 상태
- **ClickHouse**: 데이터 분석, 통계

### Infrastructure
- **Container**: Docker, Kubernetes
- **CI/CD**: GitHub Actions, ArgoCD
- **Monitoring**: Prometheus, Grafana, Sentry

## 주요 게임

### 블랙잭 (Blackjack)
- 6/8덱 슈 시스템
- Hit, Stand, Double Down, Split, Insurance
- RNG 기반 공정한 카드 분배

### 바카라 (Baccarat)
- Player, Banker, Tie 베팅
- 실시간 로드맵 (Big Road, Bead Road)
- 자동 드로우 규칙 적용

### 포커 (Texas Hold'em)
- 멀티플레이어 (2-9명)
- 실시간 채팅 및 게임 상태 동기화
- 핸드 히스토리 및 통계

## 핵심 시스템 아키텍처

### 마이크로서비스 구성
- **Auth Service**: JWT 토큰 발급/검증, 소셜 로그인, 2FA
- **User Service**: 프로필 관리, KYC 인증, VIP 관리
- **Wallet Service**: 잔액 관리, 입출금 처리, 칩 교환
- **Game Services**: 블랙잭/바카라/포커 게임 로직 및 상태 관리
- **Live Dealer Service**: 라이브 스트리밍, 딜러 스케줄링
- **Analytics Service**: 실시간 통계, 사기 탐지, RTP 계산

### WebSocket 실시간 통신
- Socket.io Server Cluster (Redis 기반)
- 실시간 게임 상태 동기화
- 멀티플레이어 지원

### 데이터베이스 스키마

**PostgreSQL - 주요 테이블**
- `users`: 사용자 정보, KYC 상태, VIP 레벨
- `wallets`: 잔액, 잠긴 잔액, 화폐 단위
- `transactions`: 입출금, 베팅, 승리 거래 내역

**MongoDB - 게임 히스토리**
- 게임별 상세 로그 (카드, 베팅, 액션, RNG seed)
- 유연한 스키마로 게임별 특성 저장

**Redis - 캐시 및 세션**
- 세션 저장소
- 실시간 게임 상태
- Rate Limiting
- 리더보드

## 보안 요구사항

### 인증 및 암호화
- JWT 토큰 기반 인증 (Access + Refresh Token)
- bcrypt 비밀번호 해싱
- AES-256 데이터 암호화
- TLS 1.3 전송 암호화

### 결제 및 KYC
- PCI DSS 준수
- Stripe/PayPal 통합
- 신원 인증 (Onfido/Jumio)
- AML(자금세탁방지) 체크

### 게임 공정성
- 검증 가능한 RNG (Crypto.randomBytes)
- Provably Fair 시스템
- 독립적인 감사 (eCOGRA)
- RTP(Return to Player) 공개

## 성능 목표

| 항목 | 목표 |
|------|------|
| 페이지 로딩 | < 2초 |
| API 응답 시간 | < 100ms |
| WebSocket 지연시간 | < 50ms |
| 게임 애니메이션 | 60fps |
| 동시 접속자 | 10,000+ |

## 개발 로드맵

### Phase 1 (3개월): MVP
- 블랙잭 게임
- 기본 사용자 관리
- 가상 칩 시스템

### Phase 2 (4개월): 핵심 기능
- 바카라, 포커 추가
- 실제 결제 시스템
- 3D 그래픽

### Phase 3 (3개월): 고급 기능
- 라이브 딜러
- 소셜 기능
- 프로모션 시스템

### Phase 4 (2-4개월): 최적화 및 런칭
- 성능 최적화
- 라이선스 취득
- 공식 런칭

## 법적 고지

⚠️ **중요**: 이 프로젝트는 교육 및 학습 목적으로 제작되었습니다.
- 온라인 도박은 국가별로 법적 규제가 다릅니다
- 상업적 운영 전 반드시 해당 지역의 법률을 확인하고 필요한 라이선스를 취득하십시오
- 미성년자 접근 차단 및 책임감 있는 게임 정책 필수

## 테스트

### 개발 환경에서의 테스트
```bash
# Frontend 테스트
cd frontend
npm run test          # Unit tests
npm run test:e2e      # E2E tests

# Backend 테스트
cd backend
npm run test          # Unit tests
npm run test:e2e      # Integration tests
npm run test:cov      # Test coverage
```

## 배포

### Docker를 사용한 배포
```bash
# 전체 스택 프로덕션 빌드
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes 배포
```bash
kubectl apply -f infrastructure/kubernetes/
```

## 모니터링

- **Prometheus**: 메트릭 수집
- **Grafana**: 시각화 대시보드
- **Sentry**: 에러 추적
- **ELK Stack**: 로그 관리

## 코드 스타일

- ESLint + Prettier 사용
- TypeScript strict mode
- 의미 있는 커밋 메시지 (AI 관련 메시지 제외)
- Pull Request 필수 (최소 1명 승인)
