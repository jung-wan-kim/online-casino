# 온라인 카지노 시스템 아키텍처 설계

## 1. 기술 스택

### 1.1 Frontend

#### Core Framework
- **Next.js 14+** (React 기반)
  - SSR/SSG로 SEO 최적화
  - App Router로 성능 향상
  - API Routes로 BFF(Backend for Frontend) 패턴 구현
  - Image Optimization

#### UI/UX Libraries
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Framer Motion**: 부드러운 애니메이션
- **Radix UI**: 접근성 높은 UI 컴포넌트
- **React Spring**: 물리 기반 애니메이션

#### 게임 렌더링
- **Three.js**: 3D 카드 및 칩 렌더링
- **Canvas API**: 2D 게임 테이블 렌더링
- **PixiJS**: 고성능 2D 게임 엔진 (대안)
- **WebGL**: 하드웨어 가속 그래픽

#### 실시간 통신
- **Socket.io Client**: 실시간 게임 상태 동기화
- **WebRTC**: 라이브 딜러 스트리밍
- **SWR/React Query**: 데이터 페칭 및 캐싱

#### 상태 관리
- **Zustand**: 경량 전역 상태 관리
- **Context API**: 게임별 로컬 상태
- **Jotai**: 원자적 상태 관리 (대안)

### 1.2 Backend

#### Core Framework
- **NestJS** (Node.js)
  - TypeScript 기반
  - 모듈화된 아키텍처
  - 의존성 주입
  - 마이크로서비스 지원

#### Alternative Frameworks (선택)
- **Express.js**: 경량화된 옵션
- **Fastify**: 고성능 옵션
- **Go (Gin/Fiber)**: 극한의 성능이 필요한 경우

#### 실시간 통신
- **Socket.io**: WebSocket 서버
- **Redis Pub/Sub**: 마이크로서비스 간 이벤트 전파

#### API
- **GraphQL** (Apollo Server): 유연한 데이터 쿼리
- **REST API**: 레거시 시스템 통합용
- **gRPC**: 내부 마이크로서비스 간 통신

### 1.3 Database

#### 주 데이터베이스
- **PostgreSQL 15+**
  - 사용자 정보
  - 거래 내역
  - 게임 설정
  - ACID 보장

#### 캐시 & 세션
- **Redis**
  - 세션 저장소
  - 실시간 게임 상태
  - 리더보드
  - Rate Limiting

#### 게임 히스토리
- **MongoDB**
  - 게임 로그
  - 베팅 히스토리
  - 유연한 스키마

#### 데이터 웨어하우스
- **ClickHouse**
  - 대용량 분석
  - 실시간 통계
  - 사기 탐지

### 1.4 인프라 & DevOps

#### 클라우드 플랫폼
- **AWS** (Primary)
  - EC2/ECS: 컴퓨팅
  - RDS: PostgreSQL 관리
  - ElastiCache: Redis 관리
  - S3: 정적 자산
  - CloudFront: CDN
  - Route 53: DNS

#### 컨테이너 & 오케스트레이션
- **Docker**: 컨테이너화
- **Kubernetes**: 오케스트레이션
- **Helm**: 패키지 관리

#### CI/CD
- **GitHub Actions**: 자동화된 빌드/배포
- **ArgoCD**: GitOps 기반 배포
- **Terraform**: Infrastructure as Code

#### 모니터링 & 로깅
- **Prometheus**: 메트릭 수집
- **Grafana**: 시각화 대시보드
- **ELK Stack**: 로그 관리 (Elasticsearch, Logstash, Kibana)
- **Sentry**: 에러 추적
- **Datadog**: 통합 모니터링 (대안)

### 1.5 보안

#### 인증 & 인가
- **JWT**: 토큰 기반 인증
- **OAuth 2.0**: 소셜 로그인
- **Passport.js**: 인증 미들웨어

#### 암호화
- **bcrypt**: 비밀번호 해싱
- **AES-256**: 데이터 암호화
- **SSL/TLS**: 전송 계층 암호화

#### 보안 도구
- **Helmet.js**: HTTP 헤더 보안
- **CSRF Token**: CSRF 방지
- **Rate Limiter**: DDoS 방지
- **WAF**: Web Application Firewall

### 1.6 결제 시스템

#### 결제 게이트웨이
- **Stripe**: 신용카드 결제
- **PayPal**: 전자지갑
- **암호화폐**: Bitcoin, USDT 등

#### KYC/AML
- **Onfido**: 신원 확인
- **Jumio**: 문서 인증

### 1.7 게임 엔진

#### RNG (Random Number Generator)
- **Crypto.randomBytes**: Node.js 기본 RNG
- **Provably Fair**: 검증 가능한 랜덤
- **외부 RNG 서비스**: 제3자 인증

#### 게임 로직
- **게임별 마이크로서비스**
  - Blackjack Service
  - Baccarat Service
  - Poker Service

## 2. 시스템 아키텍처

### 2.1 전체 구조 (Microservices Architecture)

```
┌─────────────────────────────────────────────────────────┐
│                    Client Layer                         │
│  (Next.js, React, Three.js, Socket.io Client)          │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                   CDN & Load Balancer                   │
│              (CloudFront, ALB/NLB)                      │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                 API Gateway Layer                       │
│         (Kong, AWS API Gateway, Nginx)                  │
└─────┬──────────────┬──────────────┬─────────────────────┘
      │              │              │
┌─────▼─────┐  ┌────▼─────┐  ┌─────▼──────┐
│   Auth    │  │  User    │  │   Game     │
│  Service  │  │ Service  │  │  Services  │
└───────────┘  └──────────┘  └────────────┘
      │              │              │
┌─────▼──────────────▼──────────────▼─────────────────────┐
│              Database Layer                              │
│  PostgreSQL, MongoDB, Redis, ClickHouse                 │
└──────────────────────────────────────────────────────────┘
```

### 2.2 마이크로서비스 구성

#### 1. Authentication Service
- 사용자 인증
- JWT 토큰 발급/검증
- 소셜 로그인
- 2FA 관리

#### 2. User Service
- 사용자 프로필 관리
- KYC 인증
- 레벨 시스템
- VIP 관리

#### 3. Wallet Service
- 잔액 관리
- 입금/출금 처리
- 거래 히스토리
- 칩 교환

#### 4. Game Services
- **Blackjack Service**
- **Baccarat Service**
- **Poker Service**
- 게임 로직 및 상태 관리
- RNG 통합

#### 5. Live Dealer Service
- 라이브 스트리밍 관리
- 딜러 스케줄링
- 채팅 관리

#### 6. Analytics Service
- 실시간 통계
- 사용자 행동 분석
- 사기 탐지
- RTP 계산

#### 7. Notification Service
- 이메일 발송
- SMS 발송
- 푸시 알림
- 인앱 알림

#### 8. Promotion Service
- 보너스 관리
- 프로모션 캠페인
- 토너먼트 관리

### 2.3 데이터 흐름

#### 게임 플레이 흐름 (블랙잭 예시)

```
1. 클라이언트 → API Gateway → Game Service
   - 베팅 요청 (amount, table_id)

2. Game Service → Wallet Service
   - 잔액 확인 및 차감

3. Game Service (내부)
   - RNG로 카드 생성
   - 게임 상태 업데이트 (Redis)
   - 결과 계산

4. Game Service → WebSocket → Client
   - 실시간 게임 상태 전송
   - 카드 애니메이션 트리거

5. 게임 종료 시
   - Game Service → Wallet Service: 승리 금액 지급
   - Game Service → Analytics Service: 통계 업데이트
   - Game Service → MongoDB: 게임 히스토리 저장
```

### 2.4 WebSocket 아키텍처

```
┌──────────────┐
│   Client 1   │─────┐
└──────────────┘     │
                     ▼
┌──────────────┐  ┌──────────────────┐
│   Client 2   │─▶│  Socket.io       │
└──────────────┘  │  Server Cluster  │
                  │  (with Redis)    │
┌──────────────┐  └─────────┬────────┘
│   Client N   │─────────────┘
└──────────────┘             │
                             ▼
                  ┌─────────────────────┐
                  │   Game Service      │
                  │   (Event Emitter)   │
                  └─────────────────────┘
```

### 2.5 데이터베이스 스키마 설계

#### PostgreSQL - Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  kyc_status VARCHAR(20) DEFAULT 'pending',
  vip_level INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### PostgreSQL - Wallets Table
```sql
CREATE TABLE wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  balance DECIMAL(20, 2) DEFAULT 0,
  currency VARCHAR(3) DEFAULT 'USD',
  locked_balance DECIMAL(20, 2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### PostgreSQL - Transactions Table
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  wallet_id UUID REFERENCES wallets(id),
  type VARCHAR(20) NOT NULL, -- deposit, withdraw, bet, win
  amount DECIMAL(20, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### MongoDB - Game History
```javascript
{
  _id: ObjectId,
  game_type: "blackjack",
  user_id: UUID,
  table_id: String,
  bet_amount: Number,
  result: "win|lose|push",
  payout: Number,
  cards: {
    player: [String],
    dealer: [String]
  },
  actions: [String], // ["hit", "stand"]
  rng_seed: String,
  timestamp: ISODate
}
```

## 3. 보안 아키텍처

### 3.1 계층별 보안

```
┌─────────────────────────────────────────┐
│  Layer 1: Network Security              │
│  - WAF, DDoS Protection, Firewall       │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│  Layer 2: Application Security          │
│  - HTTPS, JWT, CSRF Token, Helmet.js    │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│  Layer 3: Data Security                 │
│  - Encryption at Rest, AES-256          │
│  - Database Access Control              │
└─────────────────────────────────────────┘
```

### 3.2 인증 흐름

```
1. Login Request
   ↓
2. Validate Credentials
   ↓
3. Generate JWT Token (Access + Refresh)
   ↓
4. Store Refresh Token in Redis
   ↓
5. Return Tokens to Client
   ↓
6. Client Stores in HttpOnly Cookie
   ↓
7. Protected Requests with JWT
   ↓
8. Token Verification Middleware
   ↓
9. Access Granted
```

### 3.3 데이터 암호화

- **전송 중 (In Transit)**: TLS 1.3
- **저장 중 (At Rest)**: AES-256
- **민감 정보**: 별도 암호화 키로 추가 보호

## 4. 확장성 및 성능

### 4.1 수평 확장 (Horizontal Scaling)

- **Stateless Services**: 모든 서비스 무상태 설계
- **Load Balancing**: Round Robin, Least Connection
- **Auto Scaling**: CPU/메모리 기반 자동 확장

### 4.2 캐싱 전략

#### 계층별 캐싱
1. **Browser Cache**: 정적 자산 (이미지, CSS, JS)
2. **CDN Cache**: 전역 콘텐츠 배포
3. **Application Cache**: Redis (세션, 게임 상태)
4. **Database Cache**: Query Result Caching

#### Redis 캐싱 패턴
- **Cache-Aside**: 읽기 중심
- **Write-Through**: 쓰기 중심
- **TTL**: 자동 만료

### 4.3 Database 최적화

- **Indexing**: 자주 쿼리되는 컬럼
- **Partitioning**: 날짜 기반 파티셔닝
- **Replication**: Read Replica로 읽기 분산
- **Connection Pooling**: 연결 재사용

### 4.4 성능 목표

| 항목 | 목표 |
|------|------|
| 페이지 로딩 | < 2초 |
| API 응답 시간 | < 100ms |
| WebSocket 지연시간 | < 50ms |
| 게임 애니메이션 | 60fps |
| 동시 접속자 | 10,000+ |
| 데이터베이스 쿼리 | < 50ms |

## 5. 모니터링 및 알림

### 5.1 메트릭 수집

- **System Metrics**: CPU, Memory, Disk, Network
- **Application Metrics**: Request Rate, Error Rate, Response Time
- **Business Metrics**: Active Users, Bet Amount, Revenue

### 5.2 알림 규칙

- **Critical**: 서비스 다운, DB 연결 실패
- **Warning**: 높은 에러율, 느린 응답
- **Info**: 배포 완료, 새 사용자 가입

### 5.3 대시보드

- **운영 대시보드**: 시스템 상태, 에러 로그
- **비즈니스 대시보드**: 일일 수익, 사용자 통계
- **게임 대시보드**: 게임별 통계, RTP 추적

## 6. 재해 복구 (Disaster Recovery)

### 6.1 백업 전략

- **Database**: 일일 자동 백업, Point-in-Time Recovery
- **Application**: Git 기반 버전 관리
- **Configuration**: Infrastructure as Code (Terraform)

### 6.2 고가용성 (High Availability)

- **Multi-AZ Deployment**: 여러 가용 영역에 배포
- **Failover**: 자동 장애 조치
- **Health Check**: 지속적인 헬스 체크

### 6.3 RTO/RPO 목표

- **RTO** (Recovery Time Objective): 1시간
- **RPO** (Recovery Point Objective): 5분

## 7. 배포 전략

### 7.1 Blue-Green Deployment

- 무중단 배포
- 즉시 롤백 가능
- 트래픽 전환

### 7.2 Canary Deployment

- 점진적 배포
- 일부 사용자에게 먼저 배포
- 문제 발생 시 롤백

### 7.3 배포 파이프라인

```
Code Push → GitHub
    ↓
Run Tests (Unit, Integration)
    ↓
Build Docker Image
    ↓
Push to Container Registry
    ↓
Deploy to Staging
    ↓
Run E2E Tests
    ↓
Manual Approval
    ↓
Deploy to Production (Canary)
    ↓
Monitor Metrics
    ↓
Full Rollout or Rollback
```

## 8. 개발 환경

### 8.1 로컬 개발

```bash
# Docker Compose로 전체 스택 실행
docker-compose up -d

# 서비스별 개발
npm run dev:frontend  # Next.js
npm run dev:backend   # NestJS
npm run dev:game      # Game Service
```

### 8.2 환경 분리

- **Development**: 로컬 개발
- **Staging**: 프로덕션과 동일한 환경
- **Production**: 실제 서비스

### 8.3 개발 도구

- **VS Code**: IDE
- **Postman**: API 테스트
- **Redis CLI**: 캐시 디버깅
- **pgAdmin**: PostgreSQL 관리
- **MongoDB Compass**: MongoDB 관리

## 9. 테스트 전략

### 9.1 테스트 유형

- **Unit Test**: Jest, Vitest
- **Integration Test**: Supertest
- **E2E Test**: Playwright, Cypress
- **Load Test**: k6, Artillery
- **Security Test**: OWASP ZAP

### 9.2 테스트 커버리지 목표

- **Backend**: 80% 이상
- **Frontend**: 70% 이상
- **Critical Path**: 100%

## 10. 코드 품질

### 10.1 코드 스타일

- **ESLint**: JavaScript/TypeScript 린팅
- **Prettier**: 코드 포맷팅
- **Husky**: Pre-commit Hooks

### 10.2 코드 리뷰

- Pull Request 필수
- 최소 1명의 승인 필요
- 자동화된 체크 통과

### 10.3 문서화

- **API 문서**: Swagger/OpenAPI
- **코드 문서**: JSDoc, TSDoc
- **아키텍처 문서**: 이 문서!
