# 기여 가이드

온라인 카지노 프로젝트에 기여해 주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 행동 강령

이 프로젝트에 참여하는 모든 사람은 서로를 존중하고 건설적인 대화를 해야 합니다.

## 기여 방법

### 1. 이슈 생성

버그를 발견했거나 새로운 기능을 제안하고 싶다면:

1. [Issues](../../issues) 페이지로 이동
2. 기존 이슈를 검색하여 중복 확인
3. 새 이슈 생성 (템플릿 사용)
4. 명확하고 상세한 설명 작성

### 2. Pull Request

코드 기여를 원한다면:

1. **Fork**: 프로젝트를 Fork
2. **Branch**: Feature branch 생성
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Code**: 코드 작성 및 테스트
4. **Commit**: 의미 있는 커밋 메시지 작성
5. **Push**: Fork된 저장소에 Push
6. **PR**: Pull Request 생성

## 개발 환경 설정

```bash
# 저장소 클론
git clone <your-fork-url>
cd online-casino

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 테스트 실행
npm run test
```

## 코드 스타일

### TypeScript

- TypeScript 사용 필수
- 명시적 타입 선언
- `any` 타입 지양

### 명명 규칙

- **변수/함수**: camelCase
- **클래스/컴포넌트**: PascalCase
- **상수**: UPPER_SNAKE_CASE
- **파일명**: kebab-case

### ESLint & Prettier

```bash
# Lint 체크
npm run lint

# 자동 수정
npm run lint:fix

# Format
npm run format
```

## 커밋 메시지

커밋 메시지는 다음 형식을 따릅니다:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅 (기능 변경 없음)
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드, 설정 변경

### 예시

```
feat(blackjack): add double down feature

Implement double down functionality for blackjack game
- Add double down button to game UI
- Update game logic to handle double down
- Add tests for double down scenarios

Closes #123
```

## 테스트

모든 새로운 기능과 버그 수정에는 테스트가 포함되어야 합니다.

```bash
# Unit Tests
npm run test

# E2E Tests
npm run test:e2e

# Coverage
npm run test:cov
```

### 테스트 작성 가이드

- 각 기능에 대한 단위 테스트 작성
- Edge case 테스트
- 테스트 커버리지 80% 이상 유지

## Pull Request 체크리스트

PR을 제출하기 전에 다음을 확인하세요:

- [ ] 코드가 ESLint/Prettier 규칙을 따름
- [ ] 모든 테스트가 통과
- [ ] 새로운 기능에 대한 테스트 추가
- [ ] 문서 업데이트 (필요한 경우)
- [ ] 커밋 메시지가 컨벤션을 따름
- [ ] PR 설명이 명확함

## 리뷰 프로세스

1. PR 제출 후 자동 CI/CD 체크 대기
2. 최소 1명의 승인 필요
3. 리뷰어의 피드백 반영
4. 승인 후 merge

## 브랜치 전략

- `main`: 프로덕션 브랜치
- `develop`: 개발 브랜치
- `feature/*`: 새로운 기능
- `fix/*`: 버그 수정
- `hotfix/*`: 긴급 수정

## 질문이 있나요?

- [Discussions](../../discussions)에서 질문
- [Issues](../../issues)에서 버그 리포트
- 이메일: [이메일 주소]

감사합니다! 🎰
