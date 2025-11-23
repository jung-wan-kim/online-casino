# 🎰 온라인 카지노 플랫폼

고품질 그래픽과 실감나는 게임 경험을 제공하는 웹 기반 온라인 카지노 플랫폼

## ⚠️ 법적 고지

**중요**: 온라인 도박은 국가 및 지역에 따라 법적 규제가 다릅니다. 이 프로젝트는 다음과 같은 목적으로만 사용되어야 합니다:

- 교육 및 학습 목적
- 합법적인 온라인 도박이 허용된 지역에서의 상업적 사용
- 실제 화폐를 사용하지 않는 소셜 카지노 플랫폼
- 게임 개발 연구 및 프로토타이핑

운영하기 전에 반드시 해당 지역의 법률을 확인하고 필요한 라이선스를 취득하십시오.

## 📋 프로젝트 개요

### 주요 특징

- **3가지 인기 카드 게임**: 블랙잭, 바카라, 포커
- **실감나는 3D 그래픽**: Three.js 기반 3D 카드 렌더링
- **실시간 게임플레이**: WebSocket을 통한 즉각적인 게임 상태 동기화
- **라이브 딜러**: WebRTC 기반 실시간 스트리밍
- **안전한 결제**: PCI DSS 준수 결제 시스템
- **공정한 게임**: 검증 가능한 RNG (Random Number Generator)
- **반응형 디자인**: 데스크톱, 태블릿, 모바일 완벽 지원

### 게임 목록

#### 1. 🃏 블랙잭 (Blackjack)
- 6/8덱 슈 시스템
- Double Down, Split, Insurance
- 실시간 카드 애니메이션
- 게임 히스토리 및 통계

#### 2. 🎴 바카라 (Baccarat)
- Player, Banker, Tie 베팅
- 실시간 로드맵 (Big Road, Bead Road 등)
- 자동 드로우 규칙
- Pair 베팅 옵션

#### 3. ♠️ 포커 (Texas Hold'em)
- 멀티플레이어 지원 (2-9명)
- 실시간 채팅
- 핸드 히스토리
- 토너먼트 모드

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 14+ (React)
- **UI**: Tailwind CSS, Radix UI
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
- **Cloud**: AWS (EC2, RDS, S3, CloudFront)
- **Container**: Docker, Kubernetes
- **CI/CD**: GitHub Actions, ArgoCD
- **Monitoring**: Prometheus, Grafana, Sentry
- **IaC**: Terraform

## 📁 프로젝트 구조

```
online-casino/
├── frontend/                # Next.js 프론트엔드
│   ├── src/
│   │   ├── components/      # 재사용 가능한 컴포넌트
│   │   ├── pages/          # 페이지 컴포넌트
│   │   ├── hooks/          # 커스텀 훅
│   │   ├── utils/          # 유틸리티 함수
│   │   ├── styles/         # 전역 스타일
│   │   └── assets/         # 이미지, 폰트 등
│   └── public/             # 정적 파일
│
├── backend/                # NestJS 백엔드
│   ├── src/
│   │   ├── modules/        # 기능별 모듈
│   │   ├── common/         # 공통 모듈
│   │   └── config/         # 설정 파일
│   └── test/               # 테스트
│
├── shared/                 # 프론트엔드/백엔드 공유 코드
│   ├── types/              # TypeScript 타입
│   ├── constants/          # 상수
│   └── utils/              # 공통 유틸리티
│
├── infrastructure/         # 인프라 코드
│   ├── docker/             # Dockerfile, docker-compose
│   ├── kubernetes/         # K8s 매니페스트
│   └── terraform/          # Terraform 스크립트
│
├── scripts/               # 유틸리티 스크립트
├── docs/                  # 문서
│   ├── PROJECT_PLAN.md    # 프로젝트 기획서
│   ├── ARCHITECTURE.md    # 아키텍처 문서
│   └── ROADMAP.md         # 개발 로드맵
│
└── README.md              # 이 파일
```

## 🚀 시작하기

### 사전 요구사항

- Node.js 18+
- npm/yarn/pnpm
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+
- MongoDB 6+

### 설치

1. 저장소 클론
```bash
git clone <repository-url>
cd online-casino
```

2. 의존성 설치
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. 환경 변수 설정
```bash
# Frontend
cp frontend/.env.example frontend/.env.local

# Backend
cp backend/.env.example backend/.env
```

4. 데이터베이스 설정
```bash
# Docker Compose로 로컬 DB 실행
docker-compose up -d postgres redis mongodb

# 마이그레이션 실행
cd backend
npm run migration:run
```

5. 개발 서버 실행
```bash
# Frontend (http://localhost:3000)
cd frontend
npm run dev

# Backend (http://localhost:4000)
cd backend
npm run start:dev
```

## 🧪 테스트

```bash
# Unit Tests
npm run test

# E2E Tests
npm run test:e2e

# Test Coverage
npm run test:cov
```

## 📦 배포

### Docker를 사용한 배포

```bash
# 전체 스택 빌드 및 실행
docker-compose up -d

# 프로덕션 빌드
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes 배포

```bash
# Kubernetes 클러스터에 배포
kubectl apply -f infrastructure/kubernetes/
```

## 🔒 보안

- **HTTPS/SSL**: 모든 통신 암호화
- **JWT**: 토큰 기반 인증
- **2FA**: 2단계 인증 지원
- **KYC/AML**: 신원 확인 및 자금세탁 방지
- **PCI DSS**: 결제 카드 산업 데이터 보안 표준 준수
- **Rate Limiting**: DDoS 방지
- **WAF**: 웹 애플리케이션 방화벽

## 📊 모니터링

- **Prometheus**: 메트릭 수집
- **Grafana**: 시각화 대시보드
- **Sentry**: 에러 추적
- **ELK Stack**: 로그 관리

## 🎯 로드맵

프로젝트 개발은 다음과 같은 단계로 진행됩니다:

- **Phase 0** (1개월): 준비 단계 - 법적 준비 및 기술 스택 확정
- **Phase 1** (3개월): MVP - 블랙잭 게임 및 기본 기능
- **Phase 2** (4개월): 핵심 기능 - 바카라, 포커 추가 및 결제 통합
- **Phase 3** (3개월): 고급 기능 - 라이브 딜러, 소셜 기능
- **Phase 4** (2-4개월): 최적화 및 런칭
- **Phase 5** (진행중): 지속적 개선

자세한 내용은 [ROADMAP.md](docs/ROADMAP.md)를 참조하세요.

## 📖 문서

- [프로젝트 기획서](docs/PROJECT_PLAN.md)
- [아키텍처 문서](docs/ARCHITECTURE.md)
- [개발 로드맵](docs/ROADMAP.md)

## 🤝 기여

기여를 환영합니다! 다음 단계를 따라주세요:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 코드 스타일

- ESLint와 Prettier 설정 준수
- TypeScript 사용
- 의미 있는 커밋 메시지
- 테스트 작성

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다. 상업적 사용 전 법률 자문을 받으시기 바랍니다.

## 🙏 감사의 말

- [Next.js](https://nextjs.org/) - React 프레임워크
- [NestJS](https://nestjs.com/) - Node.js 프레임워크
- [Three.js](https://threejs.org/) - 3D 라이브러리
- [Tailwind CSS](https://tailwindcss.com/) - CSS 프레임워크

## 📞 연락처

프로젝트 관련 문의: [이메일 또는 연락처]

---

**Remember**: 책임감 있는 게임(Responsible Gaming)을 위해 노력합니다. 도박 중독이 의심되면 전문가의 도움을 받으세요.
