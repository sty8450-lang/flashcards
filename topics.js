const topics = [
  {
    "domain": "AI",
    "topic": "검색 증강 생성 (RAG)",
    "mnemonic": "파·청·임·벡 / 검·리·프·생",
    "definition": "환각 완화 위해 외부 벡터DB 문서를 결합하는 기술",
    "keywords": [
      "환각 현상 완화",
      "청킹 & 임베딩",
      "벡터 DB",
      "하이브리드 검색",
      "리랭커",
      "두음: 파청임벡 검리프생"
    ],
    "diagram": "[사전 색인] 원본 문서 → 파싱/청킹(분할) → 임베딩(벡터화) → [벡터 DB 저장]\n[실시간 생성] 질문 입력 → 유사문서 검색/리랭킹 → [프롬프트+지식 결합] → LLM 답변 생성",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "외부 신뢰 지식저장소(벡터 DB)에서 근거 문서를 검색·증강하여 LLM의 환각(거짓말)을 줄이는 기술"
      },
      {
        "major": "색인 단계",
        "minor": "파싱·청킹",
        "desc": "PDF·문서를 의미 단위의 작은 조각(Chunk)으로 분할하여 검색 정확도 확보"
      },
      {
        "major": "색인 단계",
        "minor": "임베딩·벡터DB",
        "desc": "텍스트를 고차원 숫자 벡터로 변환 후 유사도 검색이 가능한 벡터 DB에 저장"
      },
      {
        "major": "검색·생성",
        "minor": "하이브리드 검색",
        "desc": "키워드 검색(BM25)과 의미 기반 벡터 검색(Dense)을 결합해 검색 누락 방지"
      },
      {
        "major": "검색·생성",
        "minor": "리랭커 (Re-rank)",
        "desc": "검색된 후보 문서들의 문맥 적합도를 재계산하여 최상위 근거만 프롬프트에 주입"
      }
    ]
  },
  {
    "domain": "AI",
    "topic": "트랜스포머 (Transformer)",
    "mnemonic": "위·셀·피·인·디",
    "definition": "장기 의존성 해결 위해 어텐션으로 병렬 처리하는 신경망",
    "keywords": [
      "병렬 연산 처리",
      "위치 인코딩 (Positional Encoding)",
      "인코더(BERT) 구조",
      "디코더(GPT) 구조",
      "장기 의존성 해결"
    ],
    "diagram": "입력 문장 → [단어 임베딩 + 위치 인코딩]\n  ↓\n[인코더 블록 × N] (양방향 문맥 이해: BERT)\n  ↓\n[디코더 블록 × N] (자기회귀 다음 토큰 생성: GPT) → 확률 출력(Softmax)",
    "tableRows": [
      {
        "major": "등장 배경",
        "minor": "RNN 한계 극복",
        "desc": "순차 처리로 인한 학습 속도 저하와 장기 의존성(앞부분 망각) 문제를 병렬 처리 구조로 해결"
      },
      {
        "major": "입력 처리",
        "minor": "위치 인코딩",
        "desc": "단어를 순차적이 아닌 한꺼번에 입력받기 때문에 단어의 순서(위치) 값을 사인·코사인 벡터로 더해줌"
      },
      {
        "major": "발전 구조",
        "minor": "인코더 계열 (BERT)",
        "desc": "양방향 문맥 이해에 강점 (문서 분류, 개체명 인식, 질의응답)"
      },
      {
        "major": "발전 구조",
        "minor": "디코더 계열 (GPT)",
        "desc": "이전 토큰을 바탕으로 다음 단어 예측 및 생성에 강점 (초거대 생성형 AI)"
      }
    ]
  },
  {
    "domain": "AI",
    "topic": "어텐션 메커니즘 (Self-Attention)",
    "mnemonic": "질·키·값 (Q·K·V)",
    "definition": "문맥 파악 위해 질의·키·값 내적으로 중요도 구한 기법",
    "keywords": [
      "Query · Key · Value (Q·K·V)",
      "스케일드 닷 프로덕트",
      "멀티 헤드 어텐션",
      "마스크드 어텐션"
    ],
    "diagram": "입력 벡터 → [Q(질의) · K(키) · V(값) 가중치 투영]\n  ↓\n유사도 내적(Q·K^T) → 스케일링(÷√d_k) → Softmax 가중치 → V 결합 → [멀티 헤드 병합]",
    "tableRows": [
      {
        "major": "핵심 원리",
        "minor": "셀프 어텐션",
        "desc": "문장 내 단어들 간의 질의(Q)·키(K)·값(V) 내적을 통해 문맥상 단어 간 연관도와 중요도를 계산"
      },
      {
        "major": "연산 과정",
        "minor": "Scaled Dot-Product",
        "desc": "Q와 K의 내적값이 커져 기울기가 소실되는 것을 막기 위해 차원수의 제곱근(√d_k)으로 나누어 정규화"
      },
      {
        "major": "확장 구조",
        "minor": "멀티 헤드 어텐션",
        "desc": "어텐션을 여러 개의 헤드로 병렬 수행하여 문법·의미·지시대명사 등 다양한 관점의 문맥 정보를 동시 포착"
      },
      {
        "major": "제어 기법",
        "minor": "마스크드 어텐션",
        "desc": "디코더 학습 시 미래 시점의 토큰을 미리 컨닝하지 못하도록 음의 무한대(-∞) 마스킹 처리"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "트랜잭션 (Transaction & ACID)",
    "mnemonic": "원·일·고·영 (ACID)",
    "definition": "데이터 무결성 보장 위해 4대 특성 지키는 작업 단위",
    "keywords": [
      "원자성(Atomicity) · 일관성(Consistency)",
      "고립성(Isolation) · 영속성(Durability)",
      "All or Nothing (COMMIT / ROLLBACK)"
    ],
    "diagram": "<img src=\"db_tx_acid.png\" alt=\"트랜잭션 ACID 개념도\"><img src=\"db_tx_state.png\" alt=\"트랜잭션 상태전이도\">",
    "tableRows": [
      {
        "major": "핵심 정의",
        "minor": "논리적 작업 단위",
        "desc": "여러 데이터 연산을 하나의 논리적 작업으로 묶어 전부 성공 시 확정(Commit)하고 실패 시 전부 취소(Rollback)하는 처리 단위"
      },
      {
        "major": "ACID 특성\n(원·일·고·영)",
        "minor": "원자성 (Atomicity)",
        "desc": "트랜잭션 연산이 모두 반영되거나 모두 취소되어야 하는 특성 (구현: Undo 로그, Rollback·회복 처리)"
      },
      {
        "major": "",
        "minor": "일관성 (Consistency)",
        "desc": "트랜잭션 실행 전후에 무결성 제약조건과 업무 규칙을 만족하는 상태로 전이 (구현: 무결성 제약조건, 트리거)"
      },
      {
        "major": "",
        "minor": "고립성 (Isolation)",
        "desc": "동시 실행 중인 트랜잭션들이 선택한 격리수준에 따라 서로 간섭하지 않도록 제어 (구현: 잠금, MVCC, 충돌 검증)"
      },
      {
        "major": "",
        "minor": "영속성 (Durability)",
        "desc": "성공적으로 커밋된 결과는 시스템 장애 발생 후에도 영구 보존 (구현: WAL 로그 선기록, 재시작 REDO 회복)"
      },
      {
        "major": "상태 전이",
        "minor": "활동 (Active)",
        "desc": "트랜잭션이 시작되어 연산을 정상적으로 실행 중인 초기 상태"
      },
      {
        "major": "",
        "minor": "부분 완료 (Partially Committed)",
        "desc": "마지막 연산까지 실행을 마치고 최종 COMMIT 기록만을 남겨둔 상태"
      },
      {
        "major": "",
        "minor": "완료 (Committed)",
        "desc": "모든 변경 사항이 영구 반영되고 트랜잭션이 성공적으로 종료된 상태"
      },
      {
        "major": "",
        "minor": "실패 (Failed)",
        "desc": "논리적 오류나 시스템 장애로 인해 트랜잭션의 정상 실행이 더 이상 불가능한 중단 상태"
      },
      {
        "major": "",
        "minor": "철회 (Aborted)",
        "desc": "트랜잭션이 실패하여 Rollback 연산을 통해 시작 이전 상태로 완전히 복원된 상태"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "트랜잭션 격리수준 (Isolation Level)",
    "mnemonic": "RRRS / DNP (부·비·가)",
    "definition": "동시성과 일관성 균형 위해 트랜잭션 간섭 나눈 4단계",
    "keywords": [
      "Read Uncommitted · Read Committed",
      "Repeatable Read · Serializable (RRRS)",
      "Dirty Read · Non-repeatable · Phantom (DNP)"
    ],
    "diagram": "<img src=\"db_isolation_graph.png\" alt=\"트랜잭션 격리수준 개념도\"><img src=\"db_isolation_rel.png\" alt=\"격리수준과 이상현상 관계\">",
    "tableRows": [
      {
        "major": "낮을 때 문제점\n(DNP / 부·비·가)",
        "minor": "Dirty Read (부정 읽기)",
        "desc": "다른 트랜잭션의 미커밋(Uncommitted) 변경 값을 읽는 현상"
      },
      {
        "major": "",
        "minor": "Non-repeatable Read (비반복 읽기)",
        "desc": "한 트랜잭션 내 같은 행을 다시 읽을 때 타 트랜잭션의 커밋으로 값이 달라지는 현상"
      },
      {
        "major": "",
        "minor": "Phantom Read (가상 읽기)",
        "desc": "같은 조건으로 재조회할 때 타 트랜잭션의 삽입/삭제로 결과 행 집합이 달라지는 현상"
      },
      {
        "major": "격리수준 4단계\n(RRRS)",
        "minor": "0. Read Uncommitted",
        "desc": "미커밋 변경 읽기 허용 (Dirty · Non-repeatable · Phantom 모두 발생 가능)"
      },
      {
        "major": "",
        "minor": "1. Read Committed",
        "desc": "커밋된 데이터만 읽기 허용 → Dirty Read 방지 (Non-repeatable · Phantom 발생 가능)"
      },
      {
        "major": "",
        "minor": "2. Repeatable Read",
        "desc": "트랜잭션 내 동일 행 재조회 값 보장 → Dirty · Non-repeatable 방지 (표준상 Phantom 발생 가능)"
      },
      {
        "major": "",
        "minor": "3. Serializable",
        "desc": "직렬 실행과 동등한 격리 보장 → 모든 읽기 이상 및 직렬화 이상(Write Skew 등) 완벽 방지"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "병행제어 (Concurrency Control)",
    "mnemonic": "갱·현·모·연 / 락·2·낙·타·다 / 읽·검·쓰",
    "definition": "동시 트랜잭션 충돌 막아 데이터 일관성 보장하는 기법",
    "keywords": [
      "부재 시 문제: 갱신손실 · 현황파악오류 · 모순성 · 연쇄복귀",
      "기법: 락킹 · 2PL · 낙관적검증 · 타임스탬프 · MVCC",
      "낙관적 검증 절차: 읽기(Read) → 검증(Validate) → 쓰기(Write)"
    ],
    "diagram": "<img src=\"db_cc_def.png\" alt=\"병행제어 개념도\"><img src=\"db_cc_problems.png\" alt=\"병행제어 미적용 문제점\"><img src=\"db_cc_methods.png\" alt=\"병행제어 기법\">",
    "tableRows": [
      {
        "major": "부재 시 문제점\n(갱·현·모·연)",
        "minor": "갱신 손실 (Lost Update)",
        "desc": "두 트랜잭션이 동시에 같은 데이터를 갱신할 때 이전 갱신을 덮어써 변경이 소실되는 현상"
      },
      {
        "major": "",
        "minor": "현황파악 오류 (Dirty Read)",
        "desc": "롤백될 수 있는 타 트랜잭션의 미확정 변경값을 읽는 현상"
      },
      {
        "major": "",
        "minor": "모순성 (Inconsistent Analysis)",
        "desc": "여러 데이터를 서로 다른 시점의 불일치 상태로 읽어 집계·분석 결과가 왜곡되는 현상"
      },
      {
        "major": "",
        "minor": "연쇄 복귀 (Cascading Rollback)",
        "desc": "취소된 트랜잭션의 미커밋 값을 읽은 다른 트랜잭션들까지 연쇄적으로 롤백되는 현상"
      },
      {
        "major": "병행제어 기법\n(락·2·낙·타·다)",
        "minor": "락킹 (Locking)",
        "desc": "공유 잠금(S-Lock)과 배타 잠금(X-Lock)의 호환성을 이용해 데이터 접근을 직렬화하고 잠금 단위에 따라 동시성 조절"
      },
      {
        "major": "",
        "minor": "2단계 잠금 규약 (2PL)",
        "desc": "잠금 획득만 허용하는 확장 단계와 해제만 허용하는 축소 단계를 분리하여 충돌 직렬가능성 보장"
      },
      {
        "major": "",
        "minor": "낙관적 검증 (읽·검·쓰)",
        "desc": "잠금 없이 ①읽기(개인 작업공간 수정) → ②검증(Validation) → ③쓰기(Write) 수행, 충돌 시 재시작"
      },
      {
        "major": "",
        "minor": "타임스탬프 오더링",
        "desc": "트랜잭션 시작 시각(Timestamp) 순서에 따라 충돌 연산의 실행 순서를 직렬화 (교착상태 없음)"
      },
      {
        "major": "",
        "minor": "다중버전 제어 (MVCC)",
        "desc": "변경 전후 버전 스냅샷을 유지해 읽기와 쓰기 간 상호 차단을 제거"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "2단계 잠금 규약 (2PL: Two-Phase Locking)",
    "mnemonic": "확·축 / Ba·St·Ri·Co",
    "definition": "충돌 직렬가능성 보장 위해 잠금 확장·축소 분리 기법",
    "keywords": [
      "확장 단계(잠금 획득만) → 잠금점 → 축소 단계(잠금 해제만)",
      "Basic · Strict · Rigorous · Conservative 2PL",
      "충돌 직렬가능성 보장 & 연쇄 복귀/교착 방지"
    ],
    "diagram": "db_2pl.png",
    "tableRows": [
      {
        "major": "동작 단계\n(확·축)",
        "minor": "확장 단계 (Growing Phase)",
        "desc": "트랜잭션이 새로운 잠금(Lock)을 획득할 수만 있고, 기존 잠금 해제는 금지되는 단계"
      },
      {
        "major": "",
        "minor": "축소 단계 (Shrinking Phase)",
        "desc": "잠금점(Lock Point) 이후 보유 잠금을 해제할 수만 있고, 새로운 잠금 획득은 절대 금지되는 단계"
      },
      {
        "major": "4대 변형 기법\n(Ba·St·Ri·Co)",
        "minor": "Basic 2PL",
        "desc": "확장·축소 단계 분리 기본형 → 충돌 직렬가능성 보장, 단 교착상태(Deadlock) 및 연쇄 복귀 가능"
      },
      {
        "major": "",
        "minor": "Strict 2PL",
        "desc": "배타 잠금(X-Lock)을 COMMIT/ABORT 시점까지 유지 → 연쇄 취소(Cascading Rollback) 완벽 방지 (상용 DBMS 표준)"
      },
      {
        "major": "",
        "minor": "Rigorous 2PL",
        "desc": "공유(S)·배타(X) 모든 잠금을 COMMIT/ABORT까지 유지 → 커밋 순서 그대로 직렬화 보장"
      },
      {
        "major": "",
        "minor": "Conservative (Static) 2PL",
        "desc": "트랜잭션 시작 전에 필요한 모든 잠금을 일괄 확보 → 교착상태(Deadlock) 원천 방지"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "다중버전 동시성 제어 (MVCC)",
    "mnemonic": "버·스·가 (버전·스냅샷·가시성)",
    "definition": "읽기·쓰기 잠금 경합 줄이려 다중 버전 조회하는 기법",
    "keywords": [
      "버전 · 스냅샷 · 가시성",
      "읽기·쓰기 상호 차단(Blocking) 해소",
      "오래된 버전 정리 (Vacuum / Undo Purge)"
    ],
    "diagram": "db_mvcc.png",
    "tableRows": [
      {
        "major": "핵심 원리\n(버·스·가)",
        "minor": "다중 버전 (Multi-Version)",
        "desc": "데이터 변경 시 제자리 덮어쓰기 대신 변경 전후의 버전을 Undo 세그먼트나 별도 튜플로 함께 유지"
      },
      {
        "major": "",
        "minor": "스냅샷 (Snapshot)",
        "desc": "트랜잭션 또는 질의 시작 시점의 데이터베이스 기준 시점을 포착하여 일관된 읽기 기준점 설정"
      },
      {
        "major": "",
        "minor": "가시성 판단 (Visibility)",
        "desc": "트랜잭션 ID(XID)나 SCN과 격리수준 규칙을 대조하여 현재 스냅샷에서 볼 수 있는 버전만 선택 반환"
      },
      {
        "major": "동시성 및 운영",
        "minor": "읽기·쓰기 비차단",
        "desc": "일반 읽기(SELECT)는 잠금을 걸지 않아 쓰기 작업과 상호 차단(Blocking)되지 않음"
      },
      {
        "major": "",
        "minor": "쓰기·쓰기 충돌 제어",
        "desc": "동일 행에 대한 동시 쓰기(갱신) 충돌은 여전히 행 잠금(Row Lock) 또는 낙관적 검증으로 제어"
      },
      {
        "major": "",
        "minor": "구버전 정리 (Vacuum/Purge)",
        "desc": "더 이상 어떤 활성 스냅샷에서도 참조하지 않는 오래된 버전 공간을 회수하여 저장공간 팽창 방지"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터베이스 회복 기법 (DB Recovery & ARIES)",
    "mnemonic": "로·체·그 / STEAL·NO-FORCE / 분·재·취",
    "definition": "장애 후 원자성·영속성 복원 위해 로그 기반 복구 기법",
    "keywords": [
      "로그 · 체크포인트 · 그림자페이지 (로체그)",
      "STEAL(→UNDO) · NO-FORCE(→REDO)",
      "WAL(로그 선기록) & ARIES (Analysis → Redo → Undo)"
    ],
    "diagram": "<img src=\"db_recovery_def.png\" alt=\"데이터베이스 회복 개념도\"><img src=\"db_recovery_ckpt.png\" alt=\"체크포인트 회복 개념도\">",
    "tableRows": [
      {
        "major": "버퍼 관리 정책",
        "minor": "STEAL 정책",
        "desc": "미커밋 트랜잭션이 수정한 버퍼 페이지도 디스크에 기록 허용 → 원자성 보장 위해 UNDO 필수"
      },
      {
        "major": "",
        "minor": "NO-STEAL 정책",
        "desc": "미커밋 변경 페이지의 디스크 기록을 금지 → UNDO는 불필요하나 메모리 버퍼 제약 큼"
      },
      {
        "major": "",
        "minor": "FORCE 정책",
        "desc": "커밋 시 변경된 모든 페이지를 즉시 디스크에 강제 반영 → REDO 불필요하나 랜덤 I/O 부담 극심"
      },
      {
        "major": "",
        "minor": "NO-FORCE 정책",
        "desc": "커밋 시 로그만 기록하고 데이터 페이지 디스크 반영은 유예 허용 → 영속성 보장 위해 REDO 필수"
      },
      {
        "major": "회복 3대 기법\n(로·체·그)",
        "minor": "로그 기반 회복 (WAL)",
        "desc": "데이터 페이지 기록 전에 변경 로그를 먼저 안정 저장소에 영구 기록(WAL: Write-Ahead Logging)"
      },
      {
        "major": "",
        "minor": "체크포인트 (Checkpoint)",
        "desc": "주기적으로 메모리 변경분을 디스크에 동기화하고 로그에 표시하여 장애 회복 시 탐색·재수행 범위를 단축"
      },
      {
        "major": "",
        "minor": "그림자 페이지 (Shadow Paging)",
        "desc": "원본(그림자) 페이지를 보존하고 새 페이지에 기록 후 포인터만 전환하여 로그 없이 원자성 지원"
      },
      {
        "major": "ARIES 알고리즘\n(분·재·취)",
        "minor": "1단계: Analysis (분석)",
        "desc": "체크포인트부터 로그를 스캔해 회복 시작점(Smallest RecLSN), 오염 페이지(DPT), 활성 트랜잭션(ATT) 파악"
      },
      {
        "major": "",
        "minor": "2단계: Redo (재현)",
        "desc": "미완료 거래를 포함해 기록된 모든 변경 이력을 그대로 재수행(Repeating History)하여 장애 직전 상태 복원"
      },
      {
        "major": "",
        "minor": "3단계: Undo (취소)",
        "desc": "장애 시점 미완료(Loser) 거래들의 변경을 로그 역순으로 취소하고 보상 로그(CLR)를 기록"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터베이스 무결성 제약조건",
    "mnemonic": "개·키·도·널·참·사 / 선·절·트",
    "definition": "데이터 정확성과 일관성 유지 위해 규칙 강제하는 조건",
    "keywords": [
      "개체 · 키 · 도메인 · NULL · 참조 · 사용자정의 (개키도널참사)",
      "선언적 제약 · 절차적 처리 · 트랜잭션 관리 (선절트)",
      "참조무결성 옵션: RESTRICT · CASCADE · SET NULL · SET DEFAULT"
    ],
    "diagram": "<img src=\"db_integrity.png\" alt=\"무결성 제약조건 개념도\"><img src=\"db_ref_integrity.png\" alt=\"참조 무결성 개념도\">",
    "tableRows": [
      {
        "major": "6대 무결성 제약\n(개·키·도·널·참·사)",
        "minor": "개체 무결성 (Entity)",
        "desc": "기본키(PRIMARY KEY)를 구성하는 속성은 유일해야 하며 NULL을 가질 수 없음"
      },
      {
        "major": "",
        "minor": "키 무결성 (Key)",
        "desc": "릴레이션 내 지정한 후보키/대체키 속성 집합의 중복 금지 (UNIQUE)"
      },
      {
        "major": "",
        "minor": "도메인 무결성 (Domain)",
        "desc": "속성값이 정의된 자료형·허용 범위·형식을 충족 (데이터 타입, CHECK)"
      },
      {
        "major": "",
        "minor": "NULL 무결성",
        "desc": "필수 입력 속성의 NULL 값 허용 금지 (NOT NULL)"
      },
      {
        "major": "",
        "minor": "참조 무결성 (Referential)",
        "desc": "자식 외래키(FK) 값은 부모 참조키에 존재하거나 NULL이어야 함 (RESTRICT, CASCADE, SET NULL, SET DEFAULT)"
      },
      {
        "major": "",
        "minor": "사용자 정의 무결성",
        "desc": "특정 도메인 업무 규칙 및 상태 전이 조건 충족 (CHECK, 트리거, 업무 로직)"
      },
      {
        "major": "유지 기법\n(선·절·트)",
        "minor": "선언적 제약조건",
        "desc": "테이블 생성/변경 시 PK, FK, UNIQUE, CHECK, NOT NULL을 DDL로 선언하여 DBMS가 자동 강제"
      },
      {
        "major": "",
        "minor": "절차적 제약 처리",
        "desc": "트리거(Trigger)나 저장 프로시저(Stored Procedure)를 통해 복합 연산 및 다중 테이블 업무 규칙 검증"
      },
      {
        "major": "",
        "minor": "트랜잭션 관리",
        "desc": "ACID 기반 병행제어와 회복 기법을 통해 동시 실행 및 장애 상황에서도 데이터 일관성을 유지"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "릴레이션 무결성 제약의 분류축",
    "mnemonic": "상·과 / 집·튜 / 즉·지",
    "definition": "릴레이션 정합성 위해 상태·대상·시점별 분류한 제약",
    "keywords": [
      "상태 변화: 상태 제약 ↔ 과도(전이) 제약",
      "적용 대상: 집합 제약 ↔ 튜플 제약",
      "검사 시점: 즉시 제약 ↔ 지연 제약"
    ],
    "diagram": "db_rel_integrity.png",
    "tableRows": [
      {
        "major": "상태 변화 기준\n(상·과)",
        "minor": "상태 제약 (State)",
        "desc": "한 시점의 데이터베이스 상태가 정적으로 만족해야 하는 규칙 (예: 급여 > 0)"
      },
      {
        "major": "",
        "minor": "과도 제약 (Transition)",
        "desc": "데이터 변경 전 상태와 변경 후 상태 사이의 전이 과정에서 만족해야 할 규칙 (예: 급여 삭감 불가, 기혼→미혼 변경 불가)"
      },
      {
        "major": "적용 대상 기준\n(집·튜)",
        "minor": "집합 제약 (Set)",
        "desc": "여러 튜플의 집합 전체에 걸쳐 적용되는 규칙 (예: 기본키 유일성, 부서별 인원 상한)"
      },
      {
        "major": "",
        "minor": "튜플 제약 (Tuple)",
        "desc": "개별 튜플(행) 하나 내부의 속성값 또는 속성 간 조건만 검사하는 규칙 (예: 종료일 >= 시작일)"
      },
      {
        "major": "검사 시점 기준\n(즉·지)",
        "minor": "즉시 제약 (Immediate)",
        "desc": "DML 명령문 수행 종료 즉시 제약 위반 여부를 검사"
      },
      {
        "major": "",
        "minor": "지연 제약 (Deferred)",
        "desc": "트랜잭션 내부의 일시적 위반을 허용하고 COMMIT 시점에 일괄 검사 (순환 FK 입력 등에 활용)"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터 모델링 (Data Modeling)",
    "mnemonic": "개·논·물 / 요·개·논·물·검",
    "definition": "현실 업무 데이터와 관계를 개념·논리·물리로 설계 과정",
    "keywords": [
      "요구분석 → 개념 → 논리 → 물리 → 검증 (요개논물검)",
      "식별 관계(자식 PK에 포함) vs 비식별 관계(일반 FK)",
      "데이터 독립성: 외·개·내 / 논·물"
    ],
    "diagram": "<img src=\"db_modeling.png\" alt=\"데이터 모델링 개념도\"><img src=\"db_modeling_rel.png\" alt=\"식별·비식별 관계 개념도\">",
    "tableRows": [
      {
        "major": "모델링 단계\n(요·개·논·물·검)",
        "minor": "개념 데이터 모델링",
        "desc": "업무 주제영역 정의, 핵심 엔터티(Entity)와 관계 도출, 상위 개념 ERD 작성"
      },
      {
        "major": "",
        "minor": "논리 데이터 모델링",
        "desc": "속성·식별자(Key)·관계 상세화, 정규화(Normalization) 및 이력 관리 정의 (특정 DBMS에 독립적)"
      },
      {
        "major": "",
        "minor": "물리 데이터 모델링",
        "desc": "대상 DBMS 특성에 맞춘 테이블·컬럼 자료형, 인덱스, 파티셔닝, 성능 향상을 위한 반정규화 수행"
      },
      {
        "major": "관계 유형 비교",
        "minor": "식별 관계 (Identifying)",
        "desc": "부모 엔터티의 기본키(PK)가 자식 엔터티의 PK 일부로 포함되는 강한 종속 관계 (ERD 실선 표기)"
      },
      {
        "major": "",
        "minor": "비식별 관계 (Non-Identifying)",
        "desc": "부모 엔터티의 기본키(PK)가 자식 엔터티의 일반 속성(FK)으로만 포함되는 약한 참조 관계 (ERD 점선 표기)"
      },
      {
        "major": "3단계 스키마\n(외·개·내)",
        "minor": "외부 스키마 (External)",
        "desc": "개별 사용자나 응용프로그램 관점의 개인화된 논리적 데이터 뷰(View) 정의"
      },
      {
        "major": "",
        "minor": "개념 스키마 (Conceptual)",
        "desc": "조직 전체의 통합된 논리적 데이터 구조와 관계·제약조건 정의 (외부↔개념 사상: 논리적 독립성)"
      },
      {
        "major": "",
        "minor": "내부 스키마 (Internal)",
        "desc": "실제 저장장치에 기록되는 파일 구조, 인덱스, 블록 배치 정의 (개념↔내부 사상: 물리적 독립성)"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "키(Key) 종류와 도출 절차",
    "mnemonic": "결·슈·후·기 / 유·최·대",
    "definition": "튜플 식별 위해 유일성·최소성·대표성으로 키 선정 절차",
    "keywords": [
      "결정자 → 슈퍼키 → 후보키 → 기본키 (결슈후기)",
      "유일성 → 최소성 → 대표성 (유최대)",
      "대체키 · 외래키"
    ],
    "diagram": "db_key.png",
    "tableRows": [
      {
        "major": "도출 절차\n(결·슈·후·기\n/ 유·최·대)",
        "minor": "1. 결정자 (Determinant)",
        "desc": "함수 종속 관계(X → Y)에서 다른 속성의 값을 유일하게 결정하는 속성 집합 도출"
      },
      {
        "major": "",
        "minor": "2. 슈퍼키 (Super Key)",
        "desc": "[유일성 만족] 릴레이션 내 모든 튜플을 유일하게 식별할 수 있는 속성 집합"
      },
      {
        "major": "",
        "minor": "3. 후보키 (Candidate Key)",
        "desc": "[유일성 + 최소성 만족] 슈퍼키 중에서 꼭 필요한 최소한의 속성만으로 구성된 키"
      },
      {
        "major": "",
        "minor": "4. 기본키 (Primary Key)",
        "desc": "[유일성 + 최소성 + 대표성] 후보키 중 엔터티를 대표하도록 최종 선정된 키 (NULL 불가, 중복 불가)"
      },
      {
        "major": "연관 키",
        "minor": "대체키 (Alternate Key)",
        "desc": "후보키 중에서 기본키(PK)로 선택되지 못한 나머지 후보키 (UNIQUE 제약 설정)"
      },
      {
        "major": "",
        "minor": "외래키 (Foreign Key)",
        "desc": "타 릴레이션의 기본키(PK)를 참조하여 릴레이션 간 관계를 맺고 참조 무결성을 유지하는 속성"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "정규화 (1NF ~ BCNF)",
    "mnemonic": "도·부·이·결·다·조 / 무·중·분 / 삽·갱·삭",
    "definition": "삽입·갱신·삭제 이상 방지 위해 함수종속 분해하는 과정",
    "keywords": [
      "원칙: 무손실 조인 · 중복 제거 · 분리 (무중분)",
      "목적: 삽입 · 갱신 · 삭제 이상 현상 제거 (삽갱삭)",
      "단계: 도메인원자값(1NF) · 부분(2NF) · 이행(3NF) · 결정자(BCNF)"
    ],
    "diagram": "<img src=\"db_norm_fd.png\" alt=\"함수종속성 개념도\"><img src=\"db_norm_steps.png\" alt=\"정규화 단계 개념도\">",
    "tableRows": [
      {
        "major": "정규화 3원칙\n(무·중·분)",
        "minor": "무손실 조인 (Lossless Join)",
        "desc": "분해된 릴레이션들을 다시 자연 조인했을 때 허위 튜플 없이 원래 릴레이션이 완벽히 복원되어야 하는 원칙"
      },
      {
        "major": "",
        "minor": "데이터 중복 제거",
        "desc": "동일한 사실 데이터가 여러 튜플에 반복 저장되는 중복성을 제거하여 저장공간 낭비와 불일치 방지"
      },
      {
        "major": "",
        "minor": "독립 관계성 분리",
        "desc": "서로 독립적인 함수 종속 관계(하나의 릴레이션에 하나의 주제)를 별도 릴레이션으로 분리"
      },
      {
        "major": "이상 현상 방지\n(삽·갱·삭)",
        "minor": "삽입 이상 (Insertion Anomaly)",
        "desc": "새 데이터를 삽입할 때 의도하지 않은 불필요한 속성값까지 함께 입력해야 하는 현상 방지"
      },
      {
        "major": "",
        "minor": "갱신 이상 (Update Anomaly)",
        "desc": "중복된 데이터 중 일부만 수정되어 데이터 간 모순(불일치)이 발생하는 현상 방지"
      },
      {
        "major": "",
        "minor": "삭제 이상 (Deletion Anomaly)",
        "desc": "특정 튜플을 삭제할 때 꼭 보존해야 할 다른 유용한 정보까지 함께 연쇄 소실되는 현상 방지"
      },
      {
        "major": "정규화 단계\n(도·부·이·결)",
        "minor": "제1정규형 (1NF: 도메인 원자값)",
        "desc": "릴레이션에 속한 모든 속성의 도메인이 더 이상 쪼갤 수 없는 원자값(Atomic Value)만으로 구성 (반복 그룹 분리)"
      },
      {
        "major": "",
        "minor": "제2정규형 (2NF: 부분종속 제거)",
        "desc": "1NF를 만족하고, 기본키의 진부분집합에 종속되는 '부분 함수 종속'을 제거하여 완전 함수 종속 달성"
      },
      {
        "major": "",
        "minor": "제3정규형 (3NF: 이행종속 제거)",
        "desc": "2NF를 만족하고, 기본키가 아닌 일반 속성이 다른 일반 속성을 거쳐 종속되는 '이행 함수 종속(X→Y→Z)'을 제거"
      },
      {
        "major": "",
        "minor": "BCNF (결정자 후보키)",
        "desc": "3NF를 강화하여 모든 비자명 함수 종속(X→Y)의 결정자(X)가 반드시 후보키(슈퍼키)가 되도록 분해"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "고차 정규화 (4NF · 5NF)",
    "mnemonic": "다·조 (독립 집합 · 조인 복원)",
    "definition": "다치·조인 종속 제거해 무손실 복원 보장하는 정규형",
    "keywords": [
      "제4정규형(4NF): 다치 종속(MVD, X↠Y) 제거",
      "제5정규형(5NF / PJNF): 조인 종속(JD) 제거",
      "허위 튜플(Spurious Tuple) 없는 무손실 복원"
    ],
    "diagram": "<img src=\"db_4nf_before.png\" alt=\"4NF 정규화 전\"><img src=\"db_4nf_after.png\" alt=\"4NF 정규화 후\"><img src=\"db_5nf.png\" alt=\"5NF 조인종속 분해\">",
    "tableRows": [
      {
        "major": "제4정규형 (4NF)\n(다치 종속 제거)",
        "minor": "다치 종속 (MVD, X ↠ Y)",
        "desc": "하나의 릴레이션에 두 개 이상의 독립적인 다중값 종속(X ↠ Y, X ↠ Z)이 공존하여 카티션 곱 형태의 중복이 발생하는 현상"
      },
      {
        "major": "",
        "minor": "4NF 분해 (독립 집합 분리)",
        "desc": "모든 비자명 다치 종속에서 결정자 X가 슈퍼키가 되도록 독립된 두 다중값 집합을 [사원-자격], [사원-언어]로 각각 분리"
      },
      {
        "major": "제5정규형 (5NF)\n(조인 종속 제거)",
        "minor": "조인 종속 (JD)",
        "desc": "릴레이션을 여러 투영(Projection)으로 쪼갠 뒤 모두 조인해야만 원본이 복원되는 다자간 대칭적 순환 제약"
      },
      {
        "major": "",
        "minor": "5NF 분해 (무손실 투영 조인)",
        "desc": "모든 비자명 조인 종속이 후보키를 통해서만 성립하도록 분해 (SP·SJ·PJ 3자 조인 시 허위 튜플 없이 완벽 복원)"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "반정규화 (De-normalization)",
    "mnemonic": "대·다·반 / 테·컬·관",
    "definition": "조회 성능 향상 위해 정규화 모델에 중복·병합하는 기법",
    "keywords": [
      "절차: 대상 선정 → 다른 방법 검토 → 반정규화 (대다반)",
      "유형: 테이블(병합·분할·추가) · 컬럼(중복·파생·이력) · 관계(중복)",
      "성능 이익과 정합성 동기화 비용 검증"
    ],
    "diagram": "<img src=\"db_denorm1.png\" alt=\"반정규화 개념도\"><img src=\"db_denorm2.png\" alt=\"반정규화 절차\">",
    "tableRows": [
      {
        "major": "적용 절차\n(대·다·반)",
        "minor": "1. 반정규화 대상 선정",
        "desc": "대량 범위 자주 처리, 과다한 테이블 조인, 통계/집계 병목 등 성능 저하 대상을 식별"
      },
      {
        "major": "",
        "minor": "2. 다른 방법 우선 검토",
        "desc": "모델 구조를 깨기 전에 뷰(View), 클러스터링, 인덱스 조정, 응용 SQL 튜닝으로 해결 가능한지 먼저 검토"
      },
      {
        "major": "",
        "minor": "3. 반정규화 적용",
        "desc": "테이블·컬럼·관계 반정규화를 수행하고 트리거·배치 등 데이터 정합성 유지 방안을 함께 설계"
      },
      {
        "major": "테이블 반정규화",
        "minor": "테이블 병합",
        "desc": "조인 빈도가 높은 1:1 관계, 1:M 관계, 슈퍼/서브타입 테이블을 하나로 통합"
      },
      {
        "major": "",
        "minor": "테이블 분할",
        "desc": "업무 활용 특성에 따라 행 단위 수평 분할 또는 열 단위 수직 분할 수행"
      },
      {
        "major": "",
        "minor": "테이블 추가",
        "desc": "원격 조인 회피용 중복 테이블, 집계용 통계 테이블, 이력 테이블, 자주 쓰는 부분 테이블 추가"
      },
      {
        "major": "컬럼·관계 반정규화",
        "minor": "중복 컬럼 추가",
        "desc": "조인 횟수를 줄이기 위해 참조 테이블의 자주 조회되는 컬럼을 자식 테이블에 중복 배치"
      },
      {
        "major": "",
        "minor": "파생 컬럼 추가",
        "desc": "총금액, 할인액 등 실시간 연산 부하가 큰 계산 결과값을 미리 컬럼으로 저장"
      },
      {
        "major": "",
        "minor": "이력 기능 컬럼 추가",
        "desc": "대량 이력 테이블에서 최신 여부(Y/N)나 종료일자 등 최근 값 빠른 탐색용 컬럼 추가"
      },
      {
        "major": "",
        "minor": "중복 관계 (FK) 추가",
        "desc": "데이터 무결성을 해치지 않으면서 다단계 조인 경로를 단축하기 위해 직접 참조 관계(FK)를 추가"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "CRUD Matrix",
    "mnemonic": "요·데·프·매 (C·R·U·D)",
    "definition": "프로세스와 엔터티 간 생성·조회·갱신·삭제 매핑 도표",
    "keywords": [
      "요구분석 → 데이터모델링 → 프로세스모델링 → 매트릭스 작성",
      "Create(생성) · Read(조회) · Update(갱신) · Delete(삭제)",
      "생명주기 누락 점검 & 단위 프로세스 응집도 검증"
    ],
    "diagram": "<img src=\"db_crud.png\" alt=\"CRUD Matrix 개념도\"><img src=\"db_crud_check.png\" alt=\"CRUD Matrix 점검표\">",
    "tableRows": [
      {
        "major": "작성 절차\n(요·데·프·매)",
        "minor": "1. 요구사항 분석",
        "desc": "업무 요구사항을 수집하여 시스템이 처리해야 할 기능과 데이터 범위를 정의"
      },
      {
        "major": "",
        "minor": "2. 데이터 모델링",
        "desc": "업무에서 관리할 핵심 엔터티(Entity)와 테이블 목록을 도출"
      },
      {
        "major": "",
        "minor": "3. 프로세스 모델링",
        "desc": "업무 기능을 수행하는 단위 프로세스(트랜잭션/화면/API)를 도출"
      },
      {
        "major": "",
        "minor": "4. 상관 매트릭스 작성",
        "desc": "행(프로세스)과 열(엔터티) 교차점에 C(생성)·R(조회)·U(갱신)·D(삭제) 권한과 액션을 매핑"
      },
      {
        "major": "검증 및 활용",
        "minor": "생명주기 정합성 점검",
        "desc": "C가 없는 엔터티, R/U/D가 전혀 없는 불필요 엔터티 등 데이터 생명주기 누락 여부를 점검"
      },
      {
        "major": "",
        "minor": "단위 프로세스 응집도 검증",
        "desc": "아무 엔터티도 건드리지 않거나 과도하게 많은 엔터티를 수정하는 프로세스를 식별해 분할·통합"
      },
      {
        "major": "",
        "minor": "변경 영향도 분석",
        "desc": "테이블이나 컬럼 구조 변경 시 영향을 받는 애플리케이션 프로세스를 즉시 추적"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "인덱스 (Index & 클러스터드·논클러스터드)",
    "mnemonic": "트·해·비 / 함·조·도",
    "definition": "검색 속도 향상 위해 키와 주소를 정렬 저장한 자료구조",
    "keywords": [
      "형태별: 트리 · 해시 · 비트맵 (트해비)",
      "목적별: 함수기반 · 조인 · 도메인 (함조도)",
      "클러스터드(물리 정렬 일치, 1개) vs 논클러스터드(포인터 참조, 다수)"
    ],
    "diagram": "<img src=\"db_index.png\" alt=\"인덱스 개념도\"><img src=\"db_clustered_index.png\" alt=\"클러스터드 vs 논클러스터드 인덱스\">",
    "tableRows": [
      {
        "major": "형태별 유형\n(트·해·비)",
        "minor": "트리 기반 인덱스",
        "desc": "B-Tree, B+Tree 등 균형 트리 구조로 등치(=) 및 범위(BETWEEN, >, <) 검색 모두 우수"
      },
      {
        "major": "",
        "minor": "해시 기반 인덱스",
        "desc": "컬럼 값에 해시 함수를 적용해 O(1) 단건 등치(=) 검색에 특화 (부등호 범위 검색은 불가)"
      },
      {
        "major": "",
        "minor": "비트맵 인덱스",
        "desc": "성별·상태코드 등 카디널리티(분포도)가 낮은 컬럼을 0과 1 비트열로 압축 저장 (DW 다중 조건 집계에 유리)"
      },
      {
        "major": "목적별 유형\n(함·조·도)",
        "minor": "함수 기반 인덱스 (FBI)",
        "desc": "컬럼에 연산식이나 함수(UPPER, SUBSTR 등)를 적용한 결과값 자체를 인덱싱"
      },
      {
        "major": "",
        "minor": "조인 인덱스 (Join Index)",
        "desc": "두 개 이상 테이블의 조인 결과를 사전 인덱싱하여 조인 탐색 비용 절감"
      },
      {
        "major": "",
        "minor": "도메인 인덱스",
        "desc": "전문(Full-text)·공간(GIS)·비정형 데이터 등 애플리케이션 특화 사용자 정의 인덱스"
      },
      {
        "major": "구조 비교",
        "minor": "클러스터드 인덱스",
        "desc": "인덱스 정렬 순서대로 실제 테이블 데이터가 물리적으로 정렬 저장됨 (테이블당 1개만 생성, 리프 노드=데이터 페이지)"
      },
      {
        "major": "",
        "minor": "논클러스터드 인덱스",
        "desc": "데이터 정렬과 무관하게 별도 인덱스 공간을 두고 리프 노드에 데이터 주소(ROWID)만 저장 (테이블당 여러 개 생성 가능)"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "B-Tree 인덱스",
    "mnemonic": "루·브·리 / 전·키·포",
    "definition": "탐색 속도 보장 위해 모든 노드에 데이터 둔 균형트리",
    "keywords": [
      "루트 · 브랜치 · 리프 노드",
      "균형 다진 탐색 트리 O(log N)",
      "모든 노드에 키와 데이터 포인터 저장"
    ],
    "diagram": "db_btree.png",
    "tableRows": [
      {
        "major": "노드 구성\n(루·브·리)",
        "minor": "루트 노드 (Root Node)",
        "desc": "트리 최상단에서 탐색이 시작되는 노드로, 하위 브랜치 포인터와 키·데이터 주소를 보유"
      },
      {
        "major": "",
        "minor": "브랜치 노드 (Branch Node)",
        "desc": "루트와 리프 사이에서 탐색 경로를 분기하는 중간 내부 노드"
      },
      {
        "major": "",
        "minor": "리프 노드 (Leaf Node)",
        "desc": "트리 최하단 노드로, 모든 리프 노드가 동일한 깊이(Level)에 위치하여 균형 유지"
      },
      {
        "major": "구조적 특성",
        "minor": "전 노드 데이터 포인터 보유",
        "desc": "루트·브랜치·리프 모든 노드에 인덱스 키값과 실제 테이블 레코드 주소(ROWID/포인터)를 함께 저장"
      },
      {
        "major": "",
        "minor": "단건 탐색 강점",
        "desc": "상위 노드에서 찾는 키를 만나면 리프까지 내려가지 않고 즉시 탐색 종료 가능"
      },
      {
        "major": "",
        "minor": "범위 탐색 한계",
        "desc": "노드에 데이터가 함께 들어있어 팬아웃(Fan-out)이 작고, 부등호 범위 검색 시 트리를 상하로 중위 순회해야 함"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "B+Tree 인덱스",
    "mnemonic": "내·리·양·범",
    "definition": "범위 검색 고속화 위해 리프 노드에 데이터 둔 인덱스",
    "keywords": [
      "내부 노드(경로 키)와 리프 노드(데이터) 분리",
      "리프 노드 양방향 연결 리스트",
      "높은 팬아웃 (Fan-out) & 범위 검색 최적화"
    ],
    "diagram": "db_bplustree.png",
    "tableRows": [
      {
        "major": "노드 분리 구조\n(내·리 분리)",
        "minor": "내부 노드 (Index Set)",
        "desc": "루트·브랜치 노드에는 실제 데이터 포인터 없이 오직 리프 노드로 찾아가는 경로 안내 키(Separator Key)만 저장"
      },
      {
        "major": "",
        "minor": "리프 노드 (Sequence Set)",
        "desc": "오직 최하단 리프 노드에만 모든 인덱스 키와 실제 데이터(또는 ROWID 주소)를 정렬 상태로 저장"
      },
      {
        "major": "핵심 강점",
        "minor": "높은 팬아웃 (Fan-out)",
        "desc": "내부 노드에 데이터가 없어 한 블록에 더 많은 자식 포인터를 담아 트리 높이를 낮추고 디스크 I/O 횟수 절감"
      },
      {
        "major": "",
        "minor": "양방향 연결 리스트",
        "desc": "리프 노드끼리 양방향 연결 리스트(Doubly Linked List)로 이어져 있어 이전·다음 블록 순차 이동 가능"
      },
      {
        "major": "",
        "minor": "범위 검색 (Range Scan)",
        "desc": "시작 키만 수직 탐색으로 찾으면 리프 연결 리스트를 따라 부등호(BETWEEN, >, <) 및 ORDER BY 스캔을 초고속 수행"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "다차원 색인구조 (Multidimensional Index)",
    "mnemonic": "PAM(k·Q·G) / SAM(R·R+·R*)",
    "definition": "공간·다차원 데이터 범위·근접 탐색 비용 줄이는 색인",
    "keywords": [
      "PAM(점 데이터): k-d 트리 · Quad 트리 · Grid File",
      "SAM(공간 객체): R-Tree · R+ Tree · R* Tree",
      "MBR (Minimum Bounding Rectangle: 최소 경계 사각형)"
    ],
    "diagram": "db_multidim_index.png",
    "tableRows": [
      {
        "major": "PAM\n(점 데이터 중심)",
        "minor": "k-d 트리 (k-dimensional)",
        "desc": "다차원 공간을 각 축 기준으로 번갈아 이진 분할하여 최근접 이웃(KNN) 및 다차원 범위 탐색 수행"
      },
      {
        "major": "",
        "minor": "Quad 트리",
        "desc": "2차원 공간을 4개의 사분면(NW, NE, SW, SE)으로 재귀적으로 4등분하여 관리"
      },
      {
        "major": "",
        "minor": "Grid File",
        "desc": "다차원 공간을 격자(Grid) 셀로 분할하고 디렉터리 배열을 통해 단일 디스크 접근 유도"
      },
      {
        "major": "SAM\n(공간 객체 중심)",
        "minor": "R-Tree",
        "desc": "공간 객체를 감싸는 최소 경계 사각형(MBR)을 기반으로 계층적 균형 트리로 관리 (GIS·LBS 표준)"
      },
      {
        "major": "",
        "minor": "R+ Tree",
        "desc": "형제 노드 간 MBR의 중첩(Overlap)을 허용하지 않고 객체를 분할 저장해 단일 경로 탐색 보장"
      },
      {
        "major": "",
        "minor": "R* Tree",
        "desc": "노드 분할 시 면적·둘레·중첩 최소화와 강제 재삽입(Forced Reinsertion)으로 검색 성능을 최적화"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "옵티마이저 (SQL Optimizer)",
    "mnemonic": "RBO·CBO / 변·추·생",
    "definition": "SQL 질의에 대해 규칙·비용 기반 최적 실행계획 엔진",
    "keywords": [
      "SQL 처리: 구문분석(Parsing) → 실행(Optimizer) → 인출(Fetch)",
      "내부 구성: Query Transformer(변환) → Estimator(추정) → Plan Generator(생성)",
      "RBO(규칙 기반) vs CBO(비용·통계 기반)"
    ],
    "diagram": "db_optimizer.png",
    "tableRows": [
      {
        "major": "SQL 처리 과정",
        "minor": "1. 구문분석 (Parsing)",
        "desc": "문법(Syntax)·의미(Semantic) 검증 후 Shared Pool 내 기존 실행계획 존재 여부(Soft/Hard Parse) 확인"
      },
      {
        "major": "",
        "minor": "2. 실행 (Execution)",
        "desc": "옵티마이저가 실행계획을 수립하고 Row Source Generator가 실행 가능한 프로시저를 생성해 블록 I/O 수행"
      },
      {
        "major": "",
        "minor": "3. 인출 (Fetch)",
        "desc": "실행 결과 집합에서 데이터를 읽어 사용자 애플리케이션으로 반환"
      },
      {
        "major": "옵티마이저 구조\n(변·추·생)",
        "minor": "Query Transformer (변환기)",
        "desc": "뷰 병합, 서브쿼리 언네스팅, 조건절 푸시다운 등 SQL을 의미가 동일한 더 효율적인 형태로 재작성"
      },
      {
        "major": "",
        "minor": "Estimator (비용 추정기)",
        "desc": "데이터 딕셔너리 통계정보(건수, 분포도, 히스토그램)를 바탕으로 선택도·카디널리티·I/O 및 CPU 비용 산출"
      },
      {
        "major": "",
        "minor": "Plan Generator (계획 생성기)",
        "desc": "다양한 접근 경로·조인 순서·조인 방법 후보군 중 총비용(Cost)이 가장 낮은 최적 실행계획 선택"
      },
      {
        "major": "유형 비교",
        "minor": "RBO (규칙 기반)",
        "desc": "미리 정해진 우선순위 규칙(ROWID > Unique Index > Range Scan > Full Scan 등)만으로 실행계획 결정"
      },
      {
        "major": "",
        "minor": "CBO (비용 기반)",
        "desc": "테이블·인덱스 통계정보와 시스템 자원 비용 모델을 계산해 최소 비용 실행계획 선택 (현대 DBMS 표준)"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "조인 수행 방식과 인덱스 스캔",
    "mnemonic": "네·소·해 / 랜·풀·유·스·디·패",
    "definition": "테이블 결합 및 인덱스 탐색 효율화하는 물리 수행 기법",
    "keywords": [
      "조인 방식(네소해): Nested Loop · Sort Merge · Hash Join",
      "인덱스 스캔(랜풀유스디패): Range · Full · Unique · Skip · Descending · Fast Full"
    ],
    "diagram": "db_index_scan.png",
    "tableRows": [
      {
        "major": "조인 수행 방식\n(네·소·해)",
        "minor": "Nested Loop (NL 조인)",
        "desc": "선행(Driving) 집합의 각 행마다 후행 테이블의 인덱스를 통해 반복 탐색 (소량 데이터 온라인 트랜잭션에 유리)"
      },
      {
        "major": "",
        "minor": "Sort Merge (소트 머지)",
        "desc": "양쪽 집합을 조인 키 기준으로 각각 정렬한 뒤 순차 스캔하며 병합 (인덱스 없거나 비동등 조인 시 활용)"
      },
      {
        "major": "",
        "minor": "Hash Join (해시 조인)",
        "desc": "작은 집합(Build Input)으로 메모리 해시 테이블을 생성하고 큰 집합(Probe Input)을 스캔하며 탐색 (대용량 동등 조인 최적)"
      },
      {
        "major": "인덱스 스캔\n(랜·풀·유·스·디·패)",
        "minor": "Index Range Scan",
        "desc": "루트에서 리프까지 수직 탐색 후 필요한 범위만 수평 스캔하는 가장 일반적인 방식 (결과 정렬 보장)"
      },
      {
        "major": "",
        "minor": "Index Full Scan",
        "desc": "수직 탐색 없이 리프 블록 전체를 처음부터 끝까지 Single Block Read로 수평 스캔 (최적 선두 인덱스 없을 때)"
      },
      {
        "major": "",
        "minor": "Index Unique Scan",
        "desc": "Unique 인덱스를 동등(=) 조건으로 검색할 때 수직 탐색만으로 단 1건의 데이터를 즉시 추출"
      },
      {
        "major": "",
        "minor": "Index Skip Scan",
        "desc": "복합 인덱스에서 선두 컬럼 조건이 없어도 선두 컬럼의 Distinct 값이 적을 때 필요한 블록만 골라 스캔"
      },
      {
        "major": "",
        "minor": "Index Range Scan Descending",
        "desc": "인덱스 리프 블록을 뒤에서부터 역순으로 스캔하여 내림차순(ORDER BY DESC) 정렬 연산을 생략"
      },
      {
        "major": "",
        "minor": "Index Fast Full Scan",
        "desc": "인덱스 트리 구조를 무시하고 세그먼트 전체를 Multi-Block Read로 고속 스캔 (결과 정렬은 보장 안 됨)"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터베이스 튜닝 (DB Tuning)",
    "mnemonic": "설·D·S / 처·처·응·로",
    "definition": "처리량 증대와 응답 단축 위해 설계·DB·SQL 최적화",
    "keywords": [
      "3대 영역(설DS): 설계(모델링) 튜닝 · DBMS 튜닝 · SQL 튜닝",
      "성능 지표(처처응로): 처리능력 · 처리시간 · 응답시간 · 로드시간"
    ],
    "diagram": "<img src=\"db_tuning.png\" alt=\"DB 튜닝 3단계 개념도\"><img src=\"db_hint_types.png\" alt=\"옵티마이저 힌트 유형\">",
    "tableRows": [
      {
        "major": "3대 튜닝 영역\n(설·D·S)",
        "minor": "DB 설계 (모델링) 튜닝",
        "desc": "반정규화, 파티셔닝, 이력테이블 관리, 인덱스 키 구성, FK 잠금 회피, 테이블스페이스 분리 등 구조적 개선"
      },
      {
        "major": "",
        "minor": "DBMS 환경 튜닝",
        "desc": "Buffer Cache·Shared Pool 등 메모리 최적화, Redo Log·체크포인트 설정, CPU/디스크 I/O 경합 최소화"
      },
      {
        "major": "",
        "minor": "SQL 튜닝",
        "desc": "비효율 실행계획 개선, 옵티마이저 힌트 적용, 조인 순서·방식 최적화, 인덱스 억제 요인(컬럼 변형) 제거"
      },
      {
        "major": "옵티마이저 힌트",
        "minor": "최적화 목표 힌트",
        "desc": "ALL_ROWS(전체 리소스 최소화 비용 기반), FIRST_ROWS(첫 행 최단 응답), RULE(규칙 기반 실행)"
      },
      {
        "major": "",
        "minor": "접근 방법 힌트",
        "desc": "FULL(전체 테이블 스캔), INDEX(인덱스 스캔), INDEX_FFS(Fast Full Scan), HASH(해시 스캔)"
      },
      {
        "major": "",
        "minor": "조인 순서 힌트",
        "desc": "ORDERED(FROM절 기술 순서대로 조인), LEADING(지정한 테이블을 선행 드라이빙으로 강제)"
      },
      {
        "major": "",
        "minor": "조인 방법 힌트",
        "desc": "USE_NL(Nested Loop 조인), USE_MERGE(Sort Merge 조인), USE_HASH(Hash 조인 강제)"
      },
      {
        "major": "성능 평가 지표\n(처·처·응·로)",
        "minor": "처리능력 (Throughput)",
        "desc": "단위 시간당 시스템이 완료하는 트랜잭션 또는 질의 처리 건수 (TPS)"
      },
      {
        "major": "",
        "minor": "처리시간 (Elapsed Time)",
        "desc": "트랜잭션이나 배치 작업이 시작되어 완전히 종료될 때까지 서버에서 소요된 총 시간"
      },
      {
        "major": "",
        "minor": "응답시간 (Response Time)",
        "desc": "사용자가 질의를 요청한 시점부터 첫 결과 화면을 반환받기까지 체감하는 대기 시간"
      },
      {
        "major": "",
        "minor": "로드시간 (Load Time)",
        "desc": "대량의 데이터를 추출·변환하여 데이터베이스에 적재하는 데 소요되는 시간"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "파티셔닝 (DB Partitioning)",
    "mnemonic": "레·리·해·복 (수평·수직)",
    "definition": "성능과 관리성 위해 대용량 테이블을 나누는 분할 기법",
    "keywords": [
      "유형(레리해복): Range(범위) · List(목록) · Hash(해시) · Composite(복합)",
      "방법: 수평 분할(행 분리) vs 수직 분할(열 분리)",
      "파티션 프루닝 (Partition Pruning: 불필요 파티션 스캔 제외)"
    ],
    "diagram": "db_partitioning.png",
    "tableRows": [
      {
        "major": "4대 분할 유형\n(레·리·해·복)",
        "minor": "Range 파티셔닝 (범위)",
        "desc": "날짜(월별·연도별)나 숫자 구간 등 연속된 값의 범위를 기준으로 분할 (이력 데이터 보관·삭제에 최적)"
      },
      {
        "major": "",
        "minor": "List 파티셔닝 (목록)",
        "desc": "국가 코드, 지역명, 부서 등 지정된 이산값 목록 집합을 기준으로 분할"
      },
      {
        "major": "",
        "minor": "Hash 파티셔닝 (해시)",
        "desc": "파티션 키에 해시 함수를 적용한 결과값으로 데이터를 균등 분산 배치 (특정 구간 데이터 쏠림 방지)"
      },
      {
        "major": "",
        "minor": "Composite 파티셔닝 (복합)",
        "desc": "Range-Hash, Range-List 등 2가지 분할 방식을 결합하여 대분류 후 세부 분할 수행"
      },
      {
        "major": "분할 방향",
        "minor": "수평 분할 (Horizontal)",
        "desc": "동일 스키마를 유지한 채 행(Row) 단위로 파티션을 나누어 대용량 테이블 스캔 범위를 축소"
      },
      {
        "major": "",
        "minor": "수직 분할 (Vertical)",
        "desc": "자주 쓰는 핵심 컬럼과 대형(LOB)/저빈도 컬럼을 열(Column) 단위로 분리하여 행 길이 및 I/O 절감"
      },
      {
        "major": "최적화 원리",
        "minor": "파티션 프루닝 (Pruning)",
        "desc": "옵티마이저가 SQL 조건절(WHERE)의 분할 키를 분석해 필요한 파티션만 읽고 나머지 파티션은 스캔에서 아예 제외"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "샤딩 (Sharding)",
    "mnemonic": "호·레·키·디 (범위·해시·디렉토리)",
    "definition": "대용량 부하 분산 위해 독립 다중 DB에 수평분할 기법",
    "keywords": [
      "물리적으로 독립된 다중 DB 서버에 수평 분할 저장",
      "분할 방식: 범위(Range) · 키/해시(Modular) · 디렉토리(Lookup)",
      "핵심 요소: Shard ID · Shard Key · 마스터(라우팅) 노드"
    ],
    "diagram": "db_sharding.png",
    "tableRows": [
      {
        "major": "분할 방식\n(레·키·디)",
        "minor": "범위 샤딩 (Range)",
        "desc": "샤드 키의 구간(범위) 기준으로 샤드 배정 → 범위 조회에 유리하나 특정 샤드로 트래픽이 몰리는 핫스팟(쏠림) 주의"
      },
      {
        "major": "",
        "minor": "모듈러/해시 샤딩 (Hash)",
        "desc": "샤드 키의 해시 함수 결과값으로 분산 → 부하 분산은 균등하나 범위 조회 시 여러 샤드를 방문해야 하며 노드 증설 시 재해싱 필요"
      },
      {
        "major": "",
        "minor": "디렉토리 샤딩 (Directory)",
        "desc": "별도의 매핑(Lookup) 테이블을 두어 데이터가 저장된 샤드 위치를 조회 → 유연성이 높으나 디렉토리 서버가 단일 장애점(SPOF) 가능"
      },
      {
        "major": "핵심 구성요소",
        "minor": "Shard Key (샤드 키)",
        "desc": "데이터를 어느 물리 샤드에 배치할지 결정하는 기준 컬럼/필드"
      },
      {
        "major": "",
        "minor": "Shard ID (샤드 식별자)",
        "desc": "수평 분할된 데이터가 저장되는 개별 물리 데이터베이스 노드 식별자"
      },
      {
        "major": "",
        "minor": "라우팅(마스터) 노드",
        "desc": "애플리케이션 질의의 샤드 키를 분석해 대상 샤드 DB로 라우팅하고 결과를 병합 반환하는 중개 계층"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "분산 데이터베이스와 투명성 (2PC)",
    "mnemonic": "위·복·병·분·장·지 / 요·복·분·위",
    "definition": "물리적 분산 DB를 논리적 단일 DB처럼 쓰는 아키텍처",
    "keywords": [
      "투명성(위복병분장지): 위치 · 복제 · 병행 · 분할 · 장애 · 지역사상",
      "분산 적용방법(요복분위): 요약 · 복제 · 분할 · 위치 분산",
      "2PC (2단계 커밋): Prepare(준비) → Commit/Abort(결정)"
    ],
    "diagram": "<img src=\"db_distdb.png\" alt=\"분산DB 개념도\"><img src=\"db_2pc.png\" alt=\"2PC 개념도\">",
    "tableRows": [
      {
        "major": "분산 DB 투명성\n(위·복·병·분·장·지)",
        "minor": "위치 투명성 (Location)",
        "desc": "접근하려는 데이터의 물리적 저장 위치를 몰라도 논리적인 명칭만으로 접근 가능"
      },
      {
        "major": "",
        "minor": "복제 투명성 (Replication)",
        "desc": "동일 데이터가 여러 노드에 복제되어 있는지 여부를 사용자가 의식할 필요 없음"
      },
      {
        "major": "",
        "minor": "병행 투명성 (Concurrency)",
        "desc": "다수의 분산 트랜잭션이 동시에 수행되더라도 결과의 일관성이 유지됨"
      },
      {
        "major": "",
        "minor": "분할 투명성 (Fragmentation)",
        "desc": "하나의 논리적 릴레이션이 여러 단편(Fragment)으로 분할 저장됨을 의식할 필요 없음"
      },
      {
        "major": "",
        "minor": "장애 투명성 (Failure)",
        "desc": "특정 지역 노드나 통신 회선에 장애가 발생해도 트랜잭션의 원자성과 무결성 보장"
      },
      {
        "major": "",
        "minor": "지역사상 투명성 (Local Mapping)",
        "desc": "각 지역 시스템의 로컬 DBMS와 물리적 명칭에 무관하게 접근 가능"
      },
      {
        "major": "분산 적용 기법\n(요·복·분·위)",
        "minor": "요약 분산 (Summarization)",
        "desc": "지역 또는 서버별로 집계·요약된 데이터를 본사/중앙 노드에 합산 배치"
      },
      {
        "major": "",
        "minor": "복제 분산 (Replication)",
        "desc": "동일 데이터의 복사본을 여러 원격 노드에 중복 배치하여 조회 성능 및 가용성 향상"
      },
      {
        "major": "",
        "minor": "분할 분산 (Fragmentation)",
        "desc": "테이블을 수평 또는 수직 조각으로 나누어 서로 다른 물리 노드에 분산 배치"
      },
      {
        "major": "",
        "minor": "위치 분산 (Location)",
        "desc": "동일 스키마를 유지하되 데이터가 발생·활용되는 지사/지역 위치별로 DB를 분리 배치"
      },
      {
        "major": "2PC (2단계 커밋)",
        "minor": "1단계: Prepare (준비)",
        "desc": "조정자(Coordinator)가 모든 참여 노드에 커밋 가능 여부를 묻고 각 참여자가 WAL 기록 후 Yes/No 투표"
      },
      {
        "major": "",
        "minor": "2단계: Commit / Abort",
        "desc": "전원 Yes면 Global Commit, 단 하나라도 No나 타임아웃이면 Global Abort를 전파하여 원자성 보장"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "NoSQL (BASE · 유형 · 모델링 패턴)",
    "mnemonic": "BASE / 키·컬·도·그 / 도·쿼·패·기·후·선 / 비·통·조·아·인·복",
    "definition": "스키마리스와 분산 확장성 제공하는 비관계형 데이터베이스",
    "keywords": [
      "BASE 속성: Basically Available · Soft-state · Eventually Consistent",
      "4대 유형(키컬도그): Key-Value · Column-Family · Document · Graph",
      "모델링 절차(도쿼패기후선) & 패턴(비통조 아인복)"
    ],
    "diagram": "db_nosql_types.png",
    "tableRows": [
      {
        "major": "BASE 속성",
        "minor": "Basically Available (기본 가용성)",
        "desc": "일부 노드 장애 시에도 시스템 전체가 멈추지 않고 언제나 응답을 반환하는 가용성 최우선 특성"
      },
      {
        "major": "",
        "minor": "Soft-state (유연 상태)",
        "desc": "외부의 추가 입력이 없더라도 분산 복제 전파 과정에 따라 노드의 상태가 시간에 따라 변할 수 있음"
      },
      {
        "major": "",
        "minor": "Eventually Consistent (최종 일관성)",
        "desc": "일시적인 불일치를 허용하되 일정 시간이 지나면 모든 복제본이 결국 동일한 값으로 수렴"
      },
      {
        "major": "4대 유형\n(키·컬·도·그)",
        "minor": "Key-Value Store",
        "desc": "고유 Key와 Value 쌍의 단순 해시 구조로 초고속 조회 지원 (Redis, DynamoDB)"
      },
      {
        "major": "",
        "minor": "Column-Family Store",
        "desc": "로우 키 아래 대용량 컬럼 묶음(Column Family)을 분산 저장해 시계열·대량 쓰기에 강점 (HBase, Cassandra)"
      },
      {
        "major": "",
        "minor": "Document Store",
        "desc": "JSON, BSON, XML 등 계층적 문서(Document) 트리 구조로 저장하고 내부 필드 질의 지원 (MongoDB)"
      },
      {
        "major": "",
        "minor": "Graph Store",
        "desc": "노드(Node), 엣지(Edge), 속성으로 개체 간 관계망과 최단경로·추천을 고속 탐색 (Neo4j)"
      },
      {
        "major": "모델링 패턴\n(비·통·조·아·인·복)",
        "minor": "비정규화 (Denormalization)",
        "desc": "읽기 시 조인을 제거하기 위해 동일 데이터를 여러 문서/컬럼에 중복 저장"
      },
      {
        "major": "",
        "minor": "테이블 통합 (Aggregation)",
        "desc": "중첩 문서(Embedded Document)나 유연한 스키마를 활용해 연관 엔터티를 단일 레코드로 병합"
      },
      {
        "major": "",
        "minor": "애플리케이션 조인 (App Join)",
        "desc": "DBMS 차원의 조인 연산 대신 애플리케이션 계층에서 다중 조회 결과를 결합"
      },
      {
        "major": "",
        "minor": "원자적 집계 (Atomic Aggregation)",
        "desc": "트랜잭션 보장을 위해 함께 갱신되어야 하는 데이터들을 단일 문서/행 단위로 묶어 배치"
      },
      {
        "major": "",
        "minor": "인덱스 테이블 (Index Table)",
        "desc": "기본키(Row Key) 외의 조회 조건을 빠르게 검색하기 위해 별도의 역색인 매핑 테이블을 생성"
      },
      {
        "major": "",
        "minor": "복합 키 (Composite Key)",
        "desc": "구분자(Delimiter)를 사용해 여러 속성을 하나의 키 문자열로 결합하여 범위·계층 검색 지원"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "CAP 이론과 PACELC 이론",
    "mnemonic": "C·A·P / PA·EL · PA·EC · PC·EL · PC·EC",
    "definition": "분산 DB 장애·정상 시 일관성·가용성·지연 설명 이론",
    "keywords": [
      "CAP: 일관성(C) · 가용성(A) · 분할내성(P) (네트워크 분할 시 C↔A 상충)",
      "PACELC: Partition 시 A↔C 선택, Else(정상) 시 Latency(L)↔Consistency(C) 선택",
      "CP(MongoDB, HBase) vs AP(Cassandra, DynamoDB)"
    ],
    "diagram": "<img src=\"db_cap.png\" alt=\"CAP 이론\"><img src=\"db_pacelc.png\" alt=\"PACELC 이론\">",
    "tableRows": [
      {
        "major": "CAP 이론\n(C · A · P)",
        "minor": "일관성 (Consistency)",
        "desc": "모든 노드가 같은 시점에 동일한 최신 쓰기 데이터를 조회할 수 있어야 하는 속성 (선형화 가능성)"
      },
      {
        "major": "",
        "minor": "가용성 (Availability)",
        "desc": "일부 노드에 장애가 나더라도 정상 노드는 모든 요청에 대해 에러 없이 유효한 응답을 반환해야 하는 속성"
      },
      {
        "major": "",
        "minor": "분할 내성 (Partition Tolerance)",
        "desc": "노드 간 네트워크가 단절되어 메시지가 유실되더라도 시스템이 계속 동작해야 하는 속성 (네트워크 분할 시 C와 A 동시 만족 불가)"
      },
      {
        "major": "PACELC 이론\n(CAP 한계 보완)",
        "minor": "If P (네트워크 분할 시)",
        "desc": "네트워크 분할(Partition) 발생 시 가용성(A)과 일관성(C) 중 무엇을 우선할지 선택"
      },
      {
        "major": "",
        "minor": "Else (정상 동작 시)",
        "desc": "네트워크가 정상(Else)일 때도 복제 동기화에 따른 지연시간(Latency, L)과 일관성(Consistency, C) 간 트레이드오프 선택"
      },
      {
        "major": "DBMS 분류",
        "minor": "PA/EL 유형",
        "desc": "장애 시 가용성(A), 정상 시 저지연(L) 우선 (DynamoDB, Cassandra)"
      },
      {
        "major": "",
        "minor": "PC/EC 유형",
        "desc": "장애 시 일관성(C), 정상 시에도 일관성(C) 우선 (HBase, Google Spanner, 전통 RDBMS)"
      },
      {
        "major": "",
        "minor": "PA/EC 유형",
        "desc": "장애 시에는 가용성(A)을 택하고, 정상 통신 시에는 일관성(C)을 우선 보장 (MongoDB 등 설정별)"
      },
      {
        "major": "",
        "minor": "PC/EL 유형",
        "desc": "장애 시에는 일관성(C)을 택하고, 정상 통신 시에는 빠른 응답 지연시간(L)을 우선 보장 (PNUTS 등)"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "벡터 데이터베이스 (Vector Database: HNSW · IVF)",
    "mnemonic": "임·유 / HNSW(계층그래프) · IVF(클러스터역색인)",
    "definition": "의미 유사도 검색 위해 고차원 임베딩 저장·탐색 DB",
    "keywords": [
      "고차원 벡터 임베딩 & 근사 최근접 이웃(ANN) 검색",
      "HNSW (계층적 스몰월드 그래프 기반 탐색)",
      "IVF (K-Means 클러스터링 기반 역파일 색인)"
    ],
    "diagram": "<img src=\"db_vectordb.png\" alt=\"벡터DB 구성도\"><img src=\"db_hnsw.png\" alt=\"HNSW 개념도\"><img src=\"db_ivf.png\" alt=\"IVF 개념도\">",
    "tableRows": [
      {
        "major": "핵심 아키텍처",
        "minor": "벡터 임베딩 (Embedding)",
        "desc": "텍스트·이미지·오디오 등 비정형 데이터를 딥러닝 임베딩 모델로 고차원 실수 배열(벡터)로 변환해 저장"
      },
      {
        "major": "",
        "minor": "유사도 거리 측정",
        "desc": "코사인 유사도(Cosine Similarity), 유클리드 거리(L2), 내적(Inner Product)으로 벡터 간 문맥 유사도 계산"
      },
      {
        "major": "",
        "minor": "근사 최근접 이웃 (ANN)",
        "desc": "전수 조사(KNN)의 연산 병목을 해결하기 위해 약간의 정확도를 타협하고 탐색 속도를 비약적으로 높이는 색인 기법"
      },
      {
        "major": "대표 색인 기법",
        "minor": "HNSW (계층적 그래프)",
        "desc": "상위 희소 계층에서 큰 보폭으로 진입점을 찾은 뒤 하위 밀집 계층(Layer 0)으로 내려오며 탐색하는 다계층 스몰월드 그래프"
      },
      {
        "major": "",
        "minor": "IVF (역파일 클러스터 색인)",
        "desc": "K-Means로 벡터 공간을 보로노이 셀(클러스터 중심점)로 분할하고 질의와 가까운 클러스터 버킷만 탐색"
      },
      {
        "major": "",
        "minor": "PQ (Product Quantization)",
        "desc": "고차원 벡터를 여러 저차원 서브벡터로 쪼개어 코드북 대표값으로 양자화함으로써 메모리 사용량을 대폭 압축"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "하이브리드 검색 (Hybrid Search & RRF)",
    "mnemonic": "어·의·결·리 (BM25 + Dense + RRF)",
    "definition": "정확도·재현율 향상 위해 키워드와 벡터 결합한 검색",
    "keywords": [
      "어휘 검색(Sparse: BM25/역색인) + 의미 검색(Dense: 벡터/ANN)",
      "점수 융합(Rank Fusion): RRF(순위 역수 합산) · 가중 선형 결합",
      "2단계 파이프라인: Hybrid Retrieval → Cross-Encoder Reranker"
    ],
    "diagram": "db_hybrid.png",
    "tableRows": [
      {
        "major": "병렬 검색 결합\n(어·의 결합)",
        "minor": "어휘 검색 (Sparse: BM25)",
        "desc": "역색인 기반으로 고유명사·법령조항·모델번호·에러코드의 정확한 키워드 매칭에 강점 (동의어·문맥 파악은 한계)"
      },
      {
        "major": "",
        "minor": "의미 검색 (Dense: Vector)",
        "desc": "밀집 임베딩 벡터 기반으로 표현이 달라도 문맥과 의도가 유사한 문서를 찾아내어 재현율(Recall) 향상"
      },
      {
        "major": "점수 융합 및 정제\n(결·리)",
        "minor": "RRF (상호 순위 융합)",
        "desc": "스케일이 다른 두 검색 점수를 정규화 없이 오직 순위(Rank)의 역수 합산 공식 ∑ 1/(k + rank)로 강건하게 통합"
      },
      {
        "major": "",
        "minor": "가중 선형 결합",
        "desc": "Min-Max 또는 Z-Score 정규화 후 가중치 α를 곱해 α·Dense + (1-α)·BM25 점수를 합산"
      },
      {
        "major": "",
        "minor": "Cross-Encoder 리랭커",
        "desc": "1차 하이브리드 검색 상위 후보군(Top-K)을 질의와 문서 쌍으로 정밀 교차 인코딩해 최종 순위를 재정렬"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "공간 데이터베이스 (Spatial DB)",
    "mnemonic": "위·집·거·면 (Contains·Intersects·Union)",
    "definition": "점·선·다각형 공간 객체 저장 및 위상·거리 연산 DB",
    "keywords": [
      "공간 객체: Point(점) · LineString(선) · Polygon(다각형)",
      "공간 연산자: 위상(Contains·Intersects·Touches·Disjoint) · 집합(Union·Intersection) · 거리/면적"
    ],
    "diagram": "db_spatial.png",
    "tableRows": [
      {
        "major": "위상 연산자\n(Topological)",
        "minor": "Contains (포함)",
        "desc": "기하 객체 A가 기하 객체 B를 내부에 완전히 포함하는지 여부를 판별"
      },
      {
        "major": "",
        "minor": "Intersects (교차)",
        "desc": "두 공간 객체가 한 점이라도 겹치거나 교차하는 영역이 존재하는지 판별"
      },
      {
        "major": "",
        "minor": "Touches (접촉)",
        "desc": "두 공간 객체의 내부는 겹치지 않고 오직 경계선(Boundary)에서만 맞닿아 있는지 판별"
      },
      {
        "major": "",
        "minor": "Disjoint (분리)",
        "desc": "두 공간 객체가 접점이나 겹침 없이 공간적으로 완전히 떨어져 있는지 판별"
      },
      {
        "major": "집합 연산자",
        "minor": "Union (합집합)",
        "desc": "두 공간 객체의 영역을 하나로 합친 새로운 기하 객체를 반환"
      },
      {
        "major": "",
        "minor": "Intersection (교집합)",
        "desc": "두 공간 객체가 서로 공통으로 겹치는 교집합 영역만 추출하여 반환"
      },
      {
        "major": "",
        "minor": "Difference (차집합)",
        "desc": "객체 A 영역에서 객체 B와 겹치는 영역을 뺀 나머지 기하 객체를 반환"
      },
      {
        "major": "거리·기하 연산",
        "minor": "Distance (최단 거리)",
        "desc": "두 공간 객체 사이의 최단 거리를 계산 (반경 N km 이내 탐색 등에 활용)"
      },
      {
        "major": "",
        "minor": "Area (면적 계산)",
        "desc": "다각형(Polygon) 공간 객체가 차지하는 내부 영역의 넓이를 계산"
      },
      {
        "major": "",
        "minor": "Length (길이 계산)",
        "desc": "선형 객체(LineString)의 총 길이나 다각형 외곽선 둘레(Perimeter)를 계산"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터 레이크와 레이크하우스",
    "mnemonic": "브·실·골 (메달리온) / Delta·Iceberg·Hudi",
    "definition": "원천 데이터 저비용 저장과 ACID 결합한 아키텍처",
    "keywords": [
      "데이터 레이크: Schema-on-Read · ELT · 오브젝트 스토리지(S3)",
      "레이크하우스: 레이크(저비용·유연성) + DW(ACID·Time Travel·거버넌스)",
      "메달리온 아키텍처: 브론즈(원천) → 실버(정제/SSOT) → 골드(비즈니스 집계)"
    ],
    "diagram": "<img src=\"db_datalake1.png\" alt=\"데이터 레이크 개념도\"><img src=\"db_datalake2.png\" alt=\"DW vs 데이터 레이크 비교\">",
    "tableRows": [
      {
        "major": "아키텍처 비교",
        "minor": "데이터 웨어하우스 (DW)",
        "desc": "저장 시 스키마 강제(Schema-on-Write), ETL 전처리, 정형 데이터 중심의 BI 분석 특화 저장소"
      },
      {
        "major": "",
        "minor": "데이터 레이크 (Data Lake)",
        "desc": "조회 시 스키마 부여(Schema-on-Read), ELT, 정형·반정형·비정형 원본을 저비용 오브젝트 스토리지에 보존"
      },
      {
        "major": "",
        "minor": "데이터 레이크하우스",
        "desc": "오브젝트 스토리지 위에 오픈 테이블 포맷(Delta Lake, Iceberg, Hudi)을 얹어 ACID 트랜잭션과 타임 트래블을 지원"
      },
      {
        "major": "메달리온 아키텍처\n(브·실·골)",
        "minor": "브론즈 (Bronze 계층)",
        "desc": "외부 원천 시스템에서 수집된 Raw 데이터를 스키마 변형 없이 있는 그대로 보존하는 영역"
      },
      {
        "major": "",
        "minor": "실버 (Silver 계층)",
        "desc": "결측치·중복 제거, 데이터 품질 검증 및 표준화를 거쳐 전사 단일 진실 공급원(SSOT)을 구성하는 정제 영역"
      },
      {
        "major": "",
        "minor": "골드 (Gold 계층)",
        "desc": "부서별 BI 리포팅, KPI 대시보드, AI 피처 스토어 활용을 위해 비즈니스 목적에 맞게 집계·요약한 영역"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터 늪 (Data Swamp)과 데이터 메시",
    "mnemonic": "카·품·리·거 / 도·제·셀·거",
    "definition": "거버넌스 부재로 방치된 레이크와 도메인 분산 관리 체계",
    "keywords": [
      "데이터 늪(Data Swamp): 메타데이터·정제·계보·거버넌스 부재",
      "해결책(카품리거): 데이터 카탈로그 · 품질관리(DQM) · 리니지 · 거버넌스",
      "데이터 메시 4원칙(도제셀거): 도메인 소유권 · 제품으로서 데이터 · 셀프서비스 플랫폼 · 연합 거버넌스"
    ],
    "diagram": "<img src=\"db_dataswamp.png\" alt=\"데이터 늪 개념도\"><img src=\"db_datamesh.png\" alt=\"데이터 메시 아키텍처\">",
    "tableRows": [
      {
        "major": "데이터 늪 해결책\n(카·품·리·거)",
        "minor": "데이터 카탈로그 (메타데이터)",
        "desc": "기술·비즈니스·운영 메타데이터를 자동 수집·태깅하여 전사 데이터 검색 및 탐색 포털 구축"
      },
      {
        "major": "",
        "minor": "데이터 품질관리 (DQM)",
        "desc": "수집·정제 파이프라인에 스키마 검증, 이상치 탐지, 프로파일링 규칙을 자동화하여 쓰레기 데이터 유입 차단"
      },
      {
        "major": "",
        "minor": "데이터 리니지 (계보 추적)",
        "desc": "데이터의 원천 출처부터 변환·이동·집계 전 과정을 시각적으로 추적하여 신뢰성과 변경 영향도 확보"
      },
      {
        "major": "",
        "minor": "데이터 거버넌스",
        "desc": "데이터 스튜어드 지정, 접근권한 통제, 보존주기(TTL) 정책으로 방치 데이터를 체계적 관리"
      },
      {
        "major": "데이터 메시 4원칙\n(도·제·셀·거)",
        "minor": "도메인 중심 소유권",
        "desc": "중앙 IT 조직이 아닌 데이터를 가장 잘 아는 각 비즈니스 도메인 팀이 데이터의 소유와 품질을 직접 책임"
      },
      {
        "major": "",
        "minor": "제품으로서의 데이터",
        "desc": "타 도메인 소비자가 쉽게 발견·이해·신뢰·활용할 수 있도록 데이터를 완결된 제품(Data as a Product)으로 제공"
      },
      {
        "major": "",
        "minor": "셀프서비스 데이터 플랫폼",
        "desc": "도메인 팀이 인프라 구축 부담 없이 자율적으로 데이터 파이프라인을 생성·운영할 수 있는 공통 플랫폼 제공"
      },
      {
        "major": "",
        "minor": "연합형 전산 거버넌스",
        "desc": "도메인 자율성을 존중하되 전사 표준·보안·상호운용성 정책은 연합 거버넌스 합의를 통해 자동 집행"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터 거버넌스 (Data Governance)",
    "mnemonic": "원·조·프 / 표·구·흐·품·베·보",
    "definition": "전사 데이터 가치 창출 위해 원칙·조직·절차 관리 체계",
    "keywords": [
      "구성 3요소(원조프): 원칙(Principle) · 조직(Organization) · 프로세스(Process)",
      "관리 영역(표구흐품베보): 표준 · 구조 · 흐름 · 품질 · 데이터베이스 · 보안",
      "국제표준: ISO/IEC 38505, TTAK.KO-10.0555"
    ],
    "diagram": "db_governance.png",
    "tableRows": [
      {
        "major": "핵심 3요소\n(원·조·프)",
        "minor": "원칙 (Principle)",
        "desc": "전사 데이터를 유지·관리하기 위한 지침과 규정 (보안 지침, 품질 기준, 변경관리 정책)"
      },
      {
        "major": "",
        "minor": "조직 (Organization)",
        "desc": "데이터를 운영·관리하는 역할과 책임 체계 (CDO, 데이터 거버넌스 위원회, 데이터 스튜어드, DA, DBA)"
      },
      {
        "major": "",
        "minor": "프로세스 (Process)",
        "desc": "데이터 표준화, 품질 진단·개선, 메타데이터 현행화 등 관리 활동의 작업 절차 및 모니터링 체계"
      },
      {
        "major": "관리 6대 영역\n(표·구·흐·품·베·보)",
        "minor": "데이터 표준 관리",
        "desc": "전사 공통 표준단어, 표준용어, 표준도메인, 표준코드 정의 및 준수 통제"
      },
      {
        "major": "",
        "minor": "데이터 구조 관리",
        "desc": "전사 데이터 아키텍처(EA/DA), 주제영역, 개념·논리·물리 데이터 모델의 일관성 관리"
      },
      {
        "major": "",
        "minor": "데이터 흐름 관리",
        "desc": "시스템 간 데이터 연계(EAI/CDC/ETL) 및 데이터 계보(Lineage) 추적 관리"
      },
      {
        "major": "",
        "minor": "데이터 품질 관리",
        "desc": "데이터 값과 구조의 정합성 프로파일링, 업무규칙(BR) 검증, 오류 데이터 개선 활동"
      },
      {
        "major": "",
        "minor": "데이터베이스 관리",
        "desc": "물리 DB 생성·운영, 공간 관리, 백업·회복 및 성능 튜닝"
      },
      {
        "major": "",
        "minor": "데이터 보안 관리",
        "desc": "접근 권한 통제, 개인정보 암호화·비식별화, 감사 로그 및 법규 컴플라이언스 준수"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터 품질관리 (DQM)와 데이터 표준화",
    "mnemonic": "데·구·프 / 용·단·도·코 / 명·정·형·규",
    "definition": "데이터 정합성 위해 값·구조·프로세스 진단·개선 체계",
    "keywords": [
      "DQM 관리 대상(데구프): 데이터 값 · 데이터 구조 · 데이터 관리 프로세스",
      "데이터 표준화 요소(용단도코): 표준용어 · 표준단어 · 표준도메인 · 표준코드",
      "표준화 원칙(명정형규): 명칭 · 정의 · 형식 · 규칙"
    ],
    "diagram": "<img src=\"db_dqm.png\" alt=\"데이터 품질관리 프레임워크\"><img src=\"db_standard.png\" alt=\"데이터 표준화 구성요소\"><img src=\"db_mdm.png\" alt=\"MDM 구성도\">",
    "tableRows": [
      {
        "major": "DQM 관리 대상\n(데·구·프)",
        "minor": "데이터 값 (Value)",
        "desc": "결측·오류·중복·불일치 등 실제 저장된 데이터 내용의 정확성·완전성·유효성 관리"
      },
      {
        "major": "",
        "minor": "데이터 구조 (Structure)",
        "desc": "데이터 모델, 엔터티·속성·식별자·관계 및 무결성 제약조건 설계의 적정성 관리"
      },
      {
        "major": "",
        "minor": "관리 프로세스 (Process)",
        "desc": "데이터 생성·변경·유통·폐기 전 과정의 표준 준수와 책임·절차 관리"
      },
      {
        "major": "데이터 표준화\n(용·단·도·코)",
        "minor": "표준 용어 (Term)",
        "desc": "업무에서 사용하는 데이터 항목(컬럼/속성)의 전사 공통 한글명·영문명과 업무적 정의"
      },
      {
        "major": "",
        "minor": "표준 단어 (Word)",
        "desc": "표준 용어를 조합하기 위한 최소 의미 단위의 단어 사전과 영문 정식명·약어 정의"
      },
      {
        "major": "",
        "minor": "표준 도메인 (Domain)",
        "desc": "성격이 유사한 데이터 항목들을 그룹화하여 데이터 타입, 길이, 소수점, 허용 범위를 일괄 지정"
      },
      {
        "major": "",
        "minor": "표준 코드 (Code)",
        "desc": "여러 시스템에서 공통 참조하는 분류 코드값과 코드 의미를 단일 체계로 통합 정의"
      },
      {
        "major": "표준화 4원칙\n(명·정·형·규)",
        "minor": "명칭 (Name)",
        "desc": "동일한 데이터는 전사적으로 동일한 한글·영문 명칭을 사용하도록 통일 (동의어·동음이의어 배제)"
      },
      {
        "major": "",
        "minor": "정의 (Definition)",
        "desc": "누구나 동일하게 이해할 수 있도록 데이터 항목의 업무적 의미와 범위를 명확히 기술"
      },
      {
        "major": "",
        "minor": "형식 (Format)",
        "desc": "데이터 타입, 길이, 소수점 자리수, 표현 포맷을 표준 도메인 기준으로 일관되게 지정"
      },
      {
        "major": "",
        "minor": "규칙 (Rule)",
        "desc": "허용 가능한 값의 범위, 필수 입력 여부(NOT NULL), 기본값, 참조 코드 규칙을 통일"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터 품질인증 (DQ 인증)",
    "mnemonic": "내·관 (내용 Class A·B·C / 관리체계 Lv2~5)",
    "definition": "데이터산업법 근거 데이터 내용·관리체계 심사·보증 제도",
    "keywords": [
      "데이터산업법 제20조 기반 국가 공인 인증",
      "데이터 내용 인증(1년): 정형·비정형 / Simple·Normal·Complex / Class A·B·C",
      "데이터 관리체계 인증(3년): ISO/IEC 33020 기반 / 성숙도 Lv2 ~ Lv5"
    ],
    "diagram": "db_dq_cert.png",
    "tableRows": [
      {
        "major": "데이터 내용 인증",
        "minor": "인증 대상 및 유형",
        "desc": "정형 데이터 및 비정형(텍스트·이미지 등) 데이터 대상 (구조 복잡도에 따라 Simple, Normal, Complex 분류)"
      },
      {
        "major": "",
        "minor": "심사 기준 및 유효기간",
        "desc": "ISO/IEC 25024 및 AI 데이터 품질 표준(ISO/IEC 5259-2) 기반 정합성 심사, 유효기간 1년"
      },
      {
        "major": "",
        "minor": "인증 등급 (Class A·B·C)",
        "desc": "데이터 정합률 측정 결과에 따라 Class A(최우수), Class B(우수), Class C(보통) 등급 부여"
      },
      {
        "major": "데이터 관리체계 인증",
        "minor": "심사 기준 및 유효기간",
        "desc": "ISO/IEC 33020 기반 데이터 프로젝트 관리·측정·프로세스 개선 심사, 유효기간 3년"
      },
      {
        "major": "",
        "minor": "성숙도 등급 (Level 2~5)",
        "desc": "Level 2(실무적 관리) → Level 3(표준 프로세스 수행) → Level 4(정량적 관리) → Level 5(지속적 최적화)"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터 가치평가 (Data Valuation)",
    "mnemonic": "시·수·원 (시장·수익·원가) / 품·권·시·경",
    "definition": "데이터 자산화 위해 시장·수익·원가로 가치를 산정 기법",
    "keywords": [
      "데이터산업법 제14조 근거 무형자산 가치 산정",
      "3대 평가 방법론(시수원): 시장접근법 · 수익접근법 · 원가접근법",
      "4대 평가 요인(품권시경): 데이터 특성(품질) · 법적특성(권리) · 시장환경 · 사업성(경제)"
    ],
    "diagram": "db_valuation.png",
    "tableRows": [
      {
        "major": "4대 평가 요인\n(품·권·시·경)",
        "minor": "데이터 특성 (품질)",
        "desc": "데이터의 정확성, 완전성, 최신성(갱신주기), 규모 및 결합 활용 유용성 평가"
      },
      {
        "major": "",
        "minor": "법적 특성 (권리)",
        "desc": "데이터 소유권, 지식재산권, 라이선스 범위, 개인정보 적법성 등 권리 안정성 평가"
      },
      {
        "major": "",
        "minor": "시장 환경",
        "desc": "데이터가 속한 산업 분야의 시장 규모, 거래 활성화 수준, 데이터의 희소성 및 대체 가능성 평가"
      },
      {
        "major": "",
        "minor": "사업성 역량 (경제성)",
        "desc": "데이터를 활용한 비즈니스 모델의 매출 기여도, 원가 절감 효과, 경제적 수명 평가"
      },
      {
        "major": "3대 평가 기법\n(시·수·원)",
        "minor": "시장접근법 (Market)",
        "desc": "유사한 데이터의 실제 시장 거래사례가 존재할 때 비교 지표를 보정하여 가치를 산정"
      },
      {
        "major": "",
        "minor": "수익접근법 (Income)",
        "desc": "해당 데이터를 활용해 미래에 창출할 것으로 기대되는 현금흐름(수익)을 현재가치로 할인하여 산정"
      },
      {
        "major": "",
        "minor": "원가접근법 (Cost)",
        "desc": "거래사례나 미래 수익 추정이 어려울 때, 동일 데이터를 재생산·대체하는 데 투입된 원가를 기준으로 산정"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터 스페이스와 데이터 주권",
    "mnemonic": "주·분·연 / IDS-RAM · DID · 커넥터",
    "definition": "데이터 주권 보장하며 주체 간 안전 공유하는 분산 체계",
    "keywords": [
      "데이터 스페이스 3특징(주분연): 데이터 주권 보장 · 분산형 아키텍처 · 연합 거버넌스",
      "핵심 기술: IDS-RAM · IDS Connector · Broker · DID/VC · DAPS",
      "데이터 주권 & 소버린 AI (데이터 레지던시 · PET · 차분프라이버시)"
    ],
    "diagram": "db_dataspace.png",
    "tableRows": [
      {
        "major": "데이터 스페이스\n3대 특징 (주·분·연)",
        "minor": "데이터 주권 보장",
        "desc": "데이터 제공자가 자기 데이터의 접근권한, 사용목적, 유효기간, 재배포 금지 정책을 직접 통제"
      },
      {
        "major": "",
        "minor": "분산형 아키텍처",
        "desc": "원본 데이터를 중앙 저장소에 복제·집중시키지 않고 각 참여자의 공간에 둔 채 P2P 커넥터로 안전 연동"
      },
      {
        "major": "",
        "minor": "연합 거버넌스",
        "desc": "참여 기업·기관 간 공통 데이터 표준, 신원 인증, 스마트 계약 기반 신뢰 생태계(GAIA-X, Catena-X) 구축"
      },
      {
        "major": "핵심 기술 요소",
        "minor": "IDS Connector (커넥터)",
        "desc": "참여자 경계에서 데이터를 송수신하고 데이터 사용 정책(Usage Control)을 강제 실행하는 게이트웨이"
      },
      {
        "major": "",
        "minor": "Metadata Broker (중개자)",
        "desc": "원본 데이터는 보관하지 않고 참여자들이 등록한 데이터 카탈로그 검색 및 매칭만 중개"
      },
      {
        "major": "",
        "minor": "DAPS & DID / VC",
        "desc": "탈중앙 신원증명(DID/VC)과 동적 속성 프로비저닝(DAPS)을 통해 참여자 및 커넥터의 신뢰성 인증"
      },
      {
        "major": "",
        "minor": "IDS-RAM 참조 아키텍처",
        "desc": "비즈니스 · 기능 · 프로세스 · 정보 · 시스템 5계층과 보안·거버넌스 3관점으로 구성된 국제 표준 모델"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "개인정보 안심구역과 데이터 안심구역",
    "mnemonic": "개·보·위(가명정보) vs 과·기·부(미개방데이터)",
    "definition": "민감·미개방 데이터를 안전 보안 환경에서 분석하는 제도",
    "keywords": [
      "개인정보 안심구역: 개인정보보호위원회 지정 · 가명/민감정보 · 폐쇄망",
      "데이터 안심구역: 과기정통부 지정(데이터산업법) · 미개방 공공/민간 데이터"
    ],
    "diagram": "<img src=\"db_safezone1.png\" alt=\"데이터 안심구역 개념도\"><img src=\"db_safezone2.png\" alt=\"데이터 안심구역 기능 구성도\">",
    "tableRows": [
      {
        "major": "개인정보 안심구역",
        "minor": "운영 근거 및 기관",
        "desc": "개인정보보호위원회가 지정·운영하며 가명정보 처리·결합 및 유연한 개인정보 실증 환경을 지원"
      },
      {
        "major": "",
        "minor": "대상 데이터 및 보안",
        "desc": "가명정보·민감 개인정보를 대상으로 물리적·논리적 망분리(폐쇄망), 다중 인증, PET 기술 및 반출 심사 적용"
      },
      {
        "major": "데이터 안심구역",
        "minor": "운영 근거 및 기관",
        "desc": "데이터산업법( 및 데이터기본법)에 의거 과학기술정보통신부 등이 지정하는 미개방 데이터 안전 분석 공간"
      },
      {
        "major": "",
        "minor": "핵심 제공 기능",
        "desc": "미개방 데이터 안전 분석환경 제공, AI 분석도구·GPU 자원 지원, 이용자 반입자료와의 연계 및 분석결과 반출 지원"
      },
      {
        "major": "",
        "minor": "기술적 지정요건",
        "desc": "보안대책이 구비된 물리적 시설·공간 확보, 데이터 분석 시스템 구축 및 정보보호 대책 수립·시행"
      },
      {
        "major": "",
        "minor": "운영적 지정요건",
        "desc": "운영책임자·보안책임자 선임을 포함한 4인 이상 전담 조직 구성 및 운영계획·데이터 반출입 통제 정책 수립"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "합성데이터 (Synthetic Data)",
    "mnemonic": "통·딥·물 / 충·다·보 (충실도·다양성·보안성)",
    "definition": "개인정보 보호와 불균형 해소 위해 알고리즘 생성 데이터",
    "keywords": [
      "생성 기법(통딥물): 통계/규칙(SMOTE) · 딥러닝(GAN/VAE/Diffusion) · 물리 시뮬레이션(디지털트윈)",
      "품질 평가 3기준(충다보): 충실도(Fidelity) · 다양성(Diversity) · 보안성(Privacy)",
      "한계점: 모델 붕괴(Model Collapse) · 원천 편향 증폭"
    ],
    "diagram": "<img src=\"db_synthetic1.png\" alt=\"합성데이터 개념도\"><img src=\"db_synthetic2.png\" alt=\"합성데이터 생성 메커니즘\">",
    "tableRows": [
      {
        "major": "생성 메커니즘\n(통·딥·물)",
        "minor": "통계 · 규칙 기반",
        "desc": "몬테카를로 시뮬레이션, 베이지안 네트워크, SMOTE(소수 클래스 KNN 보간 오버샘플링) 등 분포 기반 생성"
      },
      {
        "major": "",
        "minor": "딥러닝 생성형 모델",
        "desc": "GAN(CTGAN), VAE, Diffusion 모델, LLM 등을 활용해 고차원 정형·비정형 데이터의 잠재 분포 학습 후 생성"
      },
      {
        "major": "",
        "minor": "물리 시뮬레이션 기반",
        "desc": "3D 게임엔진·디지털 트윈 가상환경에서 자율주행 악천후·사고나 제조 결함 등 희귀 엣지 케이스 생성"
      },
      {
        "major": "품질 평가 3기준\n(충·다·보)",
        "minor": "충실도 (Fidelity)",
        "desc": "원천 데이터의 통계적 분포·상관관계·속성 특성을 얼마나 사실적으로 모사했는지 평가 (KS-검정, FID)"
      },
      {
        "major": "",
        "minor": "다양성 (Diversity)",
        "desc": "특정 패턴에만 치우치는 모드 붕괴(Mode Collapse) 없이 원천 데이터 분포 공간 전체를 고르게 포괄하는지 검증"
      },
      {
        "major": "",
        "minor": "보안성 (Privacy)",
        "desc": "원본 데이터 복제 여부(DCR)와 멤버십 추론 공격 방어력을 검증하고 차분 프라이버시(DP)로 재식별 차단"
      },
      {
        "major": "한계 및 과제",
        "minor": "모델 붕괴 (Model Collapse)",
        "desc": "합성데이터로만 반복 재학습할 경우 희귀 분포 꼬리가 소실되고 생성 품질이 점진적으로 퇴화하는 현상"
      },
      {
        "major": "",
        "minor": "원천 편향 (Bias) 증폭",
        "desc": "원본 학습 데이터에 내재된 통계적 편향이 합성 생성 과정에서 오히려 확대 재생산될 위험"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "데이터 마이닝 (정형·비정형 · 텍스트 · 오피니언)",
    "mnemonic": "수·저·처·분·시 / 비·데·준·모·평·전 / 표·분·수·모·평",
    "definition": "대규모 데이터에서 숨겨진 패턴과 유용한 지식 도출 기법",
    "keywords": [
      "절차: 수·저·처·분·시 / KDD(선택→전처리→변환→마이닝→평가)",
      "방법론: CRISP-DM(비데준모평전) · SEMMA(표분수모평)",
      "텍스트 마이닝(토픽·지식 추출, TF-IDF·LDA) vs 오피니언 마이닝(주관적 감성·호불호, ABSA)"
    ],
    "diagram": "db_mining.png",
    "tableRows": [
      {
        "major": "표준 방법론",
        "minor": "KDD 프로세스",
        "desc": "데이터 선택(Selection) → 전처리(Preprocessing) → 변환(Transformation) → 데이터 마이닝 → 해석/평가"
      },
      {
        "major": "",
        "minor": "CRISP-DM (비·데·준·모·평·전)",
        "desc": "비즈니스 이해 → 데이터 이해 → 데이터 준비 → 모델링 → 평가 → 전개 (6단계 순환형 표준 방법론)"
      },
      {
        "major": "",
        "minor": "SEMMA (표·분·수·모·평)",
        "desc": "Sample(표본추출) → Explore(탐색) → Modify(변형) → Model(모델링) → Assess(검증/평가) (SAS 주도 통계 중심)"
      },
      {
        "major": "데이터 유형별",
        "minor": "정형 데이터 마이닝",
        "desc": "RDBMS/DW 정형 테이블을 대상으로 분류(의사결정나무·SVM), 군집(K-Means), 연관(Apriori), 회귀 분석 수행"
      },
      {
        "major": "",
        "minor": "비정형 데이터 마이닝",
        "desc": "텍스트·웹·SNS·멀티미디어를 토큰화·임베딩 변환하여 숨겨진 문맥 패턴과 관계를 추출"
      },
      {
        "major": "특화 기법 비교",
        "minor": "텍스트 마이닝 (Text)",
        "desc": "형태소 분석, TF-IDF, LDA 토픽 모델링, 개체명 인식(NER)을 통해 비정형 문서에서 객관적 주제와 사실 지식 추출"
      },
      {
        "major": "",
        "minor": "오피니언 마이닝 (Opinion)",
        "desc": "리뷰·SNS·VoC 텍스트에서 감성사전 및 속성 기반 감성분석(ABSA)으로 주관적 호불호(긍정·부정·중립) 평판 정량화"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "연관규칙 분석 (Association Analysis)",
    "mnemonic": "지·신·향 (P(A∩B) · P(B|A) · Lift)",
    "definition": "항목 간 동시 발생 관계를 지·신·향으로 분석하는 기법",
    "keywords": [
      "장바구니 분석 (Market Basket Analysis)",
      "지지도(Support) · 신뢰도(Confidence) · 향상도(Lift)",
      "Apriori (후보군 가지치기) · FP-Growth (FP-Tree 기반)"
    ],
    "diagram": "db_assoc.png",
    "tableRows": [
      {
        "major": "3대 평가 지표\n(지·신·향)",
        "minor": "지지도 (Support)",
        "desc": "전체 거래 중에서 항목 A와 항목 B가 동시에 포함된 거래의 비율: P(A ∩ B)"
      },
      {
        "major": "",
        "minor": "신뢰도 (Confidence)",
        "desc": "항목 A를 포함한 거래 중에서 항목 B도 함께 포함될 조건부 확률: P(A ∩ B) / P(A) = P(B | A)"
      },
      {
        "major": "",
        "minor": "향상도 (Lift)",
        "desc": "A와 B가 독립일 때 대비 두 항목이 함께 나타나는 비율: P(A ∩ B) / (P(A) × P(B)) (Lift > 1: 양의 상관)"
      },
      {
        "major": "대표 알고리즘",
        "minor": "Apriori 알고리즘",
        "desc": "최소 지지도(Min Support)를 만족하는 빈발 항목집합만 확장(가지치기)하나, 후보군 생성 및 반복 DB 스캔 부담 발생"
      },
      {
        "major": "",
        "minor": "FP-Growth 알고리즘",
        "desc": "DB를 단 2회만 스캔하여 빈발 패턴 트리(FP-Tree)에 압축 저장한 뒤 후보 항목집합 생성 없이 고속 마이닝"
      }
    ]
  },
  {
    "domain": "DB",
    "topic": "군집분석 (Cluster Analysis)",
    "mnemonic": "분·계·밀 (분할중심 · 계층적 · 밀도기반)",
    "definition": "레이블 없는 데이터 유사성을 측정해 그룹으로 묶는 기법",
    "keywords": [
      "비지도학습 (내적 유사도 극대화 · 외적 유사도 극소화)",
      "분할중심(K-Means · K-Medoids)",
      "계층적 군집(병합형 · 분할형) & 밀도기반(DBSCAN · DENCLUE)"
    ],
    "diagram": "db_clustering.png",
    "tableRows": [
      {
        "major": "분할 중심 군집\n(분)",
        "minor": "K-Means 군집화",
        "desc": "사전 지정한 K개 군집의 평균(Centroid) 중심점을 반복 갱신 (속도가 빠르고 구형 군집에 적합하나 이상치에 민감)"
      },
      {
        "major": "",
        "minor": "K-Medoids (PAM · CLARA)",
        "desc": "평균값 대신 군집 내 실제 존재하는 대표 객체(Medoid)를 중심으로 삼아 이상치(Outlier)와 노이즈에 강건"
      },
      {
        "major": "계층적 군집\n(계)",
        "minor": "응집형 (Agglomerative)",
        "desc": "각 데이터를 개별 군집으로 시작해 가장 가까운 군집끼리 순차 병합하며 덴드로그램(Dendrogram) 형성 (Bottom-Up)"
      },
      {
        "major": "",
        "minor": "분할형 (Divisive)",
        "desc": "전체 데이터를 하나의 큰 군집으로 시작해 유사도가 낮은 하위 군집으로 순차 분할 (Top-Down)"
      },
      {
        "major": "밀도 기반 군집\n(밀)",
        "minor": "DBSCAN",
        "desc": "반경(Epsilon) 내 최소 점 개수(MinPts) 기준으로 고밀도 영역을 연결 (비구형 기하학적 군집 발굴 및 노이즈 분리 강점)"
      },
      {
        "major": "",
        "minor": "DENCLUE",
        "desc": "데이터 공간 전체에 커널 밀도 추정(KDE) 확률 밀도 함수를 적용해 국소 극댓값(Attractor) 기반으로 군집화"
      }
    ]
  },
  {
    "domain": "DS",
    "topic": "쿠버네티스 (Kubernetes)",
    "mnemonic": "에·스·컨·이 / 큐·프·파",
    "definition": "컨테이너 배포·확장·복구를 자동화하는 오케스트레이션",
    "keywords": [
      "마스터 노드 (Control Plane)",
      "워커 노드 (Data Plane)",
      "API 서버 · etcd · 스케줄러",
      "큐블릿 · 큐브프록시 · 파드(Pod)",
      "두음: 에스케컨이 / 큐프파"
    ],
    "diagram": "[마스터 노드] API 서버(통신 허브) ↔ etcd(상태 저장) / 스케줄러(배치) / 컨트롤러(상태 유지)\n                    ↓ 명령 하달\n[워커 노드]   큐블릿(노드 에이전트) + 큐브 프록시(네트워크) → [파드(Pod: 컨테이너 캡슐)] 구동",
    "tableRows": [
      {
        "major": "마스터 노드",
        "minor": "kube-apiserver",
        "desc": "모든 내부 컴포넌트와 외부 명령(kubectl)이 거치는 중앙 통신 관문"
      },
      {
        "major": "마스터 노드",
        "minor": "etcd",
        "desc": "클러스터의 모든 설정값과 현재 상태를 안전하게 보관하는 분산 Key-Value 저장소"
      },
      {
        "major": "마스터 노드",
        "minor": "스케줄러 & 컨트롤러",
        "desc": "자원 여유를 보고 파드를 노드에 배치(스케줄러)하고 원하는 복제본 개수를 유지(컨트롤러)"
      },
      {
        "major": "워커 노드",
        "minor": "kubelet & kube-proxy",
        "desc": "마스터 지시를 받아 컨테이너를 실행(큐블릿)하고 파드 간 네트워크 통신 규칙 제어(프록시)"
      },
      {
        "major": "배포 단위",
        "minor": "파드 (Pod)",
        "desc": "쿠버네티스에서 생성·배포·관리할 수 있는 가장 작은 컨테이너 묶음 단위 (IP·볼륨 공유)"
      }
    ]
  },
  {
    "domain": "DS",
    "topic": "클라우드 네이티브 (Cloud Native)",
    "mnemonic": "마·컨·씨·데",
    "definition": "클라우드 탄력성 위해 MSA·컨테이너·자동화 결합 체계",
    "keywords": [
      "MSA · 컨테이너 · CI/CD · 데브옵스",
      "12-Factor App",
      "무중단 배포 (블루그린·카나리)",
      "서비스 메시 & 서버리스",
      "두음: 마컨씨데"
    ],
    "diagram": "[설계: MSA] + [패키징: 컨테이너] + [배포: CI/CD 파이프라인] + [문화: DevOps]\n➔ 클라우드의 탄력성·민첩성·고가용성을 100% 활용하는 애플리케이션 체계",
    "tableRows": [
      {
        "major": "4대 핵심 기둥",
        "minor": "MSA (마이크로서비스)",
        "desc": "업무 기능별로 서비스를 독립 분리하여 개별 개발·배포·확장성 확보"
      },
      {
        "major": "4대 핵심 기둥",
        "minor": "컨테이너 (Container)",
        "desc": "실행 환경과 코드를 하나로 묶어 어디서나 동일하고 빠르게 기동"
      },
      {
        "major": "4대 핵심 기둥",
        "minor": "CI/CD 자동화",
        "desc": "소스 빌드·테스트(CI)부터 운영 환경 무중단 배포(CD)까지 전 과정 자동화"
      },
      {
        "major": "4대 핵심 기둥",
        "minor": "데브옵스 (DevOps)",
        "desc": "개발 조직과 운영 조직의 장벽을 허물고 자율적·지속적 서비스 개선 수행"
      }
    ]
  },
  {
    "domain": "NW",
    "topic": "HTTP/3",
    "mnemonic": "유·제·로·홀·독·연",
    "definition": "앞차막힘 해소 위해 QUIC 기반으로 동작하는 웹표준",
    "keywords": [
      "QUIC 전송 계층 기반 차세대 웹 프로토콜",
      "TCP HOLB (앞차 막힘) 근본 해소",
      "QPACK 헤더 압축",
      "TLS 1.3 기본 내장",
      "두음: 유제로홀독연"
    ],
    "diagram": "• HTTP/2 : [HTTP/2 (HPACK)] + [TLS 1.2/1.3 별도] + [TCP (패킷 1개 유실 시 전체 스트림 멈춤: TCP HOLB)]\n• HTTP/3 : [HTTP/3 (QPACK)] + [QUIC (TLS 1.3 내장 + 독립 스트림 다중화)] + [UDP]",
    "tableRows": [
      {
        "major": "등장 배경",
        "minor": "HTTP/2의 TCP 한계",
        "desc": "HTTP/2는 애플리케이션 계층 다중화를 도입했으나, 하부 전송 계층인 TCP에서 패킷 1개만 유실되어도 전체 스트림이 멈추는 TCP HOLB 병목 발생"
      },
      {
        "major": "핵심 구조",
        "minor": "QUIC 위에서 동작",
        "desc": "기존 TCP를 과감히 버리고 구글이 설계한 UDP 기반의 QUIC 프로토콜을 전송 계층으로 채택한 IETF 표준 차세대 웹 프로토콜"
      },
      {
        "major": "헤더 압축",
        "minor": "QPACK 알고리즘",
        "desc": "스트림들이 서로 독립적으로 도착하는 비순차 환경에서도 HOLB 없이 안전하게 HTTP 헤더를 압축·복원하는 QPACK 적용"
      }
    ]
  },
  {
    "domain": "NW",
    "topic": "QUIC 프로토콜",
    "mnemonic": "유·영·일·독·연",
    "definition": "초고속 연결과 다중화 위해 UDP 위에 구현한 프로토콜",
    "keywords": [
      "UDP 기반 신뢰성 전송 프로토콜",
      "0-RTT / 1-RTT 초고속 핸드셰이크",
      "TLS 1.3 암호화 일체화",
      "독립 스트림 다중화",
      "연결 ID (Connection Migration)"
    ],
    "diagram": "[기존 TCP+TLS] TCP 3-Way 핸드셰이크(1-RTT) + TLS 협상(1~2 RTT) ➔ 총 2~3 RTT 소요\n[QUIC 연결]    전송 핸드셰이크 + TLS 1.3 키 교환 통합 ➔ 최초 연결 1-RTT, 재방문 시 0-RTT 즉시 데이터 전송!",
    "tableRows": [
      {
        "major": "핵심 원리",
        "minor": "UDP 위 신뢰성·보안 구현",
        "desc": "커널 수정이 어려운 TCP 대신 UDP를 기반으로 채택하고, 사용자 공간에서 흐름 제어·혼잡 제어·재전송과 TLS 1.3 보안을 직접 구현"
      },
      {
        "major": "지연 단축",
        "minor": "1-RTT / 0-RTT 연결",
        "desc": "전송 연결 설정과 TLS 1.3 암호화 협상을 단일 핸드셰이크로 합쳐 최초 접속 시 1-RTT, 이전 세션 캐시 보유 시 0-RTT 만에 데이터 전송"
      },
      {
        "major": "성능 및 이동성",
        "minor": "독립 스트림 & Connection ID",
        "desc": "• 스트림별 개별 손실 복구로 특정 스트림 패킷 유실이 타 스트림을 막지 않음(HOLB 제거)\n• IP·포트 대신 고유 Connection ID로 세션을 식별해 Wi-Fi ↔ 5G 망 전환 시에도 연결 유지"
      }
    ]
  },
  {
    "domain": "NW",
    "topic": "소프트웨어 정의 네트워크 (SDN)",
    "mnemonic": "응·제·데 / 북·남",
    "definition": "네트워크 중앙 관리 위해 제어·데이터 평면 분리한 기술",
    "keywords": [
      "제어 영역(Control)과 데이터 영역(Data) 분리",
      "SDN 중앙 컨트롤러",
      "남향 인터페이스 (OpenFlow)",
      "북향 인터페이스 (REST API)"
    ],
    "diagram": "[응용 계층 (보안·라우팅 앱)] ↕ 북향 API ↕ [제어 계층 (중앙 컨트롤러)] ↕ 남향 API(OpenFlow) ↕ [데이터 계층 (스위치)]",
    "tableRows": [
      {
        "major": "핵심 원리",
        "minor": "제어·전달 평면 분리",
        "desc": "네트워크 장비에서 경로 결정 두뇌(Control Plane)를 분리해 중앙 소프트웨어 컨트롤러로 통합 관리"
      },
      {
        "major": "3계층 구조",
        "minor": "데이터 계층 (인프라)",
        "desc": "컨트롤러가 내려준 플로우 테이블 규칙에 따라 패킷 전달(Forwarding)만 고속 수행하는 물리/가상 스위치"
      },
      {
        "major": "3계층 구조",
        "minor": "제어 계층 (컨트롤러)",
        "desc": "전체 네트워크 토폴로지를 중앙에서 파악하고 최적 경로 및 정책을 계산하는 SDN 두뇌"
      },
      {
        "major": "인터페이스",
        "minor": "남향(South) & 북향(North)",
        "desc": "• 남향 API: 컨트롤러와 스위치 장비 간 플로우 제어 프로토콜 (OpenFlow 등)\n• 북향 API: 컨트롤러와 상위 네트워크 관리 앱 간의 통신 인터페이스 (REST API)"
      }
    ]
  },
  {
    "domain": "경영",
    "topic": "전사적 아키텍처 (EA)",
    "mnemonic": "업·응·데·기·보 / 성·업·서·데·기",
    "definition": "전사 IT자원 표준화 위해 5대 아키텍처 수립하는 체계",
    "keywords": [
      "정보기술아키텍처 (ITA)",
      "5대 영역: 업무·응용·데이터·기술·보안",
      "범정부 5대 참조모델 (PRM·BRM·SRM·DRM·TRM)",
      "As-Is → To-Be → 이행계획",
      "두음: 업응데기보 / 성업서데기"
    ],
    "diagram": "[비전·원칙 수립] ➔ [현재(As-Is) 분석] ➔ [목표(To-Be) 5대 아키텍처 설계] ➔ [이행계획 및 거버넌스]",
    "tableRows": [
      {
        "major": "5대 아키텍처",
        "minor": "업무 (BA) & 응용 (AA)",
        "desc": "조직의 업무 프로세스 구조(BA)와 이를 지원하는 애플리케이션 체계(AA) 정의"
      },
      {
        "major": "5대 아키텍처",
        "minor": "데이터(DA)·기술(TA)·보안(SA)",
        "desc": "전사 데이터 표준(DA), 인프라 기술 표준(TA), 보안 통제 체계(SA) 설계"
      },
      {
        "major": "5대 참조모델",
        "minor": "PRM · BRM · SRM · DRM · TRM",
        "desc": "성과 참조모델(PRM), 업무 참조모델(BRM), 서비스 참조모델(SRM), 데이터 참조모델(DRM), 기술 참조모델(TRM)"
      },
      {
        "major": "추진 절차",
        "minor": "이행계획 수립",
        "desc": "현황(As-Is)과 목표(To-Be) 간의 격차(Gap)를 분석하여 단계별 전환 로드맵 도출"
      }
    ]
  },
  {
    "domain": "경영",
    "topic": "정보보호 및 개인정보보호 관리체계 (ISMS-P)",
    "mnemonic": "관·보·개 101",
    "definition": "정보보호와 개인정보 보호 위해 101개 기준 심사 체계",
    "keywords": [
      "관리체계 수립·운영 (16개)",
      "보호대책 요구사항 (64개)",
      "개인정보 처리단계 (21개)",
      "총 101개 통제 항목",
      "두음: 관보개 101"
    ],
    "diagram": "ISMS-P 총 101개 기준 = [1. 관리체계 수립·운영 (16)] + [2. 보호대책 요구사항 (64)] + [3. 개인정보 생명주기 (21)]",
    "tableRows": [
      {
        "major": "인증 영역 1",
        "minor": "관리체계 수립·운영",
        "desc": "기반 마련, 위험 관리(자산식별→위험평가→대책선정), 운영, 점검 및 개선 (16개 항목)"
      },
      {
        "major": "인증 영역 2",
        "minor": "보호대책 요구사항",
        "desc": "정책·조직, 인적·물리보안, 인증·접근통제, 암호화, 개발·사고대응 등 (64개 항목)"
      },
      {
        "major": "인증 영역 3",
        "minor": "개인정보 처리단계",
        "desc": "개인정보 수집 → 보유·이용 → 제공·위탁 → 파기 → 정보주체 권리보호 (21개 항목)"
      },
      {
        "major": "비교 구분",
        "minor": "ISMS vs ISMS-P",
        "desc": "영역 1+2만 심사하면 ISMS(80개), 영역 3(개인정보 21개)까지 포함하면 ISMS-P(101개)"
      }
    ]
  },
  {
    "domain": "보안",
    "topic": "제로 트러스트 보안 (Zero Trust)",
    "mnemonic": "명·최·가 / 미·지·모",
    "definition": "모든 접근을 매번 검증하고 최소 권한만 주는 보안 체계",
    "keywords": [
      "Never Trust, Always Verify",
      "정책 결정 지점 (PDP: PE+PA)",
      "정책 집행 지점 (PEP)",
      "마이크로 세그멘테이션",
      "두음: 명최가 미지모"
    ],
    "diagram": "[접속 주체(사용자+단말)] ➔ [PDP (정책 결정 두뇌: 신뢰도 평가)] ➔ [PEP (정책 집행 관문)] ➔ [기업 리소스(최소 권한 접근)]",
    "tableRows": [
      {
        "major": "3대 핵심 원칙",
        "minor": "명시적 검증 & 최소 권한",
        "desc": "모든 접근 요청의 신원·단말·맥락을 매번 검증하고, 세션별로 꼭 필요한 최소 권한만 부여"
      },
      {
        "major": "3대 핵심 원칙",
        "minor": "침해 가정 (Assume Breach)",
        "desc": "내부망도 이미 침투당했다고 가정하고 구역을 잘게 쪼개어(마이크로 세그멘테이션) 측면 이동(Lateral Movement) 차단"
      },
      {
        "major": "논리 구성요소",
        "minor": "PDP (정책 결정 지점)",
        "desc": "제어 영역(Control Plane): 정책 엔진(PE)과 관리자(PA)가 신뢰도를 평가해 접근 승인 여부 결정"
      },
      {
        "major": "논리 구성요소",
        "minor": "PEP (정책 집행 지점)",
        "desc": "데이터 영역(Data Plane): PDP의 결정에 따라 실제 보안 세션을 연결하거나 차단하는 관문"
      }
    ]
  },
  {
    "domain": "보안",
    "topic": "국가 망보안체계 (N2SF)",
    "mnemonic": "기(C)·민(S)·공(O)",
    "definition": "공공 AI 활용 위해 업무 중요도 3등급 차등 보안체계",
    "keywords": [
      "획일적 망분리 개선",
      "업무 중요도 3등급 (C·S·O)",
      "기밀(C) · 민감(S) · 공개(O)",
      "차등 보안 통제"
    ],
    "diagram": "[기존: 물리적 획일 망분리] ➔ [N2SF 전환: 업무·데이터 중요도에 따라 기밀(C) / 민감(S) / 공개(O) 3등급 차등 보안]",
    "tableRows": [
      {
        "major": "도입 배경",
        "minor": "기존 망분리 한계",
        "desc": "일률적 인터넷 차단으로 인해 공공 분야의 클라우드 및 생성형 AI 도입이 가로막힘"
      },
      {
        "major": "3등급 분류",
        "minor": "기밀 (Classified)",
        "desc": "국가 안보·외교 등 유출 시 치명적인 정보 → 최고 수준의 격리 및 망분리 통제 유지"
      },
      {
        "major": "3등급 분류",
        "minor": "민감 (Sensitive)",
        "desc": "개인정보·비공개 행정정보 → 제로트러스트 기반 다층 보안통제 하에 외부 클라우드 연계"
      },
      {
        "major": "3등급 분류",
        "minor": "공개 (Open)",
        "desc": "대민 공개 자료 및 일반 업무 → 인터넷 및 상용 AI 서비스를 자유롭게 활용"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "소프트웨어 공학 & 좋은 SW 4대 특성",
    "mnemonic": "도·프·방·패 / 유·신·효·수",
    "definition": "SW 위기 극복 위해 공학적 원리로 품질·생산성 향상 학문",
    "keywords": [
      "NATO SW 위기 (1968)",
      "품질과 생산성 극대화",
      "비가시성 · 복잡성 · 순응성 · 변경성 (Brooks)",
      "최소 비용 · 정해진 일정 내 개발"
    ],
    "diagram": "[SW 위기 (일정 지연·비용 초과·품질 저하)] ──▶ [SW 공학 4요소: 도구(CASE) · 프로세스 · 방법 · 패러다임] ──▶ [좋은 SW: 유지보수성 · 신뢰성 · 효율성 · 수용성]",
    "tableRows": [
      {
        "major": "SW공학 4대 요소",
        "minor": "도구 (Tools)",
        "desc": "분석·설계·구현·테스트 전 과정을 자동화 지원하는 CASE 및 통합개발환경"
      },
      {
        "major": "",
        "minor": "프로세스 (Process)",
        "desc": "작업을 수행하는 절차와 단계별 산출물, 품질보증 및 형상관리 활동 정의 체계"
      },
      {
        "major": "",
        "minor": "방법 (Methods)",
        "desc": "요구분석, 설계 모델링, 코딩, 테스팅 등 소프트웨어 구축을 위한 기술적 노하우"
      },
      {
        "major": "",
        "minor": "패러다임 (Paradigm)",
        "desc": "절차지향, 정보공학, 객체지향, CBD, 애자일 등 시대를 관통하는 개발 접근 관점"
      },
      {
        "major": "좋은 SW 4대 특성",
        "minor": "유지보수성 (Maintainability)",
        "desc": "비즈니스 환경 및 고객의 요구사항 변화에 맞춰 적은 비용으로 신속히 수정·진화 가능한 특성"
      },
      {
        "major": "",
        "minor": "신뢰성 (Dependability)",
        "desc": "신뢰도·보안성·안전성을 포괄하며, 장애 발생 시에도 물리적·경제적 피해 없이 정상 동작하는 특성"
      },
      {
        "major": "",
        "minor": "효율성 (Efficiency)",
        "desc": "메모리·CPU·네트워크 등 시스템 자원을 낭비하지 않고 빠른 응답시간과 처리량을 제공하는 특성"
      },
      {
        "major": "",
        "minor": "수용성 (Acceptability)",
        "desc": "실제 사용자가 이해·학습하기 쉽고 타 시스템 및 업무 환경과 자연스럽게 호환되는 특성"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "SW 개발방법론 & 테일러링 (Tailoring)",
    "mnemonic": "절·활·산·도·기 / 특·표·상·세·문",
    "definition": "조직 표준 프로세스를 프로젝트 특성에 맞게 최적화하는 기법",
    "keywords": [
      "발전: 구조적 → 정보공학 → 객체지향 → CBD → Agile",
      "내부 기준 (목표환경·요구사항·규모·보유기술)",
      "외부 기준 (법적 제약·국제표준)",
      "ISO/IEC 12207 · CMMI · SPICE"
    ],
    "diagram": "[특성 정의 (내·외부 환경)] → [표준 프로세스 선정] → [상위 수준 커스터마이징 (단계 가감)] → [세부 수준 커스터마이징 (산출물 조정)] → [테일러링 문서화]",
    "tableRows": [
      {
        "major": "개발방법론 구성요소",
        "minor": "절차 · 활동 · 산출물",
        "desc": "무엇을 어떤 순서로 수행할지 정의한 작업 단계(Phase/Activity)와 단계별 결과 문서"
      },
      {
        "major": "",
        "minor": "도구 · 기법 · 역할",
        "desc": "각 활동을 수행하기 위한 모델링 기법, 자동화 도구(CASE) 및 참여자 책임(Role)"
      },
      {
        "major": "방법론 진화 과정",
        "minor": "구·정·객·C·A",
        "desc": "구조적(DFD/모듈분할) → 정보공학(자료중심/ERD) → 객체지향(캡추다정상) → CBD(컴포넌트 조립) → 애자일(고객소통/반복)"
      },
      {
        "major": "테일러링 수행 절차",
        "minor": "1. 프로젝트 특성 정의",
        "desc": "규모, 복잡도, 기술 성숙도(내부 기준) 및 법규, 국제표준(외부 기준)을 분석하여 매트릭스 작성"
      },
      {
        "major": "",
        "minor": "2. 표준 프로세스 선정",
        "desc": "조직 표준 방법론 중 프로젝트 성격(신규 개발, 유지보수, 패키지 도입 등)에 부합하는 기본 모델 선택"
      },
      {
        "major": "",
        "minor": "3. 상위/세부 커스터마이징",
        "desc": "생략·병합할 단계와 태스크를 조정(상위)하고, 산출물 양식과 검토 주기를 구체화(세부)"
      },
      {
        "major": "",
        "minor": "4. 테일러링 문서화",
        "desc": "조정 사유와 최종 확정된 WBS·산출물 목록을 프로젝트 계획서에 명시하고 이해관계자 합의 도출"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "애자일 (Agile) 방법론 & 12원칙",
    "mnemonic": "고·요·배·의·동·대·작·지·좋·단·고·요",
    "definition": "고객 소통과 짧은 반복 주기로 변화에 민첩 대응하는 방법론",
    "keywords": [
      "애자일 선언문 4대 핵심 가치",
      "스크럼 (제품 백로그 · 스프린트 · 일일 스크럼 · 회고)",
      "XP (짝 프로그래밍 · TDD · 지속적 통합 · 리팩토링)",
      "칸반 (WIP 제한 · 리드타임 최소화) & 린 (낭비 제거)"
    ],
    "diagram": "se_agile_12.png",
    "tableRows": [
      {
        "major": "4대 핵심 가치",
        "minor": "개인과 상호작용 우선",
        "desc": "프로세스와 도구보다 팀원 간의 긴밀한 대면 소통과 협업을 중시"
      },
      {
        "major": "",
        "minor": "작동하는 소프트웨어 우선",
        "desc": "방대한 문서 작성보다 실제 실행 가능한 소프트웨어를 진척도의 척도로 삼음"
      },
      {
        "major": "",
        "minor": "고객과의 협력 우선",
        "desc": "초기 계약 협상에만 매몰되지 않고 개발 전 과정에서 고객과 상시 협력"
      },
      {
        "major": "",
        "minor": "변화에 대한 대응 우선",
        "desc": "초기 계획을 고수하기보다 개발 후반부라도 요구사항 변경을 경쟁력으로 수용"
      },
      {
        "major": "대표 실천 방법론",
        "minor": "Scrum (스크럼)",
        "desc": "제품책임자(PO)·스크럼마스터(SM)·개발팀이 2~4주 스프린트 주기로 잠재 출시 가능 증분을 반복 인도"
      },
      {
        "major": "",
        "minor": "XP (eXtreme Programming)",
        "desc": "용기·단순성·의사소통·피드백·존중 5대 가치 기반 TDD, 페어 프로그래밍, CI, 리팩토링 실천"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "요구공학 (Requirements Engineering)",
    "mnemonic": "도·분·명·검 / 협·기·변·확 / 정·명·일·완·수·이·검·추",
    "definition": "사용자 요구를 체계적 도출·분석·명세·검증 및 변경관리 활동",
    "keywords": [
      "ISO/IEC 29148 요구공학 국제표준",
      "기능 요구사항 vs 비기능 요구사항",
      "정형 명세 (Z, Petri-Net, 수학적 기호) vs 비정형 명세 (자연어, UML)",
      "변경통제위원회 (CCB)"
    ],
    "diagram": "[개발 절차: 도출(Elicitation) → 분석(Analysis) → 명세(Specification) → 검증(Validation)] ──▶ [관리 절차: 협상 → 기준선(Baseline) → 변경관리(CCB) → 확인]",
    "tableRows": [
      {
        "major": "요구사항 개발 절차",
        "minor": "도출 (Elicitation)",
        "desc": "인터뷰, 설문, 워크숍(JAD), 프로토타이핑, 유스케이스 등으로 이해관계자 요구 수집"
      },
      {
        "major": "",
        "minor": "분석 (Analysis)",
        "desc": "요구사항 간 상충·중복을 해결하고 타당성, 우선순위(MoSCoW, Kano 모델), 구조/객체 모델링 수행"
      },
      {
        "major": "",
        "minor": "명세 (Specification)",
        "desc": "분석된 요구사항을 정형(수학/논리 표기) 또는 비정형(자연어/다이어그램) 기법으로 SRS 문서화"
      },
      {
        "major": "",
        "minor": "검증 (Validation)",
        "desc": "작성된 명세서가 고객 의도와 부합하는지 동료 검토, 인스펙션, 프로토타입 시연으로 확인"
      },
      {
        "major": "요구사항 품질 속성",
        "minor": "정·명·일·완",
        "desc": "정확성(고객 요구 부합), 명확성(모호함 배제·단일 해석), 일관성(상호 모순 없음), 완전성(누락 없음)"
      },
      {
        "major": "",
        "minor": "수·이·검·추",
        "desc": "수정용이성(변경 파급 최소화), 이해용이성, 검증가능성(테스트 가능), 추적가능성(식별자·RTM 부여)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "요구사항 명세서 (SRS) & 요구사항 추적표 (RTM)",
    "mnemonic": "기·외·성·논·제 / 식·근·구·검·통 (순·역·양)",
    "definition": "합의된 요구사항을 기록한 공식 문서와 생명주기 양방향 추적표",
    "keywords": [
      "IEEE 830 / ISO 29148 SRS 표준 목차",
      "골드 플레이팅 (Gold Plating, 요구하지 않은 과잉 구현 방지)",
      "요구사항 스코프 크리프 (Scope Creep 통제)",
      "계약 및 검수의 법적 기준"
    ],
    "diagram": "[비즈니스 목표/RFP] ◀──(역방향 추적: 골드플레이팅 방지)── [SRS 요구사항 ID] ──(순방향 추적: 누락 방지)──▶ [설계(아키텍처/DB) → 소스코드 → 테스트케이스(TC)]",
    "tableRows": [
      {
        "major": "SRS 핵심 구성항목",
        "minor": "개요 항목 (개·범·목·시·일)",
        "desc": "시스템 개요, 범위, 목표, 시장 및 비즈니스 배경, 일반적 제약사항 정의"
      },
      {
        "major": "",
        "minor": "상세 명세 (기·외·성·논·제)",
        "desc": "기능 요구사항, 외부 인터페이스(UI/타시스템), 성능 요구사항, 논리적 DB 요구, 설계 제약사항"
      },
      {
        "major": "RTM 구성요소",
        "minor": "식·근·구·검·통",
        "desc": "요구사항 식별자(ID), 발주 근거(RFP), 구현(설계서·모듈), 검증(테스트케이스 ID), 변경 통제 상태"
      },
      {
        "major": "RTM 추적 방향",
        "minor": "순방향 추적 (Forward)",
        "desc": "요구사항이 설계·구현·테스트까지 빠짐없이 반영되었는지 검증하여 요구사항 누락 방지"
      },
      {
        "major": "",
        "minor": "역방향 추적 (Backward)",
        "desc": "구현된 코드와 테스트케이스가 실제 어느 요구사항에서 유래했는지 역추적하여 불필요한 과잉 개발(Gold Plating) 차단"
      },
      {
        "major": "",
        "minor": "양방향 추적 (Bi-directional)",
        "desc": "순방향과 역방향을 결합하여 변경 발생 시 파급 영향도를 즉각 산출하고 산출물 간 일관성 유지"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "객체지향 캡슐화 (Encapsulation) & 정보은닉 (Information Hiding)",
    "mnemonic": "캡·추·다·정·상",
    "definition": "속성과 연산을 하나로 묶고 내부 구현을 외부로부터 숨기는 원리",
    "keywords": [
      "추상화 (공통 속성·행위 추출)",
      "상속성 (상위 클래스 재사용·확장)",
      "다형성 (오버로딩 · 오버라이딩)",
      "접근제어자 (private, protected, public) & Getter/Setter"
    ],
    "diagram": "<img src=\"se_encapsulation.png\" alt=\"캡슐화\"><img src=\"se_info_hiding.png\" alt=\"정보은닉\">",
    "tableRows": [
      {
        "major": "캡슐화 (Encapsulation)",
        "minor": "개념 및 목적",
        "desc": "밀접하게 관련된 데이터(속성)와 이를 조작하는 함수(메서드)를 하나의 객체 단위로 묶어 응집도와 재사용성 향상"
      },
      {
        "major": "",
        "minor": "정보은닉과의 관계",
        "desc": "캡슐화는 '묶는 행위(포장)' 자체를 뜻하며, 외부 노출 여부는 강제하지 않으나 정보은닉을 통해 완성됨"
      },
      {
        "major": "정보은닉 (Information Hiding)",
        "minor": "개념 및 목적",
        "desc": "객체 내부의 상세 구현 로직과 상태 변수를 외부에서 직접 접근하지 못하게 차단(private)하여 결합도를 낮춤"
      },
      {
        "major": "",
        "minor": "인터페이스 통신",
        "desc": "외부 객체는 오직 공개된 퍼블릭 메서드(메시지)를 통해서만 상호작용하므로 내부 수정 시 외부 파급효과(Ripple Effect) 제거"
      },
      {
        "major": "객체지향 기타 특성",
        "minor": "추상화 · 상속 · 다형성",
        "desc": "핵심 개념만 모델링(추상화), 부모 속성을 물려받아 확장(상속), 동일 메시지에 객체별로 다르게 반응(다형성: 오버라이딩/오버로딩)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "객체지향 설계 5원칙 (SOLID)",
    "mnemonic": "S·O·L·I·D (단·개·리·인·의)",
    "definition": "유지보수성과 확장성 극대화 위해 객체지향 설계 시 지킬 5원칙",
    "keywords": [
      "Robert C. Martin (로버트 마틴)",
      "높은 응집도(High Cohesion) & 낮은 결합도(Low Coupling)",
      "변경 파급효과 최소화",
      "디자인 패턴 및 클린 아키텍처의 이론적 토대"
    ],
    "diagram": "[객체 내부 설계: SRP(단일 책임) · OCP(개방-폐쇄)] + [객체 간 관계 설계: LSP(리스코프 치환) · ISP(인터페이스 분리) · DIP(의존성 역전)] ──▶ [유연하고 확장 가능한 아키텍처]",
    "tableRows": [
      {
        "major": "객체 내부 설계",
        "minor": "SRP (단일 책임 원칙)",
        "desc": "한 클래스는 오직 하나의 책임(변경해야 할 단 하나의 이유)만 가져야 하며, 이를 통해 응집도를 높임"
      },
      {
        "major": "",
        "minor": "OCP (개방-폐쇄 원칙)",
        "desc": "소프트웨어 요소는 기능 확장에는 열려(Open) 있고, 기존 코드 수정에는 닫혀(Closed) 있어야 함 (추상화·다형성 활용)"
      },
      {
        "major": "객체 간 관계 설계",
        "minor": "LSP (리스코프 치환 원칙)",
        "desc": "자식 클래스는 언제나 부모 클래스의 자리에 교체 투입되어도 부모의 의도와 규약을 위배하지 않고 정상 동작해야 함"
      },
      {
        "major": "",
        "minor": "ISP (인터페이스 분리 원칙)",
        "desc": "클라이언트가 자신이 사용하지 않는 메서드에 의존하지 않도록 범용 인터페이스 하나보다 구체적인 여러 인터페이스로 분리"
      },
      {
        "major": "",
        "minor": "DIP (의존성 역전 원칙)",
        "desc": "고수준 모듈이 저수준의 구체 클래스에 직접 의존하지 않고, 둘 모두 추상 인터페이스에 의존하도록 의존 방향을 역전"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "모듈화 (응집도 · 결합도 · Fan-in/Fan-out)",
    "mnemonic": "우·논·시·절·통·순·기 / 내·공·외·제·스·자",
    "definition": "복잡도 감소 위해 고응집·저결합 기준으로 시스템을 분할한 기법",
    "keywords": [
      "응집도(모듈 내부 요소 연관도) ↑ 높을수록 우수",
      "결합도(모듈 간 상호 의존도) ↓ 낮을수록 우수",
      "적정 모듈 수: 개발 비용과 인터페이스 비용의 교차점",
      "Fan-out 7±2 법칙 (중간 제어 모듈 추가)"
    ],
    "diagram": "<img src=\"se_module.png\" alt=\"응집도와 결합도\"><img src=\"se_fanin.png\" alt=\"Fan-in과 Fan-out\">",
    "tableRows": [
      {
        "major": "응집도 (높음→낮음)",
        "minor": "기능적 · 순차적 · 통신적",
        "desc": "단일 기능 수행(기능적) > 출력이 다음 입력으로 전달(순차적) > 동일 입출력 데이터 사용(통신적)"
      },
      {
        "major": "",
        "minor": "절차적 · 시간적 · 논리적 · 우연적",
        "desc": "순서대로 실행(절차적) > 특정 시점 동시 실행(시간적) > 유사 성격 분류(논리적) > 무관한 작업 모음(우연적, 최악)"
      },
      {
        "major": "결합도 (낮음→높음)",
        "minor": "자료 · 스탬프 · 제어",
        "desc": "단순 값 파라미터 전달(자료, 최선) < 배열·객체 등 자료구조 전달(스탬프) < 제어 플래그·신호 전달(제어)"
      },
      {
        "major": "",
        "minor": "외부 · 공통 · 내용",
        "desc": "외부 프로토콜·환경 공유(외부) < 전역변수 참조(공통) < 타 모듈 내부 변수·로직 직접 참조·수정(내용, 최악)"
      },
      {
        "major": "복잡도 측정",
        "minor": "Fan-in (팬인)",
        "desc": "자신을 호출하는 상위 모듈 수 → 높을수록 공통 모듈로서 재사용성이 우수하나 단일 장애점 관리 필요"
      },
      {
        "major": "",
        "minor": "Fan-out (팬아웃)",
        "desc": "자신이 호출하는 하위 모듈 수 → 과도하게 높으면 제어 복잡도가 증가하므로 중간 모듈을 두어 축소(7±2 이하)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "관점 지향 프로그래밍 (AOP) & 의존성 주입 (DI)",
    "mnemonic": "조·포·어·위·애 / 생·세·인",
    "definition": "공통 횡단 관심사 분리(AOP)와 외부 객체 주입(DI)으로 결합 완화",
    "keywords": [
      "핵심 관심사(Core Concerns) vs 횡단 관심사(Cross-cutting Concerns)",
      "제어의 역전 (IoC, Inversion of Control 컨테이너)",
      "프록시 패턴 (Dynamic Proxy / 바이트코드 조작)",
      "Spring 프레임워크 핵심 원리"
    ],
    "diagram": "[핵심 비즈니스 로직 (주문·결제)] ◀──(위빙 Weaving: 로깅·보안·트랜잭션 애스펙트 결합)── [AOP 프록시] + [IoC 컨테이너가 생성자 DI로 의존 객체 주입]",
    "tableRows": [
      {
        "major": "AOP 핵심 구성요소",
        "minor": "조인포인트 & 포인트컷",
        "desc": "공통 모듈이 삽입될 수 있는 실행 지점(JoinPoint)과 그중 실제 적용할 대상을 선별하는 표현식(Pointcut)"
      },
      {
        "major": "",
        "minor": "어드바이스 & 애스펙트",
        "desc": "실제 실행될 부가 기능 코드(Advice: Before/After/Around)와 포인트컷을 하나로 묶은 모듈(Aspect)"
      },
      {
        "major": "",
        "minor": "위빙 (Weaving)",
        "desc": "핵심 로직 코드를 수정하지 않고 컴파일·로딩·런타임(프록시) 시점에 횡단 관심사를 결합하는 과정"
      },
      {
        "major": "의존성 주입 (DI) 유형",
        "minor": "생성자 주입 (권장)",
        "desc": "객체 생성 시점에 의존성을 강제 주입하여 불변성(final) 확보, 순환 참조 컴파일 시점 방지 및 단위 테스트 용이"
      },
      {
        "major": "",
        "minor": "Setter 주입 & 인터페이스 주입",
        "desc": "선택적 의존성 변경 시 수정자 메서드로 주입(Setter)하거나 의존성 주입 전용 인터페이스를 구현하여 주입"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "소프트웨어 아키텍처 4+1 뷰 (4+1 View)",
    "mnemonic": "U·L·I·P·D (유·논·구·프·배)",
    "definition": "다양한 이해관계자 관점 반영 위해 5개 뷰로 아키텍처 명세 모델",
    "keywords": [
      "필립 크루첸 (Philippe Kruchten)",
      "이해관계자별 관심사 분리",
      "UML 다이어그램 매핑",
      "아키텍처 설계 절차: 요·참·모·프·배"
    ],
    "diagram": "se_4plus1_view.png",
    "tableRows": [
      {
        "major": "중심 시나리오",
        "minor": "유스케이스 뷰 (+1 View)",
        "desc": "최종 사용자·분석가·테스터 관점에서 기능 요구사항을 시나리오로 정의하며 나머지 4개 뷰의 중심 검증 기준 역할"
      },
      {
        "major": "4대 아키텍처 뷰",
        "minor": "논리 뷰 (Logical View)",
        "desc": "설계자·개발자 관점에서 시스템 기능 요구사항을 클래스·패키지·객체 간 관계로 표현 (클래스/통신 다이어그램)"
      },
      {
        "major": "",
        "minor": "구현 뷰 (Implementation View)",
        "desc": "개발자 관점에서 소스코드 모듈 구조, 빌드 컴포넌트, 형상관리 단위를 정의 (컴포넌트 다이어그램)"
      },
      {
        "major": "",
        "minor": "프로세스 뷰 (Process View)",
        "desc": "시스템 통합자 관점에서 런타임 동시성, 스레드, 동기/비동기 통신, 성능·처리량 등 비기능 특성 표현 (활동 다이어그램)"
      },
      {
        "major": "",
        "minor": "배포 뷰 (Deployment View)",
        "desc": "시스템 엔지니어·인프라 담당자 관점에서 서버 노드, 네트워크 토폴로지 등 물리적 배치 구조 표현 (배치 다이어그램)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "소프트웨어 아키텍처 스타일 (Architecture Style)",
    "mnemonic": "저·파·계·엠·마·클·이",
    "definition": "반복되는 시스템 구조 설계 문제를 해결하는 상위 수준 표준 패턴",
    "keywords": [
      "시스템 전체 수준 (Architecture Style) vs 모듈 내부 수준 (Design Pattern)",
      "컴포넌트(Component)와 커넥터(Connector) 조합",
      "품질속성 충족을 위한 청사진",
      "단일 스타일 또는 복합(Hybrid) 스타일 적용"
    ],
    "diagram": "se_arch_style.png",
    "tableRows": [
      {
        "major": "데이터 중심형",
        "minor": "저장소 (Repository) 패턴",
        "desc": "중앙 공유 데이터베이스(또는 블랙보드)를 두고 모든 서브시스템이 중앙 저장소를 통해 데이터를 접근·공유"
      },
      {
        "major": "데이터 흐름형",
        "minor": "파이프-필터 (Pipe & Filter)",
        "desc": "데이터 스트림을 각 필터 컴포넌트가 독립 가공하여 파이프로 전달 (유닉스 쉘, 컴파일러, ETL 파이프라인)"
      },
      {
        "major": "계층·분산 구조",
        "minor": "계층화 (Layered) & C/S",
        "desc": "역할별로 상위→하위 단방향 계층을 분리(OSI 7계층, 3-Tier)하거나 서비스 요청자(Client)와 제공자(Server)로 분할"
      },
      {
        "major": "상호작용·제어",
        "minor": "MVC (Model-View-Controller)",
        "desc": "데이터/비즈니스 로직(Model), 화면 표시(View), 입력 제어(Controller)를 분리하여 UI 변경 파급효과 차단"
      },
      {
        "major": "",
        "minor": "마스터-슬레이브 & 이벤트 버스",
        "desc": "마스터가 슬레이브에 작업을 분배·취합(병렬처리)하거나, 이벤트 채널을 통해 발행-구독 방식으로 비동기 연동"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "소프트웨어 아키텍처 평가 (ATAM & CBAM)",
    "mnemonic": "협·기·상·후 (A비아·식품분·브분결) / 시·효·접·선",
    "definition": "품질속성 간 상충관계(ATAM)와 경제적 투자효용(CBAM) 분석 기법",
    "keywords": [
      "SEI (카네기멜론대 SW공학연구소) 시나리오 기반 정방향 평가",
      "SAAM (수정용이성·기능 중심 초기 모델)",
      "품질속성 유틸리티 트리 (Utility Tree)",
      "민감점(Sensitivity Point) & 절충점(Trade-off Point)"
    ],
    "diagram": "se_atam.png",
    "tableRows": [
      {
        "major": "시나리오 기반 평가",
        "minor": "ATAM (Trade-off 분석)",
        "desc": "비즈니스 동인을 바탕으로 유틸리티 트리를 작성하고, 성능·보안·가용성 등 품질속성 간 상충점(Trade-off)과 민감점을 도출"
      },
      {
        "major": "",
        "minor": "ATAM 4단계 (협·기·상·후)",
        "desc": "1.협력과 준비 → 2.기본평가(A비아·식품분) → 3.상세평가(브레인스토밍·시나리오 우선순위·분석) → 4.후속조치(보고서)"
      },
      {
        "major": "",
        "minor": "CBAM (경제성 비용·효익 분석)",
        "desc": "ATAM 결과에 아키텍처 전략별 구축 비용과 기대 효용(ROI)을 정량화하여 예산 제약 하 최적 아키텍처 대안 선정"
      },
      {
        "major": "",
        "minor": "CBAM 4단계 (시·효·접·선)",
        "desc": "1.시나리오 수집·정제 → 2.품질속성 효용-반응값 곡선 작성 → 3.아키텍처 접근법별 전체 이익(ROI) 계산 → 4.최적안 선정·검증"
      },
      {
        "major": "설계·혼합 기반 평가",
        "minor": "SAAM · ADR · ARID",
        "desc": "변경용이성 평가(SAAM), 설계 문서의 응집도 중심 리뷰(ADR), 초기 중간 설계 단계에 ATAM+ADR을 결합한 경량 평가(ARID)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "GoF 디자인 패턴 (Design Pattern)",
    "mnemonic": "생(5)·구(7)·행(11) / 추·팩·싱·빌·프 / 어·브·컴·데·퍼·플·프",
    "definition": "객체지향 설계 시 반복 발생하는 문제를 해결하는 23개 표준 해법",
    "keywords": [
      "에리히 감마 외 4인 (Gang of Four)",
      "바퀴를 다시 발명하지 마라 (검증된 설계 재사용)",
      "생성(객체 생성 분리) · 구조(클래스 조합 확장) · 행위(책임 분배·소통)",
      "클래스 패턴(상속 관계·정적) vs 객체 패턴(합성/위임 관계·동적)"
    ],
    "diagram": "se_design_pattern.png",
    "tableRows": [
      {
        "major": "생성 패턴 (5개)",
        "minor": "싱글톤 · 팩토리 메서드 · 추상 팩토리",
        "desc": "전역 단일 인스턴스 보장(Singleton), 객체 생성을 서브클래스에 위임(Factory Method), 연관 객체군 일괄 생성(Abstract Factory)"
      },
      {
        "major": "",
        "minor": "빌더 · 프로토타입",
        "desc": "복잡한 객체의 생성 과정과 표현 분리(Builder), 기존 객체를 복제하여 생성 비용 절감(Prototype)"
      },
      {
        "major": "구조 패턴 (7개)",
        "minor": "어댑터 · 브리지 · 데코레이터",
        "desc": "호환성 없는 인터페이스 변환(Adapter), 구현부에서 추상층 분리(Bridge), 상속 없이 동적으로 부가 기능 덧씌움(Decorator)"
      },
      {
        "major": "",
        "minor": "퍼사드 · 프록시 · 컴포지트 · 플라이웨이트",
        "desc": "복잡한 서브시스템에 단순 통합 창구 제공(Facade), 대리 객체로 접근 제어·지연로딩(Proxy), 트리 구조(Composite), 객체 공유 메모리 절약(Flyweight)"
      },
      {
        "major": "행위 패턴 (11개)",
        "minor": "전략 · 옵저버 · 템플릿 메서드 · 커맨드",
        "desc": "알고리즘 런타임 교체(Strategy), 상태 변화 시 구독자에 자동 통지(Observer), 상위 골격 정의 후 하위 구체화(Template Method), 요청 캡슐화(Command)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "마이크로서비스 아키텍처 (MSA)",
    "mnemonic": "독·분·자·격 / 폴·데·C",
    "definition": "독립 개발·배포 위해 단일 앱을 소규모 비즈니스 단위로 분리한 구조",
    "keywords": [
      "모놀리식(Monolithic) 한계 극복 & 도메인 주도 설계(DDD Bounded Context)",
      "폴리글랏(Polyglot) 프로그래밍 & 서비스별 개별 DB (Database per Service)",
      "서비스 디스커버리 (Eureka) & 컨피그 서버",
      "벌크헤드(Bulkhead) 장애 격리"
    ],
    "diagram": "[클라이언트] → [API 게이트웨이] → [주문 서비스(DB)] / [결제 서비스(DB)] / [배송 서비스(DB)] (서비스 메시 & 이벤트 브로커 연동)",
    "tableRows": [
      {
        "major": "진입·통신",
        "minor": "API 게이트웨이",
        "desc": "단일 진입점 역할을 수행하며 인증·인가, 라우팅, 속도 제한(Rate Limiting), 프로토콜 변환을 통합 처리"
      },
      {
        "major": "",
        "minor": "서비스 메시 (Service Mesh)",
        "desc": "비즈니스 코드 수정 없이 사이드카 프록시(Envoy/Istio)를 통해 서비스 간 통신·암호화(mTLS)·분산 추적을 제어"
      },
      {
        "major": "데이터 정합성",
        "minor": "사가 패턴 (Saga)",
        "desc": "분산된 DB 간 트랜잭션을 이벤트로 순차 실행하고, 도중 실패 시 보상 트랜잭션으로 역순 원상복구"
      },
      {
        "major": "",
        "minor": "CQRS 패턴",
        "desc": "데이터 변경(Command) 모델과 조회(Query) 모델을 분리하여 복잡한 다중 서비스 조인 조회 성능을 극대화"
      },
      {
        "major": "장애 복원력",
        "minor": "서킷 브레이커",
        "desc": "특정 서비스 장애 시 호출을 즉시 차단(Closed→Open→Half-Open)하여 전체 시스템 연쇄 장애(Cascading Failure) 방지"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "클린 아키텍처 (Clean Architecture)",
    "mnemonic": "엔·유·어·프 / 단·역",
    "definition": "도메인 규칙 보호 위해 의존성을 안쪽으로만 향하게 한 동심원 구조",
    "keywords": [
      "관심사 분리 (Separation of Concerns)",
      "단방향 의존성 규칙 (바깥 저수준 기술 → 안쪽 고수준 정책)",
      "프레임워크·UI·DB 독립성",
      "높은 단위 테스트 용이성"
    ],
    "diagram": "[외부 프레임워크/DB/UI] ──(의존성 방향)──▶ [인터페이스 어댑터] ──▶ [유스케이스(응용 규칙)] ──▶ [엔티티(핵심 비즈니스 도메인)]",
    "tableRows": [
      {
        "major": "핵심 철학",
        "minor": "단방향 의존성 규칙",
        "desc": "모든 소스코드 의존성은 반드시 바깥쪽(저수준 기술·인프라)에서 안쪽(고수준 도메인 규칙)으로만 향해야 함"
      },
      {
        "major": "내부 코어 계층",
        "minor": "엔티티 & 유스케이스",
        "desc": "외부 DB나 웹 프레임워크가 교체되어도 절대 변하지 않는 전사 핵심 비즈니스 규칙(Entity)과 애플리케이션 시나리오(Use Case)"
      },
      {
        "major": "외부 경계 계층",
        "minor": "어댑터 & 프레임워크",
        "desc": "유스케이스와 외부 세계의 데이터 형식을 변환하는 컨트롤러·프레젠터(Adapter) 및 가장 바깥의 DB·웹 프레임워크"
      },
      {
        "major": "",
        "minor": "의존성 역전 (DIP)",
        "desc": "내부 유스케이스가 외부 DB를 직접 호출하지 않고 내부가 정의한 추상 인터페이스를 외부가 구현하여 제어 흐름과 의존 방향을 분리"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "헥사고날 아키텍처 (포트 앤 어댑터)",
    "mnemonic": "인·아·포·어",
    "definition": "외부 기술 종속 제거 위해 도메인 내외부를 포트·어댑터로 연결",
    "keywords": [
      "알리스터 콕번 (Alistair Cockburn)",
      "도메인 중심 육각형 대칭 구조",
      "Driving(Primary) vs Driven(Secondary)",
      "외부 레거시·DB·메시지큐 무중단 교체 용이"
    ],
    "diagram": "[외부 요청 (REST/웹 UI: 인바운드 어댑터)] ──▶ (인바운드 포트) ──▶ [도메인 코어] ──▶ (아웃바운드 포트) ──▶ [DB/외부 API: 아웃바운드 어댑터]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "포트 앤 어댑터 패턴",
        "desc": "비즈니스 도메인 코어를 중앙에 두고, 모든 외부 세계(UI, DB, 메시지큐)와의 연결을 포트와 어댑터로 분리하는 아키텍처"
      },
      {
        "major": "규격 정의 (내부)",
        "minor": "인바운드 / 아웃바운드 포트",
        "desc": "내부 애플리케이션 코어가 외부와 소통하기 위해 정의한 추상 인터페이스 규격 (인바운드 UseCase 호출용 / 아웃바운드 영속성·외부연동 SPI)"
      },
      {
        "major": "기술 구현 (외부)",
        "minor": "프라이머리 / 세컨더리 어댑터",
        "desc": "포트를 호출하는 인바운드 구현체(웹 컨트롤러, CLI)와 아웃바운드 포트를 구현한 인프라 모듈(JPA Repository, Kafka 클라이언트)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "이벤트 기반 아키텍처 (EDA) & SAGA 패턴",
    "mnemonic": "생·중·소 / 코·오·보·멱",
    "definition": "상태 변화를 이벤트로 발행해 비동기 처리하고 분산 정합성 보장",
    "keywords": [
      "느슨한 결합 (Loosely Coupled) & 비동기 Pub/Sub",
      "Kafka · RabbitMQ 이벤트 브로커",
      "결과적 일관성 (Eventual Consistency, BASE)",
      "트랜잭셔널 아웃박스 패턴 (Transactional Outbox)"
    ],
    "diagram": "se_eda.png",
    "tableRows": [
      {
        "major": "EDA 3대 구성요소",
        "minor": "Producer (이벤트 생성자)",
        "desc": "비즈니스 도메인의 상태 변화(주문 생성, 결제 완료 등)를 감지하여 이벤트를 발행하는 주체"
      },
      {
        "major": "",
        "minor": "Broker / Router (중개자)",
        "desc": "발행된 이벤트를 영속 저장·필터링하고 구독자에게 전달하는 메시지 파이프라인 (Apache Kafka, RabbitMQ)"
      },
      {
        "major": "",
        "minor": "Consumer (이벤트 소비자)",
        "desc": "관심 있는 토픽의 이벤트를 비동기 구독하여 후속 비즈니스 로직을 독립적으로 수행하는 서비스"
      },
      {
        "major": "SAGA 분산 트랜잭션",
        "minor": "코레오그래피 (Choreography)",
        "desc": "중앙 제어자 없이 각 마이크로서비스가 서로의 이벤트를 구독·발행하며 자율적으로 로컬 트랜잭션과 보상 트랜잭션 수행"
      },
      {
        "major": "",
        "minor": "오케스트레이션 (Orchestration)",
        "desc": "중앙 오케스트레이터(사가 매니저)가 전체 참여 서비스의 실행 순서와 실패 시 보상 트랜잭션 호출을 집중 통제"
      },
      {
        "major": "",
        "minor": "격리성 보완 & 멱등성",
        "desc": "ACID 중 격리성(I) 부재를 시맨틱 락(Semantic Lock)으로 보완하고, 네트워크 재전송에 대비해 중복 처리 방지(멱등성) 구현"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "SOAP vs REST & OpenAPI Specification (OAS)",
    "mnemonic": "U·W·S / 자·행·표·응 / 명·문·목·자",
    "definition": "XML 프로토콜(SOAP)과 HTTP 자원 아키텍처(REST) 및 표준 API 명세",
    "keywords": [
      "HTTP 프로토콜 · 무상태성(Stateless) · 캐시 처리",
      "HATEOAS (하이퍼미디어 기반 상태 전이, 리차드슨 성숙도 3단계)",
      "Swagger / OAS 3.0 (기계 판독 가능 YAML/JSON API 계약)",
      "Design-First (API 명세 선행 설계)"
    ],
    "diagram": "<img src=\"se_soap1.png\" alt=\"SOAP 구조\"><img src=\"se_rest.png\" alt=\"REST 구조\">",
    "tableRows": [
      {
        "major": "SOAP 프로토콜",
        "minor": "UDDI · WSDL · Envelope",
        "desc": "서비스 등록·검색(UDDI), XML 기반 인터페이스 명세(WSDL), Header/Body/Fault로 구성된 엄격한 XML 메시지 프로토콜(WS-Security·ACID 지원)"
      },
      {
        "major": "REST 아키텍처",
        "minor": "자원(URI) · 행위(Method) · 표현",
        "desc": "자원은 명사형 URI(/users/1)로 식별하고, 행위는 HTTP 메서드(GET/POST/PUT/DELETE), 표현은 JSON/XML 페이로드와 상태코드로 응답"
      },
      {
        "major": "OpenAPI (OAS)",
        "minor": "API 표준 명세 & 자동화",
        "desc": "REST API의 엔드포인트, 파라미터, 인증, 응답 스키마를 YAML/JSON으로 정의하여 문서 자동화(Swagger UI), Mock 서버, 클라이언트 SDK 코드 자동 생성"
      },
      {
        "major": "개방형 API 보안",
        "minor": "인증·트래픽·버전 관리",
        "desc": "OAuth 2.0/JWT 토큰 검증, API 게이트웨이 처리량 제한(Rate Limit), 데이터 익명화 및 하위 호환성을 위한 버전 관리(/v1, /v2)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "데브옵스 (DevOps) & CI/CD 파이프라인 (DevSecOps)",
    "mnemonic": "C·A·L·M·S / 정·구·동·자 (SAST·SCA·DAST·RASP)",
    "definition": "개발·운영·보안을 통합하고 빌드·테스트·배포 전 과정을 자동화한 체계",
    "keywords": [
      "Shift-Left Security (개발 초기부터 보안 내재화)",
      "DORA 4대 지표 (배포 빈도 · 리드타임 · 변경 실패율 · MTTR)",
      "GitOps (ArgoCD 선언적 배포) & IaC (Terraform)",
      "공급망 보안 (SBOM 연계)"
    ],
    "diagram": "<img src=\"se_cicd.png\" alt=\"CI/CD 파이프라인\"><img src=\"se_devsecops.png\" alt=\"DevSecOps 파이프라인\">",
    "tableRows": [
      {
        "major": "DevOps 5대 원칙",
        "minor": "CALMS 프레임워크",
        "desc": "협업 문화(Culture), 파이프라인 자동화(Automation), 낭비 제거·소규모 배치(Lean), 지표 측정(Measurement), 책임·지식 공유(Sharing)"
      },
      {
        "major": "CI/CD 자동화",
        "minor": "CI (지속적 통합)",
        "desc": "개발자가 코드 커밋 시 형상관리(Git)와 연동해 자동 빌드, 정적 분석(SonarQube), 단위 테스트를 수행하여 통합 오류 조기 발견"
      },
      {
        "major": "",
        "minor": "CD (지속적 제공/배포)",
        "desc": "검증된 빌드 아티팩트를 스테이징 및 운영 환경(K8s/클라우드)에 수동 승인(Delivery) 또는 완전 자동(Deployment)으로 릴리스"
      },
      {
        "major": "DevSecOps 보안 내재화",
        "minor": "SAST & SCA (정적·구성 분석)",
        "desc": "코딩·빌드 단계에서 실행 없이 소스코드 취약점 점검(SAST) 및 오픈소스 라이브러리 취약점·라이선스 위반·SBOM 검증(SCA)"
      },
      {
        "major": "",
        "minor": "DAST & RASP (동적·런타임 보호)",
        "desc": "스테이징 실행 환경에서 모의 해킹으로 런타임 취약점 탐지(DAST) 및 운영 애플리케이션 내부에서 실시간 공격 감지·차단(RASP)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "플랫폼 엔지니어링 (Platform Engineering & IDP)",
    "mnemonic": "골·셀·추·자 (Golden Path · 셀프서비스 · 추상화 · 자동화)",
    "definition": "개발자 인지 부하 절감 위해 셀프서비스 내부 개발자 플랫폼 구축 기법",
    "keywords": [
      "You build it, you run it의 개발자 번아웃 해결",
      "IDP (Internal Developer Platform, 내부 개발자 플랫폼)",
      "플랫폼을 제품으로 관리 (Platform as a Product)",
      "개발자 경험 (DevEx, Developer Experience) 극대화"
    ],
    "diagram": "[인프라·보안·배포 복잡성 (K8s, IaC, CI/CD, 모니터링)] ──(플랫폼 팀이 추상화·표준화)──▶ [내부 개발자 플랫폼 (IDP: Golden Path & 셀프서비스 포털)] ──▶ [서비스 개발팀: 비즈니스 로직 집중]",
    "tableRows": [
      {
        "major": "등장 배경",
        "minor": "개발자 인지 부하(Cognitive Load) 해소",
        "desc": "클라우드 네이티브·MSA 확산으로 개발자가 인프라(K8s, Terraform, 보안)까지 모두 다루며 겪는 생산성 저하와 그림자 운영(Shadow Ops) 해결"
      },
      {
        "major": "핵심 구성요소",
        "minor": "내부 개발자 플랫폼 (IDP)",
        "desc": "인프라 프로비저닝, CI/CD, 모니터링, 보안 정책을 하나로 묶어 개발자가 버튼 클릭이나 템플릿으로 즉시 사용하는 셀프서비스 플랫폼 (Backstage 등)"
      },
      {
        "major": "",
        "minor": "골든 패스 (Golden Path / Paved Road)",
        "desc": "조직의 보안·아키텍처 모범 사례가 기본 내장된 표준 개발 경로를 제공하여, 강제 통제 없이도 자연스럽게 거버넌스를 준수하도록 유도"
      },
      {
        "major": "DevOps와의 비교",
        "minor": "철학(DevOps)의 공학적 구현체",
        "desc": "DevOps가 개발·운영 협업 문화와 철학이라면, 플랫폼 엔지니어링은 이를 대규모 조직에서 확장 가능하게 실현하는 표준 도구·플랫폼 제공 체계"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "소프트웨어 무중단 배포 (Zero-Downtime Deployment)",
    "mnemonic": "롤·블·카 (롤링 · 블루그린 · 카나리)",
    "definition": "서비스 중단 없이 구버전에서 신버전으로 트래픽을 안전 전환하는 기술",
    "keywords": [
      "비즈니스 연속성 보장 & 다운타임 제로(0)",
      "리버스 프록시 (Nginx, Envoy) & 로드밸런서 라우팅",
      "하위 호환성(Backward Compatibility) 유지",
      "신속한 롤백(Rollback) 전략"
    ],
    "diagram": "se_zero_downtime.png",
    "tableRows": [
      {
        "major": "배포 전략 3유형",
        "minor": "롤링 배포 (Rolling)",
        "desc": "가동 중인 서버 인스턴스를 하나씩 순차적으로 신버전으로 교체 → 추가 인프라 비용이 없으나 배포 중 구·신버전이 공존하여 호환성 주의 필요"
      },
      {
        "major": "",
        "minor": "블루-그린 배포 (Blue-Green)",
        "desc": "구버전(Blue)과 동일한 규모의 신버전(Green) 환경을 구축해 테스트 후 로드밸런서 트래픽을 일괄 전환 → 즉각적인 롤백이 가능하나 인프라 비용 2배 소요"
      },
      {
        "major": "",
        "minor": "카나리 배포 (Canary)",
        "desc": "소수 사용자(예: 5%)에게만 먼저 신버전 트래픽을 라우팅해 오류율·성능을 검증한 뒤 점진적 확대 → 실사용자 위험 최소화 및 A/B 테스트에 최적"
      },
      {
        "major": "핵심 지원 기술",
        "minor": "로드밸런서 & 헬스체크",
        "desc": "L4/L7 스위치·인그레스 컨트롤러가 신규 파드(Pod)의 Readiness Probe(준비 상태) 정상 응답을 확인한 후에만 트래픽을 유입시키고 기존 연결은 우아하게 종료(Graceful Shutdown)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "로우코드·노코드 (LCNC) & 바이브 코딩 (Vibe Coding)",
    "mnemonic": "의·생·실·피·반 (의도전달 · 코드생성 · 실행검증 · 피드백 · 반복개선)",
    "definition": "GUI 드래그앤드롭(LCNC) 및 자연어 LLM 대화로 SW를 생성하는 패러다임",
    "keywords": [
      "시민 개발자 (Citizen Developer) & 안드레이 카파시 (Andrej Karpathy)",
      "자연어 프롬프트 중심 개발 (AI 에이전트 코딩)",
      "섀도우 IT (Shadow IT) 및 벤더 종속성(Lock-in)",
      "AI 생성 코드 보안 취약점 및 기술부채 리스크"
    ],
    "diagram": "se_vibecoding.png",
    "tableRows": [
      {
        "major": "패러다임 비교",
        "minor": "노코드 / 로우코드 (LCNC)",
        "desc": "사전 구축된 GUI 컴포넌트와 순서도를 조합해 코딩 없이(No-Code) 또는 최소한의 스크립트(Low-Code)로 업무용 앱을 신속 제작"
      },
      {
        "major": "",
        "minor": "바이브 코딩 (Vibe Coding)",
        "desc": "개발자가 구문(Syntax)을 직접 타이핑하는 대신 자연어로 의도(Vibe)와 요구사항을 전달하고 LLM 에이전트가 코드 작성·수정·디버깅을 수행"
      },
      {
        "major": "바이브 코딩 절차",
        "minor": "의·생·실·피·반",
        "desc": "1.자연어 의도 전달 → 2.AI 멀티파일 코드 생성 → 3.즉시 실행 및 동작 확인 → 4.오류 로그·개선점 피드백 → 5.반복 정제 후 배포"
      },
      {
        "major": "핵심 리스크 및 대책",
        "minor": "보안 취약점 & 블랙박스 부채",
        "desc": "원리를 모른 채 수용한 AI 코드의 취약점·아키텍처 일관성 훼손 방지를 위해 SAST/SCA 자동 검증, 테스트케이스 선행(TDD), 인간 아키텍트 코드 리뷰 필수"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "오픈소스 라이선스 & OSS 거버넌스 (OSPO · SBOM)",
    "mnemonic": "퍼·약·강·네 / 전·조·컴·기 (전략·조직·컴플라이언스·기여)",
    "definition": "오픈소스 사용 조건 규약과 법적·보안 리스크 통제 위한 관리 체계",
    "keywords": [
      "저작권(Copyright) vs 카피레프트(Copyleft, 파생물 소스코드 공개 의무)",
      "OSPO (Open Source Program Office, 오픈소스 전담 조직)",
      "ISO/IEC 5230 (OpenChain, 컴플라이언스 국제표준) & ISO/IEC 18974 (보안 보증)",
      "AI 생성 코드 저작권 오염 및 오픈웨이트(Open-weight) 상업용 제한 검증"
    ],
    "diagram": "[OSS/오픈웨이트 도입] ──▶ [SCA 도구 스캔 & SBOM(SPDX/CycloneDX) 명세화] ──▶ [라이선스 의무 검증 (MIT/Apache vs LGPL vs GPL/AGPL)] ──▶ [OSPO 승인 및 배포]",
    "tableRows": [
      {
        "major": "라이선스 계열 비교",
        "minor": "Permissive (MIT · Apache 2.0 · BSD)",
        "desc": "저작권 고지 및 라이선스 사본만 포함하면 수정 후 독점 상용 SW로 재배포 가능 (소스코드 공개 의무 없음, Apache는 특허 보복 조항 포함)"
      },
      {
        "major": "",
        "minor": "약한 Copyleft (LGPL · MPL)",
        "desc": "오픈소스 자체 수정분은 공개하되, 동적 링크(LGPL)나 별도 파일(MPL)로 결합한 독점 애플리케이션 코드는 비공개 허용"
      },
      {
        "major": "",
        "minor": "강한/네트워크 Copyleft (GPL · AGPL)",
        "desc": "정적·동적 링크 결합 시 전체 파생 소스코드를 공개해야 하며(GPL), 네트워크/클라우드(SaaS)로만 서비스해도 소스 공개 강제(AGPL)"
      },
      {
        "major": "OSS 거버넌스 체계",
        "minor": "OSPO & SBOM 공급망 관리",
        "desc": "전담 조직(OSPO)을 통해 도입 정책을 수립하고, 소프트웨어 자재명세서(SBOM)를 자동 생성해 Log4Shell 등 제로데이 취약점과 라이선스 분쟁 상시 통제"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "SW 품질 표준 (ISO/IEC 25010) & 품질인증 (GS · SP)",
    "mnemonic": "기·성·호·사·신·보·유·이 / 프·기·지 (프로젝트·개발·지원)",
    "definition": "SW 제품 품질 8대 주특성 국제표준(SQuaRE)과 국가 제품·프로세스 인증",
    "keywords": [
      "ISO 9126(품질모델) + ISO 14598(평가절차) 통합 → ISO/IEC 25000 (SQuaRE)",
      "25010(품질모델) · 2502n(품질측정) · 2503n(품질요구) · 2504n(품질평가)",
      "ISO 9126 대비 '보안성(Security)'과 '호환성(Compatibility)' 주특성 격상",
      "공공기관 우선구매 제도 혜택"
    ],
    "diagram": "[ISO/IEC 25000 (SQuaRE)] ──▶ [제품 품질 (ISO 25010): 기·성·호·사·신·보·유·이 8대 주특성 → GS인증(1·2등급)] + [프로세스 품질 (CMMI/SPICE) → SP인증(1~3등급)]",
    "tableRows": [
      {
        "major": "ISO/IEC 25010 8대 주특성",
        "minor": "기능적합성 · 성능효율성",
        "desc": "명시·내재된 요구 충족(완전성·정확성·적절성) 및 자원 대비 처리 성능(시간반응성·자원효율성·용량)"
      },
      {
        "major": "",
        "minor": "호환성 · 사용성",
        "desc": "타 시스템과 정보 교환 및 동일 환경 공유(공존성·상호운용성) 및 사용자 학습·조작 편의성(학습성·오류방지·접근성)"
      },
      {
        "major": "",
        "minor": "신뢰성 · 보안성",
        "desc": "지정 조건에서 무결함 동작(성숙성·가용성·결함허용성·복구성) 및 정보 보호(기밀성·무결성·부인방지·책임추적성·인증성)"
      },
      {
        "major": "",
        "minor": "유지보수성 · 이식성",
        "desc": "수정·개선의 용이성(모듈성·재사용성·분석성·수정/시험용이성) 및 타 환경 이전 능력(적응성·설치용이성·대체성)"
      },
      {
        "major": "국내 SW 품질인증",
        "minor": "GS인증 (제품) vs SP인증 (프로세스)",
        "desc": "ISO 25010 기반으로 완성된 SW 제품과 문서를 실제 테스트해 부여하는 인증(GS) vs SW 기업·조직의 개발·관리 프로세스 역량을 심사하는 인증(SP)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "SW 품질보증 (SQA) & 품질비용 (CoQ)",
    "mnemonic": "예·평·내·외 (적합비용: 예방·평가 / 비적합비용: 내부실패·외부실패)",
    "definition": "품질 목표 달성 위한 체계적 감시 활동과 품질 확보·실패 제반 비용",
    "keywords": [
      "결함 예방 중심 (Shift-Left 품질 관리)",
      "정형 기술 검토 (FTR: 동료검토 · 워크스루 · 인스펙션)",
      "품질보증(SQA, 프로세스 중심 예방) vs 품질통제(QC, 산출물 중심 결함 적발)",
      "초기 예방·평가 투자 시 후반 외부실패 비용 기하급수적 감소"
    ],
    "diagram": "se_sqa.png",
    "tableRows": [
      {
        "major": "SQA 정적 검토 (FTR)",
        "minor": "동료검토 · 워크스루 · 인스펙션",
        "desc": "작성자 동료 간 비공식 검토(Peer Review), 회의 전 자료 배포 후 시나리오 기반 검토(Walkthrough), 공식 체크리스트와 역할(주재자·낭독자·기록자) 기반 정밀 검증(Inspection)"
      },
      {
        "major": "적합 비용 (Cost of Conformance)",
        "minor": "예방 비용 (Prevention Cost)",
        "desc": "결함 발생 자체를 사전에 막기 위한 투자 비용 (품질 계획 수립, 개발자 교육, 표준·가이드 제정, CASE 도구 도입)"
      },
      {
        "major": "",
        "minor": "평가 비용 (Appraisal Cost)",
        "desc": "산출물이 품질 기준을 충족하는지 측정·검사하는 비용 (인스펙션, 코드 리뷰, 단위·통합·시스템 테스트 수행비, 외부 감리·인증비)"
      },
      {
        "major": "비적합 비용 (Non-conformance)",
        "minor": "내부 실패 비용 (Internal Failure)",
        "desc": "고객 인도(출시) 전에 발견된 결함을 수정하는 비용 (디버깅, 재작업, 결함 수정 후 회귀 테스트 비용)"
      },
      {
        "major": "",
        "minor": "외부 실패 비용 (External Failure)",
        "desc": "고객 인도(출시) 후에 운영 장애로 발생한 치명적 비용 (긴급 패치, 손해배상·클레임, 리콜, 기업 신뢰도 추락 — 가장 비용이 큼)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "SW 테스트 7원리 & V-모델 · 테스트 케이스 (ISO 29119)",
    "mnemonic": "결·완·초·집·살·정·오 / 요·분·설·개-단·통·시·인 / 아·항·조·절·입·예·실·성",
    "definition": "효과적 검증 위한 테스트 불변 7원칙과 개발 단계별 대응 테스트 체계",
    "keywords": [
      "결함 존재 증명 (무결함 증명 불가)",
      "파레토 법칙 (80%의 결함이 20%의 핵심 모듈에 집중)",
      "테스트 오라클 (참·샘플링·휴리스틱·일관성 오라클)",
      "ISO/IEC/IEEE 29119 (개·프·문·테·키 5대 파트 국제표준)"
    ],
    "diagram": "[요구사항 정의] ◀──▶ [인수 테스트 (알파/베타)]\n  [시스템 분석/설계] ◀──▶ [시스템 테스트 (기능/비기능)]\n    [아키텍처/상세설계] ◀──▶ [통합 테스트 (모듈 인터페이스)]\n      [구현 (코딩)] ───────▶ [단위 테스트 (모듈 내부 로직)]",
    "tableRows": [
      {
        "major": "테스트 7대 원리",
        "minor": "결·완·초·집",
        "desc": "1.결함 존재 증명(무결함 증명 불가), 2.완벽한 테스팅 불가능(무한 경로), 3.초기 테스팅 집중(호미로 막기), 4.결함 집중(파레토 법칙 80:20)"
      },
      {
        "major": "",
        "minor": "살·정·오",
        "desc": "5.살충제 패러독스(동일 TC 반복 시 신규 결함 미발견 → 지속 갱신), 6.정황 의존성(도메인별 전략 상이), 7.오류-부재의 궤변(요구사항 미충족 시 무용지물)"
      },
      {
        "major": "V-모델 테스트 단계",
        "minor": "단위 · 통합 · 시스템 · 인수",
        "desc": "개별 모듈 검증(단위) → 인터페이스 연동 검증(통합) → 전체 기능·성능·보안 검증(시스템) → 사용자·발주자 최종 승인 검증(인수: 알파/베타)"
      },
      {
        "major": "테스트 케이스 (TC)",
        "minor": "아·항·조·절·입·예·실·성",
        "desc": "식별자(ID), 테스트 항목, 사전 조건, 실행 절차, 입력 데이터, 예상 결과(Oracle), 실제 결과, 성공/실패 여부 (ISO 29119-3 명세 표준)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "블랙박스 테스트 & 화이트박스 테스트 (코드 커버리지)",
    "mnemonic": "동·경·의·상·페·원·오 / 구·결·조·변(MC/DC)",
    "definition": "명세 기반 입출력 기능 검증(블랙)과 내부 제어흐름 경로 검증(화이트)",
    "keywords": [
      "명세 기반 기법 (ISO 29119-4) vs 구조 기반 기법",
      "제어 흐름 그래프 (CFG) & 데이터 흐름 테스트 (Def-Use)",
      "루프 테스트 (단순 · 중첩 · 연결 · 비구조적 루프)",
      "항공(DO-178B/C)·자동차(ISO 26262 ASIL-D) 안전 필수 시스템 MC/DC 의무화"
    ],
    "diagram": "[블랙박스 (내부 코드 비공개): 입력값 ──▶ [명세 동작 검증] ──▶ 출력값] vs [화이트박스 (내부 코드 공개): 구문(Statement) ⊂ 결정(Branch) ⊂ 조건(Condition) ⊂ 변경조건/결정(MC/DC)]",
    "tableRows": [
      {
        "major": "블랙박스 테스트 기법",
        "minor": "동등분할 & 경계값 분석",
        "desc": "입력 도메인을 유효/무효집합으로 나누어 대표값 추출(동등분할) 및 결함이 몰리는 경계치(최솟값·최댓값 ±1) 집중 테스트(경계값 분석)"
      },
      {
        "major": "",
        "minor": "결정테이블 & 원인-결과 그래프",
        "desc": "복잡한 논리 조건 조합과 그에 따른 행위를 표로 정리(결정테이블)하거나 입력(원인)과 출력(결과)의 논리 관계를 그래프로 모델링"
      },
      {
        "major": "",
        "minor": "상태전이 & 페어와이즈(All-Pairs)",
        "desc": "이벤트에 따른 상태 변화와 비정상 전이 검증(상태전이) 및 두 파라미터 간 모든 조합을 최소 횟수로 커버하는 직교배열 기반 테스트(페어와이즈)"
      },
      {
        "major": "화이트박스 커버리지",
        "minor": "구문(Statement) · 결정(Branch)",
        "desc": "코드의 모든 실행 구문이 최소 1회 실행(구문/라인 커버리지) 및 조건문의 전체 결과가 True/False 모두 실행(결정/분기 커버리지)"
      },
      {
        "major": "",
        "minor": "조건(Condition) · MC/DC",
        "desc": "개별 조건식의 참/거짓 검증(조건) 및 각 개별 조건식이 다른 조건과 무관하게 독립적으로 전체 결정 결과에 영향을 미치는 조합만 선별 검증(MC/DC: N+1개 TC로 고신뢰 달성)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "맥케이브 순환복잡도 (McCabe Cyclomatic Complexity)",
    "mnemonic": "V(G) = E - N + 2 = P + 1 = 폐구간 + 1",
    "definition": "제어 흐름 그래프의 독립 실행 경로 수로 코드 복잡도를 정량 측정한 지표",
    "keywords": [
      "토마스 맥케이브 (Thomas J. McCabe)",
      "기초 경로 테스트 (Basis Path Testing) 최소 테스트 케이스 수 도출",
      "간선(Edge, 흐름 화살표) · 노드(Node, 처리 블록) · 조건분기(Predicate)",
      "복잡도 10 이하 권장 (리팩토링 기준점)"
    ],
    "diagram": "se_mccabe.png",
    "tableRows": [
      {
        "major": "3가지 산출 공식",
        "minor": "V(G) = E - N + 2",
        "desc": "제어 흐름 그래프의 총 간선 수(Edge)에서 총 노드 수(Node)를 뺀 뒤 2를 더하여 계산"
      },
      {
        "major": "",
        "minor": "V(G) = P + 1",
        "desc": "그래프 내 조건 분기문(if, while, for, case 등 Predicate 노드, 단 default 제외)의 개수에 1을 더하여 신속 계산"
      },
      {
        "major": "",
        "minor": "V(G) = 내부 폐구간(Region) + 1",
        "desc": "간선과 노드로 둘러싸인 닫힌 영역(폐구간)의 개수에 외부 영역 1을 더하여 계산"
      },
      {
        "major": "복잡도 평가 및 활용",
        "minor": "1~10(안정) vs 11~20(복잡) vs 21+(위험)",
        "desc": "V(G)가 10을 초과하면 결함 발생 확률이 급증하고 단위 테스트가 어려워지므로 메서드 분리(Extract Method) 리팩토링 수행"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "통합 테스트 (하향식 Stub · 상향식 Driver) & TDD",
    "mnemonic": "스·드·빅·샌 (하향식 Stub · 상향식 Driver) / 적·녹·리 (Red · Green · Refactor)",
    "definition": "가짜 모듈(Stub/Driver) 기반 인터페이스 검증과 테스트 선행 개발 기법",
    "keywords": [
      "인터페이스 파라미터 · 전역변수 · 예외 전달 오류 검출",
      "테스트 더블 (Dummy · Stub · Spy · Mock · Fake)",
      "켄트 벡 (Kent Beck) 테스트 주도 개발",
      "FIRST 단위 테스트 원칙 (Fast·Independent·Repeatable·Self-Validating·Timely)"
    ],
    "diagram": "[상위 제어 모듈] ──(하향식: 미완성 하위 모듈을 Stub으로 대체)──▶ [하위 모듈] / [하위 모듈] ◀──(상향식: 미완성 상위 호출자를 Driver로 대체)── [테스트 드라이버]",
    "tableRows": [
      {
        "major": "점진적 통합 테스트",
        "minor": "하향식 통합 & 스텁 (Stub)",
        "desc": "메인 제어 모듈부터 아래로(깊이/너비 우선) 통합하며, 아직 개발되지 않은 하위 피호출 모듈 역할을 대신하는 가짜 껍데기 객체(Stub) 사용"
      },
      {
        "major": "",
        "minor": "상향식 통합 & 드라이버 (Driver)",
        "desc": "최하위 모듈들을 클러스터로 묶어 위로 통합하며, 아직 없는 상위 호출 모듈을 대신해 파라미터를 넘기고 결과를 출력하는 제어 프로그램(Driver) 사용"
      },
      {
        "major": "비점진/절충형 통합",
        "minor": "빅뱅(Big-Bang) & 샌드위치(Sandwich)",
        "desc": "모든 모듈을 한꺼번에 결합(소규모 외 원인 파악 곤란)하거나, 목표 계층 기준 상위는 하향식(Stub), 하위는 상향식(Driver)을 동시 결합(샌드위치)"
      },
      {
        "major": "테스트 주도 개발 (TDD)",
        "minor": "Red → Green → Refactor 주기",
        "desc": "1.실패하는 단위 테스트 코드 선작성(Red) → 2.테스트를 통과하는 최소한의 프로덕션 코드 작성(Green) → 3.중복 제거 및 구조 개선 리팩토링(Refactor)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "특수 목적 테스트 (뮤테이션 · 메타모픽 · 회귀 · 몽키 · A/B · BMT)",
    "mnemonic": "돌·관·재·무·비·성 (돌연변이·관계검증·재검증·무작위·비교실험·성능검증)",
    "definition": "테스트케이스 품질·AI 오라클 부재·변경 부작용·성능을 검증하는 기법군",
    "keywords": [
      "죽은 뮤턴트(Killed Mutant) / 살아남은 뮤턴트(Survived Mutant)",
      "Test Oracle Problem (정답을 알 수 없는 AI/초거대 과학 연산)",
      "선택적 회귀 테스트 (변경 영향도 기반 TC 선별 자동화)",
      "PoC(기술 타당성 검증) vs BMT(성능 비교 시험) vs Pilot(소규모 실전 검증)"
    ],
    "diagram": "[뮤테이션: 원본 코드에 인위적 결함(Mutant) 주입 → TC가 결함 잡는지 검증] / [메타모픽: 원본 입력(x)과 변환 입력(T(x))의 출력 관계(MR) 일관성으로 AI 신뢰성 검증]",
    "tableRows": [
      {
        "major": "TC 품질 & AI 검증",
        "minor": "뮤테이션 테스트 (Mutation)",
        "desc": "원본 프로그램에 연산자 변형 등 인위적 결함(Mutant)을 주입한 뒤 기존 테스트케이스가 이를 적발(Kill)하는 비율(Mutation Score)로 테스트 스위트의 충분성 평가"
      },
      {
        "major": "",
        "minor": "메타모픽 테스트 (Metamorphic)",
        "desc": "정답(Oracle)을 사전 정의하기 어려운 AI·딥러닝 시스템에서 입력 변환 시 출력 간 성립해야 할 대수적·불변 관계(Metamorphic Relation, 예: 이미지 회전 시 동일 객체 인식)로 결함 검출"
      },
      {
        "major": "유지보수 & 강건성",
        "minor": "회귀 테스트 (Regression)",
        "desc": "결함 수정이나 기능 추가 후 기존 정상 동작하던 기능에 의도치 않은 부작용(Side-effect)이 유입되지 않았는지 자동화 스크립트로 반복 재검증"
      },
      {
        "major": "",
        "minor": "몽키 테스트 (Monkey / Fuzzing)",
        "desc": "시나리오 없이 무작위 난수 입력과 비정상 터치·이벤트를 대량 주입하여 시스템 크래시, 메모리 누수, 예외 처리 누락을 검증"
      },
      {
        "major": "의사결정 & 도입 검증",
        "minor": "A/B 테스트 & BMT (벤치마크)",
        "desc": "실사용자를 대조군(A)과 실험군(B)으로 나누어 전환율 등 UX 효과 비교(A/B) 및 공공·기업 도입 전 후보 제품들을 동일 환경에서 정량 성능 비교 시험(BMT)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "SW 안전성 분석 (FTA · FMEA · HAZOP) & STPA",
    "mnemonic": "사·제·유·원 (사고/손실 정의 · 제어구조 모델링 · UCA 식별 · 손실시나리오 도출)",
    "definition": "고장 연쇄(FTA/FMEA)를 넘어 시스템 상호작용 제어 결함을 분석하는 기법",
    "keywords": [
      "Safety-I (개별 부품 고장 중심) vs Safety-II / STAMP (시스템 이론·상호작용 중심)",
      "MIT 낸시 레브슨 (Nancy Leveson) 교수 제안",
      "개별 컴포넌트가 정상이어도 상호작용 오류로 사고 발생하는 현대 SW 특성",
      "UCA (Unsafe Control Action, 불안전 제어 행위 4유형)"
    ],
    "diagram": "<img src=\"se_safety2.png\" alt=\"안전성 분석 비교\"><img src=\"se_stpa1.png\" alt=\"STPA 제어 루프\"><img src=\"se_stpa2.png\" alt=\"STPA 4단계 절차\">",
    "tableRows": [
      {
        "major": "전통적 안전성 분석",
        "minor": "FTA (결함 트리 분석, 연역적)",
        "desc": "최상위 사고(Top Event)로부터 원인이 되는 하위 결함들을 AND/OR 논리 게이트 트리로 하향식(Top-Down) 추적"
      },
      {
        "major": "",
        "minor": "FMEA (고장모드 영향분석, 귀납적)",
        "desc": "개별 부품의 고장 형태가 상위 시스템에 미치는 영향을 상향식(Bottom-Up)으로 분석하고 RPN(심각도×발생도×검출도) 산출"
      },
      {
        "major": "",
        "minor": "HAZOP (위험과 운전분석)",
        "desc": "가이드워드(No, More, Less, Reverse 등)를 설계 파라미터에 결합하여 공정·시스템 이탈 위험을 브레인스토밍으로 도출"
      },
      {
        "major": "STPA (시스템 이론 기반)",
        "minor": "1. 분석 목적 정의 & 2. 제어구조 모델링",
        "desc": "수용 불가한 손실(Loss)과 시스템 위험(Hazard)을 정의하고, 제어기(Controller)-액추에이터-프로세스-센서 간 피드백 제어 루프를 작성"
      },
      {
        "major": "",
        "minor": "3. 불안전 제어행위(UCA) 식별",
        "desc": "제어 명령의 4가지 위험 조건(미제공, 오제공, 타이밍 빠름/늦음, 지속시간 너무 김/짧음)을 체계적으로 도출"
      },
      {
        "major": "",
        "minor": "4. 손실 시나리오 도출",
        "desc": "제어 알고리즘 결함, 부적절한 프로세스 모델(인식 불일치), 피드백 지연·누락 등 UCA가 발생하는 인과 시나리오를 규명해 안전 요구사항 명세"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "카오스 엔지니어링 & 관찰 가능성 (Observability · SLO)",
    "mnemonic": "정·가·주·검·개 / 메·로·트 (Metrics · Logs · Traces)",
    "definition": "운영 환경에 의도적 장애를 주입해 복원력을 검증하고 내부 상태를 추론",
    "keywords": [
      "넷플릭스 Chaos Monkey / Chaos Mesh / Gremlin",
      "폭발 반경 (Blast Radius) 최소화",
      "모니터링(Known Unknowns, 사전에 정의한 임계치 감시) vs 관찰가능성(Unknown Unknowns, 예측 못한 분산 장애 원인 탐색)",
      "SRE: SLI(지표) · SLO(목표) · SLA(계약) · 에러 버짓(Error Budget)"
    ],
    "diagram": "[정상 상태(Steady State) 정의 및 가설 수립] ──▶ [통제된 장애 주입 (서버 다운·네트워크 지연)] ──▶ [관찰가능성 3요소(메트릭·로그·트레이스)로 회복탄력성 검증 및 개선]",
    "tableRows": [
      {
        "major": "카오스 엔지니어링 절차",
        "minor": "정·가·주·검·개",
        "desc": "1.정상 상태 지표 정의 → 2.장애 시에도 정상 유지된다는 가설 수립 → 3.실제 장애 주입(폭발 반경 통제) → 4.시스템 복원력 검증 → 5.취약점 아키텍처 개선"
      },
      {
        "major": "관찰 가능성 3대 축",
        "minor": "Metrics (메트릭 - 무엇이 이상한가)",
        "desc": "CPU, 메모리, RPS, 에러율 등 시계열 수치 데이터를 수집하여 시스템의 전반적 상태와 이상 징후 감지 (Prometheus, Grafana)"
      },
      {
        "major": "",
        "minor": "Logs (로그 - 왜 발생했는가)",
        "desc": "개별 서비스 내부에서 발생한 이벤트와 예외 스택 트레이스를 타임스탬프와 함께 구조화(JSON) 기록 (ELK, Fluentd, Loki)"
      },
      {
        "major": "",
        "minor": "Traces (분산 추적 - 어디서 지연됐는가)",
        "desc": "단일 요청에 고유 Trace ID와 Span ID를 부여해 다수의 마이크로서비스를 거치는 전체 호출 경로와 병목 구간을 시각화 (OpenTelemetry, Jaeger)"
      },
      {
        "major": "SRE 신뢰성 관리",
        "minor": "SLO & 에러 버짓 (Error Budget)",
        "desc": "목표 가용성(예: SLO 99.9%)의 여집합인 허용 장애 시간(0.1%, 에러 버짓)이 남아있으면 신규 기능 배포를 가속하고, 소진 시 안정화에만 집중"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "형상관리 (SCM) & 형상관리 기준선 (Baseline)",
    "mnemonic": "식·통·감·기 / 기·분·설·시·제·운",
    "definition": "SW 전 생명주기 산출물의 변경을 통제·추적하고 단계별 승인 기준점을 확립",
    "keywords": [
      "가시성(Visibility)과 추적성(Traceability) 확보",
      "형상 항목 (CI, Configuration Item: 코드·문서·모델·설정파일)",
      "형상통제위원회 (CCB) 공식 승인 절차",
      "분산 버전 관리 (Git: Branch · Merge · Pull Request)"
    ],
    "diagram": "se_scm.png",
    "tableRows": [
      {
        "major": "형상관리 4대 절차",
        "minor": "식별 (Identification) & 통제 (Control)",
        "desc": "관리 대상 산출물(CI)에 고유 식별번호를 부여(식별)하고, 변경 요청 시 CCB가 영향도를 평가하여 승인·거절(통제)"
      },
      {
        "major": "",
        "minor": "감사 (Audit) & 기록 (Accounting)",
        "desc": "기준선 산출물의 물리적·기능적 무결성과 일관성을 검증(감사)하고, 모든 변경 내역과 상태를 이력으로 보존·보고(기록)"
      },
      {
        "major": "개발 단계별 기준선",
        "minor": "기능적(계획) · 분배적(분석) 기준선",
        "desc": "시스템 차원의 기능·성능 요구사항 확정(기능적 기준선) 및 서브시스템별 요구사항 분할 명세 확정(분배적 기준선: SRS)"
      },
      {
        "major": "",
        "minor": "설계(설계) · 시험(구현) 기준선",
        "desc": "아키텍처·DB·상세 설계서 완성 시점(설계 기준선) 및 단위 코딩 완료 후 통합·시스템 시험 진입 시점(시험 기준선)"
      },
      {
        "major": "",
        "minor": "제품(시험완료) · 운용(이관) 기준선",
        "desc": "시스템·인수 테스트 완료 후 출시 직전 산출물(제품 기준선) 및 실제 운영 환경 설치·이관 완료 시점(운용 기준선)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "SW 유지보수 (리먼의 법칙) & 3R (역공학 · 재공학 · 재사용)",
    "mnemonic": "수·완·예·적 / 계·복·자·조·친·지·감·피 / 논·자·구·모·의·부·모·기",
    "definition": "인도 후 SW를 지속 진화시키고 레거시 자산을 분석·현대화·활용하는 기법",
    "keywords": [
      "전체 생명주기 비용의 60~70% 이상 차지 (완전적 유지보수 비중 최대)",
      "Lehman의 SW 진화 8법칙 (계속적 변화 · 복잡도 증가 · 품질 감소 등)",
      "외계인 코드(Alien Code) 및 레거시 시스템 현대화",
      "정방향 공학(Forward) ↔ 역공학(Reverse) ↔ 재공학(Re-engineering)"
    ],
    "diagram": "<img src=\"se_3r1.png\" alt=\"3R 개념도\"><img src=\"se_3r2.png\" alt=\"재공학 프로세스\">",
    "tableRows": [
      {
        "major": "유지보수 4대 유형",
        "minor": "수정 · 적응 · 완전 · 예방 (수완예적)",
        "desc": "잠재 결함·오류 패치(수정, 20%), OS·HW·법규 등 외부 환경 변화 대응(적응, 25%), 신규 기능 추가·성능 개선(완전, 50% 최대), 미래 유지보수성 향상을 위한 선제 리팩토링(예방, 5%)"
      },
      {
        "major": "리먼의 SW 진화 법칙",
        "minor": "계·복·자·조·친·지·감·피",
        "desc": "SW는 계속 변경되어야 유용하며(계속적 변화), 변경할수록 구조가 복잡해지고(복잡도 증가), 리팩토링하지 않으면 품질이 저하됨(감소하는 품질)"
      },
      {
        "major": "3R 현대화 기법",
        "minor": "역공학 (Reverse: 논·자)",
        "desc": "기존 소스코드나 실행 파일로부터 역으로 분석하여 소실된 설계 문서·비즈니스 규칙(논리 역공학) 및 DB 스키마·ERD(자료 역공학)를 추출"
      },
      {
        "major": "",
        "minor": "재공학 (Re-engineering: 구·모·의)",
        "desc": "역공학으로 파악한 기존 시스템을 재구조화·재모듈화·의미론적 추출을 거쳐 MSA나 클라우드 네이티브 등 현대적 아키텍처·언어로 재구축"
      },
      {
        "major": "",
        "minor": "재사용 (Reuse: 부·모·기)",
        "desc": "검증된 소프트웨어 자산이나 컴포넌트·프레임워크를 부품조립(합성 중심), 모형화(생성 중심), 기존 SW 수정 방식으로 신규 개발에 활용"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "기술 부채 (Technical Debt) & 코드 스멜 · 리팩토링",
    "mnemonic": "설·코·테·문 / 이·분·일·통·재 (이동·분리·일반화·통합·재명명)",
    "definition": "단기 개발 속도 위해 타협한 추가 비용(부채)을 외적 동작 유지 채로 개선",
    "keywords": [
      "워드 커닝햄 (Ward Cunningham, 기술 부채와 복리 이자 비유)",
      "마틴 파울러 (Martin Fowler, 코드 스멜과 리팩토링)",
      "샷건 서저리(Shotgun Surgery, 한 곳 수정 시 다수 클래스 연쇄 수정) & 거대 클래스(God Class)",
      "정적 분석 도구(SonarQube, ESLint, Sparrow) 및 CI/CD 연동"
    ],
    "diagram": "[기술 부채 누적 (설계·코드·테스트·문서 부채)] ──▶ [코드 스멜 탐지 (중복 코드·긴 메서드·과도한 결합)] ──▶ [리팩토링 (외부 기능 불변 + 내부 구조 개선: 이·분·일·통·재)]",
    "tableRows": [
      {
        "major": "기술 부채 4유형",
        "minor": "설계 · 코드 · 테스트 · 문서 부채",
        "desc": "아키텍처 원칙 위반(설계), 스파게티 코드·컨벤션 위반(코드), 자동화 테스트·커버리지 부재(테스트), 산출물 미현행화(문서)로 미래 변경 비용(이자) 가중"
      },
      {
        "major": "주요 코드 스멜",
        "minor": "클래스 수준 & 코드 수준 악취",
        "desc": "단일책임(SRP)을 어긴 거대 클래스, 산탄총 수술(Shotgun Surgery), 기능 편애(Feature Envy) 및 중복 코드, 긴 파라미터 목록, 모호한 변수명"
      },
      {
        "major": "리팩토링 해결 기법",
        "minor": "결합도 완화 (이동 · 분리)",
        "desc": "책임에 맞는 클래스로 메서드·필드 이동(Move Method) 및 거대 함수를 단일 기능 단위로 쪼개기(Extract Method/Class)"
      },
      {
        "major": "",
        "minor": "응집도·가독성 향상 (일반화 · 통합 · 재명명)",
        "desc": "공통 로직을 상위 클래스로 올림(Pull Up), 불필요한 위임 통합(Inline), 의도가 드러나도록 식별자 변경(Rename)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "SW 규모·비용 산정 & 기능점수 (FP: 정규법 vs 간이법)",
    "mnemonic": "I·E·E·I·E (내외외내외: ILF·EIF·EI·EO·EQ) / 하·전·유·기",
    "definition": "사용자 관점 데이터·트랜잭션 기능점수(FP)로 SW 개발 규모와 대가를 산정",
    "keywords": [
      "ISO/IEC 20926 (IFPUG 기능점수 국제표준) & SW사업 대가산정 가이드",
      "LOC(코드라인)·COCOMO(초기 경험적 산정) 한계 극복 (프로그래밍 언어 독립적)",
      "정규법(상세 복잡도 가중치) vs 간이법(평균 복잡도 가중치, 초기 예산·발주 단계)",
      "보정 후 개발원가 = 총 기능점수(FP) × FP당 단가 × 보정계수(규모·복잡도·언어 등)"
    ],
    "diagram": "se_size_cost.png",
    "tableRows": [
      {
        "major": "데이터 기능 (2개)",
        "minor": "내부논리파일 (ILF, Internal Logical File)",
        "desc": "애플리케이션 경계 내부에서 생성·유지보수되는 사용자 식별 가능 논리적 데이터 그룹 (시스템 내부 DB 테이블군)"
      },
      {
        "major": "",
        "minor": "외부연계파일 (EIF, External Interface File)",
        "desc": "타 애플리케이션 내부에서 유지보수되며 현재 시스템에서는 오직 조회·참조만 하는 외부 데이터 그룹"
      },
      {
        "major": "트랜잭션 기능 (3개)",
        "minor": "외부입력 (EI, External Input)",
        "desc": "경계 외부에서 데이터가 유입되어 내부논리파일(ILF)을 등록·수정·삭제하거나 시스템 동작을 변경하는 처리"
      },
      {
        "major": "",
        "minor": "외부출력 (EO) vs 외부조회 (EQ)",
        "desc": "수식 계산·파생 데이터 생성·ILF 갱신 등 가공 로직을 포함해 외부로 표출(EO) vs 단순 검색 후 가공 없이 그대로 출력(EQ)"
      },
      {
        "major": "산정 방식 비교",
        "minor": "정규법 vs 간이법",
        "desc": "요구사항이 구체화된 단계에서 DET/RET/FTR 개수로 복잡도(낮음/보통/높음)를 정밀 평가(정규법) vs 기획·예산 수립 단계에서 기능 유형별 평균 가중치를 일괄 적용(간이법)"
      }
    ]
  },
  {
    "domain": "소공",
    "topic": "SW사업 영향평가 & 과업심의위원회 · 정보시스템 감리 vs PMO",
    "mnemonic": "계·발·공 (계획·발주·결과공시) / 전·착·중·완 (감리) / 제3자 독립 vs 발주자 위탁",
    "definition": "공공 SW 민간침해 방지·적정 과업 통제 제도 및 제3자 감리와 상시 PMO",
    "keywords": [
      "소프트웨어 진흥법 제43조(영향평가) · 제50조(과업심의위원회 의무화)",
      "전자정부법 제57조(정보시스템 감리) · 제64조(전자정부사업관리 위탁 PMO)",
      "무분별한 공공 무료 SW 배포에 따른 민간 상용 SW 시장 위축 방지",
      "불명확한 과업 및 부당한 무상 과업변경(추가 요구) 근절"
    ],
    "diagram": "<img src=\"se_impact.png\" alt=\"SW사업 영향평가 절차\"><img src=\"se_audit_pmo.png\" alt=\"정보시스템 감리와 PMO 비교\">",
    "tableRows": [
      {
        "major": "공공 SW 생태계 보호",
        "minor": "SW사업 영향평가 (계·발·공)",
        "desc": "공공이 SW사업 추진 시 민간 상용 SW 존재 여부·시장 침해 가능성을 사전 검토 (예산계획 수립 전 1단계 → 입찰공고 30일 전 2단계 → 결과 공개)"
      },
      {
        "major": "",
        "minor": "과업심의위원회",
        "desc": "과업 내용 확정, 과업변경 발생 시 계약금액·기간의 적정한 조정을 심의하여 발주기관의 부당한 무상 추가 요구를 차단"
      },
      {
        "major": "감리 vs PMO 비교",
        "minor": "정보시스템 감리 (제3자 독립 점검)",
        "desc": "발주자·사업자와 독립된 제3자 감리법인이 특정 시점(착수·중간·완료 단계)에 산출물과 시스템 안전성·적법성을 객관적으로 진단·시정조치 (일정 규모 이상 의무)"
      },
      {
        "major": "",
        "minor": "PMO (발주기관 위탁 상시 관리)",
        "desc": "발주기관의 부족한 전문성을 보완하기 위해 외부 전문조직에 사업 전 주기의 일정·위험·요구사항·품질 관리를 위탁하여 상시 수행"
      }
    ]
  },
  {
    "domain": "통계",
    "topic": "가설검정 (Hypothesis Testing)",
    "mnemonic": "귀·대·유·기",
    "definition": "모집단 판정 위해 유의확률로 귀무가설 기각 결정 기법",
    "keywords": [
      "귀무가설(H0) vs 대립가설(H1)",
      "유의수준(α) & 유의확률(p-value)",
      "기각역 & 임계값",
      "양측검정 vs 단측검정"
    ],
    "diagram": "[가설 설정: H0(차이 없음) vs H1(차이 있음)] ➔ [검정통계량 및 유의확률(p-value) 산출] ➔ p-value < 유의수준(α, 0.05) 이면 H0 기각, H1 채택!",
    "tableRows": [
      {
        "major": "가설 설정",
        "minor": "귀무가설(H0) & 대립가설(H1)",
        "desc": "기존 통념·차이 없음(H0)과 연구자가 강한 근거로 입증하려는 새로운 주장·차이 있음(H1)"
      },
      {
        "major": "판정 지표",
        "minor": "유의수준(α) & 유의확률(p-value)",
        "desc": "• 유의수준(α): 귀무가설을 기각하는 기준이 되는 최대 허용 오류 확률 (통상 0.05 또는 0.01)\n• 유의확률(p-value): 귀무가설이 참일 때 현재 표본처럼 극단적인 결과가 우연히 관측될 확률"
      },
      {
        "major": "의사 결정",
        "minor": "기각 여부 판정",
        "desc": "p-value < α 이면 우연히 일어날 확률이 매우 희박하므로 귀무가설(H0)을 기각하고 대립가설(H1)을 통계적으로 유의하다고 채택"
      }
    ]
  },
  {
    "domain": "통계",
    "topic": "제1종 오류와 제2종 오류",
    "mnemonic": "귀참기1 / 대참채2",
    "definition": "가설검정 시 참인 귀무가설 기각·대립가설 놓치는 오류",
    "keywords": [
      "제1종 오류 (α, 위양성 False Positive)",
      "제2종 오류 (β, 위음성 False Negative)",
      "검정력 (Power = 1 - β)",
      "α와 β의 상충관계 (Trade-off)",
      "두음: 귀참기1 / 대참채2"
    ],
    "diagram": "• 제1종 오류(α) : 귀무가설(H0)이 참인데 기각 (무죄인 사람을 유죄 판결)\n• 제2종 오류(β) : 대립가설(H1)이 참인데 H0 채택 (유죄인 범인을 무죄 방면)  |  검정력(1-β) = 진짜 효과를 찾아낼 확률",
    "tableRows": [
      {
        "major": "오류 유형",
        "minor": "제1종 오류 (α)",
        "desc": "귀무가설(H0)이 실제로는 참인데도 이를 잘못 기각하는 오류 (효과가 없는데 있다고 오판, 유의수준 α로 통제)"
      },
      {
        "major": "오류 유형",
        "minor": "제2종 오류 (β)",
        "desc": "대립가설(H1)이 실제로는 참인데도 귀무가설을 기각하지 못하는 오류 (진짜 있는 효과를 놓침)"
      },
      {
        "major": "검정 능력",
        "minor": "검정력 (1 - β) & 관계",
        "desc": "• 검정력(1-β): 대립가설이 참일 때 이를 올바르게 채택할 확률\n• 표본 크기가 고정된 상태에서 α를 줄이면 β가 커지는 상충관계(Trade-off)가 존재하며, 둘 다 줄이려면 표본 크기(n)를 늘려야 함"
      }
    ]
  },
  {
    "domain": "통계",
    "topic": "회귀분석 (Regression Analysis)",
    "mnemonic": "선·독·등·정",
    "definition": "변수 간 인과관계 규명 위해 최소제곱법 쓰는 분석 기법",
    "keywords": [
      "독립변수(X) · 종속변수(Y)",
      "최소제곱법 (OLS)",
      "4대 기본가정 (선형성·독립성·등분산성·정규성)",
      "결정계수 (R²) & 수정된 R²",
      "두음: 선독등정"
    ],
    "diagram": "[독립변수 X1, X2, ...] ➔ [선형 회귀모형 Y = β0 + β1X1 + ... + ε (OLS 잔차제곱합 최소화)] ➔ [F-검정(모형) · t-검정(회귀계수) · R² 평가]",
    "tableRows": [
      {
        "major": "핵심 원리",
        "minor": "최소제곱법 (OLS)",
        "desc": "독립변수(원인 X)와 종속변수(결과 Y) 간의 선형 함수식을 도출하기 위해 실제값과 예측값의 차이인 잔차 제곱합(SSE)을 최소화하는 계수 추정"
      },
      {
        "major": "4대 기본가정",
        "minor": "선 · 독 · 등 · 정",
        "desc": "① 선형성(X와 Y의 선형 관계) ② 잔차 독립성(자기상관 없음, 더빈-왓슨 검정) ③ 잔차 등분산성(분산 일정) ④ 잔차 정규성(정규분포 충족)"
      },
      {
        "major": "모형 적합도",
        "minor": "결정계수 (R²)",
        "desc": "총변동(SST) 중 회귀모형에 의해 설명되는 변동(SSR)의 비율(0~1)로, 독립변수 수 증가에 따른 과대평가를 보정하기 위해 수정된 결정계수(Adjusted R²) 활용"
      }
    ]
  },
  {
    "domain": "통계",
    "topic": "다중공선성 (Multicollinearity)",
    "mnemonic": "상·팽·제·주·규",
    "definition": "독립변수 간 강한 상관성으로 회귀계수 분산 팽창 현상",
    "keywords": [
      "독립변수 간 강한 상관관계",
      "회귀계수 분산 팽창 (불안정성)",
      "분산팽창요인 (VIF ≥ 10)",
      "주성분 분석(PCA) · 릿지(L2) · 라쏘(L1)"
    ],
    "diagram": "[독립변수 X1 ↔ X2 강한 상관관계 발생] ➔ 회귀계수 추정치 왜곡 ➔ [진단: VIF = 1 ÷ (1 - R_i²) ≥ 10] ➔ [해결: 변수 제거 · PCA · 정규화(Ridge/Lasso)]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "다중공선성 정의",
        "desc": "다중회귀분석에서 독립변수들끼리 서로 독립적이지 않고 강한 선형 상관관계를 가져 회귀계수 추정의 표준오차가 비정상적으로 커지는 현상"
      },
      {
        "major": "진단 지표",
        "minor": "분산팽창요인 (VIF)",
        "desc": "특정 독립변수를 다른 독립변수들로 회귀분석했을 때의 결정계수(R_i²)를 이용한 지표로, 통상 VIF ≥ 10 이면 심각한 다중공선성 존재로 판정"
      },
      {
        "major": "해결 방안",
        "minor": "변수 선택 · 차원축소 · 규제",
        "desc": "• 상관성이 높은 중복 독립변수 제거 또는 단계적 변수 선택법 적용\n• 주성분 회귀(PCR/PCA)로 서로 직교하는 주성분 도출\n• 가중치 크기에 페널티를 부여하는 릿지(Ridge, L2 규제) 또는 라쏘(Lasso, L1 규제) 회귀 적용"
      }
    ]
  },
  {
    "domain": "프관",
    "topic": "기성고 관리 (EVM)",
    "mnemonic": "계·획·실 / 일·원·편·지",
    "definition": "일정·원가 측정 위해 계획·획득·실제비용 비교 기법",
    "keywords": [
      "Earned Value Management",
      "계획가치(PV) · 획득가치(EV) · 실제비용(AC)",
      "일정편차(SV) & 일정성과지수(SPI)",
      "원가편차(CV) & 원가성과지수(CPI)",
      "완료시점 추정치 (EAC · ETC)",
      "두음: 계획실 / 일원편지"
    ],
    "diagram": "• 일정 성과 : SV = EV - PV (>0 앞섬)  |  SPI = EV ÷ PV (>1.0 양호)\n• 원가 성과 : CV = EV - AC (>0 절감)  |  CPI = EV ÷ AC (>1.0 양호)  |  최종예상비용 EAC = BAC ÷ CPI",
    "tableRows": [
      {
        "major": "3대 기본지표",
        "minor": "PV · EV · AC",
        "desc": "• 계획가치(PV): 기준 시점까지 계획된 예산\n• 획득가치(EV): 실제 완료된 작업량의 화폐 가치(기성고)\n• 실제비용(AC): 작업 수행에 실제 지출된 총비용"
      },
      {
        "major": "성과 분석",
        "minor": "일정(SV·SPI) & 원가(CV·CPI)",
        "desc": "• 일정 분석: 획득가치(EV)에서 계획가치(PV)를 빼거나 나누어 진척도 평가\n• 원가 분석: 획득가치(EV)에서 실제비용(AC)을 빼거나 나누어 예산 효율성 평가"
      },
      {
        "major": "미래 예측",
        "minor": "BAC · ETC · EAC",
        "desc": "완료시점 총예산(BAC), 잔여작업 예상비용(ETC), 현재 원가효율 지속 시 최종 예상 총비용(EAC = BAC ÷ CPI)"
      }
    ]
  },
  {
    "domain": "프관",
    "topic": "주공정법 (CPM)",
    "mnemonic": "전·후·여·주",
    "definition": "공사기간 산정 위해 여유시간 0인 최장 경로 도출 기법",
    "keywords": [
      "Critical Path Method",
      "주공정 (Critical Path: 최장 경로)",
      "ES · EF (조기 시작·종료)",
      "LS · LF (만기 시작·종료)",
      "총 여유시간 (Total Float / Slack = 0)"
    ],
    "diagram": "[전진 계산 (Forward Pass): ES · EF 도출] ➔ [후진 계산 (Backward Pass): LF · LS 도출]\n➔ 여유시간(Float = LS - ES = LF - EF)이 '0'인 작업들을 연결한 최장 경로 = [주공정 (Critical Path)]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "주공정 (Critical Path)",
        "desc": "프로젝트 네트워크 다이어그램에서 시작부터 종료까지 가장 긴 시간이 소요되는 경로로, 프로젝트 전체 최소 완료 기간을 결정함"
      },
      {
        "major": "일정 계산",
        "minor": "전진 계산 & 후진 계산",
        "desc": "• 전진 계산: 시작부터 끝으로 진행하며 가장 빠른 시작(ES)·종료(EF) 시간 산출\n• 후진 계산: 종료 시점부터 역산하며 전체 일정을 늦추지 않는 가장 늦은 시작(LS)·종료(LF) 시간 산출"
      },
      {
        "major": "여유 시간",
        "minor": "총 여유시간 (Total Float)",
        "desc": "전체 프로젝트 완료일을 지연시키지 않고 특정 활동을 늦출 수 있는 시간(LS - ES)으로, 주공정 위의 모든 활동은 여유시간이 0임"
      }
    ]
  },
  {
    "domain": "프관",
    "topic": "크래싱 (Crashing)",
    "mnemonic": "자·투·원·단",
    "definition": "일정 단축 위해 주공정 작업에 추가 자원을 투입한 기법",
    "keywords": [
      "일정 단축 기법 (Schedule Compression)",
      "주공정(Critical Path) 활동 자원 추가 투입",
      "비용-일정 교환 (Time-Cost Trade-off)",
      "직접 원가 상승 위험"
    ],
    "diagram": "[주공정 작업 A (정상 10일 / 100만원)] ──(인력·장비·특근 자원 추가 투입: Crashing)──▶ [단축 작업 A (5일 / 180만원)]\n➔ 작업 순서는 그대로 유지하면서 직접 비용(Cost)을 추가 투입해 주공정 기간 단축!",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "자원 투입형 일정 단축",
        "desc": "프로젝트 범위(Scope)를 축소하지 않고, 주공정(Critical Path) 상의 활동에 인력·장비·초과근무 등 추가 자원을 투입하여 최소의 추가 비용으로 최대의 일정을 단축하는 기법"
      },
      {
        "major": "적용 원칙",
        "minor": "비용 기울기 (Cost Slope)",
        "desc": "단위 기간(1일) 단축 시 증가하는 비용 기울기[(급속비용-정상비용) ÷ (정상기간-급속기간)]가 가장 작은 주공정 활동부터 우선 단축"
      },
      {
        "major": "핵심 리스크",
        "minor": "원가 상승 & 수확체감",
        "desc": "직접 원가(비용)가 상승하며, 과도한 인력 투입 시 의사소통 채널 증가(브룩스의 법칙)로 인해 오히려 효율이 저하될 수 있음"
      }
    ]
  },
  {
    "domain": "프관",
    "topic": "패스트 트래킹 (Fast Tracking)",
    "mnemonic": "병·중·재·단",
    "definition": "일정 단축 위해 순차 수행할 주공정 작업 병행하는 기법",
    "keywords": [
      "일정 단축 기법 (Schedule Compression)",
      "순차 공정의 병행(중첩) 수행",
      "FS(종료-시작) → SS(시작-시작) 관계 변경",
      "재작업(Rework) 및 품질 저하 위험"
    ],
    "diagram": "• 기존 순차 수행 : [설계 완료] ──▶ [개발 착수] ──▶ [테스트] (전체 기간 10주)\n• 패스트 트래킹  : [설계 진행 중] + [설계 확정 부분부터 개발 동시 병행 착수!] (전체 기간 7주로 단축, 재작업 리스크 증가)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "공정 중첩형 일정 단축",
        "desc": "원래 순차적으로 수행할 계획이었던 주공정 상의 활동이나 단계들을 일정 부분 겹쳐서(Overlapping) 동시에 병행 수행함으로써 전체 일정을 단축하는 기법"
      },
      {
        "major": "적용 방식",
        "minor": "선후행 관계 조정",
        "desc": "선행 작업이 100% 끝나기 전에 후행 작업을 앞당겨 시작(Lead Time 부여, FS 관계를 SS+지연 관계로 전환)"
      },
      {
        "major": "핵심 리스크",
        "minor": "재작업(Rework) & 품질 저하",
        "desc": "추가 자원 투입 비용은 들지 않으나, 앞 단계 산출물이 변경될 경우 대규모 재작업(Rework)이 발생하고 프로젝트 리스크와 품질 저하 위험이 커짐"
      }
    ]
  },
  {
    "domain": "CAOS",
    "topic": "캐시 일관성 (Cache Coherency)",
    "mnemonic": "공·변·버·디 / 스·디·메",
    "definition": "데이터 불일치 방지 위해 멀티코어 캐시 값 맞추는 기술",
    "keywords": [
      "멀티코어 캐시 불일치",
      "스누핑 (버스 감시)",
      "디렉터리 기반 프로토콜",
      "거짓 공유 (False Sharing)"
    ],
    "diagram": "[코어 1 로컬 캐시]   [코어 2 로컬 캐시]   [코어 3 로컬 캐시]\n        ↕                    ↕                    ↕\n============= 공용 시스템 버스 (스누핑 감시 / 디렉터리 제어) =============\n                             ↕\n                     [주기억장치 (RAM)]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "캐시 일관성 정의",
        "desc": "멀티코어 환경에서 각 코어 로컬 캐시가 동일한 메모리 주소를 참조할 때 최신 데이터 값을 일치시키는 기술"
      },
      {
        "major": "발생 원인",
        "minor": "데이터 불일치",
        "desc": "코어별 개별 캐시 갱신(Write-Back 등), DMA 입출력, 프로세스 코어 이주 시 구버전 데이터 참조 발생"
      },
      {
        "major": "유지 기법",
        "minor": "스누핑 & 디렉터리",
        "desc": "• 스누핑(Snooping): 모든 캐시 제어기가 공용 버스를 감시하며 동일 주소 수정 시 무효화/갱신 신호 전파\n• 디렉터리 기반: 중앙 디렉터리에 캐시 블록 공유 상태를 기록·추적 (대규모 코어 확장성 우수)"
      },
      {
        "major": "성능 이슈",
        "minor": "거짓 공유 (False Sharing)",
        "desc": "서로 다른 변수가 우연히 같은 캐시 라인에 위치해, 한 코어가 수정할 때 다른 코어 캐시까지 통째로 무효화되는 현상 (캐시 패딩으로 해결)"
      }
    ],
    "differentiation": "[유형 A] 스누핑(Snooping) vs 디렉터리(Directory) 기반 심층 비교\n① 스누핑 방식: 공유 버스를 브로드캐스트 감시하여 4~8코어 소규모 SMP에 적합하나 버스 트래픽 병목 발생.\n② 디렉터리 방식: 메모리 제어기 디렉터리에 캐시 라인 공유 상태를 비트맵 저장하여 수십 코어 이상 NUMA에 필수.\n③ 선택 기준: 소규모 PC/서버는 MESI 스누핑, 대규모 멀티소켓 HPC는 디렉터리 기반 프로토콜(CC-NUMA) 채택."
  },
  {
    "domain": "CAOS",
    "topic": "MESI 프로토콜",
    "mnemonic": "메·시 (M·E·S·I)",
    "definition": "캐시 일관성 유지 위해 4가지 상태로 제어하는 프로토콜",
    "keywords": [
      "수정(M) · 배타(E) · 공유(S) · 무효(I)",
      "상태 전이 프로토콜",
      "무효화 (Invalidate)",
      "두음: 메시(MESI)"
    ],
    "diagram": "[I: 무효] ──(단독 읽기 Miss)──▶ [E: 배타(원본일치)] ──(쓰기 수행)──▶ [M: 수정(Dirty)]\n   ▲                                  │ (타 코어 읽기)\n   └────(타 코어 쓰기 Invalidate)──── [S: 공유(다수 코어 읽기)]",
    "tableRows": [
      {
        "major": "4대 상태",
        "minor": "M (수정, Modified)",
        "desc": "현재 코어 캐시에서만 값이 변경(Dirty)되어 주기억장치(원본)와 다른 상태 (유일 보유, 메모리 반영 의무)"
      },
      {
        "major": "4대 상태",
        "minor": "E (배타, Exclusive)",
        "desc": "현재 코어 캐시만 단독 보유 중이며 주기억장치 원본과 값이 일치(Clean)하는 상태 (버스 요청 없이 즉시 M 전이 가능)"
      },
      {
        "major": "4대 상태",
        "minor": "S (공유, Shared)",
        "desc": "두 개 이상 코어의 캐시가 동일한 데이터를 읽기 전용으로 함께 보유하며 주기억장치 원본과 일치하는 상태"
      },
      {
        "major": "4대 상태",
        "minor": "I (무효, Invalid)",
        "desc": "다른 코어가 해당 주소 값을 수정하여 내 캐시 라인의 데이터가 무효화된 상태 (참조 시 Cache Miss 발생)"
      }
    ],
    "differentiation": "[유형 C] MESI의 쓰기 무효화 오버헤드 극복을 위한 프로토콜 확장\n① MOESI (AMD): O(Owner) 상태를 추가하여 수정 데이터를 메모리에 쓰지 않고 타 캐시와 공유 읽기 허용, 버스 쓰기 트래픽 절감.\n② MESIF (Intel): F(Forwarder) 상태를 도입하여 다수 공유 노드 중 오직 한 노드만 응답하게 하여 대역폭 낭비 방지.\n③ 발전 방향: CXL 메모리 풀링 환경에서 호스트와 가속기 간 하드웨어 캐시 일관성 유지를 위해 CXL.cache 프로토콜로 진화."
  },
  {
    "domain": "CAOS",
    "topic": "가상 메모리 (Virtual Memory)",
    "mnemonic": "할·배·인·교",
    "definition": "주기억장치 부족 해결 위해 보조기억장치를 할당하는 공간",
    "keywords": [
      "논리 주소 vs 물리 주소",
      "요구 페이징 (Demand Paging)",
      "페이지 폴트 (Page Fault)",
      "할당 · 배치 · 인출 · 교체 (할배인교)"
    ],
    "diagram": "[프로세스 논리 주소 공간] ──(필요한 페이지 일부만 적재: 요구 페이징)──▶ [물리 메모리 (RAM)]\n                                                                           ↕ (Swap In / Out)\n                                                                  [보조기억장치 (디스크)]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "가상 기억 공간",
        "desc": "물리적 주기억장치(RAM) 용량 한계를 극복하기 위해 실행에 필요한 일부만 적재하고 나머지는 디스크에 두어 큰 메모리처럼 쓰는 기법"
      },
      {
        "major": "동작 원리",
        "minor": "페이지 폴트 처리",
        "desc": "참조한 페이지가 RAM에 없으면 Page Fault 트랩 발생 → 디스크에서 빈 프레임으로 적재 후 페이지 테이블 갱신"
      },
      {
        "major": "관리 정책",
        "minor": "할당 · 배치 · 인출 · 교체",
        "desc": "• 할당(Allocation): 연속 할당 vs 불연속 분할(페이징, 세그멘테이션)\n• 배치(Placement): First-Fit, Best-Fit, Worst-Fit, Next-Fit\n• 인출(Fetch): 요구 반입(Demand Fetch) vs 예상 반입(Pre-Fetch)\n• 교체(Replacement): 메모리 포화 시 Victim 페이지 선정"
      }
    ],
    "differentiation": "[유형 B] 주소 사상 오버헤드와 가상 메모리 초과 시 성능 트레이드오프 극복\n① 오버헤드 원인: 4단계 다단계 페이지 테이블 참조로 메모리 접근 시간(EAT)이 최대 4배까지 증가.\n② 극복 방안: 하드웨어 TLB 캐시를 통해 Hit Ratio 98% 이상 유지, Huge Page(2MB/1GB)로 TLB 커버리지 극대화.\n③ 실무 제언: 물리 메모리 고갈 시 극심한 I/O 스래싱이 발생하므로 컨테이너 환경의 메모리 Limit 및 OOM Killer 정책 최적화 필수."
  },
  {
    "domain": "CAOS",
    "topic": "페이징 (Paging)",
    "mnemonic": "고·페·내·외",
    "definition": "외부 단편화 해결 위해 고정 크기 블록으로 나누는 기법",
    "keywords": [
      "고정 크기 블록 분할",
      "페이지 (Page) & 프레임 (Frame)",
      "페이지 테이블",
      "내부 단편화 발생 / 외부 단편화 해결"
    ],
    "diagram": "[가상 주소: 페이지 번호(P) | 변위(d)] ──(페이지 테이블 매핑)──▶ [물리 주소: 프레임 번호(F) | 변위(d)]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "고정 분할 할당",
        "desc": "가상 메모리는 같은 크기의 페이지(Page)로, 물리 메모리는 동일한 크기의 프레임(Frame)으로 고정 분할하여 매핑하는 기법"
      },
      {
        "major": "구성 요소",
        "minor": "페이지 테이블",
        "desc": "논리 페이지 번호를 물리 프레임 번호로 변환하는 매핑 테이블 (유효 비트, 수정 비트, 접근 권한 비트 포함)"
      },
      {
        "major": "장단점",
        "minor": "단편화 특성",
        "desc": "• 강점: 할당과 교체가 빠르고 외부 단편화(External Fragmentation)가 원천 해결됨\n• 한계: 마지막 페이지에 남는 공간인 내부 단편화(Internal Fragmentation) 발생"
      }
    ],
    "differentiation": "[유형 A] 페이징(Paging) vs 세그멘테이션(Segmentation) 아키텍처 비교\n① 분할 단위: 페이징은 물리적 고정 크기(4KB 등)로 나눠 외부 단편화가 전혀 없으나 마지막 페이지 내 내부 단편화 발생.\n② 세그멘테이션: 코드/데이터/함수 등 논리적 가변 크기로 분할하여 메모리 보호 및 공유가 우수하나 외부 단편화 발생.\n③ 현대 OS 융합: x86/ARM 등 현대 아키텍처는 세그멘테이션으로 논리 영역을 나눈 뒤 하부에서 페이징으로 매핑하는 복합 페이징 표준 채택."
  },
  {
    "domain": "CAOS",
    "topic": "세그멘테이션 (Segmentation)",
    "mnemonic": "가·세·외·내",
    "definition": "내부 단편화 해결 위해 논리적 가변 크기로 나누는 기법",
    "keywords": [
      "가변 크기 논리적 분할",
      "세그먼트 테이블 (Base · Limit)",
      "보호 및 공유 용이",
      "외부 단편화 발생 / 내부 단편화 해결"
    ],
    "diagram": "[가상 주소: 세그먼트 번호(S) | 변위(d)] ──(d < Limit 검증 후 + Base 시작주소)──▶ [물리 메모리 주소]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "가변 분할 할당",
        "desc": "프로그램을 코드·데이터·힙·스택 등 논리적 의미 단위(세그먼트)의 가변 크기로 분할하여 메모리에 적재하는 기법"
      },
      {
        "major": "구성 요소",
        "minor": "세그먼트 테이블",
        "desc": "세그먼트 시작 물리 주소(Base)와 세그먼트 길이(Limit)를 보관하며, 변위가 Limit를 넘으면 트랩(Segmentation Fault) 발생"
      },
      {
        "major": "장단점",
        "minor": "공유 및 단편화",
        "desc": "• 강점: 내부 단편화가 없으며 의미 단위별 읽기/쓰기/실행 보호 및 프로세스 간 코드 공유가 매우 용이\n• 한계: 다양한 크기의 세그먼트 입출입으로 빈 공간이 쪼개지는 외부 단편화 발생"
      }
    ],
    "differentiation": "[유형 B] 가변 분할 외부 단편화 극복을 위한 페이징과의 혼용(Paged Segmentation)\n① 한계점: 프로세스 해제 후 남은 잔여 공간들의 크기가 불균일하여 총 여유 메모리가 충분해도 적재 불가능한 외부 단편화 직면.\n② 극복 메커니즘: 세그먼트를 다시 고정 크기 페이지 단위로 잘라 물리 메모리에 불연속 할당하는 Paged Segmentation 기법 적용.\n③ 기대 효과: 세그멘테이션의 논리적 모듈 보호/공유 장점과 페이징의 외부 단편화 완전 제거 장점을 동시 확보."
  },
  {
    "domain": "CAOS",
    "topic": "페이지 교체 알고리즘",
    "mnemonic": "세·랜·피·옵 / L·F·N",
    "definition": "메모리 포화 시 부재율 줄이려 교체 페이지 선정 정책",
    "keywords": [
      "Victim 페이지 선정",
      "FIFO & Belady의 모순",
      "LRU · LFU",
      "NUR (Clock) · SCR (2차 기회)",
      "두음: 세랜피옵 LRN"
    ],
    "diagram": "[Page Fault 발생 & 빈 프레임 없음] ➔ 교체 알고리즘으로 Victim 선정 ➔ 디스크 Swap-Out 후 신규 페이지 적재",
    "tableRows": [
      {
        "major": "기본 기법",
        "minor": "OPT (최적) & FIFO",
        "desc": "• OPT(Optimal): 앞으로 가장 오랫동안 쓰이지 않을 페이지 교체 (이론적 최적, 구현 불가)\n• FIFO: 가장 먼저 적재된 페이지 교체 (프레임을 늘려도 페이지 부재가 증가하는 Belady's Anomaly 발생)"
      },
      {
        "major": "지역성 기반",
        "minor": "LRU & LFU",
        "desc": "• LRU(Least Recently Used): 가장 오랫동안 참조되지 않은 페이지 교체 (시간 지역성 활용, 적중률 우수)\n• LFU(Least Frequently Used): 참조 횟수가 가장 적은 페이지 교체 (초기 집중 참조 후 안 쓰이는 페이지 잔류 한계)"
      },
      {
        "major": "근사 기법",
        "minor": "SCR & NUR (Clock)",
        "desc": "• SCR(2차 기회): FIFO 기반이되 참조 비트가 1이면 0으로 초기화하고 큐 맨 뒤로 보내 한 번 더 기회 부여\n• NUR(Not Used Recently): 참조 비트(R)와 변형 비트(M) 2개만 사용해 적은 하드웨어 오버헤드로 LRU 근사 구현"
      }
    ],
    "differentiation": "[유형 A] 벨레이디 모순(FIFO) vs 시간 지역성(LRU) vs 하드웨어 비용 최소화(NUR/Clock) 비교\n① FIFO: 가장 먼저 들어온 페이지를 교체하나, 프레임 수가 증가해도 부재율이 늘어나는 벨레이디 모순(Belady's Anomaly) 한계.\n② LRU: 가장 오랫동안 참조되지 않은 페이지를 교체하여 이론적 최적에 근접하나 참조 시점 기록 하드웨어 오버헤드 과다.\n③ Clock (NUR): 참조 비트와 변형 비트(R/M) 2개만 원형 큐 포인터로 순회 검사하여 적은 오버헤드로 LRU에 준하는 성능 제공(Linux 채택)."
  },
  {
    "domain": "CAOS",
    "topic": "큐비트 (Qubit)",
    "mnemonic": "중·불·얽 / 초·포·퀀·광·중",
    "definition": "초고속 연산 위해 0과 1을 동시 중첩한 양자정보 단위",
    "keywords": [
      "중첩(Superposition)",
      "얽힘(Entanglement)",
      "블로흐 구(Bloch Sphere)",
      "초전도",
      "포획 이온"
    ],
    "diagram": "qubit.png",
    "tableRows": [
      {
        "category": "양자역학적 특성",
        "sub": "양자 중첩 (Superposition)",
        "desc": "0과 1 정보를 동시에 표현 가능"
      },
      {
        "category": "",
        "sub": "양자 얽힘 (Entanglement)",
        "desc": "둘 이상의 큐비트 간 강한 상관관계, 비국소적 정보 전달 기반"
      },
      {
        "category": "주요 알고리즘",
        "sub": "Shor 알고리즘",
        "desc": "소인수분해"
      },
      {
        "category": "",
        "sub": "Grover 알고리즘",
        "desc": "비정렬 검색"
      },
      {
        "category": "품질 및 제어",
        "sub": "결맞음 시간 (Coherence Time)",
        "desc": "양자 상태 유지 시간 (T1, T2), 양자 연산 가능 시간 결정"
      },
      {
        "category": "",
        "sub": "양자 오차 수정 (QEC)",
        "desc": "디코히어런스 극복, 물리 큐비트를 묶어 논리 큐비트 형성"
      },
      {
        "category": "하드웨어 구현",
        "sub": "초전도 (조셉슨 접합)",
        "desc": "[강점] 빠른 게이트 연산, 상용 클라우드 선도\n[과제] 극저온 냉동기 필수, 짧은 결맞음 시간\n[키워드] 인공 원자, 트랜스몬, 극저온"
      },
      {
        "category": "",
        "sub": "포획 이온 (전자기장)",
        "desc": "[강점] 압도적 긴 결맞음 시간, 최고 수준 연산 충실도\n[과제] 연산 속도 상대적 느림, 복잡한 광학계 제어\n[키워드] 단일 이온, 광학 격자, 충실도"
      },
      {
        "category": "",
        "sub": "퀀텀닷 (양자점)",
        "desc": "[강점] 기존 CMOS 팹 호환, 극소형 초고집적\n[과제] 큐비트 간 전자기 누화(Crosstalk), 균일 제어 공정 난제\n[키워드] 반도체 스핀, CMOS 호환성"
      },
      {
        "category": "",
        "sub": "광자 (위상 변조)",
        "desc": "[강점] 유일한 상온 동작 가능, 장거리 통신 결합\n[과제] 광자간 직접 상호작용 유도 극난, 얽힘 생성 확률적 한계\n[키워드] 비행 큐비트, 상온 퀀텀, 광섬유"
      },
      {
        "category": "",
        "sub": "중성 원자 (광학 핀셋)",
        "desc": "[강점] 수천 큐비트급 대규모 배열 용이, 물리적 셔틀링 가능\n[과제] 원자 포획 손실률 관리 필요, 게이트 조작 속도 개선\n[키워드] 뤼드베리 상태, 대규모 확장"
      }
    ],
    "diagramImg": "qubit.png",
    "differentiation": "[유형 A] 물리 큐비트 4대 하드웨어 구현 방식 비교 및 상용화 로드맵\n① 초전도 (IBM, Google): 조셉슨 접합 인공원자 기반으로 게이트 연산이 매우 빠르나 극저온(mK) 냉동기 필수 및 짧은 결맞음 시간.\n② 포획 이온 (IonQ): 레이저 전자기장 포획으로 결맞음 시간과 연산 충실도가 압도적이나 연산 속도가 상대적으로 느림.\n③ 광자 (PsiQuantum): 실온 동작이 가능하고 광섬유 통신 연계가 유리하나 광자 간 상호작용 유도가 극도로 난해.\n④ 기술사적 제언: NISQ 시대를 넘어 물리 큐비트를 묶어 오류를 정정하는 논리 큐비트(QEC) 구현이 양자 우위의 핵심 열쇠."
  },
  {
    "domain": "CAOS",
    "topic": "결함허용 시스템 (FTS)",
    "mnemonic": "탐·진·복 / 셀·티·와 / N·복",
    "definition": "업무 중단 방지 위해 장치를 중복 구성한 무중단 시스템",
    "keywords": [
      "Fault Tolerant System",
      "물리적 하드웨어 중복 (Lockstep)",
      "절체시간 0초 (No Failover Time)",
      "TMR (3중 모듈 중복)",
      "N-Version 프로그래밍 · Recovery Block",
      "두음: 탐진복 / 셀티와 / N버전N셀프RB"
    ],
    "diagram": "[입력] ➔ [모듈 1] & [모듈 2] & [모듈 3] (동시 실행) ➔ [다수결 보터 (Voter)] ➔ 중단 없는 정상 출력 (절체시간 0초)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "무중단 결함허용",
        "desc": "시스템 주요 부품을 물리적으로 중복 구성하여 HW/SW 결함 발생 시에도 절체시간(0초) 없이 규정된 기능을 지속 수행하는 시스템"
      },
      {
        "major": "처리 절차",
        "minor": "탐지 → 진단 → 복구",
        "desc": "결함 탐지(Exception 처리) → 결함 진단(모니터링·시뮬레이션) → 결함 복구(격리·교체·롤백)"
      },
      {
        "major": "하드웨어 기법",
        "minor": "TMR · Self-Purging",
        "desc": "• TMR(3중 모듈 중복): 3개 모듈이 동일 연산 수행 후 다수결 보터(Voter)로 정상 결과 채택\n• 기타: Self-Purging Redundancy, Duplication with Comparison, Watchdog Timer"
      },
      {
        "major": "소프트웨어 기법",
        "minor": "N-Version · Recovery Block",
        "desc": "• N-Version Programming: 독립 개발된 N개 버전을 동시 실행해 결과 비교\n• Recovery Block: 주 루틴 실패 시 체크포인트로 롤백 후 대체 루틴 실행"
      }
    ],
    "differentiation": "[유형 A] 무중단 결함허용(FTS) vs 고가용성(HA) 아키텍처 비교\n① 하드웨어 중복성: FTS는 동일 CPU/메모리를 3중화(TMR) 또는 Lockstep 동기 구동하여 단일 부품 장애 시 절체 시간 0초(Zero Downtime).\n② 비용 및 복잡도: FTS는 전용 특수 하드웨어 구축으로 비용이 극도로 높으나 금융 결제, 항공 관제 등 미션 크리티컬 필수.\n③ 선택 기준: 허용 다운타임 0초 요구 시 FTS(Active-Active 하드웨어), 수십 초 이내 허용 시 가성비 높은 HA 클러스터 도입."
  },
  {
    "domain": "CAOS",
    "topic": "고가용성 (HA)",
    "mnemonic": "핫·무·콜·컨",
    "definition": "서비스 연속성 위해 장애 시 예비 노드로 절체하는 기술",
    "keywords": [
      "High Availability",
      "클러스터 Failover (30~300초)",
      "Heartbeat 장애 감시",
      "Hot / Warm / Cold Standby",
      "Mutual Takeover · Concurrent Access",
      "두음: 핫무콜컨"
    ],
    "diagram": "[Active 운영 노드] ──(Heartbeat 주기적 상태 감시 & 공유 스토리지)──▶ [Standby 대기 노드] (장애 시 Failover 절체)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "고가용성 클러스터",
        "desc": "2대 이상의 범용 서버를 하나의 클러스터로 묶어, 주 시스템 장애 시 예비 시스템으로 신속히 서비스를 절체(Failover)하는 기술"
      },
      {
        "major": "FTS와 차이",
        "minor": "비용 및 절체시간",
        "desc": "전용 HW를 쓰는 FTS(절체 0초, 고비용)와 달리 범용 HW/OS를 사용하며 절체 시간(수초~수분)이 존재하지만 구축 비용이 합리적"
      },
      {
        "major": "대기 방식",
        "minor": "Hot · Mutual · Concurrent",
        "desc": "• Hot Standby: 주 서버 가동 + 백업 서버 실시간 대기(장애 시 즉시 인수)\n• Mutual Takeover(상호 인수): 평시 2대가 각자 다른 업무 수행 후 장애 시 상대 업무까지 인수\n• Concurrent Access(동시 수행): 모든 노드가 Active로 동시 병렬 처리"
      }
    ],
    "differentiation": "[유형 B] 네트워크 단절 시 양 노드 동시 Active화되는 스플릿 브레인(Split-Brain) 방지책\n① 문제 현상: Heartbeat 전용망 장애 시 Standby 노드가 Active 노드의 장애로 오판하여 데이터 스토리지 동시 쓰기 파괴 발생.\n② 쿼럼(Quorum): 홀수 개의 투표권(Quorum Disk 또는 Witness 노드)을 구성하여 과반수 미확보 노드의 마운트 강제 차단.\n③ 펜싱 (STONITH): 의심 노드의 전원(IPMI/PDU)을 하드웨어 레벨에서 강제 차단하여 데이터 오염을 물리적으로 원천 차단."
  },
  {
    "domain": "CAOS",
    "topic": "가용성 Five Nines (99.999%) 달성 아키텍처",
    "mnemonic": "무·다·카·자",
    "definition": "무중단 위해 단일장애점 제거해 99.999% 보장 구조",
    "keywords": [
      "가용도 = MTTF / (MTTF + MTTR)",
      "연간 다운타임 5.26분 이내",
      "단일장애점 (SPOF) 제거",
      "Active-Active 다중 리전",
      "카오스 엔지니어링"
    ],
    "diagram": "• 가용도 공식 : Availability = MTTF ÷ MTBF = MTTF ÷ (MTTF + MTTR)\n• Five Nines (99.999%) = 고장 간격(MTTF) 극대화 + 자동 감지·무중단 절체로 수리 시간(MTTR → 0) 극소화",
    "tableRows": [
      {
        "major": "가용성 지표",
        "minor": "MTTF · MTTR · MTBF",
        "desc": "• MTTF(평균고장시간): 복구 시점부터 다음 장애 발생 시점까지의 평균 정상 운영 시간\n• MTTR(평균수리시간): 장애 발생부터 복구 완료까지 걸리는 평균 시간\n• MTBF(평균고장간격): MTTF + MTTR"
      },
      {
        "major": "Five Nines",
        "minor": "99.999%의 의미",
        "desc": "전체 운영 시간 중 고장 없이 운영되는 비율이 99.999%로, 1년 기준 허용 다운타임이 약 5.26분 이내인 초고가용성 수준"
      },
      {
        "major": "달성 아키텍처",
        "minor": "SPOF 제거 & 자동 복구",
        "desc": "• 인프라: 전 계층(네트워크·서버·DB·전원) 이중화로 단일장애점(SPOF) 완전 제거 및 Active-Active 멀티 리전 구성\n• 애플리케이션: 서킷 브레이커(장애 격리), 무중단 배포(블루그린·카나리), 카오스 엔지니어링 기반 상시 장애 훈련"
      }
    ],
    "differentiation": "[유형 C] 연간 다운타임 5.26분 극복을 위한 카오스 엔지니어링 및 멀티 리전 DR\n① 단일 장애점(SPOF) 원천 배제: 전원, 네트워크 스위치, 스토리지 컨트롤러, 로드밸런서를 전 계층 이중화 구성.\n② 카오스 엔지니어링: 프로덕션 환경에 임의 장애를 주입하는 Chaos Monkey 기법을 상시 가동하여 복원력(Resilience) 선제 검증.\n③ 클라우드 DR: Active-Active 다중 가용영역(AZ) 및 글로벌 GSLB 기반 크로스 리전 분산으로 천재지변에도 99.999% 유지."
  },
  {
    "domain": "CAOS",
    "topic": "메모리 벽 (Memory Wall)",
    "mnemonic": "연·메·병 / 적·풀·내",
    "definition": "연산·메모리 속도 격차로 데이터 이동 병목 생기는 현상",
    "keywords": [
      "폰노이만 병목 현상",
      "프로세서-메모리 속도 격차",
      "대역폭 한계 & 용량 한계",
      "데이터 이동 에너지 소모"
    ],
    "diagram": "[CPU/GPU 연산 성능: 매년 급격한 지수적 향상] ◀──(심화되는 속도·대역폭 격차: Memory Wall)──▶ [DRAM 메모리 속도: 완만한 향상]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "메모리 벽 정의",
        "desc": "멀티코어·AI 가속기의 연산 속도는 급증하는 반면, 메모리의 대역폭과 접근 지연시간 개선이 이를 따라가지 못해 전체 성능이 제한되는 현상"
      },
      {
        "major": "발생 원인",
        "minor": "대역폭 및 핀 수 한계",
        "desc": "폰노이만 구조에서 데이터 버스를 통한 지속적 데이터 이동이 필요하나, DDR 채널 확장 및 물리적 핀 수 증가에 한계 도달"
      },
      {
        "major": "극복 방향",
        "minor": "3D 적층 · CXL · PIM",
        "desc": "• 대역폭 돌파: TSV 수직 적층 기반 HBM(고대역폭 메모리) 도입\n• 용량·공유 돌파: CXL 기반 메모리 풀링 및 확장\n• 이동 제거: 메모리 내부에서 직접 연산하는 PIM(Processing-In-Memory) 및 뉴로모픽 도입"
      }
    ],
    "differentiation": "[유형 C] 폰 노이만 구조의 메모리 벽 극복을 위한 PIM 및 CXL 기반 분산 아키텍처\n① 병목 원인: 프로세서 연산 속도는 연 60% 향상되나 DRAM 대역폭은 연 10% 미만 향상되어 버스 병목으로 CPU 유휴 발생.\n② 근본 극복책 (PIM): 데이터를 CPU로 가져오지 않고 메모리 내부에서 직접 연산하는 HBM-PIM, 차세대 LPDDR-PIM 채택.\n③ 패브릭 확장 (CXL): CPU 소켓 제한을 넘어 PCIe 버스 기반으로 메모리 풀을 테라바이트급으로 유연 확장하여 메모리 벽 완화."
  },
  {
    "domain": "CAOS",
    "topic": "CXL (Compute Express Link)",
    "mnemonic": "아·캐·멤 / 풀·티·패",
    "definition": "병목 해소 위해 PCIe 기반 캐시일관성 연결하는 기술",
    "keywords": [
      "PCIe 5.0/6.0 기반 오픈 인터커넥트",
      "CXL.io · CXL.cache · CXL.mem",
      "Device Type 1 · 2 · 3",
      "메모리 풀링(Pooling) & 패브릭 (CXL 3.0)",
      "캐시 일관성 보장"
    ],
    "diagram": "[호스트 CPU] ↕ CXL 통합 프로토콜 (CXL.io / CXL.cache / CXL.mem) ↕ [CXL 스위치 패브릭] ↕ [가속기(Type1/2) · 공유 메모리 풀(Type3)]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "차세대 통합 인터페이스",
        "desc": "PCIe 물리 계층 위에서 CPU와 가속기(GPU·FPGA), 메모리 확장 장치 간 고속·저지연 통신과 캐시 일관성을 제공하는 오픈 표준"
      },
      {
        "major": "3대 프로토콜",
        "minor": "CXL.io / .cache / .mem",
        "desc": "• CXL.io: PCIe 기반 장치 탐색·초기화·DMA 제어\n• CXL.cache: 가속기가 호스트 CPU 메모리를 캐시 일관성 있게 접근\n• CXL.mem: 호스트 CPU가 장치 부착 메모리를 Load/Store 명령으로 직접 접근"
      },
      {
        "major": "장치 유형",
        "minor": "Type 1 · Type 2 · Type 3",
        "desc": "• Type 1: 자체 메모리 없는 가속기 (스마트 NIC, io+cache)\n• Type 2: 자체 메모리 탑재 가속기 (GPU·밀집 연산기, io+cache+mem)\n• Type 3: 메모리 용량·대역폭 확장기 (CXL DRAM 모듈, io+mem)"
      },
      {
        "major": "CXL 3.0 혁신",
        "minor": "스위치 패브릭 & 풀링",
        "desc": "PCIe 6.0(64GT/s PAM4) 기반 대역폭 2배 향상, 다중 스위치 패브릭 및 백무효화(Back-Invalidation)를 통해 다수 서버 간 동적 메모리 풀링·공유(GFAM) 실현"
      }
    ],
    "differentiation": "[유형 A] CXL 1.1/2.0(단일 호스트 메모리 확장) vs CXL 3.0(패브릭 스위칭 공유) 비교\n① CXL 2.0: 단일 호스트에 메모리 풀링을 지원하여 유휴 메모리를 동적 회수 및 재배치 가능.\n② CXL 3.0: 64GT/s(PCIe 6.0 기반) 대역폭과 다중 레벨 패브릭 스위칭을 지원하여 수십 대 서버가 동일 메모리 풀을 P2P 직접 공유.\n③ 기대 효과: 대규모 LLM 인퍼런스 환경에서 GPU 전용 메모리 부족 문제를 CXL 공유 메모리 풀을 통해 비용 효율적으로 해결."
  },
  {
    "domain": "CAOS",
    "topic": "메모리 계층구조 (Memory Hierarchy)",
    "mnemonic": "레·캐·주·보 / 워·블·페",
    "definition": "접근 시간 단축 위해 속도·용량별 기억장치 배치한 구조",
    "keywords": [
      "레지스터 · 캐시 · 주기억장치 · 보조기억장치",
      "속도 · 용량 · 비용 Trade-off",
      "지역성 (Locality) 기반 계층 이동",
      "워드(Word) 전송 vs 블록/페이지 전송"
    ],
    "diagram": "[CPU 코어] ➔ 레지스터 (가장 빠름/소용량/고가) ➔ 캐시(SRAM) ➔ 주기억장치(DRAM) ➔ 스토리지(SSD/HDD, 대용량/저가)",
    "tableRows": [
      {
        "major": "설계 철학",
        "minor": "속도·비용 최적화",
        "desc": "빠르고 비싼 소용량 메모리(SRAM)를 CPU 가까이에, 느리고 저렴한 대용량 메모리(DRAM/NAND)를 하위에 배치하여 평균 접근 시간 최소화"
      },
      {
        "major": "전송 단위",
        "minor": "워드 · 블록 · 페이지",
        "desc": "• CPU ↔ 캐시: 워드(Word) 단위 전송\n• 캐시 ↔ 주기억장치: 블록(캐시 라인) 단위 전송\n• 주기억장치 ↔ 보조기억장치: 페이지(Page) 또는 세그먼트 단위 전송"
      },
      {
        "major": "AI 시대 변화",
        "minor": "계층 경계의 재편",
        "desc": "거대 AI 모델 파라미터 적재를 위해 GPU 인접 HBM 계층이 추가되고, CXL 메모리 티어링 및 HBF가 DRAM-SSD 간 간극을 메움"
      }
    ],
    "differentiation": "[유형 C] 차세대 인터커넥트(CXL)와 3D 적층(HBM) 도입에 따른 메모리 계층 재편\n① 전통적 4계층: 레지스터 ➔ 캐시 메모리(SRAM) ➔ 주기억장치(DRAM) ➔ 보조기억장치(SSD/HDD).\n② AI 시대 신계층: On-Chip SRAM ➔ 3D 적층 HBM (초고대역폭) ➔ 일반 DDR5 DRAM ➔ CXL 확장 메모리 풀 ➔ NVMe SSD.\n③ 기술사적 제언: 계층 간 속도 차가 수백 배에 달하므로 운영체제와 런타임의 지능형 데이터 티어링(Tiering) 스케줄러 개발 필수."
  },
  {
    "domain": "CAOS",
    "topic": "고대역 초고속 메모리 (HBM)",
    "mnemonic": "적·관·인·베",
    "definition": "대역폭 극대화 위해 TSV로 DRAM 적층한 메모리",
    "keywords": [
      "High Bandwidth Memory",
      "DRAM 3D 수직 적층",
      "TSV (실리콘 관통 전극)",
      "실리콘 인터포저 (2.5D 패키징)",
      "베이스 로직 다이 (Base Die)",
      "HBM4 (2048-bit · 하이브리드 본딩)"
    ],
    "diagram": "[HBM DRAM 코어 다이 적층 (TSV 수직 관통 연결)]\n         ↓ (마이크로범프 / 하이브리드 본딩)\n[베이스 로직 다이 (PHY 제어)] ⇄ (실리콘 인터포저 2048-bit 초광대역 배선) ⇄ [GPU / AI 가속기]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "TSV 기반 적층 메모리",
        "desc": "여러 개의 DRAM 다이를 수직으로 쌓고 미세 구멍을 뚫어 전극을 연결하는 TSV(실리콘 관통 전극) 기술로 대역폭을 극대화한 메모리"
      },
      {
        "major": "구성 요소",
        "minor": "인터포저 & 베이스 다이",
        "desc": "• 실리콘 인터포저: 패키지 기판 위에서 GPU와 HBM을 초미세 배선으로 병렬 연결(2.5D 패키징)\n• 베이스 로직 다이: 최하단에서 상부 DRAM 스택을 제어하고 GPU와 신호 교환"
      },
      {
        "major": "기술 진화",
        "minor": "HBM4 (6세대) 혁신",
        "desc": "• 입출력(I/O) 통로를 기존 1024-bit에서 2048-bit로 2배 확장\n• 베이스 다이에 파운드리 초미세 로직 공정을 적용(맞춤형 설계)하고 범프 없이 구리를 직접 붙이는 하이브리드 본딩으로 방열·신호 효율 극대화"
      }
    ],
    "differentiation": "[유형 B] 실리콘 관통전극(TSV) 초고발열 한계 극복 및 2.5D 첨단 패키징\n① 구조적 특징: DRAM 다이를 수직으로 8~16층 적층하고 수천 개의 TSV로 연결해 기존 GDDR 대비 수십 배의 초고대역폭(1.2TB/s+) 실현.\n② 발열 및 휨 한계: 고밀도 적층으로 인한 열 방출 면적 부족 및 솔더 리플로우 공정 중 열팽창 계수 차이에 따른 휨(Warpage) 발생.\n③ 극복 기술: 비전도성 필름(NCF) 대신 액상 에폭시 몰딩 언더필(MR-MUF) 적용 및 하이브리드 본딩(Cu-Cu 직접 접합)으로 방열 극대화."
  },
  {
    "domain": "CAOS",
    "topic": "고대역폭 플래시 (HBF)",
    "mnemonic": "낸·적·관·비",
    "definition": "대용량·고대역폭 위해 낸드 플래시를 3D 적층한 메모리",
    "keywords": [
      "High Bandwidth Flash",
      "3D NAND 플래시 수직 적층",
      "TSV & 실리콘 인터포저",
      "고대역폭 · 대용량 · 비휘발성 결합",
      "CBA (CMOS directly Bonded to Array)"
    ],
    "diagram": "[3D NAND 플래시 코어 다이 적층 (TSV 관통 연결)] ➔ [베이스 로직 다이] ⇄ [실리콘 인터포저] ⇄ [GPU / AI 가속기]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "HBM 구조의 낸드 플래시",
        "desc": "비휘발성 NAND 플래시 메모리를 HBM과 유사한 TSV 3D 스택 및 인터포저 구조로 패키징하여 고대역폭과 대용량을 동시 달성한 차세대 메모리"
      },
      {
        "major": "주요 구성",
        "minor": "HBF Core Die & CBA",
        "desc": "• TSV, HBF 코어 다이, 로직 다이(PIM 적용 가능), 마이크로범프, 실리콘 인터포저로 구성\n• CMOS 회로와 셀 어레이를 직접 접합하는 CBA(CMOS directly Bonded to Array) 공정 적용"
      },
      {
        "major": "도입 효과",
        "minor": "LLM 가중치 저장 병목 해소",
        "desc": "HBM의 용량 한계와 고비용 문제를 보완하여 초거대 AI 모델의 방대한 파라미터를 비휘발성 대용량으로 수용하고 고속 읽기를 지원"
      }
    ],
    "differentiation": "[유형 A] HBM (초고속 고비용 휘발성) vs HBF (대용량 비휘발성 AI 가속) 포지셔닝 비교\n① HBM: DRAM 기반으로 초당 테라바이트급 대역폭을 제공하나 용량 확장이 어렵고(수십~수백 GB) 단가가 극도로 비쌈.\n② HBF: NAND 플래시를 초고속 인터페이스로 패키징하여 HBM 수준의 인터페이스로 테라바이트급 LLM 가중치를 온보드 캐싱.\n③ 실무 적용: 거대 모델 추론 시 파라미터를 HBF에 상주시키고 연산 시만 고속 스트리밍하여 GPU 인프라 구축 TCO 대폭 절감."
  },
  {
    "domain": "CAOS",
    "topic": "PIM (Processing-In-Memory)",
    "mnemonic": "HBM-PIM / 내·연·이·최",
    "definition": "데이터 이동 병목 제거 위해 메모리 내 연산기 둔 기술",
    "keywords": [
      "메모리 내부 연산기(PU) 집적",
      "CPU-메모리 데이터 이동 최소화",
      "HBM-PIM · PNM (Near-Memory)",
      "폰노이만 병목 및 전력 소모 극복"
    ],
    "diagram": "[기존 구조] 메모리 ──(좁은 버스 이동 병목)──▶ CPU/GPU 연산\n[PIM 구조]  [메모리 뱅크 + 내장 연산 코어(PIM PU)] ➔ 데이터 이동 없이 메모리 내부에서 즉시 벡터·행렬 연산!",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "메모리 내 연산 기술",
        "desc": "메모리 반도체 내부에 프로세싱 유닛(연산기)을 집적하여 CPU/GPU와 메모리 간 데이터 이동으로 인한 지연과 전력 소모를 줄이는 기술"
      },
      {
        "major": "구현 유형",
        "minor": "PNM · PIC · HBM-PIM",
        "desc": "• PNM(Processing-Near-Memory): 로직 다이나 컨트롤러 인접 영역에 연산기 배치\n• HBM-PIM: HBM의 고대역폭 구조 내부에 AI 연산 블록을 결합해 대역폭 효율을 수배 향상"
      },
      {
        "major": "기대 효과",
        "minor": "전성비 및 처리량 향상",
        "desc": "전체 에너지의 대부분을 차지하는 '데이터 이동 에너지'를 획기적으로 절감하고 대규모 AI 추론 속도를 가속"
      }
    ],
    "differentiation": "[유형 B] 메모리 내부 연산 셀 집적 한계와 컴파일러·프로그래밍 모델 부재 극복\n① 하드웨어 한계: DRAM 공정은 미세 커패시터 최적화 공정으로 고성능 로직 트랜지스터를 함께 집적하기 어려워 발열·수율 저하 직면.\n② 소프트웨어 장벽: 기존 x86/CUDA 코드를 PIM 명령어 세트로 자동 분기시키는 표준 컴파일러 및 프레임워크 생태계 미성숙.\n③ 해결 방향: 삼성 HBM-PIM, SK하이닉스 AiM 등 업계 표준 JEDEC 규격화 및 오픈소스 온디바이스 AI 프레임워크 연계 가속화."
  },
  {
    "domain": "CAOS",
    "topic": "뉴로모픽 칩 (Neuromorphic Chip)",
    "mnemonic": "뉴·시·스·비",
    "definition": "초저전력 병렬 연산 위해 뇌 뉴런·시냅스 모사한 반도체",
    "keywords": [
      "인간 뇌 신경망(뉴런·시냅스) 모사",
      "스파이킹 신경망 (SNN)",
      "비폰노이만 아키텍처",
      "이벤트 기반 비동기 초저전력 연산"
    ],
    "diagram": "[입력 스파이크 신호] ➔ [인공 뉴런(연산) + 시냅스(비휘발성 메모리) 일체형 코어 배열] ➔ 임계치 도달 시에만 스파이크 발화 (초저전력)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "인간 뇌 구조 모사",
        "desc": "연산장치(CPU)와 기억장치(메모리)가 분리된 폰노이만 구조에서 벗어나, 인간 뇌의 뉴런과 시냅스 연결 구조를 모사한 초저전력 반도체"
      },
      {
        "major": "동작 원리",
        "minor": "스파이킹 신경망 (SNN)",
        "desc": "클럭 주기에 맞춰 모든 노드를 계산하는 대신, 신호가 임계치를 넘어 스파이크(Spike)가 발생할 때만 비동기적으로 동작하여 전력 소모 극소화"
      },
      {
        "major": "주요 특징",
        "minor": "연산·기억 융합 & 병렬성",
        "desc": "수많은 저전력 코어가 시냅스 가중치를 자체 보유하며 대규모 병렬 처리 및 온디바이스 실시간 자율 학습에 적합"
      }
    ],
    "differentiation": "[유형 C] 폰 노이만 병목 해소를 위한 Spiking Neural Network(SNN) 초저전력 엣지 지능화\n① 인간 뇌 모사: 뉴런의 스파이크 신호 발생 시만 에너지를 소모하는 비동기 이벤트 구동 방식으로 전통 폰 노이만 대비 전력 1/1,000 수준.\n② 메모리-연산 통합: 시냅스 가중치를 시냅스 소자 자체에 저장하여 데이터 이동에 따른 전력 낭비와 지연시간을 원천 배제.\n③ 기술사적 제언: 인텔 로이히(Loihi), IBM 트루노스 등 엣지 로보틱스, 초저전력 IoT 음성/영상 감지 분야에서 상용화 선도."
  },
  {
    "domain": "CAOS",
    "topic": "NPU (Neural Processing Unit)",
    "mnemonic": "행·누·활·스",
    "definition": "인공신경망 고속 처리 위해 대규모 행렬 연산 특화된 칩",
    "keywords": [
      "인공신경망(DNN/CNN/LLM) 전용 가속기",
      "MAC (곱셈·누적) 행렬 연산기",
      "저정밀도 연산 (INT8 · FP8 · FP16)",
      "온디바이스 AI 핵심 코어"
    ],
    "diagram": "[입력 텐서 & 가중치 버퍼] ➔ [대규모 MAC(곱셈·누산) 행렬 연산 엔진] ➔ [활성화 함수(ReLU/Sigmoid LUT) · 풀링 유닛] ➔ [출력]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "신경망 전용 프로세서",
        "desc": "딥러닝 알고리즘의 핵심인 대규모 행렬 곱셈과 합성곱 연산을 고속·저전력으로 처리하도록 설계된 AI 전용 비메모리 반도체"
      },
      {
        "major": "내부 구조",
        "minor": "MAC 엔진 & 스케줄러",
        "desc": "• 곱셈과 덧셈을 한 사이클에 처리하는 대규모 MAC(Multiply-Accumulate) 연산 배열\n• Sigmoid/ReLU 활성화 함수용 Look-Up Table(LUT), 가중치 온칩 버퍼, DMA 및 버스 스케줄러"
      },
      {
        "major": "핵심 강점",
        "minor": "양자화·저전력 최적화",
        "desc": "그래픽 렌더링 파이프라인을 덜어내고 AI 추론에 충분한 저정밀도(FP16, INT8, INT4) 연산에 집중해 GPU 대비 월등한 전성비(성능/와트) 달성"
      }
    ],
    "differentiation": "[유형 A] 범용 GPU vs 딥러닝 특화 NPU 아키텍처 비교\n① 연산 코어: GPU는 수천 개의 범용 CUDA 코어로 부동소수점(FP32/FP16) 처리에 강하나 그래픽 렌더링용 불필요 하드웨어 포함.\n② NPU: 딥러닝 행렬곱(MAC)과 활성화 함수에만 전용 하드웨어를 집중 배치하고 저정밀도(INT8/INT4/FP8) 양자화 연산에 극대화.\n③ 전력 효율: 스마트폰, 자율주행 ADAS 등 엣지 디바이스에서 와트당 연산 성능(TOPS/W)이 GPU 대비 압도적으로 우수."
  },
  {
    "domain": "CAOS",
    "topic": "GPU (Graphics Processing Unit)",
    "mnemonic": "스·코·워·쿠 (SM·SP·Warp·CUDA)",
    "definition": "대규모 병렬 연산 위해 수천 개 ALU로 구성된 연산기",
    "keywords": [
      "수천 개 ALU 코어 병렬 처리",
      "SM (스트리밍 멀티프로세서) · SP",
      "Warp (32개 스레드 스케줄링 단위)",
      "GPGPU & CUDA 플랫폼"
    ],
    "diagram": "[CPU (소수 코어 직렬 제어)] ──(커널 함수 오프로딩: CUDA)──▶ [GPU: 다수 SM 블록 → 각 SM 내 수백 개 SP(ALU)가 32스레드(Warp) 단위로 대규모 병렬 연산]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "대규모 병렬 연산 장치",
        "desc": "직렬 처리에 최적화된 CPU와 달리 수천 개의 산술논리연산장치(ALU/SP) 코어로 구성되어 그래픽 및 범용 대규모 데이터 병렬 처리를 수행하는 장치"
      },
      {
        "major": "내부 구조",
        "minor": "SM · SP · Warp · Global Mem",
        "desc": "• SM(Stream Multiprocessor): 제어 로직과 명령 캐시를 공유하며 멀티 스레드를 동시 실행하는 블록\n• SP(Stream Processor): 실제 산술·논리 연산을 수행하는 코어\n• Warp: SM에서 스레드를 32개씩 묶어 단일 명령어로 스케줄링(SIMT)하는 단위"
      },
      {
        "major": "범용 확장",
        "minor": "GPGPU & CUDA",
        "desc": "GPU를 그래픽 외 일반 응용 프로그램 및 AI 행렬 연산에 활용하는 기법(GPGPU)으로, 엔비디아 CUDA 및 OpenCL 표준 플랫폼 활용"
      }
    ],
    "differentiation": "[유형 B] 대규모 SIMT 병렬 처리 시 메모리 대역폭 한계(Roofline 모델) 극복\n① Roofline 한계: GPU의 순수 연산 속도(Peak TFLOPS)가 메모리 대역폭보다 훨씬 빨라 실제 연산 효율이 메모리 읽기에서 병목.\n② 하드웨어 대책: 칩 내부에 거대 L2 캐시를 탑재하고 고대역폭 HBM3e/HBM4를 기판 위에 CoWoS 패키징으로 직접 결합.\n③ 소프트웨어 최적화: 텐서 RT(TensorRT), 커널 퓨전(Kernel Fusion) 기법을 통해 메모리 라운드트립 횟수를 최소화."
  },
  {
    "domain": "CAOS",
    "topic": "TPU (Tensor Processing Unit)",
    "mnemonic": "시·행·레·특",
    "definition": "딥러닝 행렬 연산 가속 위해 시스톨릭 어레이 쓴 반도체",
    "keywords": [
      "구글 AI 전용 맞춤형 ASIC",
      "시스톨릭 어레이 (Systolic Array)",
      "MXU (행렬 곱셈 유닛)",
      "레지스터 재접근 병목 제거"
    ],
    "diagram": "[가중치(Weight) 사전 적재] + [입력 데이터 스트림 유입] ➔ [시스톨릭 어레이 격자 연산기(PE)를 따라 인접 셀로 직접 전달·누산] ➔ [고속 행렬 곱 출력]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "텐서 연산 특화 가속기",
        "desc": "구글이 딥러닝 신경망의 대규모 행렬(텐서) 연산만을 초고속·저전력으로 처리하기 위해 설계한 맞춤형 ASIC 프로세서"
      },
      {
        "major": "핵심 아키텍처",
        "minor": "시스톨릭 어레이 (Systolic)",
        "desc": "심장이 혈액을 뿜어내듯 데이터가 그물망처럼 연결된 연산기(PE)들을 통과하며, 매 연산마다 레지스터에 읽고 쓰는 과정 없이 인접 연산기로 중간 결과를 바로 전달"
      },
      {
        "major": "GPU와 차이",
        "minor": "행렬 특화 전성비 극대화",
        "desc": "범용 그래픽·분기 제어 회로를 완전히 제거하고 대규모 행렬 곱셈 유닛(MXU)과 HBM 대역폭에 집중하여 거대 모델 학습·추론 시 전성비 극대화"
      }
    ],
    "differentiation": "[유형 A] GPU(SIMT 코어 기반) vs 구글 TPU(Systolic Array 2D 행렬 연산기) 구조 비교\n① 구조적 차이: GPU는 레지스터 파일을 매번 접근하나, TPU는 맥박처럼 인접 연산기로 직접 전달하는 시스톨릭 어레이(Systolic Array) 채택.\n② 레지스터 접근 절감: 데이터가 2D 어레이 내부를 흐르며 누적 계산되므로 레지스터 I/O 전력 소모를 극적으로 절감.\n③ 인프라 확장: TPU v4/v5p는 광회선 스위치(OCS)를 통해 수천 개 칩을 토러스 토폴로지로 직접 연결해 초거대 AI 분산 학습 주도."
  },
  {
    "domain": "CAOS",
    "topic": "ASIC (Application-Specific Integrated Circuit)",
    "mnemonic": "고·맞·초·비",
    "definition": "특정 연산 효율 극대화 위해 회로를 고정 제작한 반도체",
    "keywords": [
      "주문형 반도체 (맞춤형 집적회로)",
      "회로 구조 고정 (변경 불가)",
      "최고 수준 연산 속도 & 전력 효율",
      "CPU → GPU → FPGA → ASIC 진화"
    ],
    "diagram": "[유연성 높음 / 전성비 낮음]  CPU ➔ GPU ➔ FPGA (프로그래밍 가능 게이트) ➔ ASIC (회로 영구 고정, 양산 시 전성비 최고)  [특화성·전성비 최고]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "주문형 맞춤 반도체",
        "desc": "특정 응용 분야나 알고리즘만을 수행하도록 설계 단계부터 논리 게이트 회로를 맞춤형으로 고정 제작한 반도체 집적회로"
      },
      {
        "major": "장단점",
        "minor": "고효율 vs 비유연성",
        "desc": "• 강점: 불필요한 범용 제어 로직이 없어 연산 속도, 칩 면적, 전력 효율(성능/W)이 모든 반도체 중 가장 뛰어남\n• 한계: 초기 설계·마스크 제작 비용(NRE)과 개발 기간이 길며, 제작 후 알고리즘 변경 시 회로 수정 불가"
      },
      {
        "major": "FPGA와 비교",
        "minor": "고정 회로 vs 재구성",
        "desc": "알고리즘이 자주 바뀌는 초기 단계에는 회로 재프로그래밍이 가능한 FPGA를 쓰고, 규격이 확정된 대량 양산 단계에서는 ASIC으로 전환"
      }
    ],
    "differentiation": "[유형 B] 고성능 전력최적화 장점 대비 막대한 초기 NRE 비용 및 규격 변경 취약성 극복\n① 트레이드오프: 범용 칩 대비 면적·전력·성능(PPA)은 압도적이나 테이프아웃당 수백억 원의 초기 설계 비용(NRE) 소요.\n② 위험 요인: 생성형 AI 모델 아키텍처가 급변할 경우 고정된 ASIC 하드웨어가 즉시 무용지물이 될 위험 상존.\n③ 극복 전략: 알고리즘이 성숙·고정된 추론 영역 위주로 양산 볼륨을 확보하고, 일부 제어부는 프로그래머블 마이크로코드로 설계."
  },
  {
    "domain": "CAOS",
    "topic": "멀티 GPU 병렬화 기술",
    "mnemonic": "데·텐·파 / 엔·알 (DP·TP·PP)",
    "definition": "거대모델 학습 위해 데이터·모델을 GPU에 분산 기법",
    "keywords": [
      "데이터 병렬화 (DP · All-Reduce)",
      "텐서 병렬화 (TP) · 파이프라인 병렬화 (PP)",
      "3D 병렬화 & ZeRO / FSDP",
      "NVLink · NVSwitch · GPUDirect RDMA"
    ],
    "diagram": "• 데이터 병렬화(DP) : [GPU 1: 전체모델 + 데이터A] & [GPU 2: 전체모델 + 데이터B] ➔ 그래디언트 All-Reduce 동기화\n• 모델 병렬화(TP/PP) : 거대 단일 모델을 [레이어 내부 행렬 분할(TP)] 또는 [층별 순차 분할(PP)]하여 다수 GPU에 분산 적재",
    "tableRows": [
      {
        "major": "데이터 병렬화",
        "minor": "DP & ZeRO / FSDP",
        "desc": "• DP: 동일한 모델을 각 GPU에 복제하고 학습 데이터를 분할 처리 후 가중치 갱신값 동기화\n• ZeRO/FSDP: 중복 저장되는 옵티마이저 상태·그래디언트·파라미터를 GPU들에 샤딩(분산)하여 메모리 한계 돌파"
      },
      {
        "major": "모델 병렬화",
        "minor": "텐서(TP) & 파이프라인(PP)",
        "desc": "• 텐서 병렬화(TP): 단일 트랜스포머 레이어의 거대 행렬 연산을 여러 GPU로 쪼개어 동시 연산 (노드 내 초고속 통신 필수)\n• 파이프라인 병렬화(PP): 모델의 층(Layer)을 순서대로 GPU에 나누어 배치하고 마이크로 배치로 버블(유휴시간) 최소화"
      },
      {
        "major": "고속 인터커넥트",
        "minor": "NVLink & RDMA",
        "desc": "PCIe 대역폭 한계를 넘기 위해 노드 내 GPU 간에는 NVLink/NVSwitch로 직접 연결하고, 서버 노드 간에는 CPU를 우회하는 GPUDirect RDMA(InfiniBand/RoCE) 사용"
      }
    ],
    "differentiation": "[유형 A] 대규모 모델 분산 학습의 3대 병렬화(데이터 · 파이프라인 · 텐서) 기법 비교\n① 데이터 병렬화 (DDP): 모델 전체를 각 GPU에 복제하고 배치만 분할 처리하여 All-Reduce 통신 수행 (작은 모델에 적합).\n② 텐서 병렬화 (Megatron): 단일 레이어 내 거대 행렬(Weight) 자체를 쪼개어 동시 연산 (노드 내 NVLink 초고속망 필수).\n③ 파이프라인 병렬화 (Pipeline): 수십 개 레이어를 계층별로 다른 GPU에 분할 배치하고 마이크로 배치로 파이프라인 구동."
  },
  {
    "domain": "CAOS",
    "topic": "오토 스케일링 (Auto Scaling)",
    "mnemonic": "수·수·쿨·예 (HPA·VPA)",
    "definition": "자원 효율성 위해 부하에 따라 서버 수를 증감하는 기술",
    "keywords": [
      "부하 기반 탄력적 자원 증감",
      "수평 확장 (Scale-Out / HPA)",
      "수직 확장 (Scale-Up / VPA)",
      "쿨다운 (Cooldown) & 플래핑 방지"
    ],
    "diagram": "[메트릭 수집 (CPU/GPU 사용률 · 요청 큐)] ➔ [임계치 초과 판단] ➔ [Scale-Out (인스턴스/파드 수 증설) 또는 Scale-Up (자원 스펙 상향)]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "탄력적 자원 관리",
        "desc": "실시간 워크로드 부하(CPU, 메모리, 네트워크, 커스텀 큐 지표)를 모니터링하여 컴퓨팅 자원을 자동으로 확장(Out/Up)하거나 축소(In/Down)하는 기술"
      },
      {
        "major": "확장 방식",
        "minor": "수평(HPA) vs 수직(VPA)",
        "desc": "• 수평 확장(Scale-Out / HPA): 실행 중인 서버 인스턴스나 컨테이너 파드(Pod)의 개수를 늘림 (무중단 확장에 유리)\n• 수직 확장(Scale-Up / VPA): 단일 인스턴스에 할당된 CPU 코어 수나 메모리 용량 스펙 자체를 증설"
      },
      {
        "major": "안정화 제어",
        "minor": "Cooldown & 예측 스케일링",
        "desc": "확장 직후 지표가 안정화될 때까지 추가 변동을 멈추는 쿨다운(Cooldown) 타이머로 잦은 증감 반복(Flapping/Thrashing)을 방지하며, 머신러닝 기반 사전 예측 확장 병행"
      }
    ],
    "differentiation": "[유형 B] 트래픽 급증 시 인스턴스 기동 지연(Cold Start) 극복을 위한 하이브리드 정책\n① 반응형 한계: CPU/메모리 임계치 초과 후 신규 인스턴스 프로비저닝에 1~3분 소요되어 급격한 스파이크 트래픽 시 서비스 장애 발생.\n② 예측형 연계: 과거 트래픽 시계열 패턴(ARIMA/LSTM)을 분석해 트래픽 유입 10분 전 선제적으로 자원을 증설하는 Predictive 스케일링 결합.\n③ 웜 풀(Warm Pool): 최소 부팅 단계를 미리 거쳐둔 대기 인스턴스 풀을 유지하여 투입 시간을 초 단위로 단축."
  },
  {
    "domain": "CAOS",
    "topic": "페이즈드 어텐션 (PagedAttention)",
    "mnemonic": "블·비·공·처",
    "definition": "추론 단편화 해결 위해 KV캐시를 블록 분할하는 기법",
    "keywords": [
      "LLM 추론 KV 캐시 단편화 해결",
      "OS 가상 메모리 페이징 차용",
      "비연속 블록 할당 (Block Table)",
      "Copy-on-Write 프롬프트 공유",
      "vLLM 추론 엔진 핵심 기술"
    ],
    "diagram": "[논리적 KV 블록 (연속된 토큰 시퀀스)] ──(블록 테이블 매핑)──▶ [물리적 GPU 메모리 블록 (비연속 분산 저장)]\n➔ 메모리 단편화 제로화 및 배치(Batch) 추론 처리량 2~4배 향상",
    "tableRows": [
      {
        "major": "도입 배경",
        "minor": "KV 캐시 메모리 낭비",
        "desc": "LLM 자기회귀 추론 시 출력 길이를 미리 알 수 없어 KV 캐시를 최대 길이로 연속 할당하면 심각한 내부·외부 단편화(60~80% 낭비) 발생"
      },
      {
        "major": "핵심 원리",
        "minor": "비연속 페이지 블록화",
        "desc": "OS의 가상 메모리 페이징 기법을 차용하여 KV 캐시를 고정 크기 블록(Page)으로 쪼개고 물리 GPU 메모리에 비연속적으로 배치·관리"
      },
      {
        "major": "메모리 공유",
        "minor": "Copy-on-Write (CoW)",
        "desc": "동일한 시스템 프롬프트나 병렬 샘플링(Beam Search) 시 KV 블록을 여러 요청이 물리적으로 공유하고 수정 발생 시에만 복제"
      },
      {
        "major": "기대 효과",
        "minor": "처리량(Throughput) 극대화",
        "desc": "메모리 낭비를 4% 미만으로 줄여 확보된 GPU 여유 공간에 더 많은 동시 요청(Batch Size 확대)을 묶어 처리함으로써 추론 처리량 대폭 향상"
      }
    ],
    "differentiation": "[유형 B] LLM 서빙 시 KV 캐시 메모리 단편화(최대 80%)를 OS 페이징 원리로 해결\n① 단편화 문제: 대화 길이를 사전 예측하기 어려워 최대 토큰 크기로 사전 할당함에 따라 내부/외부 단편화로 동시 처리량 급감.\n② 핵심 메커니즘: 전통 OS의 가상 메모리 페이징 원리를 차용해 KV 캐시를 고정 크기 논리 블록으로 쪼개고 물리 메모리에 비연속 동적 할당.\n③ 기대 효과: vLLM 엔진에 탑재되어 KV 캐시 메모리 낭비를 4% 미만으로 억제하고 동시 서빙 처리량을 2~4배 극대화."
  },
  {
    "domain": "CAOS",
    "topic": "운영체제 CPU 스케줄링",
    "mnemonic": "선점(R·S·멀·레) / 비선점(우·기·피·소·히)",
    "definition": "자원 효율화 위해 프로세스별 CPU 우선순위 지정 기법",
    "keywords": [
      "CPU 이용률 · 처리량 극대화",
      "응답시간 · 대기시간 · 반환시간 최소화",
      "선점형 (RR · SRT · MLQ · MLFQ)",
      "비선점형 (FCFS · SJF · HRN)",
      "두음: 선점(RS멀레) / 비선점(우기피소히)"
    ],
    "diagram": "[준비 큐(Ready Queue) 대기 프로세스들] ──(CPU 스케줄러/디스패처)──▶ [CPU 할당 및 문맥교환]\n• 비선점형 (스스로 반납할 때까지 유지: FCFS, SJF, HRN) vs 선점형 (타임슬라이스/우선순위로 강제 회수: RR, SRT, MLQ, MLFQ)",
    "tableRows": [
      {
        "major": "스케줄링 목적",
        "minor": "성능 지표 최적화",
        "desc": "• 시스템 관점: CPU 이용률(Utilization) 및 단위 시간당 처리량(Throughput) 극대화\n• 사용자 관점: 반환시간(Turnaround), 대기시간(Waiting), 응답시간(Response) 최소화 및 공정성 보장"
      },
      {
        "major": "비선점형 기법",
        "minor": "FCFS · SJF · Priority",
        "desc": "• 강점: 문맥교환 오버헤드가 적고 응답시간 예측이 용이 (일괄 처리에 적합)\n• 알고리즘: 도착순(FCFS), 최단 작업 우선(SJF, 평균 대기시간 최소), 비선점 우선순위, HRN"
      },
      {
        "major": "선점형 기법",
        "minor": "RR · SRT · MLQ · MLFQ",
        "desc": "• 강점: 고우선순위 긴급 작업 및 대화형 시분할 시스템에서 빠른 응답시간 보장\n• 알고리즘: 라운드 로빈(RR, 동일 시간할당량 순환), 최소 잔여시간 우선(SRT), 다단계 큐(MLQ), 다단계 피드백 큐(MLFQ)"
      }
    ],
    "differentiation": "[유형 A] 선점형(Preemptive) vs 비선점형(Non-preemptive) 스케줄링 심층 비교\n① 선점형 (RR, SRT, MLFQ): OS가 실행 중인 프로세스의 CPU를 강제 회수 가능하여 시분할 시스템의 높은 응답성과 대화형 시스템 보장.\n② 비선점형 (FCFS, SJF, HRN): 프로세스가 자발적으로 CPU를 양보할 때까지 독점하여 문맥교환 오버헤드가 적으나 긴 작업 독점 시 대기시간 급증.\n③ 실무 적용: 현대 시분할 OS는 선점형 MLFQ를 기본으로 채택하고, 실시간 시스템은 마감시간 기반 선점형 EDF/RM 스케줄러를 적용."
  },
  {
    "domain": "CAOS",
    "topic": "RM (Rate Monotonic) 스케줄링",
    "mnemonic": "주·단·정·선",
    "definition": "실시간 마감 보장 위해 주기가 짧을수록 우선 배정 기법",
    "keywords": [
      "실시간 운영체제 (RTOS) 선점형 스케줄링",
      "정적(고정) 우선순위 할당",
      "실행 주기(Period)의 역수 비례",
      "EDF (동적 마감시간 우선)와 비교"
    ],
    "diagram": "• RM (Rate Monotonic) : 실행 주기(Period) T1 < T2 ➔ 주기가 더 짧은 T1에 고정 최우선순위 부여!\n• 비교 (EDF)          : 실행 시점마다 남은 마감시간(Deadline)이 가장 임박한 태스크에 동적 최우선순위 부여",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "주기 기반 정적 스케줄링",
        "desc": "실시간 운영체제(RTOS)에서 독립적인 주기적 태스크들의 실행 주기(Period)를 기준으로, 주기가 짧을수록 더 높은 고정 우선순위를 부여하는 선점형 기법"
      },
      {
        "major": "특징 및 한계",
        "minor": "구현 단순성 vs 이용률 상한",
        "desc": "우선순위가 고정되어 오버헤드가 적으나, 태스크 수가 무한정 늘어날 때 스케줄링 가능한 CPU 이용률 상한이 약 69.3%(ln 2)로 제한됨"
      },
      {
        "major": "비교 기법",
        "minor": "EDF (Earliest Deadline First)",
        "desc": "마감시간(Deadline)이 가장 임박한 태스크에 동적으로 최우선순위를 부여하는 기법으로, RM과 달리 CPU 이용률을 이론상 100%까지 활용 가능"
      }
    ],
    "differentiation": "[유형 A] 정적 주기 기반 RM vs 동적 마감시간 기반 EDF(Earliest Deadline First) 비교\n① 우선순위 할당: RM은 주기가 짧을수록 높은 우선순위를 정적 부여(Rate Monotonic)하나, EDF는 잔여 마감시간이 임박할수록 동적 상승.\n② CPU 활용률 한계: RM은 Liu & Layland 한계(n(2^(1/n)-1), n=무한대 시 69.3%)를 넘으면 스케줄링 불가하나, EDF는 이론상 100% 활용 가능.\n③ 안정성 비교: 과부하 발생 시 RM은 주기 긴 저우선순위 작업만 계획대로 지연되나, EDF는 도미노 효과로 전체 시스템이 붕괴될 위험 상존."
  },
  {
    "domain": "CAOS",
    "topic": "다단계 큐 (MLQ, Multi-Level Queue)",
    "mnemonic": "성·분·독·불",
    "definition": "작업 성격별 처리 위해 준비 큐를 영구 분리하는 기법",
    "keywords": [
      "선점형 다중 준비 큐 스케줄링",
      "성격별(전경/배경) 큐 영구 분리",
      "큐 간 프로세스 이동 불가",
      "하위 큐 기아현상(Starvation) 발생"
    ],
    "diagram": "[최상위: 시스템 프로세스 큐] ➔ [중위: 전경 대화형 큐 (RR 스케줄링)] ➔ [하위: 배경 일괄처리 큐 (FCFS)]\n➔ 큐 간 프로세스 이동이 불가능하고 상위 큐가 비어야 하위 큐가 실행되어 하위 큐 기아현상 발생!",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "고정 다중 큐 분할",
        "desc": "프로세스를 특성에 따라 여러 그룹(시스템, 대화형, 편집, 일괄처리)으로 분류하고, 그룹마다 별도의 독자적인 준비 큐를 할당하는 스케줄링 기법"
      },
      {
        "major": "동작 방식",
        "minor": "큐별 독립 스케줄링",
        "desc": "각 큐는 자신만의 스케줄링 알고리즘(예: 전경 큐는 RR, 배경 큐는 FCFS)을 가지며, 큐와 큐 사이에는 고정 우선순위 선점형 스케줄링이나 차등 시간 할당 적용"
      },
      {
        "major": "주요 한계",
        "minor": "유연성 부족 & 기아 발생",
        "desc": "한 번 배정된 큐에서 다른 큐로 프로세스가 이동할 수 없으며, 상위 큐에 작업이 계속 들어오면 하위 큐 작업은 기아 상태에 빠짐 (MLFQ로 해결)"
      }
    ],
    "differentiation": "[유형 B] 고정 우선순위 다단계 큐의 하위 큐 기아(Starvation) 한계 극복\n① 구조적 한계: 상위 큐(전면 포그라운드 작업)가 비어있지 않으면 하위 큐(배치 백그라운드 작업)는 영원히 CPU를 할당받지 못함.\n② 시분할 배분 (Time Slice): 상위 큐에 80%, 하위 큐에 20% 등 CPU 처리 시간을 큐별로 일정 비율 분할 배정하여 기아 완화.\n③ 근본 대책 (MLFQ 전환): 고정 큐 구조를 버리고 프로세스의 CPU 버스트 행태에 따라 큐 간 이동을 허용하는 피드백 큐 도입."
  },
  {
    "domain": "CAOS",
    "topic": "다단계 피드백 큐 (MLFQ, Multi-Level Feedback Queue)",
    "mnemonic": "타·강·승·에",
    "definition": "기아 해소 위해 시간할당량 차등 큐 간 이동 허용 기법",
    "keywords": [
      "큐 간 프로세스 동적 이동 허용",
      "하위 단계일수록 큰 타임 슬라이스 부여",
      "CPU 버스트 긴 작업 강등",
      "에이징 (Aging) 승격으로 기아 해소"
    ],
    "diagram": "[신규 진입 → 최상위 큐 Q0 (타임 슬라이스 8ms)] ──(시간 내 미완료 시 강등)──▶ [중위 큐 Q1 (16ms)] ──▶ [하위 큐 Q2 (FCFS)]\n   ▲───────────────────────────────────────(장기 대기 시 상위 큐로 승격: Aging 기법)───────────────────────────────────────┘",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "동적 큐 이동 스케줄링",
        "desc": "다단계 큐(MLQ)의 경직성과 기아 현상을 해결하기 위해, 프로세스의 CPU 사용 성향에 따라 큐 간 이동을 허용한 현대 OS 범용 스케줄링 기법"
      },
      {
        "major": "강등 메커니즘",
        "minor": "짧은 작업/I/O 우대",
        "desc": "처음 진입한 작업은 최상위 큐(가장 짧은 시간 할당량)에 배치하여 짧은 작업이나 대화형 I/O 작업은 즉시 끝내고, 시간 내에 못 끝낸 긴 연산 작업은 하위 큐(더 긴 시간 할당량)로 점진 강등"
      },
      {
        "major": "승격 메커니즘",
        "minor": "에이징 (Aging) 기아 방지",
        "desc": "하위 우선순위 큐에서 너무 오랫동안 CPU를 할당받지 못하고 대기한 프로세스는 다시 상위 우선순위 큐로 승격(Boost)시켜 기아 현상 원천 방지"
      }
    ],
    "differentiation": "[유형 B] 긴 작업의 기아 현상 방지와 스케줄러 악용(Gaming the Scheduler) 방어\n① 우선순위 강등: 주어진 타임 슬라이스를 다 쓰고 CPU를 반납하는 연산 집중 프로세스는 즉시 하위 큐로 강등시켜 대화형 작업 보호.\n② Gaming 방어: 타임 슬라이스 종료 직전 고의로 입출력을 발생시켜 상위 큐에 잔류하려는 프로세스를 막기 위해 누적 실행 시간 측정.\n③ 주기적 승격 (Priority Boost): 일정 주기마다 시스템 내 모든 프로세스를 최상위 큐로 일괄 리셋(Aging)하여 기아 현상 원천 차단."
  },
  {
    "domain": "CAOS",
    "topic": "단일 큐 멀티프로세서 스케줄링 (SQMS)",
    "mnemonic": "단·공·락·캐",
    "definition": "부하 분산 위해 모든 CPU가 단일 큐 공유 기법",
    "keywords": [
      "Single-Queue Multiprocessor Scheduling",
      "단일 전역 준비 큐 공유",
      "락(Lock) 동기화 경합 병목",
      "캐시 친화성 (Cache Affinity) 저하"
    ],
    "diagram": "[단일 공용 준비 큐 (Global Ready Queue)] ──(Lock 경합 발생)──▶ [CPU 1] / [CPU 2] / [CPU 3] / [CPU 4]\n➔ 프로세스가 실행될 때마다 매번 다른 CPU에 배정되어 로컬 캐시(L1/L2) 및 TLB 무효화 빈발!",
    "tableRows": [
      {
        "major": "핵심 구조",
        "minor": "단일 전역 큐 공유",
        "desc": "멀티코어 환경에서 모든 CPU가 단 하나의 전역 준비 큐(Ready Queue)를 공유하여 다음 실행할 작업을 꺼내가는 스케줄링 방식"
      },
      {
        "major": "핵심 강점",
        "minor": "설계 단순성 & 자동 부하분산",
        "desc": "기존 단일 CPU 스케줄러 구조를 그대로 재사용할 수 있으며, 노는 CPU가 즉시 큐에서 작업을 가져가므로 부하 불균형이 발생하지 않음"
      },
      {
        "major": "치명적 한계",
        "minor": "락 경합 & 캐시 친화성 상실",
        "desc": "• 확장성 병목: 코어 수가 많아질수록 공용 큐 접근 시 락(Lock) 경합으로 심각한 성능 저하 발생\n• 캐시 미스: 프로세스가 문맥교환마다 다른 코어로 옮겨 다녀 이전 코어 캐시에 쌓인 데이터를 쓰지 못함(Cache Affinity 저하)"
      }
    ],
    "differentiation": "[유형 A] 단일 큐(SQMS) vs 다중 큐(MQMS) 멀티프로세서 스케줄링 비교\n① 락 병목: SQMS는 모든 코어가 단일 공유 큐에 접근하므로 동기화 락(Lock Contention) 경합으로 코어 수 증가 시 성능 급락.\n② 캐시 친화도 (Affinity): 작업이 실행될 때마다 매번 다른 코어에 무작위 배치되어 L1/L2 캐시 워밍 효과가 상실됨.\n③ 발전 방향: 코어 수가 8개 이상인 현대 멀티코어/매니코어 환경에서는 코어별 전용 큐를 운영하는 MQMS 도입 필수."
  },
  {
    "domain": "CAOS",
    "topic": "다중 큐 멀티프로세서 스케줄링 (MQMS)",
    "mnemonic": "독·무·친·훔",
    "definition": "락 경합 해소와 캐시 친화성 위해 코어별 독립 큐 방식",
    "keywords": [
      "Multi-Queue Multiprocessor Scheduling",
      "코어별 독립 준비 큐 보유",
      "락 경합 해소 & 캐시 친화성 극대화",
      "부하 불균형 & 작업 훔치기 (Work Stealing)"
    ],
    "diagram": "[큐 1] ──▶ [CPU 1 (동일 프로세스 반복 실행: 캐시 친화성 극대화)]\n[큐 2] ──▶ [CPU 2 (유휴 발생 시 큐 1의 대기 작업을 훔쳐옴: Work Stealing)]",
    "tableRows": [
      {
        "major": "핵심 구조",
        "minor": "코어별 독립 큐 배치",
        "desc": "각 CPU 코어마다 독립된 로컬 준비 큐를 배치하여 코어 수 증가에 따른 확장성을 확보한 현대 운영체제 표준 멀티프로세서 스케줄링"
      },
      {
        "major": "핵심 강점",
        "minor": "무경합 & 캐시 친화성",
        "desc": "• 확장성 우수: 자기 큐만 접근하므로 CPU 간 큐 잠금(Lock) 경합이 전혀 없음\n• 캐시 친화성(Affinity): 같은 프로세스가 동일 CPU에서 계속 재실행되어 L1/L2 캐시 및 TLB 적중률 극대화"
      },
      {
        "major": "한계와 해결",
        "minor": "부하 불균형 & Work Stealing",
        "desc": "특정 CPU 큐에만 작업이 몰리거나 비어버리는 부하 불균형(Load Imbalance)이 발생할 수 있으며, 한가한 큐가 바쁜 큐의 작업을 가져오는 작업 훔치기(Work Stealing)로 해결"
      }
    ],
    "differentiation": "[유형 B] 코어별 전용 큐 운영 시 발생하는 부하 불균형 극복 (Work Stealing)\n① 불균형 문제: 특정 코어의 큐는 비어있어 유휴 상태인데 다른 코어의 큐는 작업이 밀려 응답시간이 지연되는 부하 편차 발생.\n② 작업 훔치기 (Work Stealing): 유휴 코어가 바쁜 다른 코어의 전용 큐 꼬리(Tail)에서 작업을 훔쳐와 실행하는 분산 로드밸런싱 적용.\n③ 캐시 친화도 절충: 로컬 큐 작업은 머리(Head)에서 LIFO/FIFO로 수행해 캐시를 보존하고, 훔치기는 꼬리에서 수행해 락 경합 최소화."
  },
  {
    "domain": "CAOS",
    "topic": "HRN (Highest Response-ratio Next) 알고리즘",
    "mnemonic": "대·서·서 (대기+서비스/서비스)",
    "definition": "SJF 기아 보완 위해 대기시간 반영 응답률 배정 기법",
    "keywords": [
      "비선점형 스케줄링",
      "SJF의 장시간 작업 기아 보완",
      "우선순위 = (대기시간 + 실행시간) / 실행시간",
      "대기시간 가중치 반영"
    ],
    "diagram": "• HRN 응답률 공식 : 우선순위(Response Ratio) = (대기시간 + 예상 실행시간) ÷ 예상 실행시간\n➔ 실행시간이 짧을수록 유리(SJF 장점 유지) + 대기시간이 길어질수록 분자가 커져 우선순위 자동 상승!",
    "tableRows": [
      {
        "major": "등장 배경",
        "minor": "SJF의 불평등 해결",
        "desc": "최단 작업 우선(SJF) 스케줄링에서 실행 시간이 긴 작업이 짧은 작업들에 밀려 영구히 CPU를 할당받지 못하는 현상을 해결하기 위해 고안"
      },
      {
        "major": "핵심 원리",
        "minor": "최고 응답률 우선",
        "desc": "단순히 실행 시간만 비교하지 않고 프로세스가 준비 큐에서 기다린 '대기 시간'을 분자에 더해 응답률(Response Ratio)이 가장 높은 프로세스에 CPU 배정"
      },
      {
        "major": "장단점",
        "minor": "공정성 vs 계산 오버헤드",
        "desc": "긴 작업도 오래 기다리면 우선순위가 높아져 기아 현상을 막아주지만, 비선점형이며 매 스케줄링 시마다 모든 프로세스의 응답률을 계산해야 하는 오버헤드 존재"
      }
    ],
    "differentiation": "[유형 B] 최단 작업 우선(SJF)의 약점인 기아 현상을 에이징(Aging) 수식으로 극복\n① 우선순위 공식: Priority = (대기 시간 + 서비스 시간) / 서비스 시간 = 1 + (대기 시간 / 서비스 시간).\n② 자동 에이징 메커니즘: 서비스 시간이 긴 작업이라도 대기 시간이 길어질수록 분자가 커져 우선순위가 지속적으로 상승.\n③ 비선점형 특성: 실행 중간에 CPU를 빼앗기지 않아 잦은 문맥교환 오버헤드가 없으며 작업 처리 순서의 공평성(Fairness) 달성."
  },
  {
    "domain": "CAOS",
    "topic": "기아현상 (Starvation)",
    "mnemonic": "우·대·에 (MLQ·우선순위·SJF)",
    "definition": "낮은 우선순위로 인해 프로세스가 CPU 못 받는 현상",
    "keywords": [
      "특정 프로세스 무한 대기",
      "우선순위/SJF/MLQ 스케줄링 부작용",
      "교착상태(Deadlock)와의 차이",
      "에이징 (Aging: 대기시간 비례 우선순위 상향)"
    ],
    "diagram": "[고우선순위 작업 지속 유입] ➔ [저우선순위 프로세스 무한 대기 (Starvation)] ──(해결: Aging 기법)──▶ 대기 시간마다 우선순위 +1씩 단계적 격상!",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "기아현상 (Starvation)",
        "desc": "프로세스가 실행에 필요한 자원(CPU 등)을 할당받기 위해 준비 상태에서 대기 중이나, 우선순위가 낮아 무기한 연기되는 현상"
      },
      {
        "major": "비교 구분",
        "minor": "기아현상 vs 교착상태",
        "desc": "• 기아현상: 시스템은 정상 작동 중이나 스케줄링 정책(SJF, SRT, 고정 우선순위, MLQ) 편향으로 특정 프로세스만 소외되는 상태 (Ready 상태 대기)\n• 교착상태: 둘 이상의 프로세스가 서로 점유한 자원을 요구하며 다 같이 멈춰버린 상태 (Wait/Blocked 상태 대기)"
      },
      {
        "major": "핵심 해결책",
        "minor": "에이징 (Aging) 기법",
        "desc": "오랫동안 자원을 할당받지 못하고 대기한 프로세스의 우선순위를 대기 시간에 비례해 점진적으로 높여주어 유한 시간 내 실행을 보장 (HRN, MLFQ 등에 적용)"
      }
    ],
    "differentiation": "[유형 A] 기아현상(Starvation) vs 교착상태(Deadlock) 핵심 차이점 심층 비교\n① 시스템 상태: 기아현상은 특정 저우선순위 프로세스만 CPU를 못 얻을 뿐 전체 시스템은 정상 동작하나, 교착상태는 모든 연관 작업이 영구 정지.\n② 자원 보유 여부: 기아현상은 아무 자원도 쥐지 못해 대기하지만, 교착상태는 각자 자원을 쥔 채 서로의 자원을 상호 요구.\n③ 해결 기법: 기아현상은 대기 시간에 비례해 우선순위를 높여주는 에이징(Aging)으로 해결하고, 교착상태는 자원 할당 그래프 탐지/회수로 해결."
  },
  {
    "domain": "CAOS",
    "topic": "경쟁조건 (Race Condition)",
    "mnemonic": "공·쓰·동 / 데·피·램·세·모 / 타·카·인",
    "definition": "공유자원 동시 접근 시 순서에 따라 무결성 깨지는 현상",
    "keywords": [
      "3대 발생조건 (공유자원 · Write · 동기화 부재)",
      "SW 해결기법 (데피램세모)",
      "HW 해결기법 (타카인: TAS · CAS · 인터럽트)"
    ],
    "diagram": "race_condition.png",
    "tableRows": [
      {
        "major": "발생 3대 필수조건",
        "minor": "1. 공유자원",
        "desc": "여러 스레드가 동일한 메모리 공간 참조"
      },
      {
        "major": "",
        "minor": "2. Write Operations",
        "desc": "읽기만 하면 문제 안 생기나, 쓰기 발생 시 문제발생"
      },
      {
        "major": "",
        "minor": "3. 동기화 부재",
        "desc": "접근순서 제어 규칙이 없다."
      },
      {
        "major": "SW 해결방안\n(데피램세모)",
        "minor": "데커 (Dekker)",
        "desc": "우선순위 관리"
      },
      {
        "major": "",
        "minor": "피터슨 (Peterson)",
        "desc": "임계영역 순서 양보"
      },
      {
        "major": "",
        "minor": "램포트 (Lamport)",
        "desc": "권한부여 관리"
      },
      {
        "major": "",
        "minor": "세마포어 (Semaphore)",
        "desc": "P, V 함수, S 공유"
      },
      {
        "major": "",
        "minor": "모니터 (Monitor)",
        "desc": "프로그래밍 가능"
      },
      {
        "major": "HW 해결방안\n(타카인)",
        "minor": "Test&Set (TAS)",
        "desc": "명령어 상태 점검 후 변경 수행"
      },
      {
        "major": "",
        "minor": "Compare&Swap (CAS)",
        "desc": "Lock-Free(락 프리) 알고리즘"
      },
      {
        "major": "",
        "minor": "인터럽트 비활성화",
        "desc": "인터럽트 Disable, 원자성 확보"
      }
    ],
    "diagramImg": "race_condition.png",
    "differentiation": "[유형 B] 공유 자원 동시 갱신 충돌 시 성능을 유지하며 무결성을 보장하는 방안\n① 임계구역 보호: 세마포어, 뮤텍스 등 상호배제 기법을 적용하되 임계구역(Critical Section)의 크기를 최소화하여 병목 차단.\n② 거친 락(Coarse-grained)의 한계: 테이블이나 구조체 전체에 큰 락을 걸면 동시성 저하로 처리량이 급감하므로 세분화된 락(Fine-grained) 적용.\n③ Lock-Free / CAS: 락 획득 오버헤드를 배제하기 위해 하드웨어 지원 원자적 연산인 Compare-And-Swap(CAS) 기반 논블로킹 자료구조 채택."
  },
  {
    "domain": "CAOS",
    "topic": "운영체제의 동기화",
    "mnemonic": "상·진·한 / 데·피·램 / 테·컴·인",
    "definition": "공유 데이터 일관성 위해 프로세스 실행 순서 제어 기법",
    "keywords": [
      "임계영역 (Critical Section)",
      "3대 해결 조건: 상호배제 · 진행 · 한정대기",
      "HW 동기화 (Test&Set · Compare&Swap)",
      "SW 동기화 (피터슨 · 램포트 빵집)",
      "두음: 상진한 / 데피램 / 테컴인"
    ],
    "diagram": "[진입 구역 (Entry: 락 획득 검사)] ➔ [임계 구역 (Critical Section: 공유자원 단독 조작)] ➔ [퇴출 구역 (Exit: 락 해제)]\n• 필수 3원칙 : ① 상호배제 (1개만 진입) + ② 진행 (유한 시간 내 진입자 결정) + ③ 한정 대기 (기아 방지 상한선)",
    "tableRows": [
      {
        "major": "개념 및 필요성",
        "minor": "데이터 일관성 보장",
        "desc": "병행 수행되는 프로세스/스레드들 간에 실행 순서를 맞추고 공유 데이터의 일관성(Consistency)과 원자성을 보장하기 위한 운영체제 제어 메커니즘"
      },
      {
        "major": "임계영역 3조건",
        "minor": "상호배제 · 진행 · 한정대기",
        "desc": "① 상호배제(Mutual Exclusion): 한 프로세스가 임계영역에 있으면 타 프로세스 진입 불가\n② 진행(Progress): 임계영역이 비어 있을 때 진입할 프로세스를 유한 시간 내 결정\n③ 한정 대기(Bounded Waiting): 특정 프로세스가 무한정 기다리지 않도록 대기 횟수 제한"
      },
      {
        "major": "주요 구현 기법",
        "minor": "HW / SW / OS 동기화",
        "desc": "• 하드웨어 기법: 원자적 명령어(Test-and-Set, Compare-and-Swap), 인터럽트 비활성화\n• 소프트웨어 알고리즘: 데커(Dekker), 피터슨(Peterson), 램포트 빵집(Bakery) 알고리즘\n• OS/언어 동기화 도구: 뮤텍스, 세마포어, 스핀락, 모니터"
      }
    ],
    "differentiation": "[유형 A] 사용자 공간 동기화(스핀락, Futex) vs 커널 공간 동기화(뮤텍스, 세마포어) 비교\n① 스핀락 (Spinlock): CPU를 루프 돌며 바쁜 대기(Busy Waiting)하므로 임계구역이 극히 짧은 멀티코어 환경에서 문맥교환 비용 없이 최고 속도.\n② 커널 뮤텍스: 락 미획득 시 스레드를 대기 큐로 옮기고 슬립(Sleep) 처리하므로 문맥교환 비용(수천 사이클)이 수반됨.\n③ 하이브리드 (Futex): 초기에는 사용자 공간에서 CAS로 빠르게 시도하고, 충돌이 길어질 때만 커널 시스템 콜로 진입해 수면 대기(Linux 표준)."
  },
  {
    "domain": "CAOS",
    "topic": "뮤텍스 (Mutex)",
    "mnemonic": "소·단·슬",
    "definition": "임계영역 보호 위해 락 소유자만 해제하는 상호배제 기법",
    "keywords": [
      "상호배제 (Mutual Exclusion) 단일 잠금",
      "Lock 소유권 (Ownership) 존재",
      "0 또는 1 상태",
      "스핀락 (Spinlock)과의 비교"
    ],
    "diagram": "[스레드 A] ──(lock 획득: 소유자 지정)──▶ [임계영역 단독 실행] ──(스레드 A만 unlock 해제 가능)──▶ [대기 큐의 스레드 B 깨움]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "소유권 기반 단일 락",
        "desc": "공유 자원에 동시에 단 하나의 스레드만 접근할 수 있도록 잠금(Lock)을 제공하는 동기화 객체로, 락을 획득한 소유자(Owner)만 해제 가능"
      },
      {
        "major": "동작 특성",
        "minor": "블로킹 대기 (Sleep)",
        "desc": "임계영역이 이미 잠겨 있으면 요청 스레드는 CPU를 양보하고 대기 큐(Sleep)로 들어가며, 락 해제 시 깨어남"
      },
      {
        "major": "비교 구분",
        "minor": "뮤텍스 vs 스핀락",
        "desc": "• 뮤텍스: 대기 시 Sleep 상태로 전환되어 긴 임계영역에서 CPU 낭비를 막음 (문맥교환 발생)\n• 스핀락(Spinlock): 대기 시 잠들지 않고 루프를 돌며(Busy Waiting) 락을 확인해 짧은 임계영역에서 문맥교환 오버헤드 제거"
      }
    ],
    "differentiation": "[유형 A] 뮤텍스(Mutex) vs 이진 세마포어(Binary Semaphore) 소유권(Ownership) 비교\n① 소유권 여부: 뮤텍스는 락을 획득한 바로 그 스레드만이 언락(Unlock)할 수 있는 엄격한 소유권(Ownership) 존재.\n② 이진 세마포어: 락 개념이 아닌 시그널 개념이므로 락을 건 스레드가 아닌 다른 제3의 스레드도 V연산(Signal)을 통해 자원 해제 가능.\n③ 우선순위 상속: 뮤텍스는 소유자가 명확하므로 우선순위 역전 방지를 위한 우선순위 상속(Priority Inheritance) 프로토콜 적용 가능."
  },
  {
    "domain": "CAOS",
    "topic": "세마포어 (Semaphore)",
    "mnemonic": "공·점·해 (S·P·V)",
    "definition": "임계영역 통제 위해 공유변수와 P·V 연산을 쓰는 기법",
    "keywords": [
      "공유 자원 카운팅 변수 (S)",
      "P 연산 (Proberen: wait · 자원 획득)",
      "V 연산 (Verhogen: signal · 자원 반납)",
      "이진 세마포어 vs 계수 세마포어",
      "소유권 없음 (외부 신호 해제 가능)"
    ],
    "diagram": "• P(S) 진입 연산 : S ← S - 1 (만약 S < 0 이면 대기 큐에 Block)\n• V(S) 퇴출 연산 : S ← S + 1 (만약 S ≤ 0 이면 대기 큐의 프로세스 1개를 Wakeup 깨움)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정수형 동기화 변수",
        "desc": "다익스트라가 제안한 기법으로, 가용한 공유 자원의 개수(S)를 나타내는 정수 변수와 두 개의 원자적 연산(P, V)으로 상호배제 및 실행 순서 동기화 수행"
      },
      {
        "major": "유형 구분",
        "minor": "이진(Binary) vs 계수(Counting)",
        "desc": "• 이진 세마포어: S가 0 또는 1만 가지며 뮤텍스처럼 상호배제에 사용\n• 계수 세마포어: S가 0 이상의 정수(N)를 가지며 N개의 동일한 자원 풀(Pool)을 여러 프로세스에 분배할 때 사용"
      },
      {
        "major": "뮤텍스와 차이",
        "minor": "소유권 유무 및 한계",
        "desc": "뮤텍스와 달리 락 소유권 개념이 없어 락을 걸지 않은 다른 프로세스가 V 연산으로 신호를 보내 깨울 수 있으며, P·V 호출 순서 실수 시 교착상태 유발 위험 존재"
      }
    ],
    "differentiation": "[유형 B] P/V 연산 오염에 따른 교착상태 방지 및 현대적 모니터로의 전환\n① 코딩 실수 위험: wait(P)와 signal(V) 연산의 순서가 뒤바뀌거나(V..P), 둘 중 하나가 누락되면 시스템 전체가 즉시 교착 또는 무결성 파괴.\n② 디버깅 난해성: 런타임에 다수의 프로세스가 비동기적으로 공유 변수를 조작하므로 버그 재현 및 추적이 극도로 난해.\n③ 해결책: 언어와 컴파일러가 임계구역 진입/퇴출 시 상호배제를 자동 보장하는 고수준 모니터(Java synchronized) 또는 RAII 락 가드 사용."
  },
  {
    "domain": "CAOS",
    "topic": "모니터 (Monitor)",
    "mnemonic": "캡·자·조 (wait·signal)",
    "definition": "세마포어 오류 보완 위해 자원과 함수를 캡슐화한 기법",
    "keywords": [
      "고수준 프로그래밍 언어 동기화 구조",
      "공유 자원 + 접근 프로시저 캡슐화",
      "조건 변수 (wait · signal/notify)",
      "세마포어 타이밍 오류 해결"
    ],
    "diagram": "[모니터 캡슐 내부: 공유 데이터 + 동기화 함수(synchronized)]\n  ▲\n[진입 큐 (한 번에 1개 스레드만 허용)] & [조건 변수 대기 큐: wait()로 양보 / signal()로 재진입 통지]",
    "tableRows": [
      {
        "major": "등장 배경",
        "minor": "세마포어 구현 실수 방지",
        "desc": "개발자가 직접 P·V 연산 코드를 작성할 때 발생하는 누락·순서 역전(교착상태 및 타이밍 오류)을 막기 위해 컴파일러/언어 차원에서 상호배제를 자동화한 구조"
      },
      {
        "major": "핵심 구조",
        "minor": "캡슐화 & 자동 상호배제",
        "desc": "공유 변수와 이를 조작하는 프로시저들을 하나의 모니터 객체로 묶어, 외부에서 공유 변수에 직접 접근하지 못하고 오직 모니터 내 함수를 통해서만 한 번에 한 프로세스씩 실행하도록 보장"
      },
      {
        "major": "실행 제어",
        "minor": "조건 변수 (wait / signal)",
        "desc": "모니터 내부에서 특정 조건이 충족될 때까지 일시 양보(wait)하고, 다른 스레드가 조건을 달성한 뒤 깨워주는(signal / Java notify) 조건 변수 큐 제공"
      }
    ],
    "differentiation": "[유형 A] 저수준 세마포어 vs 고수준 모니터(Monitor) 동기화 추상화 수준 비교\n① 추상화 수준: 세마포어는 정수형 변수를 다루는 저수준 도구이나, 모니터는 데이터와 메서드를 하나의 캡슐(Module)로 감싼 고수준 객체.\n② 자동 상호배제: 모니터 내부에 정의된 프로시저에는 한 번에 오직 하나의 스레드만 진입할 수 있도록 컴파일러가 진입 큐를 자동 제어.\n③ 조건 동기: 모니터 내부 조건 변수(Condition Variable)의 wait()과 notify()를 통해 특정 상태가 충족될 때까지 안전하게 대기."
  },
  {
    "domain": "CAOS",
    "topic": "교착상태 (Deadlock)",
    "mnemonic": "상·점·비·환 / 예·회·발·복",
    "definition": "자원 점유 프로세스가 서로 상대 자원 요청해 멈춘 상태",
    "keywords": [
      "4대 조건: 상호배제 · 점유와 대기 · 비선점 · 환형구조 (상점비환)",
      "4대 처리방안: 예방 · 회피 · 발견 · 복구 (예회발복)",
      "Wait-Die / Wound-Wait"
    ],
    "diagram": "<img src=\"deadlock_concept.png\" alt=\"교착상태 개념도\"><img src=\"deadlock_conditions.png\" alt=\"교착상태 4대 조건별 개념도\">",
    "tableRows": [
      {
        "major": "발생 4대 조건\n(상·점·비·환)",
        "minor": "상호배제",
        "desc": "• 개념도: P1 ⇄ R(동시성제어) ⇄ P2\n• 프로세스 간 배타적 점유권 관리 미흡"
      },
      {
        "major": "",
        "minor": "점유와 대기",
        "desc": "• 개념도: P1 ─(점유)→ R ─(대기)→ P2 ─(요청)→ R ─(할당)→ P1\n• 자원 점유와 자원 요청 대기 조건"
      },
      {
        "major": "",
        "minor": "비선점",
        "desc": "• 개념도: P1 ─(점유)→ R ─(대기)→ P2(낮은우선순위) ─(요청)→ R ─(할당)→ P1\n• CPU 비선점형 조건 / 우선순위 조절"
      },
      {
        "major": "",
        "minor": "환형구조",
        "desc": "• 개념도: P1 → R → P2 → R → P1\n• 프로세스, 자원 간 환형구조"
      },
      {
        "major": "예방",
        "minor": "LockTime",
        "desc": "Lock Timeout 조절"
      },
      {
        "major": "",
        "minor": "실행순서",
        "desc": "실행순서 지정"
      },
      {
        "major": "",
        "minor": "우선순위",
        "desc": "프로세스 우선순위"
      },
      {
        "major": "회피",
        "minor": "은행가",
        "desc": "은행가 알고리즘"
      },
      {
        "major": "",
        "minor": "Wait-Die",
        "desc": "고참 프로세스가 후임 Kill"
      },
      {
        "major": "",
        "minor": "Wound-Wait",
        "desc": "후임 자원 선점"
      },
      {
        "major": "발견",
        "minor": "데드락 log",
        "desc": "log 기록 저장"
      },
      {
        "major": "",
        "minor": "Alarm",
        "desc": "Deadlock 알람"
      },
      {
        "major": "",
        "minor": "성능모니터링",
        "desc": "모니터링 항목"
      },
      {
        "major": "복구",
        "minor": "강제 Kill",
        "desc": "둘 중 하나 Kill"
      },
      {
        "major": "",
        "minor": "자원해제",
        "desc": "해제 처리"
      },
      {
        "major": "",
        "minor": "프로세스 Kill",
        "desc": "프로세스 Kill"
      }
    ],
    "diagramImg": "deadlock_conditions.png",
    "differentiation": "[유형 B] 4대 필요조건(상호배제·점유대기·비선점·환형대기)의 예방 기법 한계와 회피/탐지 절충\n① 예방의 비효율성: 환형대기 예방을 위한 자원 번호 순차 할당이나 점유대기 배제는 자원 낭비와 시스템 처리량 저하가 극심함.\n② 회피 기법: 자원 할당 전 안전 상태(Safe State)를 검사하는 은행가 알고리즘을 적용할 수 있으나 최대 자원 요구량 사전 파악 불가.\n③ 실무 해결책: 평소 오버헤드 없이 자원을 자유롭게 할당하되, 타임아웃 및 주기적 자원할당 그래프(RAG) 탐지 후 롤백하는 탐지·회복 적용."
  },
  {
    "domain": "CAOS",
    "topic": "은행가 알고리즘 (Banker's Algorithm)",
    "mnemonic": "에·이·맨 (A·M·A·N)",
    "definition": "교착상태 회피 위해 안전 상태 유지할 요청만 수락 기법",
    "keywords": [
      "교착상태 회피 (Deadlock Avoidance)",
      "다익스트라 고안",
      "안전 상태 (Safe State) & 안전 수열",
      "Max · Allocation · Need · Available",
      "두음: AMAN (에이맨)"
    ],
    "diagram": "• 핵심 수식 : 잔여 요구량 Need[i] = 최대 요구량 Max[i] - 현재 할당량 Allocation[i]\n• 검증 절차 : Need[i] ≤ 가용 자원(Available) 인 프로세스부터 순차 실행 → 자원 반납(+Allocation) → 전원 종료 가능한 [안전 수열] 도출!",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "안전 상태 검증 회피법",
        "desc": "은행이 모든 고객의 인출 요구를 감당할 수 있을 때만 대출해 주듯, OS가 자원 할당 후에도 모든 프로세스가 정상 종료될 수 있는 '안전 수열(Safe Sequence)'이 존재할 때만 자원을 할당하는 기법"
      },
      {
        "major": "4대 자료구조",
        "minor": "Available · Max · Alloc · Need",
        "desc": "• Available: 현재 시스템에 남아있는 가용 자원 수\n• Max: 각 프로세스가 선언한 최대 자원 요구량\n• Allocation: 각 프로세스에 현재 할당된 자원 수\n• Need: 앞으로 추가 필요한 자원 수 (Need = Max - Allocation)"
      },
      {
        "major": "한계점",
        "minor": "사전 파악 및 오버헤드",
        "desc": "프로세스가 실행 전에 자신의 최대 자원 요구량(Max)을 미리 정확히 알아야 하고, 전체 자원 수가 고정되어야 하며 매 요청마다 안전성 검증 연산 오버헤드가 발생"
      }
    ],
    "differentiation": "[유형 B] 안전 상태(Safe State) 검증 알고리즘의 실무 적용 한계와 대안\n① 비현실적 전제: 각 프로세스가 시작 전 자신이 최대로 사용할 자원의 총량을 정확히 알고 선언해야 하나 실무에서는 사전 파악 불가능.\n② 동적 오버헤드: 자원 요청이 발생할 때마다 O(m*n^2) 연산으로 미래 안전 시퀀스를 매번 계산해야 하므로 시스템 응답성이 크게 저하.\n③ 현대 OS 대안: 대부분의 범용 OS(Linux, Windows)는 교착상태 무시(Ostrich 알고리즘) 및 락 획득 타임아웃(Lock Timeout) 방식으로 실용적 대응."
  },
  {
    "domain": "CAOS",
    "topic": "우선순위 역전 (Priority Inversion)",
    "mnemonic": "임·상·선",
    "definition": "동기화 문제로 고순위 작업이 저순위보다 늦게 되는 현상",
    "keywords": [
      "선점형 RTOS 동기화 결함",
      "고순위(TH) · 중순위(TM) · 저순위(TL)",
      "중간 우선순위 태스크의 선점",
      "무한 역전 (Unbounded Inversion)",
      "두음: 임상선"
    ],
    "diagram": "[1단계] 저순위(TL)가 공유자원 락 획득 실행 ➔ [2단계] 고순위(TH)가 동일 락 요청 후 대기(Block)\n[3단계] 락과 무관한 중순위(TM)가 TL을 CPU 선점! ➔ 결국 고순위(TH)가 중순위(TM)보다 늦게 실행되는 역전 발생",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "우선순위 역전 정의",
        "desc": "선점형 우선순위 스케줄링 환경에서 높은 우선순위 태스크(TH)가 낮은 우선순위 태스크(TL)가 점유한 공유 자원을 기다리는 동안, 중간 우선순위 태스크(TM)들에게 밀려 늦게 처리되는 현상"
      },
      {
        "major": "발생 3대 원인",
        "minor": "임계영역 · 상호배제 · 선점형",
        "desc": "① 공유 자원 임계영역 존재 ② 뮤텍스/세마포어 상호배제 락 대기 ③ 중간 우선순위 태스크(TM)가 저순위 태스크(TL)의 CPU를 빼앗는 선점형 스케줄링"
      },
      {
        "major": "대표 장애사례",
        "minor": "마르스 패스파인더 리셋",
        "desc": "1997년 화성 탐사선 패스파인더에서 정보 버스 뮤텍스를 둘러싼 우선순위 역전으로 워치독 타이머가 타임아웃되어 시스템이 반복 리셋된 사례"
      }
    ],
    "differentiation": "[유형 A] 화성 탐사선 패스파인더 사례와 2대 해결 프로토콜(상속 vs 상한) 비교\n① 문제 메커니즘: 공유 자원을 쥔 저순위(L)를 중간순위(M)가 선점하여, 결국 자원을 기다리는 고순위(H)가 실행되지 못하는 역전 발생.\n② 우선순위 상속 (Inheritance): 자원을 점유한 저순위(L)에게 고순위(H)의 우선순위를 임시 승격시켜 중간순위(M)의 부당한 선점을 차단.\n③ 우선순위 상한 (Ceiling): 자원마다 접근 가능한 최고 우선순위(Ceiling)를 지정하여 락 획득 시 즉시 상한선으로 격상(상속 체인 원천 차단)."
  },
  {
    "domain": "CAOS",
    "topic": "태스크 우선순위 상속 (Priority Inheritance)",
    "mnemonic": "상·올 (상속·올림)",
    "definition": "우선순위 역전 해결 위해 락 보유 저순위를 높이는 기법",
    "keywords": [
      "우선순위 역전 (Priority Inversion) 해결",
      "우선순위 상속 프로토콜 (PIP)",
      "우선순위 천장/올림 프로토콜 (PCP / Ceiling)",
      "연쇄 블로킹(Chained Blocking) 방지",
      "두음: 상·올"
    ],
    "diagram": "• 우선순위 상속(PIP) : 고순위(TH)가 락 대기 시 ➔ 락 보유 저순위(TL)의 우선순위를 TH로 일시 격상 (중순위 TM 선점 차단)\n• 우선순위 올림(PCP) : 자원을 획득하는 순간 ➔ 해당 자원의 사전 지정 최고 우선순위(천장값)로 즉시 격상!",
    "tableRows": [
      {
        "major": "사후 동적 격상",
        "minor": "우선순위 상속 (Inheritance)",
        "desc": "고순위 태스크(TH)가 락을 요청해 블록되는 시점에, 현재 락을 쥔 저순위 태스크(TL)에게 TH의 우선순위를 물려주어 중순위(TM)에 선점당하지 않고 빨리 임계영역을 빠져나오게 하는 기법"
      },
      {
        "major": "사전 즉시 격상",
        "minor": "우선순위 올림 (Ceiling)",
        "desc": "모든 공유 자원마다 그 자원을 사용할 수 있는 태스크들 중 가장 높은 우선순위(Ceiling)를 미리 부여해 두고, 자원을 획득하는 즉시 해당 최고 우선순위로 승격시키는 기법"
      },
      {
        "major": "비교 구분",
        "minor": "상속(PIP) vs 올림(PCP)",
        "desc": "• 우선순위 상속: 구현이 단순해 일반 RTOS에서 널리 쓰이나 다중 락 사용 시 연쇄 블로킹 및 교착상태 가능성 잔존\n• 우선순위 올림: 모든 태스크의 자원 요구를 사전 파악해야 하나 연쇄 블로킹과 교착상태까지 원천 차단"
      }
    ],
    "differentiation": "[유형 B] 다중 락 점유 시 발생하는 연쇄 상속 체인 지연과 우선순위 상한(Ceiling)으로의 극복\n① 연쇄 상속 문제: L1이 R1을 쥐고 R2를 대기하고, L2가 R2를 쥐고 있는 등 복합 자원 환경에서 우선순위 상속 계산이 연쇄적으로 지연.\n② 상속 체인 루프: 상속 처리 도중 환형 대기가 형성되면 상호배제 시스템 자체가 교착 상태에 빠질 수 있는 부작용 발생.\n③ 극복 대안: 자원을 획득하는 순간 해당 자원의 사전 정의된 최고 우선순위로 즉시 승격시키는 우선순위 천장 프로토콜(PCP) 도입."
  },
  {
    "domain": "CAOS",
    "topic": "메모리 주요 영역",
    "mnemonic": "코·데·힙·스",
    "definition": "프로세스 실행 위해 코드·데이터·힙·스택으로 나눈 구조",
    "keywords": [
      "코드(Text) · 데이터(Data/BSS) · 힙(Heap) · 스택(Stack)",
      "정적 할당 vs 동적 할당 영역",
      "힙 (낮은→높은 주소) vs 스택 (높은→낮은 주소)",
      "두음: 코데힙스"
    ],
    "diagram": "[낮은 주소]  코드(Text: 기계어) ➔ 데이터(전역·정적 변수) ➔ 힙(Heap: 동적할당 ↓)  ... 빈 공간 ...  (↑ 호출 프레임) 스택(Stack)  [높은 주소]",
    "tableRows": [
      {
        "major": "정적 할당 영역",
        "minor": "코드 (Code / Text)",
        "desc": "실행할 프로그램의 기계어 명령어 코드가 저장되는 영역 (컴파일 시 크기 결정, 읽기 전용으로 보호)"
      },
      {
        "major": "정적 할당 영역",
        "minor": "데이터 (Data & BSS)",
        "desc": "전역 변수와 정적(static) 변수가 저장되는 영역으로 프로그램 시작 시 할당되어 종료 시 소멸 (초기화 변수는 Data, 미초기화 변수는 BSS)"
      },
      {
        "major": "동적 할당 영역",
        "minor": "힙 (Heap)",
        "desc": "프로그래머가 런타임에 동적으로 할당·해제(malloc/new)하는 영역으로 낮은 주소에서 높은 주소 방향으로 자라남 (스레드 간 공유)"
      },
      {
        "major": "동적 할당 영역",
        "minor": "스택 (Stack)",
        "desc": "함수 호출 시 매개변수, 복귀 주소, 지역 변수가 저장되는 LIFO 영역으로 높은 주소에서 낮은 주소로 자라남 (스레드별 독립 보유)"
      }
    ],
    "differentiation": "[유형 B] 힙(Heap)과 스택(Stack) 영역 충돌 방지 및 보안 취약점(오버플로우) 대응\n① 영역 간 충돌: 고주소에서 내려오는 스택과 저주소에서 올라가는 힙이 만나면 메모리 파괴가 발생하므로 가상 메모리 기반 경계 검사 필수.\n② 스택 버퍼 오버플로우: 반환 주소(RET) 변조 공격을 방어하기 위해 컴파일러 차원의 스택 카나리(Stack Canary) 및 실행 방지(DEP/NX) 적용.\n③ 메모리 난독화: 공격자가 쉘코드 주소를 예측하지 못하도록 메모리 영역 시작 주소를 무작위화하는 ASLR(Address Space Layout Randomization) 상시 적용."
  },
  {
    "domain": "CAOS",
    "topic": "슬랩 할당자 (Slab Allocator)",
    "mnemonic": "풀·객·캐 / 풀·파·엠",
    "definition": "커널 객체 빈번한 할당 해제 내부 단편화 해소 기법",
    "diagram": "[커널 객체 요청: kmem_cache_alloc()] \n       ↓\n[Slab Cache (예: inode_cache)]\n ├─ Full Slab  : 모든 객체가 사용 중\n ├─ Partial Slab: 일부 객체 사용 가능 ──▶ [즉시 빈 슬랩 객체 반환 (초고속)]\n └─ Empty Slab : 모든 객체가 비어 있음 (필요 시 버디 시스템에 페이지 반환)",
    "tableRows": [
      {
        "major": "핵심 원리",
        "minor": "객체 캐시 (Object Cache)",
        "desc": "프로세스 디스크립터(task_struct), 파일(file), inode 등 자주 쓰이는 커널 객체들을 크기별 전용 캐시로 사전 초기화 관리"
      },
      {
        "major": "슬랩 상태",
        "minor": "Full / Partial / Empty",
        "desc": "완전 사용(Full), 일부 사용(Partial), 완전 비어있음(Empty) 3가지 상태 리스트로 슬랩 페이지들을 링크드 리스트 관리"
      },
      {
        "major": "성능 이점",
        "minor": "내부 단편화 제거 & 고속",
        "desc": "고정 크기 객체에 딱 맞게 슬랩을 채우므로 내부 단편화가 전혀 없으며, 메모리 할당/해제 시 생성자/소멸자 호출 오버헤드 최소화"
      }
    ],
    "keywords": [
      "커널 객체 캐시 (kmem_cache)",
      "Full · Partial · Empty 슬랩",
      "내부 단편화 원천 제거",
      "초고속 할당 (O(1))",
      "버디 시스템 하부 연계"
    ],
    "differentiation": "[유형 A] 슬랩 할당자(Slab Allocator) vs 버디 시스템(Buddy System) 계층 비교\n① 목적 차이: 버디 시스템은 물리 메모리를 2의 거듭제곱 페이지 단위로 할당하는 대용량 기반 관리자이며, 슬랩 할당자는 커널 소형 객체를 잘게 관리하는 상위 할당자.\n② 단편화 대응: 버디 시스템은 외부 단편화를 해결하지만 2^n 할당으로 내부 단편화가 심각한 반면, 슬랩은 객체 크기 맞춤 슬랩으로 내부 단편화를 완벽 해소.\n③ 실무 융합: 리눅스 커널은 버디 시스템으로부터 연속 페이지 프레임을 통째로 할당받은 뒤, 그 위에 슬랩 캐시를 얹어 소형 커널 객체를 초고속 할당하는 2계층 융합 아키텍처 채택."
  },
  {
    "domain": "CAOS",
    "topic": "버디 시스템 (Buddy System)",
    "mnemonic": "이·승·분·합 / 외·단·방",
    "definition": "인접 블록을 분할 병합해 외부 단편화 줄이는 기법",
    "diagram": "[초기 가용 블록: 1024KB]\n       ↓ (100KB 요청 ➔ 128KB 필요)\n[512KB | 512KB] ➔ [256KB | 256KB] ➔ [128KB(할당) | 128KB(버디 대기)]\n       ↓ (해제 시)\n[128KB 해제] ➔ 인접한 버디(128KB)가 비어있으면 즉시 병합 ➔ 256KB ➔ 512KB ➔ 1024KB 환원",
    "tableRows": [
      {
        "major": "할당 알고리즘",
        "minor": "2의 거듭제곱 분할 (Power of 2)",
        "desc": "요청 메모리 크기보다 크거나 같은 가장 작은 2^n 블록을 탐색하고, 필요 시 상위 블록을 절반(Buddy)으로 연속 2분할하여 할당"
      },
      {
        "major": "해제 알고리즘",
        "minor": "인접 버디 고속 병합 (Coalescing)",
        "desc": "블록 반납 시 해당 블록의 주소 비트 연산(XOR)으로 짝궁(Buddy) 블록을 즉시 찾아내고, 인접 버디도 비어 있으면 상위 2^(n+1) 블록으로 자동 병합"
      },
      {
        "major": "장단점",
        "minor": "외부 단편화 최소 vs 내부 단편화",
        "desc": "블록 병합을 통해 외부 단편화를 효과적으로 방지하고 빠른 할당/해제 속도(O(log N))를 제공하나, 65KB 요청 시 128KB를 주어 내부 단편화 발생"
      }
    ],
    "keywords": [
      "2의 거듭제곱 블록 분할",
      "인접 버디(Buddy) 주소 비트 연산",
      "즉시 병합 (Coalescing)",
      "외부 단편화 방지",
      "내부 단편화 트레이드오프"
    ],
    "differentiation": "[유형 B] 버디 시스템의 내부 단편화 한계 극복을 위한 슬랩 할당자 연계 및 컴팩션\n① 내부 단편화 문제: 33KB 요구 시 64KB 블록이 할당되어 최대 50%에 육박하는 내부 메모리 낭비 발생.\n② 슬랩 연계: 소형 메모리 요구는 슬랩 할당자(Slab/Slub)로 위임하여 낭비를 차단하고, 버디 시스템은 순수하게 페이지 단위(4KB 이상) 할당에만 전념.\n③ 메모리 컴팩션 (Compaction): 장기 가동에 따라 대용량 연속 블록 할당이 불가능해질 때, 이동 가능한 페이지들을 한쪽으로 몰아 거대 버디 블록을 재생성."
  },
  {
    "domain": "CAOS",
    "topic": "스래싱 (Thrashing)",
    "mnemonic": "문·하·멀·워·페",
    "definition": "프로세스 과다로 페이지 부재 급증해 CPU 멈추는 현상",
    "keywords": [
      "과도한 페이지 부재 (Page Fault)",
      "CPU 이용률 급락",
      "다중 프로그래밍 정도 (MPD)",
      "워킹셋 (Working Set)",
      "페이지 부재 빈도 (PFF)"
    ],
    "diagram": "[다중 프로그래밍 정도(MPD) 과다 증가] ➔ 프로세스별 프레임 부족 ➔ 연쇄 Page Fault(디스크 스왑 I/O 폭증) ➔ [CPU 이용률 수직 급락: 스래싱!]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "스래싱 현상 및 원인",
        "desc": "다중 프로그래밍 정도가 임계점을 넘어 각 프로세스에 할당된 물리 프레임이 부족해지면서, CPU가 실제 연산보다 페이지 교체(Swap I/O)에 모든 시간을 허비해 CPU 이용률이 급락하는 현상"
      },
      {
        "major": "동적 해결 1",
        "minor": "워킹셋 (Working Set) 모델",
        "desc": "시간 지역성에 기반하여 프로세스가 일정 시간 창(Δ) 동안 집중적으로 참조하는 페이지 집합(Working Set) 전체를 메모리에 동시 상주시켜 페이지 부재를 예방 (보장 불가 시 프로세스 Swap-Out)"
      },
      {
        "major": "동적 해결 2",
        "minor": "PFF (페이지 부재 빈도)",
        "desc": "페이지 부재율(Page Fault Frequency)의 상한선과 하한선을 설정하여, 부재율이 상한선을 넘으면 프레임을 추가 할당하고 하한선보다 낮으면 프레임을 회수하여 직접 제어"
      }
    ],
    "differentiation": "[유형 B] 다중 프로그래밍 정도(MPD) 과다 시 성능 급락 방지를 위한 워킹셋 및 PFF\n① 붕괴 메커니즘: 프로세스 수가 너무 많아지면 각 프로세스가 필요한 최소 프레임을 못 얻어 페이지 폴트가 급증하고 CPU 이용률이 0으로 급락.\n② 워킹셋 (Working Set): 최근 일정 시간(Δ) 동안 참조된 페이지 집합을 워킹셋으로 정의하고, 워킹셋 합이 메모리를 초과하면 프로세스 일시 중지.\n③ 페이지 부재 빈도 (PFF): 프로세스의 페이지 폴트 발생 주기를 측정하여 상한선 초과 시 프레임 추가 할당, 하한선 미달 시 프레임 회수."
  },
  {
    "domain": "CAOS",
    "topic": "메모리 누수 (Memory Leak)",
    "mnemonic": "할·미·고·탐",
    "definition": "자원 고갈 방지 위해 누수 메모리를 탐지·해제하는 기법",
    "keywords": [
      "힙(Heap) 동적 메모리 미해제",
      "가용 메모리 고갈 (OOM)",
      "댕글링 포인터 · 순환 참조",
      "가비지 컬렉션 (GC) & 스마트 포인터"
    ],
    "diagram": "[런타임 Heap 메모리 동적 할당 (malloc/new)] ➔ 참조 포인터 유실 또는 미해제(free 누락) ➔ [Unreachable 가비지 누적] ➔ Out Of Memory 장애!",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "메모리 누수 정의",
        "desc": "프로그램이 동적으로 할당받은 힙(Heap) 메모리를 사용 완료 후 운영체제에 반납하지 않고 참조만 잃어버려, 가용 메모리가 점진적으로 고갈되는 현상"
      },
      {
        "major": "발생 원인",
        "minor": "미해제 및 강한 참조 잔류",
        "desc": "• C/C++: 할당(malloc/new) 후 해제(free/delete) 누락 또는 예외 발생 시 조기 리턴\n• GC 언어(Java/Python): 정적(Static) 컬렉션에 객체 계속 추가, 이벤트 리스너/클로저 미해제, 순환 참조"
      },
      {
        "major": "탐지 및 예방",
        "minor": "RAII · 스마트 포인터 · 분석기",
        "desc": "• 네이티브 언어: 스코프 종료 시 자동 해제되는 RAII 패턴 및 스마트 포인터(unique_ptr, shared_ptr/weak_ptr), Valgrind/ASan 정적·동적 분석\n• 매니지드 언어: 힙 덤프(Heap Dump) 프로파일링 및 약한 참조(WeakReference) 활용"
      }
    ],
    "differentiation": "[유형 B] 장기 가동 서버의 메모리 누수 선제 감지 및 자동 회복을 위한 엔지니어링\n① 런타임 파괴성: 미해제 동적 메모리가 누적되면 시스템 여유 메모리가 고갈되어 스왑 스래싱 발생 및 OOM Killer에 의해 프로세스 강제 종료.\n② CI/CD 정적 검증: 코드 빌드 단계에서 정적 코드 분석 도구(SonarQube, Coverity)로 해제 누락 및 포인터 누실을 선제 차단.\n③ APM 동적 프로파일링: 운영 환경에서 메모리 사용량 기울기(Heap Slope)를 상시 모니터링하고, Valgrind/pprof 덤프 및 무중단 롤링 재기동 연계."
  },
  {
    "domain": "CAOS",
    "topic": "캐시 메모리 (Cache Memory)",
    "mnemonic": "시·공·순 / 사·쓰·호·교 / 직·연·집",
    "definition": "CPU와 주기억장치 속도 차 완화 위해 둔 고속 메모리",
    "keywords": [
      "CPU-주기억장치 속도 완충 (SRAM)",
      "시간 · 공간 · 순차 지역성 (시공순)",
      "사상: 직접 · 완전연관 · 집합연관 (직연집)",
      "Write-Through vs Write-Back",
      "두음: 사쓰호교 / 직연집"
    ],
    "diagram": "[CPU 레지스터] ⇄ (워드 전송) ⇄ [L1/L2/L3 캐시 (SRAM)] ⇄ (블록/라인 전송) ⇄ [주기억장치 (DRAM)]\n• 캐시 사상 : 직접 사상 (1:1 고정)  |  완전 연관 (어디든 배치)  |  집합 연관 (N-Way 세트 내 자유 배치)",
    "tableRows": [
      {
        "major": "설계 원리",
        "minor": "지역성 (시간·공간·순차)",
        "desc": "• 시간 지역성: 최근 참조된 주소를 곧 다시 참조 (루프, 스택 변수)\n• 공간 지역성: 참조된 주소 주변의 인접 메모리를 연속 참조 (배열 순회, 캐시 블록 프리페치)\n• 순차 지역성: 분기가 없는 한 명령어가 저장된 순서대로 인출"
      },
      {
        "major": "캐시 사상",
        "minor": "직접 · 연관 · 집합연관",
        "desc": "• 직접 사상(Direct): 메모리 블록이 정해진 단일 캐시 라인에만 매핑 (회로 단순·고속이나 충돌 미스 빈발)\n• 완전 연관(Associative): 빈 캐시 라인 어디든 적재 가능 (적중률 최고이나 전체 태그 비교 비용 큼)\n• 집합 연관(Set-Associative): 정해진 세트 내 N개 라인에 연관 배치하는 실무 표준(N-Way)"
      },
      {
        "major": "쓰기 정책",
        "minor": "Write-Through vs Write-Back",
        "desc": "• Write-Through(즉시 쓰기): 캐시와 주기억장치에 동시 기록 (일관성 유지 쉬우나 버스 트래픽·쓰기 지연 증가)\n• Write-Back(나중 쓰기): 캐시에만 먼저 기록(Dirty Bit 표시) 후 블록 교체 시점에 주기억장치에 일괄 반영 (고성능)"
      }
    ],
    "differentiation": "[유형 A] 3대 캐시 매핑 방식(직접 매핑 vs 완전 연관 vs 세트 연관) 심층 비교\n① 직접 매핑 (Direct Mapped): 메모리 블록이 오직 지정된 1개 라인에만 들어가 구조가 단순하고 빠르나 동일 슬롯 충돌 미스 빈발.\n② 완전 연관 (Fully Associative): 어느 캐시 라인에나 자유롭게 들어갈 수 있어 충돌 미스가 없으나 전체를 동시 비교해야 해 하드웨어 비용 과다.\n③ 세트 연관 (Set Associative): 캐시를 여러 개의 세트로 나누고 세트 내 N개 슬롯을 두어(2-Way, 8-Way 등) 직접과 연관의 장점을 절충(현대 CPU 표준)."
  },
  {
    "domain": "CAOS",
    "topic": "MMU (Memory Management Unit)",
    "mnemonic": "논·물·베·한",
    "definition": "메모리 보호 위해 논리주소를 물리주소로 변환하는 장치",
    "keywords": [
      "논리(가상) 주소 → 물리 주소 실시간 변환",
      "재배치 레지스터 (Base Register)",
      "한계 레지스터 (Limit Register)",
      "메모리 보호 및 권한 검증"
    ],
    "diagram": "[CPU 논리 주소 요청] ➔ [MMU: 주소 < Limit 검증 (위반 시 Trap) + Base 시작주소 가산 / 페이지 테이블 변환] ➔ [물리 메모리(RAM) 주소]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "메모리 관리 하드웨어",
        "desc": "CPU 내부에 탑재되어 프로그램 실행 중 발생하는 논리(가상) 주소를 실제 주기억장치의 물리 주소로 동적 변환해 주는 하드웨어 유닛"
      },
      {
        "major": "메모리 보호",
        "minor": "Base & Limit 레지스터",
        "desc": "• 재배치(Base) 레지스터: 프로세스의 시작 물리 주소를 더해주어 주소 재배치 수행\n• 한계(Limit) 레지스터: 프로세스가 자신에게 허용된 주소 범위를 벗어나 타 프로세스나 커널 영역을 침범하면 즉시 인터럽트(Trap) 발생"
      },
      {
        "major": "페이지 테이블",
        "minor": "PTBR & 권한 비트",
        "desc": "페이지 테이블 기준 레지스터(PTBR)를 참조하여 가상 페이지를 물리 프레임으로 변환하며 읽기/쓰기/실행(R/W/X) 권한을 하드웨어 수준에서 검증"
      }
    ],
    "differentiation": "[유형 C] 가상화 환경에서 가상 메모리 변환 오버헤드 극복을 위한 하드웨어 가속(EPT/NPT)\n① 2계층 주소 변환: 게스트 가상주소 ➔ 게스트 물리주소 ➔ 호스트 물리주소로 이어지는 2단계 변환으로 인해 소프트웨어 섀도우 페이지 테이블 오버헤드 극심.\n② 하드웨어 확장: 인텔 EPT(Extended Page Tables), AMD NPT(Nested Page Tables)를 MMU에 내장하여 2단계 주소 변환을 하드웨어 레벨에서 고속 처리.\n③ 기술사적 제언: 컨테이너 및 클라우드 가상화 환경에서 MMU의 하드웨어 페이징 가속 기능 활성화가 I/O 및 데이터베이스 워크로드 처리량 결정적 좌우."
  },
  {
    "domain": "CAOS",
    "topic": "TLB (Translation Lookaside Buffer)",
    "mnemonic": "고·적·미·폴",
    "definition": "주소 변환 단축 위해 최근 페이지 매핑 저장한 캐시",
    "keywords": [
      "페이지 테이블 고속 연관 캐시",
      "시간 지역성 기반 주소 변환 가속",
      "TLB Hit / Miss & 유효 접근 시간 (EAT)",
      "TLB Reach (Huge Page) & ASID"
    ],
    "diagram": "CPU 가상주소 요청 ➔ [MMU 내 TLB 캐시 조회]\n ├─ TLB Hit  ➔ RAM 페이지 테이블 접근 생략! 즉시 물리 메모리 데이터 접근 (메모리 1회 접근)\n └─ TLB Miss ➔ RAM 페이지 테이블 조회 후 TLB에 등록하고 물리 메모리 접근 (메모리 2회 접근)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "주소 변환 고속 버퍼",
        "desc": "페이지 테이블이 주기억장치(RAM)에 위치해 데이터 1회 참조 시 메모리에 2번 접근해야 하는 성능 저하를 막기 위해, 최근 변환된 [가상 페이지 → 물리 프레임] 매핑을 저장한 MMU 내부 초고속 캐시"
      },
      {
        "major": "동작 원리",
        "minor": "완전/집합 연관 탐색",
        "desc": "시간 지역성에 따라 최근 참조한 페이지 번호를 병렬 하드웨어(연관 메모리)로 즉시 검색하여 TLB 적중(Hit) 시 변환 지연을 제거"
      },
      {
        "major": "성능 최적화",
        "minor": "Huge Page & ASID",
        "desc": "• Huge Page: 페이지 크기를 키워(예: 2MB/1GB) 적은 TLB 엔트리로 넓은 메모리를 커버(TLB Reach 확대)\n• ASID(Address Space ID): 문맥교환 시 TLB 전체가 비워지는(Flush) 오버헤드를 막기 위해 프로세스 식별 태그 부여"
      }
    ],
    "differentiation": "[유형 B] 대용량 인메모리 DB 구동 시 TLB 커버리지 한계 극복을 위한 Huge Page 도입\n① TLB Reach 한계: 기본 4KB 페이지 크기 환경에서 수십 GB 메모리를 사용하면 수백만 개 엔트리가 필요하여 TLB 캐시 미스가 급증함.\n② Huge Page 도입: 페이지 단위를 2MB 또는 1GB로 확대하여 동일한 TLB 엔트리 개수로 수천 배 넓은 메모리 영역을 커버(TLB Reach 확대).\n③ 실무 적용: Redis, SAP HANA, Oracle SGA 등 대규모 데이터베이스 환경에서 Linux HugePage를 필수 구성하여 유효 메모리 접근 시간(EAT) 대폭 단축."
  },
  {
    "domain": "CAOS",
    "topic": "DMA (Direct Memory Access)",
    "mnemonic": "버·전·인 / 사·버",
    "definition": "CPU 개입 없이 입출력장치와 메모리가 직접 전송 기법",
    "keywords": [
      "CPU 개입 없는 고속 I/O 전송",
      "PIO(프로그램 입출력) 병목 해소",
      "DMA 컨트롤러 & 버스 마스터",
      "사이클 스틸링 (Cycle Stealing) · 버스트 모드"
    ],
    "diagram": "[CPU] ──(1. 전송 명령 하달)──▶ [DMA 컨트롤러] ──(2. 시스템 버스 제어권 획득 후 직접 고속 전송)──▶ [I/O 장치 ⇄ 주기억장치(RAM)]\n                                     └──(3. 전체 블록 전송 완료 후 인터럽트 1회 보고)──▶ [CPU]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "직접 메모리 접근",
        "desc": "입출력 장치와 주기억장치 간 대량 데이터 전송 시 CPU가 매 워드마다 개입하는 오버헤드를 없애기 위해, DMA 제어기가 직접 버스를 제어해 데이터를 전송하고 완료 시에만 CPU에 인터럽트를 보내는 기법"
      },
      {
        "major": "동작 절차",
        "minor": "버스 허가 → 전송 → 완료 보고",
        "desc": "① CPU가 DMA에 입출력 주소·크기 전달 ② DMA가 버스 요청(BR) 및 허가(BG) 획득 ③ CPU 개입 없이 메모리-I/O 간 직접 전송 ④ 완료 인터럽트 발생"
      },
      {
        "major": "전송 모드",
        "minor": "Cycle Stealing & Burst",
        "desc": "• 사이클 스틸링(Cycle Stealing): CPU가 버스를 쓰지 않는 사이클을 양보받아 한 워드씩 전송 (CPU 지연 최소화)\n• 버스트 모드(Burst Mode): 데이터 블록 전체 전송이 끝날 때까지 DMA가 버스를 독점하여 초고속 전송"
      }
    ],
    "differentiation": "[유형 A] 사이클 스틸링(Cycle Stealing) vs 버스트 모드(Burst Mode) 전송 방식 비교\n① 사이클 스틸링: CPU가 시스템 버스를 사용하지 않는 유휴 주기마다 1워드씩 버스 제어권을 훔쳐 전송하므로 CPU 작업 지연이 거의 없음.\n② 버스트 모드: 대량의 데이터 블록을 전송하기 위해 DMA 컨트롤러가 버스를 완전히 독점하여 초고속 전송하나 CPU가 버스 접근 대기 상태에 빠짐.\n③ 현대적 진화 (Scatter-Gather): 물리적으로 흩어진 메모리 버퍼들을 DMA 컨트롤러가 체인으로 연결해 한 번의 I/O 명령으로 연속 전송 처리."
  },
  {
    "domain": "CAOS",
    "topic": "파이프라인 해저드 (Pipeline Hazard)",
    "mnemonic": "구·데·제 / 전·인·레·분",
    "definition": "구조·데이터·제어 문제로 파이프라인 처리 방해하는 현상",
    "keywords": [
      "구조적 · 데이터 · 제어 해저드 (구데제)",
      "데이터 의존성 (RAW · WAR · WAW)",
      "전방전달 (Forwarding) & 인터락 (Stall)",
      "레지스터 재명명 (Register Renaming)",
      "분기 예측 (Branch Prediction) & BTB"
    ],
    "diagram": "[명령어 파이프라인: IF(인출) → ID(해독) → EX(실행) → MEM(메모리) → WB(기록)]\n• 3대 해저드 : 구조적(HW 자원 충돌)  |  데이터(RAW·WAR·WAW 종속)  |  제어(분기 명령어 목적지 미정)",
    "tableRows": [
      {
        "major": "구조적 해저드",
        "minor": "자원 충돌 & 하버드 구조",
        "desc": "• 원인: 명령어 인출과 데이터 접근이 동시에 단일 메모리에 접근하는 등 HW 자원 충돌로 발생\n• 해결: 명령어 캐시와 데이터 캐시 분리(하버드 구조), 메모리 인터리빙, 기능 유닛 추가"
      },
      {
        "major": "데이터 해저드",
        "minor": "RAW · WAR · WAW",
        "desc": "• 원인: 이전 명령어의 실행 결과에 후속 명령어가 종속되어 발생 (진성 의존성 RAW, 반의존성 WAR, 출력 의존성 WAW)\n• 해결: 연산 직후 결과를 바로 넘기는 전방전달(Forwarding), 하드웨어 인터락(Stall), 레지스터 재명명(WAR/WAW 제거)"
      },
      {
        "major": "제어 해저드",
        "minor": "분기 예측 & 지연 분기",
        "desc": "• 원인: 조건 분기(Branch) 명령어의 점프 여부가 결정될 때까지 후속 명령어를 인출하지 못해 버블 발생\n• 해결: 동적 분기 예측(Branch Prediction), 분기 타겟 버퍼(BTB), 지연 분기(Delayed Branch)"
      }
    ],
    "differentiation": "[유형 A] 3대 파이프라인 해저드(구조적 · 데이터 · 제어) 원인과 해결 아키텍처 비교\n① 구조적 해저드: 명령어 인출과 데이터 메모리 접근이 동시 발생하여 충돌 ➔ 명령어와 데이터 버스를 분리한 하버드(Harvard) 아키텍처로 해결.\n② 데이터 해저드 (RAW, WAR, WAW): 이전 연산 결과가 쓰이기 전에 다음 명령이 읽으려 함 ➔ 전방전달(Forwarding) 및 레지스터 재명명(Renaming)으로 스톨 최소화.\n③ 제어 해저드: 분기문 조건 판정 전까지 다음 명령을 알 수 없음 ➔ 분기 예측(Branch Prediction) 및 분기 타깃 버퍼(BTB)로 투기적 실행(Speculative Execution)."
  },
  {
    "domain": "CAOS",
    "topic": "병렬처리 시스템 (Parallel Processing System)",
    "mnemonic": "단·슈·스·브 / SI·SM·MI·MM",
    "definition": "연산 속도 향상 위해 복수 명령·코어를 동시 수행 체계",
    "keywords": [
      "플린 분류 (SISD · SIMD · MISD · MIMD)",
      "슈퍼파이프라인 vs 슈퍼스칼라",
      "VLIW (컴파일러 정적 스케줄링)",
      "SMP (대칭형 멀티프로세서) vs MPP"
    ],
    "diagram": "• 명령어 수준(ILP) : 슈퍼스칼라 (복수 파이프라인 동시 실행)  |  VLIW (컴파일러가 독립 명령어들을 긴 워드로 묶어 실행)\n• 플린(Flynn) 분류 : SISD (단일) / SIMD (단일 명령·다중 데이터 배열, GPU) / MISD / MIMD (멀티코어 SMP · 분산 MPP)",
    "tableRows": [
      {
        "major": "명령어 병렬성",
        "minor": "슈퍼스칼라 vs VLIW",
        "desc": "• 슈퍼스칼라: CPU 내부에 여러 개의 실행 파이프라인을 두고 하드웨어가 동적으로 한 클럭에 복수 명령어 동시 실행(CPI < 1)\n• VLIW: 컴파일러가 컴파일 시점에 동시 수행 가능한 독립 명령어들을 하나의 긴 명령어로 묶어 실행 (HW 구조 단순화)"
      },
      {
        "major": "Flynn 분류",
        "minor": "SISD · SIMD · MISD · MIMD",
        "desc": "• SIMD: 하나의 명령어로 수많은 데이터 스트림을 동시 연산 (벡터 프로세서, GPU, 멀티미디어 확장 명령)\n• MIMD: 여러 프로세서가 각자 다른 명령어로 다른 데이터를 비동기 병렬 처리 (현대 멀티코어 및 클러스터 표준)"
      },
      {
        "major": "메모리 결합",
        "minor": "SMP (강결합) vs MPP (약결합)",
        "desc": "• SMP(대칭형 멀티프로세서): 복수 코어가 단일 공유 메모리와 버스를 공유 (캐시 일관성 필요)\n• MPP(대규모 병렬처리): 각 노드가 독립 CPU·메모리를 갖고 고속 네트워크로 메시지 패싱 통신 (초대규모 확장 용이)"
      }
    ],
    "differentiation": "[유형 A] 대칭형 멀티프로세서(SMP) vs 불균일 메모리 접근(NUMA) vs 대규모 병렬처리(MPP) 비교\n① SMP (Symmetric Multiprocessing): 모든 CPU가 단일 공유 메모리와 버스를 사용해 프로그래밍이 단순하나 버스 병목으로 코어 확장 한계(최대 수십 코어).\n② NUMA (Non-Uniform Memory Access): 코어별 로컬 메모리를 두고 고속 인터커넥트로 연결해 확장성을 높였으나 원격 메모리 접근 시 지연시간 불균일 발생.\n③ MPP (Massive Parallel Processing): 자체 CPU와 메모리를 가진 독립 노드들을 고속 네트워크로 연결한 비공유(Shared-Nothing) 구조로 무한 수평 확장."
  },
  {
    "domain": "CAOS",
    "topic": "DAS (Direct Attached Storage)",
    "mnemonic": "직·케·단·독",
    "definition": "구축 단순화 위해 서버와 저장장치를 케이블 직결한 방식",
    "keywords": [
      "서버-스토리지 직접 케이블 연결",
      "파일시스템 서버 호스트 직접 관리",
      "SATA · SAS · NVMe 인터페이스",
      "단순·저비용 vs 공유 불가"
    ],
    "diagram": "[서버 호스트 (OS 파일시스템)] ──(전용 케이블 직접 연결: SAS / SATA / NVMe)──▶ [외장 디스크 어레이 (DAS)] (타 서버와 직접 공유 불가)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "직접 연결 스토리지",
        "desc": "네트워크 스위치를 거치지 않고 서버에 저장장치를 전용 케이블로 직접 연결하여 사용하는 방식"
      },
      {
        "major": "핵심 강점",
        "minor": "속도 및 비용 효율",
        "desc": "네트워크 프로토콜 변환 오버헤드가 없어 초기 속도가 빠르고 구축 비용 및 관리가 가장 단순함"
      },
      {
        "major": "주요 한계",
        "minor": "스토리지 사일로(Silo)",
        "desc": "다른 서버와 저장 공간을 직접 공유하기 어렵고 연결 포트 수 제한으로 인해 대규모 확장성이 떨어짐"
      }
    ],
    "differentiation": "[유형 A] 3대 엔터프라이즈 스토리지(DAS vs NAS vs SAN) 아키텍처 심층 비교\n① 연결 구조: DAS는 서버와 스토리지를 SAS/SATA 케이블로 직접 1:1 연결하여 구성이 단순하고 저렴하나 스토리지 공유 불가 및 확장성 한계.\n② NAS: 일반 이더넷 LAN 망에 연결되어 파일(File) 단위로 다수 서버가 데이터를 공유(NFS/SMB)하나 네트워크 트래픽 병목 상존.\n③ SAN: 전용 광채널(FC) 고속 네트워크를 통해 블록(Block) 단위로 스토리지를 할당하여 초고속·저지연 대규모 엔터프라이즈 DB에 최적."
  },
  {
    "domain": "CAOS",
    "topic": "NAS (Network Attached Storage)",
    "mnemonic": "이·파·공·자",
    "definition": "네트워크 파일 공유 위해 이더넷 망에 연결된 저장 방식",
    "keywords": [
      "이더넷(TCP/IP) 기반 네트워크 연결",
      "파일(File) 단위 스토리지 공유",
      "NFS (리눅스/유닉스) · SMB/CIFS (윈도우)",
      "자체 파일시스템 탑재"
    ],
    "diagram": "[다수 클라이언트/서버] ──(일반 LAN TCP/IP 이더넷 스위치: NFS / SMB 프로토콜)──▶ [NAS 스토리지 (자체 OS·파일시스템 탑재)]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "네트워크 결합 스토리지",
        "desc": "기존 LAN(TCP/IP) 네트워크에 연결되어 여러 클라이언트와 서버에 파일(File) 단위로 저장 공간을 공유하는 전용 파일 서버"
      },
      {
        "major": "공유 프로토콜",
        "minor": "NFS & SMB/CIFS",
        "desc": "NAS 장비 내부에 자체 파일시스템이 내장되어 있으며, 리눅스/유닉스 환경은 NFS, 윈도우 환경은 SMB/CIFS 프로토콜로 마운트"
      },
      {
        "major": "장단점",
        "minor": "공유 편의성 vs 대역폭 병목",
        "desc": "• 강점: 이기종 OS 간 파일 공유가 매우 쉽고 구축 비용이 저렴\n• 한계: 일반 이더넷 망을 공유하므로 트래픽 병목과 지연이 발생해 고성능 DB 트랜잭션 처리에는 부적합"
      }
    ],
    "differentiation": "[유형 B] 일반 이더넷 TCP/IP 통신 오버헤드 극복을 위한 고속 스토리지 네트워킹\n① 한계 원인: 파일 공유를 위해 OS 파일시스템 계층과 TCP/IP 프로토콜 스택을 모두 통과하므로 CPU 부하와 패킷 지연이 발생.\n② 극복 기술: 10GbE/40GbE 광네트워크 도입 및 CPU를 거치지 않고 NIC이 메모리에 직접 접근하는 RoCE(RDMA over Converged Ethernet) 적용.\n③ 분산 NAS: 비정형 대용량 파일 폭증에 대응하기 위해 Ceph, GlusterFS 등 스케일 아웃 분산 파일 스토리지로 진화."
  },
  {
    "domain": "CAOS",
    "topic": "SAN (Storage Area Network)",
    "mnemonic": "광·블·스·고",
    "definition": "초고속 블록 입출력 위해 광채널 망으로 연결한 스토리지",
    "keywords": [
      "광채널(FC) / iSCSI 전용 고속 네트워크",
      "블록(Block) 단위 스토리지 할당",
      "SAN 스위치 · HBA 카드 · LUN",
      "초고속·저지연 엔터프라이즈 DB/HA 최적"
    ],
    "diagram": "[업무 서버들 (HBA 카드 장착)] ──(전용 Fibre Channel 광스위치 / iSCSI 고속망)──▶ [대규모 공유 스토리지 풀 (블록 단위 LUN 할당)]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "스토리지 전용 고속망",
        "desc": "일반 LAN과 분리된 별도의 광채널(FC) 또는 고속 네트워크(iSCSI)로 서버들과 스토리지를 연결해 블록(Block) 단위로 디스크를 할당하는 아키텍처"
      },
      {
        "major": "동작 특성",
        "minor": "블록 수준 인식 (LUN)",
        "desc": "파일시스템을 서버 호스트가 직접 관리하며, 서버 입장에서는 원격 스토리지 공간(LUN)이 마치 로컬에 장착된 물리 디스크처럼 인식됨"
      },
      {
        "major": "장단점",
        "minor": "초고성능 vs 구축 고비용",
        "desc": "• 강점: LAN 병목이 전혀 없는 초고속·저지연 I/O를 보장하며 서버 HA 클러스터링 및 미션 크리티컬 DB에 최적\n• 한계: 전용 HBA 어댑터와 FC 스위치 도입 등 초기 구축 및 운영 비용이 높음"
      }
    ],
    "differentiation": "[유형 A] 광채널 FC-SAN vs IP 기반 iSCSI 및 차세대 NVMe-oF SAN 비교\n① FC-SAN: 전용 Fibre Channel HBA 카드와 광스위치를 사용하여 32/64Gbps의 무손실 초고속 블록 전송을 제공하나 구축 비용이 극도로 높음.\n② iSCSI: 기존 이더넷 네트워크 인프라 위에서 SCSI 명령을 캡슐화 전송하여 도입 비용이 저렴하나 패킷 오버헤드 발생.\n③ NVMe-oF (over Fabrics): 초고속 NVMe 프로토콜을 광채널이나 RDMA 네트워크에 적용하여 플래시 스토리지의 마이크로초(μs) 지연시간을 네트워크 전반에 구현."
  },
  {
    "domain": "CAOS",
    "topic": "TPM (Trusted Platform Module)",
    "mnemonic": "신·측·밀·원",
    "definition": "무결성 검증과 암호키 보호 위해 보드에 장착한 보안 칩",
    "keywords": [
      "하드웨어 기반 신뢰점 (Root of Trust)",
      "암호키 생성·안전 격리",
      "PCR 레지스터 & 측정 부팅 (Measured Boot)",
      "밀봉 (Sealing) & 원격 증명 (Attestation)",
      "BitLocker 연동"
    ],
    "diagram": "[전원 인가] ➔ [BIOS/UEFI → 부트로더 → OS 커널 해시값 순차 측정] ➔ [TPM 내부 PCR 레지스터에 누적 기록] ➔ [무결성 확인 후 암호키 해제]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "하드웨어 신뢰점 (RoT)",
        "desc": "메인보드에 탑재되어 암호키 생성·보호, 하드웨어 난수 생성, 시스템 무결성 검증을 수행하는 국제 표준(TCG TPM 2.0) 보안 마이크로컨트롤러"
      },
      {
        "major": "내부 구성",
        "minor": "EK · SRK · PCR 레지스터",
        "desc": "• EK(Endorsement Key): 칩 제조 시 주입되는 고유 불변 식별 키\n• SRK(Storage Root Key): 사용자 암호키들을 계층적으로 보호하는 루트 키\n• PCR(Platform Configuration Register): 부팅 단계별 SW 해시 측정값을 누적 확장(Extend) 기록하는 레지스터"
      },
      {
        "major": "핵심 보안기능",
        "minor": "측정 부팅 · 밀봉 · 원격 증명",
        "desc": "• 측정 부팅(Measured Boot): 부팅 체인의 해시값을 PCR에 기록해 부트킷·루트킷 변조 탐지\n• 밀봉(Sealing) 및 원격 증명: PCR 값이 정상 상태일 때만 디스크 암호화 키(BitLocker)를 해제하고 외부 서버에 단말 무결성 증명"
      }
    ],
    "differentiation": "[유형 C] 제로 트러스트 보안 환경에서 기기 무결성 검증을 위한 하드웨어 기반 신뢰점(Root of Trust)\n① 측정 부팅 (Measured Boot): 전원 인가 시 UEFI, 부트로더, OS 커널의 해시값을 순차 계산하여 TPM 내부의 PCR 레지스터에 위변조 불가하게 누적 기록.\n② 데이터 밀봉 (Sealing): 시스템의 소프트웨어 상태가 사전에 승인된 정상 상태와 완전히 일치할 때만 복호화 키를 반환하여 데이터 유출 원천 차단.\n③ 원격 증명 (Remote Attestation): 단말이 기업 사내망에 접속할 때 자신의 무결성 측정값을 암호화 서명하여 정책 결정소(PDP)에 제출하는 제로 트러스트 핵심 축."
  },
  {
    "domain": "CAOS",
    "topic": "가트너(Gartner) 전략 기술 트렌드",
    "mnemonic": "에·하·그·양·공",
    "definition": "미래 경쟁력 위해 에이전틱AI·차세대 컴퓨팅 조망 체계",
    "keywords": [
      "에이전틱 AI (Agentic AI)",
      "하이브리드 컴퓨팅 (Hybrid Computing)",
      "에너지 효율적 컴퓨팅 (Green IT)",
      "양자 이후 암호화 (PQC)",
      "공간 컴퓨팅 & 앰비언트 인텔리전스"
    ],
    "diagram": "[AI 지능화] 에이전틱 AI · 거대행동모델 · 다중기능 로봇\n[차세대 컴퓨팅/신뢰] 하이브리드 컴퓨팅(CPU+GPU+양자+뉴로모픽) · 에너지 효율 컴퓨팅 · 양자내성암호(PQC) · 허위정보 보안",
    "tableRows": [
      {
        "major": "AI 자율화",
        "minor": "에이전틱 AI & 다중기능 로봇",
        "desc": "인간의 개입 없이 스스로 목표를 분석·계획하고 외부 도구를 호출해 복합 과업을 수행하는 자율형 에이전틱 AI 및 범용 작업 로봇 확산"
      },
      {
        "major": "컴퓨팅 혁신",
        "minor": "하이브리드 컴퓨팅",
        "desc": "CPU, GPU, AI ASIC, 뉴로모픽, 양자 컴퓨팅, 광학 컴퓨팅 등 서로 다른 연산 패러다임을 조합·오케스트레이션하여 단일 기술 한계를 돌파"
      },
      {
        "major": "지속가능 인프라",
        "minor": "에너지 효율적 컴퓨팅",
        "desc": "AI 데이터센터의 전력 병목과 탄소 배출을 해결하기 위해 저전력 반도체(NPU/PIM), 액침 냉각, 고효율 그린 알고리즘을 결합하는 아키텍처"
      },
      {
        "major": "신뢰와 보안",
        "minor": "양자 이후 암호화 (PQC)",
        "desc": "양자 컴퓨터에 의한 기존 공개키 암호(RSA, ECC) 해독 위협에 대응하여 격자 기반 등 양자내성암호(PQC)로의 전환 및 암호 민첩성 확보"
      }
    ],
    "differentiation": "[유형 C] 에이전틱 AI(Agentic AI) 확산과 AI 거버넌스(TRiSM) 및 하이브리드 인프라 전략\n① 자율적 에이전트: 단순 질의응답을 넘어 목표를 스스로 계획·추론하고 API 도구를 사용해 복합 업무를 완수하는 에이전틱 AI가 핵심 트렌드 선도.\n② 신뢰 및 리스크 거버넌스 (AI TRiSM): 자율 에이전트의 환각, 탈옥, 편향을 통제하기 위해 신뢰성, 위험, 보안 모델을 인프라 전 계층에 내재화.\n③ 차세대 컴퓨팅: AI 전력 소모 폭증을 감당하기 위해 뉴로모픽, PQC, 에너지 효율적 클라우드 인프라로의 체질 개선 필수."
  },
  {
    "domain": "AI",
    "topic": "전문가 혼합 (MoE, Mixture of Experts)",
    "mnemonic": "게·전·희 (Gating·Expert·Sparse)",
    "definition": "연산 효율 위해 게이팅 전문가만 선택 활성화하는 모델",
    "keywords": [
      "Sparse Activation (희소 활성화)",
      "Gating Network (Router)",
      "Expert (FFN 서브네트워크)",
      "Top-K 라우팅",
      "Load Balancing Loss",
      "활성 파라미터 ≪ 총 파라미터",
      "Dense 모델 대비 추론 효율"
    ],
    "diagram": "[입력 토큰] → [Self-Attention] → [Gating Network(Router)] ─ Top-K 선택 ─┬→ [Expert 1] ─┐\n                                                                      ├→ [Expert 2] ─┼→ [가중합 결합] → [출력]\n                                    (선택되지 않은 Expert 3…N은 연산 생략) ┴→ [Expert N] ─┘",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "희소 활성(Sparse) 구조",
        "desc": "입력 토큰마다 전체 전문가 중 일부(Top-K)만 활성화하여 모델 용량(파라미터)은 키우고 실제 연산량은 억제하는 구조"
      },
      {
        "major": "구성요소",
        "minor": "게이팅 네트워크 (Router)",
        "desc": "토큰별로 적합한 전문가를 선택하고 선택 가중치(Softmax 확률)를 산출"
      },
      {
        "major": "구성요소",
        "minor": "전문가 (Expert)",
        "desc": "트랜스포머의 FFN 층을 N개로 복제한 독립 서브네트워크로, 선택된 전문가만 순전파 수행"
      },
      {
        "major": "구성요소",
        "minor": "결합기 (Combiner)",
        "desc": "선택된 전문가 출력을 게이팅 가중치로 가중합하여 다음 층으로 전달"
      },
      {
        "major": "학습·운영",
        "minor": "로드 밸런싱 손실",
        "desc": "특정 전문가로 토큰이 쏠리는 현상 방지를 위한 보조 손실(Auxiliary Loss) 및 용량 한도(Capacity Factor) 적용"
      },
      {
        "major": "핵심 원리",
        "minor": "활성 파라미터 효율",
        "desc": "총 파라미터 대비 활성 파라미터가 작아 추론 FLOPs 절감, 단 전체 전문가를 메모리에 적재해야 하는 부담은 잔존"
      }
    ],
    "differentiation": "[비교] Dense Transformer vs MoE 비교\n구분 | Dense Transformer | MoE\n활성 파라미터 | 전체 100% 활성 | Top-K 전문가만 활성 (일부)\n연산량(FLOPs) | 파라미터에 비례 증가 | 총 파라미터 대비 낮음\n메모리 요구 | 모델 크기만큼 | 전체 전문가 적재 필요 (높음)\n학습 난이도 | 상대적 안정 | 라우팅 쏠림·불안정 (로드 밸런싱 필요)\n확장성 | 연산량 비례 확장 | 용량 대비 비용 효율적 확장\n[기술사적 제언] MoE는 연산 효율은 높으나 메모리·통신(All-to-All) 병목이 있으므로 전문가 병렬화와 라우팅 안정화(로드 밸런싱) 설계를 함께 고려해야 함"
  },
  {
    "domain": "AI",
    "topic": "임베딩 (Embedding)",
    "mnemonic": "TTO WFB",
    "definition": "단어 유사도 파악 위해 벡터로 매핑하는 표현 기법",
    "keywords": [
      "단어의 벡터화",
      "TDM (Term-Document Matrix)",
      "TF-IDF",
      "One-hot Encoding",
      "Word2Vec (CBOW·Skip-gram)",
      "FastText (n-gram)",
      "ELMo·BERT (문맥 기반)"
    ],
    "diagram": "ai_embedding.png",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "단어 간 유사도·중요도 파악을 위해 단어를 고차원 벡터 공간에 매핑하여 배치하는 기술"
      },
      {
        "major": "통계 기반",
        "minor": "TDM (BoW)",
        "desc": "단어 등장 빈도로 단어 사전(주머니)을 만들고 빈도를 행렬로 표현"
      },
      {
        "major": "통계 기반",
        "minor": "TF-IDF",
        "desc": "TF(문서 내 빈도)와 IDF(문서 빈도 DF의 역수)로 단어 중요도 산출, DF가 높으면 흔한 단어로 판단"
      },
      {
        "major": "통계 기반",
        "minor": "One-hot Encoding",
        "desc": "해당 컬럼만 1, 나머지는 0으로 표시 (희소·고차원, 유사도 표현 불가)"
      },
      {
        "major": "신경망 기반",
        "minor": "Word2Vec",
        "desc": "CBOW: 주변 단어로 해당 위치 단어 추론 / Skip-gram: 입력 단어로 주변 단어 추론"
      },
      {
        "major": "신경망 기반",
        "minor": "FastText",
        "desc": "단어를 n-gram(부분 단어)으로 분해하여 처리, 미등록어(OOV) 대응"
      },
      {
        "major": "문맥 기반",
        "minor": "ELMo·BERT",
        "desc": "ELMo: 사전 훈련된 양방향 언어모델 / BERT: 트랜스포머 인코더 적용 문맥 임베딩"
      }
    ],
    "differentiation": "[비교] 통계 기반 vs 인공신경망 기반 임베딩\n구분 | 통계 기반 (TDM·TF-IDF·One-hot) | 신경망 기반 (Word2Vec·FastText·BERT)\n표현 방식 | 희소(Sparse) 고차원 벡터 | 밀집(Dense) 저차원 벡터\n의미 반영 | 빈도 중심, 의미 유사도 반영 한계 | 주변 문맥 학습으로 의미 유사도 반영\n다의어 처리 | 불가 | BERT·ELMo는 문맥별 벡터로 가능\n비용 | 구현 단순·연산 저렴 | 사전 학습 필요 (데이터·연산 비용)\n[기술사적 제언] RAG·벡터 DB 환경에서는 문맥 임베딩 품질이 검색 정확도를 좌우하므로 도메인 특화 임베딩 모델과 차원·유사도(Cosine) 지표 선정이 중요"
  },
  {
    "domain": "AI",
    "topic": "멀티모달 인공지능 (Multimodal AI)",
    "mnemonic": "지청시추",
    "definition": "다양한 데이터 통합 이해 위해 융합 모듈 사용하는 모델",
    "keywords": [
      "이질적 데이터 통합 처리",
      "맥락적 이해",
      "입력·융합·출력 모듈",
      "지식/언어 (NLP·NLU·NLG)",
      "청각/음성 (STT)",
      "시각/이미지 (CNN·YOLO·ViT)",
      "표현성·변환성·정렬성"
    ],
    "diagram": "ai_multimodal.png",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "텍스트·이미지·음성·영상 등 서로 다른 형태(모달리티)의 데이터를 함께 처리·이해하는 인공지능 기술"
      },
      {
        "major": "구조",
        "minor": "입력·융합·출력 모듈",
        "desc": "입력 모듈(모달별 인코딩) → 융합 모듈(특징 통합) → 출력 모듈(추론·생성)로 구성"
      },
      {
        "major": "지식/언어",
        "minor": "NLP·NLU·NLG",
        "desc": "워드임베딩, 어텐션, 트랜스포머 기반 언어 이해·생성"
      },
      {
        "major": "청각/음성",
        "minor": "STT·신호처리",
        "desc": "음성을 텍스트로 변환(STT)하고 Signal Processing으로 음향 특징 추출"
      },
      {
        "major": "시각/이미지",
        "minor": "CNN·YOLO·ViT",
        "desc": "CNN 특징 추출, YOLO 객체 탐지, Image Scaling 전처리, ViT 트랜스포머 기반 비전 처리"
      },
      {
        "major": "추론/학습",
        "minor": "회귀·시계열·클러스터링",
        "desc": "회귀분석, 시계열분석, 클러스터링, 연관분석 등 전통 분석 기법 결합"
      },
      {
        "major": "데이터 품질",
        "minor": "표현성·변환성·정렬성",
        "desc": "표현성(모달별 개체 식별·라벨 참값 부합), 변환(일치)성, 정렬(관계)성 확보"
      }
    ],
    "differentiation": "[비교] 유니모달 AI vs 멀티모달 AI\n구분 | 유니모달 AI | 멀티모달 AI\n입력 데이터 | 단일 모달 (텍스트 또는 이미지) | 복수 모달 동시 입력\n이해 수준 | 단일 정보 내 패턴 인식 | 모달 간 교차 맥락 이해\n핵심 기술 | 단일 인코더 | 융합(Fusion) 모듈·정렬(Alignment)\n데이터 요구 | 모달별 라벨링 | 모달 간 정렬·동기화 품질 필요\n[기술사적 제언] 모달 간 시간·의미 정렬 불량이 성능 저하의 주원인이므로 멀티모달 학습 데이터의 표현성·변환성·정렬성 품질검증 체계를 선행 구축해야 함"
  },
  {
    "domain": "AI",
    "topic": "변분 오토인코더 (VAE, Variational AutoEncoder)",
    "mnemonic": "인잠디",
    "definition": "새 데이터 생성 위해 평균·표준편차를 학습하는 모델",
    "keywords": [
      "인코더·잠재공간·디코더",
      "평균·표준편차 (가우시안 분포)",
      "Sample Latent Vector",
      "재매개변수화 (Reparameterization)",
      "사후확률 최대화",
      "MSE 재구성 손실",
      "ADAM 경사하강법"
    ],
    "diagram": "ai_vae.png",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "입력을 평균과 표준편차로 이루어진 확률분포로 인코딩하고, 샘플링한 잠재 벡터를 디코딩하여 입력과 유사한 새로운 데이터를 생성하는 생성 모델"
      },
      {
        "major": "인코더",
        "minor": "속성 추출·차원 축소",
        "desc": "입력 데이터를 축소하여 평균(μ)과 표준편차(σ) 추출"
      },
      {
        "major": "잠재공간",
        "minor": "평균/표준편차",
        "desc": "입력의 가우시안 확률분포 파라미터 보유 (연속적·정규화된 공간)"
      },
      {
        "major": "잠재공간",
        "minor": "Sample Latent Vector",
        "desc": "평균·표준편차와 가우시안 노이즈로 샘플링하여 사후확률 추론"
      },
      {
        "major": "디코더",
        "minor": "손실 재구성·신규 생성",
        "desc": "잠재 벡터로부터 입력 특징을 가진 새로운 데이터를 생성"
      },
      {
        "major": "학습 방법",
        "minor": "MSE·ADAM",
        "desc": "MSE: 입력과 출력 오차 측정 손실 함수 / ADAM: RMSProp과 Momentum을 혼합한 경사하강법 알고리즘"
      }
    ],
    "differentiation": "[비교] AE(AutoEncoder) vs VAE 비교\n구분 | AE | VAE\n잠재 표현 | 고정된 점(Point) 벡터 | 확률분포 (평균·표준편차)\n목적 | 차원 축소·입력 복원 | 새로운 데이터 생성\n잠재공간 | 불연속·해석 어려움 | 연속적·정규분포 근사\n손실 함수 | 재구성 오차 | 재구성 오차 + KL Divergence\n두음 | 인·잠·디 | 인·잠(평균·표준편차)·디\n[기술사적 제언] VAE는 학습이 안정적이나 결과물이 흐릿한 한계가 있어, 고품질 생성이 필요하면 GAN·확산 모델과의 하이브리드 구성을 검토"
  },
  {
    "domain": "AI",
    "topic": "전이학습 (Transfer Learning)",
    "mnemonic": "특·미 (특징추출·미세조정)",
    "definition": "학습 효율 위해 사전학습 모델 지식을 재사용하는 기법",
    "keywords": [
      "사전학습 모델 (Pre-trained Model)",
      "지식 재사용 (가중치·특징 표현)",
      "Feature Extraction (Freeze)",
      "Fine-tuning (미세 조정)",
      "데이터 부족 해결",
      "과적합 방지",
      "학습 비용 절감"
    ],
    "diagram": "[Source 도메인 대규모 데이터] ── 사전 학습 ──→ [Pre-trained Model]\n                                                    │ 가중치·특징 표현 전이\n                         ┌──────────────────────────┴────────────────────────┐\n              ① Feature Extraction                              ② Fine-tuning\n        (기존 층 Freeze, 마지막 층만 학습)             (일부/전체 층을 재학습)\n                         └──────────────→ [Target 도메인 소량 데이터] ←──────┘",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "하나의 문제에서 학습한 모델의 지식(가중치, 특징 표현)을 다른 관련 문제에 재사용하여 학습 효율과 성능을 향상시키는 기법"
      },
      {
        "major": "필요성",
        "minor": "데이터 부족·학습 비용",
        "desc": "신규 도메인은 데이터가 적고 딥러닝 학습 비용이 큼"
      },
      {
        "major": "필요성",
        "minor": "과적합·초기 학습",
        "desc": "소량 데이터에서 Overfitting 발생, 랜덤 초기화는 비효율적"
      },
      {
        "major": "방식",
        "minor": "Feature Extraction",
        "desc": "사전학습 모델은 고정(Freeze)하고 마지막 레이어만 새로 학습"
      },
      {
        "major": "방식",
        "minor": "Fine-tuning",
        "desc": "사전학습 모델의 일부 또는 전체를 재학습하여 기존 지식과 새로운 데이터를 함께 반영"
      },
      {
        "major": "효과",
        "minor": "성능·효율 개선",
        "desc": "적은 데이터로도 높은 성능 확보, 학습 시간·자원 절감"
      }
    ],
    "differentiation": "[비교] Feature Extraction vs Fine-tuning vs 처음부터 학습\n구분 | Feature Extraction | Fine-tuning | From Scratch\n사전학습 층 | 고정 (Freeze) | 일부/전체 재학습 | 없음 (랜덤 초기화)\n학습 파라미터 | 마지막 층만 | 많음 | 전체\n필요 데이터 | 소량 | 중간 | 대량\n적합 상황 | Source·Target 유사 | Target 특수·데이터 충분 | 유사 사전모델 부재\n[기술사적 제언] Source와 Target 도메인 차이가 크면 부정적 전이(Negative Transfer)가 발생하므로 도메인 유사도 사전 검증 후 방식 선택"
  },
  {
    "domain": "AI",
    "topic": "프롬프트 엔지니어링 (Prompt Engineering)",
    "mnemonic": "단·분 (CoT 단계 / ToT 분기)",
    "definition": "응답 품질 위해 CoT·ToT 프롬프트 설계하는 기법",
    "keywords": [
      "AI 인터페이스 설계",
      "CoT (Chain of Thought)",
      "ToT (Tree of Thought)",
      "단계별 추론",
      "Zero-shot·Few-shot",
      "역할·출력형식 지정",
      "프롬프트 인젝션 대응"
    ],
    "diagram": "[CoT] 문제 → 추론1 → 추론2 → 추론3 → 최종 답   (단일 경로, 단계 연결)\n\n[ToT]              ┌→ 사고 A1 → 사고 A2 ┐\n        문제 ─────┼→ 사고 B1 ✕(가지치기) ├→ 평가·선택 → 최종 답\n                   └→ 사고 C1 → 사고 C2 ┘   (다중 경로 탐색)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "사용자를 위한 AI 인터페이스 개발 분야로, 높은 수준의 결과물을 얻기 위해 적절한 프롬프트를 구상하는 작업·엔지니어링 기법"
      },
      {
        "major": "주요 기법",
        "minor": "CoT (Chain of Thought)",
        "desc": "복잡한 문제를 단계별로 추론하고 각 단계를 연결하여 최종 결과 도출"
      },
      {
        "major": "주요 기법",
        "minor": "ToT (Tree of Thought)",
        "desc": "다양한 사고 경로를 나무 형태로 분기하여 여러 가능성을 탐색하고 최적 경로 선택"
      },
      {
        "major": "기본 기법",
        "minor": "Zero-shot·Few-shot",
        "desc": "예시 없이 지시만 제공(Zero-shot) 또는 소수 예시를 함께 제공(Few-shot)하여 출력 유도"
      },
      {
        "major": "구성 요소",
        "minor": "역할·맥락·출력형식",
        "desc": "역할(Role) 부여, 배경 맥락 제공, 출력 형식·제약 조건 명시로 응답 일관성 확보"
      },
      {
        "major": "리스크",
        "minor": "프롬프트 인젝션",
        "desc": "악의적 지시로 시스템 프롬프트를 우회하는 공격에 대비한 입력 검증·권한 분리 필요"
      }
    ],
    "differentiation": "[비교] CoT vs ToT 비교\n구분 | CoT | ToT\n추론 구조 | 선형(단일 경로) | 트리(다중 경로 분기)\n탐색 방식 | 순차 추론 | 분기·평가·가지치기(백트래킹)\n비용 | 상대적 낮음 | 다수 호출로 높음\n적합 문제 | 수리·논리 단계 추론 | 계획·탐색이 필요한 복합 문제\n[기술사적 제언] 프롬프트만으로는 환각·최신성 한계가 있으므로 RAG·파인튜닝과 병행하고, 프롬프트 템플릿의 버전 관리와 평가 체계(Prompt Ops)를 구축"
  },
  {
    "domain": "AI",
    "topic": "파인튜닝 (Fine-tuning)",
    "mnemonic": "사·데·학·평 (사전학습→데이터→학습→평가)",
    "definition": "도메인 적합 위해 사전학습 가중치를 재학습하는 기법",
    "keywords": [
      "사전학습 모델 (PLM)",
      "도메인 특화 데이터",
      "Full Fine-tuning",
      "SFT (지도 미세조정)",
      "Instruction Tuning",
      "Catastrophic Forgetting",
      "하이퍼파라미터 (LR·Epoch)",
      "과적합 방지"
    ],
    "diagram": "[대규모 사전학습 모델(범용)] ─ 가중치 초기화 ─→ [도메인 라벨 데이터로 추가 학습(낮은 LR)] ─→ [특화 모델]\n                                              ↑ 평가셋 검증 / 조기 종료(Early Stopping)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "범용 사전학습 모델의 가중치를 목표 도메인·작업 데이터로 추가 학습하여 성능을 특화시키는 전이학습 기법"
      },
      {
        "major": "방식",
        "minor": "Full Fine-tuning",
        "desc": "모델 전체 파라미터를 갱신, 성능은 높으나 GPU 메모리·저장 비용이 매우 큼"
      },
      {
        "major": "방식",
        "minor": "SFT·Instruction Tuning",
        "desc": "지시-응답 쌍 데이터로 지도학습하여 지시 수행 능력 향상"
      },
      {
        "major": "방식",
        "minor": "PEFT 계열",
        "desc": "일부 파라미터만 학습(LoRA 등)하여 비용 절감"
      },
      {
        "major": "리스크",
        "minor": "망각·과적합",
        "desc": "기존 지식 소실(Catastrophic Forgetting), 소량 데이터 과적합 → 낮은 학습률·정규화·Replay 데이터로 완화"
      },
      {
        "major": "프로세스",
        "minor": "데이터·평가",
        "desc": "데이터 정제·품질검증 → 학습 → 벤치마크·휴먼 평가 → 배포·모니터링"
      }
    ],
    "differentiation": "[비교] RAG vs 파인튜닝\n구분 | RAG | 파인튜닝\n지식 반영 | 외부 문서 검색(실시간 갱신) | 가중치에 내재화(재학습 필요)\n적합 상황 | 최신성·근거 제시 필요 | 말투·형식·도메인 추론 특화\n비용 | 검색 인프라 | 학습 GPU·데이터 구축\n환각 | 근거 기반 완화 | 학습 범위 밖 환각 잔존\n[기술사적 제언] 실무에서는 RAG와 파인튜닝을 병행(RAFT)하고, 먼저 프롬프트·RAG로 검증한 뒤 필요 시 PEFT 기반 파인튜닝을 선택하는 단계적 접근이 비용 효율적"
  },
  {
    "domain": "AI",
    "topic": "파라미터 효율적 미세조정 (PEFT)",
    "mnemonic": "어·재·프·접 (Adapter·Reparam·Prompt·접두사)",
    "definition": "학습 비용 절감 위해 일부 파라미터만 갱신하는 기법",
    "keywords": [
      "Parameter-Efficient Fine-Tuning",
      "Frozen Backbone (원본 고정)",
      "Adapter Tuning",
      "LoRA (재매개변수화)",
      "Prefix·Prompt Tuning",
      "학습 파라미터 1% 미만",
      "Task별 모듈 교체",
      "GPU 메모리 절감"
    ],
    "diagram": "[Pre-trained LLM (Freeze, 수십억 파라미터)]\n   ├─ Adapter  : 층 사이에 작은 병목 모듈 삽입 ─┐\n   ├─ LoRA     : 가중치 변화량 ΔW = B·A (저차)   ├→ 추가된 소량 파라미터만 학습\n   └─ Prefix/Prompt Tuning : 입력/층에 학습 벡터 부착 ┘",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "원본 모델은 고정(Freeze)하고 소량의 추가·선택 파라미터만 학습하여 Full Fine-tuning 대비 비용을 대폭 절감하는 방법론"
      },
      {
        "major": "유형",
        "minor": "Adapter Tuning",
        "desc": "트랜스포머 층 사이에 작은 병목(Bottleneck) 모듈을 삽입해 학습, 추론 지연 소폭 증가"
      },
      {
        "major": "유형",
        "minor": "LoRA",
        "desc": "가중치 갱신량을 저차 행렬 두 개의 곱으로 근사, 추론 시 원본에 병합 가능"
      },
      {
        "major": "유형",
        "minor": "Prefix·Prompt Tuning",
        "desc": "입력 임베딩 또는 각 층 앞에 학습 가능한 가상 토큰(벡터)을 붙여 학습"
      },
      {
        "major": "효과",
        "minor": "비용·운영",
        "desc": "학습 파라미터 1% 내외, 체크포인트 수 MB 수준, Task별 어댑터 교체로 멀티테넌트 운영 용이"
      },
      {
        "major": "한계",
        "minor": "성능 격차",
        "desc": "복잡한 도메인 전환 시 Full Fine-tuning 대비 성능 열세 가능, 랭크·위치 하이퍼파라미터 튜닝 필요"
      }
    ],
    "differentiation": "[비교] Full Fine-tuning vs PEFT\n구분 | Full FT | PEFT\n학습 파라미터 | 100% | 0.1~수 %\nGPU 메모리 | 매우 높음 | 낮음\n저장 | 모델 전체 복제 | 어댑터만 저장\n망각 위험 | 높음 | 상대적 낮음\n[기술사적 제언] 다수 업무별 모델이 필요한 기업 환경에서는 기반 LLM 1개 + 업무별 PEFT 어댑터 구조로 비용·거버넌스를 동시에 확보"
  },
  {
    "domain": "AI",
    "topic": "LoRA (Low-Rank Adaptation)",
    "mnemonic": "고·저·합 (고정·저차분해·병합)",
    "definition": "메모리 절감 위해 저차 행렬만 추가 학습하는 기법",
    "keywords": [
      "Low-Rank Decomposition",
      "ΔW = B × A",
      "Rank (r) 하이퍼파라미터",
      "원본 가중치 Freeze",
      "Attention(Q·V) 적용",
      "추론 시 가중치 병합",
      "α 스케일링",
      "어댑터 교체"
    ],
    "diagram": "   입력 x ─┬──────────→ [W (고정, d×d)] ──────────┐\n           └→ [A (d×r)] → [B (r×d)] (학습) × α/r ─┴→ 합산 → 출력 h = Wx + BAx\n                  (r ≪ d : 학습 파라미터 대폭 감소)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "가중치 변화량 ΔW를 저차(Low-rank) 행렬 B·A로 분해해 근사하고, 원본 W는 고정한 채 B·A만 학습하는 PEFT 기법"
      },
      {
        "major": "구성요소",
        "minor": "행렬 A·B",
        "desc": "A(d×r)는 가우시안 초기화, B(r×d)는 0 초기화하여 초기 출력 변화 없음"
      },
      {
        "major": "구성요소",
        "minor": "랭크 r·스케일 α",
        "desc": "r이 클수록 표현력↑·파라미터↑, α/r로 갱신 크기 조정"
      },
      {
        "major": "적용 위치",
        "minor": "Attention 투영층",
        "desc": "주로 Query·Value(또는 전 선형층)에 삽입"
      },
      {
        "major": "운영",
        "minor": "병합·교체",
        "desc": "학습 후 W + BA 병합 시 추론 지연 없음, 작업별 LoRA 파일(수십 MB) 교체로 다중 작업 지원"
      },
      {
        "major": "효과",
        "minor": "자원 절감",
        "desc": "학습 파라미터·옵티마이저 상태 메모리 대폭 절감 (예: 175B 모델 학습 파라미터 약 1만분의 1)"
      }
    ],
    "differentiation": "[비교] LoRA vs Adapter\n구분 | LoRA | Adapter\n추론 지연 | 병합 시 없음 | 모듈 추가로 증가\n구조 | 선형층 병렬 저차 경로 | 층 사이 병목 모듈\n저장량 | 매우 작음 | 작음\n[기술사적 제언] 랭크 r과 적용 층은 과업 복잡도에 맞춰 실험적으로 결정하고, 어댑터 버전·출처 관리(모델 거버넌스)가 필요"
  },
  {
    "domain": "AI",
    "topic": "QLoRA (Quantized LoRA)",
    "mnemonic": "엔·더·페 (NF4·Double Quant·Paged)",
    "definition": "GPU 절감 위해 4비트 양자화 후 LoRA 적용 기법",
    "keywords": [
      "4-bit NormalFloat (NF4)",
      "Double Quantization",
      "Paged Optimizer",
      "LoRA 어댑터 학습",
      "단일 GPU 대형 모델 튜닝",
      "BF16 연산",
      "양자화 모델 Freeze",
      "성능 유지"
    ],
    "diagram": "[Base LLM] ─ NF4 4비트 양자화(Freeze, 메모리 1/4) ─┐\n                                                      ├→ 순전파: 역양자화(BF16) + LoRA(BF16) → 학습은 LoRA만\n[Paged Optimizer] : 메모리 스파이크 시 CPU로 페이징 ─┘",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "기반 모델을 4비트로 양자화해 고정하고 그 위에 LoRA 어댑터만 학습하여 단일 GPU로 수십~수백억 파라미터 모델을 미세조정하는 기법"
      },
      {
        "major": "핵심 기술",
        "minor": "NF4",
        "desc": "정규분포 가중치에 최적화된 4비트 데이터 타입, 정보 이론적으로 최적"
      },
      {
        "major": "핵심 기술",
        "minor": "Double Quantization",
        "desc": "양자화 상수 자체를 다시 양자화하여 추가 메모리 절감"
      },
      {
        "major": "핵심 기술",
        "minor": "Paged Optimizer",
        "desc": "옵티마이저 상태를 CPU 메모리로 페이징하여 OOM 방지"
      },
      {
        "major": "연산 방식",
        "minor": "역양자화 + LoRA",
        "desc": "순전파 시 4비트 → BF16 역양자화 후 연산, 그래디언트는 LoRA 파라미터에만 전달"
      },
      {
        "major": "한계",
        "minor": "속도·정밀도",
        "desc": "역양자화 오버헤드로 학습 속도 저하, 극단적 양자화 시 미세한 성능 손실 가능"
      }
    ],
    "differentiation": "[비교] LoRA vs QLoRA\n구분 | LoRA | QLoRA\n기반 모델 정밀도 | FP16/BF16 | 4비트(NF4)\nGPU 메모리 | 중간 | 매우 낮음(단일 GPU)\n학습 속도 | 빠름 | 역양자화로 다소 느림\n성능 | 기준 | 거의 동등\n[기술사적 제언] 온프레미스·소형 GPU 환경에서 폐쇄망 sLLM 튜닝이 필요할 때 QLoRA가 유효하며, 배포 시에는 병합·재양자화 전략을 별도 검증"
  },
  {
    "domain": "AI",
    "topic": "RLHF (Reinforcement Learning from Human Feedback)",
    "mnemonic": "에·보·피 (SFT·보상모델·PPO)",
    "definition": "인간 선호 정렬 위해 보상모델로 강화학습하는 기법",
    "keywords": [
      "SFT (지도 미세조정)",
      "보상 모델 (Reward Model)",
      "인간 선호 랭킹 데이터",
      "PPO (정책 최적화)",
      "KL 페널티",
      "Alignment (정렬)",
      "Helpful·Honest·Harmless",
      "보상 해킹"
    ],
    "diagram": "① SFT : 지시-응답 데이터로 지도 미세조정\n② 보상모델(RM) : 같은 질문의 응답 N개를 사람이 랭킹 → 선호 점수 예측 모델 학습\n③ RL(PPO) : 정책(LLM) 응답 → RM 보상 ↑ 최대화 (KL 페널티로 SFT 모델에서 이탈 억제)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "사람의 선호 피드백으로 보상 모델을 학습하고 강화학습으로 LLM을 최적화해 유용성·정직성·무해성에 맞게 정렬하는 기법"
      },
      {
        "major": "1단계",
        "minor": "SFT",
        "desc": "고품질 시연(Demonstration) 데이터로 기본 지시 수행 능력 확보"
      },
      {
        "major": "2단계",
        "minor": "보상 모델 학습",
        "desc": "응답 쌍/랭킹 비교 데이터로 사람 선호를 스칼라 보상으로 근사"
      },
      {
        "major": "3단계",
        "minor": "PPO 강화학습",
        "desc": "보상 극대화 + KL Divergence 페널티로 정책 급변·언어 붕괴 방지"
      },
      {
        "major": "리스크",
        "minor": "보상 해킹·비용",
        "desc": "보상 모델의 허점을 이용한 과최적화, 라벨러 편향·고비용 → 헌법적 AI(RLAIF) 등 보완"
      },
      {
        "major": "효과",
        "minor": "안전·품질",
        "desc": "유해 응답 감소, 지시 이행·대화 품질 향상 (ChatGPT 계열 핵심 기술)"
      }
    ],
    "differentiation": "[비교] SFT vs RLHF\n구분 | SFT | RLHF\n학습 신호 | 정답 응답 모방 | 선호(상대 비교) 보상\n목적 | 지시 수행 | 선호·안전 정렬\n비용 | 낮음 | 높음(랭킹 라벨·RL 불안정)\n[기술사적 제언] 사람 라벨 비용·편향을 줄이기 위해 RLAIF·DPO 등 대안과 레드팀 평가를 병행하고, 정렬 기준(원칙·정책)을 문서화"
  },
  {
    "domain": "AI",
    "topic": "DPO (Direct Preference Optimization)",
    "mnemonic": "보·강·無 (보상모델·강화학습 불필요)",
    "definition": "RLHF 단순화 위해 선호쌍으로 정책 직접 최적화 기법",
    "keywords": [
      "선호 쌍 (Chosen·Rejected)",
      "보상모델 불필요",
      "강화학습 루프 제거",
      "분류형 손실 (Bradley-Terry)",
      "참조 모델 (Reference)",
      "β 하이퍼파라미터",
      "학습 안정성",
      "정렬 (Alignment)"
    ],
    "diagram": "[RLHF] 선호데이터 → 보상모델 학습 → PPO 샘플링·강화학습 (복잡·불안정)\n[DPO ] 선호데이터(Chosen y_w, Rejected y_l) ──→ 단일 손실로 정책 직접 학습\n        L = -log σ( β·[log π(y_w)/π_ref(y_w) - log π(y_l)/π_ref(y_l)] )",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "RLHF의 보상 모델·강화학습 단계를 수식 변환으로 제거하고 선호 쌍 데이터로 정책을 직접 학습하는 정렬 기법"
      },
      {
        "major": "입력",
        "minor": "선호 쌍 데이터",
        "desc": "프롬프트별 선택(Chosen)·거부(Rejected) 응답 쌍"
      },
      {
        "major": "손실 함수",
        "minor": "로그 시그모이드 손실",
        "desc": "참조 모델 대비 선택 응답 확률 비를 높이고 거부 응답 비를 낮춤"
      },
      {
        "major": "제어 변수",
        "minor": "β·참조 모델",
        "desc": "β가 클수록 참조 모델에서 덜 이탈, 급격한 정책 변화 방지"
      },
      {
        "major": "효과",
        "minor": "단순·안정",
        "desc": "샘플링·PPO 불필요 → 구현 단순, 메모리·학습 안정성 향상"
      },
      {
        "major": "한계",
        "minor": "데이터 의존",
        "desc": "오프라인 선호 데이터 품질·분포에 민감, 온라인 탐색 부재로 성능 한계 가능"
      }
    ],
    "differentiation": "[비교] RLHF vs DPO\n구분 | RLHF | DPO\n보상 모델 | 별도 학습 필요 | 불필요(암묵적)\n최적화 | PPO 강화학습 | 지도형 단일 손실\n안정성·비용 | 불안정·고비용 | 안정·저비용\n탐색 | 온라인 샘플링 | 오프라인 데이터 고정\n[기술사적 제언] 소규모 팀은 DPO로 빠른 정렬, 대규모·고위험 서비스는 RLHF/온라인 방식과 안전성 평가를 병행하는 하이브리드가 현실적"
  },
  {
    "domain": "AI",
    "topic": "양자화 (Quantization)",
    "mnemonic": "PTQ·QAT / 대·비·교 (대칭·비대칭·교정)",
    "definition": "메모리 절감 위해 가중치 비트 폭을 축소하는 기법",
    "keywords": [
      "FP32→INT8·INT4 변환",
      "PTQ (사후 양자화)",
      "QAT (양자화 인지 학습)",
      "Scale·Zero-point",
      "Calibration (교정)",
      "대칭·비대칭 양자화",
      "GPTQ·AWQ",
      "정확도 손실 보정"
    ],
    "diagram": "[FP32 가중치: -1.27 … 3.42] ── Scale·Zero-point ──→ [INT8: -128 … 127]\n  q = round(x / s) + z      x ≈ s·(q - z)      (메모리 1/4, 정수 연산 가속)\n  PTQ: 학습 후 교정 데이터로 변환 │ QAT: 학습 중 가짜 양자화 노드 삽입",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "고정밀(FP32/FP16) 가중치·활성값을 INT8·INT4 등 저비트로 표현하여 모델 크기·메모리·연산량을 줄이는 경량화 기법"
      },
      {
        "major": "방식",
        "minor": "PTQ",
        "desc": "재학습 없이 소량 교정(Calibration) 데이터로 Scale·Zero-point 산출, 빠르고 간단하나 저비트에서 정확도 하락"
      },
      {
        "major": "방식",
        "minor": "QAT",
        "desc": "학습 단계에서 양자화 오차를 모사(Fake Quant)하여 정확도 보존, 학습 비용 필요"
      },
      {
        "major": "범위",
        "minor": "대칭·비대칭",
        "desc": "대칭은 Zero-point=0으로 단순, 비대칭은 분포 편향 데이터에 정밀"
      },
      {
        "major": "LLM 기법",
        "minor": "GPTQ·AWQ",
        "desc": "층별 오차 보정(GPTQ), 중요 채널 보호(AWQ)로 4비트 LLM 품질 유지"
      },
      {
        "major": "효과·한계",
        "minor": "속도·정확도",
        "desc": "메모리 절감·추론 가속(NPU 지원), 이상치(Outlier) 가중치에서 정확도 손실 가능"
      }
    ],
    "differentiation": "[비교] PTQ vs QAT\n구분 | PTQ | QAT\n재학습 | 불필요 | 필요\n정확도 | 저비트에서 하락 가능 | 상대적 우수\n소요 | 수 분~시간 | 학습 시간·데이터\n[기술사적 제언] 온디바이스·엣지 배포는 PTQ로 시작해 정확도 허용 오차를 벗어나면 QAT·혼합정밀(Mixed Precision)로 전환하고 타깃 하드웨어의 지원 정밀도를 사전 확인"
  },
  {
    "domain": "AI",
    "topic": "지식 증류 (Knowledge Distillation)",
    "mnemonic": "교·학·소 (교사·학생·소프트라벨)",
    "definition": "경량화 위해 교사 출력을 학생 모델에 전이하는 기법",
    "keywords": [
      "Teacher-Student 구조",
      "Soft Label (소프트 타깃)",
      "Temperature (T)",
      "KL Divergence 손실",
      "Response·Feature·Relation 증류",
      "sLLM 최적화",
      "모델 압축",
      "Hard Label 병용"
    ],
    "diagram": "[Teacher: 대형 모델] ─ 입력 x ─→ Soft Label (Temperature T로 완화된 확률분포)\n                                         ↓ KL Divergence 최소화\n[Student: 소형 모델] ─ 입력 x ─→ 예측 분포 ──(+ Hard Label CE 손실)──→ 경량 고성능 모델",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "대형 교사(Teacher) 모델의 출력 분포(지식)를 소형 학생(Student) 모델이 모방하도록 학습시켜 경량화하면서 성능을 유지하는 기법"
      },
      {
        "major": "구성요소",
        "minor": "Soft Label·Temperature",
        "desc": "온도 T로 확률분포를 완화해 클래스 간 유사도(Dark Knowledge) 전달"
      },
      {
        "major": "구성요소",
        "minor": "손실 함수",
        "desc": "KL Divergence(증류 손실) + 정답 Cross-Entropy(Hard Label) 가중 합"
      },
      {
        "major": "유형",
        "minor": "Response·Feature·Relation",
        "desc": "출력(Logit), 중간 표현(Feature), 샘플 간 관계 증류"
      },
      {
        "major": "LLM 활용",
        "minor": "sLLM 생성",
        "desc": "대형 LLM이 생성한 응답·추론 과정을 데이터로 소형 모델 학습(DistilBERT 등)"
      },
      {
        "major": "한계",
        "minor": "교사 의존·라이선스",
        "desc": "교사 편향·오류 전이, 상용 모델 출력 사용 시 약관·저작권 이슈"
      }
    ],
    "differentiation": "[비교] 양자화 vs 가지치기 vs 지식 증류\n구분 | 양자화 | 가지치기 | 지식 증류\n원리 | 비트 폭 축소 | 불필요 가중치 제거 | 지식 전이 학습\n구조 변경 | 없음 | 희소화 | 소형 구조 신규\n재학습 | 선택 | 대체로 필요 | 필수\n[기술사적 제언] 온디바이스 AI는 증류로 소형 구조를 만들고 양자화·가지치기를 조합 적용하는 다단계 경량화 파이프라인이 표준이며, 교사 모델의 라이선스를 사전 검토"
  },
  {
    "domain": "AI",
    "topic": "온디바이스 AI (On-Device AI)",
    "mnemonic": "NPU·경량화·런타임 / 지연·보안·비용",
    "definition": "지연·유출 방지 위해 단말에서 직접 추론하는 기술",
    "keywords": [
      "엣지 도메인 로컬 추론",
      "초저지연",
      "외부 반출 차단 (프라이버시)",
      "NPU·PIM 가속기",
      "양자화·가지치기·지식증류",
      "TFLite·ONNX Runtime",
      "sLLM·SLM",
      "하이브리드 AI"
    ],
    "diagram": "ai_ondevice.png",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "클라우드 연결 없이 스마트폰·자동차·로봇 등 단말 자체에서 데이터 수집과 AI 추론을 직접 수행하는 기술"
      },
      {
        "major": "하드웨어",
        "minor": "NPU·PIM·가속기",
        "desc": "고효율 MAC(GEMM) 연산 NPU, 메모리 내 연산 PIM, TPU·NNP·뉴럴엔진 등 저전력 AI 전용 프로세서"
      },
      {
        "major": "모델 경량화",
        "minor": "양자화·가지치기·증류",
        "desc": "비트 축소, 불필요 가중치 제거, 교사→학생 지식 전이로 sLLM 최적화"
      },
      {
        "major": "소프트웨어",
        "minor": "런타임·컴파일러",
        "desc": "TFLite·ONNX Runtime·CoreML 등 추론 엔진, TVM·MLIR 기반 기종별 최적화 컴파일"
      },
      {
        "major": "경량 모델",
        "minor": "sLLM·SLM",
        "desc": "수억~수십억 파라미터로 축소되어 단말 탑재 가능한 언어모델"
      },
      {
        "major": "효과",
        "minor": "지연·보안·연속성",
        "desc": "네트워크 지연 제거, 개인정보 외부 반출 차단, 오프라인 서비스 연속성, 서버 비용 절감"
      }
    ],
    "differentiation": "[비교] 클라우드 AI vs 온디바이스 AI\n구분 | 클라우드 AI | 온디바이스 AI\n연산 위치 | 원격 데이터센터 | 사용자 단말(엣지)\n네트워크 | 필수 | 불필요(오프라인 가능)\n지연 | 전송·큐잉 지연 | 즉각 처리\n보안 | 전송 중 유출 위험 | 외부 반출 차단\n모델 규모 | 초대형 LLM | sLLM·경량 모델\n[기술사적 제언] 고난도 추론은 클라우드, 실시간·민감 정보는 온디바이스로 분담하는 하이브리드 AI 아키텍처와 단말 모델 업데이트·보안(모델 탈취 방지) 체계를 함께 설계"
  },
  {
    "domain": "AI",
    "topic": "환각 현상 (Hallucination)",
    "mnemonic": "내·외·근 (내재적·외재적·근거검증)",
    "definition": "사실 오류 방지 위해 RAG·검증으로 완화하는 기법",
    "keywords": [
      "그럴듯한 거짓 생성",
      "내재적 환각 (Intrinsic)",
      "외재적 환각 (Extrinsic)",
      "RAG 근거 기반 생성",
      "Self-Consistency·CoVe 검증",
      "Temperature 조정",
      "인용·출처 제시",
      "Human-in-the-Loop"
    ],
    "diagram": "[원인] 학습데이터 오류·편향 / 확률적 다음 토큰 예측 / 지식 단절(Cut-off) / 모호한 프롬프트\n   ↓\n[유형] 내재적(입력·문맥과 모순) │ 외재적(검증 불가한 내용 생성)\n   ↓\n[대응] RAG·인용 → 프롬프트 제약 → 자기검증 → 출력 가드레일 → 휴먼 검토",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "LLM이 사실과 다르거나 근거 없는 내용을 그럴듯하게 생성하는 현상으로 신뢰성·안전성의 핵심 저해 요인"
      },
      {
        "major": "원인",
        "minor": "데이터·모델 구조",
        "desc": "학습 데이터의 오류·편향, 확률적 토큰 예측, 지식 단절 시점, 불충분한 정렬"
      },
      {
        "major": "유형",
        "minor": "내재적·외재적",
        "desc": "내재적: 주어진 문맥과 모순 / 외재적: 문맥으로 검증 불가한 사실 생성"
      },
      {
        "major": "대응 기술",
        "minor": "RAG·인용",
        "desc": "외부 신뢰 지식 검색 결과를 근거로 생성하고 출처를 명시"
      },
      {
        "major": "대응 기술",
        "minor": "검증·프롬프트",
        "desc": "Self-Consistency, CoVe(검증 질문), 모른다고 답하게 하는 프롬프트 제약, 낮은 Temperature"
      },
      {
        "major": "대응 운영",
        "minor": "가드레일·HITL",
        "desc": "출력 사실 검증 레이어, 고위험 분야 사람 검토, 환각률 지표 모니터링"
      }
    ],
    "differentiation": "[비교] 환각 vs 편향 vs 오류\n구분 | 환각 | 편향 | 단순 오류\n본질 | 근거 없는 사실 생성 | 학습 데이터의 치우침 | 계산·추론 실수\n탐지 | 사실 검증 필요 | 공정성 지표 | 정답 비교\n대응 | RAG·검증 | 데이터 균형·정렬 | 재추론\n[기술사적 제언] 환각은 완전 제거가 불가능하므로 도메인 위험 등급에 따라 RAG·검증·휴먼 검토를 계층화하고 환각률을 서비스 KPI로 관리"
  },
  {
    "domain": "AI",
    "topic": "탈옥 (Jailbreak)",
    "mnemonic": "역·우·다 (역할극·우회인코딩·다중턴)",
    "definition": "안전장치 우회 위해 조작 프롬프트 입력하는 공격 기법",
    "keywords": [
      "안전 정렬(Alignment) 우회",
      "역할극·DAN 프롬프트",
      "인코딩·난독화 우회",
      "다중 턴(Many-shot) 유도",
      "적대적 접미사(GCG)",
      "Red Teaming",
      "입출력 가드레일",
      "Safety Classifier"
    ],
    "diagram": "[공격자] ─ 역할극/가정/인코딩/다중턴 ─→ [LLM 안전 정책(거부 응답)] ─ 우회 성공 ─→ [유해 응답 생성]\n[방어]  입력 필터 → 안전 정렬 강화(RLHF·적대적 학습) → 출력 분류기 → 레드팀·모니터링",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "LLM의 안전 정책·콘텐츠 제한을 우회하여 금지된 응답(유해 정보·악성코드 등)을 유도하는 공격"
      },
      {
        "major": "공격 유형",
        "minor": "역할극·시나리오",
        "desc": "DAN 등 제약 없는 페르소나·가상 상황 설정으로 거부 회피"
      },
      {
        "major": "공격 유형",
        "minor": "인코딩·난독화",
        "desc": "Base64·다국어·문자 치환으로 필터 우회"
      },
      {
        "major": "공격 유형",
        "minor": "다중 턴·Many-shot",
        "desc": "대화를 점진적으로 유도하거나 다수 예시로 컨텍스트 오염"
      },
      {
        "major": "공격 유형",
        "minor": "적대적 접미사",
        "desc": "최적화로 생성한 무의미 문자열 접미사로 거부 응답 억제(GCG)"
      },
      {
        "major": "방어",
        "minor": "다층 방어",
        "desc": "입력 필터, 안전 정렬·적대적 학습, 출력 분류기, 레드팀 테스트, 사용 로그 모니터링"
      }
    ],
    "differentiation": "[비교] 탈옥 vs 프롬프트 인젝션\n구분 | 탈옥 | 프롬프트 인젝션\n공격 대상 | 모델의 안전 정책 | 애플리케이션의 지시 체계\n공격자 | 사용자 직접 | 사용자 또는 외부 데이터(간접)\n목표 | 금지 콘텐츠 생성 | 지시 탈취·데이터 유출·도구 오남용\n[기술사적 제언] 모델 단독 방어는 한계가 있어 입력·출력 가드레일과 지속적 레드팀, OWASP LLM Top 10 기반 점검을 개발 수명주기에 내재화"
  },
  {
    "domain": "AI",
    "topic": "프롬프트 인젝션 (Prompt Injection)",
    "mnemonic": "직·간 / 격·최·검 (직접·간접 / 격리·최소권한·검증)",
    "definition": "지시 탈취 위해 악성 명령어를 주입하는 공격 기법",
    "keywords": [
      "직접 프롬프트 인젝션",
      "간접 프롬프트 인젝션 (외부 데이터)",
      "시스템 프롬프트 유출",
      "도구 호출 악용 (Excessive Agency)",
      "OWASP LLM01",
      "입력 검증·가드레일",
      "권한 최소화",
      "컨텍스트 격리"
    ],
    "diagram": "[시스템 프롬프트: 신뢰 지시] + [사용자 입력 / 웹·문서·RAG 데이터: 비신뢰] → 동일 컨텍스트로 결합\n        └ 악성 지시(\"이전 지시 무시…\")가 섞이면 LLM이 지시와 데이터를 구분 못함 → 지시 탈취·정보 유출·도구 오남용",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "신뢰 지시와 비신뢰 입력이 구분되지 않는 LLM 특성을 악용해 악성 명령을 주입, 의도하지 않은 동작을 유발하는 공격 (OWASP LLM01)"
      },
      {
        "major": "유형",
        "minor": "직접 인젝션",
        "desc": "사용자가 입력창에 직접 시스템 지시 무시·변경을 요구"
      },
      {
        "major": "유형",
        "minor": "간접 인젝션",
        "desc": "웹 페이지·이메일·문서·RAG 데이터에 숨겨진 악성 지시를 에이전트가 파싱·실행"
      },
      {
        "major": "피해",
        "minor": "유출·오남용",
        "desc": "시스템 프롬프트·기밀 유출, 과도한 권한의 도구 호출(메일 전송·삭제 등), 출력 조작"
      },
      {
        "major": "대응(기술)",
        "minor": "입력·출력 가드레일",
        "desc": "인젝션 패턴 탐지, 구분자·스포트라이팅, 출력 검증, 별도 안전 LLM 분류"
      },
      {
        "major": "대응(구조)",
        "minor": "권한 최소화·격리",
        "desc": "도구 최소 권한, 민감 작업 HITL 승인, 데이터 등급별 컨텍스트 격리"
      }
    ],
    "differentiation": "[비교] 직접 vs 간접 프롬프트 인젝션\n구분 | 직접 | 간접\n주입 경로 | 사용자 입력 | 외부 콘텐츠(웹·문서·DB)\n탐지 난이도 | 상대적 쉬움 | 어려움(사용자 비인지)\n주요 위협 | 정책 우회 | 에이전트 권한 탈취\n[기술사적 제언] SQL 인젝션처럼 완전 차단이 어려우므로 신뢰 경계 분리, 최소 권한, 고위험 행동 사람 승인을 설계 원칙으로 삼고 지속적 레드팀을 수행"
  },
  {
    "domain": "AI",
    "topic": "에이전틱 AI (Agentic AI)",
    "mnemonic": "계·도·메·자 (계획·도구·메모리·자율)",
    "definition": "목표 달성 위해 계획·도구로 자율 수행하는 프레임워크",
    "keywords": [
      "자율적 목표 달성",
      "계획(Planning)·분해",
      "도구 호출 (Tool Use)",
      "메모리 (단기·장기)",
      "다중 에이전트 (MAS)",
      "A2A·MCP 프로토콜",
      "HITL·가드레일",
      "합리성·환경인지·자율행동"
    ],
    "diagram": "ai_agent.png",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "환경과 상호작용하며 데이터를 수집하고 스스로 판단해 목표를 달성하는 자율 주체. 챗봇과 달리 사용자가 원하는 목표를 위해 작업을 계획·실행"
      },
      {
        "major": "작동 방식",
        "minor": "목표설정→정보획득→작업구현",
        "desc": "목표를 작업 단위로 분할 → 필요한 정보 수집(외부·에이전트) → 작업 실행"
      },
      {
        "major": "구성요소",
        "minor": "아키텍처·기능·프로그램",
        "desc": "물리적 작동 기반(아키텍처), 작업 가능 요소·지원 기능(에이전트 기능), 실제 구현(에이전트 프로그램)"
      },
      {
        "major": "확장 구조",
        "minor": "다중 에이전트 시스템(MAS)",
        "desc": "단일 에이전트 한계 극복, 분산 협업 구조로 복잡 업무 처리, A2A로 에이전트 간 협업·MCP로 도구·컨텍스트 연동"
      },
      {
        "major": "보안 위협",
        "minor": "간접 주입·목표 탈취",
        "desc": "외부 데이터 내 악성 프롬프트, 목표 변조, 불완전한 도구 호출 통제, 오케스트레이션 탈취, 벡터 DB 오염"
      },
      {
        "major": "방어 대책",
        "minor": "권한 최소화·검증·격리",
        "desc": "도구 권한 최소화·민감 조작 HITL, 입력 이중 검증 가드레일, 메모리·컨텍스트 격리와 AI 공급망 보안"
      }
    ],
    "differentiation": "[비교] 챗봇(LLM) vs AI 에이전트(Agentic AI)\n구분 | 챗봇·LLM | AI 에이전트\n동작 | 질의-응답 | 목표 기반 계획·실행 반복\n도구 사용 | 제한적 | API·검색·코드 등 적극 활용\n자율성 | 낮음 | 높음(권한·위험 동반)\n상태 | 대화 단위 | 메모리로 장기 맥락 유지\n[기술사적 제언] 자율성이 높을수록 위험도 커지므로 권한 최소화, 행동 로그 감사, HITL 승인 절차와 에이전트 거버넌스 체계를 도입 단계부터 설계"
  },
  {
    "domain": "AI",
    "topic": "ReAct (Reasoning and Acting)",
    "mnemonic": "생·행·관 (Thought·Action·Observation)",
    "definition": "추론 정확도 위해 사고·행동을 교차 수행하는 프레임워크",
    "keywords": [
      "Thought (추론)",
      "Action (도구 호출)",
      "Observation (관찰)",
      "추론·행동 교차 루프",
      "외부 지식 접지(Grounding)",
      "환각 감소",
      "해석 가능한 추론 궤적",
      "LangChain Agent"
    ],
    "diagram": "질문 → [Thought] 무엇이 필요한가? → [Action] 검색/계산/API 호출 → [Observation] 결과 확인\n          ↑──────────────── 반복 (목표 달성 시까지) ────────────────┘ → [Final Answer]",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "LLM이 추론(Reasoning) 과정과 도구 사용 행동(Acting)을 번갈아 수행하며 관찰 결과를 다음 추론에 반영하는 에이전트 프레임워크"
      },
      {
        "major": "구성요소",
        "minor": "Thought",
        "desc": "현재 상황 분석과 다음 행동 계획을 자연어로 생성"
      },
      {
        "major": "구성요소",
        "minor": "Action",
        "desc": "검색·계산기·API·코드 실행 등 외부 도구 호출"
      },
      {
        "major": "구성요소",
        "minor": "Observation",
        "desc": "도구 실행 결과를 컨텍스트에 추가하여 추론 보정"
      },
      {
        "major": "효과",
        "minor": "접지·해석성",
        "desc": "외부 정보로 환각 감소, 추론 궤적이 드러나 디버깅·감사 용이"
      },
      {
        "major": "한계",
        "minor": "비용·루프 오류",
        "desc": "호출 반복으로 지연·토큰 비용 증가, 잘못된 관찰에 의한 오류 누적·무한 루프 → 최대 스텝·가드레일 필요"
      }
    ],
    "differentiation": "[비교] CoT vs ReAct\n구분 | CoT | ReAct\n외부 정보 | 사용 안 함(내부 지식) | 도구로 실시간 획득\n구성 | 추론만 | 추론 + 행동 + 관찰 루프\n환각 | 내부 지식 한계 | 관찰로 완화\n적합 | 수리·논리 추론 | 검색·API 연동 에이전트\n[기술사적 제언] ReAct는 에이전트의 기본 패턴이므로 도구 권한 제한, 최대 반복 횟수, 로그 감사로 비용·보안 위험을 통제"
  },
  {
    "domain": "AI",
    "topic": "CoT (Chain of Thought)",
    "mnemonic": "단·연·답 (단계 추론·연결·답)",
    "definition": "복잡 추론 위해 중간 단계를 순차 도출하는 기법",
    "keywords": [
      "단계별 추론",
      "중간 추론 과정",
      "Few-shot CoT",
      "Zero-shot CoT (Let's think step by step)",
      "Self-Consistency",
      "산술·논리 추론 향상",
      "대형 모델에서 효과",
      "토큰 비용 증가"
    ],
    "diagram": "[일반] 질문 ───────────────────────────→ 답 (추론 생략, 오답 위험)\n[CoT ] 질문 → 단계1 → 단계2 → 단계3 → 답 (중간 추론을 명시적으로 생성)",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "모델이 복잡한 문제를 단계별로 추론하고 각 단계를 연결하여 최종 결과를 도출하도록 유도하는 프롬프트 기법"
      },
      {
        "major": "유형",
        "minor": "Few-shot CoT",
        "desc": "추론 과정이 포함된 예시를 함께 제공"
      },
      {
        "major": "유형",
        "minor": "Zero-shot CoT",
        "desc": "단계적으로 생각하라는 지시문만으로 추론 유도"
      },
      {
        "major": "확장",
        "minor": "Self-Consistency",
        "desc": "여러 추론 경로를 샘플링해 다수결로 최종 답 선택"
      },
      {
        "major": "효과",
        "minor": "추론 성능·설명성",
        "desc": "산술·상식·논리 문제 정확도 향상, 추론 근거 확인 가능"
      },
      {
        "major": "한계",
        "minor": "비용·오류 전파",
        "desc": "토큰·지연 증가, 중간 단계 오류가 결과에 전파, 작은 모델에선 효과 미미"
      }
    ],
    "differentiation": "[비교] CoT vs ToT\n구분 | CoT | ToT\n구조 | 선형 단일 경로 | 트리 다중 경로\n오류 복구 | 불가(되돌림 없음) | 가지치기·백트래킹\n비용 | 낮음 | 높음\n[기술사적 제언] 일반 업무는 CoT로 충분하며 비용이 큰 ToT는 계획·탐색형 고난도 과제에 한정하고, 추론 과정 노출 시 민감정보 포함 여부를 점검"
  },
  {
    "domain": "AI",
    "topic": "ToT (Tree of Thoughts)",
    "mnemonic": "분·평·탐 (분기·평가·탐색)",
    "definition": "탐색 추론 위해 사고 경로를 트리로 분기 평가하는 기법",
    "keywords": [
      "사고(Thought) 단위 분기",
      "트리 구조 탐색",
      "상태 평가 (Value·Vote)",
      "BFS·DFS 탐색",
      "가지치기·백트래킹",
      "Lookahead",
      "계획·퍼즐 문제",
      "다중 LLM 호출 비용"
    ],
    "diagram": "                 ┌→ 사고 A1 ──→ A2 (평가 ↑ 유망) ──→ 최종 답\n문제(Root) ──────┼→ 사고 B1 (평가 ↓) ✕ 가지치기\n                 └→ 사고 C1 ──→ C2 (평가 ↑) ──→ (대안)   ※ BFS/DFS로 탐색, 막히면 백트래킹",
    "tableRows": [
      {
        "major": "핵심 개념",
        "minor": "정의",
        "desc": "다양한 사고 경로를 나무 형태로 분기하여 여러 가능성을 탐색하고, 평가를 통해 최적 경로를 선택하는 추론 프레임워크"
      },
      {
        "major": "구성요소",
        "minor": "사고 생성기",
        "desc": "현재 상태에서 다음 사고 후보 k개를 생성"
      },
      {
        "major": "구성요소",
        "minor": "상태 평가기",
        "desc": "각 사고의 유망도를 LLM이 점수화(Value) 또는 투표(Vote)"
      },
      {
        "major": "구성요소",
        "minor": "탐색 알고리즘",
        "desc": "BFS·DFS·빔 서치로 트리를 확장하며 가지치기와 백트래킹 수행"
      },
      {
        "major": "효과",
        "minor": "계획·탐색 성능",
        "desc": "24 게임·창작·미니 크로스워드 등 선행 탐색이 필요한 과제에서 CoT 대비 성능 향상"
      },
      {
        "major": "한계",
        "minor": "비용·지연",
        "desc": "다수의 LLM 호출로 토큰·시간 비용 급증, 평가 신뢰도가 성능을 좌우"
      }
    ],
    "differentiation": "[비교] CoT vs ToT vs ReAct\n구분 | CoT | ToT | ReAct\n경로 | 단일 선형 | 다중 분기 트리 | 추론·행동 루프\n핵심 | 단계 추론 | 탐색·평가 | 도구 접지\n외부 도구 | 없음 | 없음(기본) | 필수\n비용 | 낮음 | 높음 | 중간\n[기술사적 제언] 문제 복잡도와 비용 예산에 따라 CoT→ReAct→ToT 순으로 단계 적용하고, 평가 함수(휴리스틱) 품질과 호출 횟수 상한을 설계 단계에서 정의"
  },
  {
    "domain": "AI",
    "topic": "인공지능 기본법 (AI Basic Act)",
    "mnemonic": "진·신·고·영 (산업진흥·신뢰기반·고영향AI·영향평가)",
    "definition": "산업 진흥과 신뢰 기반 조성을 위해 제정된 기본 법률",
    "keywords": [
      "인공지능기본법",
      "산업 진흥 및 신뢰 기반",
      "개발사업자·이용사업자",
      "고영향 인공지능 (High-impact)",
      "생성형 AI 투명성 표시(제31조)",
      "10^26 FLOPS 안전성 확보(제32조)",
      "사업자 책무(제34조)",
      "AI 영향평가(제35조)"
    ],
    "diagram": "ai_basic_act.png",
    "tableRows": [
      {
        "major": "입법 목적",
        "minor": "진흥과 신뢰",
        "desc": "AI 기술의 건전한 발전과 산업 진흥, 신뢰 기반 조성 및 국민 기본권 보호를 동시 달성"
      },
      {
        "major": "규율 체계",
        "minor": "사업자 구분",
        "desc": "AI를 직접 개발·공급하는 개발사업자와 이를 활용해 서비스를 제공하는 이용사업자로 책무 분동"
      },
      {
        "major": "규제 대상",
        "minor": "고영향 인공지능",
        "desc": "에너지·보건의료·원자력·채용·대출·교통 등 국민 생명·신체·기본권에 중대한 영향을 미치는 시스템 지정"
      },
      {
        "major": "투명성 의무",
        "minor": "제31조 투명성",
        "desc": "생성형 AI 결과물(딥페이크 포함)에 대한 워터마크 등 생성 사실 표시 및 사전 고지 의무화"
      },
      {
        "major": "안전성 의무",
        "minor": "제32조 대규모 모델",
        "desc": "10^26 FLOPS 이상 대규모 연산 시스템에 대해 전주기 위험 식별·평가 및 과기정통부 보고 의무 부과"
      },
      {
        "major": "사업자 책무",
        "minor": "제34조·제35조",
        "desc": "고영향 AI 위험관리·설명방안 마련, 인간 감독(HITL), 이행문서 5년 보관 및 AI 영향평가 수행"
      }
    ],
    "differentiation": "[비교] 한국 인공지능 기본법 vs EU AI Act\n구분 | 한국 인공지능 기본법 | EU AI Act\n기본 철학 | 산업 진흥 우선 + 신뢰 기반 유연 규율 | 위험 기반(Risk-based) 포괄적 사전 금지·규제\n고위험 기준 | 고영향 AI (인간 개입·설명 중심) | 4단계 위험 분류 (금지/고위험/투명성/최소)\n연산량 임계 | 10^26 FLOPS 이상 안전성 의무 | 10^25 FLOPS (체계적 위험 GPAI)\n제재 수위 | 시정명령 및 과태료 중심 유연 집행 | 전 세계 매출액 최대 7% 과징금\n[기술사적 제언] 국내 기본법은 산업 진흥과 혁신을 저해하지 않도록 원칙 허용·예외 규제 기조를 취하므로, 기업은 ISO 42001과 연계한 사전 컴플라이언스 체계를 선제 구축해야 함"
  },
  {
    "domain": "AI",
    "topic": "EU 인공지능법 (EU AI Act)",
    "mnemonic": "금·고·투·최 (금지·고위험·투명성·최소위험)",
    "definition": "인권 침해 방지 위해 위험 수준별 차등 규제하는 법률",
    "keywords": [
      "위험 기반 규제 (Risk-based)",
      "금지된 AI (Unacceptable)",
      "고위험 AI (High-Risk)",
      "투명성 요구 AI (Specific)",
      "최소 위험 AI (Minimal)",
      "체계적 위험 GPAI (10^25 FLOP)",
      "CE 마크 인증",
      "매출액 7% 과징금"
    ],
    "diagram": "[위험 수준 기반 4단계 차등 규제 피라미드]\n    ▲ [금지된 위험] : 사회적 신용평가(Social Scoring), 실시간 원격 생체인식, 인지조작 ──→ 시장 출시 전면 금지\n   / ＼ [고위험 AI]   : 핵심 인프라, 채용·입학, 의료기기, 사법·치안 ──→ 적합성 평가(CE), 품질관리, 위험평가 필수\n  /     ＼ [투명성 AI] : 챗봇, 딥페이크, 감정인식 ──→ AI 생성물 고지 및 투명성 라벨링 의무\n /         ＼ [최소위험] : 스팸 필터, AI 비디오게임 등 ──→ 자율 규율 및 자발적 행동강령 준수",
    "tableRows": [
      {
        "major": "핵심 원칙",
        "minor": "위험 기반 규제",
        "desc": "AI 시스템이 인간의 안전과 기본권에 미치는 위험 수준에 따라 4단계로 분류하여 차등 규제"
      },
      {
        "major": "규제 등급",
        "minor": "금지된 AI",
        "desc": "인간 행동 왜곡 조작, 사회적 신용평가, 공공장소 실시간 생체인식 등 수용 불가능한 위험 시스템 원천 금지"
      },
      {
        "major": "규제 등급",
        "minor": "고위험 AI",
        "desc": "생명·안전·기본권 영향 시스템에 대해 사전 적합성 평가, 데이터 거버넌스, 로깅, 사이버보안 강제"
      },
      {
        "major": "규제 등급",
        "minor": "범용 AI (GPAI)",
        "desc": "10^25 FLOP 이상 체계적 위험을 지닌 파운데이션 모델에 적대적 테스트 및 중대 사고 보고 의무화"
      },
      {
        "major": "감독 체계",
        "minor": "유럽 AI 위원회",
        "desc": "유럽 인공지능 사무국(AI Office) 신설 및 국가별 감독기구를 통한 집행 체계 구축"
      },
      {
        "major": "제재 조치",
        "minor": "글로벌 과징금",
        "desc": "금지 위반 시 최대 3,500만 유로 또는 전 세계 매출액의 7% 중 높은 금액 부과"
      }
    ],
    "differentiation": "[실무 한계 극복 및 대응 전략]\n① 역외 적용성: EU 역외 기업이라도 EU 내 이용자에게 서비스를 제공하면 동일 적용되므로 국내 수출 기업의 타격 불가피\n② 인증 비용 부담: 고위험 AI 분류 시 제3자 적합성 인증 및 기술문서 작성에 막대한 비용 발생 → MLOps 단계부터 데이터 계보·품질 증적 자동화 필수\n③ 기술사적 제언: EU 시장 진출 기업은 '설계 단계부터의 컴플라이언스(Compliance by Design)'를 수립하고 오픈소스 GPAI 예외 조항을 면밀히 검토해야 함"
  },
  {
    "domain": "AI",
    "topic": "고위험 인공지능 (High-Risk AI)",
    "mnemonic": "인·데·문·로·사 (인간감독·데이터품질·기술문서·로깅·사이버보안)",
    "definition": "기본권 침해 방지 위해 사전 적합성 검증받는 모델",
    "keywords": [
      "고영향 AI",
      "생명·신체·기본권 중대 영향",
      "사전 적합성 평가 (Conformity)",
      "데이터 거버넌스",
      "기술 문서화",
      "자동 로깅 보관",
      "인간 감독 (HITL)",
      "견고성 및 사이버보안"
    ],
    "diagram": "[고위험 AI 적합성 라이프사이클 통제]\n  [위험 식별 및 분류] ──→ [데이터 거버넌스 (편향검증)] ──→ [기술문서/아키텍처 설계]\n           │                                                        │\n           ▼                                                        ▼\n  [시장 사후 모니터링] ←── [CE 적합성 마크 획득] ←── [인간 감독(HITL) & 로깅 구축]",
    "tableRows": [
      {
        "major": "지정 기준",
        "minor": "영향 범위",
        "desc": "의료·교통·에너지 등 핵심 인프라, 채용·승진 평가, 금융 대출 심사, 형사사법 등 인간 삶에 결정적 영향을 미치는 분야"
      },
      {
        "major": "품질 통제",
        "minor": "데이터 거버넌스",
        "desc": "학습·검증 데이터셋의 편향성 검증, 결측치 보정, 대표성 및 무결성 확보 필수"
      },
      {
        "major": "투명성 요건",
        "minor": "기술 문서화",
        "desc": "모델 아키텍처, 학습 알고리즘, 성능 한계 및 적합성 입증 문서를 사전 작성·제출"
      },
      {
        "major": "추적성 요건",
        "minor": "자동 기록(Logging)",
        "desc": "AI 시스템의 전 수명주기 동작 로그와 의사결정 이력을 변조 불가능하게 저장 및 추적"
      },
      {
        "major": "안전 요건",
        "minor": "인간 개입 (HITL)",
        "desc": "완전 자동화 배제, 위험 상황 시 사람이 즉각 정지하거나 개입할 수 있는 인터페이스 보장"
      },
      {
        "major": "보안 요건",
        "minor": "강건성·정확도",
        "desc": "적대적 공격 방어, 이상 징후 감지 및 장애 시 안전 폴백(Fallback) 모드 구비"
      }
    ],
    "differentiation": "[비교] 일반 생성형 AI vs 고위험 AI 규제 요구\n구분 | 일반 생성형 AI | 고위험 인공지능 (High-Risk AI)\n규제 초점 | 투명성 확보 (AI 생성 표기, 워터마크) | 시스템 전주기 안전성·무결성 강제 인증\n인간 개입 | 선택적 (자율 응답 중심) | 필수적 (HITL 인간 감독 체계 의무화)\n데이터 요건 | 저작권 준수 및 학습 데이터 요약 공개 | 데이터 편향 제거, 대표성, 거버넌스 실증\n[기술사적 제언] 기업은 고위험 AI 지정 여부를 서비스 기획 초기 파악하고, ISO 42001 체계를 기반으로 기술문서 및 로깅 인프라를 상시 자동 수집하는 플랫폼 체계를 구축해야 함"
  },
  {
    "domain": "AI",
    "topic": "인공지능 영향평가 (AI Impact Assessment)",
    "mnemonic": "식·분·완·모 (위험식별·영향분석·완화조치·상시모니터링)",
    "definition": "잠재 위험 사전 분석 위해 부작용을 사전 진단하는 절차",
    "keywords": [
      "AI 영향평가 (AIA)",
      "사전 위험성 진단",
      "인권 및 기본권 침해 평가",
      "알고리즘 공정성",
      "데이터 보호 영향평가(DPIA) 연계",
      "위험 완화 조치",
      "이해관계자 의견 수렴",
      "투명성 보고서"
    ],
    "diagram": "[AI 영향평가 (AIA) 4단계 추진 절차]\n  ① [사전 준비] ──→ ② [영향 식별 및 분석] ──→ ③ [완화 방안 수립] ──→ ④ [결과 보고 및 모니터링]\n   - 대상 시스템 정의     - 기본권/차별 위험 분석       - 알고리즘 재설계          - 영향평가 보고서 발행\n   - 평가 지표 수립       - 데이터 편향도 측정          - 인간 감독(HITL) 설계     - 주기적 사후 추적",
    "tableRows": [
      {
        "major": "개념 및 목적",
        "minor": "사전 예방",
        "desc": "AI 도입 시 발생 가능한 사회적·윤리적·기술적 부작용을 서비스 배포 전 선제적으로 분석·평가"
      },
      {
        "major": "평가 영역",
        "minor": "기본권 및 인권",
        "desc": "차별, 사생활 침해, 표현의 자유 위축 등 헌법상 보장된 인간 기본권 훼손 가능성 평가"
      },
      {
        "major": "평가 영역",
        "minor": "공정성 및 편향",
        "desc": "성별·연령·인종·지역 등 특정 집단에 대한 편향된 학습데이터 및 알고리즘 차별 결과 검증"
      },
      {
        "major": "평가 영역",
        "minor": "안전성 및 보안",
        "desc": "시스템 오작동 시 물리적 안전사고 위험, 적대적 공격 및 데이터 유출 취약점 분석"
      },
      {
        "major": "조치 방안",
        "minor": "위험 완화 설계",
        "desc": "식별된 위험에 대한 완화 기술(가드레일, 정규화, 접근 통제) 적용 및 인간 개입 절차 반영"
      },
      {
        "major": "사후 관리",
        "minor": "지속적 모니터링",
        "desc": "모델 배포 후 데이터 드리프트와 성능 변동을 상시 추적하고 주기적 재평가 수행"
      }
    ],
    "differentiation": "[비교] 개인정보 영향평가(PIA) vs AI 영향평가(AIA)\n구분 | 개인정보 영향평가 (PIA/DPIA) | AI 영향평가 (AIA)\n법적 근거 | 개인정보 보호법 제33조 | 인공지능 기본법 제35조\n평가 초점 | 개인정보 오남용 및 침해 위험 | 기본권 침해, 알고리즘 편향, 사회적 안전사고\n평가 시점 | 시스템 구축·변경 시 | 모델 개발·학습·배포 전주기\n[기술사적 제언] AIA는 정량적 평가가 어려우므로 설명가능성(XAI)과 공정성 메트릭(Disparate Impact 등)을 계량화하고, PIA와 통합 프레임워크로 운영하여 기업의 평가 피로도를 최소화해야 함"
  },
  {
    "domain": "AI",
    "topic": "인공지능 윤리기준 (AI Ethics Guidelines)",
    "mnemonic": "존·공·합 / 인프다 침공연 데책안투",
    "definition": "인간 존엄성 보장 위해 3대 원칙 규정한 윤리 규범",
    "keywords": [
      "인공지능 윤리기준",
      "3대 기본원칙",
      "10대 핵심요건",
      "인간 존엄성 원칙",
      "사회적 공공선 원칙",
      "기술의 합목적성 원칙",
      "투명성·책임성·안전성",
      "과기정통부"
    ],
    "diagram": "ai_ethics_principles.png",
    "tableRows": [
      {
        "major": "3대 원칙",
        "minor": "인간 존엄성",
        "desc": "AI는 인간의 생명과 신체, 정신적 안전을 훼손해서는 안 되며 인간의 존엄성을 보장해야 함"
      },
      {
        "major": "3대 원칙",
        "minor": "사회적 공공선",
        "desc": "사회적 약자의 권익을 보호하고 인류의 평화와 지속 가능한 발전에 기여해야 함"
      },
      {
        "major": "3대 원칙",
        "minor": "기술 합목적성",
        "desc": "인간의 삶을 풍요롭게 하는 긍정적 목적으로만 개발·활용되어야 함"
      },
      {
        "major": "10대 요건",
        "minor": "인권·프라이버시",
        "desc": "인권 보장, 프라이버시 보호, 다양성 존중을 통해 개인의 자유와 권리를 수호"
      },
      {
        "major": "10대 요건",
        "minor": "침해금지·공공성",
        "desc": "침해 금지, 공공성 추구, 연대성을 통해 사회적 갈등을 예방하고 공익을 증진"
      },
      {
        "major": "10대 요건",
        "minor": "데이터·책임·안전·투명",
        "desc": "데이터 관리 철저, 책임성 부여, 안전성 보장, 투명성 확보로 신뢰성 있는 AI 구축"
      }
    ],
    "differentiation": "[실무 적용 시 한계 및 제도적 고도화 방안]\n① 선언적 규범의 한계: 법적 강제력이 없는 권고 기준이므로 기업의 실질적 개발 파이프라인 적용에 한계 존재\n② 체크리스트화 및 인증 연계: 과기정통부·TTA의 '신뢰할 수 있는 AI 개발 안내서' 및 CAT 인증 지표로 구체화하여 실무 체크리스트로 전환\n③ 기술사적 제언: 개발 초기 기획서에 윤리 요건 매핑 테이블을 의무화하고, CI/CD 파이프라인 내 공정성·유해성 자동 테스트 가드레일을 내재화해야 함"
  },
  {
    "domain": "AI",
    "topic": "인공지능 경영시스템 (ISO/IEC 42001)",
    "mnemonic": "컨·플·두·체·액 (PDCA 기반 AIMS 거버넌스)",
    "definition": "조직 위험 관리 위해 수명주기 전반 통율하는 국제 표준",
    "keywords": [
      "ISO/IEC 42001:2023",
      "AIMS (AI Management System)",
      "PDCA 사이클",
      "AI 거버넌스",
      "AI 리스크 평가",
      "AI 라이프사이클 통제",
      "MLOps 연계 거버넌스",
      "제3자 적합성 인증"
    ],
    "diagram": "ai_governance_iso42001.png",
    "tableRows": [
      {
        "major": "표준 개요",
        "minor": "ISO 42001:2023",
        "desc": "조직이 AI 기술의 특수성(불확실성, 자율성)으로 발생하는 리스크를 체계적으로 관리하기 위한 최초의 경영시스템 표준"
      },
      {
        "major": "PDCA 프레임워크",
        "minor": "Plan (기획/리더십)",
        "desc": "AI 방침 수립, 조직의 역할 정의, 위험 평가 및 AI 영향평가 절차 설계"
      },
      {
        "major": "PDCA 프레임워크",
        "minor": "Do (운영/지원)",
        "desc": "AI 시스템 수명주기(데이터 획득, 전처리, 모델 개발, 검증, 배포)별 통제 수단 적용"
      },
      {
        "major": "PDCA 프레임워크",
        "minor": "Check (성과평가)",
        "desc": "내부 심사, 모델 드리프트 모니터링, 윤리·보안 준수 여부 경영 검토"
      },
      {
        "major": "PDCA 프레임워크",
        "minor": "Act (개선)",
        "desc": "발견된 부적합 사항 시정 조치, 모델 재학습 및 지속적 거버넌스 개선"
      },
      {
        "major": "통제 부속서",
        "minor": "Annex A 통제",
        "desc": "데이터 품질, 투명성, 편향 방지, 공급망 관리 등 39개 세부 통제 항목 제공"
      }
    ],
    "differentiation": "[비교] ISO/IEC 27001 (정보보호) vs ISO/IEC 42001 (AI 경영)\n구분 | ISO/IEC 27001 | ISO/IEC 42001 (AIMS)\n관리 대상 | 정보 자산의 기밀성·무결성·가용성(CIA) | AI 알고리즘의 공정성, 설명가능성, 윤리성, 신뢰성\n특화 위험 | 해킹, 침해사고, 데이터 유출 | 환각(Hallucination), 데이터 편향, 불투명한 의사결정\n통제 방식 | IT 인프라 및 보안 정책 통제 | MLOps 파이프라인 및 데이터·모델 생명주기 통제\n[기술사적 제언] ISO 42001은 글로벌 규제(EU AI Act, 한국 기본법) 충족의 객관적 증거가 되므로, 기업은 기존 ISMS에 AI 통제 항목을 통합한 '통합 거버넌스'로 추진해야 함"
  },
  {
    "domain": "AI",
    "topic": "책임 있는 인공지능 (Responsible AI)",
    "mnemonic": "공·투·안·책 (공정성·투명성·안전성·책임성)",
    "definition": "사회적 신뢰 확보 위해 설계부터 배포까지 책임지는 원칙",
    "keywords": [
      "Responsible AI (RAI)",
      "공정성 (Fairness)",
      "설명가능성 (Explainability)",
      "프라이버시 및 보안",
      "안전성 및 신뢰성",
      "책임성 (Accountability)",
      "포용성 (Inclusiveness)",
      "AI 가드레일"
    ],
    "diagram": "[책임 있는 AI (RAI) 핵심 4대 기둥 및 실행 체계]\n  ┌─────────────────────────────────────────────────────────────┐\n  │                 [거버넌스 & 리더십 (원칙 및 윤리 정책)]              │\n  └───────┬─────────────────┬─────────────────┬─────────────────┘\n          ▼                 ▼                 ▼                 ▼\n     [ 공정성 ]         [ 투명성 ]         [ 안전성 ]         [ 책임성 ]\n   편향 제거 알고리즘   XAI(LIME/SHAP)   적대적 공격 방어    인간 감독(HITL)\n   불균형 데이터 보정   투명성 보고서     가드레일 필터링    감사 로그 보관\n  ┌───────┴─────────────────┴─────────────────┴─────────────────┐\n  │              [엔지니어링 파이프라인 (자동화된 검증 및 평가)]            │\n  └─────────────────────────────────────────────────────────────┘",
    "tableRows": [
      {
        "major": "핵심 원칙",
        "minor": "공정성 (Fairness)",
        "desc": "학습 데이터 편향을 제거하고 알고리즘이 특정 계층을 차별하지 않도록 통계적 동등성 보장"
      },
      {
        "major": "핵심 원칙",
        "minor": "투명성 및 설명성",
        "desc": "AI 모델의 추론 과정과 출력 근거를 사용자가 이해할 수 있는 언어로 설명(XAI)"
      },
      {
        "major": "핵심 원칙",
        "minor": "안전성 및 신뢰성",
        "desc": "외생적 노이즈나 적대적 프롬프트 공격 하에서도 일관되고 안전하게 동작하도록 보호"
      },
      {
        "major": "핵심 원칙",
        "minor": "프라이버시 보호",
        "desc": "차등 프라이버시(Differential Privacy), 연합학습을 통해 학습 및 추론 시 개인정보 노출 차단"
      },
      {
        "major": "핵심 원칙",
        "minor": "책임성 (Accountability)",
        "desc": "시스템의 오작동 및 피해 발생 시 법적·도덕적 책임을 질 수 있는 관리 주체와 감사 추적성 확립"
      },
      {
        "major": "실행 방안",
        "minor": "가드레일 구축",
        "desc": "NeMo Guardrails, Llama Guard 등 입출력 단계 실시간 안전 필터 계층 상시 구동"
      }
    ],
    "differentiation": "[비교] 일반 MLOps vs RAI 내재화 MLOps\n구분 | 일반 MLOps | RAI (책임 있는 AI) MLOps\n최적화 목표 | 성능 지표 (Accuracy, F1, Latency) | 성능 + 윤리 지표 (Fairness Score, Toxicity, XAI)\n검증 단계 | 모델 검증 및 A/B 테스트 | 편향 감사, 적대적 공격 테스트, 레드팀 평가 추가\n파이프라인 | CI/CD 중심 배포 자동화 | CI/CD + 지속적 거버넌스 및 감사 로그 보존\n[기술사적 제언] RAI는 단순한 선언이 아니라 엔지니어링 규격이므로, 모델 배포 게이트웨이에 '윤리적 단위 테스트(Ethical Unit Test)'를 자동화하는 것이 핵심임"
  },
  {
    "domain": "AI",
    "topic": "인공지능 안전 연구소 (AISI)",
    "mnemonic": "레·평·국·표 (레드팀·위험평가·국제공조·안전표준)",
    "definition": "국가적 안전 담보 위해 첨단 위험을 전문 평가하는 기관",
    "keywords": [
      "AI Safety Institute (AISI)",
      "프론티어 AI 안전 평가",
      "적대적 레드팀 (Red Teaming)",
      "생물화학·사이버 치명 위험",
      "안전 벤치마크 개발",
      "글로벌 공조 네트워크",
      "인공지능기본법 지정",
      "기술 검증"
    ],
    "diagram": "[AI 안전 연구소 (AISI)의 국가 안전 검증 파이프라인]\n  [첨단 AI 모델 개발사] ── 제출 ──→ [AI 안전 연구소 (AISI)]\n                                         │\n              ┌──────────────────────────┼──────────────────────────┐\n              ▼                          ▼                          ▼\n     [ 극한 위험 레드팀 ]       [ 자율적 사이버 탈취 검증 ]   [ 화학/생물 무기화 시험 ]\n   유니버설 탈옥, 안전우회      에이전트 권한 탈취 시험       이중용도 지식 악용 탐지\n              └──────────────────────────┬──────────────────────────┘\n                                         ▼\n                     [ 국가 안전 평가 보고서 및 기준 권고 ]",
    "tableRows": [
      {
        "major": "설립 배경",
        "minor": "글로벌 거버넌스",
        "desc": "영국 블레츨리 파크 정상회의(2023) 이후 한·미·영·일 등 주요국 중심으로 AI 파국적 위험 대응 전문기관 설립"
      },
      {
        "major": "주요 임무",
        "minor": "극한 위험 평가",
        "desc": "차세대 프론티어 AI의 생물학적 무기화, 국가 인프라 사이버 공격 능력 등 치명적 이중용도 위험 사전 평가"
      },
      {
        "major": "핵심 기술",
        "minor": "전문 레드팀",
        "desc": "자동화된 적대적 공격 스크립트 및 전문 화이트해커를 투입하여 탈옥 및 안전장치 우회 가능성 검증"
      },
      {
        "major": "핵심 기술",
        "minor": "안전 벤치마크 개발",
        "desc": "모델의 유해성·기만성·자율적 복제 능력을 정량 측정할 수 있는 표준 평가 프레임워크 개발"
      },
      {
        "major": "정책 지원",
        "minor": "기본법 집행 지원",
        "desc": "국내 인공지능 기본법상 10^26 FLOPS 이상 대규모 모델의 안전성 검증 및 규제 당국 기술 자문 수행"
      },
      {
        "major": "국제 공조",
        "minor": "글로벌 네트워크",
        "desc": "각국 AISI 간 정보 공유 및 글로벌 안전 표준 상호 인증 체계 주도"
      }
    ],
    "differentiation": "[국가별 AISI 비교 및 시사점]\n구분 | 영국 AISI | 미국 AISI (NIST 산하) | 한국 AISI (ETRI/과기부)\n강점 분야 | 프론티어 모델 직접 접근 심층 평가 | NIST AI RMF 연계 표준화 및 가이드라인 | 반도체/하드웨어 연계 안전성 및 기본법 검증\n[기술사적 제언] 국내 AISI는 규제 기관이 아닌 '원천 안전 기술 R&D 센터'로 포지셔닝하여, 기업의 영업비밀을 보호하면서도 안전성을 독립 검증하는 신뢰접근(Trusted Access) 체계를 정립해야 함"
  },
  {
    "domain": "AI",
    "topic": "설명가능 인공지능 (XAI)",
    "mnemonic": "설·투·신 (설명성·투명성·신뢰성)",
    "definition": "판단 근거 제시 위해 블랙박스 추론을 해석하는 기술",
    "keywords": [
      "Explainable AI (XAI)",
      "블랙박스 문제 해결",
      "해석가능성 (Interpretability)",
      "Local vs Global",
      "Model-Agnostic",
      "LIME·SHAP",
      "Grad-CAM",
      "고위험 AI 필수 요건"
    ],
    "diagram": "[전통 AI vs 설명가능 AI (XAI) 비교 구조]\n  [전통 AI] : [입력 데이터] ──→ █ 블랙박스 모델 █ ──→ [출력: \"대출 거절 98%\"] (이유 불명)\n\n  [XAI]     : [입력 데이터] ──→ █ 딥러닝 모델 █ ──→ [출력: \"대출 거절 98%\"]\n                                       │\n                                [XAI 해석 엔진] ──→ [설명: \"연소득 대비 기존 대출 비율이 80% 초과\"]",
    "tableRows": [
      {
        "major": "개념 및 배경",
        "minor": "블랙박스 해소",
        "desc": "복잡한 딥러닝 모델의 내부 동작과 의사결정 근거를 인간이 이해할 수 있는 형태로 제공하는 기술"
      },
      {
        "major": "설명 범위",
        "minor": "Local vs Global",
        "desc": "Local(특정 개별 예측 건의 이유 설명)과 Global(전체 모델의 일반적 의사결정 규칙 설명)"
      },
      {
        "major": "모델 종속성",
        "minor": "Agnostic vs Specific",
        "desc": "Agnostic(모든 모델에 범용 적용, LIME/SHAP)과 Specific(특정 구조 전용, CAM/Grad-CAM)"
      },
      {
        "major": "핵심 기법",
        "minor": "대리 모델 (Surrogate)",
        "desc": "복잡한 블랙박스 모델 주변에 해석 가능한 단순 모델(선형회귀, 결정트리)을 근사하여 해석"
      },
      {
        "major": "핵심 기법",
        "minor": "특성 기여도 산출",
        "desc": "각 입력 변수가 결과 예측에 기여한 중요도를 수치화(Shapley Value 등)"
      },
      {
        "major": "적용 분야",
        "minor": "고영향 도메인",
        "desc": "의료 진단, 금융 대출, 자율주행 사고 분석 등 설명 책무가 법적으로 강제되는 분야"
      }
    ],
    "differentiation": "[비교] 설명가능성(Interpretability) vs 예측성능(Accuracy) 상충관계\n구분 | 단순 모델 (선형회귀, Decision Tree) | 딥러닝/앙상블 (DNN, Transformer)\n예측 정확도 | 상대적 낮음 | 매우 높음\n설명 가능성 | 원천적으로 높음 (White-box) | 매우 낮음 (Black-box)\n해결 방안 | 특성 공학 고도화 | 사후 설명 기법(Post-hoc XAI: LIME, SHAP) 결합\n[기술사적 제언] 실무에서는 원 모델을 훼손하지 않고 설명력을 부여하는 Post-hoc 기법이 선호되나, 대리 모델의 근사 오차가 존재하므로 오차 한계를 명시해야 함"
  },
  {
    "domain": "AI",
    "topic": "LIME (Local Interpretable Model-agnostic Explanations)",
    "mnemonic": "국·섭·대·가 (국소성·섭동생성·대리모델·가중회귀)",
    "definition": "국소 해석 위해 입력 섭동으로 대리 모델 학습 기법",
    "keywords": [
      "Local Interpretable",
      "Model-Agnostic",
      "섭동 데이터 생성 (Perturbation)",
      "국소 영역 근사",
      "가중 선형 회귀",
      "블랙박스 사후 설명",
      "텍스트/이미지 설명",
      "연산 효율성"
    ],
    "diagram": "[LIME의 국소 대리 모델 생성 메커니즘]\n  1. 해석 대상 샘플 (★) 선택\n  2. 샘플 주변에 노이즈를 준 변형 데이터(○, ●) 다수 생성 (Perturbation)\n  3. 블랙박스 모델로 변형 데이터들의 예측값 획득\n  4. 원본 샘플과의 거리에 따라 가중치 부여 (가까울수록 높은 가중치)\n  5. 국소 영역에 단순 선형 분류기(선형 경계선)를 학습시켜 특성별 가중치 산출",
    "tableRows": [
      {
        "major": "핵심 원리",
        "minor": "국소적 충실성",
        "desc": "전체 모델은 복잡해도 특정 데이터 포인트 주변의 매우 작은 국소 영역은 선형으로 근사 가능하다는 점을 이용"
      },
      {
        "major": "절차",
        "minor": "데이터 섭동",
        "desc": "설명하려는 원본 데이터에 미세한 노이즈를 주거나 단어·슈퍼픽셀을 제거하여 변형 샘플 생성"
      },
      {
        "major": "절차",
        "minor": "예측 및 가중치",
        "desc": "변형 샘플들을 원본 블랙박스에 통과시켜 레이블을 얻고, 원본과의 유사도(거리) 기반 가중치 부여"
      },
      {
        "major": "절차",
        "minor": "해석 모델 학습",
        "desc": "유사도 가중치를 반영한 단순 선형 회귀(Ridge 등) 모델을 학습하여 계수를 설명으로 제공"
      },
      {
        "major": "모달리티 지원",
        "minor": "정형·텍스트·이미지",
        "desc": "텍스트는 단어 유무, 이미지는 슈퍼픽셀 마스킹을 통해 중요 영역 시각화"
      },
      {
        "major": "한계점",
        "minor": "불안정성",
        "desc": "샘플링 방식에 따라 설명 결과가 매번 달라질 수 있으며 적절한 국소 반경(Kernel Width) 설정이 난제"
      }
    ],
    "differentiation": "[비교] LIME vs SHAP\n구분 | LIME | SHAP\n이론적 배경 | 경험적 국소 대리 모델 근사 | 협조적 게임이론 (Shapley Value)\n수학적 일관성 | 보장되지 않음 (매 실행 시 오차) | 수학적 공리 만족 (완전성, 일관성 보장)\n계산 속도 | 상대적 빠름 (실시간 근사 유리) | 변수 증가 시 지수적 연산량 급증\n설명 범위 | 국소적 (Local) 전용 | 국소적 (Local) 및 전역적 (Global) 모두 지원\n[기술사적 제언] 대규모 서비스 트래픽 환경의 빠른 실시간 해석에는 LIME을 적용하고, 감사 및 금융 분쟁 등 엄격한 법적 신뢰성이 요구될 때는 SHAP을 채택하는 이원화 전략 필요"
  },
  {
    "domain": "AI",
    "topic": "SHAP (SHapley Additive exPlanations)",
    "mnemonic": "한·가·일·대 (한계기여도·가법성·일관성·대칭성)",
    "definition": "기여도 정량화 위해 샤플리 값을 계산하는 설명 기법",
    "keywords": [
      "Shapley Value",
      "게임이론 기반",
      "Additive Feature Attribution",
      "공리 만족 (효율성·대칭성·더미·가법성)",
      "TreeSHAP / KernelSHAP",
      "Global & Local 설명",
      "특성 기여도 공정 배분",
      "XAI 표준"
    ],
    "diagram": "[SHAP의 기여도 배분: 협조적 게임이론 적용]\n  전체 특성 집합 {나이, 소득, 부채} → 대출 거절 확률 85% (기본 평균 30% 대비 +55% 기여)\n  - 소득: -10% (승인에 기여)\n  - 부채: +45% (거절에 결정적 기여)  ── 합산(가법성): 30% + (-10%) + (+45%) + (+20%) = 85%\n  - 나이: +20% (거절에 기여)",
    "tableRows": [
      {
        "major": "수학적 기반",
        "minor": "Shapley Value",
        "desc": "모든 가능한 변수 조합(플레이어 연합)에서 특정 변수가 추가될 때의 한계 기여도(Marginal Contribution) 가중 평균"
      },
      {
        "major": "핵심 특성",
        "minor": "4대 공리 충족",
        "desc": "효율성(기여도 총합=예측값-평균), 대칭성(동일 기여 변수는 동일 값), 더미(무영향 변수는 0), 가법성 만족"
      },
      {
        "major": "가법적 설명",
        "minor": "설명 모델",
        "desc": "g(z') = φ₀ + Σ φᵢz'ᵢ 형태로 각 특성의 기여도 φᵢ의 단순 합으로 예측치를 완벽하게 복원"
      },
      {
        "major": "구현 알고리즘",
        "minor": "TreeSHAP",
        "desc": "XGBoost, LightGBM 등 트리 모델에 대해 지수 연산 O(TL2^M)을 O(TLD^2)의 다항 시간으로 가속"
      },
      {
        "major": "구현 알고리즘",
        "minor": "KernelSHAP",
        "desc": "임의의 블랙박스 모델에 대해 LIME 방식의 가중 선형 회귀로 Shapley 값을 근사"
      },
      {
        "major": "시각화 도구",
        "minor": "다양한 플롯",
        "desc": "Force Plot, Waterfall Plot(개별 기여도) 및 Summary Plot, Dependence Plot(전체 특성 중요도)"
      }
    ],
    "differentiation": "[비교] TreeSHAP vs KernelSHAP vs DeepSHAP\n구분 | TreeSHAP | KernelSHAP | DeepSHAP\n대상 모델 | 트리 기반 앙상블 전용 | 모든 블랙박스 모델 | 심층 신경망 (Deep Learning)\n정확도 | 정확한 참값 Shapley 계산 | 표본 샘플링 기반 근사치 | DeepLIFT 결합 근사치\n계산 성능 | 매우 빠름 (실무 활용 최다) | 변수 많을 시 극도로 느림 | 딥러닝 특화 고속 연산\n[기술사적 제언] 정형 데이터 기반 의사결정 시스템에서는 성능과 수학적 무결성을 모두 갖춘 TreeSHAP이 사실상의 산업 표준이며, 파이프라인 자동화 시 캐싱 전략 병행 필수"
  },
  {
    "domain": "AI",
    "topic": "환각 방지 거버넌스 (Hallucination Governance)",
    "mnemonic": "개·정·추·운 (개발가드레일·정렬검증·추적성·운영감사)",
    "definition": "환각 위험 통제 위해 전주기 검증 관리하는 체계",
    "keywords": [
      "환각 거버넌스",
      "Hallucination Metric (환각률)",
      "RAG 접지율 (Faithfulness)",
      "RAGAS 프레임워크",
      "출력 가드레일 (NeMo/Llama Guard)",
      "사실성 검증 (Fact-checking)",
      "Red Teaming",
      "인간 검토 (HITL)"
    ],
    "diagram": "[생성형 AI 환각 방지 전주기 거버넌스 체계]\n  [입력 단계] ──→ [추론/생성 단계] ──→ [출력 검증 단계] ──→ [운영 및 감사]\n   - 프롬프트 제약    - 신뢰 RAG 지식 결합   - 사실성 검증 가드레일   - 환각률 KPI 모니터링\n   - 의도 분류 필터   - 온도(T) 파라미터 제어 - 인용 출처 일치성 검사  - 주기적 레드팀 감사",
    "tableRows": [
      {
        "major": "거버넌스 목표",
        "minor": "신뢰성 확보",
        "desc": "LLM의 확률적 생성 특성으로 발생하는 허위 정보가 비즈니스 및 법적 리스크로 비화하는 것을 방지"
      },
      {
        "major": "기술적 통제",
        "minor": "RAG & 접지",
        "desc": "도메인 신뢰 지식베이스 기반 RAG를 적용하고, 문서 인용 출처 매핑을 강제하여 비접지 답변 원천 차단"
      },
      {
        "major": "기술적 통제",
        "minor": "자동 검증 파이프라인",
        "desc": "RAGAS, ARES 지표를 활용해 충실성(Faithfulness), 답변 관련성(Answer Relevance)을 정량 산출"
      },
      {
        "major": "실시간 통제",
        "minor": "가드레일 레이어",
        "desc": "모델 출력 직후 가드레일(NeMo, Guardrails AI)이 사실성 판별 LLM을 통해 환각 판정 시 재질의 또는 차단"
      },
      {
        "major": "조직적 통제",
        "minor": "위험 등급별 HITL",
        "desc": "법률·의료·금융 등 고위험 답변은 자동 발송을 금지하고 전문가의 사전 승인 절차 의무화"
      },
      {
        "major": "사후 관리",
        "minor": "환각 감사 체계",
        "desc": "환각 발생 로그 저장, 사용자 피드백(Thumbs-down) 분석을 통한 프롬프트 및 RAG 청킹 지속 개선"
      }
    ],
    "differentiation": "[비교] 기술적 환각 완화 vs 거버넌스적 환각 통제\n구분 | 기술적 완화 (Technical Mitigation) | 거버넌스적 통제 (Governance Control)\n주요 수단 | RAG, CoVe, 파인튜닝, 낮은 Temperature | 위험 등급 분류, 배포 게이트웨이, HITL 승인, 책임 규정\n한계 | 모델 레벨의 환각 완전 0% 불가능 | 기술 한계를 인정하고 업무 위험으로 전이되는 경로를 차단\n[기술사적 제언] 환각을 100% 제거하는 모델은 존재할 수 없으므로, 거버넌스의 핵심은 '환각이 발생해도 비즈니스 피해로 이어지지 않는 다중 안전 방벽(Fail-Safe)'을 설계하는 것임"
  },
  {
    "domain": "AI",
    "topic": "피지컬 AI (Physical AI)",
    "mnemonic": "인·월·행 (인지센서·월드모델·체화행동)",
    "definition": "물리 세계 자율 행동 위해 물리 실체에 구현된 모델",
    "keywords": [
      "체화 지능 (Embodied Intelligence)",
      "물리적 실체",
      "실시간 상호작용",
      "월드 모델 (World Model)",
      "VLA (Vision-Language-Action)",
      "Sim-to-Real",
      "실패의 비가역성",
      "ISO/PAS 8800"
    ],
    "diagram": "ai_physical.png",
    "tableRows": [
      {
        "major": "개념 및 특성",
        "minor": "Embodied AI",
        "desc": "인공지능이 로봇, 자율주행체 등 물리적 하드웨어에 탑재되어 현실 세계를 인지하고 실시간 물리적 행동을 수행"
      },
      {
        "major": "인지 영역",
        "minor": "센서 융합",
        "desc": "카메라, LiDAR, 레이더, IMU, 촉각 센서 등을 통합하여 3차원 물리 환경을 실시간 동적 인식"
      },
      {
        "major": "모델 영역",
        "minor": "월드 모델 (WFM)",
        "desc": "물리 법칙(중력, 마찰력, 충돌)을 내재화하여 행동의 결과를 사전에 시뮬레이션하고 예측(Cosmos 등)"
      },
      {
        "major": "행동 영역",
        "minor": "VLA 모델",
        "desc": "시각적 입력과 언어 명령을 로봇의 저수준 모터 제어 신호(액추에이터 토크)로 직접 종단간 매핑"
      },
      {
        "major": "학습 기법",
        "minor": "Sim-to-Real",
        "desc": "가상 디지털 트윈 환경에서 대규모 강화학습을 수행한 후 현실 로봇으로 전이하여 위험과 비용 최소화"
      },
      {
        "major": "안전 표준",
        "minor": "ISO/PAS 8800",
        "desc": "오작동 시 인명 피해로 직결되는 '실패의 비가역성' 극복을 위한 AI 기능안전 표준 준수"
      }
    ],
    "differentiation": "[비교] 생성형 AI (Cyber AI) vs 피지컬 AI (Physical AI)\n구분 | 생성형 AI (Cyber AI) | 피지컬 AI (Physical AI)\n작동 도메인 | 디지털 공간 (텍스트, 이미지, 코드) | 물리적 현실 세계 (로봇, 자율주행차, 스마트팩토리)\n출력 형태 | 디지털 콘텐츠 | 액추에이터 구동 신호 및 물리적 변위\n오류 영향 | 정보 왜곡, 환각 (가역적 복구 가능) | 충돌, 파손, 인명 상해 등 '실패의 비가역성'\n핵심 모델 | LLM, LMM | VLA (Vision-Language-Action), World Foundation Model\n[기술사적 제언] 피지컬 AI는 소프트웨어 업데이트만으로 통제할 수 없으므로, HW 레벨의 기계식 안전 정지 장치(E-Stop)와 ISO/PAS 8800 기반 결정론적 안전 모니터링 모듈이 필수적임"
  },
  {
    "domain": "AI",
    "topic": "프론티어 AI (Frontier AI)",
    "mnemonic": "분·폴·신·데 (안전분류기·폴백·신뢰접근·데이터보존)",
    "definition": "창발적 위험 통제 위해 접근 경로를 계층 제어하는 모델",
    "keywords": [
      "Frontier AI",
      "10^26 FLOP 임계값",
      "창발적 위험 (Emergent Risk)",
      "이중용도 위험 (Dual-Use)",
      "안전 분류기 (Safety Classifier)",
      "모델 폴백 (Fallback)",
      "신뢰접근 (Trusted Access)",
      "유니버설 탈옥 방어"
    ],
    "diagram": "ai_frontier.png",
    "tableRows": [
      {
        "major": "개념 및 식별",
        "minor": "최첨단 범용성",
        "desc": "현존 최고 성능 경계에 위치하며 예측 불가능한 창발적 위험 능력을 내포한 범용 AI (10^26 FLOP 기준)"
      },
      {
        "major": "위험 영역",
        "minor": "이중용도 (Dual-Use)",
        "desc": "사이버 공격 자동화(에이전틱 해킹), 생물·화학 무기 설계, 미통제 모델 증류(Distillation) 확산 위험"
      },
      {
        "major": "안전 조치",
        "minor": "안전 분류기",
        "desc": "본 모델과 분리된 별도의 AI 가드레일이 오용 및 유니버설 탈옥 시도를 사전 탐지하여 차단"
      },
      {
        "major": "안전 조치",
        "minor": "모델 폴백 (Fallback)",
        "desc": "단순 거절 대신 차하위 안전 모델로 전환하여 응답함으로써 오탐 시 이용자 경험 손실 최소화"
      },
      {
        "major": "안전 조치",
        "minor": "신뢰접근 프로그램",
        "desc": "검증된 국가 안보·연구 기관에 한해 엄격한 심사를 거쳐 보안 영역별 차등 해제판(Mythos) 제공"
      },
      {
        "major": "사후 관리",
        "minor": "데이터 한시 보존",
        "desc": "악용 시도 모니터링을 위해 트래픽을 한시 보존하고 엄격한 접근 통제 및 기한 후 영구 파기"
      }
    ],
    "differentiation": "[비교] 프론티어 AI의 배포 전략 (Claude Fable vs Mythos 체계)\n구분 | 일반 공개 모델 (Fable 계열) | 승인기관 전용 모델 (Mythos 계열)\n안전장치 | 4대 안전 조치 (분류기·폴백·가드레일) 전면 적용 | 심사 승인된 특정 분야(사이버 방어 등) 안전조치 선택적 해제\n대상 사용자 | 전 세계 일반 대중 및 기업 | 정부 기관, 핵심 인프라 방어자, 공인 생명과학 연구소\n핵심 철학 | \"능력(Capability)의 제한이 아닌, 접근 경로(Access)의 계층적 통제\"\n[기술사적 제언] 국내 AI 기본법 집행 시에도 프론티어 AI의 이중 배포 전략을 벤치마킹하여, 방어 목적의 국가 연구 역량을 저해하지 않는 차등화된 안전 규제 체계를 수립해야 함"
  },
  {
    "domain": "AI",
    "topic": "소버린 AI (Sovereign AI)",
    "mnemonic": "인데인 (인프라·데이터·인재/모델 자립)",
    "definition": "디지털 주권 위해 자체 인프라와 데이터로 구축한 모델",
    "keywords": [
      "Sovereign AI",
      "데이터 주권 (Data Sovereignty)",
      "문화적·언어적 정체성",
      "자체 AI 인프라 (GPU 팜)",
      "토착 파운데이션 모델",
      "규제 및 거버넌스 독립",
      "빅테크 종속 탈피",
      "국가 안보"
    ],
    "diagram": "[소버린 AI (Sovereign AI)의 3대 독립 자립 기둥]\n  ┌─────────────────────────────────────────────────────────────┐\n  │                    [ 국가 디지털 주권 & 경제 안보 ]                   │\n  └───────┬─────────────────────┬─────────────────────┬─────────┘\n          ▼                     ▼                     ▼\n   [ 인프라 주권 ]        [ 데이터 & 모델 주권 ]     [ 거버넌스 주권 ]\n   국가 GPU 컴퓨팅 팜    자국어/문화 특화 파운데이션 국가 AI 기본법 독자 규율\n   국산 NPU 가속기 생태계  공공·국방 데이터 역외이전 차단  자체 AI 안전 연구소(AISI)",
    "tableRows": [
      {
        "major": "개념 및 배경",
        "minor": "빅테크 종속 탈피",
        "desc": "외산 빅테크 AI 종속을 탈피하고 자국의 데이터, 인프라, 인재를 활용해 독립적인 AI 역량을 구축하는 패러다임"
      },
      {
        "major": "데이터 주권",
        "minor": "역외 이전 차단",
        "desc": "공공, 국방, 의료 등 국가 핵심 데이터의 국외 반출을 엄격히 방지하고 자국 클라우드 내 보관"
      },
      {
        "major": "문화적 정체성",
        "minor": "토착 모델 구축",
        "desc": "서구권 중심의 가치관 편향에서 벗어나 자국의 역사, 문화, 법률, 언어 뉘앙스를 정확히 반영하는 모델 확보"
      },
      {
        "major": "인프라 자립",
        "minor": "컴퓨팅 파워",
        "desc": "국가 슈퍼컴퓨팅 센터, 국산 AI 반도체(NPU) 생태계 조성을 통해 글로벌 GPU 공급망 교란에 대응"
      },
      {
        "major": "국가 안보",
        "minor": "치명 인프라 제어",
        "desc": "국가 기간망, 국방 무기체계, 금융망 등 핵심 시스템의 외부 백도어 침투 및 원격 차단 리스크 배제"
      },
      {
        "major": "경제적 효과",
        "minor": "자립 생태계",
        "desc": "자국 기업의 독자적 AI 기술 축적을 유도하고 글로벌 라이선스 종속에 따른 국부 유출 방지"
      }
    ],
    "differentiation": "[비교] 글로벌 범용 AI vs 소버린 AI\n구분 | 글로벌 빅테크 AI (OpenAI, Google) | 소버린 AI (Sovereign AI)\n데이터 보관 | 글로벌 분산 데이터센터 (해외 저장) | 국경 내 데이터센터 (로컬 온프레미스/소버린 클라우드)\n문화적 정렬 | 영미권 문화 및 보편적 서구 가치관 | 자국 헌법, 역사, 전통, 고유 언어 가치관 정렬\n공급망 리스크 | 수출 통제 및 계정 중단 시 서비스 마비 | 독자 인프라 구동으로 지정학적 위기 시 연속성 보장\n[기술사적 제언] 막대한 컴퓨팅 비용을 감안할 때 완전한 독자 개발보다는 오픈웨이트 모델을 국산 NPU에 최적화하여 도메인 특화 SLM으로 경량화 배포하는 현실적 연합 전략이 주효함"
  },
  {
    "domain": "모의고사",
    "topic": "공공 SLA (Service Level Agreement)",
    "mnemonic": "서·지·목·평·보 / 적·투·품·자",
    "definition": "공공 정보시스템 품질 보장 위한 서비스 수준 협약 체계",
    "details": "[수요기관(발주처)] <─── SLA 협약 (SLI/SLO·페널티·보상) ───> [민간 운영사업자]\n       │ (월간 성과 측정 · 지표 평가 · CSI 지속 개선)             │\n       └──────> [적정 대가 산정 · 무상 하자보수 분쟁 방지 · 서비스 품질 제고]",
    "tableRows": [
      {
        "category": "도입 배경",
        "sub": "2027 의무화",
        "desc": "전자정부법 및 SW진흥법 개정 기반 공공 IT 운영·유지관리 사업 SLA 전면 의무화"
      },
      {
        "category": "핵심 구성",
        "sub": "SLI (측정지표)",
        "desc": "가용률(99.9%), 평균 복구시간(MTTR), 응답시간, 장애 건수 등 정량 측정 지표"
      },
      {
        "category": "",
        "sub": "SLO (목표수준)",
        "desc": "최소 허용 수준(Minimum) 및 기대 목표치(Target) 설정을 통한 등급화"
      },
      {
        "category": "관리 체계",
        "sub": "페널티 및 인센티브",
        "desc": "협약 미달 시 위약금(서비스 크레딧) 부과, 초과 달성 시 인센티브·재계약 우대"
      },
      {
        "category": "기대 효과",
        "sub": "과업변경 통제",
        "desc": "관행적 무상 과업 지시 근절 및 정량적 산출물 기반 적정 대가 지급 체계 확립"
      }
    ],
    "keywords": [
      "공공 SLA 의무화",
      "SLI",
      "SLO",
      "가용성",
      "MTTR",
      "페널티",
      "CSI(지속적 개선)"
    ],
    "differentiation": "[유형 B] 공공 SLA 도입 시 실무 한계 및 극복 방안\n① 획일적 지표 한계: 기관·시스템 특성을 무시한 천편일률적 지표(단순 가용률 위주) 설정 시 형식적 운영 전락 → 시스템 중요도 등급별 맞춤형 SLI/SLO 테일러링 필수.\n② 클라우드·AI 전환 대응: MSP/CSP 다중 공급자 환경에서 장애 책임 소재 불분명 → 통합 거버넌스 기반 Multi-Vendor OLA(운영수준협약) 및 UC(하위계약) 연계 체계 구축."
  },
  {
    "domain": "모의고사",
    "topic": "BCP (업무연속성계획, Business Continuity Planning)",
    "mnemonic": "분석·설계·구현·시험·유지 / R·R·M·W",
    "definition": "재해 시 핵심 비즈니스 연속성 확보하는 전사 복구 체계",
    "details": "[재해 발생(T0)] ──(RTO: 복구목표시간)──> [비상 복구(T1)] ──(WRT)──> [정상 가동(T2)]\n  * MTD(최대허용중단시간) >= RTO + WRT  |  데이터 복구 목표 시점: RPO",
    "tableRows": [
      {
        "category": "핵심 개념",
        "sub": "업무 연속성 확보",
        "desc": "재난·재해·사이버 공격 발생 시에도 핵심 비즈니스를 중단 없이 유지·복구하는 계획"
      },
      {
        "category": "수립 5단계",
        "sub": "BIA → 전략 → 개발",
        "desc": "업무영향분석(BIA) → 복구전략 수립 → BCP 계획 개발 → 모의훈련(Test) → 유지보수"
      },
      {
        "category": "복구 지표",
        "sub": "RTO / RPO",
        "desc": "RTO(목표복구시간: 서비스 중단 허용 시간), RPO(목표복구시점: 데이터 손실 허용 시점)"
      },
      {
        "category": "",
        "sub": "WRT / MTD",
        "desc": "WRT(업무복구시간: 데이터 검증·무결성 확인), MTD(최대허용중단시간 = RTO + WRT)"
      },
      {
        "category": "국제 표준",
        "sub": "ISO 22301",
        "desc": "PDCA 기반 비즈니스 연속성 관리 시스템(BCMS) 국제 인증 표준"
      }
    ],
    "keywords": [
      "ISO 22301",
      "BCMS",
      "RTO",
      "RPO",
      "WRT",
      "MTD",
      "DRS(재해복구시스템)"
    ],
    "differentiation": "[유형 A] BCP vs BIA vs DRP 비교\n① BIA(업무영향분석): BCP 수립의 선행 단계로 핵심 업무 식별 및 RTO/RPO 목표치를 도출하는 분석 과정.\n② BCP(업무연속성계획): IT뿐만 아니라 인력·시설·공급망·거버넌스를 포괄하는 전사 비즈니스 복구 마스터플랜.\n③ DRP(재해복구계획): BCP의 하위 영역으로 IT 인프라·데이터센터(Mirror/Hot/Warm/Cold Site) 기술적 복구에 집중."
  },
  {
    "domain": "모의고사",
    "topic": "BIA (업무영향분석, Business Impact Analysis)",
    "mnemonic": "업·위·영·목·자 / 재무·비재무",
    "definition": "업무 중단 파급효과를 분석해 복구 목표시간 도출 기법",
    "details": "[전사 업무 식별] ──> [중단 시 재무·비재무 영향 평가] ──> [핵심 업무 등급화] ──> [RTO·RPO·자원 도출]",
    "tableRows": [
      {
        "category": "핵심 목적",
        "sub": "복구 우선순위 결정",
        "desc": "재해 시 어떤 업무와 시스템을 가장 먼저 복구할지 정량·정성적 근거 제시"
      },
      {
        "category": "분석 요소",
        "sub": "재무적 영향",
        "desc": "매출 손실, 위약금·페널티, 추가 복구 비용, 주가 하락 등 화폐 가치 환산"
      },
      {
        "category": "",
        "sub": "비재무적 영향",
        "desc": "대외 신뢰도 추락, 법적·규제 위반 제재, 고객 이탈, 인명·안전 피해"
      },
      {
        "category": "수행 절차",
        "sub": "업무파악 → 영향산정",
        "desc": "업무 프로세스 식별 → 중단 시나리오 분석 → 영향도 평가 → RTO/RPO 및 핵심자원 정의"
      },
      {
        "category": "주요 산출물",
        "sub": "업무중요도 등급표",
        "desc": "Critical / Vital / Sensitive / Non-critical 등급 분류 및 복구 목표시간 명세서"
      }
    ],
    "keywords": [
      "업무영향분석",
      "복구 우선순위",
      "RTO/RPO 도출",
      "재무적 손실",
      "비재무적 영향",
      "핵심자원 식별"
    ],
    "differentiation": "[유형 A] BIA(업무영향분석) vs RA(위험분석, Risk Assessment) 비교\n① 분석 관점: RA는 재해 발생 전 '위협·취약점·발생가능성(사전 예방)'에 집중하는 반면, BIA는 이미 사건이 발생했다는 가정 하에 '중단 시 피해 규모와 복구 시한(사후 생존)'에 집중.\n② 산출 결과: RA는 위험 완화 통제 대책을 산출하고, BIA는 핵심 업무별 RTO·RPO와 DRS 미러/핫사이트 투자 수준을 결정."
  },
  {
    "domain": "모의고사",
    "topic": "ISO 21500 (프로젝트 관리 국제표준)",
    "mnemonic": "5프로세스그룹 · 10주제그룹 / 착·기·실·통·종",
    "definition": "글로벌 프로젝트 관리 일관성을 위한 프로세스 국제표준",
    "details": "[5대 프로세스 그룹] 착수(Initiating) → 계획(Planning) → 실행(Implementing) → 통제(Controlling) → 종료(Closing)\n[10대 주제 그룹] 통합 · 이해관계자 · 범위 · 자원 · 시간 · 원가 · 위험 · 품질 · 조달 · 의사소통 (39개 프로세스 매핑)",
    "tableRows": [
      {
        "category": "표준 개요",
        "sub": "De Jure 국제표준",
        "desc": "PMI PMBOK, PRINCE2 등을 조화시켜 ISO가 제정한 프로젝트 관리 국제 표준 지침"
      },
      {
        "category": "5대 프로세스군",
        "sub": "착·기·실·통·종",
        "desc": "착수(Initiating), 계획(Planning), 실행(Implementing), 통제(Controlling), 종료(Closing)"
      },
      {
        "category": "10대 주제군",
        "sub": "통이범자시원위품조의",
        "desc": "통합, 이해관계자, 범위, 자원, 시간, 원가, 위험, 품질, 조달, 의사소통 (총 39개 프로세스)"
      },
      {
        "category": "구조적 특징",
        "sub": "투입물·산출물 중심",
        "desc": "특정 기법/도구(Tools & Techniques)를 강제하지 않고 프로세스 간 Input/Output 흐름만 규정"
      },
      {
        "category": "진화 체계",
        "sub": "ISO 21502 연계",
        "desc": "ISO 21500(개요·용어 프레임워크) 및 ISO 21502(프로젝트 관리 실무 지침) 시리즈로 고도화"
      }
    ],
    "keywords": [
      "De Jure 표준",
      "5대 프로세스 그룹",
      "10대 주제 그룹",
      "39개 프로세스",
      "ISO 21502",
      "테일러링"
    ],
    "differentiation": "[유형 A] ISO 21500 vs PMBOK 7판 패러다임 변화 비교\n① ISO 21500: 프로세스 기반(5개 프로세스군 × 10개 주제군 = 39개 프로세스)으로 공공·글로벌 다국적 컨소시엄의 표준 프로세스 정립에 최적.\n② PMBOK 7판: 프로세스 중심에서 12가지 원칙 및 8대 성과 영역(Performance Domains) 기반의 가치 전달 시스템(Value Delivery) 및 하이브리드·애자일 수용으로 전환."
  },
  {
    "domain": "모의고사",
    "topic": "공급망 관리 (SCM, Supply Chain Management)",
    "mnemonic": "계·조·생·배·반 / 채찍효과(Bullwhip)",
    "definition": "공급망 전반 물류·정보 흐름 최적화하는 통합 관리 체계",
    "details": "[원자재 공급자] ──> [제조업체(생산)] ──> [물류·유통센터] ──> [소매상/고객]\n  * 핵심 난제: 하류 수요 왜곡이 상류로 갈수록 증폭되는 채찍효과(Bullwhip Effect)\n  * 해법: 실시간 수요정보 공유(POS/EDI), VMI(공급자주도재고), CPFR(협업적 계획·예측·보충)",
    "tableRows": [
      {
        "category": "핵심 개념",
        "sub": "공급망 통합 최적화",
        "desc": "원재료 조달부터 생산·유통·고객 인도까지 전 과정의 물류·정보·자금 흐름을 단일 망으로 최적화"
      },
      {
        "category": "표준 모델",
        "sub": "SCOR 5대 프로세스",
        "desc": "Plan(계획), Source(조달), Make(생산), Deliver(배송), Return(반품) 표준 참조 모델"
      },
      {
        "category": "구성 체계",
        "sub": "SCP (공급망 계획)",
        "desc": "수요 예측, 생산·구매·운송 계획 시뮬레이션 및 최적화 의사결정 지원"
      },
      {
        "category": "",
        "sub": "SCE (공급망 실행)",
        "desc": "주문 관리(OMS), 창고 관리(WMS), 운송 관리(TMS) 등 실시간 물리적 물류 실행"
      },
      {
        "category": "핵심 이슈",
        "sub": "채찍효과 (Bullwhip)",
        "desc": "소비자 수요의 작은 변동이 공급망 상류로 갈수록 크게 증폭되는 현상 (정보 공유·VMI로 완화)"
      }
    ],
    "keywords": [
      "채찍효과(Bullwhip Effect)",
      "SCOR 모델",
      "SCP/SCE",
      "VMI",
      "CPFR",
      "디지털 공급망(DSC)"
    ],
    "differentiation": "[유형 C] AI·디지털 트윈 기반 차세대 디지털 공급망(DSC) 진화 제언\n① 전통적 SCM의 한계: 지정학적 리스크, 팬데믹 등 블랙스완급 공급망 단절 시 과거 통계 기반 예측 모델 붕괴.\n② AI·디지털 트윈 SCM: 공급망 디지털 트윈으로 물류 병목 시나리오를 사전 모의실험하고, 스코프 3(Scope 3) 탄소배출 추적 및 SBOM 기반 SW 공급망 보안까지 통합 관리."
  },
  {
    "domain": "모의고사",
    "topic": "IT 투자성과지표와 프레임워크 (IT ROI & Valuation)",
    "mnemonic": "재무(R·N·I·P) · 비재무(B·I·C)",
    "definition": "IT 투자 타당성 검증과 가치 극대화를 위한 평가 체계",
    "diagramImg": "exam_q5.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 재무적 지표 (전통적) | ROI / NPV | 투자수익률(ROI) 및 현금흐름 현재가치 할인 기반 순현재가치(NPV > 0 타당) |\n| | IRR / PP | 내부수익률(IRR > 할인율) 및 투자원금 회수기간(Payback Period) 산정 |\n| 비재무·무형자산 | 정보경제학 (IE) | 파커·벤슨 모델, 재무적 효과 외 전략적 일치성·경쟁우위·위험도를 가중치 합산 |\n| | 균형성과표 (IT-BSC) | 재무, 고객(사용자), 내부 프로세스, 학습과 성장의 4대 관점 균형 성과 관리 |\n| 확률·위험 기반 | 실물옵션 (Real Option) | 불확실성 하에서 투자 연기·확장·축소·포기 권리를 블랙-숄즈 모형으로 가치화 |",
    "keywords": [
      "ROI",
      "NPV",
      "IRR",
      "IT-BSC",
      "정보경제학(IE)",
      "실물옵션(Real Option)",
      "TCO"
    ],
    "differentiation": "[유형 B] AX(AI 전환) 투자 평가 시 전통적 ROI의 한계와 극복 방안\n① 전통적 ROI 한계: 생성형 AI·클라우드 인프라 투자는 초기 비용(GPU·데이터 정제)이 막대하고 무형의 생산성·품질 효과가 지연 발생하여 단기 NPV 평가 시 기각 위험.\n② 다차원 포트폴리오 평가: TCO(총소유비용) 및 FinOps 단위 경제성 지표와 실물옵션(PoC 후 단계적 확장 옵션)을 결합한 단계별 게이트웨이(Stage-Gate) 투자 거버넌스 적용."
  },
  {
    "domain": "모의고사",
    "topic": "애자일 원칙 (Agile Manifesto & 12 Principles)",
    "mnemonic": "개·작·협·변 (4대 가치) / 만·변·자·협 (12원칙)",
    "definition": "불확실성 극복 위해 작동 SW와 고객협업 중시하는 철학",
    "diagramImg": "exam_q6.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 4대 핵심 가치 | 개인과 상호작용 | 프로세스와 도구보다 개인과 상호작용(Individuals & Interactions)을 우선 |\n| | 작동하는 소프트웨어 | 포괄적인 문서보다 작동하는 소프트웨어(Working Software)를 우선 |\n| | 고객과의 협업 | 계약 협상보다 고객과의 지속적 협업(Customer Collaboration)을 우선 |\n| | 변화에 대한 대응 | 계획 고수보다 변화에 대한 민첩한 대응(Responding to Change)을 우선 |\n| 12대 실천 원칙 | 지속적 전달·환영 | 초기부터 지속적 가치 전달, 개발 후반부 요구사항 변경도 경쟁우위로 수용 |\n| | 자기조직화·회고 | 자율적 팀(Self-Organizing Team) 권한 부여 및 정기적 회고(Retrospective)를 통한 개선 |",
    "keywords": [
      "애자일 선언문",
      "4대 가치",
      "12대 원칙",
      "작동하는 SW",
      "변화 대응",
      "자기조직화 팀",
      "지속적 회고"
    ],
    "differentiation": "[유형 B] 대규모 엔터프라이즈/공공 환경에서 애자일 도입 한계와 해법\n① 실무 한계: 확정 범위·고정 예산 계약 관행 및 다수 팀 간 의존성으로 인해 순수 소규모 애자일 적용 시 통합 실패.\n② 해법(Scaled Agile & Hybrid): SAFe(Scaled Agile Framework)를 통해 포트폴리오·프로그램(ART) 계층을 정렬하고, 아키텍처·계약은 예측형(Waterfall), 기능 구현은 적응형(Agile)으로 결합한 하이브리드 방법론 적용."
  },
  {
    "domain": "모의고사",
    "topic": "PLM (제품 수명주기 관리, Product Lifecycle Management)",
    "mnemonic": "기·설·생·서·폐 / C·P·M·D",
    "definition": "제품 기획부터 폐기까지 전 과정 데이터를 통합하는 체계",
    "diagramImg": "exam_q7.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 수명주기 단계 | 기획 → 설계 → 생산 | 상품 기획(요구사항) → 개념·상세 설계(CAD/CAE) → 공정 설계(CAPP) 및 양산 |\n| | 서비스 → 폐기/재활용 | 유지보수(MRO), 단종 관리 및 친환경 규제(RoHS/ESG) 기반 폐기·재활용 |\n| 핵심 하부 시스템 | PDM (제품데이터관리) | CAD 도면, E-BOM/M-BOM(자재명세서), 설계 변경(ECM) 이력 및 버전 통제 |\n| | MPM / 디지털 목업 | 가상 제조 공정 검증(MPM) 및 물리 시제품 없는 3D 디지털 검증(DMU) |\n| 기업 시스템 연계 | PLM ↔ ERP ↔ MES | PLM(설계 E-BOM) → ERP(자재·원가 M-BOM) → MES(현장 생산실행) 실시간 통합 |",
    "keywords": [
      "제품수명주기",
      "PDM",
      "E-BOM / M-BOM",
      "CAD/CAM/CAE",
      "디지털 스레드(Digital Thread)",
      "동시공학"
    ],
    "differentiation": "[유형 C] 디지털 스레드(Digital Thread) 및 AI 기반 차세대 PLM 발전 방향\n① 사일로 한계 극복: 설계(PLM)와 생산(MES), 사후서비스(CRM) 간 단절을 '디지털 스레드'로 연결하여 현장 센서 데이터(IoT)를 차기 설계에 즉시 피드백(Closed-Loop PLM).\n② 생성형 설계(Generative Design): AI가 강도·무게·원가 제약조건을 만족하는 수천 개 최적 설계안을 자동 도출하여 R&D 리드타임을 획기적으로 단축."
  },
  {
    "domain": "모의고사",
    "topic": "프로젝트 획득가치 관리 (EVM, Earned Value Management)",
    "mnemonic": "P·E·A / CV·SV·CPI·SPI / EAC·ETC",
    "definition": "범위·일정·원가를 화폐 단위로 통합해 성과 측정 기법",
    "details": "[비용] BAC(완료시점예산) ─── EAC(완료시점추정치 = AC + ETC)\n  │     * PV(계획가치)   * EV(획득가치)   * AC(실제원가)\n  └─> [차이/지수] SV = EV - PV (SPI = EV/PV) | CV = EV - AC (CPI = EV/AC)",
    "tableRows": [
      {
        "category": "3대 기본 지표",
        "sub": "PV (Planned Value)",
        "desc": "승인된 일정에 따라 특정 시점까지 수행하기로 계획된 작업의 예산 가치 (BCWS)"
      },
      {
        "category": "",
        "sub": "EV (Earned Value)",
        "desc": "특정 시점까지 실제로 완료된 작업의 승인된 예산 가치 (획득가치, BCWP)"
      },
      {
        "category": "",
        "sub": "AC (Actual Cost)",
        "desc": "특정 시점까지 완료된 작업을 수행하는 데 실제 투입된 총 비용 (ACWP)"
      },
      {
        "category": "성과 분석 지수",
        "sub": "SV / SPI (일정)",
        "desc": "일정차이 SV = EV - PV (>0 진척), 일정성과지수 SPI = EV / PV (>1.0 우수)"
      },
      {
        "category": "",
        "sub": "CV / CPI (원가)",
        "desc": "원가차이 CV = EV - AC (>0 절감), 원가성과지수 CPI = EV / AC (>1.0 효율)"
      },
      {
        "category": "미래 예측 지표",
        "sub": "EAC / ETC / TCPI",
        "desc": "완료시점추정치(EAC = BAC/CPI), 잔여작업추정치(ETC), 완료성과지수(TCPI)"
      }
    ],
    "keywords": [
      "PV",
      "EV",
      "AC",
      "SV/SPI",
      "CV/CPI",
      "EAC",
      "ETC",
      "TCPI",
      "S-Curve"
    ],
    "differentiation": "[유형 B] 전통적 EVM의 일정 왜곡 한계와 획득일정(ES) 및 Agile EVM 결합\n① 말기 일정 왜곡 한계: 프로젝트 종료 시점에는 지연 여부와 무관하게 EV가 PV(BAC)에 수렴하여 SV=0, SPI=1.0이 되는 왜곡 발생 → 시간 축 기반 획득일정(Earned Schedule, ES) 지표로 보완.\n② Agile EVM: 스토리 포인트(Velocity) 완료율을 기반으로 스프린트 단위 번다운 차트와 EVM 지표를 결합하여 가시성 확보."
  },
  {
    "domain": "모의고사",
    "topic": "품질비용 (CoQ, Cost of Quality)",
    "mnemonic": "적합(예방·평가) + 비적합(내부실패·외부실패)",
    "definition": "품질 미달 예방 및 결함 수정 위해 발생하는 비용 체계",
    "details": "[품질비용(CoQ)] = [적합 비용(CoC: 예방 + 평가)] + [비적합 비용(CoNC: 내부실패 + 외부실패)]\n  * 법칙: 요구사항(1) → 설계(10) → 구현/테스트(100) → 운영/배포 후(1,000) 결함 수정 비용 지수적 폭증",
    "tableRows": [
      {
        "category": "적합 비용 (CoC)",
        "sub": "예방 비용 (Prevention)",
        "desc": "결함 사전 방지를 위한 교육훈련, 품질 계획, 설계 리뷰, 프로세스 개선, 시큐어코딩 도구 투자"
      },
      {
        "category": "",
        "sub": "평가 비용 (Appraisal)",
        "desc": "산출물 품질 검증을 위한 인스펙션, 단위·통합·회귀 테스트, 감리, QA 인증 심사 비용"
      },
      {
        "category": "비적합 비용 (CoNC)",
        "sub": "내부실패 비용 (Internal)",
        "desc": "고객 인도 전 발견된 결함의 재작업(Rework), 디버깅, 스크랩, 재테스트 비용"
      },
      {
        "category": "",
        "sub": "외부실패 비용 (External)",
        "desc": "고객 인도 후 발생한 장애 복구, SLA 위약금, 손해배상, 리콜, 기업 이미지 실추 비용"
      }
    ],
    "keywords": [
      "적합비용(CoC)",
      "비적합비용(CoNC)",
      "예방비용",
      "평가비용",
      "내부실패비용",
      "외부실패비용",
      "Shift-Left"
    ],
    "differentiation": "[유형 C] 생성형 AI 코딩 확산에 따른 품질비용(CoQ) 구조 변화와 Shift-Left 전략\n① AI 코딩의 역설: LLM 코드 생성으로 초기 구현 속도는 빨라졌으나 미묘한 보안 취약점·아키텍처 부채가 유입되어 운영 단계 외부실패 비용 폭증 위험.\n② 예방·평가 자동화(Shift-Left): CI/CD 파이프라인 내 정적분석(SAST), AI 코드 리뷰어, TDD 자동화를 결합해 예방·평가 투자로 비적합 비용을 원천 차단."
  },
  {
    "domain": "모의고사",
    "topic": "AI 거버넌스 (AI Governance)",
    "mnemonic": "투·공·책·안·프 / 조·정·프·기",
    "definition": "AI 위험 통제와 윤리·법규 준수를 보장하는 관리 체계",
    "details": "[전략·윤리 원칙(투명·공정·책임)] ──> [조직(CAIO·AI윤리위)] ──> [생애주기 통제(기획·학습·배포·감시)]",
    "tableRows": [
      {
        "category": "핵심 원칙",
        "sub": "신뢰성·윤리성",
        "desc": "투명성(설명가능성 XAI), 공정성(편향 제거), 책임성(Accountability), 안전성, 프라이버시 보호"
      },
      {
        "category": "거버넌스 구조",
        "sub": "조직 및 역할",
        "desc": "CAIO(최고AI책임자), AI 윤리·위험관리 위원회, 레드팀(Red Team) 및 모델 감사 조직"
      },
      {
        "category": "생애주기 관리",
        "sub": "데이터·모델 통제",
        "desc": "학습데이터 저작권·개인정보 검증 → 모델 편향성·환각 평가 → 가드레일 및 드리프트 상시 감시"
      },
      {
        "category": "글로벌 표준/법제",
        "sub": "ISO 42001 / AI 기본법",
        "desc": "ISO/IEC 42001(AIMS 국제표준), NIST AI RMF, EU AI Act(위험 등급별 차등 규제), 국내 AI 기본법"
      }
    ],
    "keywords": [
      "ISO/IEC 42001",
      "NIST AI RMF",
      "EU AI Act",
      "AI 기본법",
      "고영향 AI",
      "XAI",
      "AI 가드레일"
    ],
    "differentiation": "[유형 C] 규제 준수(Compliance)를 넘어선 엔지니어링 내재화(Governance-as-Code) 제언\n① 문서형 거버넌스의 한계: 선언적 윤리 헌장만으로는 현업의 Shadow AI 및 LLM 환각·탈옥 위협 통제 불가.\n② LLMOps 파이프라인 결합: 모델 레지스트리, 자동 편향 검증, 입출력 AI 가드레일, 워터마킹을 배포 파이프라인에 강제(Policy-as-Code)하여 기술적 거버넌스 실현."
  },
  {
    "domain": "모의고사",
    "topic": "ISP (정보전략계획, Information Strategy Planning)",
    "mnemonic": "환·현·미·이 / 경·업·정·기",
    "definition": "경영전략 연계 중장기 정보화 비전과 로드맵 수립 계획",
    "details": "[환경분석(내외부/기술)] ──> [현황분석(As-Is: 업무·IT)] ──> [미래모델(To-Be: EA)] ──> [이행계획(포트폴리오·예산)]",
    "tableRows": [
      {
        "category": "수행 목적",
        "sub": "경영·IT 정렬",
        "desc": "조직의 중장기 비전·경영전략 달성을 위한 전사 정보화 청사진(Blueprint) 및 로드맵 수립"
      },
      {
        "category": "1단계: 환경분석",
        "sub": "내외부·기술 동향",
        "desc": "SWOT, 3C, PEST 분석을 통한 비즈니스 전략 방향성 및 디지털·AI 신기술 트렌드 도출"
      },
      {
        "category": "2단계: 현황분석",
        "sub": "As-Is 아키텍처",
        "desc": "현행 업무(BA), 데이터(DA), 애플리케이션(AA), 기술 인프라(TA) 분석 및 문제점·개선과제 도출"
      },
      {
        "category": "3단계: 미래설계",
        "sub": "To-Be 목표모델",
        "desc": "목표 엔터프라이즈 아키텍처(EA) 정의 및 정보화 중점 추진 과제 선정"
      },
      {
        "category": "4단계: 이행계획",
        "sub": "로드맵·예산 산출",
        "desc": "과제 우선순위 평가, 연차별 이행 로드맵, 소요 예산 및 기대효과(ROI) 산출"
      }
    ],
    "keywords": [
      "중장기 정보화",
      "경영-IT 정렬",
      "As-Is / To-Be",
      "EA(전사아키텍처)",
      "이행계획서",
      "CSF"
    ],
    "differentiation": "[유형 A] ISP(정보전략계획) vs ISMP(정보시스템 마스터플랜) 심층 비교\n① 수립 목적: ISP는 '무엇을(What) 왜 할 것인가'에 초점을 둔 3~5년 중장기 전사 정보화 전략인 반면, ISMP는 특정 구축 사업의 '어떻게(How) 구현할 것인가'를 구체화하는 실행 계획.\n② 핵심 산출물: ISP는 중장기 정보화 로드맵과 목표 아키텍처를 도출하고, ISMP는 상세 요구사항 정의서(RFP)와 FP 기반 정밀 소요예산 산출서를 도출."
  },
  {
    "domain": "모의고사",
    "topic": "ISMP (정보시스템 마스터플랜)",
    "mnemonic": "요·구·제·예 / RFP 상세화",
    "definition": "특정 정보시스템 구축 위해 상세 요건·RFP 도출 체계",
    "details": "[현황·문제점 진단] ──> [상세 업무·기능 요구사항 정의] ──> [구축 대안·아키텍처 검증] ──> [정밀 예산(FP)·RFP 작성]",
    "tableRows": [
      {
        "category": "도입 배경",
        "sub": "요구사항 불명확 해소",
        "desc": "발주 시 모호한 RFP로 인한 잦은 과업 변경, 일정 지연, 분쟁을 사전 차단하기 위해 도입"
      },
      {
        "category": "주요 활동",
        "sub": "상세 요구사항 도출",
        "desc": "기능(FR)·비기능(NFR) 요구사항을 FP(기능점수) 산정이 가능한 수준까지 구체적으로 명세화"
      },
      {
        "category": "",
        "sub": "기술·아키텍처 검증",
        "desc": "선정 기술의 타당성 검토, 프로토타입/PoC 검증, 목표 시스템 연계 방안 수립"
      },
      {
        "category": "핵심 산출물",
        "sub": "상세 RFP 및 예산서",
        "desc": "기능점수(FP) 기반 정밀 사업비 산출서, 상세 제안요청서(RFP), 과업내용서"
      }
    ],
    "keywords": [
      "상세 RFP",
      "요구사항 명확화",
      "기능점수(FP) 산정",
      "과업변경 방지",
      "SW진흥법",
      "타당성 검토"
    ],
    "differentiation": "[유형 B] 대규모 차세대·클라우드 네이티브 사업에서 ISMP 실효성 확보 방안\n① 실무 한계: ISMP 수립 시점과 본사업 착수 시점 간 시차로 인해 신기술(생성형 AI 등) 반영 누락 발생.\n② 개선 방안: ISMP 단계에서 핵심 난제 구간에 대한 기술 PoC(개념검증)를 의무화하고, 애자일 발주 방식을 수용할 수 있는 유연한 모듈형 RFP 구조를 설계."
  },
  {
    "domain": "모의고사",
    "topic": "프로젝트 위험관리 절차와 대응방안 (Risk Management)",
    "mnemonic": "계·식·정성·정량·대·감 / 회·전·완·수 / 활·공·향·수",
    "definition": "프로젝트 불확실성 요인을 사전 식별·대응하는 관리 체계",
    "diagramImg": "exam_q12.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 위험관리 절차 | 계획수립 → 위험식별 | RBS(위험분류체계) 정의 및 브레인스토밍·델파이·체크리스트로 위험 등록부 작성 |\n| | 정성적 → 정량적 분석 | 발생확률×영향도 매트릭스(P-I Matrix) 우선순위화 및 몬테카를로·EMV(기대화폐가치) 산출 |\n| | 위험대응 → 감시·통제 | 대응 전략 실행, 잔여/2차 위험 추적 및 우발성 예비비(Contingency Reserve) 통제 |\n| 부정적 위험(위협) | 회피·전가·완화·수용 | 회피(원인 제거), 전가(보험·외주), 완화(발생확률/영향 축소), 수용(예비비 확보) |\n| 긍정적 위험(기회) | 활용·공유·향상·수용 | 활용(Exploit: 실현 보장), 공유(파트너십), 향상(확률 증대), 수용(기회 포착) |",
    "keywords": [
      "위험등록부(Risk Register)",
      "P-I 매트릭스",
      "몬테카를로 시뮬레이션",
      "EMV",
      "회피·전가·완화·수용",
      "예비비"
    ],
    "differentiation": "[유형 A] 우발성 예비비(Contingency Reserve) vs 관리 예비비(Management Reserve) 비교\n① 우발성 예비비: 이미 식별된 위험(Known-Unknowns)에 대비해 원가 기준선(Cost Baseline) 내에 포함되며 PM이 집행 권한 보유.\n② 관리 예비비: 사전 식별 불가능한 미지의 위험(Unknown-Unknowns)에 대비해 원가 기준선 밖(총 프로젝트 예산 내)에 편성되며 스폰서·경영진 승인 하에 집행."
  },
  {
    "domain": "모의고사",
    "topic": "OKR (목표 및 핵심 결과지표, Objectives and Key Results)",
    "mnemonic": "O(도전적 목표) + KR(측정가능 결과) + CFR",
    "definition": "도전적 목표와 핵심 결과지표로 조직 정렬 이끄는 체계",
    "diagramImg": "exam_q13.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 핵심 구성 | Objective (목표) | 조직의 방향성을 제시하는 정성적·도전적·영감을 주는 목표 (What) |\n| | Key Results (핵심결과) | 목표 달성 여부를 판별하는 3~5개의 정량적·측정 가능한 이정표 (How) |\n| 운영 메커니즘 | Stretch Goal (도전성) | 100% 달성이 당연한 목표가 아닌 60~70% 달성 시 성공으로 보는 도전적 목표 설정 |\n| | 보상과의 분리 | 인사평가·금전적 보상과 직접 연계를 배제하여 목표 하향 평준화(Sandbagging) 방지 |\n| 실행 동력 | CFR (대화·피드백·인정) | Conversation(대화), Feedback(피드백), Recognition(인정)을 통한 애자일 상시 관리 |",
    "keywords": [
      "Objective",
      "Key Results",
      "Stretch Goal",
      "CFR",
      "양방향 정렬",
      "보상 분리",
      "애자일 성과관리"
    ],
    "differentiation": "[유형 A] OKR vs KPI 심층 비교 및 하이브리드 운영 전략\n① 목적 및 방향: KPI는 현상 유지 및 통제 중심의 하향식(Top-Down) 성과 측정 지표인 반면, OKR은 혁신·성장을 위한 양방향 정렬 및 도전(Stretch) 중심 체계.\n② 보상 연계: KPI는 인사평가·성과급과 직결되나, OKR은 평가와 분리하여 실패를 두려워하지 않는 실험 문화를 조성 (실무에서는 안정 운영은 KPI, 신사업·AX 과제는 OKR로 병행)."
  },
  {
    "domain": "모의고사",
    "topic": "KPI (핵심성과지표, Key Performance Indicator)",
    "mnemonic": "S·M·A·R·T / CSF 연계",
    "definition": "조직 전략목표 달성도를 정량적으로 측정하는 핵심 지표",
    "diagramImg": "exam_q13_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 도출 체계 | 비전 → CSF → KPI | 전략 목표 달성을 위한 핵심성공요소(CSF)를 도출하고 이를 측정할 정량 KPI 설정 |\n| SMART 원칙 | Specific / Measurable | 구체적(Specific)이고 정량적으로 측정 가능(Measurable)한 지표 정의 |\n| | Achievable / Relevant | 달성 가능(Achievable)하며 상위 전략과 밀접히 연관(Relevant)되고 기한(Time-bound) 명시 |\n| 지표 유형 | 선행 지표 vs 후행 지표 | 결과 지표(매출·장애건수 등 후행)와 원인·활동 지표(테스트 커버리지 등 선행)의 균형 구성 |\n| 활용 영역 | 인사평가·SLA 연계 | 연간 목표치(100% 달성 기준) 부여 및 조직·개인 인사 고과·보상 및 SLA 평가 기준 활용 |",
    "keywords": [
      "CSF(핵심성공요소)",
      "SMART 원칙",
      "선행·후행 지표",
      "BSC 연계",
      "정량 평가",
      "목표관리(MBO)"
    ],
    "differentiation": "[유형 A] KPI vs OKR 비교 및 지표 왜곡(Goodhart's Law) 극복 방안\n① 굿하트의 법칙 한계: 측정 지표(KPI)가 보상과 직결되는 순간 구성원들이 목표를 보수적으로 잡거나 지표 숫자만 맞추는 왜곡 발생.\n② 극복 방안: 단일 결과 지표 대신 선행·후행 균형성과표(BSC)를 구성하고, 혁신 과제에는 평가와 분리된 OKR을 상호보완적으로 결합."
  },
  {
    "domain": "모의고사",
    "topic": "ESG 경영 IT 역할과 데이터 거버넌스",
    "mnemonic": "환·사·지 / Scope 1·2·3 / 수·검·공",
    "definition": "ESG 공시 대응해 비재무 데이터를 투명 관리하는 체계",
    "details": "[IoT·ERP·공급망(Scope 1·2·3 수집)] ──> [ESG 데이터 레이크·정합성 검증] ──> [CSRD·ISSB 자동 공시·감사 추적]",
    "tableRows": [
      {
        "category": "배경 및 규제",
        "sub": "ESG 공시 의무화",
        "desc": "EU CSRD, ISSB(IFRS S1·S2), 국내 자본시장법 등 공급망 포함 정량 공시 의무화"
      },
      {
        "category": "탄소 측정 범위",
        "sub": "Scope 1 · 2 · 3",
        "desc": "직접 배출(Scope 1), 간접 전력 소비(Scope 2), 협력사·물류 등 외부 공급망 전체(Scope 3)"
      },
      {
        "category": "IT 핵심 역할",
        "sub": "Green IT & IT for Green",
        "desc": "데이터센터 저전력화(Green IT: 액침냉각·PUE 개선) 및 IT 기반 전사 탄소·안전 관제(IT for Green)"
      },
      {
        "category": "데이터 거버넌스",
        "sub": "추적성·감사 가능성",
        "desc": "분산된 비재무 데이터의 표준 메타데이터 정의, 데이터 리니지(Lineage) 및 위변조 방지 감사 추적"
      }
    ],
    "keywords": [
      "EU CSRD",
      "ISSB",
      "Scope 3",
      "그린워싱 방지",
      "ESG 데이터 거버넌스",
      "데이터 리니지",
      "PUE"
    ],
    "differentiation": "[유형 C] 그린워싱(Greenwashing) 방지를 위한 ESG 데이터 신뢰성 확보 제언\n① 수기 취합의 한계: 엑셀 기반 수기 데이터 취합은 누락·중복 산정 및 외부 제3자 검증(Assurance) 실패 초래.\n② 블록체인·AI 연계 거버넌스: 공급망 탄소 데이터를 IoT/AMI로 자동 수집하고 블록체인 기반 감사 증적(Audit Trail)과 데이터 계보(Lineage)를 구축해 공시 무결성 확보."
  },
  {
    "domain": "모의고사",
    "topic": "BI (비즈니스 인텔리전스, Business Intelligence)",
    "mnemonic": "전통BI(IT주도) → 셀프BI(현업) → GenBI(자연어·자율)",
    "definition": "기업 데이터를 통합·시각화해 경영 의사결정 지원 체계",
    "diagramImg": "exam_q15.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 전통적 BI | DW · OLAP · 대시보드 | ETL 기반 데이터웨어하우스 적재 후 IT 부서가 정형 보고서·다차원 분석(OLAP) 제공 |\n| | 전통적 BI의 한계 | 현업 요청 시 IT 부서 SQL 개발 대기로 인한 병목 발생 및 사후적(What happened) 분석에 국한 |\n| Self-Service BI | 현업 주도 시각화 | Tableau, Power BI 등 드래그앤드롭 GUI로 현업 실무자가 직접 데이터 탐색 및 시각화 |\n| Generative BI | 자연어(NL2SQL) 분석 | LLM 결합으로 자연어 질의만으로 SQL 자동 생성, 차트 추천, 원인 요약 및 시나리오 예측 수행 |\n| 핵심 기반 기술 | 시맨틱 레이어(Semantic) | 비즈니스 용어와 물리 DB 스키마를 매핑하여 LLM의 SQL 생성 환각(Hallucination) 방지 |",
    "keywords": [
      "DW/OLAP",
      "Self-Service BI",
      "Generative BI",
      "NL2SQL",
      "시맨틱 레이어",
      "데이터 민주화"
    ],
    "differentiation": "[유형 A] 전통적 BI vs Self-Service BI vs Generative BI 진화 비교\n① 사용 주체 및 장벽: 전통적 BI(데이터 엔지니어 전용) → Self-Service BI(도구 학습한 분석가) → Generative BI(자연어 대화로 전 임직원 활용, 진정한 데이터 민주화).\n② 기술사적 고려사항: GenBI 도입 시 잘못된 쿼리 생성으로 인한 의사결정 왜곡을 막기 위해 온톨로지·시맨틱 레이어 구축과 행/열 수준 접근통제(RBAC)가 필수."
  },
  {
    "domain": "모의고사",
    "topic": "생성형 BI (Generative BI)",
    "mnemonic": "NL2SQL(자연어 질의) · 자동 인사이트 요약 · 대화형 시각화 · 시맨틱 레이어(환각 방지)",
    "definition": "자연어 질의로 데이터 분석하고 인사이트를 생성하는 기술",
    "diagramImg": "exam_q15_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 전통적 BI | DW · OLAP · 대시보드 | ETL 기반 데이터웨어하우스 적재 후 IT 부서가 정형 보고서·다차원 분석(OLAP) 제공 |\n| | 전통적 BI의 한계 | 현업 요청 시 IT 부서 SQL 개발 대기로 인한 병목 발생 및 사후적(What happened) 분석에 국한 |\n| Self-Service BI | 현업 주도 시각화 | Tableau, Power BI 등 드래그앤드롭 GUI로 현업 실무자가 직접 데이터 탐색 및 시각화 |\n| Generative BI | 자연어(NL2SQL) 분석 | LLM 결합으로 자연어 질의만으로 SQL 자동 생성, 차트 추천, 원인 요약 및 시나리오 예측 수행 |\n| 핵심 기반 기술 | 시맨틱 레이어(Semantic) | 비즈니스 용어와 물리 DB 스키마를 매핑하여 LLM의 SQL 생성 환각(Hallucination) 방지 |",
    "keywords": [
      "DW/OLAP",
      "Self-Service BI",
      "Generative BI",
      "NL2SQL",
      "시맨틱 레이어",
      "데이터 민주화"
    ],
    "differentiation": "[유형 A] 전통적 BI vs Self-Service BI vs Generative BI 진화 비교\n① 사용 주체 및 장벽: 전통적 BI(데이터 엔지니어 전용) → Self-Service BI(도구 학습한 분석가) → Generative BI(자연어 대화로 전 임직원 활용, 진정한 데이터 민주화).\n② 기술사적 고려사항: GenBI 도입 시 잘못된 쿼리 생성으로 인한 의사결정 왜곡을 막기 위해 온톨로지·시맨틱 레이어 구축과 행/열 수준 접근통제(RBAC)가 필수."
  },
  {
    "domain": "모의고사",
    "topic": "IT 프로젝트 가치 전달 체계 (Value Delivery System)",
    "mnemonic": "전·포·프·프·운 / 산출물(Output) → 성과(Outcome) → 가치(Value)",
    "definition": "조직 전략과 프로젝트를 정렬해 비즈니스 가치 창출 체계",
    "diagramImg": "exam_q16.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 가치 전달 계층 | 전략 → 포트폴리오 | 전사 전략 방향성에 맞춰 투자 우선순위를 결정하는 포트폴리오(Do the right things) 정렬 |\n| | 프로그램 → 프로젝트 → 운영 | 상호 연관된 프로젝트를 묶어 편익(Benefit)을 창출하고 현업 운영으로 가치를 이전 |\n| 프로젝트 실패 원인 | 전략 단절·요구사항 모호 | 비즈니스 가치(Value) 없이 단순 시스템 구축(Output)에만 매몰, 이해관계자 갈등 및 과업 변경 |\n| 성공 수행 전략 | 편익실현관리 (BRM) | 기획 단계부터 목표 편익을 정의하고 배포 후 현업 정착 및 가치 창출 여부를 지속 추적 |\n| | 적응형 거버넌스 | MVP 기반 점진적 출시와 피드백 루프를 통해 시장 변화에 맞춰 범위를 유연하게 조정 |",
    "keywords": [
      "Value Delivery System",
      "PMBOK 7판",
      "Output vs Outcome",
      "편익실현관리(BRM)",
      "포트폴리오 정렬"
    ],
    "differentiation": "[유형 B] 철의 삼각형(Iron Triangle: 일정·원가·범위) 중심 관리에서 가치(Value) 중심 패러다임 전환\n① 기존 한계: 납기와 예산을 준수했음에도(Output 성공) 현업이 사용하지 않거나 비즈니스 성과(Outcome)가 없는 프로젝트 다수 발생.\n② 성공 전략: PMO를 가치실현오피스(VMO)로 고도화하고, OKR 및 편익실현관리(BRM)를 통해 배포 이후의 비즈니스 임팩트까지 프로젝트 성공 기준으로 통합."
  },
  {
    "domain": "모의고사",
    "topic": "SWOT 분석 (강점·약점·기회·위협 분석)",
    "mnemonic": "내부(S·W) × 외부(O·T) / SO·ST·WO·WT",
    "definition": "내부 역량과 외부 환경을 교차 분석해 전략 도출 기법",
    "details": "          [기회 (Opportunity)]          [위협 (Threat)]\n[강점(S)] SO 전략 (강점으로 기회 선점)  ST 전략 (강점으로 위협 돌파)\n[약점(W)] WO 전략 (약점 보완 기회 활용) WT 전략 (약점 축소 위협 회피)",
    "tableRows": [
      {
        "category": "분석 축",
        "sub": "내부 환경 (S · W)",
        "desc": "조직이 통제 가능한 내부 핵심 역량·자산(Strength) 및 부족한 자원·한계(Weakness)"
      },
      {
        "category": "",
        "sub": "외부 환경 (O · T)",
        "desc": "시장·기술·규제 변화에 따른 외부 호재(Opportunity) 및 경쟁 심화·위기 요인(Threat)"
      },
      {
        "category": "교차 전략",
        "sub": "SO / ST 전략",
        "desc": "SO(공격적 확장: 강점으로 시장 기회 극대화), ST(다각화·방어: 강점으로 외부 위협 극복)"
      },
      {
        "category": "",
        "sub": "WO / WT 전략",
        "desc": "WO(방향 전환: 약점 보완해 기회 포착), WT(축소·철수: 약점 및 위협 동시 최소화)"
      }
    ],
    "keywords": [
      "내부역량(S/W)",
      "외부환경(O/T)",
      "SO/ST/WO/WT 매트릭스",
      "ISP 환경분석",
      "CSF 도출"
    ],
    "differentiation": "[유형 A] 경영환경 분석 3대 도구(PEST → 3C → SWOT)의 유기적 연계 파이프라인\n① 단독 사용의 한계: SWOT만 단독 수행 시 주관적·나열식 항목 도출로 전략적 실효성 저하.\n② 통합 프레임워크: 거시환경(PEST)과 미시 산업환경(3C/5-Forces)에서 외부 기회·위협(O/T)을 도출하고, 가치사슬(Value Chain) 분석에서 내부 강·약점(S/W)을 도출해 SWOT 교차 전략으로 완성."
  },
  {
    "domain": "모의고사",
    "topic": "3C 분석 (Customer · Competitor · Company)",
    "mnemonic": "고객(Customer) · 경쟁사(Competitor) · 자사(Company)",
    "definition": "고객·경쟁사·자사 환경을 분석해 차별화 전략 도출 기법",
    "details": "[Customer(고객 니즈·세분화)] + [Competitor(경쟁사 강약점·점유율)] + [Company(자사 핵심역량)]\n  └──────> [전략적 삼각형 정렬을 통한 핵심성공요소(KSF) 및 경쟁우위 확보]",
    "tableRows": [
      {
        "category": "3대 분석 축",
        "sub": "Customer (고객)",
        "desc": "시장 규모·성장률, 고객 세분화(STP), 미충족 니즈(Pain Point), 구매 의사결정 요인 분석"
      },
      {
        "category": "",
        "sub": "Competitor (경쟁자)",
        "desc": "기존 경쟁사 및 잠재 진입자의 시장 점유율, 비즈니스 모델, 기술력, 원가 구조 비교"
      },
      {
        "category": "",
        "sub": "Company (자사)",
        "desc": "자사의 가치사슬, 기술·인력·데이터 자산, 수익성 및 경쟁사 대비 상대적 강약점 진단"
      },
      {
        "category": "적용 목적",
        "sub": "KSF 및 포지셔닝",
        "desc": "오마에 겐이치의 전략적 삼각형 이론 기반으로 시장 내 핵심성공요소(KSF)와 차별화 포지셔닝 확립"
      }
    ],
    "keywords": [
      "오마에 겐이치",
      "전략적 삼각형",
      "미시환경 분석",
      "고객 세분화",
      "경쟁우위",
      "KSF"
    ],
    "differentiation": "[유형 A] 3C 분석 vs PEST 분석 vs SWOT 분석 비교\n① 분석 범위: PEST는 통제 불가능한 거시적 외부 환경, 3C는 기업이 속한 산업·시장 내 미시적 경쟁 환경, SWOT은 내·외부 환경을 종합한 전략 도출 매트릭스.\n② 디지털·AX 시대 확장: 기존 3C에 플랫폼 생태계 파트너(Collaborator)를 추가한 4C 분석으로 확장하여 기술 제휴 및 생태계 경쟁력을 함께 진단."
  },
  {
    "domain": "모의고사",
    "topic": "PEST 분석 (거시환경 분석 기법)",
    "mnemonic": "정치(P) · 경제(E) · 사회(S) · 기술(T) + 환경(E)·법(L)",
    "definition": "정치·경제·사회·기술 거시환경을 분석해 기회 도출 기법",
    "details": "[Political(정책·규제)] + [Economic(금리·경기)] + [Social(인구·문화)] + [Technological(AI·클라우드)]\n  └──────> [중장기 메가트렌드 파악 및 신사업·ISP 외부 환경 기회/위협(O/T) 도출]",
    "tableRows": [
      {
        "category": "4대 분석 영역",
        "sub": "Political (정치·법제)",
        "desc": "정부 IT 정책, AI 기본법, 개인정보보호법, 공공 클라우드·SLA 의무화 등 법제·규제 변화"
      },
      {
        "category": "",
        "sub": "Economic (경제)",
        "desc": "금리, 환율, 인플레이션, IT 투자 심리, 글로벌 공급망 비용 변동 등 경제적 요인"
      },
      {
        "category": "",
        "sub": "Social (사회·문화)",
        "desc": "저출산·고령화, 원격근무 확산, 디지털 리터러시, 프라이버시 및 윤리 의식 변화"
      },
      {
        "category": "",
        "sub": "Technological (기술)",
        "desc": "생성형 AI, 에이전틱 AI, 양자컴퓨팅, 6G, 클라우드 네이티브 등 파괴적 혁신 기술 등장"
      },
      {
        "category": "확장 모델",
        "sub": "PESTEL 분석",
        "desc": "환경·탄소중립(Environmental) 및 법률·컴플라이언스(Legal) 요소를 독립 분리해 심층 분석"
      }
    ],
    "keywords": [
      "거시환경 분석",
      "Political",
      "Economic",
      "Social",
      "Technological",
      "PESTEL",
      "메가트렌드"
    ],
    "differentiation": "[유형 B] 급변하는 AX 시대의 PEST 분석 한계와 시나리오 플래닝 결합\n① 정적 분석의 한계: 일회성 PEST 분석은 기술·규제의 비선형적 급변(예: 딥시크 쇼크, EU AI Act 시행)에 기민하게 대응하기 어려움.\n② 동적 시나리오 플래닝 연계: PESTEL 핵심 변수 중 불확실성과 파급력이 가장 큰 요인을 축으로 다중 미래 시나리오를 수립하고 조기경보지표(EWI)를 상시 모니터링."
  },
  {
    "domain": "모의고사",
    "topic": "AI 창작물 지식재산권과 저작권 보호 체계",
    "mnemonic": "인간창작성 · 공정이용(TDM) · 출처표시 · 워터마크",
    "definition": "생성형 AI 산출물의 저작권 분쟁 해결·권리 보호 체계",
    "details": "[원저작물 수집(학습 단계: TDM 면책·공정이용 논란)] ──> [AI 모델 학습] ──> [AI 산출물(인간 기여도별 저작권 인정·AI 표시 의무)]",
    "tableRows": [
      {
        "category": "지식재산권 분류",
        "sub": "산업재산권·저작권·신지재권",
        "desc": "산업재산권(특허·실용신안·디자인·상표), 저작권(저작인격권·재산권), 신지식재산권(영업비밀·DB·SW)"
      },
      {
        "category": "AI 학습 단계 쟁점",
        "sub": "TDM 및 공정이용",
        "desc": "무단 웹 크롤링 학습 시 복제권 침해 분쟁 vs 공정이용(Fair Use) 및 텍스트·데이터 마이닝(TDM) 면책 기준"
      },
      {
        "category": "AI 산출물 쟁점",
        "sub": "저작물성 불인정 원칙",
        "desc": "인간의 사상·감정 표현이 없는 순수 AI 생성물은 저작권 불인정(인간의 창작적 개입·편집 부분만 인정)"
      },
      {
        "category": "해결 및 보호방안",
        "sub": "기술적·제도적 대응",
        "desc": "학습데이터 출처 공개, 옵트아웃(robots.txt/TDM Reservation) 준수, 비가시성 워터마크(C2PA), 보상체계 마련"
      }
    ],
    "keywords": [
      "인간 창작성",
      "공정이용(Fair Use)",
      "TDM 면책",
      "AI 워터마크(C2PA)",
      "학습데이터 출처공개",
      "옵트아웃"
    ],
    "differentiation": "[유형 C] 기업용 LLM 도입 시 저작권 리스크 완화를 위한 기술사적 제언\n① 학습·추론 리스크 분리: 외부 상용 LLM 활용 시 저작권 면책(Indemnity) 조항을 계약에 명시하고, RAG 구축 시 내부 적법 라이선스 문서만 인덱싱.\n② 기술적 가드레일: 출력물이 원저작물과 실질적 유사성(Substantial Similarity)을 갖지 않도록 저작권 필터링 및 C2PA 메타데이터 서명을 의무 적용."
  },
  {
    "domain": "모의고사",
    "topic": "ITSM과 SLA 지표 체계 (SLI · SLO · SLA)",
    "mnemonic": "ITIL 4(SVS·4차원) / SLI(측정) → SLO(목표) → SLA(협약)",
    "definition": "IT 서비스를 비즈니스 가치 중심으로 정량 관리 체계",
    "details": "[SLI (실제 측정치: 가용률 99.95%)] ──> [SLO (내부 목표치: 99.9%)] ──> [SLA (대외 계약 협약: 99.5% 미달 시 크레딧 보상)]",
    "tableRows": [
      {
        "category": "ITSM 및 ITIL",
        "sub": "ITIL v3 (수명주기 5단계)",
        "desc": "서비스 전략(SS) → 서비스 설계(SD) → 서비스 전환(ST) → 서비스 운영(SO) → 지속적 개선(CSI)"
      },
      {
        "category": "",
        "sub": "ITIL 4 (서비스가치시스템)",
        "desc": "선형 프로세스에서 가치 사슬(SVC), 34개 프랙티스, 4차원 모델 기반의 애자일·클라우드 가치 공창출로 진화"
      },
      {
        "category": "서비스 수준 계층",
        "sub": "SLI (Indicator)",
        "desc": "서비스 품질을 실제 측정하는 정량 지표 (응답 지연시간, 에러율, 처리량, 가용성)"
      },
      {
        "category": "",
        "sub": "SLO (Objective) & SLA",
        "desc": "SLO(SLI가 달성해야 할 내부 목표 범위), SLA(고객과 맺은 법적 계약 및 위반 시 페널티·크레딧 명시)"
      },
      {
        "category": "위반 대응·개선",
        "sub": "에러 버짓 & CSI",
        "desc": "에러 버짓(100% - SLO) 기반 배포 속도 조절, 근본원인분석(RCA) 및 PDCA 기반 지속적 서비스 개선(CSI)"
      }
    ],
    "keywords": [
      "ITSM",
      "ITIL 4 SVS",
      "SLI",
      "SLO",
      "SLA",
      "에러 버짓(Error Budget)",
      "CSI",
      "서비스 크레딧"
    ],
    "differentiation": "[유형 B] SRE(Site Reliability Engineering) 에러 버짓을 활용한 SLA 위반 사전 예방\n① 사후 페널티의 한계: SLA 위반 후 위약금(서비스 크레딧)을 지급하는 것은 이미 비즈니스 피해가 발생한 사후 약방문.\n② SLO와 에러 버짓(Error Budget) 통제: SLA(예: 99.5%)보다 엄격한 내부 SLO(예: 99.9%)를 설정하고, 에러 버짓 소진 시 신규 기능 배포를 중단하고 안정성 개선에 집중하는 SRE 거버넌스 운영."
  },
  {
    "domain": "모의고사",
    "topic": "개발방법론 테일러링 (Methodology Tailoring)",
    "mnemonic": "내부(목·규·기·구) · 외부(법·고) / 생략·추가·수정·대체",
    "definition": "프로젝트 특성에 맞춰 표준 개발방법론 절차 최적화 기법",
    "details": "[표준 방법론] ──> [환경분석(내부: 규모·기술·납기 / 외부: 법제·도메인)] ──> [조정(생략·추가·수정·통합)] ──> [맞춤형 방법론]",
    "tableRows": [
      {
        "category": "필요성",
        "sub": "비용·품질 최적화",
        "desc": "과도한 산출물 작성 오버헤드 제거 및 프로젝트 고유 위험·특성에 부합하는 실효적 개발 공정 확립"
      },
      {
        "category": "고려 기준",
        "sub": "내부적 요인",
        "desc": "프로젝트 규모·예산, 납기 일정, 적용 기술의 복잡도, 개발 조직의 역량 및 성숙도"
      },
      {
        "category": "",
        "sub": "외부적 요인",
        "desc": "법적·제도적 규제(감리·인증 기준), 산업 도메인 특성(국방·금융·의료 등 안전성 수준), 고객 요구"
      },
      {
        "category": "테일러링 기법",
        "sub": "생략·추가·수정·병합",
        "desc": "불필요 타스크/산출물 생략(Deletion), 보안·AI 검증 추가(Addition), 양식 간소화·통합(Modification)"
      },
      {
        "category": "표준 지침",
        "sub": "ISO/IEC 12207",
        "desc": "SW 생명주기 프로세스 국제표준 부속서 기반 테일러링 절차(특성식별 → 프로세스 선택 → 문서화)"
      }
    ],
    "keywords": [
      "프로세스 최적화",
      "내·외부 고려요인",
      "산출물 조정",
      "ISO/IEC 12207",
      "하이브리드 방법론",
      "감리 기준"
    ],
    "differentiation": "[유형 B] 무분별한 산출물 생략(날림 테일러링) 방지 및 감리 대응 방안\n① 실무 문제점: 납기 단축을 이유로 필수 설계서·테스트 계획서까지 임의 생략하여 유지보수성 붕괴 및 감리 부적합 판정.\n② 해결 방안: 요구사항 추적표(RTM), 아키텍처 정의서 등 핵심 기준선(Baseline) 산출물은 필수 보존(Minimum Viable Documentation)으로 지정하고 발주자·감리원과 사전 합의서 체결."
  },
  {
    "domain": "모의고사",
    "topic": "CBAM (아키텍처 비용·효익 분석, Cost Benefit Analysis Method)",
    "mnemonic": "시·품·전략·효용·ROI / ATAM 후속 경제성 평가",
    "definition": "아키텍처 전략의 비용 대비 효용을 정량 평가하는 기법",
    "details": "[ATAM 품질속성 시나리오] ──> [아키텍처 전략(AS) 도출] ──> [효용(Benefit)·비용(Cost) 산정] ──> [ROI 기반 전략 선택]",
    "tableRows": [
      {
        "category": "핵심 개념",
        "sub": "SEI 경제성 평가 모델",
        "desc": "ATAM에서 도출된 아키텍처 대안들에 비용과 비즈니스 효익을 결합해 최적 투자 대안을 선정하는 기법"
      },
      {
        "category": "수행 절차",
        "sub": "시나리오 정리 → 효용 산출",
        "desc": "품질속성 시나리오 우선순위화 → 응답수준(최악·현재·목표·최선) 효용 곡선 도출 → 전략별 기대효익 계산"
      },
      {
        "category": "",
        "sub": "비용 추정 → ROI 결정",
        "desc": "아키텍처 전략 구현 비용(Cost) 산정 후 ROI(= 총 효익 / 구현 비용) 순위에 따라 최적 전략 채택"
      },
      {
        "category": "핵심 지표",
        "sub": "효용-응답 곡선",
        "desc": "품질 속성 수준 변화에 따라 이해관계자가 느끼는 만족도(Utility, 0~100)를 비선형 곡선으로 모델링"
      }
    ],
    "keywords": [
      "SEI",
      "ATAM 연계",
      "아키텍처 경제성",
      "효용-응답 곡선",
      "품질속성 시나리오",
      "ROI 산정"
    ],
    "differentiation": "[유형 A] ATAM vs CBAM 비교 및 연계 파이프라인\n① ATAM(Architecture Tradeoff Analysis Method): 가용성·성능·보안 등 품질 속성 간 기술적 트레이드오프와 민감점(Sensitivity)·위험점(Non-risk)을 분석.\n② CBAM: ATAM이 기술적 타당성에만 집중하는 한계를 보완하기 위해 후속 단계로 수행되며, 예산 제약 하에서 비즈니스 가치를 극대화하는 아키텍처 전략을 최종 결정."
  },
  {
    "domain": "모의고사",
    "topic": "SW 비용산정 기법 비교 (하향식 · 상향식 · 수학적 산정)",
    "mnemonic": "하향(전·델) · 상향(원·태) · 수학(L·C·F·P)",
    "definition": "개발 규모와 공수를 과학적으로 추정해 사업비 산출 기법",
    "details": "[하향식(전문가판단·델파이)]  vs  [상향식(원시코드 LOC·WBS 태스크별)]  vs  [수학적(COCOMO·FP·Putnam)]",
    "tableRows": [
      {
        "category": "하향식 산정",
        "sub": "전문가 판단 / 델파이",
        "desc": "과거 유사 프로젝트 경험 기반으로 전체 비용을 먼저 산정 후 하위 배분 (초기 단계 신속 산정에 유리)"
      },
      {
        "category": "상향식 산정",
        "sub": "WBS 태스크별 / LOC",
        "desc": "세부 작업 단위(Work Package)나 원시 코드 라인 수(비관·낙관·기대치)를 산출해 합산 (설계 이후 정밀도 높음)"
      },
      {
        "category": "수학적(모형) 산정",
        "sub": "COCOMO (보헴)",
        "desc": "LOC 기반 조직유형별(Organic·Semi-detached·Embedded) 경험적 지수 공식 적용 (COCOMO II로 진화)"
      },
      {
        "category": "",
        "sub": "FP (기능점수)",
        "desc": "사용자 관점의 기능 규모(ILF, EIF, EI, EO, EQ)를 기반으로 언어 독립적 비용 산정 (국내 공공 표준)"
      },
      {
        "category": "",
        "sub": "Putnam (생명주기)",
        "desc": "Rayleigh-Norden 곡선 기반으로 개발 전 과정의 인력 분포를 추정하는 대형 프로젝트 모형 (SLIM 도구)"
      }
    ],
    "keywords": [
      "델파이 기법",
      "LOC",
      "COCOMO II",
      "기능점수(FP)",
      "Putnam(Rayleigh 곡선)",
      "간이법/정통법"
    ],
    "differentiation": "[유형 A] 원시코드 라인수(LOC) 기반 vs 기능점수(FP) 기반 산정 비교\n① LOC 한계: 개발 언어와 코딩 스타일에 종속적이며, 구현 전에 정확한 라인 수를 예측하기 불가능.\n② FP(ISO/IEC 20926) 우위: 사용자 요구사항 명세만으로 초기 단계에서 객관적 산정이 가능하며, SW진흥법상 공공 SW사업 대가 산정의 법적 표준으로 채택."
  },
  {
    "domain": "모의고사",
    "topic": "SP 인증 (소프트웨어 프로세스 품질인증)",
    "mnemonic": "SP(프로세스·조직·3등급) vs GS(제품·ISO25023·2등급)",
    "definition": "SW 개발 조직의 프로세스 역량 수준을 공인하는 제도",
    "details": "[SP 인증 (개발 조직의 프로세스 역량 평가: 1~3등급)]  <──상호보완──>  [GS 인증 (완성된 SW 제품의 품질 시험: 1·2등급)]",
    "tableRows": [
      {
        "category": "SP 인증 (프로세스)",
        "sub": "인증 대상 및 근거",
        "desc": "SW 기업·개발 조직의 개발 프로세스 역량 심사 (SW진흥법 근거, NIPA 주관)"
      },
      {
        "category": "",
        "sub": "5대 영역 · 등급",
        "desc": "프로젝트관리, 개발, 지원, 조직관리, 프로세스개선 5개 영역 (1등급·2등급·3등급 부여)"
      },
      {
        "category": "GS 인증 (제품)",
        "sub": "인증 대상 및 근거",
        "desc": "완성된 상용 SW 제품(패키지·SaaS)의 기능·성능·보안 실증 테스트 (TTA, KTL 주관)"
      },
      {
        "category": "",
        "sub": "평가 표준 · 등급",
        "desc": "ISO/IEC 25023, 25041, 25051 국제표준 기반 8대 품질특성 시험 (1등급·2등급 부여)"
      },
      {
        "category": "공통 혜택",
        "sub": "공공조달 우대",
        "desc": "공공기관 우선구매 대상 지정, 기술성 평가 가점 부여, 하도급계약 적정성 심사 가점"
      }
    ],
    "keywords": [
      "SP인증(프로세스)",
      "GS인증(제품)",
      "SW진흥법",
      "ISO/IEC 25023",
      "NIPA/TTA/KTL",
      "공공조달 가점"
    ],
    "differentiation": "[유형 A] SP 인증 vs GS 인증 vs CMMI 비교\n① 평가 관점: SP 인증은 '좋은 SW를 만드는 조직 프로세스'를 심사하고, GS 인증은 '그 결과로 만들어진 완성품 SW 자체'를 블랙박스 테스트로 검증.\n② CMMI 대비 SP 인증의 의의: 고비용 해외 인증인 CMMI에 대응하여 국내 중소·중견 SW 기업의 실정에 맞게 제정된 독자적 프로세스 품질 모델."
  },
  {
    "domain": "모의고사",
    "topic": "GS 인증 (소프트웨어 품질인증, Good Software)",
    "mnemonic": "SP(프로세스·조직·3등급) vs GS(제품·ISO25023·2등급)",
    "definition": "SW 제품의 기능·성능·보안 품질을 시험하는 국가 인증",
    "details": "[SP 인증 (개발 조직의 프로세스 역량 평가: 1~3등급)]  <──상호보완──>  [GS 인증 (완성된 SW 제품의 품질 시험: 1·2등급)]",
    "tableRows": [
      {
        "category": "SP 인증 (프로세스)",
        "sub": "인증 대상 및 근거",
        "desc": "SW 기업·개발 조직의 개발 프로세스 역량 심사 (SW진흥법 근거, NIPA 주관)"
      },
      {
        "category": "",
        "sub": "5대 영역 · 등급",
        "desc": "프로젝트관리, 개발, 지원, 조직관리, 프로세스개선 5개 영역 (1등급·2등급·3등급 부여)"
      },
      {
        "category": "GS 인증 (제품)",
        "sub": "인증 대상 및 근거",
        "desc": "완성된 상용 SW 제품(패키지·SaaS)의 기능·성능·보안 실증 테스트 (TTA, KTL 주관)"
      },
      {
        "category": "",
        "sub": "평가 표준 · 등급",
        "desc": "ISO/IEC 25023, 25041, 25051 국제표준 기반 8대 품질특성 시험 (1등급·2등급 부여)"
      },
      {
        "category": "공통 혜택",
        "sub": "공공조달 우대",
        "desc": "공공기관 우선구매 대상 지정, 기술성 평가 가점 부여, 하도급계약 적정성 심사 가점"
      }
    ],
    "keywords": [
      "SP인증(프로세스)",
      "GS인증(제품)",
      "SW진흥법",
      "ISO/IEC 25023",
      "NIPA/TTA/KTL",
      "공공조달 가점"
    ],
    "differentiation": "[유형 A] SP 인증 vs GS 인증 vs CMMI 비교\n① 평가 관점: SP 인증은 '좋은 SW를 만드는 조직 프로세스'를 심사하고, GS 인증은 '그 결과로 만들어진 완성품 SW 자체'를 블랙박스 테스트로 검증.\n② CMMI 대비 SP 인증의 의의: 고비용 해외 인증인 CMMI에 대응하여 국내 중소·중견 SW 기업의 실정에 맞게 제정된 독자적 프로세스 품질 모델."
  },
  {
    "domain": "모의고사",
    "topic": "정보시스템 현장감리 활동과 작업내용 (감리기준 고시)",
    "mnemonic": "예비조사 → 현장감리(착·검·안·종) → 시정조치확인",
    "definition": "정보시스템 구축 사업의 적정성과 품질을 독립 검증 활동",
    "details": "[예비조사(계획서)] ──> [현장감리(착수회의 → 문서·시스템 검토·시험 → 감리보고서안 → 종료회의)] ──> [시정조치 확인]",
    "tableRows": [
      {
        "category": "법적 근거",
        "sub": "정보시스템 감리기준",
        "desc": "전자정부법 및 행안부 고시 제2021-4호에 의거한 3단계 감리(요구정의·설계·종료 단계)"
      },
      {
        "category": "현장감리 1단계",
        "sub": "착수회의 개최",
        "desc": "발주자·사업자·감리법인 참석, 감리 일정·범위·중점 점검 항목 공유 및 협조 체계 확정"
      },
      {
        "category": "현장감리 2단계",
        "sub": "검토·확인 및 시험",
        "desc": "산출물 검토, 담당자 면담, 자동화 진단도구 활용 보안·성능·DB 정합성 및 과업이행 여부 실증 점검"
      },
      {
        "category": "현장감리 3단계",
        "sub": "보고서(안) 작성·합의",
        "desc": "발견된 문제점과 개선권고사항(필수·권고)을 도출하고 발주자·사업자와 이견 조정 및 근거 명시"
      },
      {
        "category": "현장감리 4단계",
        "sub": "종료회의 및 통보",
        "desc": "감리 수행 결과 총평 및 지적사항 공식 설명 후 최종 감리수행결과보고서 제출 (이후 시정조치 확인)"
      }
    ],
    "keywords": [
      "행안부 감리기준",
      "3단계 감리",
      "착수회의",
      "산출물·실증 시험",
      "개선권고사항",
      "시정조치 확인"
    ],
    "differentiation": "[유형 B] 서류 중심 감리의 한계 극복과 AI·클라우드 네이티브 사업 감리 고도화\n① 문서 감리 한계: 코드 품질과 실제 동작 여부보다 산출물 페이지 수와 오탈자 점검에 치중하는 형식적 감리 지양.\n② 실증 중심 전환: 종료 단계 감리 시 기능 시험(Test Case 전수 확인), 시큐어코딩·취약점 자동 스캐닝, 부하 테스트 실증을 의무화하여 시스템 개통 직후 장애를 원천 예방."
  },
  {
    "domain": "모의고사",
    "topic": "소프트웨어 유지보수 4대 유형 (ISO/IEC 14764)",
    "mnemonic": "수·적·완·예 (수정·적응·완전·예방)",
    "definition": "배포 후 SW 결함 수정과 환경 적응을 수행하는 활동",
    "details": "[유지보수] = 사후대응[수정(Corrective) · 적응(Adaptive)] + 사전적극[완전화(Perfective) · 예방(Preventive)]\n  * 비중: 완전화(약 50~60%) > 적응(약 20~25%) > 수정(약 15~20%) > 예방(약 5%)",
    "tableRows": [
      {
        "category": "사후 수정·대응",
        "sub": "수정 유지보수 (Corrective)",
        "desc": "운영 중 발견된 논리·코딩·설계 결함(Bug)을 수정하여 원래 명세대로 복구하는 활동"
      },
      {
        "category": "",
        "sub": "적응 유지보수 (Adaptive)",
        "desc": "OS 업그레이드, 하드웨어 교체, 법·제도 변경, 외부 API 변화 등 외부 환경 변화에 맞추는 활동"
      },
      {
        "category": "사전 기능·품질개선",
        "sub": "완전화 유지보수 (Perfective)",
        "desc": "신규 사용자 기능 추가, UI/UX 개선, 처리 성능 최적화 등 가치를 높이는 활동 (비용 비중 최대)"
      },
      {
        "category": "",
        "sub": "예방 유지보수 (Preventive)",
        "desc": "미래의 유지보수성과 신뢰성을 높이기 위해 리팩토링, 레거시 구조 개선, 문서 최신화를 수행하는 활동"
      }
    ],
    "keywords": [
      "ISO/IEC 14764",
      "수정(Corrective)",
      "적응(Adaptive)",
      "완전화(Perfective)",
      "예방(Preventive)",
      "리팩토링"
    ],
    "differentiation": "[유형 B] 레만(Lehman)의 SW 진화 법칙과 예방적 유지보수 투자 전략\n① 지속적 변화와 복잡도 증가의 법칙: SW는 수정·완전화 유지보수가 반복될수록 아키텍처 엔트로피(기술부채)가 증가하여 품질이 급격히 저하됨.\n② 해결 방안: 전체 유지보수 예산의 일정 비율을 반드시 '예방 유지보수(리팩토링·자동화 테스트 확충)'에 할당하도록 SLA 및 개발 거버넌스에 명문화."
  },
  {
    "domain": "모의고사",
    "topic": "요구사항 추적표 (RTM, Requirement Traceability Matrix)",
    "mnemonic": "요·설·구·시 / 정방향(누락방지) ↔ 역방향(Gold Plating 방지)",
    "definition": "요구사항이 설계·구현·시험까지 일관 반영됨을 검증 체계",
    "details": "[요구사항 ID] ──(정방향 추적: 누락 방지)──> [설계서 ID] ──> [소스코드 모듈] ──> [테스트케이스 ID]\n              <──(역방향 추적: 과잉구현 Gold Plating 및 불필요 코드 탐지)──────────────",
    "tableRows": [
      {
        "category": "핵심 개념",
        "sub": "양방향 매핑 매트릭스",
        "desc": "사용자 요구사항 식별자(ID)를 기준으로 분석·설계·코드·단위/통합 테스트케이스를 상호 연결한 관리표"
      },
      {
        "category": "추적 방향",
        "sub": "정방향 추적 (Forward)",
        "desc": "요구사항 → 설계 → 코드 → 테스트 순으로 모든 요구사항이 빠짐없이 구현·검증되었는지 누락 여부 확인"
      },
      {
        "category": "",
        "sub": "역방향 추적 (Backward)",
        "desc": "테스트·코드 → 설계 → 요구사항 순으로 역추적하여 요구사항에 없는 불필요 기능(Gold Plating) 탐지"
      },
      {
        "category": "핵심 효과",
        "sub": "변경 영향도 분석",
        "desc": "특정 요구사항 변경 시 수정해야 할 설계서, 소스코드, 회귀 테스트 대상을 즉각 식별하여 공수 산정"
      }
    ],
    "keywords": [
      "양방향 추적성",
      "정방향 추적",
      "역방향 추적",
      "Gold Plating 방지",
      "변경 영향도 분석",
      "감리 필수산출물"
    ],
    "differentiation": "[유형 B] 수기 엑셀 RTM의 현행화 실패 한계와 ALM 자동화 연계\n① 실무 한계: 대규모 차세대 사업에서 수천 개 요구사항을 엑셀 RTM으로 관리할 경우 잦은 과업 변경 시 문서와 실제 코드 간 불일치 발생.\n② ALM(Application Lifecycle Management) 자동화: Jira(요구사항) - Git/GitLab(커밋 태그) - JUnit/TestRail(테스트 결과)을 CI/CD 파이프라인에서 ID 기반으로 자동 연동해 실시간 살아있는 RTM(Live Traceability) 구현."
  },
  {
    "domain": "모의고사",
    "topic": "회귀 테스트 (Regression Test) 기법",
    "mnemonic": "Retest-All · Selective · Priority / 변·영·회",
    "definition": "SW 수정 후 기존 기능에 신규 결함 유입을 검증 기법",
    "diagramImg": "exam_q27.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 수행 목적 | 부작용(Side-Effect) 탐지 | 버그 수정·기능 추가·리팩토링으로 인해 연관 모듈에 의도치 않은 결함이 전파되었는지 확인 |\n| 3대 선정 기법 | Retest All (전체 재시험) | 기존 모든 테스트케이스를 전수 재실행 (신뢰도는 최고이나 시간·비용 과다) |\n| | Selective Test (선택적) | 변경 영향도 분석(Impact Analysis)을 통해 수정 모듈과 결합도가 높은 범위의 TC만 선별 수행 |\n| | Priority Test (우선순위) | 비즈니스 중요도, 결함 발생 빈도, 복잡도가 높은 핵심 TC부터 우선순위를 부여해 수행 |\n| 효율화 방안 | 테스트 자동화 & CI/CD | Record & Replay 도구 및 CI 파이프라인 자동 트리거를 통해 야간 빌드마다 무인 회귀 검증 |",
    "keywords": [
      "Side-Effect 탐지",
      "Retest All",
      "Selective Test",
      "Priority Test",
      "변경 영향도 분석",
      "테스트 자동화"
    ],
    "differentiation": "[유형 B] 애자일·지속적 배포(CD) 환경에서 회귀 테스트 병목 해결 방안\n① 테스트 시간 폭발: 스프린트가 누적될수록 회귀 테스트케이스가 기하급수적으로 늘어나 배포 주기를 지연시킴.\n② 해결 방안: AST(추상구문트리) 및 코드 커버리지 맵 기반 테스트 영향 분석(Test Impact Analysis)을 도입하여 변경된 코드 라인에 영향을 받는 테스트만 자동 선별 실행."
  },
  {
    "domain": "모의고사",
    "topic": "소프트웨어 설계의 원리 (분할정복 · 추상화 · 모듈화 · 정보은닉)",
    "mnemonic": "분·추·모·정·계 / 응집도↑(기순교절시논우) · 결합도↓(자스제외공내)",
    "definition": "복잡한 SW를 변경에 유연하고 보수 쉽게 구조화한 원리",
    "details": "[분할과 정복] + [추상화(과정·데이터·제어)] + [모듈화] + [정보은닉(캡슐화)] + [단계적 분해]\n  └──────> 목표 품질: 높은 응집도(High Cohesion: 기능적) & 낮은 결합도(Low Coupling: 자료 결합)",
    "tableRows": [
      {
        "category": "기본 원리",
        "sub": "분할정복 & 단계적 분해",
        "desc": "거대 문제를 해결 가능한 작은 단위로 나누고(Divide & Conquer), 상위 개념에서 하위로 상세화(Top-Down)"
      },
      {
        "category": "",
        "sub": "추상화 (Abstraction)",
        "desc": "핵심 본질에 집중하고 불필요 세부사항은 생략 (기능/과정 추상화, 데이터 추상화, 제어 추상화)"
      },
      {
        "category": "",
        "sub": "모듈화 & 정보은닉",
        "desc": "독립적 기능 단위로 분할(모듈화)하고, 모듈 내부 자료구조·구현은 숨겨 외부 직접 접근 차단(정보은닉)"
      },
      {
        "category": "모듈 독립성",
        "sub": "응집도 (Cohesion ↑)",
        "desc": "모듈 내부 요소 간 연관성 (강함→약함: 기능적 > 순차적 > 교환적 > 절차적 > 시간적 > 논리적 > 우연적)"
      },
      {
        "category": "",
        "sub": "결합도 (Coupling ↓)",
        "desc": "모듈 간 상호 의존성 (약함→강함: 자료 > 스탬프 > 제어 > 외부 > 공통 > 내용 결합도)"
      }
    ],
    "keywords": [
      "추상화",
      "정보은닉",
      "모듈 독립성",
      "응집도(기순교절시논우)",
      "결합도(자스제외공내)",
      "SOLID 원칙"
    ],
    "differentiation": "[유형 C] AI 코딩 시대에 소프트웨어 설계 원리가 더욱 중요해진 이유\n① AI 코드 생성의 그림자: LLM은 국소적 함수 구현은 빠르나, 아키텍처 통제 없이 프롬프트만으로 개발 시 전역 변수 남발(공통 결합도)과 거대 갓 클래스(우연적 응집도)를 양산.\n② 아키텍트 중심 통제: 헥사고날 아키텍처(포트 앤 어댑터)와 SOLID 원칙으로 모듈 경계와 인터페이스를 인간이 먼저 엄격히 설계한 뒤 내부 구현만 AI에게 위임해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "STPA (시스템 이론 기반 위험분석, System-Theoretic Process Analysis)",
    "mnemonic": "목적정의 → 제어구조 모델링 → UCA 식별 → 손실시나리오 도출",
    "definition": "복잡 시스템의 컴포넌트 상호작용 제어 결함을 분석 기법",
    "details": "[Control Controller(제어기)] ──(Control Action: 제어명령)──> [Controlled Process(피제어 공정)]\n          ^────────────────────(Feedback: 센서 피드백)──────────────────────┘\n  * 4대 불안전 제어행위(UCA): 미제공(Not Provided) · 오제공(Provided) · 시점오류(Timing) · 지속시간오류(Duration)",
    "tableRows": [
      {
        "category": "등장 배경",
        "sub": "STAMP 모델 기반",
        "desc": "단일 부품 고장이 아닌 정상 부품 간의 잘못된 상호작용·SW 제어 오류로 인한 사고를 분석 (낸시 레브슨 교수)"
      },
      {
        "category": "1단계",
        "sub": "분석 목적·손실 정의",
        "desc": "시스템 차원의 수용 불가능한 손실(Loss) 및 시스템 해저드(System-level Hazard), 안전 제약조건 식별"
      },
      {
        "category": "2단계",
        "sub": "제어 구조 모델링",
        "desc": "제어기(Controller), 액추에이터, 피제어 프로세스, 센서 간의 제어 명령과 피드백 루프(Control Loop) 도식화"
      },
      {
        "category": "3단계",
        "sub": "불안전 제어행위 (UCA)",
        "desc": "제어 명령의 미제공, 잘못된 제공, 너무 빠르거나 늦은 제공, 너무 빨리 멈추거나 오래 지속됨의 4가지 유형 도출"
      },
      {
        "category": "4단계",
        "sub": "손실 시나리오 도출",
        "desc": "부적절한 제어 알고리즘, 잘못된 프로세스 모델(Mental Model), 피드백 지연·누락 원인을 분석해 안전 요구사항 도출"
      }
    ],
    "keywords": [
      "STAMP",
      "제어 루프(Control Loop)",
      "UCA(불안전 제어행위)",
      "프로세스 모델 불일치",
      "자율주행/CPS 안전"
    ],
    "differentiation": "[유형 A] 전통적 안전 분석(FTA · FMEA) vs STPA 심층 비교\n① FTA/FMEA의 한계: 사고를 '개별 부품의 물리적 고장 연쇄(선형 인과관계)'로 가정하므로, 하드웨어 고장 없이 SW 로직·AI 판단 착오로 발생하는 사고를 잡아내지 못함.\n② STPA의 강점: 안전을 '제어 문제(Control Problem)'로 정의하여 자율주행(ISO 21448 SOTIF), 항공우주, 의료 AI 등 SW 집약적 복합 시스템(CPS)의 비선형 상호작용 위험을 완벽히 식별."
  },
  {
    "domain": "모의고사",
    "topic": "노코드 (No-Code) 플랫폼",
    "mnemonic": "GUI 드래그앤드롭 · 시민개발자 · 사전정의 템플릿",
    "definition": "코딩 없이 시각적 인터페이스만으로 앱을 구축하는 기술",
    "details": "[시민 개발자(현업)] ──> [드래그앤드롭 UI 빌더 + 사전 구축 워크플로우/DB 블록] ──> [즉시 배포·실행 앱]",
    "tableRows": [
      {
        "category": "핵심 개념",
        "sub": "시각적 선언형 개발",
        "desc": "소스코드 작성 없이 GUI 기반 컴포넌트 배치와 설정만으로 웹·모바일·업무 자동화 앱을 제작"
      },
      {
        "category": "주요 사용자",
        "sub": "시민 개발자 (Citizen)",
        "desc": "비전공 현업 실무자가 IT 부서 대기 없이 직접 부서 내 백오피스·대시보드·폼 앱을 구축"
      },
      {
        "category": "기술 구성",
        "sub": "사전 정의 블록·커넥터",
        "desc": "UI 템플릿, 내장형 데이터베이스(Airtable/Notion류), 외부 SaaS 연동 API 커넥터(Zapier/Make)"
      },
      {
        "category": "구조적 한계",
        "sub": "플랫폼 종속·확장 한계",
        "desc": "제공된 템플릿 밖의 복잡한 비즈니스 로직 구현이 불가능하며 특정 벤더 런타임에 종속(Lock-in)"
      }
    ],
    "keywords": [
      "Citizen Developer",
      "GUI 빌더",
      "선언형 조합",
      "벤더 종속성",
      "Shadow IT",
      "백오피스 자동화"
    ],
    "differentiation": "[유형 A] 노코드(No-Code) vs 바이브 코딩(Vibe Coding) 심층 비교\n① 추상화 방식: 노코드는 '사전 정의된 시각적 블록'으로 자유도를 제한해 안정성을 얻는 반면, 바이브 코딩은 '자연어 프롬프트와 LLM'을 통해 실제 제한 없는 소스코드를 직접 생성.\n② 한계와 결합: 노코드는 커스텀 로직 확장이 어렵고 바이브 코딩은 디버깅·보안 통제가 어려우므로, 표준 UI/연동은 노코드로, 특수 로직 플러그인은 바이브 코딩으로 결합."
  },
  {
    "domain": "모의고사",
    "topic": "바이브 코딩 (Vibe Coding)",
    "mnemonic": "자연어 의도(Vibe) → LLM 코드생성 → 실행·피드백 루프",
    "definition": "자연어 프롬프트로 의도를 전달해 AI와 SW 구현 기법",
    "details": "[개발자/기획자(자연어 의도·Vibe)] ──> [AI 에이전트/LLM(코드 생성·수정·실행)] ──> [결과 확인 및 반복 피드백]",
    "tableRows": [
      {
        "category": "등장 배경",
        "sub": "안드레이 카파시 제창",
        "desc": "코드를 한 줄씩 직접 타이핑하는 대신 AI에게 고수준 의도(Vibe)를 말하고 생성된 결과를 검증·조율하는 개발 방식"
      },
      {
        "category": "핵심 메커니즘",
        "sub": "프롬프트 → 실행 루프",
        "desc": "요구사항 자연어 입력 → 전체 파일/아키텍처 자동 생성 → 에러 로그 재주입 자가 수정 → 즉시 프리뷰"
      },
      {
        "category": "강점 및 혁신",
        "sub": "초고속 프로토타이핑",
        "desc": "기술 스택 장벽을 허물어 아이디어에서 작동하는 풀스택 MVP까지의 시간을 수일에서 수시간으로 단축"
      },
      {
        "category": "위험 및 과제",
        "sub": "블랙박스 기술부채·보안",
        "desc": "생성 코드의 내부 원리를 모른 채 누적 시 디버깅 불가(스파게티 코드) 및 시크릿 노출·SQLi 등 취약점 유입"
      }
    ],
    "keywords": [
      "Andrej Karpathy",
      "자연어 프로그래밍",
      "AI 코딩 에이전트",
      "초고속 MVP",
      "코드 이해도 부채",
      "가드레일"
    ],
    "differentiation": "[유형 B] 엔터프라이즈 환경에서 바이브 코딩의 품질·보안 리스크 극복 방안\n① 실무 문제점: 비숙련자가 생성한 AI 코드를 검증 없이 상용 배포할 경우 아키텍처 일관성 붕괴 및 심각한 보안 사고 초래.\n② 엔지니어링 통제: TDD(테스트 코드를 먼저 작성해 AI 생성 코드 검증), 정적 보안 분석(SAST/SBOM) 자동 게이트웨이, 숙련 시니어 아키텍트의 설계 리뷰를 필수 결합."
  },
  {
    "domain": "모의고사",
    "topic": "오픈소스 SW 라이선스 유형과 컴플라이언스",
    "mnemonic": "Permissive(MIT·Apache·BSD) vs Copyleft(GPL·AGPL·LGPL)",
    "definition": "오픈소스 활용 시 법적 의무와 공개 범위 규정한 허가권",
    "details": "[Permissive (코드 공개 의무 없음: MIT, BSD, Apache 2.0)]  <──대비──>  [Copyleft (파생물 공개 의무: LGPL < MPL < GPL < AGPL)]",
    "tableRows": [
      {
        "category": "Permissive 계열",
        "sub": "MIT / BSD 라이선스",
        "desc": "저작권 고지만 유지하면 수정·독점 상용화·재배포 시 소스코드 공개 의무가 없는 가장 관대한 라이선스"
      },
      {
        "category": "",
        "sub": "Apache 2.0",
        "desc": "소스코드 비공개 상용화 허용 + 특허권 명시적 허여 및 특허 소송 제기 시 라이선스 종료 조항 포함"
      },
      {
        "category": "Copyleft 계열",
        "sub": "GPL v2 / v3 (강한 전이)",
        "desc": "정적·동적 링크 결합 시 전체 파생 저작물의 소스코드를 동일 GPL로 공개해야 하는 전염성(Viral Effect) 보유"
      },
      {
        "category": "",
        "sub": "LGPL / MPL (약한 전이)",
        "desc": "단순 동적 라이브러리 링크(LGPL)나 별도 파일(MPL) 결합 시에는 독점 상용 코드 비공개 허용"
      },
      {
        "category": "",
        "sub": "AGPL (네트워크 전이)",
        "desc": "배포하지 않고 클라우드·SaaS 네트워크 서비스로만 제공해도 수정 소스코드 공개 의무 발생"
      },
      {
        "category": "컴플라이언스",
        "sub": "SBOM & 스캐닝 도구",
        "desc": "SPDX/CycloneDX 기반 SBOM 명세화, Black Duck·FOSSA 도구로 라이선스 충돌 및 취약점 상시 검증"
      }
    ],
    "keywords": [
      "Copyleft",
      "Permissive",
      "Viral Effect(전염성)",
      "GPL/AGPL",
      "Apache 2.0",
      "SBOM",
      "OSRB"
    ],
    "differentiation": "[유형 B] 클라우드·AI 시대의 AGPL 전염성 리스크와 오픈소스 거버넌스 구축\n① 실무 치명적 리스크: 기업 핵심 알고리즘에 GPL이나 AGPL 오픈소스를 무단 결합해 SaaS로 서비스할 경우 기업 핵심 영업비밀 소스코드를 강제 공개해야 하는 법적 분쟁 발생.\n② 거버넌스 체계: CI/CD 파이프라인에 SCA(Software Composition Analysis) 도구를 내재화하고, SBOM 자동 생성 및 전담 OSRB(오픈소스 심의위원회) 승인 절차를 의무화."
  },
  {
    "domain": "모의고사",
    "topic": "소프트웨어 품질보증 (SQA)과 정형 기술 검토 (FTR/인스펙션)",
    "mnemonic": "계획·기준·감사·보고 / 계·개·준·검·재·후 (인스펙션 6단계)",
    "definition": "SW 개발 과정이 표준과 품질 요건 준수토록 보장 체계",
    "details": "[SQA (프로세스 관점: 예방·감사)] + [QC/Testing (산출물 관점: 결함 검출)]\n  * 인스펙션 6단계: 계획(Planning) → 사전교육(Overview) → 준비(Preparation) → 인스펙션 회의 → 재작업(Rework) → 추적(Follow-up)",
    "tableRows": [
      {
        "category": "SQA 목적 및 기능",
        "sub": "독립적 프로세스 보증",
        "desc": "개발 조직과 독립된 QA 조직이 표준 준수 여부 감사, 품질 측정지표 수집, 시정조치 추적 수행"
      },
      {
        "category": "동료 검토 기법",
        "sub": "동료검토 / 워크스루",
        "desc": "비공식적 상호 리뷰(Peer Review) 및 작성자 주도로 산출물을 훑어보며 조기 결함을 찾는 워크스루(Walkthrough)"
      },
      {
        "category": "정형 검토 (FTR)",
        "sub": "인스펙션 (Inspection)",
        "desc": "마이클 파간(Fagan) 고안, 가장 공식적·체계적인 검토 기법으로 체크리스트 기반 사전 준비 후 회의 진행"
      },
      {
        "category": "인스펙션 역할",
        "sub": "주재자·작성자·검토자·기록자",
        "desc": "주재자(Moderator: 진행·통제), 작성자(Author), 검토자(Inspector), 낭독자(Reader), 기록자(Recorder)"
      }
    ],
    "keywords": [
      "SQA vs QC",
      "ISO/IEC 25010",
      "정형기술검토(FTR)",
      "Fagan 인스펙션",
      "워크스루",
      "Moderator"
    ],
    "differentiation": "[유형 A] SQA(품질보증) vs QC(품질통제/테스팅) 및 동료검토 기법 비교\n① SQA vs QC: SQA는 결함 예방을 위해 '개발 프로세스'를 감사하는 관리 활동인 반면, QC는 완성된 '산출물/코드'에서 결함을 검출하는 기술 활동.\n② 워크스루 vs 인스펙션: 워크스루는 작성자 주도의 비공식 세미나 형태이나, 인스펙션은 훈련된 주재자(Moderator) 주도 하에 6단계 절차와 엄격한 종료 기준을 적용해 초기 설계 결함의 60~80%를 사전 제거."
  },
  {
    "domain": "모의고사",
    "topic": "코드 스멜 (Code Smell)",
    "mnemonic": "스멜(중복·거대·긴파라미터·산탄총) → 리팩토링(외부동작 유지·내부개선)",
    "definition": "잠재적 결함과 유지보수 저하를 유발하는 나쁜 코드 징후",
    "details": "[불명확한 요구사항·일정 압박] ──> [기술부채 누적] ──> [코드 스멜(악취 징후) 발생] ──(리팩토링 + 단위테스트)──> [클린 아키텍처 복원]",
    "tableRows": [
      {
        "category": "관계 체인",
        "sub": "기술부채 → 코드 스멜",
        "desc": "빠른 출시를 위해 타협한 설계(기술부채)가 소스코드 상에 유지보수를 어렵게 만드는 징후(Code Smell)로 발현"
      },
      {
        "category": "대표 코드 스멜",
        "sub": "Bloaters (비대함)",
        "desc": "긴 메서드(Long Method), 거대 클래스(God Class), 긴 매개변수 목록, 기본형 집착"
      },
      {
        "category": "",
        "sub": "Change Preventers",
        "desc": "확산적 변경(한 클래스가 여러 이유로 수정), 산탄총 수술(Shotgun Surgery: 한 변경에 수십 개 클래스 수정)"
      },
      {
        "category": "",
        "sub": "Dispensables & Couplers",
        "desc": "중복 코드(Duplicated Code), 죽은 코드, 기능 편애(Feature Envy: 타 객체 데이터에 과도 접근)"
      },
      {
        "category": "리팩토링 기법",
        "sub": "메서드 추출·다형성 치환",
        "desc": "외부 관찰 동작(기능)은 그대로 유지한 채 메서드 추출(Extract Method), 조건문을 다형성으로 전환해 가독성 향상"
      }
    ],
    "keywords": [
      "마틴 파울러",
      "기술부채",
      "코드 스멜",
      "산탄총 수술(Shotgun Surgery)",
      "메서드 추출",
      "회귀 테스트 필수"
    ],
    "differentiation": "[유형 B] 리팩토링 실패 방지 원칙 및 전략적 기술부채 관리\n① 리팩토링 전제조건: 자동화된 단위·회귀 테스트 안전망 없이 리팩토링을 수행하면 기존 정상 기능이 파괴됨.\n② 보이스카우트 규칙: 대규모 리팩토링 일정을 별도로 잡기보다, 기능 수정 시마다 '처음 왔을 때보다 코드를 더 깨끗하게(Boy Scout Rule)' 상시 개선하고 SonarQube로 기술부채 비율(Debt Ratio)을 5% 이내로 통제."
  },
  {
    "domain": "모의고사",
    "topic": "리팩토링 (Refactoring)",
    "mnemonic": "스멜(중복·거대·긴파라미터·산탄총) → 리팩토링(외부동작 유지·내부개선)",
    "definition": "외부 동작 변경 없이 SW 내부 코드 구조를 개선 기법",
    "details": "[불명확한 요구사항·일정 압박] ──> [기술부채 누적] ──> [코드 스멜(악취 징후) 발생] ──(리팩토링 + 단위테스트)──> [클린 아키텍처 복원]",
    "tableRows": [
      {
        "category": "관계 체인",
        "sub": "기술부채 → 코드 스멜",
        "desc": "빠른 출시를 위해 타협한 설계(기술부채)가 소스코드 상에 유지보수를 어렵게 만드는 징후(Code Smell)로 발현"
      },
      {
        "category": "대표 코드 스멜",
        "sub": "Bloaters (비대함)",
        "desc": "긴 메서드(Long Method), 거대 클래스(God Class), 긴 매개변수 목록, 기본형 집착"
      },
      {
        "category": "",
        "sub": "Change Preventers",
        "desc": "확산적 변경(한 클래스가 여러 이유로 수정), 산탄총 수술(Shotgun Surgery: 한 변경에 수십 개 클래스 수정)"
      },
      {
        "category": "",
        "sub": "Dispensables & Couplers",
        "desc": "중복 코드(Duplicated Code), 죽은 코드, 기능 편애(Feature Envy: 타 객체 데이터에 과도 접근)"
      },
      {
        "category": "리팩토링 기법",
        "sub": "메서드 추출·다형성 치환",
        "desc": "외부 관찰 동작(기능)은 그대로 유지한 채 메서드 추출(Extract Method), 조건문을 다형성으로 전환해 가독성 향상"
      }
    ],
    "keywords": [
      "마틴 파울러",
      "기술부채",
      "코드 스멜",
      "산탄총 수술(Shotgun Surgery)",
      "메서드 추출",
      "회귀 테스트 필수"
    ],
    "differentiation": "[유형 B] 리팩토링 실패 방지 원칙 및 전략적 기술부채 관리\n① 리팩토링 전제조건: 자동화된 단위·회귀 테스트 안전망 없이 리팩토링을 수행하면 기존 정상 기능이 파괴됨.\n② 보이스카우트 규칙: 대규모 리팩토링 일정을 별도로 잡기보다, 기능 수정 시마다 '처음 왔을 때보다 코드를 더 깨끗하게(Boy Scout Rule)' 상시 개선하고 SonarQube로 기술부채 비율(Debt Ratio)을 5% 이내로 통제."
  },
  {
    "domain": "모의고사",
    "topic": "소프트웨어 공학 발전원리와 AI 네이티브 SW 조건",
    "mnemonic": "비가시성·복잡성·순응성·변경성 / 신뢰·유지·효율·사용",
    "definition": "SW 위기 극복 위한 공학 원리와 AI 시대 품질 조건",
    "details": "[SW 본질적 특성(비가시·복잡·순응·변경)] ──> [SW 공학(프로세스·방법론·도구)] ──> [AI 패러다임: 명세 중심·검증 가능·윤리적 SW]",
    "tableRows": [
      {
        "category": "SW 4대 특성",
        "sub": "브룩스(Brooks) 정의",
        "desc": "비가시성(Invisibility), 복잡성(Complexity), 순응성(Conformity), 변경성(Changeability) 및 비마모성"
      },
      {
        "category": "SW 공학 3요소",
        "sub": "프로세스·방법론·도구",
        "desc": "품질 초석(Quality Focus) 위에 프로세스(절차), 방법론(기술 노하우), 자동화 도구(CASE/AI)로 구성"
      },
      {
        "category": "좋은 SW의 조건",
        "sub": "보ehm & ISO 25010",
        "desc": "신뢰성(무결성·가용성), 유지보수성(모듈화·확장성), 효율성(성능·자원), 사용성 및 보안성"
      },
      {
        "category": "AI 패러다임 변화",
        "sub": "코더에서 아키텍트로",
        "desc": "생성형 AI 확산으로 구현 비용은 급감한 반면, 명확한 요구사항 명세·아키텍처 경계 설계·보안 검증 역량이 품질 결정"
      }
    ],
    "keywords": [
      "No Silver Bullet",
      "비가시성·복잡성",
      "ISO/IEC 25010",
      "모듈화",
      "AI 코딩 패러다임",
      "설계·검증 중심"
    ],
    "differentiation": "[유형 C] 프레드 브룩스의 '은탄환은 없다(No Silver Bullet)' 관점에서 본 생성형 AI 코딩\n① 우연적 어려움 vs 본질적 어려움: 생성형 AI는 문법 작성·보일러플레이트 구현이라는 '우연적 어려움(Accidental Difficulty)'은 획기적으로 줄여주지만, 복잡한 도메인 요구사항 정의와 개념적 설계라는 '본질적 어려움(Essential Difficulty)'은 여전히 인간 기술사의 영역."
  },
  {
    "domain": "모의고사",
    "topic": "UI/UX 설계 절차와 사용성 평가 기법",
    "mnemonic": "리서치 → 페르소나 → IA/와이어프레임 → 프로토타입 → 평가(휴리스틱 vs 사용성)",
    "definition": "사용자 중심 경험 극대화 위한 설계와 사용성 검증 기법",
    "details": "[사용자 리서치·페르소나·고객여정지도] ──> [정보구조(IA)·와이어프레임·프로토타이핑] ──> [휴리스틱 평가(전문가) & 사용성 테스트(실사용자)]",
    "tableRows": [
      {
        "category": "개념 구분",
        "sub": "UI vs UX",
        "desc": "UI(시각적 레이아웃·조작 매개체) vs UX(서비스 이용 전 과정에서 사용자가 느끼는 총체적 경험·만족도)"
      },
      {
        "category": "주요 설계 기법",
        "sub": "페르소나 & 여정지도",
        "desc": "가상 대표 사용자 모델(Persona) 정의 및 시점별 접점·감정·불편사항(Pain Point)을 시각화한 고객여정지도(CJM)"
      },
      {
        "category": "",
        "sub": "IA & 와이어프레임",
        "desc": "카드소팅 기반 정보구조도(IA) 설계 및 화면 골격(Wireframe) → 동적 인터랙션 프로토타입 제작"
      },
      {
        "category": "전문가 평가",
        "sub": "휴리스틱 평가 (Heuristic)",
        "desc": "제이콥 닐슨의 10대 사용성 원칙(상태 가시성, 일관성, 오류 예방 등) 체크리스트로 소수 전문가(3~5명)가 신속 진단"
      },
      {
        "category": "실사용자 평가",
        "sub": "사용성 테스트 (Usability)",
        "desc": "실제 표적 사용자에게 과업(Task)을 부여하고 완료 시간·오류율·시선추적·발화사고법(Think Aloud)으로 실증 측정"
      }
    ],
    "keywords": [
      "페르소나(Persona)",
      "고객여정지도(CJM)",
      "정보구조도(IA)",
      "제이콥 닐슨 10원칙",
      "휴리스틱 평가",
      "사용성 테스트"
    ],
    "differentiation": "[유형 A] 휴리스틱 평가(Heuristic Evaluation) vs 사용성 테스트(Usability Testing) 비교\n① 평가 주체 및 시점: 휴리스틱 평가는 UI/UX 전문가(3~5명)가 초기 와이어프레임 단계에서 저비용·단기간에 명백한 설계 결함을 걸러내는 기법.\n② 사용성 테스트: 실제 엔드유저를 모집해 작동 프로토타입에서 실제 행동(과업 성공률·이탈 지점)을 관찰하므로, 초기에는 휴리스틱 평가로 1차 정제 후 핵심 시나리오에 사용성 테스트를 수행하는 2단계 결합이 최적."
  },
  {
    "domain": "모의고사",
    "topic": "무중단 배포 (Zero Downtime Deployment) 4대 방식",
    "mnemonic": "롤링(점진교체) · 블루그린(순간전환) · 카나리(소수검증) · 섀도우(트래픽복제)",
    "definition": "서비스 중단 없이 신규 버전 SW를 운영 반영하는 기법",
    "details": "[Rolling(순차 교체)]  |  [Blue/Green(구버전↔신버전 라우터 일괄전환)]  |  [Canary(1%→10%→100% 점진확대)]",
    "tableRows": [
      {
        "category": "롤링 배포",
        "sub": "Rolling Update",
        "desc": "가동 중인 서버 인스턴스를 N개씩 순차적으로 신버전으로 교체 (추가 인프라 비용 없으나 배포 중 구/신버전 공존)"
      },
      {
        "category": "블루/그린 배포",
        "sub": "Blue-Green",
        "desc": "운영(Blue)과 동일한 규모의 신규 환경(Green)을 구축해 로드밸런서 트래픽을 일괄 전환 (즉각 롤백 가능, 자원 2배 필요)"
      },
      {
        "category": "카나리 배포",
        "sub": "Canary Release",
        "desc": "소수 트래픽(예: 1~5%)만 먼저 신버전으로 라우팅해 에러율·성능 검증 후 점진적 확대 (실환경 위험 최소화)"
      },
      {
        "category": "그림자 배포",
        "sub": "Shadow (Dark Launch)",
        "desc": "실제 운영 트래픽을 복제(Mirroring)해 신버전에 흘려보내되 응답은 버리고 성능·정합성만 비교 검증"
      }
    ],
    "keywords": [
      "Rolling Deployment",
      "Blue-Green",
      "Canary Release",
      "Shadow Deployment",
      "Feature Toggle",
      "DB 스키마 호환성"
    ],
    "differentiation": "[유형 B] 무중단 배포 시 데이터베이스 스키마 변경 충돌 해결 (Expand and Contract 패턴)\n① 실무 최대 난제: 애플리케이션은 카나리/롤링으로 무중단 배포되나, DB 컬럼명 변경이나 삭제 시 구버전 서버에서 즉시 장애 발생.\n② Expand & Contract(확장 후 축소): 1단계(신규 컬럼 추가·양쪽 쓰기) → 2단계(신버전 앱 배포 및 데이터 마이그레이션) → 3단계(구버전 완전 제거 후 구 컬럼 삭제)로 하위 호환성 보장."
  },
  {
    "domain": "모의고사",
    "topic": "소프트웨어 형상관리와 기준선 (Configuration Management & Baseline)",
    "mnemonic": "식·통·감·기 / 기·분·설·제 (기능·분배·설계·제품 기준선)",
    "definition": "SW 산출물의 변경 통제와 무결성을 유지하는 관리 체계",
    "details": "[절차] 형상식별 → 형상통제(CCB 승인) → 형상감사 → 형상기록\n[기준선] 기능(요구사항) ──> 분배/할당(기본설계) ──> 설계(상세설계) ──> 제품/구현(코드·테스트 완료)",
    "tableRows": [
      {
        "category": "4대 표준 절차",
        "sub": "식별 → 통제 → 감사 → 기록",
        "desc": "관리 대상 식별(ID 부여) → 변경요청 시 형상통제위원회(CCB) 심의·승인 → 무결성 감사 → 변경이력 기록·보고"
      },
      {
        "category": "4대 기준선 유형",
        "sub": "기능 기준선 (Functional)",
        "desc": "시스템 요구사항 분석 완료 시점 승인된 명세 (시스템 기능·성능 기준)"
      },
      {
        "category": "",
        "sub": "분배 기준선 (Allocated)",
        "desc": "구조적 기본 설계 완료 시점, 서브시스템(H/W, S/W)별 기능 할당 명세"
      },
      {
        "category": "",
        "sub": "설계 기준선 (Design)",
        "desc": "상세 설계 완료 시점 승인된 모듈·DB·인터페이스 설계 명세 (구현 착수 기준)"
      },
      {
        "category": "",
        "sub": "제품 기준선 (Product)",
        "desc": "코딩 및 통합·시스템 테스트 완료 후 운영 배포 직전 확정된 실행 파일 및 문서"
      }
    ],
    "keywords": [
      "형상식별·통제·감사·기록",
      "CCB(형상통제위원회)",
      "기능·분배·설계·제품 기준선",
      "GitOps",
      "MLOps 형상관리"
    ],
    "differentiation": "[유형 C] AI 서비스 환경(LLMOps)에서의 확장된 4차원 형상관리 방안\n① 전통적 형상관리 한계: 기존 SW는 '소스코드와 문서'만 버전 관리하면 재현 가능했으나, AI 서비스는 코드만으로 동일 추론 결과 재현 불가.\n② AI 4대 형상 항목 통합: ① 소스코드(Git) + ② 학습/평가 데이터셋 버전(DVC) + ③ 모델 가중치·파라미터(Model Registry) + ④ 프롬프트 템플릿 및 RAG 인덱스 버전을 단일 기준선(Baseline)으로 묶어 통합 버전 통제."
  },
  {
    "domain": "모의고사",
    "topic": "소프트웨어 테스트 7대 원리와 기법 분류 (명세·구조·경험 기반)",
    "mnemonic": "결존·완불·초집·살충·정황·오류부재 / 명세(동·경·결·상) · 구조(구·분·조)",
    "definition": "결함 검출과 품질 확신을 위해 테스트 기법 체계화 구조",
    "details": "[7대 원리] 결함존재 증명 · 완벽테스트 불가 · 초기집중 · 결함집중(파레토) · 살충제 패러독스 · 정황의존 · 오류부재 궤변\n[기법 분류] 명세기반(Black-box)  |  구조기반(White-box)  |  경험기반(탐색적·오류추정)",
    "tableRows": [
      {
        "category": "테스트 7대 원리",
        "sub": "핵심 원리 (ISTQB)",
        "desc": "결함 존재만 증명(무결점 증명 불가), 초기 테스트 집중(Shift-Left), 파레토 법칙(20% 모듈에 80% 결함), 살충제 패러독스(동일 TC 반복 시 신종 결함 미발견)"
      },
      {
        "category": "명세 기반 기법",
        "sub": "블랙박스 테스트",
        "desc": "내부 코드 없이 요구명세 기반 검증: 동등분할, 경계값 분석, 결정테이블, 상태전이, 유스케이스, 페어와이즈(All-Pairs)"
      },
      {
        "category": "구조 기반 기법",
        "sub": "화이트박스 테스트",
        "desc": "내부 논리 경로 커버리지 검증: 구문(Statement) < 분기/결정(Branch) < 조건(Condition) < 다중조건/MC/DC 커버리지"
      },
      {
        "category": "경험 기반 기법",
        "sub": "오류추정 · 탐색적 테스트",
        "desc": "테스터의 도메인 직관과 과거 장애 이력을 활용해 테스트 설계와 실행·학습을 동시에 수행(Exploratory Testing)"
      },
      {
        "category": "테스트 자동화",
        "sub": "도입 고려사항",
        "desc": "반복 회귀 테스트·성능 부하 구간 우선 적용, 유지보수 오버헤드(Flaky Test) 관리 및 테스트 피라미드(Unit 비중 확대) 준수"
      }
    ],
    "keywords": [
      "살충제 패러독스",
      "오류 부재의 궤변",
      "동등분할·경계값",
      "MC/DC 커버리지",
      "탐색적 테스트",
      "테스트 피라미드"
    ],
    "differentiation": "[유형 B] 테스트 자동화 도입 시 실패 요인(UI 중심 역피라미드)과 극복 전략\n① 아이스크림 콘(역피라미드) 안티패턴: 화면 변경에 취약한 E2E/GUI 자동화에만 집중할 경우 스크립트 깨짐(Flaky Test)으로 유지보수 비용이 수동 테스트를 초과.\n② 테스트 피라미드 및 AI 자가치유(Self-Healing): 빠르고 안정적인 단위(Unit 70%)·서비스/API(20%) 자동화를 기반으로 삼고, UI(10%)에는 DOM 변경을 자동 추적하는 AI Self-Healing 테스트 도구를 적용."
  },
  {
    "domain": "모의고사",
    "topic": "SOAP (Simple Object Access Protocol)",
    "mnemonic": "SOAP(프로토콜·XML·UDDI/WSDL·WS-Security) vs REST(아키텍처·HTTP·JSON·무상태)",
    "definition": "XML 엔벨로프와 보안 표준으로 메시지 교환 프로토콜",
    "details": "[SOAP: Envelope(Header+Body) XML 메시징 + WSDL/UDDI + WS-Security(엄격한 보안·트랜잭션)]\n[REST: HTTP URI(자원) + Method(GET/POST/PUT/DELETE 행위) + JSON/XML 표현 (경량·확장성)]",
    "tableRows": [
      {
        "category": "SOAP (프로토콜)",
        "sub": "구조 및 표준",
        "desc": "XML 기반 엄격한 메시징 프로토콜 (Envelope-Header-Body 구조, WSDL 명세, UDDI 레지스트리)"
      },
      {
        "category": "",
        "sub": "보안 및 트랜잭션",
        "desc": "WS-Security(메시지 수준 암호화·서명), WS-AtomicTransaction(분산 ACID 트랜잭션) 내장"
      },
      {
        "category": "REST (아키텍처)",
        "sub": "로이 필딩 4대 요소",
        "desc": "자원(Resource: URI), 행위(Verb: HTTP Method), 표현(Representation: JSON), 무상태성(Stateless)"
      },
      {
        "category": "",
        "sub": "설계 제약조건",
        "desc": "Client-Server, Stateless, Cacheable, Uniform Interface(HATEOAS 포함), Layered System"
      },
      {
        "category": "선택 기준",
        "sub": "금융/엔터프라이즈 vs 웹/모바일",
        "desc": "고신뢰 금융·B2B 트랜잭션은 SOAP, 경량 모바일·MSA·퍼블릭 오픈 API는 REST(또는 gRPC) 채택"
      }
    ],
    "keywords": [
      "SOAP",
      "WSDL/UDDI",
      "WS-Security",
      "RESTful",
      "Uniform Interface",
      "HATEOAS",
      "Stateless"
    ],
    "differentiation": "[유형 A] REST vs GraphQL vs gRPC 차세대 API 기술 비교\n① REST의 한계: 고정된 엔드포인트로 인한 Over-fetching(불필요 데이터 수신) 및 Under-fetching(다중 호출 발생).\n② 차세대 보완: 복잡한 프론트엔드 데이터 질의에는 클라이언트 주도 스키마 쿼리인 GraphQL을, MSA 내부 초저지연 서버 간 통신에는 HTTP/2 + Protobuf 바이너리 직렬화 기반 gRPC를 적재적소 결합."
  },
  {
    "domain": "모의고사",
    "topic": "REST (Representational State Transfer) 아키텍처",
    "mnemonic": "SOAP(프로토콜·XML·UDDI/WSDL·WS-Security) vs REST(아키텍처·HTTP·JSON·무상태)",
    "definition": "자원 URI와 HTTP 메서드로 상태를 교환하는 구조",
    "details": "[SOAP: Envelope(Header+Body) XML 메시징 + WSDL/UDDI + WS-Security(엄격한 보안·트랜잭션)]\n[REST: HTTP URI(자원) + Method(GET/POST/PUT/DELETE 행위) + JSON/XML 표현 (경량·확장성)]",
    "tableRows": [
      {
        "category": "SOAP (프로토콜)",
        "sub": "구조 및 표준",
        "desc": "XML 기반 엄격한 메시징 프로토콜 (Envelope-Header-Body 구조, WSDL 명세, UDDI 레지스트리)"
      },
      {
        "category": "",
        "sub": "보안 및 트랜잭션",
        "desc": "WS-Security(메시지 수준 암호화·서명), WS-AtomicTransaction(분산 ACID 트랜잭션) 내장"
      },
      {
        "category": "REST (아키텍처)",
        "sub": "로이 필딩 4대 요소",
        "desc": "자원(Resource: URI), 행위(Verb: HTTP Method), 표현(Representation: JSON), 무상태성(Stateless)"
      },
      {
        "category": "",
        "sub": "설계 제약조건",
        "desc": "Client-Server, Stateless, Cacheable, Uniform Interface(HATEOAS 포함), Layered System"
      },
      {
        "category": "선택 기준",
        "sub": "금융/엔터프라이즈 vs 웹/모바일",
        "desc": "고신뢰 금융·B2B 트랜잭션은 SOAP, 경량 모바일·MSA·퍼블릭 오픈 API는 REST(또는 gRPC) 채택"
      }
    ],
    "keywords": [
      "SOAP",
      "WSDL/UDDI",
      "WS-Security",
      "RESTful",
      "Uniform Interface",
      "HATEOAS",
      "Stateless"
    ],
    "differentiation": "[유형 A] REST vs GraphQL vs gRPC 차세대 API 기술 비교\n① REST의 한계: 고정된 엔드포인트로 인한 Over-fetching(불필요 데이터 수신) 및 Under-fetching(다중 호출 발생).\n② 차세대 보완: 복잡한 프론트엔드 데이터 질의에는 클라이언트 주도 스키마 쿼리인 GraphQL을, MSA 내부 초저지연 서버 간 통신에는 HTTP/2 + Protobuf 바이너리 직렬화 기반 gRPC를 적재적소 결합."
  },
  {
    "domain": "모의고사",
    "topic": "멀티 클라우드 (Multi-Cloud)",
    "mnemonic": "종속탈피 · 재해복구 · Best-of-Breed / CMP · K8s · IaC",
    "definition": "복수 클라우드 조합해 종속 방지·가용성 확보하는 구조",
    "details": "[통합 관리 평면: CMP · Terraform(IaC) · Kubernetes(컨테이너 추상화) · Cloud Brokerage]\n       ├───> [CSP A (AWS: 핵심 웹/트랜잭션)]   ├───> [CSP B (GCP: 빅데이터/AI)]   └───> [CSP C (Azure: 사내 OA)]",
    "tableRows": [
      {
        "category": "도입 목적",
        "sub": "Vendor Lock-in 방지",
        "desc": "특정 클라우드 사업자(CSP) 장애 전파 차단, 가격 협상력 확보 및 리전별 데이터 주권(GDPR 등) 준수"
      },
      {
        "category": "",
        "sub": "Best-of-Breed 활용",
        "desc": "워크로드 특성에 맞춰 각 CSP별 최고 성능 서비스(예: AI는 GCP, 엔터프라이즈는 Azure)를 최적 조합"
      },
      {
        "category": "핵심 구현 기술",
        "sub": "이식성·추상화",
        "desc": "쿠버네티스(K8s) 기반 컨테이너 오케스트레이션 및 Terraform 등 멀티 클라우드 IaC 프로비저닝"
      },
      {
        "category": "",
        "sub": "통합 관제·네트워크",
        "desc": "CMP(클라우드관리플랫폼), 멀티 클라우드 서비스 메시(Istio) 및 SD-WAN 기반 클라우드 간 전용망 연결"
      }
    ],
    "keywords": [
      "Vendor Lock-in 탈피",
      "Best-of-Breed",
      "하이브리드 vs 멀티",
      "CMP",
      "Terraform(IaC)",
      "FinOps"
    ],
    "differentiation": "[유형 A] 하이브리드 클라우드(Hybrid) vs 멀티 클라우드(Multi-Cloud) 비교 및 운영 난제 극복\n① 개념 구분: 하이브리드는 '온프레미스(Private) + 퍼블릭 클라우드'의 이기종 결합이고, 멀티 클라우드는 '2개 이상의 서로 다른 퍼블릭 CSP'를 동시 활용하는 구조.\n② 실무 한계 극복: CSP 간 데이터 이동 시 발생하는 막대한 Egress(아웃바운드) 네트워크 과금과 보안 정책 파편화를 해결하기 위해 FinOps 비용 최적화와 CSPM(클라우드 보안 형상관리) 통합 통제가 필수."
  },
  {
    "domain": "모의고사",
    "topic": "엣지 컴퓨팅 (Edge Computing) 주요 기술",
    "mnemonic": "초저지연 · 대역폭절감 · 프라이버시 / MEC · 포그 · 경량컨테이너 · 온디바이스AI",
    "definition": "데이터 발생 말단에서 즉시 연산해 저지연 처리하는 기술",
    "details": "[End Device/IoT 센서] ──(1ms 초저지연)──> [Edge/Fog Node (MEC·실시간 추론·전처리)] ──(요약본 전송)──> [Central Cloud]",
    "tableRows": [
      {
        "category": "등장 배경",
        "sub": "중앙 클라우드 한계",
        "desc": "폭증하는 IoT·자율주행 데이터의 네트워크 대역폭 병목, 왕복 지연시간(Latency), 민감 데이터 외부 반출 위험 해소"
      },
      {
        "category": "계층 아키텍처",
        "sub": "클라우드 - 포그 - 엣지",
        "desc": "클라우드(대규모 학습·장기 저장) ↔ 포그(중간 게이트웨이·근거리 집계) ↔ 엣지(단말·기지국 즉시 제어)"
      },
      {
        "category": "주요 핵심 기술",
        "sub": "MEC (Multi-access Edge)",
        "desc": "5G/6G 이동통신 기지국에 컴퓨팅 서버를 전진 배치해 자율주행·AR/VR 초저지연(URLLC) 서비스 구현"
      },
      {
        "category": "",
        "sub": "경량 인프라 & AI",
        "desc": "경량 쿠버네티스(K3s, KubeEdge), 모델 경량화(양자화·지식증류) 기반 NPU 엣지 AI 추론 엔진"
      }
    ],
    "keywords": [
      "초저지연(Ultra-Low Latency)",
      "MEC",
      "포그 컴퓨팅",
      "대역폭 절감",
      "K3s/KubeEdge",
      "연합학습(FL)"
    ],
    "differentiation": "[유형 C] 클라우드-엣지 연속체(Cloud-Edge Continuum)와 연합학습(Federated Learning) 연계\n① 단절 없는 오케스트레이션: 중앙 클라우드에서 학습된 AI 모델을 경량화하여 수천 개 엣지 노드로 자동 배포하고, 엣지에서는 로컬 데이터로만 재학습 후 가중치만 중앙에 모으는 연합학습(FL)으로 프라이버시와 지능을 동시 달성."
  },
  {
    "domain": "모의고사",
    "topic": "SDM (소프트웨어 정의 제조, Software Defined Manufacturing)",
    "mnemonic": "하드웨어 추상화 · IT/OT 융합 · 디지털트윈 · 자율제조",
    "definition": "제조 설비를 SW로 추상화해 공정을 유연 제어하는 체계",
    "diagramImg": "exam_q42.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 패러다임 전환 | 하드웨어 → SW 중심 | 고정된 PLC·전용 설비 중심 공정에서 SW 코드·정책 변경만으로 다품종 맞춤형 생산라인 즉시 재구성 |\n| 핵심 아키텍처 | 설비 추상화 & 가상화 | 가상 PLC(vPLC), OPC-UA 표준 인터페이스 및 에지 컴퓨팅으로 이기종 물리 설비를 표준 API화 |\n| | IT / OT 완전 융합 | 현장 제어망(OT: 센서·로봇)과 기업 정보망(IT: ERP·AI·클라우드)을 단일 데이터 파이프라인으로 통합 |\n| 지능화 엔진 | 디지털 트윈 & AI | 가상 공장(Digital Twin)에서 생산 스케줄링·불량 예측을 사전 시뮬레이션 후 물리 공장에 무중단 배포 |",
    "keywords": [
      "제조 패러다임 전환",
      "설비 추상화",
      "vPLC(가상 PLC)",
      "IT/OT 융합",
      "OPC-UA",
      "디지털 트윈",
      "자율제조"
    ],
    "differentiation": "[유형 A] 기존 스마트팩토리(자동화) vs SDM(소프트웨어 정의 제조) 비교\n① 기존 스마트팩토리: 설비 데이터를 수집·모니터링(MES/SCADA)하더라도 공정 변경 시 현장 엔지니어가 개별 PLC 래더 로직을 수동 수정해야 함.\n② SDM: 클라우드 네이티브(CI/CD·컨테이너) 개념을 제조 현장에 이식하여, SW 업데이트(OTA)만으로 로봇·설비의 작업 레시피와 라인 토폴로지를 자율 재편성."
  },
  {
    "domain": "모의고사",
    "topic": "APIM (API 관리 플랫폼, API Management)",
    "mnemonic": "게이트웨이(인·권·제·변) + 개발자포털 + 수명주기/분석",
    "definition": "기업 API의 배포·보안·트래픽을 통합 통제하는 플랫폼",
    "details": "[Client/App] ──> [API Gateway (인증·인가·Rate Limit·라우팅·변환)] ──> [Backend MSA / AI Model]\n                       ^── 정책 배포·모니터링 ── [Admin Portal & Developer Portal (명세·온보딩·과금)]",
    "tableRows": [
      {
        "category": "3대 핵심 구성",
        "sub": "API 게이트웨이 (실행평면)",
        "desc": "단일 진입점(Single Entry Point)에서 인증(OAuth2/JWT), 유량제어(Throttling), 프로토콜 변환(REST↔gRPC) 수행"
      },
      {
        "category": "",
        "sub": "개발자 포털 (생태계)",
        "desc": "OpenAPI(Swagger) 명세 카탈로그 공개, 샌드박스 테스트, API Key 발급 및 파트너 셀프서비스 온보딩"
      },
      {
        "category": "",
        "sub": "API 매니저 (관리평면)",
        "desc": "API 설계→배포→버전관리→폐기 수명주기 통제, 실시간 호출 통계·지연시간 모니터링 및 수익화(Monetization)"
      },
      {
        "category": "보안 통제",
        "sub": "OWASP API Security 대응",
        "desc": "객체 수준 인가 검증(BOLA 방지), 스키마 유효성 검증, 비정상 봇 트래픽 차단"
      }
    ],
    "keywords": [
      "API Gateway",
      "Developer Portal",
      "OAuth 2.0 / JWT",
      "Rate Limiting",
      "OpenAPI(Swagger)",
      "AI Gateway"
    ],
    "differentiation": "[유형 C] 전통적 APIM에서 AI 게이트웨이(AI Gateway) 및 에이전트 도구 허브로의 진화\n① 진화 배경: 기업 내 다중 LLM 호출과 AI 에이전트의 사내 API 도구(MCP/Function Calling) 호출 폭증.\n② AI Gateway 확장: 기존 요청 횟수(RPS) 제한을 넘어 '토큰(Token) 사용량 기반 쿼터 제어', 시맨틱 캐싱(유사 프롬프트 캐시 응답), PII 민감정보 마스킹 및 멀티 LLM 폴백 라우팅 기능으로 진화."
  },
  {
    "domain": "모의고사",
    "topic": "온톨로지 (Ontology)와 엔터프라이즈 지식 모델링",
    "mnemonic": "클·인·관·속·공 (클래스·인스턴스·관계·속성·공리) / RDF·OWL·SPARQL",
    "definition": "도메인 개념과 관계를 정형화해 기계 추론 지원하는 모델",
    "details": "[비정형/정형 사일로 데이터] ──> [온톨로지 스키마(클래스·관계·속성·공리)] ──> [지식그래프(RDF/OWL)] ──> [AI 에이전트 추론·의사결정]",
    "tableRows": [
      {
        "category": "핵심 개념",
        "sub": "명시적·형식적 명세",
        "desc": "인간과 컴퓨터(AI)가 도메인 지식을 공통으로 이해·추론할 수 있도록 개념(Concept)과 관계를 정의한 사전"
      },
      {
        "category": "5대 구성요소",
        "sub": "클·인·관·속·공",
        "desc": "클래스(집합 개념), 인스턴스(실제 개체), 관계(Relation: is-a/part-of), 속성(Attribute), 공리(Axiom: 논리 규칙)"
      },
      {
        "category": "표준 기술 스택",
        "sub": "RDF · RDFS · OWL",
        "desc": "주어-술어-목적어 트리플(RDF), 어휘 체계(RDFS), 기술논리 기반 웹 온톨로지 언어(OWL) 및 질의어(SPARQL)"
      },
      {
        "category": "현대적 활용",
        "sub": "AI 에이전트 & 디지털트윈",
        "desc": "팔란티어(Palantir) 식 엔터프라이즈 온톨로지: 기업 데이터·비즈니스 로직·액션(Action)을 결합해 자율 의사결정 실행"
      }
    ],
    "keywords": [
      "시맨틱 웹",
      "RDF 트리플",
      "OWL",
      "SPARQL",
      "공리(Axiom)",
      "GraphRAG",
      "엔터프라이즈 온톨로지"
    ],
    "differentiation": "[유형 C] LLM 시대에 온톨로지(Ontology)가 다시 핵심 인프라로 부상한 이유\n① LLM의 구조적 한계: 확률적 언어 모델은 기업 내부의 엄격한 비즈니스 규칙과 복합 인과관계를 환각 없이 처리하지 못함.\n② 뉴로-심볼릭(Neuro-Symbolic) 결합: 기업 데이터를 온톨로지(객체·관계·비즈니스 액션)로 매핑하면, AI 에이전트가 단순 텍스트 검색을 넘어 기업 업무 규칙을 정확히 이해하고 안전하게 ERP/MES 트랜잭션을 실행할 수 있음."
  },
  {
    "domain": "모의고사",
    "topic": "안면인식 결제 서비스 (Facial Payment & Biometrics)",
    "mnemonic": "검출·정렬·특징추출·매칭 / Liveness(위변조방지) + FIDO + 토큰화",
    "definition": "사용자 안면 특징을 추출해 비접촉 본인인증 결제 기술",
    "diagramImg": "exam_q45.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 인식 파이프라인 | 검출 → 정렬 → 특징추출 | 얼굴 영역 탐지(Detection) → 랜드마크 3D 정렬(Alignment) → 딥러닝 특징벡터(Embedding) 추출 및 매칭 |\n| 위변조 방지 | Liveness Detection | 사진·동영상·3D 실리콘 마스크 도용 차단을 위해 적외선(IR)·ToF 3D 심도 카메라·미세 혈류(rPPG) 분석 |\n| 결제 보안 기술 | 생체정보 분산저장·FIDO | 원본 얼굴 이미지를 저장하지 않고 수치화된 특징벡터(바이오 템플릿)를 암호화·분할 보관 (ISO/IEC 24745) |\n| 정확도 지표 | FAR / FRR / EER | 타인수락률(FAR: 보안성 핵심, 결제 시 0에 수렴해야 함), 본인거부율(FRR: 편의성), 교차오류율(EER) |",
    "keywords": [
      "3D ToF / IR 카메라",
      "Liveness Detection",
      "바이오 템플릿 보호",
      "FAR/FRR",
      "FIDO2",
      "딥페이크 방어"
    ],
    "differentiation": "[유형 B] 안면인식 결제 서비스의 생체정보 유출 및 딥페이크 공격 극복 방안\n① 변경 불가능성 한계: 비밀번호와 달리 얼굴 등 생체정보는 한 번 유출되면 평생 변경(Revocation)이 불가능함.\n② 기술적 해법: 변경 가능한 바이오 인식(Cancelable Biometrics: 일방향 변환 함수 적용)과 동형암호 기반 암호화 상태 유사도 매칭을 적용하여 서버조차 원본 특징벡터를 복호화할 수 없도록 설계."
  },
  {
    "domain": "모의고사",
    "topic": "ADAS (첨단 운전자 보조 시스템, SAE Lv 1~2)",
    "mnemonic": "ADAS(Lv 0~2: 운전자보조·운전자책임) vs ADS(Lv 3~5: 자율주행·시스템책임)",
    "definition": "주행 환경 인식으로 운전자의 조향·가감속 보조하는 기술",
    "diagramImg": "exam_q46.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| ADAS (Lv 0~2) | 운전자 보조 시스템 | 운전자가 주행 모니터링과 법적 책임을 전담하며 시스템은 차선유지(LKAS)·적응형 크루즈(ACC)·비상제동(AEB) 보조 |\n| ADS (Lv 3~5) | 자율주행 시스템 | 시스템이 객체 및 사건 감지·대응(OEDR)과 동적 주행 과업(DDT)을 직접 수행 (Lv 3 조건부, Lv 4 고도, Lv 5 완전) |\n| 핵심 분기점 | 제어권 전환 & ODD | Lv 3는 운행설계영역(ODD) 이탈 시 운전자에게 제어권 전환(Take-over) 요청, Lv 4/5는 시스템이 스스로 최소위험상태(MRC) 도달 |\n| 핵심 센서·판단 | 센서 퓨전 & E2E AI | 카메라·라이다(LiDAR)·레이더 센서 퓨전 및 고정밀지도(HD Map) / End-to-End 비전 파운데이션 모델 |",
    "keywords": [
      "SAE J3016",
      "ADAS(Lv 1~2)",
      "ADS(Lv 3~5)",
      "OEDR",
      "ODD(운행설계영역)",
      "제어권 전환",
      "센서 퓨전"
    ],
    "differentiation": "[유형 A] 규칙 기반 모듈형 자율주행 vs End-to-End(E2E) AI 자율주행 패러다임 비교\n① 모듈형(인지→판단→제어 분리): 각 단계의 해석 가능성과 안전 검증(ISO 26262)은 명확하나, 예외적 엣지 케이스(Corner Case)마다 수동 규칙 코딩 한계.\n② E2E(센서 입력 → 제어 출력 통합 신경망): 대규모 주행 데이터 학습으로 인간처럼 유연하게 주행하나 블랙박스 특성으로 인해 안전 가드레일(Safety Shield) 이중화가 필수."
  },
  {
    "domain": "모의고사",
    "topic": "ADS (자율주행 시스템, SAE Lv 3~5)",
    "mnemonic": "ADAS(Lv 0~2: 운전자보조·운전자책임) vs ADS(Lv 3~5: 자율주행·시스템책임)",
    "definition": "시스템이 주행 제어와 비상 대응 주도하는 자율주행 체계",
    "diagramImg": "exam_q46_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| ADAS (Lv 0~2) | 운전자 보조 시스템 | 운전자가 주행 모니터링과 법적 책임을 전담하며 시스템은 차선유지(LKAS)·적응형 크루즈(ACC)·비상제동(AEB) 보조 |\n| ADS (Lv 3~5) | 자율주행 시스템 | 시스템이 객체 및 사건 감지·대응(OEDR)과 동적 주행 과업(DDT)을 직접 수행 (Lv 3 조건부, Lv 4 고도, Lv 5 완전) |\n| 핵심 분기점 | 제어권 전환 & ODD | Lv 3는 운행설계영역(ODD) 이탈 시 운전자에게 제어권 전환(Take-over) 요청, Lv 4/5는 시스템이 스스로 최소위험상태(MRC) 도달 |\n| 핵심 센서·판단 | 센서 퓨전 & E2E AI | 카메라·라이다(LiDAR)·레이더 센서 퓨전 및 고정밀지도(HD Map) / End-to-End 비전 파운데이션 모델 |",
    "keywords": [
      "SAE J3016",
      "ADAS(Lv 1~2)",
      "ADS(Lv 3~5)",
      "OEDR",
      "ODD(운행설계영역)",
      "제어권 전환",
      "센서 퓨전"
    ],
    "differentiation": "[유형 A] 규칙 기반 모듈형 자율주행 vs End-to-End(E2E) AI 자율주행 패러다임 비교\n① 모듈형(인지→판단→제어 분리): 각 단계의 해석 가능성과 안전 검증(ISO 26262)은 명확하나, 예외적 엣지 케이스(Corner Case)마다 수동 규칙 코딩 한계.\n② E2E(센서 입력 → 제어 출력 통합 신경망): 대규모 주행 데이터 학습으로 인간처럼 유연하게 주행하나 블랙박스 특성으로 인해 안전 가드레일(Safety Shield) 이중화가 필수."
  },
  {
    "domain": "모의고사",
    "topic": "ISO 26262 (자동차 기능안전 국제표준)",
    "mnemonic": "S·E·C → ASIL(A~D) / V-모델(시스템·HW·SW) / SOTIF·21434 연계",
    "definition": "차량 전자 시스템 오작동으로 인한 인명피해 예방 표준",
    "details": "[위험원 분석 및 리스크 평가(HARA)] = 가혹도(Severity: S0~S3) × 노출빈도(Exposure: E0~E4) × 통제가능성(Controllability: C0~C3)\n  └──────> [자동차 안전 무결성 수준 (ASIL A < B < C < D 도출)] ──> [V-모델 기반 시스템·H/W·S/W 설계 및 검증]",
    "tableRows": [
      {
        "category": "표준 개요",
        "sub": "IEC 61508 차량 파생",
        "desc": "자동차 내 전기·전자(E/E) 및 SW 시스템의 고장으로 인한 위험을 허용 가능한 수준으로 낮추는 기능안전 표준"
      },
      {
        "category": "위험도 산정",
        "sub": "HARA & ASIL 등급",
        "desc": "가혹도(S)·노출빈도(E)·통제가능성(C) 조합으로 ASIL A(최저)~D(최고, 조향·제동 등) 및 QM(일반품질) 산정"
      },
      {
        "category": "개발 생명주기",
        "sub": "V-Model 기반 검증",
        "desc": "개념 단계(Part 3) → 시스템(Part 4) → 하드웨어(Part 5) → 소프트웨어(Part 6: MC/DC 테스트 등) → 반도체(Part 11)"
      },
      {
        "category": "연계 표준",
        "sub": "SOTIF & 사이버보안",
        "desc": "ISO 21448(SOTIF: 고장 없는 AI·센서 인식 한계 안전) 및 ISO/SAE 21434(차량 사이버보안)와 3각 체계 구성"
      }
    ],
    "keywords": [
      "기능안전",
      "HARA",
      "ASIL(A~D)",
      "S·E·C 지표",
      "V-모델",
      "MC/DC 커버리지",
      "ISO 21448(SOTIF)"
    ],
    "differentiation": "[유형 A] ISO 26262(기능안전) vs ISO 21448(SOTIF, 의도된 기능의 안전) 비교\n① ISO 26262: HW/SW의 '고장이나 결함(Malfunction)'으로 인해 발생하는 위험을 다룸.\n② ISO 21448(SOTIF): 시스템에 아무런 고장이 없더라도, 악천후·역광 등으로 인한 'AI 알고리즘의 인식 한계나 성능 부족'으로 발생하는 자율주행 사고를 예방하기 위해 제정."
  },
  {
    "domain": "모의고사",
    "topic": "오픈소스 AI (Open Source AI, OSAID 기준)",
    "mnemonic": "오픈웨이트(가중치만 공개·데이터 비공개) vs 오픈소스AI(OSI 4대요소: 코드·데이터·가중치·무제한)",
    "definition": "학습 데이터·코드·가중치 전면 개방해 재현성 보장 체계",
    "diagramImg": "exam_q48.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 오픈웨이트 (Open Weight) | 가중치(Weights) 공개 | 학습 완료된 모델 파라미터와 추론 코드는 공개하나, 원본 학습 데이터셋과 학습 레시피는 비공개 (예: Llama, Mistral) |\n| | 커스텀 라이선스 제약 | 월간 활성 사용자(MAU 7억 명 초과 시 별도 허가) 제한이나 경쟁 모델 학습 활용 금지 등 상업적 제약 존재 |\n| 오픈소스 AI (OSI 정의) | 4대 구성요소 완전 개방 | ① 학습 데이터 정보 ② 전체 학습·추론 소스코드 ③ 모델 가중치(Weights)를 사용·수정·공유 제한 없이 완전 개방 |\n| | 완전한 재현성 보장 | 누구나 밑바닥부터(From Scratch) 동일한 모델을 재학습·감사(Audit)할 수 있는 투명성 확보 (예: OLMo, Pythia) |",
    "keywords": [
      "Open Weight",
      "OSI Open Source AI 정의",
      "모델 가중치",
      "학습데이터 투명성",
      "재현성",
      "오픈워싱(Open-washing)"
    ],
    "differentiation": "[유형 B] 오픈워싱(Open-washing) 논란과 기업 온프레미스 LLM 도입 시 고려사항\n① 오픈워싱 주의: 빅테크가 가중치만 공개(Open Weight)하고 '오픈소스'라 홍보하나, 학습 데이터가 비공개여서 저작권 침해나 백도어 여부를 감사할 수 없음.\n② 실무 도입 전략: 보안·데이터 유출 방지를 위해 사내 구축 시 오픈웨이트 모델을 활용하되, 상용 라이선스 제한 조항(MAU·파생모델 조항)을 법무 검토하고 RAG로 도메인 지식을 보강."
  },
  {
    "domain": "모의고사",
    "topic": "오픈웨이트 (Open Weight AI 모델)",
    "mnemonic": "오픈웨이트(가중치만 공개·데이터 비공개) vs 오픈소스AI(OSI 4대요소: 코드·데이터·가중치·무제한)",
    "definition": "학습 데이터는 비공개하고 훈련된 가중치만 공개하는 모델",
    "diagramImg": "exam_q48_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 오픈웨이트 (Open Weight) | 가중치(Weights) 공개 | 학습 완료된 모델 파라미터와 추론 코드는 공개하나, 원본 학습 데이터셋과 학습 레시피는 비공개 (예: Llama, Mistral) |\n| | 커스텀 라이선스 제약 | 월간 활성 사용자(MAU 7억 명 초과 시 별도 허가) 제한이나 경쟁 모델 학습 활용 금지 등 상업적 제약 존재 |\n| 오픈소스 AI (OSI 정의) | 4대 구성요소 완전 개방 | ① 학습 데이터 정보 ② 전체 학습·추론 소스코드 ③ 모델 가중치(Weights)를 사용·수정·공유 제한 없이 완전 개방 |\n| | 완전한 재현성 보장 | 누구나 밑바닥부터(From Scratch) 동일한 모델을 재학습·감사(Audit)할 수 있는 투명성 확보 (예: OLMo, Pythia) |",
    "keywords": [
      "Open Weight",
      "OSI Open Source AI 정의",
      "모델 가중치",
      "학습데이터 투명성",
      "재현성",
      "오픈워싱(Open-washing)"
    ],
    "differentiation": "[유형 B] 오픈워싱(Open-washing) 논란과 기업 온프레미스 LLM 도입 시 고려사항\n① 오픈워싱 주의: 빅테크가 가중치만 공개(Open Weight)하고 '오픈소스'라 홍보하나, 학습 데이터가 비공개여서 저작권 침해나 백도어 여부를 감사할 수 없음.\n② 실무 도입 전략: 보안·데이터 유출 방지를 위해 사내 구축 시 오픈웨이트 모델을 활용하되, 상용 라이선스 제한 조항(MAU·파생모델 조항)을 법무 검토하고 RAG로 도메인 지식을 보강."
  },
  {
    "domain": "모의고사",
    "topic": "대규모 AI 데이터센터 (AI Factory) 구축 기술",
    "mnemonic": "연산(GPU·NPU) · 메모리(HBM·CXL) · 네트워크(RoCEv2·InfiniBand) · 냉각/전력(액침·SMR)",
    "definition": "초거대 AI 연산용 고밀도 서버·액체냉각 결합 인프라",
    "details": "[고밀도 연산 클러스터(GPU/NPU + HBM/CXL)] <──(무손실 초고속 패브릭: InfiniBand / RoCEv2)──> [고성능 분산 스토리지(NVMe-oF)]\n  └────── 기반 설비: 액침냉각(Immersion Cooling) / D2C 수냉식 + 마이크로그리드·HVDC 전력 제어 (목표 PUE 1.1 이하)",
    "tableRows": [
      {
        "category": "연산·메모리 계층",
        "sub": "AI 가속기 & HBM/CXL",
        "desc": "수만 장의 GPU/NPU를 NVLink로 묶고 HBM(초고대역폭) 및 CXL 메모리 풀링으로 메모리 월 극복"
      },
      {
        "category": "네트워크 계층",
        "sub": "InfiniBand & RoCEv2",
        "desc": "노드 간 All-Reduce 통신 병목 제거를 위해 RDMA 기반 무손실(Lossless) 400G/800G Spine-Leaf 패브릭 구성"
      },
      {
        "category": "스토리지 계층",
        "sub": "고성능 병렬 파일시스템",
        "desc": "NVMe-oF 및 GPUDirect Storage(CPU 우회 GPU 직접 적재)로 학습 체크포인트 I/O 병목 해소"
      },
      {
        "category": "열관리·전력 계층",
        "sub": "액침냉각 & D2C 수냉",
        "desc": "랙당 40~100kW 이상 초고발열 해소를 위해 기존 공랭식 대신 칩 직접 수냉(D2C) 및 비전도성 액침냉각 도입"
      }
    ],
    "keywords": [
      "AI 팩토리",
      "RDMA(InfiniBand/RoCEv2)",
      "GPUDirect Storage",
      "액침냉각(Immersion Cooling)",
      "PUE",
      "Spine-Leaf"
    ],
    "differentiation": "[유형 A] 전통적 클라우드 데이터센터 vs 대규모 AI 데이터센터(AI Factory) 비교\n① 워크로드 차이: 전통 데이터센터는 독립적인 수많은 웹 요청(North-South 트래픽, 공랭식 랙당 5~10kW)을 처리하는 반면, AI 데이터센터는 수만 개 GPU가 하나의 거대 모델을 동기화 학습(East-West 트래픽 폭증, 랙당 50~100kW+ 초고밀도).\n② 핵심 승부처: 단 하나의 패킷 손실(Tail Latency)이 전체 GPU 클러스터 유휴 대기를 유발하므로 RoCEv2 혼잡제어(PFC/ECN)와 수냉/액침 열관리가 성패 결정."
  },
  {
    "domain": "모의고사",
    "topic": "서버리스 컴퓨팅 (Serverless Computing, FaaS & BaaS)",
    "mnemonic": "인프라추상화 · 이벤트기반 · Scale-to-Zero · 밀리초과금 / Cold Start 한계",
    "definition": "서버 관리 없이 이벤트 발생 시에만 함수 실행하는 모델",
    "details": "[이벤트 소스(HTTP·큐·DB변경)] ──(트리거)──> [FaaS 런타임(인스턴스 즉시 생성·실행 → 유휴 시 Scale-to-Zero)] + [BaaS(인증·DB API)]",
    "tableRows": [
      {
        "category": "핵심 특성",
        "sub": "NoOps & 종량제 과금",
        "desc": "CSP가 OS·인프라 관리를 전담하며, 상시 대기 비용 없이 실제 함수가 실행된 시간(ms)과 호출 수만큼만 과금"
      },
      {
        "category": "",
        "sub": "이벤트 구동 & 탄력성",
        "desc": "트래픽 0일 때 인스턴스 0개(Scale-to-Zero)에서 트래픽 폭증 시 수천 개 컨테이너로 즉각 오토스케일링"
      },
      {
        "category": "아키텍처 분류",
        "sub": "FaaS (Function)",
        "desc": "개발자가 작성한 단일 비즈니스 함수(AWS Lambda, Cloud Functions)를 이벤트 트리거로 무상태(Stateless) 실행"
      },
      {
        "category": "",
        "sub": "BaaS (Backend)",
        "desc": "인증, DB, 스토리지, 푸시알림 등 백엔드 기능을 완제품 API(Firebase, Supabase)로 빌려 쓰는 모델"
      },
      {
        "category": "구조적 한계",
        "sub": "콜드 스타트 & 종속성",
        "desc": "최초 호출 시 컨테이너 초기화 지연(Cold Start), 무상태 제약으로 인한 DB 커넥션 고갈, CSP 벤더 종속성"
      }
    ],
    "keywords": [
      "FaaS",
      "BaaS",
      "Event-Driven",
      "Scale-to-Zero",
      "Cold Start",
      "Provisioned Concurrency",
      "WebAssembly"
    ],
    "differentiation": "[유형 B] 서버리스 콜드 스타트(Cold Start) 지연 및 DB 커넥션 폭증 극복 방안\n① 콜드 스타트 해법: 핵심 API 구간에는 최소 인스턴스를 예열 유지하는 Provisioned Concurrency, 초경량 가상화(Firecracker MicroVM) 또는 Wasm(WebAssembly) 런타임 적용.\n② DB 커넥션 풀 관리: 수천 개 FaaS 함수가 동시에 RDB에 접속하면 커넥션이 고갈되므로 반드시 중간에 DB 프록시(RDS Proxy, PgBouncer)를 배치해 커넥션을 풀링해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "AI 네이티브 개발 플랫폼 (AI-Native Development Platforms)",
    "mnemonic": "명세→설계→코딩→테스트→배포 전주기 AI 에이전트 내재화",
    "definition": "개발 전 주기에 AI 에이전트를 내재화한 협업 플랫폼",
    "details": "[인간 개발자/아키텍트(의도 정의·검수)] <──협업──> [AI 네이티브 플랫폼: 요구분석 Agent → 설계/코드 Agent → 테스트/보안 Agent → 배포/SRE Agent]",
    "tableRows": [
      {
        "category": "패러다임 진화",
        "sub": "AI-Assisted → AI-Native",
        "desc": "단순 코드 자동완성 보조(Copilot)를 넘어, 개발 환경 자체가 AI 에이전트 중심으로 재설계된 통합 플랫폼(가트너 전략기술)"
      },
      {
        "category": "전주기 자동화",
        "sub": "기획·설계·구현",
        "desc": "전체 코드베이스 컨텍스트(RAG/AST)를 이해하여 다중 파일 생성, 레거시 언어 마이그레이션, 아키텍처 다이어그램 자동화"
      },
      {
        "category": "",
        "sub": "검증·배포·운영",
        "desc": "단위·통합 테스트 자동 생성, 보안 취약점 자가 패치(Auto-Remediation), 장애 로그 분석 및 롤백 자율 수행"
      },
      {
        "category": "조직 변화",
        "sub": "소규모 고밀도 팀",
        "desc": "1명의 도메인 아키텍트가 다수의 전문 AI 에이전트(코딩·QA·보안)를 오케스트레이션하는 초생산성 개발 조직 구현"
      }
    ],
    "keywords": [
      "Gartner 전략기술",
      "AI-Assisted vs AI-Native",
      "멀티 에이전트 오케스트레이션",
      "자율 디버깅",
      "컨텍스트 엔진"
    ],
    "differentiation": "[유형 A] AI 보조 개발(AI-Assisted) vs AI 네이티브 개발(AI-Native) 비교\n① AI-Assisted: 기존 인간 중심 IDE에 플러그인 형태로 코드 스니펫 추천만 덧붙인 형태(생산성 10~20% 개선).\n② AI-Native: 요구사항 티켓이 생성되면 에이전트가 브랜치 생성, 구현, 테스트 통과, PR 생성까지 자율 완수하고 인간은 아키텍처 결정과 최종 승인(Human-in-the-Loop)에 집중."
  },
  {
    "domain": "모의고사",
    "topic": "컨테이너 가상화 (Container Virtualization)",
    "mnemonic": "VM(하이퍼바이저·Guest OS) vs 컨테이너(OS커널 공유·Namespace/cgroup) + K8s HPA",
    "definition": "호스트 OS 커널 공유하며 앱 실행환경 경량 격리 기술",
    "details": "[VM: HW → Host OS → Hypervisor → Guest OS + App (무거움, 완전 격리)]\n[Container: HW → Host OS Kernel(Namespace·cgroups) → Container Engine → App (초경량)] ──> [K8s HPA (Pod 수평 자동 확장)]",
    "tableRows": [
      {
        "category": "가상머신 (VM)",
        "sub": "하이퍼바이저 기반",
        "desc": "하드웨어를 가상화해 각 VM마다 독립된 Guest OS 커널을 포함 (보안 격리성 우수하나 GB 단위 용량 및 부팅 수 분 소요)"
      },
      {
        "category": "컨테이너",
        "sub": "OS 커널 공유 격리",
        "desc": "호스트 OS 커널을 공유하며 Linux Namespace(뷰 격리)와 cgroups(자원 제한)로 프로세스 격리 (MB 단위, 초 단위 기동)"
      },
      {
        "category": "쿠버네티스 (K8s)",
        "sub": "컨테이너 오케스트레이션",
        "desc": "Control Plane(API Server, etcd, Scheduler, Controller)과 Worker Node(Kubelet, Kube-proxy, Pod)로 클러스터 자동 관리"
      },
      {
        "category": "K8s 오토스케일링",
        "sub": "HPA (Horizontal Pod)",
        "desc": "Metrics Server가 수집한 CPU/메모리 또는 커스텀 지표가 임계치 초과 시 Pod 복제본(Replica) 개수를 자동 증감"
      },
      {
        "category": "",
        "sub": "VPA & CA 연계",
        "desc": "VPA(Pod의 CPU/메모리 리소스 한도 수직 조정), CA/Karpenter(노드 부족 시 클라우드 VM 노드 자체를 추가)"
      }
    ],
    "keywords": [
      "Hypervisor",
      "Namespace / cgroups",
      "Kubernetes",
      "Pod",
      "HPA / VPA / CA",
      "KEDA(이벤트 기반)"
    ],
    "differentiation": "[유형 B] 컨테이너의 커널 공유 보안 취약점 극복 및 HPA 확장 지연 해결 방안\n① 보안 격리 보강: 멀티테넌시 환경에서 컨테이너 탈출(Container Escape) 위협을 막기 위해 Kata Containers나 gVisor(샌드박스 커널)를 결합.\n② HPA 한계와 KEDA 결합: 기본 CPU 기반 HPA는 트래픽 급증 시 반응이 늦고 Scale-to-Zero가 불가능하므로, 메시지 큐(Kafka) 길이나 이벤트 기반으로 즉각 확장하는 KEDA 및 Karpenter와 연계."
  },
  {
    "domain": "모의고사",
    "topic": "쿠버네티스 오토스케일링 (HPA · VPA · CA)",
    "mnemonic": "VM(하이퍼바이저·Guest OS) vs 컨테이너(OS커널 공유·Namespace/cgroup) + K8s HPA",
    "definition": "트래픽 부하에 맞춰 파드 개수와 노드를 자동 확장 기법",
    "details": "[VM: HW → Host OS → Hypervisor → Guest OS + App (무거움, 완전 격리)]\n[Container: HW → Host OS Kernel(Namespace·cgroups) → Container Engine → App (초경량)] ──> [K8s HPA (Pod 수평 자동 확장)]",
    "tableRows": [
      {
        "category": "가상머신 (VM)",
        "sub": "하이퍼바이저 기반",
        "desc": "하드웨어를 가상화해 각 VM마다 독립된 Guest OS 커널을 포함 (보안 격리성 우수하나 GB 단위 용량 및 부팅 수 분 소요)"
      },
      {
        "category": "컨테이너",
        "sub": "OS 커널 공유 격리",
        "desc": "호스트 OS 커널을 공유하며 Linux Namespace(뷰 격리)와 cgroups(자원 제한)로 프로세스 격리 (MB 단위, 초 단위 기동)"
      },
      {
        "category": "쿠버네티스 (K8s)",
        "sub": "컨테이너 오케스트레이션",
        "desc": "Control Plane(API Server, etcd, Scheduler, Controller)과 Worker Node(Kubelet, Kube-proxy, Pod)로 클러스터 자동 관리"
      },
      {
        "category": "K8s 오토스케일링",
        "sub": "HPA (Horizontal Pod)",
        "desc": "Metrics Server가 수집한 CPU/메모리 또는 커스텀 지표가 임계치 초과 시 Pod 복제본(Replica) 개수를 자동 증감"
      },
      {
        "category": "",
        "sub": "VPA & CA 연계",
        "desc": "VPA(Pod의 CPU/메모리 리소스 한도 수직 조정), CA/Karpenter(노드 부족 시 클라우드 VM 노드 자체를 추가)"
      }
    ],
    "keywords": [
      "Hypervisor",
      "Namespace / cgroups",
      "Kubernetes",
      "Pod",
      "HPA / VPA / CA",
      "KEDA(이벤트 기반)"
    ],
    "differentiation": "[유형 B] 컨테이너의 커널 공유 보안 취약점 극복 및 HPA 확장 지연 해결 방안\n① 보안 격리 보강: 멀티테넌시 환경에서 컨테이너 탈출(Container Escape) 위협을 막기 위해 Kata Containers나 gVisor(샌드박스 커널)를 결합.\n② HPA 한계와 KEDA 결합: 기본 CPU 기반 HPA는 트래픽 급증 시 반응이 늦고 Scale-to-Zero가 불가능하므로, 메시지 큐(Kafka) 길이나 이벤트 기반으로 즉각 확장하는 KEDA 및 Karpenter와 연계."
  },
  {
    "domain": "모의고사",
    "topic": "AI 시대 노동시장 변화와 인재 역량 전환 전략",
    "mnemonic": "엔트리급 축소 · 직무 재정의 / AI 리터러시 · 비판적 검증 · 오케스트레이션 / Up-skilling · Re-skilling",
    "definition": "AI 확산 따른 직무 재편 대응해 인재 역량 전환 전략",
    "diagramImg": "exam_q53.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 노동시장 변화 | 직무 양극화 & 재정의 | 단순 코딩·요약·번역 등 주니어(Entry-level) 반복 과업은 자동화 대체되고, AI 네이티브 고숙련 직무 수요 급증 |\n| 핵심 요구 역량 | AI 리터러시 & 프롬프트 | 문제를 구조화하여 AI에게 명확한 맥락을 전달하고 다중 에이전트 워크플로우를 설계하는 역량 |\n| | 도메인 통찰 & 비판적 검증 | AI 환각·편향·보안 결함을 식별해 교정하는 비판적 사고력(Critical Thinking) 및 윤리적 책임 의사결정 |\n| 인재육성 전략 | Re-skilling & Up-skilling | 직무 전환 교육(Re-skilling), 현업 실무자의 시민 데이터/AI 개발자화(Up-skilling) 및 CoE(전문조직) 확산 |",
    "keywords": [
      "직무 재정의(Job Redesign)",
      "Entry-level 역설",
      "AI 리터러시",
      "Human-in-the-Loop",
      "Up-skilling",
      "Re-skilling"
    ],
    "differentiation": "[유형 C] '주니어 실종으로 인한 미래 시니어 단절(Junior Cliff)' 문제와 조직적 해법\n① 구조적 딜레마: 당장 효율을 위해 신입 채용을 줄이고 AI로 대체하면, 5~10년 뒤 AI 결과를 검증·책임질 도메인 시니어 전문가가 사라지는 역설 발생.\n② 육성 패러다임 전환: 신입 인력을 단순 작업자가 아닌 'AI 에이전트 관리자 및 검증자'로 조기 훈련시키는 AI 페어 프로그래밍·시뮬레이션 도제 교육 체계 구축."
  },
  {
    "domain": "모의고사",
    "topic": "마이크로 그리드 · AMI · 인터미턴트 컴퓨팅 (차세대 전력·그린 IT)",
    "mnemonic": "마이크로그리드(분산자립망) · AMI(양방향스마트미터) · 인터미턴트(무배터리 간헐연산·체크포인트)",
    "definition": "분산 에너지 자립망과 지능형 검침 및 간헐적 연산 기술",
    "details": "[마이크로그리드 (태양광·풍력·ESS 자립 배전망)] <──(양방향 실시간 제어·DR)──> [AMI (스마트미터·HES·MDMS)]\n[에너지 하베스팅 IoT 단말] ──(전원 단절 시 비휘발성 메모리 FRAM 체크포인트 백업 후 재개)──> [인터미턴트 컴퓨팅]",
    "tableRows": [
      {
        "category": "마이크로 그리드",
        "sub": "소규모 자립형 전력망",
        "desc": "신재생에너지(태양광·풍력)와 에너지저장장치(ESS), 에너지관리시스템(EMS)을 결합해 중앙 전력망과 독립/연계 운전"
      },
      {
        "category": "AMI (원격검침)",
        "sub": "양방향 지능형 전력망",
        "desc": "스마트미터, 통신망, 수집시스템(HES), 검침데이터관리(MDMS)를 통해 실시간 전력 사용량 파악 및 수요반응(DR)·시간대별 차등요금제 구현"
      },
      {
        "category": "인터미턴트 컴퓨팅",
        "sub": "Intermittent Computing",
        "desc": "배터리 없이 태양빛·진동·RF 에너지 하베스팅으로 동작하는 극초소형 IoT 기기에서 전원이 수시로 끊겨도 연산을 이어가는 기술"
      },
      {
        "category": "",
        "sub": "체크포인팅 & 비휘발성",
        "desc": "전압 강하 감지 시 CPU 레지스터·스택 상태를 FRAM/MRAM(비휘발성 메모리)에 즉시 저장(Checkpointing)하고 전원 복구 시 이어서 실행"
      }
    ],
    "keywords": [
      "Micro-Grid",
      "ESS/EMS",
      "AMI(지능형 원격검침)",
      "수요반응(DR)",
      "인터미턴트 컴퓨팅",
      "에너지 하베스팅",
      "FRAM 체크포인트"
    ],
    "differentiation": "[유형 C] AI 데이터센터 전력난 해결과 무배터리 지능형 사물인터넷(Ambient IoT) 연계\n① 거시적(AI 데이터센터): 원전(SMR)·신재생 마이크로그리드와 AMI 수요반응(DR)을 결합해 전력 피크 시간대 AI 배치 학습 스케줄을 자동 조절(Carbon-aware Computing).\n② 미시적(Ambient IoT): 수백억 개 IoT 센서의 폐배터리 환경오염과 교체 비용을 제거하기 위해 에너지 하베스팅 + 인터미턴트 컴퓨팅 기반 초저전력 엣지 AI(TinyML) 도입."
  },
  {
    "domain": "모의고사",
    "topic": "클라우드 네이티브 구축·운영 및 성숙도 모델 (NIA 가이드)",
    "mnemonic": "4대요소(M·C·D·C) / 사업유형(전환·구축·운영) / 성숙도(1~4단계)",
    "definition": "클라우드 이점 극대화 위한 4대 핵심기술과 성숙도 체계",
    "diagramImg": "exam_q55.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 4대 핵심 요소 (CNCF) | MSA & 컨테이너 | 독립 배포 가능한 마이크로서비스(MSA) 분할 및 경량 컨테이너(Docker/K8s) 패키징 |\n| | CI/CD & DevOps | 코드 커밋부터 빌드·테스트·무중단 배포까지 파이프라인 자동화 및 개발·운영 협업 문화 |\n| 공공 사업 유형 | Lift & Shift vs Native | 단순 인프라 이전(Rehost)을 넘어 앱 구조를 클라우드 친화적으로 재설계(Refactor/Rebuild) |\n| 성숙도 모델 (4단계) | Lv1 준비 → Lv2 도입 | 온프레미스 가상화·일부 컨테이너 시범 적용에서 표준 CI/CD·기본 오케스트레이션 구축으로 진입 |\n| | Lv3 확산 → Lv4 최적화 | 전사 MSA·서비스 메시 확산 후, 최종 4단계에서 AI 기반 자율 운영(AIOps)·서버리스·FinOps 자동 최적화 달성 |",
    "keywords": [
      "CNCF 4대 요소",
      "MSA",
      "Container",
      "CI/CD",
      "DevOps",
      "6R 마이그레이션",
      "클라우드 네이티브 성숙도 모델"
    ],
    "differentiation": "[유형 B] 공공·금융권의 '무늬만 클라우드(Lift & Shift)' 한계 극복과 단계적 전환 제언\n① 실무 문제점: 거대 모놀리식 시스템을 아키텍처 변경 없이 그대로 클라우드 VM에 옮기면(Rehost) 오토스케일링이 불가하고 온프레미스보다 비용만 급증.\n② 전략적 전환: Strangler Fig(교살자 무화과) 패턴을 적용해 변경 빈도와 부하가 높은 핵심 도메인부터 점진적으로 MSA·컨테이너화하여 성숙도 레벨을 단계적으로 상향."
  },
  {
    "domain": "모의고사",
    "topic": "중앙은행 디지털화폐 (CBDC) 아키텍처와 금융 영향",
    "mnemonic": "도매용(기관간) · 소매용(범용) / 단일원장 vs 2계층(하이브리드) / 프로그래머블 화폐",
    "definition": "중앙은행이 직접 발행 법정 디지털화폐 설계·파급 체계",
    "details": "[중앙은행 (CBDC 발행·원장 통제)] ──(2계층 간접형 아키텍처)──> [시중은행/중개기관 (지갑개설·KYC·자금세탁방지)] ──> [일반 국민/기업]\n  * 기술 특징: 분산원장(DLT) + 스마트계약(프로그래머블 머니: 재난지원금 사용처·기한 제한) + 오프라인 결제(SE/TEE)",
    "tableRows": [
      {
        "category": "CBDC 유형",
        "sub": "소매용(범용) vs 도매용",
        "desc": "소매용(가계·기업 일반 현금 대체), 도매용(금융기관 간 거액 결제 및 국가 간 외환 송금 아고라 프로젝트)"
      },
      {
        "category": "아키텍처 설계",
        "sub": "2계층 간접형 (Hybrid)",
        "desc": "중앙은행이 발행·핵심 원장을 관리하고, 시중은행이 고객 접점(지갑 관리·KYC/AML·결제 중개)을 담당하는 표준 모델"
      },
      {
        "category": "",
        "sub": "기술적 요구사항",
        "desc": "초당 수만 건 처리(고성능 TPS), 인터넷 단절 시 오프라인 결제(하드웨어 보안모듈), 프라이버시(영지식증명 ZKP)"
      },
      {
        "category": "금융·스테이블코인 영향",
        "sub": "디지털 뱅크런 리스크",
        "desc": "금융 위기 시 시중은행 예금이 무위험 자산인 중앙은행 CBDC로 순식간에 빠져나가는 디지털 뱅크런 및 신용창출 위축 우려"
      },
      {
        "category": "",
        "sub": "스테이블코인과 공존",
        "desc": "CBDC(법정 무위험 결제 기준점) ↔ 예금토큰 ↔ 민간 스테이블코인(크립토 생태계) 간 상호운용성 및 규제 벤치마크 역할"
      }
    ],
    "keywords": [
      "법정 디지털화폐",
      "2계층 아키텍처",
      "프로그래머블 머니",
      "디지털 뱅크런",
      "예금토큰",
      "스테이블코인",
      "프로젝트 한강/아고라"
    ],
    "differentiation": "[유형 B] CBDC 도입에 따른 디지털 뱅크런 및 프라이버시 침해(빅브라더) 해결 방안\n① 디지털 뱅크런 방지: CBDC 보유 한도(Holding Limit) 설정 및 무이자(0% 금리) 적용을 통해 시중은행 예금의 가치저장 기능을 보호.\n② 프라이버시와 AML의 조화: 소액 결제는 영지식증명(ZKP) 기반으로 익명성을 보장하고, 고액·의심 거래만 법적 절차에 따라 추적하는 계층적 익명성(Tiered Privacy) 아키텍처 적용."
  },
  {
    "domain": "모의고사",
    "topic": "스마트팩토리 디지털 트윈 (Digital Twin) 역할과 성숙도",
    "mnemonic": "모·관·모·연·자 (모사→관제→모의→연합→자율) / 물리↔가상 양방향 피드백",
    "definition": "물리 공장을 가상공간에 구현해 공정 시뮬레이션하는 기술",
    "details": "[물리 공장(설비·센서·PLC)] ──(실시간 IoT/OPC-UA 데이터 수집)──> [디지털 트윈(3D 시각화·물리엔진·AI 시뮬레이션)]\n                             <──(최적 파라미터·예지보전 제어 명령 피드백)──────────────────────────────┘",
    "tableRows": [
      {
        "category": "핵심 구성요소",
        "sub": "데이터·모델·연동·제어",
        "desc": "IoT 센서 데이터 수집(OPC-UA), 3D 형상·물리·AI 동작 모델링, 실시간 양방향 동기화(Digital Thread), 피드백 제어기"
      },
      {
        "category": "성숙도 5단계",
        "sub": "1.모사 → 2.관제 → 3.모의",
        "desc": "모사(3D 외형 복제) → 관제(실시간 모니터링) → 모의(What-if 시나리오 시뮬레이션 및 병목·고장 사전 예측)"
      },
      {
        "category": "",
        "sub": "4.연합 → 5.자율",
        "desc": "연합(Federated: 다수 공정·공급망 트윈 간 상호 연동) → 자율(Autonomous: 인간 개입 없이 AI가 스스로 판단·제어)"
      },
      {
        "category": "도입 고려사항",
        "sub": "표준화 및 보안",
        "desc": "이기종 설비 프로토콜 표준화(AAS 자산관리쉘, ISO 23247), 실시간 초저지연 네트워크(5G 이음망/TSN), OT 보안(IEC 62443)"
      }
    ],
    "keywords": [
      "모관모연자(5단계)",
      "ISO 23247",
      "AAS(자산관리쉘)",
      "예지보전(PdM)",
      "What-if 시뮬레이션",
      "연합 트윈"
    ],
    "differentiation": "[유형 A] CPS(사이버물리시스템) vs 디지털 트윈(Digital Twin) vs 메타버스 비교\n① CPS vs 디지털 트윈: CPS는 센서·네트워크·액추에이터로 물리 세계를 제어하는 '공학적 시스템 아키텍처' 자체이고, 디지털 트윈은 물리 자산의 상태를 가상 모델로 복제·시뮬레이션하는 '핵심 구현 소프트웨어 모델'.\n② 성공 도입 제언: 처음부터 공장 전체를 고해상도 3D로 구현하려다 실패하므로, 불량률이 높거나 고장 시 손실이 큰 핵심 병목 설비부터 단계적으로 적용 후 연합(Federated) 트윈으로 확장해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "의사결정나무 (Decision Tree) 모델",
    "mnemonic": "불순도(지니·엔트로피·카이제곱) / C4.5·CART·CHAID / 가지치기(Pruning)",
    "definition": "불순도 최소화 기준으로 데이터 분할해 분류·회귀 모델",
    "details": "[Root Node(전체 데이터)] ──(불순도 감소량: 정보이득/지니계수 최대 변수 선택)──> [Internal Node] ──> [Leaf Node(최종 예측)]\n  * 과적합 방지: 사전 가지치기(Pre-pruning: max_depth 제한) & 사후 가지치기(Post-pruning: 비용복잡도 CC 알파)",
    "tableRows": [
      {
        "category": "분할 척도 (불순도)",
        "sub": "엔트로피 & 정보이득",
        "desc": "불확실성 척도인 엔트로피(Entropy = -∑ p log2 p)가 분할 후 얼마나 감소했는지(Information Gain) 측정"
      },
      {
        "category": "",
        "sub": "지니 지수 (Gini Index)",
        "desc": "불순도 척도(Gini = 1 - ∑ p^2), 로그 연산이 없어 계산이 빠르며 CART 알고리즘의 기본 분할 기준"
      },
      {
        "category": "대표 알고리즘",
        "sub": "ID3 → C4.5 / C5.0",
        "desc": "정보이득비(Gain Ratio) 사용, 연속형 변수 및 결측치 처리와 사후 가지치기를 지원하도록 ID3 한계 극복"
      },
      {
        "category": "",
        "sub": "CART & CHAID",
        "desc": "CART(지니계수·분산감소량 기반 이진 분할, 분류·회귀 겸용), CHAID(카이제곱 통계량/F-검정 기반 다지 분할)"
      },
      {
        "category": "핵심 제어 기법",
        "sub": "가지치기 (Pruning)",
        "desc": "과적합(Overfitting) 방지를 위해 최대 깊이를 제한(사전)하거나 검증 오차가 큰 말단 노드를 병합(사후)"
      }
    ],
    "keywords": [
      "화이트박스 모델",
      "엔트로피(Entropy)",
      "정보이득(IG)",
      "지니계수(Gini)",
      "CART / C4.5",
      "가지치기(Pruning)"
    ],
    "differentiation": "[유형 C] 단일 의사결정나무의 고분산(High Variance) 한계 극복을 위한 앙상블(Ensemble) 진화\n① 단일 트리의 한계: 설명 가능성(White-box)은 뛰어나나 학습 데이터의 작은 변화에도 트리 구조가 완전히 바뀌는 불안정성(과적합) 보유.\n② 앙상블 고도화: 배깅 기반 랜덤포레스트(Random Forest: 분산 감소)와 부스팅 기반 XGBoost·LightGBM(편향 감소)으로 성능을 극대화하고, 설명력은 SHAP/LIME으로 보완."
  },
  {
    "domain": "모의고사",
    "topic": "이상치 (Outlier) 탐지 및 처리 기법",
    "mnemonic": "이상치(정상분포 이탈·유의미 패턴/이상탐지) vs 노이즈(측정오류·무작위 오차·제거대상)",
    "definition": "정상 분포에서 크게 벗어난 극단값을 탐지·보정하는 기법",
    "details": "[데이터 관측값] ──> [노이즈(Noise): 센서 오작동·오타 등 무작위 오류 ──> 스무딩/필터링 무조건 제거]\n                └──> [이상치(Outlier): 정상 분포에서 크게 벗어난 값 ──> 도메인 분석 후 제거·대체 또는 이상탐지(FDS) 활용]",
    "tableRows": [
      {
        "category": "노이즈 (Noise)",
        "sub": "무작위 측정 오류",
        "desc": "데이터 수집·전송 과정의 센서 오류, 수기 오타 등 실제 현상과 무관한 순수 오차 (정보 가치 없음, 제거 필수)"
      },
      {
        "category": "",
        "sub": "노이즈 처리 기법",
        "desc": "구간화(Binning), 이동평균·가우시안 스무딩(Smoothing), 저역통과 필터(Low-pass Filter), 오토인코더 디노이징"
      },
      {
        "category": "이상치 (Outlier)",
        "sub": "분포 이탈 극단값",
        "desc": "정상 데이터 분포에서 크게 벗어난 관측치로, 단순 오류일 수도 있으나 금융 사기·설비 고장 등 핵심 신호일 수 있음"
      },
      {
        "category": "",
        "sub": "통계·거리 기반 탐지",
        "desc": "ESD(평균 ± 3σ), 사분위수(IQR = Q3 - Q1, 1.5×IQR 밖), 마할라노비스 거리, LOF(국소 밀도), Isolation Forest"
      }
    ],
    "keywords": [
      "Outlier vs Noise",
      "IQR(사분위수)",
      "Z-Score(3σ)",
      "LOF",
      "Isolation Forest",
      "Winsorizing(절단/조정)"
    ],
    "differentiation": "[유형 A] 이상치(Outlier)와 노이즈(Noise)의 처리 전략 차별화\n① 구분의 중요성: 노이즈는 모델의 일반화 성능을 해치므로 전처리 단계에서 반드시 제거(Smoothing)해야 하나, 이상치를 무조건 삭제하면 신용카드 부정결제(FDS)나 침입탐지의 핵심 정답 레이블을 잃게 됨.\n② 강건한(Robust) 모델링: 이상치 영향을 줄여야 할 때는 평균·표준편차 대신 중앙값·IQR 기반 Robust Scaler 및 Huber Loss를 적용."
  },
  {
    "domain": "모의고사",
    "topic": "데이터 노이즈 (Noise) 정제 기법",
    "mnemonic": "이상치(정상분포 이탈·유의미 패턴/이상탐지) vs 노이즈(측정오류·무작위 오차·제거대상)",
    "definition": "센서 불량 등으로 유입된 무작위 측정 오류를 제거 기법",
    "details": "[데이터 관측값] ──> [노이즈(Noise): 센서 오작동·오타 등 무작위 오류 ──> 스무딩/필터링 무조건 제거]\n                └──> [이상치(Outlier): 정상 분포에서 크게 벗어난 값 ──> 도메인 분석 후 제거·대체 또는 이상탐지(FDS) 활용]",
    "tableRows": [
      {
        "category": "노이즈 (Noise)",
        "sub": "무작위 측정 오류",
        "desc": "데이터 수집·전송 과정의 센서 오류, 수기 오타 등 실제 현상과 무관한 순수 오차 (정보 가치 없음, 제거 필수)"
      },
      {
        "category": "",
        "sub": "노이즈 처리 기법",
        "desc": "구간화(Binning), 이동평균·가우시안 스무딩(Smoothing), 저역통과 필터(Low-pass Filter), 오토인코더 디노이징"
      },
      {
        "category": "이상치 (Outlier)",
        "sub": "분포 이탈 극단값",
        "desc": "정상 데이터 분포에서 크게 벗어난 관측치로, 단순 오류일 수도 있으나 금융 사기·설비 고장 등 핵심 신호일 수 있음"
      },
      {
        "category": "",
        "sub": "통계·거리 기반 탐지",
        "desc": "ESD(평균 ± 3σ), 사분위수(IQR = Q3 - Q1, 1.5×IQR 밖), 마할라노비스 거리, LOF(국소 밀도), Isolation Forest"
      }
    ],
    "keywords": [
      "Outlier vs Noise",
      "IQR(사분위수)",
      "Z-Score(3σ)",
      "LOF",
      "Isolation Forest",
      "Winsorizing(절단/조정)"
    ],
    "differentiation": "[유형 A] 이상치(Outlier)와 노이즈(Noise)의 처리 전략 차별화\n① 구분의 중요성: 노이즈는 모델의 일반화 성능을 해치므로 전처리 단계에서 반드시 제거(Smoothing)해야 하나, 이상치를 무조건 삭제하면 신용카드 부정결제(FDS)나 침입탐지의 핵심 정답 레이블을 잃게 됨.\n② 강건한(Robust) 모델링: 이상치 영향을 줄여야 할 때는 평균·표준편차 대신 중앙값·IQR 기반 Robust Scaler 및 Huber Loss를 적용."
  },
  {
    "domain": "모의고사",
    "topic": "파인튜닝 (Full Fine-Tuning)",
    "mnemonic": "Full FT(전체 가중치 갱신·파국적 망각) vs PEFT(원본 동결·저차원 어댑터 LoRA/QLoRA)",
    "definition": "사전학습 모델 전체 가중치를 도메인 데이터로 학습 기법",
    "diagramImg": "exam_q60.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| Full Fine-Tuning | 전체 가중치 업데이트 | 사전학습 모델의 수십억~수천억 개 전체 파라미터를 역전파로 모두 갱신 (GPU VRAM 과다 및 파국적 망각 위험) |\n| PEFT (효율적 튜닝) | Adapter / Prefix-Tuning | 원본 가중치(W0)는 동결(Freeze)하고 트랜스포머 층 사이 소형 어댑터나 가상 토큰(Prefix)만 학습 |\n| | LoRA (저계수 적응) | 가중치 변화량(ΔW)을 두 개의 저차원 행렬 곱(A × B, rank r ≪ d)으로 분해해 전체의 0.1% 미만 파라미터만 학습 |\n| | QLoRA (양자화 결합) | 원본 모델을 4-bit NormalFloat(NF4) 및 이중 양자화로 압축 적재한 뒤 그 위에 LoRA 어댑터를 붙여 단일 GPU 학습 구현 |",
    "keywords": [
      "Full Fine-Tuning",
      "파국적 망각(Catastrophic Forgetting)",
      "PEFT",
      "LoRA",
      "QLoRA",
      "4-bit NF4"
    ],
    "differentiation": "[유형 A] Full Fine-Tuning vs PEFT(LoRA) 및 멀티 어댑터 서빙 아키텍처\n① 추론 지연 제로(Zero Latency): LoRA는 학습 완료 후 저차원 행렬(A×B)을 원본 가중치(W0)에 단순 덧셈 병합(W = W0 + BA)할 수 있어 추론 시 추가 지연시간이 전혀 없음.\n② 멀티 테넌트 서빙(S-LoRA / vLLM): 하나의 베이스 LLM만 GPU 메모리에 올려두고 부서·업무별로 수십 개의 경량 LoRA 어댑터(수십 MB)만 동적 교체하며 초고효율 서빙 가능."
  },
  {
    "domain": "모의고사",
    "topic": "PEFT (파라미터 효율적 튜닝, LoRA · QLoRA)",
    "mnemonic": "Full FT(전체 가중치 갱신·파국적 망각) vs PEFT(원본 동결·저차원 어댑터 LoRA/QLoRA)",
    "definition": "원본 가중치는 동결하고 소수 저랭크 행렬만 조정 기법",
    "diagramImg": "exam_q60_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| Full Fine-Tuning | 전체 가중치 업데이트 | 사전학습 모델의 수십억~수천억 개 전체 파라미터를 역전파로 모두 갱신 (GPU VRAM 과다 및 파국적 망각 위험) |\n| PEFT (효율적 튜닝) | Adapter / Prefix-Tuning | 원본 가중치(W0)는 동결(Freeze)하고 트랜스포머 층 사이 소형 어댑터나 가상 토큰(Prefix)만 학습 |\n| | LoRA (저계수 적응) | 가중치 변화량(ΔW)을 두 개의 저차원 행렬 곱(A × B, rank r ≪ d)으로 분해해 전체의 0.1% 미만 파라미터만 학습 |\n| | QLoRA (양자화 결합) | 원본 모델을 4-bit NormalFloat(NF4) 및 이중 양자화로 압축 적재한 뒤 그 위에 LoRA 어댑터를 붙여 단일 GPU 학습 구현 |",
    "keywords": [
      "Full Fine-Tuning",
      "파국적 망각(Catastrophic Forgetting)",
      "PEFT",
      "LoRA",
      "QLoRA",
      "4-bit NF4"
    ],
    "differentiation": "[유형 A] Full Fine-Tuning vs PEFT(LoRA) 및 멀티 어댑터 서빙 아키텍처\n① 추론 지연 제로(Zero Latency): LoRA는 학습 완료 후 저차원 행렬(A×B)을 원본 가중치(W0)에 단순 덧셈 병합(W = W0 + BA)할 수 있어 추론 시 추가 지연시간이 전혀 없음.\n② 멀티 테넌트 서빙(S-LoRA / vLLM): 하나의 베이스 LLM만 GPU 메모리에 올려두고 부서·업무별로 수십 개의 경량 LoRA 어댑터(수십 MB)만 동적 교체하며 초고효율 서빙 가능."
  },
  {
    "domain": "모의고사",
    "topic": "홀드아웃 검증 (Hold-out Validation)",
    "mnemonic": "Train(학습) · Validation(튜닝/조기종료) · Test(최종평가) / K-Fold · Stratified",
    "definition": "전체 데이터를 학습·검증·평가용으로 분할해 검증 기법",
    "diagramImg": "exam_q61.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| Hold-out 3분할 | Train / Val / Test | 학습용(Train 60%: 가중치 학습), 검증용(Validation 20%: 하이퍼파라미터 튜닝·Early Stopping), 평가용(Test 20%: 최종 성능) |\n| Hold-out의 한계 | 분할 편향 & 데이터 손실 | 무작위 1회 분할 시 특정 분할 운에 따라 성능이 요동치며, 소규모 데이터셋에서 학습 데이터 감소 손실 발생 |\n| 보완 기법 (교차검증) | K-Fold CV | 데이터를 K개 폴드로 나누어 K번 반복 학습·검증 후 평균 산출하여 분할 편향 제거 |\n| | Stratified K-Fold | 클래스 불균형(Imbalanced) 데이터에서 각 폴드 내 정답 클래스 비율을 원본과 동일하게 유지하며 분할 |\n| 시계열 특수 분할 | Time-Series Split | 미래 데이터가 과거 학습에 섞이는 데이터 누수(Data Leakage) 방지를 위해 시간순 전진 분할(Rolling Window) 적용 |",
    "keywords": [
      "Hold-out",
      "Train/Val/Test",
      "일반화 성능",
      "K-Fold 교차검증",
      "Stratified K-Fold",
      "Data Leakage 방지"
    ],
    "differentiation": "[유형 B] 실무 머신러닝 파이프라인에서 발생하는 데이터 누수(Data Leakage) 방지 원칙\n① 치명적 실수: 전체 데이터에 대해 먼저 정규화(StandardScaler)나 결측치 대체를 수행한 뒤 Hold-out 분할을 하면 평가(Test) 데이터의 통계량이 학습에 유출되어 성능이 과대평가됨.\n② 엄격한 격리 원칙: 반드시 먼저 Train / Val / Test를 분할한 후, 오직 Train 세트로만 전처리 파라미터(fit)를 구해 Val/Test에 변환(transform)만 적용해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "교차검증 (K-Fold Cross-Validation)",
    "mnemonic": "Train(학습) · Validation(튜닝/조기종료) · Test(최종평가) / K-Fold · Stratified",
    "definition": "데이터 K개 폴드로 나눠 반복 검증해 과적합 방지 기법",
    "diagramImg": "exam_q61_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| Hold-out 3분할 | Train / Val / Test | 학습용(Train 60%: 가중치 학습), 검증용(Validation 20%: 하이퍼파라미터 튜닝·Early Stopping), 평가용(Test 20%: 최종 성능) |\n| Hold-out의 한계 | 분할 편향 & 데이터 손실 | 무작위 1회 분할 시 특정 분할 운에 따라 성능이 요동치며, 소규모 데이터셋에서 학습 데이터 감소 손실 발생 |\n| 보완 기법 (교차검증) | K-Fold CV | 데이터를 K개 폴드로 나누어 K번 반복 학습·검증 후 평균 산출하여 분할 편향 제거 |\n| | Stratified K-Fold | 클래스 불균형(Imbalanced) 데이터에서 각 폴드 내 정답 클래스 비율을 원본과 동일하게 유지하며 분할 |\n| 시계열 특수 분할 | Time-Series Split | 미래 데이터가 과거 학습에 섞이는 데이터 누수(Data Leakage) 방지를 위해 시간순 전진 분할(Rolling Window) 적용 |",
    "keywords": [
      "Hold-out",
      "Train/Val/Test",
      "일반화 성능",
      "K-Fold 교차검증",
      "Stratified K-Fold",
      "Data Leakage 방지"
    ],
    "differentiation": "[유형 B] 실무 머신러닝 파이프라인에서 발생하는 데이터 누수(Data Leakage) 방지 원칙\n① 치명적 실수: 전체 데이터에 대해 먼저 정규화(StandardScaler)나 결측치 대체를 수행한 뒤 Hold-out 분할을 하면 평가(Test) 데이터의 통계량이 학습에 유출되어 성능이 과대평가됨.\n② 엄격한 격리 원칙: 반드시 먼저 Train / Val / Test를 분할한 후, 오직 Train 세트로만 전처리 파라미터(fit)를 구해 Val/Test에 변환(transform)만 적용해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "인공지능 가드레일 (AI Guardrails)",
    "mnemonic": "입력가드(탈옥·PII·인젝션) → 모델·도구가드(권한·라우팅) → 출력가드(환각·유해성·규제)",
    "definition": "AI 시스템 입출력을 실시간 검열해 안전성 보장 장치",
    "diagramImg": "exam_q62.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 입력 가드레일 (Input) | 프롬프트 인젝션·탈옥 차단 | 악의적 시스템 명령 무력화(Jailbreak) 탐지 및 주제 이탈(Off-topic) 질문 사전 차단 |\n| | 민감정보(PII) 마스킹 | 입력 프롬프트 내 주민번호·계좌번호·기밀코드를 정규식·NER 모델로 탐지해 비식별화 |\n| 실행·도구 가드레일 | 에이전트 액션 통제 | LLM이 외부 API/DB 도구(MCP) 호출 시 허용된 스키마와 최소 권한(RBAC) 범위 내인지 검증 |\n| 출력 가드레일 (Output) | 환각(팩트체크) & 유해성 | RAG 검색 문서와의 정합성(Groundedness) 검증, 혐오·편향·저작권 침해 및 경쟁사 언급 필터링 |",
    "keywords": [
      "Input/Output Rail",
      "NeMo Guardrails",
      "Llama Guard",
      "프롬프트 인젝션 방어",
      "환각 억제",
      "PII 마스킹"
    ],
    "differentiation": "[유형 B] 가드레일 적용에 따른 응답 지연(Latency) 트레이드오프와 다계층 경량화 아키텍처\n① 지연시간 딜레마: 입출력마다 거대 LLM으로 검열을 수행하면 응답 시간이 2~3배 증가하고 비용이 폭증함.\n② 계층적 방어(Tiered Guardrails): 1차로 초고속 정규식·키워드 필터(수 ms) → 2차로 경량 특화 분류기(BERT/sLLM 기반 Llama Guard) → 3차로 고위험 질의에만 심층 LLM 검증을 수행하는 하이브리드 파이프라인 구성."
  },
  {
    "domain": "모의고사",
    "topic": "머신러닝 데이터 공격과 모델 공격 (적대적 AI 보안 위협)",
    "mnemonic": "데이터공격(중독 Poisoning · 회피 Evasion) vs 모델공격(추출 Extraction · 전도 Inversion · 멤버십추론)",
    "definition": "AI 데이터·모델 파라미터를 겨냥한 공격과 방어 체계",
    "details": "[학습 단계] ──> 데이터 중독(Poisoning / Backdoor 트로이목마 삽입)\n[추론 단계] ──> 데이터 회피(Evasion: 적대적 예제 노이즈) + 모델 추출(Extraction: API 복제) + 모델 전도/멤버십 추론(학습데이터 역추적)",
    "tableRows": [
      {
        "category": "데이터 대상 공격",
        "sub": "중독 공격 (Poisoning)",
        "desc": "학습 데이터셋에 악성 샘플이나 백도어 트리거를 몰래 주입해 모델의 결정 경계를 왜곡시키는 학습 단계 공격"
      },
      {
        "category": "",
        "sub": "회피 공격 (Evasion)",
        "desc": "추론 단계에서 인간 눈에는 보이지 않는 미세한 섭동(Perturbation, FGSM/PGD)을 입력에 더해 오분류를 유도(적대적 예제)"
      },
      {
        "category": "모델·프라이버시 공격",
        "sub": "모델 추출 (Extraction)",
        "desc": "반복적인 API 질의와 출력 확률값 분석을 통해 타사의 독점 블랙박스 모델을 복제·탈취(Model Stealing)"
      },
      {
        "category": "",
        "sub": "모델 전도 & 멤버십 추론",
        "desc": "출력 신뢰도를 역분석해 학습에 사용된 원본 얼굴/의료 데이터를 복원(Inversion)하거나 특정인 데이터 포함 여부(MIA) 식별"
      },
      {
        "category": "핵심 방어 기법",
        "sub": "적대적 학습 & 차분프라이버시",
        "desc": "적대적 예제를 미리 학습(Adversarial Training), 입력 정제, 차분 프라이버시(DP-SGD) 및 출력 확률값 반올림/제한"
      }
    ],
    "keywords": [
      "Poisoning(중독)",
      "Evasion(회피/적대적예제)",
      "Model Extraction",
      "Model Inversion",
      "멤버십 추론(MIA)",
      "적대적 학습"
    ],
    "differentiation": "[유형 A] 데이터 공격(무결성 침해) vs 모델 공격(기밀성·지재권 침해) 비교\n① 공격 목적 차이: 데이터 공격(Poisoning·Evasion)은 모델이 틀린 판단을 내리도록 '무결성/가용성'을 파괴하는 반면, 모델 공격(Extraction·Inversion·MIA)은 모델 지식재산권과 학습 원본 개인정보를 훔치는 '기밀성' 침해 공격."
  },
  {
    "domain": "모의고사",
    "topic": "혼동 행렬 (Confusion Matrix)과 분류 성능 평가지표",
    "mnemonic": "TP·TN·FP(1종오류)·FN(2종오류) / 정밀도(Precision) · 재현율(Recall) · F1 · ROC-AUC",
    "definition": "분류 모델 실제값과 예측값 일치 여부 집계한 평가 체계",
    "details": "                 [예측 Positive]       [예측 Negative]\n[실제 Positive]   TP (진양성)           FN (위음성: 2종 오류)  ──> 재현율(Recall) = TP / (TP + FN)\n[실제 Negative]   FP (위양성: 1종 오류) TN (진음성)            ──> 특이도(Specificity) = TN / (TN + FP)\n                  └─> 정밀도(Precision) = TP / (TP + FP)   |   조화평균 F1 = 2×(P×R)/(P+R)",
    "tableRows": [
      {
        "category": "4대 기본 요소",
        "sub": "TP / TN / FP / FN",
        "desc": "TP(실제 양성을 양성 예측), TN(음성을 음성 예측), FP(음성을 양성 오판: 1종 오류), FN(양성을 음성 누락: 2종 오류)"
      },
      {
        "category": "핵심 비율 지표",
        "sub": "정확도 (Accuracy)",
        "desc": "(TP + TN) / 전체 — 클래스 불균형(예: 정상 99%, 사기 1%) 데이터에서는 모델 성능을 왜곡하는 한계"
      },
      {
        "category": "",
        "sub": "정밀도 (Precision)",
        "desc": "TP / (TP + FP) — 모델이 양성이라 예측한 것 중 실제 양성 비율 (스팸메일 차단 등 FP 최소화가 중요할 때 핵심)"
      },
      {
        "category": "",
        "sub": "재현율 (Recall / 민감도)",
        "desc": "TP / (TP + FN) — 실제 양성 중 모델이 놓치지 않고 찾아낸 비율 (암 진단·침입탐지 등 FN 최소화가 생명일 때 핵심)"
      },
      {
        "category": "통합 지표",
        "sub": "F1-Score & ROC-AUC",
        "desc": "정밀도와 재현율의 조화평균(F1) 및 임계값 변화에 따른 FPR 대비 TPR 곡선 아래 면적(ROC-AUC, 불균형 시 PR-AUC)"
      }
    ],
    "keywords": [
      "TP/TN/FP/FN",
      "1종 오류 / 2종 오류",
      "Precision(정밀도)",
      "Recall(재현율)",
      "F1-Score",
      "ROC-AUC / PR-AUC"
    ],
    "differentiation": "[유형 B] 정밀도-재현율 트레이드오프(Trade-off)와 도메인별 임계값(Threshold) 최적화\n① 도메인별 선택: 암 진단·자율주행 보행자 감지·제조 불량 검출은 실제 양성을 놓치면(FN, 2종 오류) 치명적이므로 임계값을 낮춰 재현율(Recall)을 극대화해야 함.\n② 극단적 불균형 평가: 사기 탐지(FDS)처럼 양성 비율이 극소수일 때는 TN이 과대 반영되는 ROC-AUC 대신 PR-AUC(Precision-Recall AUC)와 F-beta Score를 평가 기준으로 채택."
  },
  {
    "domain": "모의고사",
    "topic": "비지도학습 군집화 (Clustering: K-Means · DBSCAN · 계층적 군집)",
    "mnemonic": "분할(K-Means) · 밀도(DBSCAN: Eps·MinPts) · 계층(응집·분할) · 분포(GMM) / 실루엣계수",
    "definition": "레이블 없는 데이터의 유사도·밀도를 분석해 군집화 기법",
    "diagramImg": "exam_q65.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 분할 기반 (Partition) | K-Means / K-Medoids | 사전에 지정한 K개 중심점(Centroid)과 데이터 간 거리 제곱합(SSE)을 최소화하도록 반복 갱신 (구형 군집에 적합) |\n| 밀도 기반 (Density) | DBSCAN / OPTICS | 반경(Epsilon) 내 최소 점 개수(MinPts) 조건으로 고밀도 영역을 확장해 기하학적 비선형 군집 형성 및 이상치(Noise) 자동 분리 |\n| 계층적 군집 (Hierarchical) | Agglomerative (응집형) | 개별 데이터에서 시작해 거리(단일·완전·평균·Ward 연결법)가 가장 가까운 군집을 순차 병합하며 덴드로그램(Dendrogram) 생성 |\n| 군집 타당성 평가 | 엘보우 & 실루엣 계수 | 군집 내 응집도(a)와 군집 간 분리도(b)를 결합한 실루엣 계수(Silhouette = (b-a)/max(a,b), 1에 가까울수록 우수) |",
    "keywords": [
      "K-Means",
      "K-Means++",
      "DBSCAN(Eps/MinPts)",
      "계층적 군집(Dendrogram)",
      "GMM(EM 알고리즘)",
      "실루엣 계수"
    ],
    "differentiation": "[유형 A] K-Means(거리 기반) vs DBSCAN(밀도 기반) 심층 비교\n① K-Means 한계: 군집 수(K)를 사전에 지정해야 하며, 초기 중심점 위치에 민감하고(K-Means++로 보완), 평균을 사용하므로 이상치(Outlier)와 동심원·초승달 모양의 비구형 데이터에서 군집화 실패.\n② DBSCAN 강점: K를 미리 지정할 필요가 없고 임의의 복잡한 기하학적 형태의 군집을 완벽히 찾아내며 밀도가 낮은 외곽 이상치를 Noise로 자동 걸러냄."
  },
  {
    "domain": "모의고사",
    "topic": "정서 인공지능 (Affective AI / Affective Computing)",
    "mnemonic": "다중모달 감정인식(안면·음성·텍스트·생체신호) → 감정해석 → 공감반응 생성",
    "definition": "다중모달 생체 신호로 인간 감정을 인식·공감하는 기술",
    "details": "[멀티모달 센서 수집: 안면표정(FACS) + 음성운율(Pitch/Tone) + 텍스트(감성분석) + 생체신호(심박·뇌파·피부전도)]\n  └──────> [멀티모달 감정 퓨전·상태 추론 엔진] ──> [공감형 대화·맞춤형 케어 반응 생성 (디지털 휴먼·멘탈헬스·인캐빈)]",
    "tableRows": [
      {
        "category": "감정 인식 채널",
        "sub": "시각 · 청각 · 언어",
        "desc": "안면 미세표정 근육 움직임(FACS), 음성의 높낮이·속도·떨림(Prosody), 발화 텍스트의 문맥적 감성(Sentiment) 분석"
      },
      {
        "category": "",
        "sub": "생리적 생체신호",
        "desc": "웨어러블·비접촉 센서(rPPG) 기반 심박변이도(HRV), 뇌파(EEG), 피부전기활성(EDA/GSR)으로 무의식적 각성·스트레스 측정"
      },
      {
        "category": "감정 공간 모델",
        "sub": "범주형 vs 차원형(V-A)",
        "desc": "폴 에크만의 6대 기본감정(기쁨·슬픔·분노·공포·혐오·놀람) 및 러셀의 긍·부정(Valence) × 각성도(Arousal) 2차원 모델"
      },
      {
        "category": "핵심 응용 분야",
        "sub": "모빌리티·헬스케어·컨택센터",
        "desc": "자율주행 인캐빈(운전자 졸음·분노 감지 제어), 독거노인·우울증 디지털 치료제(DTx), AICC 고객 감정 맞춤형 상담"
      }
    ],
    "keywords": [
      "Affective Computing",
      "멀티모달 감정인식",
      "FACS(안면행동코딩)",
      "Valence-Arousal 모델",
      "생체신호(HRV/EEG)",
      "EU AI Act 규제"
    ],
    "differentiation": "[유형 C] 정서 AI의 문화적 편향·프라이버시 한계와 EU AI Act 규제 대응 제언\n① 기술적·윤리적 한계: 외면적 표정과 실제 내면 감정이 다를 수 있으며(맥락 의존성), EU AI Act는 직장·교육기관 내 감정인식 AI 사용을 금지(고위험/금지 AI)함.\n② 기술사적 제언: 생체·감정 데이터는 외부 클라우드로 전송하지 않고 단말 내부에서 즉시 처리·폐기하는 온디바이스(On-Device) Affective AI 아키텍처와 명시적 옵트인(Opt-in) 동의를 필수 적용해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "클라우드 AI (Cloud AI)",
    "mnemonic": "클라우드AI(초거대학습·고비용·지연) vs 온디바이스AI(단말NPU·초저지연·오프라인·프라이버시)",
    "definition": "데이터센터 GPU 클러스터서 초거대 모델을 연산 체계",
    "diagramImg": "exam_q67.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 클라우드 AI | 중앙집중 초거대 연산 | 대규모 GPU 클러스터 기반으로 수천억 파라미터 LLM 학습 및 고난도 추론 수행 (네트워크 지연·서버 비용·개인정보 반출 한계) |\n| 온디바이스 AI | 단말 내부 독립 추론 | 스마트폰·차량·로봇 내장 NPU에서 네트워크 연결 없이 즉시 추론 (초저지연, 오프라인 동작, 민감데이터 단말 내 보존) |\n| 온디바이스 핵심기술 | 모델 경량화 & 최적화 | 양자화(Quantization: FP16→INT4), 가지치기(Pruning), 지식증류(Knowledge Distillation) 및 경량 sLLM |\n| | 하드웨어 & 런타임 | 저전력 NPU/PIM 반도체 및 모바일 추론 엔진(ExecuTorch, TensorFlow Lite, ONNX Runtime, CoreML) |",
    "keywords": [
      "On-Device AI",
      "NPU",
      "sLLM",
      "양자화(Quantization)",
      "지식증류(KD)",
      "가지치기(Pruning)",
      "하이브리드 AI"
    ],
    "differentiation": "[유형 C] 피지컬 AI 시대의 '하이브리드 AI(Hybrid AI)' 오케스트레이션 아키텍처\n① 상호보완 결합: 모든 요청을 클라우드나 단말 한 곳에서만 처리하는 것이 아니라, 일상적 요약·음성인식·실시간 제어는 온디바이스 NPU(sLLM)에서 즉시 처리하고, 고난도 복합 추론·최신 웹 검색만 클라우드 거대 모델로 동적 라우팅하는 하이브리드 AI가 표준."
  },
  {
    "domain": "모의고사",
    "topic": "온디바이스 AI (On-Device AI)",
    "mnemonic": "클라우드AI(초거대학습·고비용·지연) vs 온디바이스AI(단말NPU·초저지연·오프라인·프라이버시)",
    "definition": "네트워크 없이 단말 자체 NPU서 초저지연 추론 기술",
    "diagramImg": "exam_q67_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 클라우드 AI | 중앙집중 초거대 연산 | 대규모 GPU 클러스터 기반으로 수천억 파라미터 LLM 학습 및 고난도 추론 수행 (네트워크 지연·서버 비용·개인정보 반출 한계) |\n| 온디바이스 AI | 단말 내부 독립 추론 | 스마트폰·차량·로봇 내장 NPU에서 네트워크 연결 없이 즉시 추론 (초저지연, 오프라인 동작, 민감데이터 단말 내 보존) |\n| 온디바이스 핵심기술 | 모델 경량화 & 최적화 | 양자화(Quantization: FP16→INT4), 가지치기(Pruning), 지식증류(Knowledge Distillation) 및 경량 sLLM |\n| | 하드웨어 & 런타임 | 저전력 NPU/PIM 반도체 및 모바일 추론 엔진(ExecuTorch, TensorFlow Lite, ONNX Runtime, CoreML) |",
    "keywords": [
      "On-Device AI",
      "NPU",
      "sLLM",
      "양자화(Quantization)",
      "지식증류(KD)",
      "가지치기(Pruning)",
      "하이브리드 AI"
    ],
    "differentiation": "[유형 C] 피지컬 AI 시대의 '하이브리드 AI(Hybrid AI)' 오케스트레이션 아키텍처\n① 상호보완 결합: 모든 요청을 클라우드나 단말 한 곳에서만 처리하는 것이 아니라, 일상적 요약·음성인식·실시간 제어는 온디바이스 NPU(sLLM)에서 즉시 처리하고, 고난도 복합 추론·최신 웹 검색만 클라우드 거대 모델로 동적 라우팅하는 하이브리드 AI가 표준."
  },
  {
    "domain": "모의고사",
    "topic": "오차의 등분산성 (Homoscedasticity)",
    "mnemonic": "등분산성(잔차분산 일정·이분산 시 WLS/변수변환) / 다중공선성(독립변수간 강한상관·VIF>=10·PCA/릿지)",
    "definition": "독립변수 값과 무관하게 회귀 잔차의 분산이 일정한 성질",
    "diagramImg": "exam_q68.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 오차의 등분산성 | 개념 및 기본 가정 | 모든 독립변수(X) 값에 대해 오차항(잔차 ε)의 분산이 일정(Var(εi) = σ^2)해야 한다는 가우스-마르코프 핵심 가정 |\n| | 이분산성 진단·해결 | 잔차 산점도(깔때기 모양), 브로이슈-페이건(Breusch-Pagan) 검정으로 진단 → 종속변수 로그 변환 또는 가중최소제곱법(WLS) 적용 |\n| 다중공선성 | 독립변수 간 강한 상관 | 독립변수들끼리 강한 선형 상관관계가 존재하여 회귀계수 추정치의 분산이 폭증하고 부호가 뒤집히는 현상 |\n| | 진단 지표 (VIF) | 분산팽창요인 VIF = 1 / (1 - R^2) 산출 시 VIF >= 10 이면 심각한 다중공선성 존재로 판정 (공차한계 Tolerance <= 0.1) |\n| | 다중공선성 해결 방안 | 상관 높은 변수 제거, 주성분 회귀(PCA 차원축소), 정규화 패널티 회귀(Ridge L2 / Lasso L1 / ElasticNet) 적용 |",
    "keywords": [
      "가우스-마르코프 정리",
      "등분산성 vs 이분산성",
      "다중공선성",
      "VIF(분산팽창요인 >= 10)",
      "가중최소제곱(WLS)",
      "Ridge/Lasso"
    ],
    "differentiation": "[유형 A] 회귀분석 4대 기본 가정(선·독·등·정) 위배 시 파급효과 및 대응 비교\n① 오차항 가정(선형성·독립성·등분산성·정규성): 등분산성 위배(이분산성) 시 최소제곱추정량(OLS)이 더 이상 최소분산(BLUE)을 갖지 못해 표준오차와 p-value 검정이 왜곡됨.\n② 다중공선성 대응: 예측 자체가 목적일 때는 다중공선성이 큰 문제가 안 될 수 있으나, 변수 중요도와 인과적 해석이 목적일 때는 반드시 VIF 진단 후 Ridge(L2) 정규화나 변수 선택을 수행해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "다중공선성 (Multicollinearity) 진단과 해결",
    "mnemonic": "등분산성(잔차분산 일정·이분산 시 WLS/변수변환) / 다중공선성(독립변수간 강한상관·VIF>=10·PCA/릿지)",
    "definition": "독립변수 간 강한 상관관계로 회귀계수 추정이 왜곡 현상",
    "diagramImg": "exam_q68_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 오차의 등분산성 | 개념 및 기본 가정 | 모든 독립변수(X) 값에 대해 오차항(잔차 ε)의 분산이 일정(Var(εi) = σ^2)해야 한다는 가우스-마르코프 핵심 가정 |\n| | 이분산성 진단·해결 | 잔차 산점도(깔때기 모양), 브로이슈-페이건(Breusch-Pagan) 검정으로 진단 → 종속변수 로그 변환 또는 가중최소제곱법(WLS) 적용 |\n| 다중공선성 | 독립변수 간 강한 상관 | 독립변수들끼리 강한 선형 상관관계가 존재하여 회귀계수 추정치의 분산이 폭증하고 부호가 뒤집히는 현상 |\n| | 진단 지표 (VIF) | 분산팽창요인 VIF = 1 / (1 - R^2) 산출 시 VIF >= 10 이면 심각한 다중공선성 존재로 판정 (공차한계 Tolerance <= 0.1) |\n| | 다중공선성 해결 방안 | 상관 높은 변수 제거, 주성분 회귀(PCA 차원축소), 정규화 패널티 회귀(Ridge L2 / Lasso L1 / ElasticNet) 적용 |",
    "keywords": [
      "가우스-마르코프 정리",
      "등분산성 vs 이분산성",
      "다중공선성",
      "VIF(분산팽창요인 >= 10)",
      "가중최소제곱(WLS)",
      "Ridge/Lasso"
    ],
    "differentiation": "[유형 A] 회귀분석 4대 기본 가정(선·독·등·정) 위배 시 파급효과 및 대응 비교\n① 오차항 가정(선형성·독립성·등분산성·정규성): 등분산성 위배(이분산성) 시 최소제곱추정량(OLS)이 더 이상 최소분산(BLUE)을 갖지 못해 표준오차와 p-value 검정이 왜곡됨.\n② 다중공선성 대응: 예측 자체가 목적일 때는 다중공선성이 큰 문제가 안 될 수 있으나, 변수 중요도와 인과적 해석이 목적일 때는 반드시 VIF 진단 후 Ridge(L2) 정규화나 변수 선택을 수행해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "ANN (근사 최근접 이웃, Approximate Nearest Neighbor) 검색 알고리즘",
    "mnemonic": "그래프(HNSW) · 클러스터역색인(IVF) · 양자화압축(PQ) · 트리(KD/Annoy) · 해싱(LSH)",
    "definition": "초고차원 벡터 공간에서 정확도 타협해 초고속 검색 기법",
    "diagramImg": "exam_q69.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 그래프 기반 (Graph) | HNSW (Hierarchical NSW) | 다계층 Skip-List 구조와 근접 그래프를 결합해 상위 희소 계층에서 하위 밀집 계층으로 고속 탐색 (속도·재현율 최고, RAM 과다) |\n| 클러스터링 (Inverted) | IVF (Inverted File Index) | 보로노이 다이어그램(K-Means)으로 공간을 분할한 뒤 질의 벡터와 가까운 nprobe개 중심점 클러스터 내부만 탐색 |\n| 양자화 기반 (Quantization) | PQ (Product Quantization) | 고차원 벡터를 M개 서브벡터로 쪼갠 뒤 코드북 인덱스로 압축(양자화)해 메모리 사용량을 수십 분의 1로 절감 |\n| 트리 & 해싱 기반 | Annoy / LSH | 초평면 이진 분할 트리(Annoy) 및 가까운 벡터를 동일 버킷으로 매핑하는 지역 민감 해싱(LSH) |",
    "keywords": [
      "벡터 DB",
      "RAG 검색엔진",
      "HNSW",
      "IVF",
      "PQ(곱양자화)",
      "IVF-PQ",
      "Recall@K vs QPS"
    ],
    "differentiation": "[유형 B] 대규모 엔터프라이즈 RAG 구축 시 벡터 인덱스(HNSW vs IVF-PQ) 선택 및 메모리 최적화\n① HNSW의 메모리 병목: 수억 건의 1536차원 벡터를 순수 HNSW로 인덱싱하면 수백 GB의 RAM이 필요해 인프라 비용 폭증.\n② 실무 아키텍처: 수백만 건 이하 실시간 검색에는 HNSW + 스칼라 양자화(SQ8/Binary Quantization)를 적용하고, 수억 건 이상 초대규모에서는 IVF-PQ 또는 디스크 기반 그래프 인덱스(DiskANN)를 채택."
  },
  {
    "domain": "모의고사",
    "topic": "인공지능 영향평가 (AI Impact Assessment)",
    "mnemonic": "사전검토 → 영향평가(인권·안전·기본권·공정성) → 완화조치 → 사후이행점검",
    "definition": "고영향 AI 도입 전 기본권·사회적 파급효과 진단 제도",
    "details": "[대상 판별(고영향 AI: 생명·안전·기본권·공공 의사결정)] ──> [위험 식별·영향도 분석] ──> [완화 대책 수립·제3자 검증] ──> [상시 모니터링]",
    "tableRows": [
      {
        "category": "제도적 배경",
        "sub": "AI 기본법 & ISO 42005",
        "desc": "국내 인공지능 기본법(고영향 AI 사업자 책무) 및 EU AI Act(기본권 영향평가 FRIA), ISO/IEC 42005 국제표준 근거"
      },
      {
        "category": "평가 대상",
        "sub": "고영향 인공지능",
        "desc": "에너지·의료·채용·신용평가·범죄수사·자율주행·공공 수급자 결정 등 인간의 생명·신체·기본권에 중대한 영향을 미치는 AI"
      },
      {
        "category": "주요 평가 영역",
        "sub": "투명·공정·안전·책임",
        "desc": "학습데이터 편향성, 차별 가능성, 설명 가능성(XAI), 인간 감독(Human Oversight) 체계, 사이버보안·개인정보 침해 위험"
      },
      {
        "category": "수행 절차",
        "sub": "사전준비 → 수행 → 이행",
        "desc": "대상 여부 스크리닝 → 이해관계자·전문가 위험도 산정 → 위험 완화조치(가드레일) 반영 → 배포 후 변경 시 재평가"
      }
    ],
    "keywords": [
      "인공지능 기본법",
      "고영향 AI",
      "ISO/IEC 42005",
      "EU AI Act(FRIA)",
      "기본권 보호",
      "인간 감독(HITL)"
    ],
    "differentiation": "[유형 A] 개인정보 영향평가(PIA) vs 인공지능 영향평가(AIIA) 비교\n① 평가 초점: PIA는 '개인정보의 수집·유출·오남용 보호'에 국한되는 반면, 인공지능 영향평가는 개인정보를 넘어 알고리즘 차별·편향, 환각으로 인한 안전 위협, 일자리·기본권 침해까지 포괄.\n② 통합 수행 제언: 공공·금융권 AI 구축 시 PIA와 AI 영향평가를 별개로 중복 수행하지 않도록 데이터 거버넌스 단계에서 통합 영향평가 프레임워크로 일원화."
  },
  {
    "domain": "모의고사",
    "topic": "RLHF (인간 피드백 기반 강화학습)와 DPO",
    "mnemonic": "RLHF(SFT→보상모델RM→PPO 강화학습 / DPO) vs RAFT(검색문서+방해문서 오답노트 학습)",
    "definition": "보상모델과 강화학습로 LLM 출력 인간 가치 정렬 기법",
    "details": "[RLHF 파이프라인] 사전학습 LLM ──> [1. SFT(지도미세조정)] ──> [2. RM(보상모델 학습)] ──> [3. PPO 강화학습 정렬 (또는 DPO 직접 정렬)]\n[RAFT 파이프라인] 질문 + 정답문서(Golden) + 방해문서(Distractor) 혼합 ──> [CoT 인용 근거 추론 학습] ──> [도메인 특화 RAG LLM]",
    "tableRows": [
      {
        "category": "RLHF (인간피드백 정렬)",
        "sub": "3단계 정렬 메커니즘",
        "desc": "① SFT(지시사항 학습) → ② 인간 선호도 비교로 보상모델(Reward Model) 학습 → ③ PPO 강화학습으로 유해성 억제·선호 응답 정렬"
      },
      {
        "category": "",
        "sub": "DPO로의 진화",
        "desc": "별도 보상모델(RM)과 복잡한 PPO 없이 선호/비선호 응답 쌍만으로 직접 정책을 최적화하는 DPO(Direct Preference Optimization) 확산"
      },
      {
        "category": "RAFT (검색증강 튜닝)",
        "sub": "오픈북 시험 학습법",
        "desc": "Retrieval-Augmented Fine-Tuning: 도메인 RAG 환경에서 잘못 검색된 방해 문서(Distractor)를 걸러내고 정답 근거만 인용하도록 학습"
      },
      {
        "category": "",
        "sub": "학습 데이터 구성",
        "desc": "질문(Q) + 정답 포함 문서(D*) + 무관한 방해 문서(Dk) + 단계별 인용 추론 과정(Chain-of-Thought)과 답변(A) 세트로 파인튜닝"
      }
    ],
    "keywords": [
      "RLHF",
      "SFT",
      "보상모델(RM)",
      "PPO / DPO",
      "RAFT",
      "Distractor 문서",
      "도메인 특화 RAG"
    ],
    "differentiation": "[유형 A] 범용 파인튜닝 + 단순 RAG vs RAFT(Retrieval-Augmented Fine-Tuning) 비교\n① 단순 RAG의 한계: 검색기(Retriever)가 노이즈 문서를 함께 가져왔을 때 일반 LLM은 방해 문서에 현혹되어 오답을 생성함.\n② RAFT의 강점: 학습 시점부터 '관련 없는 방해 문서를 무시하고 핵심 문장만 정확히 인용(Citation)해 추론하는 법'을 훈련시켜 엔터프라이즈 RAG 정확도를 극대화."
  },
  {
    "domain": "모의고사",
    "topic": "RAFT (검색 증강 파인튜닝, Retrieval-Augmented Fine-Tuning)",
    "mnemonic": "RLHF(SFT→보상모델RM→PPO 강화학습 / DPO) vs RAFT(검색문서+방해문서 오답노트 학습)",
    "definition": "방해 문서 속서 정답 근거 인용하도록 LLM 튜닝 기법",
    "details": "[RLHF 파이프라인] 사전학습 LLM ──> [1. SFT(지도미세조정)] ──> [2. RM(보상모델 학습)] ──> [3. PPO 강화학습 정렬 (또는 DPO 직접 정렬)]\n[RAFT 파이프라인] 질문 + 정답문서(Golden) + 방해문서(Distractor) 혼합 ──> [CoT 인용 근거 추론 학습] ──> [도메인 특화 RAG LLM]",
    "tableRows": [
      {
        "category": "RLHF (인간피드백 정렬)",
        "sub": "3단계 정렬 메커니즘",
        "desc": "① SFT(지시사항 학습) → ② 인간 선호도 비교로 보상모델(Reward Model) 학습 → ③ PPO 강화학습으로 유해성 억제·선호 응답 정렬"
      },
      {
        "category": "",
        "sub": "DPO로의 진화",
        "desc": "별도 보상모델(RM)과 복잡한 PPO 없이 선호/비선호 응답 쌍만으로 직접 정책을 최적화하는 DPO(Direct Preference Optimization) 확산"
      },
      {
        "category": "RAFT (검색증강 튜닝)",
        "sub": "오픈북 시험 학습법",
        "desc": "Retrieval-Augmented Fine-Tuning: 도메인 RAG 환경에서 잘못 검색된 방해 문서(Distractor)를 걸러내고 정답 근거만 인용하도록 학습"
      },
      {
        "category": "",
        "sub": "학습 데이터 구성",
        "desc": "질문(Q) + 정답 포함 문서(D*) + 무관한 방해 문서(Dk) + 단계별 인용 추론 과정(Chain-of-Thought)과 답변(A) 세트로 파인튜닝"
      }
    ],
    "keywords": [
      "RLHF",
      "SFT",
      "보상모델(RM)",
      "PPO / DPO",
      "RAFT",
      "Distractor 문서",
      "도메인 특화 RAG"
    ],
    "differentiation": "[유형 A] 범용 파인튜닝 + 단순 RAG vs RAFT(Retrieval-Augmented Fine-Tuning) 비교\n① 단순 RAG의 한계: 검색기(Retriever)가 노이즈 문서를 함께 가져왔을 때 일반 LLM은 방해 문서에 현혹되어 오답을 생성함.\n② RAFT의 강점: 학습 시점부터 '관련 없는 방해 문서를 무시하고 핵심 문장만 정확히 인용(Citation)해 추론하는 법'을 훈련시켜 엔터프라이즈 RAG 정확도를 극대화."
  },
  {
    "domain": "모의고사",
    "topic": "MLOps (머신러닝 운영 자동화 파이프라인)",
    "mnemonic": "MLOps(정형/특징공학·자체학습·정량지표) vs LLMOps(프롬프트·RAG·PEFT·가드레일·LLM-as-a-Judge)",
    "definition": "머신러닝 모델의 개발·배포·재학습 전 주기 자동화 체계",
    "diagramImg": "exam_q72.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| MLOps vs LLMOps | 모델 및 데이터 초점 | MLOps는 피처 스토어(Feature Store)와 밑바닥 학습·재학습 중심, LLMOps는 파운데이션 모델 선택·프롬프트·RAG·PEFT 중심 |\n| LLMOps 파이프라인 | 데이터·컨텍스트 계층 | 비정형 문서 청킹·임베딩 파이프라인 및 벡터 DB 인덱스 최신화 관리 |\n| | 프롬프트·모델 계층 | 프롬프트 버전 레지스트리, PEFT(LoRA) 어댑터 학습 및 vLLM/TGI 기반 고효율 추론 서빙(KV Cache 최적화) |\n| | 평가·관측·보안 계층 | RAGAS / LLM-as-a-Judge 기반 정성·환각 평가, 토큰 비용/지연 트레이싱(Langfuse), 입출력 AI 가드레일 |\n| 공공 도입 고려사항 | 보안·망분리·거버넌스 | 국가망보안체계(N2SF) 등급에 따른 온프레미스 sLLM 구축, 할루시네이션 책임 한계 및 국산 AI 반도체(NPU) 호환성 고려 |",
    "keywords": [
      "MLOps",
      "LLMOps",
      "Prompt Registry",
      "vLLM / KV Cache",
      "RAGAS",
      "LLM-as-a-Judge",
      "토큰 비용 최적화"
    ],
    "differentiation": "[유형 A] MLOps 평가(F1·RMSE) vs LLMOps 평가(RAGAS·LLM-as-a-Judge)의 결정적 차이\n① 평가의 난제: 전통 MLOps는 정답이 명확해 F1-Score나 RMSE로 자동 검증이 쉬우나, LLM의 생성 텍스트는 열린 결말이라 기존 지표로 환각 여부를 측정할 수 없음.\n② LLMOps 해법: 맥락 충실도(Faithfulness)·답변 관련성(Relevance)·맥락 정밀도를 측정하는 RAGAS 프레임워크와 검증용 심판 모델(LLM-as-a-Judge)을 CI/CD 게이트에 내재화."
  },
  {
    "domain": "모의고사",
    "topic": "LLMOps (초거대 언어모델 운영 파이프라인)",
    "mnemonic": "MLOps(정형/특징공학·자체학습·정량지표) vs LLMOps(프롬프트·RAG·PEFT·가드레일·LLM-as-a-Judge)",
    "definition": "프롬프트·RAG·가드레일 중심 거대언어모델 운영 체계",
    "diagramImg": "exam_q72_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| MLOps vs LLMOps | 모델 및 데이터 초점 | MLOps는 피처 스토어(Feature Store)와 밑바닥 학습·재학습 중심, LLMOps는 파운데이션 모델 선택·프롬프트·RAG·PEFT 중심 |\n| LLMOps 파이프라인 | 데이터·컨텍스트 계층 | 비정형 문서 청킹·임베딩 파이프라인 및 벡터 DB 인덱스 최신화 관리 |\n| | 프롬프트·모델 계층 | 프롬프트 버전 레지스트리, PEFT(LoRA) 어댑터 학습 및 vLLM/TGI 기반 고효율 추론 서빙(KV Cache 최적화) |\n| | 평가·관측·보안 계층 | RAGAS / LLM-as-a-Judge 기반 정성·환각 평가, 토큰 비용/지연 트레이싱(Langfuse), 입출력 AI 가드레일 |\n| 공공 도입 고려사항 | 보안·망분리·거버넌스 | 국가망보안체계(N2SF) 등급에 따른 온프레미스 sLLM 구축, 할루시네이션 책임 한계 및 국산 AI 반도체(NPU) 호환성 고려 |",
    "keywords": [
      "MLOps",
      "LLMOps",
      "Prompt Registry",
      "vLLM / KV Cache",
      "RAGAS",
      "LLM-as-a-Judge",
      "토큰 비용 최적화"
    ],
    "differentiation": "[유형 A] MLOps 평가(F1·RMSE) vs LLMOps 평가(RAGAS·LLM-as-a-Judge)의 결정적 차이\n① 평가의 난제: 전통 MLOps는 정답이 명확해 F1-Score나 RMSE로 자동 검증이 쉬우나, LLM의 생성 텍스트는 열린 결말이라 기존 지표로 환각 여부를 측정할 수 없음.\n② LLMOps 해법: 맥락 충실도(Faithfulness)·답변 관련성(Relevance)·맥락 정밀도를 측정하는 RAGAS 프레임워크와 검증용 심판 모델(LLM-as-a-Judge)을 CI/CD 게이트에 내재화."
  },
  {
    "domain": "모의고사",
    "topic": "OWASP LLM Top 10 주요 위협과 계층별 보안 대응 체계",
    "mnemonic": "프롬프트인젝션(01) · 민감정보노출(02) · 공급망(03) · 중독(04) · 부적절출력처리(05) · 과도한위임(06)",
    "definition": "거대언어모델 10대 보안 취약점과 다계층 방어 체계",
    "details": "[데이터 계층 위협: 학습데이터 중독·임베딩 역추적] ──> [모델 계층 위협: 공급망 오염·시스템 프롬프트 유출·무한자원소모]\n  └──> [애플리케이션·에이전트 계층 위협: 직/간접 프롬프트 인젝션 · 부적절한 출력 처리(XSS/RCE) · 과도한 에이전트 권한(Excessive Agency)]",
    "tableRows": [
      {
        "category": "OWASP LLM 주요 위협",
        "sub": "LLM01 프롬프트 인젝션",
        "desc": "사용자 직접 입력(Direct) 또는 외부 웹·문서에 숨겨진 악성 지시(Indirect)로 모델의 시스템 명령을 무력화·조작"
      },
      {
        "category": "",
        "sub": "LLM02 민감정보 노출",
        "desc": "학습 데이터나 RAG 컨텍스트에 포함된 개인정보·기밀·시스템 프롬프트가 응답을 통해 외부 유출"
      },
      {
        "category": "",
        "sub": "LLM05·06 출력처리 & 과도한 권한",
        "desc": "LLM 출력을 검증 없이 실행해 SQLi/XSS 발생(05) 및 에이전트에게 과도한 API 삭제·결제 권한 부여로 사고 발생(06)"
      },
      {
        "category": "계층별 방어 체계",
        "sub": "데이터·모델 보안",
        "desc": "RAG 문서 권한 필터링(RBAC), 데이터 비식별화, 모델 파일 서명 검증(Safetensors) 및 AI-BOM 관리"
      },
      {
        "category": "",
        "sub": "애플리케이션·런타임 방어",
        "desc": "입출력 AI 가드레일, 출력값 제로트러스트 검증(Parameterized Query), 에이전트 최소 권한 및 고위험 액션 인간 승인(HITL)"
      }
    ],
    "keywords": [
      "OWASP LLM Top 10",
      "직·간접 프롬프트 인젝션",
      "Excessive Agency(과도한 권한)",
      "시스템 프롬프트 유출",
      "AI-BOM",
      "Red Teaming"
    ],
    "differentiation": "[유형 B] 간접 프롬프트 인젝션(Indirect Prompt Injection)과 에이전트 보안 통제 방안\n① 가장 치명적인 위협: 사용자가 정상 질문을 했더라도 RAG나 웹 브라우징으로 읽어온 외부 문서 안에 숨겨진 악성 명령이 에이전트의 도구(이메일 발송·DB 수정)를 하이재킹함.\n② 방어 아키텍처: 명령(Instruction)과 외부 데이터(Data) 채널을 구조적으로 분리(Spotlighting)하고, 에이전트의 외부 도구 실행은 샌드박스 격리 및 Human-in-the-Loop 승인을 강제."
  },
  {
    "domain": "모의고사",
    "topic": "생성형 AI 데이터 품질관리 프레임워크 및 품질지표 (v2.0 가이드라인)",
    "mnemonic": "계획→구축(수집·정제·라벨링)→운영 / 정합·다양·유용·윤리·보안성",
    "definition": "생성형 AI의 환각 억제와 신뢰성 확보 위한 품질 체계",
    "diagramImg": "exam_q75.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 생성형 데이터 특성 | 비정형·초대규모·맥락성 | 말뭉치(Corpus)·멀티모달 중심의 비정형 데이터로, 단순 정답 라벨을 넘어 지시문-응답(Instruction) 맥락과 윤리성이 품질 좌우 |\n| 품질관리 프로세스 | 계획 → 구축 → 운영·활용 | 데이터 확보 계획(저작권·개인정보 검토) → 수집·정제(중복 제거·품질 필터링)·합성·라벨링 → 편향·드리프트 상시 관리 |\n| 핵심 품질지표 | 구문·의미적 정확성 & 다양성 | 문법적 완전성, 사실 부합성(Factuality), 도메인·어조·인구통계학적 분포의 다양성(Diversity) |\n| | 유해성·편향성·합법성 | 혐오·폭력 표현 부재, 사회적 편향 제거, 개인정보(PII) 비식별화 및 저작권 적법성 검증 지표 |",
    "keywords": [
      "생성형 AI 품질관리 v2.0",
      "Data-Centric AI",
      "합성 데이터(Synthetic Data)",
      "사실성(Factuality)",
      "다양성·편향성",
      "비식별화"
    ],
    "differentiation": "[유형 A] 판별형 AI(전통 지도학습) 데이터 품질관리 vs 생성형 AI 데이터 품질관리 비교\n① 판별형 AI: 바운딩 박스나 분류 클래스 라벨의 '기하학적·구문적 정밀도(IoU, 오차율)'가 핵심.\n② 생성형 AI: 라벨 정확도뿐만 아니라 '사실적 근거성(환각 방지), 지시 이행력, 윤리적 무해성, 저작권 적법성'까지 평가해야 하며, 인간 평가의 비용 한계를 극복하기 위해 LLM 기반 자동 품질 검수(Auto-Evaluation)를 병행."
  },
  {
    "domain": "모의고사",
    "topic": "RAG 진화 아키텍처 (Naive · Advanced · Modular · Agentic RAG)",
    "mnemonic": "Naive(단순선형) → Advanced(Pre/Post 검색보강) → Modular(모듈조합) → Agentic(자율계획·자기검증·반복검색)",
    "definition": "외부 지식 검색을 결합해 환각 줄이고 자율 제어 체계",
    "diagramImg": "exam_q76.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 기본 메커니즘 | Indexing → Retrieval → Generation | 문서 청킹·임베딩·벡터DB 적재 → 질의 유사도(ANN) 기반 Top-K 추출 → 프롬프트에 문맥 주입해 LLM 답변 생성 |\n| Advanced RAG | 검색 전·후 처리 보강 | 검색 전(의미 청킹, 쿼리 재작성·확장 HyDE) + 하이브리드 검색(BM25+벡터) + 검색 후(Cross-Encoder Rerank, 문맥 압축) |\n| Modular RAG | 교체 가능한 모듈형 흐름 | 검색·메모리·라우팅·융합(RAG-Fusion)을 독립 모듈로 분리해 Rewrite-Retrieve-Read 등 유연한 파이프라인 조립 |\n| Agentic RAG | 자율 계획 & 자기 성찰 | 단일 1회 검색의 한계를 넘어 에이전트가 복합 질의를 분해하고 다중 도구(VectorDB·SQL·웹API)를 호출하며 결과 미흡 시 쿼리를 바꿔 재검색(Self-RAG / CRAG) |",
    "keywords": [
      "Naive/Advanced/Modular RAG",
      "Agentic RAG",
      "Hybrid Search(BM25+Vector)",
      "Reranker",
      "Self-RAG / CRAG",
      "GraphRAG"
    ],
    "differentiation": "[유형 B] 기존 선형 RAG의 구조적 한계와 Agentic RAG 실무 도입 시 통제 방안\n① 선형 RAG의 한계: 1회 검색 결과가 부정확하면 최종 답변도 무조건 실패하며, 다단계 추론(Multi-hop Reasoning) 질의에 대응 불가.\n② Agentic RAG 운영 통제: 에이전트가 스스로 검색 결과를 평가(Grader)하고 재검색하되, 무한 루프와 토큰 비용 폭증을 막기 위해 최대 반복 횟수(Max Iterations) 상한 설정과 경량 라우터 모델을 필수 결합."
  },
  {
    "domain": "모의고사",
    "topic": "공격 표면 (Attack Surface)과 공격 표면 관리 (ASM)",
    "mnemonic": "디지털·물리적·사회공학적 표면 / 자산식별 → 취약점분석 → 우선순위화 → 축소/모니터링",
    "definition": "공격자가 침투 가능한 모든 노출 지점을 식별·축소 체계",
    "details": "[외부/내부 노출 자산(클라우드·API·Shadow IT·IoT)] ──> [EASM/CAASM 상시 탐지] ──> [공격 경로 분석·우선순위화] ──> [불필요 포트·권한 제거(표면 축소)]",
    "tableRows": [
      {
        "category": "3대 공격 표면",
        "sub": "디지털 공격 표면",
        "desc": "외부 노출 IP/포트, 웹/API 엔드포인트, 클라우드 설정 오류, 만료 인증서, 방치된 서브도메인(Shadow IT)"
      },
      {
        "category": "",
        "sub": "물리적 & 인적 표면",
        "desc": "비인가 물리 포트(USB), 분실 단말기 및 임직원 피싱·크리덴셜 유출 등 사회공학적 침투 경로"
      },
      {
        "category": "공격표면 축소(ASR)",
        "sub": "최소권한 & 시스템 경화",
        "desc": "불필요 서비스·포트 비활성화(Hardening), 네트워크 마이크로 세그멘테이션, 제로 트러스트(SDP: Black Cloud) 은닉"
      },
      {
        "category": "고도화 체계",
        "sub": "EASM & CAASM",
        "desc": "해커 관점에서 외부 노출 자산을 상시 스캔하는 EASM(외부 공격표면 관리) 및 보안 자산 가시성 통합(CAASM)"
      }
    ],
    "keywords": [
      "Attack Surface",
      "EASM",
      "CAASM",
      "Shadow IT 탐지",
      "시스템 경화(Hardening)",
      "SDP(소프트웨어 정의 경계)"
    ],
    "differentiation": "[유형 C] 클라우드·원격근무 확산에 따른 공격 표면 폭발과 SDP(Software Defined Perimeter) 연계\n① 경계 실종: 멀티 클라우드와 SaaS, 재택근무 확산으로 기업 방화벽 밖의 미관리 자산(Shadow IT/AI)이 급증.\n② SDP 기반 공격표면 은닉: 인증되기 전에는 서버 포트와 IP 자체를 외부 스캐너로부터 완전히 숨기는 Single Packet Authorization(SPA) 기반 SDP를 적용해 공격 표면을 원천 제거."
  },
  {
    "domain": "모의고사",
    "topic": "변조 공격 (Modification Attack, 무결성 침해)",
    "mnemonic": "가로채기(기밀성) · 흐름차단(가용성) · 변조(무결성) · 위조(무결성·인증)",
    "definition": "전송·저장 중인 정상 데이터 비인가자가 무단 수정 공격",
    "details": "[4대 능동·수동 위협] 가로채기(Snooping: 기밀성 침해) | 흐름차단(DoS: 가용성 침해)\n                     변조(Modification: 원본 내용 조작 → 무결성 침해) | 위조(Fabrication: 신원 사칭·가짜 메시지 주입 → 인증/무결성 침해)",
    "tableRows": [
      {
        "category": "변조 (Modification)",
        "sub": "기존 데이터 무단 수정",
        "desc": "송수신 중인 정상 패킷이나 저장된 파일·DB 값을 가로채어 내용을 악의적으로 조작 후 전달 (무결성 침해)"
      },
      {
        "category": "",
        "sub": "대응 기술 (무결성)",
        "desc": "암호학적 해시함수(SHA-256/SHA-3), 메시지 인증코드(HMAC), 디지털 서명을 통해 단 1비트 변경도 즉시 탐지"
      },
      {
        "category": "위조 (Fabrication)",
        "sub": "없는 데이터·신원 날조",
        "desc": "권한 없는 공격자가 정상 송신자인 것처럼 사칭(Spoofing/Masquerade)하여 가짜 메시지나 트랜잭션을 생성·삽입 (인증·무결성 침해)"
      },
      {
        "category": "",
        "sub": "대응 기술 (출처 인증)",
        "desc": "공개키 기반 구조(PKI) 전자서명, 상호 TLS(mTLS), ARP/IP/DNS 스푸핑 차단(DNSSEC, DAI) 및 재생공격 방지(Nonce/Timestamp)"
      }
    ],
    "keywords": [
      "CIA 3대 요소",
      "무결성(Integrity)",
      "변조(Modification)",
      "위조(Fabrication/Spoofing)",
      "HMAC",
      "전자서명(PKI)"
    ],
    "differentiation": "[유형 A] 변조(Modification) vs 위조(Fabrication)의 핵심 차이와 통합 방어(AEAD)\n① 핵심 구별점: 변조는 '실제 존재하는 정상 메시지'를 중간에서 고치는 것이고, 위조는 정상 송신자가 보낸 적 없는 '가짜 메시지'를 무(無)에서 만들어 삽입하는 공격.\n② 현대 암호 프로토콜 해법: TLS 1.3에서는 기밀성·무결성·출처 인증을 한 번에 보장하는 AEAD(Authenticated Encryption with Associated Data: AES-GCM, ChaCha20-Poly1305)를 표준으로 강제."
  },
  {
    "domain": "모의고사",
    "topic": "위조 공격 (Fabrication Attack, 인증성 침해)",
    "mnemonic": "가로채기(기밀성) · 흐름차단(가용성) · 변조(무결성) · 위조(무결성·인증)",
    "definition": "비인가 공격자가 정상 송신자로 위장해 가짜 생성 공격",
    "details": "[4대 능동·수동 위협] 가로채기(Snooping: 기밀성 침해) | 흐름차단(DoS: 가용성 침해)\n                     변조(Modification: 원본 내용 조작 → 무결성 침해) | 위조(Fabrication: 신원 사칭·가짜 메시지 주입 → 인증/무결성 침해)",
    "tableRows": [
      {
        "category": "변조 (Modification)",
        "sub": "기존 데이터 무단 수정",
        "desc": "송수신 중인 정상 패킷이나 저장된 파일·DB 값을 가로채어 내용을 악의적으로 조작 후 전달 (무결성 침해)"
      },
      {
        "category": "",
        "sub": "대응 기술 (무결성)",
        "desc": "암호학적 해시함수(SHA-256/SHA-3), 메시지 인증코드(HMAC), 디지털 서명을 통해 단 1비트 변경도 즉시 탐지"
      },
      {
        "category": "위조 (Fabrication)",
        "sub": "없는 데이터·신원 날조",
        "desc": "권한 없는 공격자가 정상 송신자인 것처럼 사칭(Spoofing/Masquerade)하여 가짜 메시지나 트랜잭션을 생성·삽입 (인증·무결성 침해)"
      },
      {
        "category": "",
        "sub": "대응 기술 (출처 인증)",
        "desc": "공개키 기반 구조(PKI) 전자서명, 상호 TLS(mTLS), ARP/IP/DNS 스푸핑 차단(DNSSEC, DAI) 및 재생공격 방지(Nonce/Timestamp)"
      }
    ],
    "keywords": [
      "CIA 3대 요소",
      "무결성(Integrity)",
      "변조(Modification)",
      "위조(Fabrication/Spoofing)",
      "HMAC",
      "전자서명(PKI)"
    ],
    "differentiation": "[유형 A] 변조(Modification) vs 위조(Fabrication)의 핵심 차이와 통합 방어(AEAD)\n① 핵심 구별점: 변조는 '실제 존재하는 정상 메시지'를 중간에서 고치는 것이고, 위조는 정상 송신자가 보낸 적 없는 '가짜 메시지'를 무(無)에서 만들어 삽입하는 공격.\n② 현대 암호 프로토콜 해법: TLS 1.3에서는 기밀성·무결성·출처 인증을 한 번에 보장하는 AEAD(Authenticated Encryption with Associated Data: AES-GCM, ChaCha20-Poly1305)를 표준으로 강제."
  },
  {
    "domain": "모의고사",
    "topic": "Security for AI (AI 시스템 자체 보안)",
    "mnemonic": "Security for AI(AI 시스템 자체를 보호) vs Security by AI(AI 기술을 보안 관제·방어에 활용)",
    "definition": "AI 모델·데이터·파이프라인을 적대적 공격서 보호 체계",
    "details": "[Security for AI (보호 대상 = AI)] : 프롬프트 인젝션·데이터 중독·모델 탈취 방어 (OWASP LLM Top 10, AI 가드레일)\n[Security by AI (방어 도구 = AI)] : AI 기반 이상징후 탐지(UEBA)·SOAR 자동 대응·악성코드 변종 탐지 (자율 SOC)",
    "tableRows": [
      {
        "category": "Security for AI",
        "sub": "AI 자체의 안전·보안",
        "desc": "학습 데이터 중독(Poisoning), 적대적 예제(Evasion), 프롬프트 인젝션, 모델 가중치 유출로부터 AI 파이프라인을 보호"
      },
      {
        "category": "",
        "sub": "핵심 구현 기술",
        "desc": "AI 가드레일, 적대적 학습, 연합학습·동형암호(프라이버시), AI-BOM 및 AI 레드팀(Red Teaming) 모의해킹"
      },
      {
        "category": "Security by AI",
        "sub": "AI를 활용한 사이버 방어",
        "desc": "급증하는 보안 로그와 신·변종 위협을 머신러닝·생성형 AI를 활용해 실시간 탐지·분석·자동 격리하는 기술"
      },
      {
        "category": "",
        "sub": "핵심 구현 기술",
        "desc": "AI 기반 SIEM/SOAR, 사용자 행위 분석(UEBA), XDR 위협 헌팅, 보안 코파일럿(Security Copilot) 플레이북 자동 생성"
      }
    ],
    "keywords": [
      "Security for AI",
      "Security by AI",
      "Attack by AI",
      "AI 가드레일",
      "AI-SOC(SOAR/XDR)",
      "UEBA"
    ],
    "differentiation": "[유형 C] 공격자의 'AI 악용(Attack by AI)'에 대응하는 자율 보안 관제(Autonomous SOC) 제언\n① 창과 방패의 대결: 공격자 또한 생성형 AI를 악용해 스피어 피싱 정교화, 제로데이 익스플로잇 자동 생성, 폴리모픽 악성코드를 양산(Attack by AI).\n② 기술사적 제언: 기업은 Security by AI(탐지 자동화)를 도입하는 동시에, 보안 AI 모델 자체가 중독·회피 공격에 무력화되지 않도록 Security for AI를 결합한 양방향 AI 보안 거버넌스를 구축해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "Security by AI (AI 활용 사이버 보안)",
    "mnemonic": "Security for AI(AI 시스템 자체를 보호) vs Security by AI(AI 기술을 보안 관제·방어에 활용)",
    "definition": "AI 기술 활용해 지능형 사이버 위협을 자동 탐지 기술",
    "details": "[Security for AI (보호 대상 = AI)] : 프롬프트 인젝션·데이터 중독·모델 탈취 방어 (OWASP LLM Top 10, AI 가드레일)\n[Security by AI (방어 도구 = AI)] : AI 기반 이상징후 탐지(UEBA)·SOAR 자동 대응·악성코드 변종 탐지 (자율 SOC)",
    "tableRows": [
      {
        "category": "Security for AI",
        "sub": "AI 자체의 안전·보안",
        "desc": "학습 데이터 중독(Poisoning), 적대적 예제(Evasion), 프롬프트 인젝션, 모델 가중치 유출로부터 AI 파이프라인을 보호"
      },
      {
        "category": "",
        "sub": "핵심 구현 기술",
        "desc": "AI 가드레일, 적대적 학습, 연합학습·동형암호(프라이버시), AI-BOM 및 AI 레드팀(Red Teaming) 모의해킹"
      },
      {
        "category": "Security by AI",
        "sub": "AI를 활용한 사이버 방어",
        "desc": "급증하는 보안 로그와 신·변종 위협을 머신러닝·생성형 AI를 활용해 실시간 탐지·분석·자동 격리하는 기술"
      },
      {
        "category": "",
        "sub": "핵심 구현 기술",
        "desc": "AI 기반 SIEM/SOAR, 사용자 행위 분석(UEBA), XDR 위협 헌팅, 보안 코파일럿(Security Copilot) 플레이북 자동 생성"
      }
    ],
    "keywords": [
      "Security for AI",
      "Security by AI",
      "Attack by AI",
      "AI 가드레일",
      "AI-SOC(SOAR/XDR)",
      "UEBA"
    ],
    "differentiation": "[유형 C] 공격자의 'AI 악용(Attack by AI)'에 대응하는 자율 보안 관제(Autonomous SOC) 제언\n① 창과 방패의 대결: 공격자 또한 생성형 AI를 악용해 스피어 피싱 정교화, 제로데이 익스플로잇 자동 생성, 폴리모픽 악성코드를 양산(Attack by AI).\n② 기술사적 제언: 기업은 Security by AI(탐지 자동화)를 도입하는 동시에, 보안 AI 모델 자체가 중독·회피 공격에 무력화되지 않도록 Security for AI를 결합한 양방향 AI 보안 거버넌스를 구축해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "HNDL (선 수집 후 해독, Harvest Now Decrypt Later) 공격과 PQC 전환",
    "mnemonic": "현재 암호문 탈취·저장 → 미래 양자컴퓨터(Shor 알고리즘) 해독 / PQC(CRYSTALS-Kyber·Dilithium) · 하이브리드 TLS",
    "definition": "암호문을 미리 수집 후 미래 양자컴퓨터로 해독하는 위협",
    "diagramImg": "exam_q80.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 공격 메커니즘 | Harvest Now (선 수집) | 현재 TLS/VPN 등으로 암호화된 국가 기밀·금융·의료 트래픽을 해독하지 못한 채로 대량 가로채기하여 스토리지에 장기 보관 |\n| | Decrypt Later (후 해독) | 수년 내 암호학적 유의미한 양자컴퓨터(CRQC)가 등장하면 쇼어(Shor) 알고리즘으로 RSA·ECC 키를 단시간에 깨고 과거 기밀 해독 |\n| 위험 판단 기준 | 모스카(Mosca) 부등식 | X(데이터 기밀 유지 필요 기간) + Y(양자내성암호 전환 소요 기간) > Z(양자컴퓨터 도래 남은 시간) 이면 현재 이미 위험 상태 |\n| 핵심 대응 방안 | PQC 전환 & 암호 민첩성 | NIST 표준 양자내성암호(ML-KEM/Kyber, ML-DSA/Dilithium) 조기 적용, 하이브리드 키교환(ECDH+PQC) 및 암호 민첩성(Crypto Agility) 확보 |",
    "keywords": [
      "HNDL(SNDL)",
      "Shor 알고리즘",
      "모스카 정리(Mosca's Theorem)",
      "PQC(양자내성암호)",
      "ML-KEM(Kyber)",
      "암호 민첩성"
    ],
    "differentiation": "[유형 B] 왜 양자컴퓨터가 상용화되기 전인 '지금 당장' PQC를 도입해야 하는가 (모스카 정리)\n① 시차 리스크: 국방·외교·바이오 신약·장기 금융 데이터의 기밀 보존 연한(X=10~30년)과 전사 암호 알고리즘 교체 기간(Y=5~10년)의 합이 양자컴퓨터 등장 시점(Z)을 이미 초과했으므로 오늘 탈취된 암호문은 미래에 반드시 노출됨.\n② 즉시 대응: 기존 고전 암호와 PQC를 결합한 하이브리드 TLS 1.3(X25519Kyber768)을 키 교환 구간에 즉시 적용해 HNDL 위협을 원천 차단."
  },
  {
    "domain": "모의고사",
    "topic": "CTEM (지속적 위협 노출 관리, Continuous Threat Exposure Management)",
    "mnemonic": "범·발·우·검·동 (범위설정 → 발견 → 우선순위화 → 검증 → 가동/조치)",
    "definition": "공격자 관점에서 위협 노출을 상시 발굴·검증·조치 체계",
    "diagramImg": "exam_q81.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 1단계: 범위 설정 | Scoping | 비즈니스 핵심 자산, 클라우드, 공급망, 외부 노출 공격 표면(EASM) 등 관리 대상 범위를 정의 |\n| 2단계: 발견 | Discovery | 단순 CVE 취약점을 넘어 설정 오류, 과도한 권한, 시크릿 노출 등 모든 잠재적 위험 자산을 발굴 |\n| 3단계: 우선순위화 | Prioritization | CVSS 점수 나열이 아닌 실제 악용 가능성(EPSS), 공격 경로, 비즈니스 자산 가치를 결합해 최우선 조치 대상 선별 |\n| 4단계: 검증 | Validation | BAS(침해 및 공격 시뮬레이션) 및 자동화된 레드팀(CART) 도구로 실제 공격이 성공하는지 방어 체계 작동 여부 실증 |\n| 5단계: 가동 | Mobilization | 보안팀과 IT 운영·개발팀 간 티켓 연동 및 플레이북 워크플로우를 통해 신속한 패치·차단 조치 실행 |",
    "keywords": [
      "Gartner CTEM",
      "5단계 순환주기",
      "EASM",
      "EPSS(악용가능성)",
      "BAS(침해공격 시뮬레이션)",
      "선제적 위협관리"
    ],
    "differentiation": "[유형 A] 전통적 취약점 관리(VM: Vulnerability Management) vs CTEM 심층 비교\n① 전통적 VM의 한계: 분기/연 단위 정적 스캔으로 수만 개의 CVE 목록만 쏟아내어 패치 피로도만 높이고 정작 설정 오류나 복합 공격 경로는 놓침.\n② CTEM의 혁신: 실제 공격 가능성(Exploitability)과 BAS 실증 검증(Validation)을 결합해 전체 취약점 중 당장 패치해야 할 상위 1~2%의 치명적 노출에 역량을 집중."
  },
  {
    "domain": "모의고사",
    "topic": "섀도우 AI (Shadow AI) 위협과 엔터프라이즈 통제 방안",
    "mnemonic": "비승인 AI 무단사용 → 기밀/개인정보 유출 · 저작권/환각 리스크 → CASB/SWG 탐지 + 사내 안전한 AI 제공",
    "definition": "조직 통제 없이 임직원이 임의 사용해 기밀 유출 위협",
    "diagramImg": "exam_q82.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 발생 배경 | 현업 생산성 추구 | 임직원이 업무 효율(요약·번역·코딩)을 위해 보안 승인 없이 외부 퍼블릭 생성형 AI나 미검증 AI 플러그인을 무단 사용 |\n| 핵심 보안 위협 | 기밀·개인정보 유출 | 사내 소스코드, 재무 데이터, 고객 개인정보(PII)를 외부 LLM 프롬프트에 입력해 외부 모델 재학습 및 유출 사고 발생 |\n| | 환각·저작권·컴플라이언스 | 검증되지 않은 AI 출력물을 그대로 의사결정이나 고객 서비스에 반영해 법적 분쟁 및 개인정보보호법·AI 기본법 위반 |\n| 대응 및 거버넌스 | 가시성 확보 (CASB/DLP) | SWG(보안웹게이트웨이)·CASB·AI-SPM을 통해 사내망에서 접속하는 모든 외부 AI 도메인·API 트래픽 식별 및 DLP 마스킹 |\n| | 공인 Enterprise AI 제공 | 무조건적 차단은 우회(개인 단말 사용)를 낳으므로, 학습 미사용이 보장된 사내 전용 AI 포털 및 온프레미스 sLLM을 공식 제공 |",
    "keywords": [
      "Shadow AI",
      "비인가 AI",
      "프롬프트 기밀유출",
      "CASB / DLP",
      "AI 가드레일",
      "Enterprise AI 포털"
    ],
    "differentiation": "[유형 B] '무조건적 접속 차단'의 한계와 안전한 AI 활성화(Enablement) 거버넌스\n① 차단 일변도의 실패: 사내 방화벽에서 외부 AI 사이트만 막으면 임직원은 개인 스마트폰으로 화면을 촬영해 입력하는 등 오히려 통제 불가능한 음지화를 초래.\n② 당근과 채찍 전략: 데이터 비학습 계약이 맺어진 엔터프라이즈 LLM 게이트웨이(PII 자동 마스킹 가드레일 내장)를 현업에 공식 보급하고, 비인가 사이트만 CASB로 선별 통제."
  },
  {
    "domain": "모의고사",
    "topic": "PbD (설계 기반 개인정보보호, Privacy by Design) 7대 원칙과 8대 전략",
    "mnemonic": "7원칙(사전예방·기본값·내재화·긍정합·전주기·가시성·이용자중심) / 데이터(최소화·은닉·분리·집계) + 프로세스(통지·통제·준수·입증)",
    "definition": "시스템 설계 초기부터 개인정보보호 아키텍처 내재화 체계",
    "diagramImg": "exam_q83.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 카부키안 7대 원칙 | 사전예방 & 기본값 보호 | 사고 발생 후 사후 대응이 아닌 사전 예방(Proactive) 및 사용자 별도 조작 없이도 최고 수준 보호가 기본 설정(Privacy as Default) |\n| | 설계 내재화 & 긍정합 | 부가 기능이 아닌 핵심 아키텍처에 내재화(Embedded)하며, 보안과 비즈니스 기능을 모두 만족(Positive-Sum, Win-Win) |\n| | 전주기 보호 & 투명성·존중 | 수집~파기 전 생명주기 보호(End-to-End), 검증 가능한 투명성(Visibility) 보장 및 정보주체 권리 최우선(User-Centric) |\n| 홉만 8대 설계 전략 | 데이터 중심 전략 (4대) | 최소화(Minimize), 은닉(Hide: 암호화·익명화), 분리(Separate: 분산 저장), 집계(Aggregate: K-익명성·통계화) |\n| | 프로세스 중심 전략 (4대) | 통지(Inform: 투명 고지), 통제(Control: 동의·열람·삭제권), 강제(Enforce: 정책 준수), 입증(Demonstrate: 감사·PIA) |",
    "keywords": [
      "안 카부키안 7대 원칙",
      "Privacy as Default",
      "Positive-Sum",
      "홉만 8대 전략",
      "ISO/IEC 31700",
      "PIA 연계"
    ],
    "differentiation": "[유형 C] 생성형 AI 및 온디바이스 환경에서의 Privacy by Design(ISO/IEC 31700) 구현\n① AI 학습 단계의 잊혀질 권리 한계: 한 번 거대 모델 가중치에 학습된 개인정보는 사후에 특정인 정보만 삭제(Machine Unlearning)하기가 기술적으로 극도로 난해함.\n② 설계 단계 내재화: 수집 단계부터 개인정보 최소 수집 및 가명·익명처리(차분 프라이버시)를 강제하고, 민감 개인화 추론은 원본이 단말 밖으로 나가지 않는 온디바이스 AI 구조로 설계."
  },
  {
    "domain": "모의고사",
    "topic": "국가 망 보안체계 (N2SF, National Network Security Framework)",
    "mnemonic": "일률적 망분리 탈피 → 데이터 중요도 3등급(기밀 C · 민감 S · 공개 O) → 등급별 차등 다계층 보안통제(MLS)",
    "definition": "획일적 망분리 개선해 데이터 중요도별로 차등 보안 체계",
    "details": "[기존: 물리적 일률 망분리 (클라우드·AI 활용 불가)] ──전환──> [N2SF: 업무·정보 중요도 분류 (기밀 Classified · 민감 Sensitive · 공개 Open)]\n  └──────> [등급별 차등 보안통제 + 제로트러스트 + 영역 간 안전한 데이터 교류(CDS: Cross Domain Solution)]",
    "tableRows": [
      {
        "category": "전환 배경",
        "sub": "획일적 망분리 한계",
        "desc": "2006년 도입된 물리적 망분리로 인해 공공 부문의 SaaS 클라우드, 생성형 AI 활용 및 원격 협업이 가로막히는 한계 극복"
      },
      {
        "category": "데이터 3등급 분류",
        "sub": "기밀(C) · 민감(S) · 공개(O)",
        "desc": "국가안보·외교 등 핵심 기밀(Classified), 개인정보·내부 행정 등 민감(Sensitive), 대국민 공개 데이터(Open)로 세분화"
      },
      {
        "category": "차등 보안 통제",
        "sub": "등급별 유연한 연계",
        "desc": "C등급은 엄격한 격리 유지, S·O등급은 보안통제(제로트러스트·암호화·DLP) 하에 외부 클라우드·인터넷·생성형 AI 활용 허용"
      },
      {
        "category": "핵심 구현 기술",
        "sub": "CDS & 제로 트러스트",
        "desc": "서로 다른 보안 등급 영역 간 안전한 데이터 전송을 검증하는 CDS(영역간 보안통제) 및 신원·단말 지속 검증(ZTA)"
      }
    ],
    "keywords": [
      "N2SF",
      "망분리 개선",
      "C·S·O 3등급 분류",
      "다계층 보안(MLS)",
      "CDS(Cross Domain Solution)",
      "공공 AX/클라우드 활성화"
    ],
    "differentiation": "[유형 A] 기존 물리적 망분리 vs 국가 망 보안체계(N2SF) 비교\n① 기존 망분리: 데이터 가치와 무관하게 업무망과 인터넷망을 물리적으로 이분법 차단(경계 중심 보안).\n② N2SF: '데이터 중요도 중심 보안'으로 패러다임을 전환하여, 공개(O)·민감(S) 영역에서 상용 LLM과 SaaS를 안전하게 활용할 수 있는 기술적 통로(CDS·가드레일)를 열어줌."
  },
  {
    "domain": "모의고사",
    "topic": "디지털 포렌식 (Digital Forensics) 원칙과 절차",
    "mnemonic": "5대원칙(정·재·신·연·무) / 사·수·전·분·보 (사전준비→수집→전송/보관→분석→보고서)",
    "definition": "디지털 증거 법적 효력 확보 위한 과학적 수집·분석법",
    "details": "[5대 원칙] 정당성(적법절차) · 재현성(동일결과) · 신속성(휘발성 우선) · 연계보관성(Chain of Custody) · 무결성(해시값 일치)\n[수행 절차] 사전준비 ──> 현장 증거수집(휘발성 순서 OOV) ──> 포장·이송·보관 ──> 이미징·복구·분석 ──> 감정서(보고서) 작성",
    "tableRows": [
      {
        "category": "법적 5대 원칙",
        "sub": "정당성 & 무결성",
        "desc": "적법한 영장·절차에 따른 수집(독수독과 배제) 및 원본과 사본의 해시값(SHA-256) 일치로 위변조 없음 증명"
      },
      {
        "category": "",
        "sub": "연계보관성·재현성·신속성",
        "desc": "수집~법정 제출 전 과정 담당자·이력 기록(Chain of Custody), 동일 조건 동일 결과 재현, 휘발성 증거 신속 확보"
      },
      {
        "category": "휘발성 수집 순서",
        "sub": "RFC 3227 (OOV)",
        "desc": "CPU 레지스터·캐시 → RAM 메모리·라우팅 테이블·프로세스 → 임시 파일시스템 → 디스크(SSD/HDD) → 원격 로그·아카이브"
      },
      {
        "category": "핵심 분석 기법",
        "sub": "이미징 & 안티포렌식 대응",
        "desc": "쓰기방지장치(Write Blocker) 연결 후 비트스트림 복제, 삭제 파일 카빙(Carving), 타임라인·레지스트리·메모리 덤프 분석"
      }
    ],
    "keywords": [
      "증거능력(Admissibility)",
      "정재신연무(5대원칙)",
      "연계보관성(Chain of Custody)",
      "RFC 3227 휘발성",
      "Write Blocker",
      "클라우드 포렌식"
    ],
    "differentiation": "[유형 B] 클라우드·컨테이너 및 SSD(TRIM) 환경에서의 포렌식 한계와 극복 방안\n① 현대 인프라 난제: SSD는 자체 TRIM·가비지컬렉션으로 삭제 데이터를 즉시 0으로 초기화하며, 클라우드 컨테이너는 장애 시 즉시 소멸해 사후 디스크 압수가 불가능.\n② Forensic Readiness(포렌식 준비도): 침해 발생 전 평시부터 EDR/XDR 에이전트와 불변(Immutable) 원격 중앙 로그·메모리 스냅샷 파이프라인을 구축해 휘발성 증거를 상시 보존해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "접근제어 정책(DAC · MAC · RBAC · ABAC) 및 AAA 절차",
    "mnemonic": "식별→인증→인가→책임추적성 / DAC(소유자) · MAC(보안등급·벨/비바) · RBAC(역할) · ABAC(속성·맥락)",
    "definition": "인증된 주체에게 보안 정책에 따라 자원 권한 부여 체계",
    "details": "[절차] 식별(ID) ──> 인증(Authentication) ──> 인가/접근제어(Authorization: PDP/PEP) ──> 책임추적성(Accounting/Audit)\n[정책 진화] DAC(신원/소유자 중심) ──> MAC(군사 등급/레이블) ──> RBAC(직무 역할) ──> ABAC / PBAC(실시간 다중 속성·제로트러스트)",
    "tableRows": [
      {
        "category": "접근제어 절차",
        "sub": "식별 · 인증 · 인가 · 감사",
        "desc": "주체 식별(ID) → 본인 증명(MFA) → 권한 결정 및 집행(Authorization) → 행위 로깅 및 책임추적(Accounting)"
      },
      {
        "category": "전통적 정책",
        "sub": "DAC (임의적 접근제어)",
        "desc": "자원 소유자가 임의로 권한 부여(ACL), 유연하나 권한 양도 시 트로이목마에 취약"
      },
      {
        "category": "",
        "sub": "MAC (강제적 접근제어)",
        "desc": "주체 보안등급과 객체 보안레이블을 비교해 중앙에서 강제 통제 (Bell-LaPadula: 기밀성, Biba: 무결성 모델)"
      },
      {
        "category": "현대적 정책",
        "sub": "RBAC (역할 기반)",
        "desc": "사용자와 권한 사이에 직무 역할(Role)을 매개하여 인사 이동 시 관리 복잡도 대폭 절감 및 최소권한·직무분리(SoD) 구현"
      },
      {
        "category": "",
        "sub": "ABAC (속성 기반)",
        "desc": "주체·객체·행위·환경(접속 시간·위치·단말 보안상태·위험도) 속성을 종합 평가해 동적으로 접근을 결정"
      }
    ],
    "keywords": [
      "DAC / MAC / RBAC / ABAC",
      "Bell-LaPadula / Biba",
      "최소권한 원칙",
      "직무분리(SoD)",
      "XACML(PDP/PEP)",
      "제로트러스트"
    ],
    "differentiation": "[유형 A] 정적 RBAC의 역할 폭발(Role Explosion) 한계와 동적 ABAC/ReBAC(관계 기반) 결합\n① RBAC의 한계: 클라우드·마이크로서비스 환경에서 부서·지역·시간·데이터 등급 조합마다 역할을 만들면 수천 개의 역할 폭발(Role Explosion)이 발생.\n② 하이브리드 접근제어: 기본적인 직무 권한은 RBAC으로 부여하고, 접속 시간·단말 상태·문서 소유 관계(ReBAC, Google Zanzibar 모델)를 ABAC 정책 엔진(OPA)으로 실시간 평가."
  },
  {
    "domain": "모의고사",
    "topic": "PET (개인정보 강화 기술, Privacy-Enhancing Technologies)",
    "mnemonic": "데이터 변형(가명·익명·차분프라이버시·합성데이터) + 연산·아키텍처 보호(동형암호·연합학습·다자간연산·영지식증명·TEE)",
    "definition": "개인정보 노출 없이 데이터 분석과 AI 학습 지원 기술",
    "details": "[데이터 중심 PET: K-익명성·L-다양성·T-근접성 | 차분 프라이버시(노이즈 주입) | 재현 합성데이터]\n[연산·분산 중심 PET: 동형암호(암호상태 연산) | 연합학습(가중치만 공유) | 다자간안전연산(SMPC) | 영지식증명(ZKP) | 하드웨어 TEE]",
    "tableRows": [
      {
        "category": "통계·데이터 변형형",
        "sub": "프라이버시 보호 모델",
        "desc": "K-익명성(동질집단 K개 이상), L-다양성(민감속성 L개 이상), T-근접성(민감속성 분포 차이 T 이하)으로 재식별 차단"
      },
      {
        "category": "",
        "sub": "차분 프라이버시 & 합성데이터",
        "desc": "수학적 라플라스 노이즈를 추가해 특정 개인 포함 여부를 알 수 없게 보장(DP) 및 통계 특성만 모사한 가상 합성데이터 생성"
      },
      {
        "category": "암호·연산 보호형",
        "sub": "동형암호 (HE) & SMPC",
        "desc": "복호화 없이 암호문 상태에서 직접 덧셈·곱셈 연산 수행(FHE) 및 다수 기관이 원본 공개 없이 공동 연산(SMPC)"
      },
      {
        "category": "",
        "sub": "영지식증명 (ZKP)",
        "desc": "증명자가 자신이 알고 있는 비밀 정보(원본)를 전혀 노출하지 않고도 그 명제가 참임을 검증자에게 수학적으로 증명"
      },
      {
        "category": "분산·하드웨어형",
        "sub": "연합학습 (FL) & TEE",
        "desc": "원본 데이터는 로컬에 두고 모델 가중치만 중앙 서버에서 집계(FL) 및 CPU 내 격리된 보안 영역(Enclave/TEE)에서 연산"
      }
    ],
    "keywords": [
      "PET",
      "차분 프라이버시(DP)",
      "동형암호(FHE)",
      "연합학습(FL)",
      "다자간안전연산(SMPC)",
      "영지식증명(ZKP)",
      "합성데이터"
    ],
    "differentiation": "[유형 B] 단일 PET 기술의 한계(연산 오버헤드·재구성 공격)와 복합 PET 결합 아키텍처\n① 단일 기술 한계: 연합학습(FL)만 적용할 경우 공유되는 기울기(Gradient) 값을 역추적해 원본 이미지를 복원하는 공격(Gradient Inversion)에 취약하며, 순수 동형암호(FHE)는 연산 속도가 수천 배 느림.\n② 복합 PET 결합: 연합학습에 차분 프라이버시(노이즈 주입)와 보안 집계(SMPC/TEE)를 결합하여 프라이버시-유용성-연산성능 트레이드오프를 최적화."
  },
  {
    "domain": "모의고사",
    "topic": "비인간 신원 (NHI, Non-Human Identity) 보안과 OWASP NHI Top 10",
    "mnemonic": "API키·서비스계정·토큰·봇·AI에이전트 / 인간신원 대비 10~50배 / 과도한권한·미회전·하드코딩",
    "definition": "API키·서비스계정 등 기계 신원 자격증명을 관리 체계",
    "details": "[NHI 주체: 마이크로서비스 계정 · CI/CD 러너 · RPA 봇 · AI 에이전트] + [시크릿: API Key · OAuth 토큰 · SSH 키 · 인증서]\n  * 핵심 위협(OWASP NHI Top 10): 부적절한 폐기(Offboarding 미비) · 시크릿 하드코딩 노출 · 과도한 권한 · 장기 미회전(No Rotation)",
    "tableRows": [
      {
        "category": "NHI 개념 및 급증",
        "sub": "기계 간(M2M) 신원 폭발",
        "desc": "인간 사용자가 아닌 애플리케이션·컨테이너·CI/CD 파이프라인·AI 에이전트가 통신에 사용하는 디지털 신원 (인간 대비 20~50배 규모)"
      },
      {
        "category": "OWASP NHI 위협",
        "sub": "부적절한 수명주기·폐기",
        "desc": "생성 후 관리자가 잊어버린 좀비 서비스 계정(Orphaned NHI) 및 퇴사자·종료 프로젝트 미회수 API 키 방치"
      },
      {
        "category": "",
        "sub": "시크릿 유출 & 과도한 권한",
        "desc": "Git 저장소/컨테이너 이미지 내 API 키 하드코딩 노출 및 만능 관리자 권한 부여로 침해 시 측면 이동(Lateral Movement) 경로 제공"
      },
      {
        "category": "보안 대응 체계",
        "sub": "시크릿 볼트 & 단기 토큰",
        "desc": "고정된 장기 API 키를 폐지하고 단기 동적 토큰(OIDC/SPIFFE·SPIRE, Workload Identity Federation) 및 자동 회전(Auto-Rotation) 적용"
      }
    ],
    "keywords": [
      "Non-Human Identity",
      "OWASP NHI Top 10",
      "시크릿 관리(Vault)",
      "SPIFFE/SPIRE",
      "Workload Identity",
      "자동 회전"
    ],
    "differentiation": "[유형 A] 인간 신원 관리(IAM) vs 비인간 신원 관리(NHI Governance) 비교\n① IAM의 사각지대: 인간 계정은 MFA(생체·OTP)와 인사 시스템(HR) 연동 퇴사 처리가 잘 되어 있으나, NHI는 MFA 적용이 불가능하고 개발자가 임의 생성해 보안팀 가시성 밖에 방치됨.\n② Secretless 아키텍처 전환: 코드 내에 정적 API Key를 저장하는 방식을 전면 금지하고, 클라우드 워크로드 ID 연합(OIDC)을 통해 수분 단위로 만료되는 임시 자격증명만 발급."
  },
  {
    "domain": "모의고사",
    "topic": "개인정보 영향평가 (PIA, Privacy Impact Assessment)",
    "mnemonic": "의무대상(공공機関 · 5만민감/고유 · 50만연계 · 100만전체) / 사전준비 → 평가수행 → 이행점검",
    "definition": "대규모 개인정보 운용 전 침해 위험을 사전 분석 제도",
    "diagramImg": "exam_q89.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 법적 근거·주체 | 개인정보보호법 제33조 | 공공기관이 일정 기준 이상의 개인정보 파일을 구축·운용·변경하려는 경우 지정 평가기관을 통해 의무 수행 후 개보위 제출 |\n| 3대 의무 대상 기준 | 5만 명 (민감·고유식별) | 민감정보(건강·사상·유전 등) 또는 고유식별정보(주민·여권·운전면허·외국인등록번호) 처리 정보주체 수가 5만 명 이상 |\n| | 50만 명 (타 시스템 연계) | 공공기관 내부 또는 외부 타 시스템과 개인정보 파일을 연계한 결과 정보주체 수가 50만 명 이상 |\n| | 100만 명 (전체 정보주체) | 구축·운용하려는 개인정보 파일의 전체 정보주체 수가 100만 명 이상인 시스템 (기존 시스템 중대 변경 포함) |\n| 수행 3단계 절차 | 사전준비 → 수행 → 이행점검 | 사업계획 단계 예산 확보·평가기관 선정 → 설계 완료 전 침해요인 분석·개선계획 수립 → 구축 완료 후 이행점검 확인 |",
    "keywords": [
      "개인정보보호법 제33조",
      "5만·50만·100만 기준",
      "고유식별정보·민감정보",
      "설계 완료 전 수행",
      "이행점검",
      "PbD 구현"
    ],
    "differentiation": "[유형 B] PIA 수행 시점의 실무 중요성(설계 단계 반영)과 개선조치 이행 관리\n① 시점 원칙(Privacy by Design): 시스템 구현이 끝난 뒤에 PIA를 수행하면 암호화·DB 분리 등 아키텍처 재설계 비용이 폭증하므로 반드시 '분석·설계 완료 전'에 수행하여 설계서에 반영해야 함.\n② 사후 실효성: 영향평가서 제출로 끝나는 것이 아니라 개통 전 감리 및 이행점검을 통해 도출된 개선계획이 100% 실제 코드와 인프라에 구현되었는지 검증 필수."
  },
  {
    "domain": "모의고사",
    "topic": "제로 트러스트 (Zero Trust Architecture, NIST SP 800-207)",
    "mnemonic": "Never Trust, Always Verify / PE(정책엔진) + PA(정책관리자) + PEP(정책집행점) / 7대 핵심원칙",
    "definition": "암묵적 신뢰를 배제하고 모든 접근을 지속 검증하는 구조",
    "details": "[Control Plane: PDP = PE(Policy Engine: 위험도/맥락 평가) + PA(Policy Administrator: 세션 토큰 발급)]\n       │ (승인/차단 명령)   ^── 지속적 위협정보·단말상태·ID·규칙(CDM·SIEM·PKI·ID관리)\n[Data Plane: Subject(사용자/단말)] ──> [PEP (Policy Enforcement Point: 게이트웨이/에이전트)] ──> [Enterprise Resource(리소스 단위 마이크로격리)]",
    "tableRows": [
      {
        "category": "핵심 철학",
        "sub": "경계 보안에서 자원 보안으로",
        "desc": "사내망이라도 절대 신뢰하지 않으며(Never Trust, Always Verify), 네트워크 위치가 아닌 신원·단말·맥락 기반으로 세션별 최소 권한 부여"
      },
      {
        "category": "논리적 3대 요소",
        "sub": "PE (Policy Engine)",
        "desc": "신뢰 알고리즘(Trust Algorithm)을 통해 사용자 신원, 단말 무결성, 접속 시간/위치, 행위 점수를 종합 평가해 접근 허용 여부 최종 결정"
      },
      {
        "category": "",
        "sub": "PA (Policy Administrator)",
        "desc": "PE의 결정에 따라 주체와 리소스 간의 통신 세션을 생성하거나 차단 명령을 PEP에 전달 (PE + PA = PDP)"
      },
      {
        "category": "",
        "sub": "PEP (Policy Enforcement)",
        "desc": "데이터 평면에서 주체와 기업 리소스 간의 실제 연결을 활성화·모니터링·강제 종료하는 관문"
      },
      {
        "category": "구현 모델",
        "sub": "EIG · 마이크로세그멘테이션 · SDP",
        "desc": "ID 기반 거버넌스(EIG), 워크로드 단위 초미세 망분리(Micro-segmentation), 소프트웨어 정의 경계(SDP) 조합"
      }
    ],
    "keywords": [
      "NIST SP 800-207",
      "Never Trust Always Verify",
      "PE / PA / PEP",
      "Micro-segmentation",
      "SDP",
      "국가 제로트러스트 가이드라인 2.0"
    ],
    "differentiation": "[유형 B] 레거시 엔터프라이즈/공공 환경에서 제로 트러스트 도입 시 고려사항 및 성숙도 전략\n① 일괄 전환 불가: 기존 VPN·방화벽과 구형 레거시 앱은 최신 OIDC/PEP 연동을 직접 지원하지 않음.\n② 단계적 성숙도 이행: 과기정통부 가이드라인의 6대 핵심 요소(식별자·기기·네트워크·시스템·애플리케이션·데이터)별로 현재 성숙도(기존→초기→향상→최적화)를 진단하고, 리버스 프록시형 PEP와 ZTNA부터 점진 적용."
  },
  {
    "domain": "모의고사",
    "topic": "크리덴셜 스터핑 (Credential Stuffing) 공격과 방어",
    "mnemonic": "스터핑(유출 계정쌍 타사이트 대량 대입) vs 무차별대입(조합 생성) / 회복탄력성(예·견·회·적: 예측·저항·회복·적응)",
    "definition": "유출된 계정정보를 타 사이트에 자동 대입해 탈취 공격",
    "diagramImg": "exam_q91.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 크리덴셜 스터핑 | 유출 계정 재사용 공격 | 다크웹 등에서 이미 유출된 ID/PW 쌍 목록을 봇넷으로 타 사이트에 무작위 대량 대입해 사용자의 비밀번호 재사용 습관을 악용 |\n| 무차별 대입과 비교 | Brute Force vs Stuffing | 무차별 대입은 특정 1개 계정에 수만 개 비밀번호 조합을 시도(계정 잠금에 막힘)하나, 스터핑은 수만 개 서로 다른 계정에 1회씩 시도해 잠금 우회 |\n| 스터핑 방어 대책 | MFA · 패스키(FIDO) · 봇차단 | 다중인증(MFA)·FIDO2 패스키 도입, 유출 비밀번호 DB 대조 차단, WAF/Bot Manager 행위 분석 및 비정상 IP Rate Limiting |\n| 사이버 회복탄력성 | Cyber Resilience (NIST) | 공격을 100% 막는다는 환상(Assume Breach)에서 벗어나 침해 발생 시에도 비즈니스 핵심 기능을 유지·신속 복구·진화하는 역량 |\n| | 4대 핵심 목표 (예·견·회·적) | Anticipate(위협 사전 예측) → Withstand(공격 중에도 핵심 서비스 견딤) → Recover(신속 복구) → Adapt(사후 아키텍처 적응·개선) |",
    "keywords": [
      "Credential Stuffing",
      "Brute Force 비교",
      "비밀번호 재사용",
      "FIDO2 Passkey",
      "Cyber Resilience",
      "NIST SP 800-160",
      "Assume Breach"
    ],
    "differentiation": "[유형 A] 전통적 사이버 보안(Cybersecurity) vs 사이버 회복탄력성(Cyber Resilience) 비교\n① 관점 전환: 전통 보안은 성벽을 높여 '침투 자체를 실패시키는 것(Fail-Safe)'에 집중하나, 회복탄력성은 '적이 이미 내부에 침투했다(Assume Breach)'는 전제 하에 피해 확산 차단(Micro-segmentation)과 불변 백업(Immutable Backup) 기반 생존(Safe-to-Fail)에 집중."
  },
  {
    "domain": "모의고사",
    "topic": "사이버 회복탄력성 (Cyber Resilience)",
    "mnemonic": "스터핑(유출 계정쌍 타사이트 대량 대입) vs 무차별대입(조합 생성) / 회복탄력성(예·견·회·적: 예측·저항·회복·적응)",
    "definition": "사이버 침해 시에도 핵심 업무 유지하고 신속 복구 역량",
    "diagramImg": "exam_q91_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 크리덴셜 스터핑 | 유출 계정 재사용 공격 | 다크웹 등에서 이미 유출된 ID/PW 쌍 목록을 봇넷으로 타 사이트에 무작위 대량 대입해 사용자의 비밀번호 재사용 습관을 악용 |\n| 무차별 대입과 비교 | Brute Force vs Stuffing | 무차별 대입은 특정 1개 계정에 수만 개 비밀번호 조합을 시도(계정 잠금에 막힘)하나, 스터핑은 수만 개 서로 다른 계정에 1회씩 시도해 잠금 우회 |\n| 스터핑 방어 대책 | MFA · 패스키(FIDO) · 봇차단 | 다중인증(MFA)·FIDO2 패스키 도입, 유출 비밀번호 DB 대조 차단, WAF/Bot Manager 행위 분석 및 비정상 IP Rate Limiting |\n| 사이버 회복탄력성 | Cyber Resilience (NIST) | 공격을 100% 막는다는 환상(Assume Breach)에서 벗어나 침해 발생 시에도 비즈니스 핵심 기능을 유지·신속 복구·진화하는 역량 |\n| | 4대 핵심 목표 (예·견·회·적) | Anticipate(위협 사전 예측) → Withstand(공격 중에도 핵심 서비스 견딤) → Recover(신속 복구) → Adapt(사후 아키텍처 적응·개선) |",
    "keywords": [
      "Credential Stuffing",
      "Brute Force 비교",
      "비밀번호 재사용",
      "FIDO2 Passkey",
      "Cyber Resilience",
      "NIST SP 800-160",
      "Assume Breach"
    ],
    "differentiation": "[유형 A] 전통적 사이버 보안(Cybersecurity) vs 사이버 회복탄력성(Cyber Resilience) 비교\n① 관점 전환: 전통 보안은 성벽을 높여 '침투 자체를 실패시키는 것(Fail-Safe)'에 집중하나, 회복탄력성은 '적이 이미 내부에 침투했다(Assume Breach)'는 전제 하에 피해 확산 차단(Micro-segmentation)과 불변 백업(Immutable Backup) 기반 생존(Safe-to-Fail)에 집중."
  },
  {
    "domain": "모의고사",
    "topic": "MCP (Model Context Protocol) 보안 취약점과 대응 방안",
    "mnemonic": "Host-Client-Server 구조 / 툴 포이즈닝(Tool Poisoning) · 러그풀(Rug Pull) · 권한탈취 · 간접인젝션",
    "definition": "LLM과 외부 도구 연결 MCP 환경 취약점 방어 체계",
    "details": "[MCP Host(AI 앱/IDE)] ──(MCP Client)──> [MCP Server (로컬/원격 도구·DB·API 연결)]\n  * 핵심 위협: Tool Poisoning(도구 설명 내 숨겨진 프롬프트 인젝션) · Rug Pull(승인 후 악성 코드로 변조) · 과도한 토큰/자격증명 탈취",
    "tableRows": [
      {
        "category": "MCP 아키텍처",
        "sub": "AI계의 USB-C 표준",
        "desc": "LLM 애플리케이션(Host/Client)이 외부 데이터 소스(Resources)와 실행 도구(Tools)에 표준 JSON-RPC로 연결하는 개방형 프로토콜"
      },
      {
        "category": "주요 보안 취약점",
        "sub": "툴 포이즈닝 & 간접 인젝션",
        "desc": "MCP 서버의 도구 설명(Description)이나 반환 데이터에 악성 지시문을 숨겨 LLM이 기밀 파일을 외부로 전송하도록 조작"
      },
      {
        "category": "",
        "sub": "러그 풀 (Rug Pull) & 공급망",
        "desc": "초기 설치 시에는 정상 도구처럼 동작하다가 원격 업데이트로 악성 명령(RCE)을 실행하거나 다른 정상 도구를 하이재킹(Shadowing)"
      },
      {
        "category": "",
        "sub": "인증·권한 관리 부재",
        "desc": "로컬 MCP 서버에 평문 API Key 저장, 세션 ID 탈취 및 과도한 OS 파일시스템/DB 권한 부여로 인한 침해"
      },
      {
        "category": "핵심 대응 방안",
        "sub": "제로트러스트 MCP 게이트웨이",
        "desc": "검증·서명된 사내 공식 MCP 레지스트리만 허용, 컨테이너 샌드박스 격리 실행, OAuth 2.1 최소권한 및 민감 도구 실행 시 사용자 명시적 승인(HITL)"
      }
    ],
    "keywords": [
      "Model Context Protocol",
      "Tool Poisoning",
      "Rug Pull",
      "Shadowing",
      "샌드박스 격리",
      "MCP Gateway",
      "Human-in-the-Loop"
    ],
    "differentiation": "[유형 C] 기업 내 무분별한 오픈소스 MCP 서버 연결 차단과 엔터프라이즈 MCP 보안 거버넌스\n① 에이전틱 AI의 최대 공격 표면: 개발자나 현업이 검증되지 않은 서드파티 MCP 서버를 로컬 PC에 연결하는 순간 사내 DB와 클라우드 자격증명이 외부로 열리게 됨.\n② 중앙 MCP 게이트웨이 아키텍처: 모든 MCP 도구 호출은 중앙 게이트웨이를 경유시켜 입출력 프롬프트 가드레일 검열, 도구 스키마 해시 고정(Pinning), 감사 로깅을 강제해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "식별 (Identification)과 개인식별정보 보호",
    "mnemonic": "식별(누구인지 주장 ID) vs 인증(진짜 본인인지 증명) / 지·소·생·행 (Type 1~4) / FAR·FRR·CER",
    "definition": "보안 도메인 내에서 특정 주체의 고유 신원을 주장 절차",
    "diagramImg": "exam_q93.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 식별 vs 인증 | Identification (식별) | 시스템에 자신이 누구인지 신원을 밝히고 주장하는 단계 (유일성·비기밀성·변경불가성: 사번, 계정 ID, 이메일) |\n| | Authentication (인증) | 주장한 신원이 실제 본인이 맞는지 자격증명으로 입증하는 단계 (보안성·재사용 방지·상호인증) |\n| 4대 인증 요소 | Type 1 지식 (Something you know) | 본인이 알고 있는 정보 (비밀번호, PIN, 보안질문) — 구현 비용 낮으나 유출·망각·추측 공격에 취약 |\n| | Type 2 소유 (Something you have) | 본인이 소지한 매체 (OTP 토큰, 스마트카드, USIM, 모바일 인증서) — 복제 어려우나 분실·도난 위험 |\n| | Type 3 생체 · Type 4 행위 | 고유 신체 특징(지문·홍채·안면) 및 행동 패턴(서명 압력·키스트로크 리듬·보행걸음걸이·접속위치 맥락) |\n| 도입 고려사항 | 보안성 · 사용성 · 적합성 | 업무 위험도에 따른 다중인증(MFA: 서로 다른 Type 2개 이상 결합), 생체 FAR/FRR 임계치 조정, FIDO2 패스키 전환 |",
    "keywords": [
      "Identification vs Authentication",
      "지식·소유·생체·행위(Type 1~4)",
      "MFA(다중인증)",
      "FAR / FRR / CER",
      "FIDO2 / Passkey",
      "지속적 인증"
    ],
    "differentiation": "[유형 B] 동일 유형 결합(2단계 인증)과 이기종 유형 결합(진정한 MFA)의 보안성 차이\n① 잘못된 MFA 구성: 비밀번호(Type 1) 입력 후 보안질문/PIN 번호(Type 1)를 또 묻는 것은 지식 요소만 2번 쓰는 것이라 피싱·키로거 한 번에 동시 탈취됨.\n② FIDO2 패스키 & 지속적 적응형 인증(CAA): 반드시 서로 다른 유형(예: 소유 단말의 개인키 + 생체인증 = FIDO2)을 결합하고, 로그인 이후에도 행위(Type 4) 위험도를 실시간 분석해 재인증을 요구하는 지속적 인증 적용."
  },
  {
    "domain": "모의고사",
    "topic": "사용자 인증 (Authentication) 4대 유형",
    "mnemonic": "식별(누구인지 주장 ID) vs 인증(진짜 본인인지 증명) / 지·소·생·행 (Type 1~4) / FAR·FRR·CER",
    "definition": "주장 신원이 본인임을 지식·소유·생체·행위로 검증 기술",
    "diagramImg": "exam_q93_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 식별 vs 인증 | Identification (식별) | 시스템에 자신이 누구인지 신원을 밝히고 주장하는 단계 (유일성·비기밀성·변경불가성: 사번, 계정 ID, 이메일) |\n| | Authentication (인증) | 주장한 신원이 실제 본인이 맞는지 자격증명으로 입증하는 단계 (보안성·재사용 방지·상호인증) |\n| 4대 인증 요소 | Type 1 지식 (Something you know) | 본인이 알고 있는 정보 (비밀번호, PIN, 보안질문) — 구현 비용 낮으나 유출·망각·추측 공격에 취약 |\n| | Type 2 소유 (Something you have) | 본인이 소지한 매체 (OTP 토큰, 스마트카드, USIM, 모바일 인증서) — 복제 어려우나 분실·도난 위험 |\n| | Type 3 생체 · Type 4 행위 | 고유 신체 특징(지문·홍채·안면) 및 행동 패턴(서명 압력·키스트로크 리듬·보행걸음걸이·접속위치 맥락) |\n| 도입 고려사항 | 보안성 · 사용성 · 적합성 | 업무 위험도에 따른 다중인증(MFA: 서로 다른 Type 2개 이상 결합), 생체 FAR/FRR 임계치 조정, FIDO2 패스키 전환 |",
    "keywords": [
      "Identification vs Authentication",
      "지식·소유·생체·행위(Type 1~4)",
      "MFA(다중인증)",
      "FAR / FRR / CER",
      "FIDO2 / Passkey",
      "지속적 인증"
    ],
    "differentiation": "[유형 B] 동일 유형 결합(2단계 인증)과 이기종 유형 결합(진정한 MFA)의 보안성 차이\n① 잘못된 MFA 구성: 비밀번호(Type 1) 입력 후 보안질문/PIN 번호(Type 1)를 또 묻는 것은 지식 요소만 2번 쓰는 것이라 피싱·키로거 한 번에 동시 탈취됨.\n② FIDO2 패스키 & 지속적 적응형 인증(CAA): 반드시 서로 다른 유형(예: 소유 단말의 개인키 + 생체인증 = FIDO2)을 결합하고, 로그인 이후에도 행위(Type 4) 위험도를 실시간 분석해 재인증을 요구하는 지속적 인증 적용."
  },
  {
    "domain": "모의고사",
    "topic": "대칭키 암호와 공개키 암호 (하이브리드 암호 체계)",
    "mnemonic": "혼돈(Confusion)·확산(Diffusion) / COA·KPA·CPA·CCA / 대칭키(AES·속도) vs 공개키(RSA/ECC·키배송) → PQC(격자기반)",
    "definition": "고속 대칭키와 키교환 공개키 암호를 결합한 보안 체계",
    "details": "[섀넌 원리: 혼돈(대치 S-Box) + 확산(치환 P-Box)]  |  [공격 강도: COA(암호문만) < KPA(알려진평문) < CPA(선택평문) < CCA(선택암호문)]\n[하이브리드 암호 시스템] 대칭키(고속 데이터 암호화: AES/ARIA) + 공개키(안전한 대칭키 교환·전자서명: RSA/ECC ──양자위협──> PQC 격자기반 대체)",
    "tableRows": [
      {
        "category": "암호화 원리 & 공격",
        "sub": "혼돈(Confusion) · 확산(Diffusion)",
        "desc": "클로드 섀넌의 설계 원리: 암호문과 키의 관계를 숨기는 혼돈(대치) 및 평문 1비트 변화를 암호문 전체로 퍼뜨리는 확산(치환)"
      },
      {
        "category": "",
        "sub": "암호분석 공격 4유형",
        "desc": "암호문 단독(COA) → 기지 평문(KPA) → 선택 평문(CPA) → 선택 암호문 공격(CCA, 가장 강력한 공격자 가정)"
      },
      {
        "category": "키 개수에 따른 비교",
        "sub": "대칭키(비밀키) 암호",
        "desc": "암·복호화 키 동일 (AES, ARIA, SEED, LEA) — 연산 속도가 매우 빨라 대용량 데이터 암호화에 쓰이나 키 분배(n(n-1)/2)와 부인방지 불가"
      },
      {
        "category": "",
        "sub": "공개키(비대칭키) 암호",
        "desc": "공개키와 개인키 쌍 분리 (RSA: 소인수분해, ECC: 타원곡선 이산대수) — 키 분배 및 전자서명(부인방지) 해결하나 연산 속도가 느림"
      },
      {
        "category": "양자 위기와 PQC",
        "sub": "양자내성암호 (PQC)",
        "desc": "양자컴퓨터 Shor 알고리즘에 깨지는 RSA/ECC를 대체하기 위해 격자(Lattice: ML-KEM, ML-DSA), 해시(SLH-DSA), 코드 기반 난제 활용"
      }
    ],
    "keywords": [
      "혼돈과 확산",
      "케르크호프스의 원리",
      "COA/KPA/CPA/CCA",
      "대칭키 vs 공개키",
      "하이브리드 암호(봉투)",
      "PQC(양자내성암호)"
    ],
    "differentiation": "[유형 A] 양자컴퓨터가 대칭키 암호(AES)와 공개키 암호(RSA/ECC)에 미치는 영향 차이\n① 공개키 암호(RSA/ECC) 붕괴: 쇼어(Shor) 알고리즘에 의해 지수 시간 난제가 다항 시간으로 풀려 완전히 무력화됨 → 반드시 PQC(격자 기반 등)로 알고리즘 자체를 교체해야 함.\n② 대칭키(AES) 및 해시(SHA): 그로버(Grover) 알고리즘에 의해 탐색 복잡도가 √N으로만 줄어들므로, 키 길이를 2배(AES-128 → AES-256, SHA-256 → SHA-384/512)로 늘리는 것만으로 양자 내성 확보 가능."
  },
  {
    "domain": "모의고사",
    "topic": "암호문 공격 유형 (COA·KPA·CPA·CCA)과 양자내성암호",
    "mnemonic": "혼돈(Confusion)·확산(Diffusion) / COA·KPA·CPA·CCA / 대칭키(AES·속도) vs 공개키(RSA/ECC·키배송) → PQC(격자기반)",
    "definition": "공격자 확보 정보에 따른 해독 위협 분류와 양자내성암호",
    "details": "[섀넌 원리: 혼돈(대치 S-Box) + 확산(치환 P-Box)]  |  [공격 강도: COA(암호문만) < KPA(알려진평문) < CPA(선택평문) < CCA(선택암호문)]\n[하이브리드 암호 시스템] 대칭키(고속 데이터 암호화: AES/ARIA) + 공개키(안전한 대칭키 교환·전자서명: RSA/ECC ──양자위협──> PQC 격자기반 대체)",
    "tableRows": [
      {
        "category": "암호화 원리 & 공격",
        "sub": "혼돈(Confusion) · 확산(Diffusion)",
        "desc": "클로드 섀넌의 설계 원리: 암호문과 키의 관계를 숨기는 혼돈(대치) 및 평문 1비트 변화를 암호문 전체로 퍼뜨리는 확산(치환)"
      },
      {
        "category": "",
        "sub": "암호분석 공격 4유형",
        "desc": "암호문 단독(COA) → 기지 평문(KPA) → 선택 평문(CPA) → 선택 암호문 공격(CCA, 가장 강력한 공격자 가정)"
      },
      {
        "category": "키 개수에 따른 비교",
        "sub": "대칭키(비밀키) 암호",
        "desc": "암·복호화 키 동일 (AES, ARIA, SEED, LEA) — 연산 속도가 매우 빨라 대용량 데이터 암호화에 쓰이나 키 분배(n(n-1)/2)와 부인방지 불가"
      },
      {
        "category": "",
        "sub": "공개키(비대칭키) 암호",
        "desc": "공개키와 개인키 쌍 분리 (RSA: 소인수분해, ECC: 타원곡선 이산대수) — 키 분배 및 전자서명(부인방지) 해결하나 연산 속도가 느림"
      },
      {
        "category": "양자 위기와 PQC",
        "sub": "양자내성암호 (PQC)",
        "desc": "양자컴퓨터 Shor 알고리즘에 깨지는 RSA/ECC를 대체하기 위해 격자(Lattice: ML-KEM, ML-DSA), 해시(SLH-DSA), 코드 기반 난제 활용"
      }
    ],
    "keywords": [
      "혼돈과 확산",
      "케르크호프스의 원리",
      "COA/KPA/CPA/CCA",
      "대칭키 vs 공개키",
      "하이브리드 암호(봉투)",
      "PQC(양자내성암호)"
    ],
    "differentiation": "[유형 A] 양자컴퓨터가 대칭키 암호(AES)와 공개키 암호(RSA/ECC)에 미치는 영향 차이\n① 공개키 암호(RSA/ECC) 붕괴: 쇼어(Shor) 알고리즘에 의해 지수 시간 난제가 다항 시간으로 풀려 완전히 무력화됨 → 반드시 PQC(격자 기반 등)로 알고리즘 자체를 교체해야 함.\n② 대칭키(AES) 및 해시(SHA): 그로버(Grover) 알고리즘에 의해 탐색 복잡도가 √N으로만 줄어들므로, 키 길이를 2배(AES-128 → AES-256, SHA-256 → SHA-384/512)로 늘리는 것만으로 양자 내성 확보 가능."
  },
  {
    "domain": "모의고사",
    "topic": "ISMS-P 인증제도와 간편인증 및 2026~2027 실효성 강화 개편안",
    "mnemonic": "관리체계(16) + 보호대책(64) + 개인정보(21) = 101개 / 강화·표준·간편 3단계 차등 / 현장실증·인증취소 강화",
    "definition": "정보보호 및 개인정보보호 관리체계 국가 인증과 개편안",
    "details": "[ISMS (관리체계 수립·운영 16개 + 보호대책 요구사항 64개 = 80개)] + [개인정보 처리단계별 요구사항 21개] = [ISMS-P (총 101개 기준)]\n  * 실효성 강화 개편: 기업 규모·위험도별 3단계 차등(강화·표준·간편) + 서면심사 탈피 현장실증형 심사 + 중대 침해사고 시 인증 취소",
    "tableRows": [
      {
        "category": "ISMS vs ISMS-P",
        "sub": "인증 범위 및 기준 수",
        "desc": "ISMS(정보자산 보안 중심 80개 항목, 정보통신망법) vs ISMS-P(개인정보 수집·이용·파기 전 생명주기 포함 101개 항목, 망법+개인정보보호법 통합)"
      },
      {
        "category": "ISMS 간편인증",
        "sub": "중소·스타트업 부담 완화",
        "desc": "매출액 300억 미만 등 소규모 기업 대상으로 핵심 항목(40~44개)으로 심사 기준과 수수료를 경감한 특례 인증"
      },
      {
        "category": "실효성 강화 개편",
        "sub": "강화·표준·간편 3단계 차등",
        "desc": "공공·본인확인·대규모 개인정보처리자 ISMS-P 의무화 추진 및 고위험 대규모 통신·IDC 사업자에 20개 항목이 추가된 '강화 인증군' 적용"
      },
      {
        "category": "",
        "sub": "현장실증 심사 & 인증취소",
        "desc": "예비심사 도입, 서류 위주에서 외부 인터넷 접점 자산 현장 모의침투·실증 심사로 전환, 중대 침해사고·패치 미조치 시 즉시 인증 취소"
      }
    ],
    "keywords": [
      "ISMS-P(101개)",
      "ISMS(80개)",
      "ISMS 간편인증",
      "실효성 강화방안",
      "강화·표준·간편 3단계",
      "현장실증형 심사",
      "인증취소"
    ],
    "differentiation": "[유형 C] 최근 인증 기업 침해사고에 따른 ISMS-P 패러다임 전환 ('스냅샷 서류 심사'에서 '상시 실증 검증'으로)\n① 기존 한계: 연 1회 심사 시점에만 서류를 맞추는 형식적 컴플라이언스로 인해 인증 획득 직후 기본적인 EoS 장비 방치나 웹 취약점으로 대형 개인정보 유출 사고 반복.\n② 개편 핵심 시사점: 외부 노출 자산(EASM) 필수 포함, 취약점 전문인력의 현장 실증 테스트, 상시 점검 및 중대 결함 시 '인증 취소'라는 강력한 사후 책임을 부과."
  },
  {
    "domain": "모의고사",
    "topic": "데이터 거버넌스 (Data Governance, DAMA-DMBOK & ISO 38500)",
    "mnemonic": "원·조·프·기 / DAMA-DMBOK 11대 영역 / 평가(Evaluate) · 지시(Direct) · 모니터(Monitor)",
    "definition": "전사 데이터 자산의 품질·보안·가치를 극대화 통제 체계",
    "details": "[상위 IT 거버넌스(ISO/IEC 38500: EDM)] ──> [데이터 거버넌스 코어(정책·표준·조직 CDO/스튜어드)]\n  └──────> [DAMA-DMBOK 생애주기 관리: 아키텍처·모델링·저장·보안·통합·마스터(MDM)·DW/BI·메타데이터·품질]",
    "tableRows": [
      {
        "category": "핵심 구성요소",
        "sub": "원칙 · 조직 · 프로세스 · 기술",
        "desc": "데이터 관리 원칙·규정, CDO 및 데이터 스튜어드십 조직, 표준화·품질·보안 프로세스, 메타데이터·카탈로그 도구"
      },
      {
        "category": "국제 표준 지침",
        "sub": "DAMA-DMBOK2",
        "desc": "데이터 거버넌스를 중심 축(Wheel)으로 아키텍처, 품질, 메타데이터, MDM, 보안 등 11대 지식 영역을 정의한 글로벌 바이블"
      },
      {
        "category": "",
        "sub": "ISO/IEC 38500 & TTA",
        "desc": "경영진의 EDM(평가·지시·모니터링) 모델 및 TTAK.AI-0024(빅데이터 품질), TTAK.AI-0027(윤리·거버넌스) 표준"
      },
      {
        "category": "현대적 진화",
        "sub": "능동적 거버넌스 (Data Fabric)",
        "desc": "수동적 통제에서 AI 기반 액티브 메타데이터·데이터 리니지(Lineage)·데이터 카탈로그를 통한 셀프서비스 데이터 민주화 지원"
      }
    ],
    "keywords": [
      "DAMA-DMBOK",
      "ISO/IEC 38500",
      "CDO / 데이터 스튜어드",
      "메타데이터",
      "MDM",
      "데이터 리니지",
      "Data Fabric"
    ],
    "differentiation": "[유형 C] AX(AI 전환) 시대의 데이터 거버넌스: '통제 중심(Defense)'에서 'AI 신뢰 활성화(Offense)'로\n① 패러다임 변화: 과거 거버넌스가 개인정보·규제 위반 방지를 위한 잠금(Lock-down) 위주였다면, AX 시대에는 LLM/RAG에 주입되는 데이터의 계보(Lineage), 최신성, 환각·편향 방지 및 권한 상속(RBAC)을 자동 보장하는 AI-Ready 데이터 거버넌스가 핵심."
  },
  {
    "domain": "모의고사",
    "topic": "데이터 안심구역 (Data Safe Zone)과 AI 데이터 안심활용",
    "mnemonic": "데이터산업법 제11조 / 물리·논리 폐쇄망 + 미개방 민감·가명데이터 + 반출심사위원회(통계·AI모델만 반출)",
    "definition": "미개방 민감 데이터를 보안 공간에서 안전하게 분석 제도",
    "details": "[미개방 원본/가명 데이터(금융·의료·공공·유통)] ──> [데이터 안심구역 (폐쇄망 가상분석환경·고성능 GPU·AI 도구)]\n  └──────> [분석 결과물 및 학습 완료 AI 모델 가중치] ──> [반출심사위원회(재식별·원본포함 여부 검증)] ──> [안전한 외부 반출]",
    "tableRows": [
      {
        "category": "법적 근거·목적",
        "sub": "데이터산업법 제11조",
        "desc": "유출 우려로 개방되지 못하던 공공·민간 고가치 미개방 데이터를 안전하게 분석·AI 학습에 활용할 수 있도록 과기정통부·관계부처가 지정"
      },
      {
        "category": "보안 통제 환경",
        "sub": "물리적·기술적 폐쇄망",
        "desc": "외부 인터넷이 차단된 물리 센터 또는 클라우드 기반 가상 데스크톱(VDI) 내에서 화면 캡처·무단 복사 원천 차단"
      },
      {
        "category": "핵심 프로세스",
        "sub": "사전심사 → 분석 → 반출심사",
        "desc": "이용 신청 및 보안서약 → 폐쇄 환경 내 데이터 결합·AI 학습 → 반출심사위원회를 거쳐 원본이 제거된 통계치·AI 모델만 반출"
      },
      {
        "category": "최신 정책 동향",
        "sub": "AI 데이터 안심활용센터",
        "desc": "기존 정형 통계 분석 중심에서 초거대 AI 학습용 멀티모달 데이터 및 고성능 GPU 인프라를 지원하는 AI 안심활용 체계로 확대"
      }
    ],
    "keywords": [
      "데이터산업법",
      "미개방 데이터",
      "가명정보 결합",
      "반출심사위원회",
      "VDI 폐쇄망",
      "AI데이터안심활용센터"
    ],
    "differentiation": "[유형 B] AI 모델 가중치(Weights) 반출 시 '모델 전도·기억 공격' 위험과 심사 고도화\n① 새로운 보안 사각지대: 통계표 반출과 달리, 안심구역 내에서 학습한 딥러닝 모델 파일(.pt/.safetensors)을 외부로 반출할 때 모델 파라미터 안에 원본 개인정보가 암기(Memorization)되어 유출될 위험 존재.\n② 반출 심사 고도화: AI 모델 반출 시 멤버십 추론 공격(MIA) 테스트와 차분 프라이버시(DP-SGD) 적용 여부를 정량 검증하는 AI 모델 보안 감사 절차를 필수 적용해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "데이터 레이크 (Data Lake) 아키텍처와 레이크하우스 (Lakehouse)",
    "mnemonic": "수집(Raw/Bronze) → 정제(Cleaned/Silver) → 마트(Curated/Gold) / Schema-on-Read / Iceberg·Delta Lake",
    "definition": "원본 데이터 그대로 저장·분석하고 트랜잭션 결합한 구조",
    "details": "[다양한 원천(RDB·로그·IoT·문서)] ──> [수집 계층(Kafka/CDC)] ──> [저장 계층(메달리온: Bronze 원본 → Silver 정제 → Gold 집계)]\n  └──────> [오픈 테이블 포맷(Apache Iceberg / Delta Lake: ACID·타임트래블)] ──> [분석·AI 엔진(Spark·Trino·LLM RAG)]",
    "tableRows": [
      {
        "category": "핵심 특징",
        "sub": "Schema-on-Read",
        "desc": "적재 시점(Write)에는 스키마 변환 없이 원본 그대로 저비용 오브젝트 스토리지(S3/HDFS)에 저장하고 읽을 때(Read) 스키마 정의"
      },
      {
        "category": "메달리온 아키텍처",
        "sub": "Bronze (Raw Zone)",
        "desc": "원천 시스템의 정형·반정형·비정형 데이터를 변형 없이 원본 그대로 적재하는 랜딩·원시 영역"
      },
      {
        "category": "",
        "sub": "Silver (Cleaned Zone)",
        "desc": "중복 제거, 결측치 처리, 표준화 및 스키마 검증을 거쳐 엔터프라이즈 분석이 가능한 정제 영역"
      },
      {
        "category": "",
        "sub": "Gold (Curated Zone)",
        "desc": "부서별 BI 대시보드, 의사결정 및 AI 피처 스토어에 즉시 활용 가능하도록 비즈니스 로직으로 집계된 영역"
      },
      {
        "category": "거버넌스 & 진화",
        "sub": "데이터 늪 방지 & 레이크하우스",
        "desc": "메타데이터 카탈로그 부재 시 '데이터 늪(Data Swamp)' 전락 → 오브젝트 스토리지 위에 ACID 트랜잭션을 얹은 레이크하우스(Iceberg)로 진화"
      }
    ],
    "keywords": [
      "Schema-on-Read",
      "메달리온 아키텍처(Bronze/Silver/Gold)",
      "데이터 늪(Data Swamp)",
      "데이터 레이크하우스",
      "Apache Iceberg",
      "ACID"
    ],
    "differentiation": "[유형 A] 데이터웨어하우스(DW) vs 데이터 레이크(Data Lake) vs 데이터 레이크하우스(Lakehouse) 비교\n① DW vs Data Lake: DW는 정형 데이터·ACID·고성능 BI에 강하나 비정형 AI 학습 불가 및 고비용이고, Data Lake는 저비용·비정형 수용에 강하나 트랜잭션 부재로 데이터 정합성이 깨짐.\n② Lakehouse(Apache Iceberg / Delta Lake / Hudi): 저비용 S3 스토리지 위에 메타데이터 계층을 두어 ACID 트랜잭션, 스키마 진화(Schema Evolution), 타임트래블을 구현함으로써 DW와 레이크를 단일 아키텍처로 통합."
  },
  {
    "domain": "모의고사",
    "topic": "관계형 데이터베이스 조인 (Join: 논리적 조인 & 물리적 조인 알고리즘)",
    "mnemonic": "논리(Inner·Outer·Cross·Self) + 물리옵티마이저(NL Join · Sort-Merge Join · Hash Join)",
    "definition": "두 개 이상 테이블을 연결해 데이터를 추출 연산 기법",
    "diagramImg": "exam_q99.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 논리적 조인 유형 | Inner Join & Outer Join | 조인 조건 일치 행만 반환(Inner) vs 조건 불일치 행도 NULL로 채워 보존(Left / Right / Full Outer Join) |\n| | Cross / Self / Anti·Semi | 카티션 곱(Cross), 동일 테이블 계층 참조(Self), 서브쿼리 EXISTS/NOT EXISTS 최적화를 위한 Semi/Anti Join |\n| 물리적 조인 (실행계획) | Nested Loop Join (NL) | 선행(Driving) 테이블 행마다 후행(Driven) 테이블 인덱스를 건건이 탐색 — 소량 데이터 및 OLTP 랜덤 액세스에 최적 |\n| | Sort-Merge Join (정렬병합) | 양쪽 테이블을 조인 컬럼 기준으로 각각 정렬(Sort)한 뒤 스캔하며 병합(Merge) — 비동등(>, <) 조인 및 인덱스 없을 때 유리 |\n| | Hash Join (해시 조인) | 작은 테이블(Build Input)로 메모리 해시 테이블을 생성한 뒤 큰 테이블(Probe Input)을 스캔해 매칭 — 대용량 배치·DW 동등(=) 조인 최고 성능 |",
    "keywords": [
      "Inner/Outer Join",
      "NL Join(Driving/Driven)",
      "Sort-Merge Join",
      "Hash Join(Build/Probe)",
      "옵티마이저",
      "인덱스 튜닝"
    ],
    "differentiation": "[유형 A] 물리적 조인 3대 알고리즘(NL vs Sort-Merge vs Hash Join) 옵티마이저 선택 기준\n① NL Join: 후행 테이블 조인 컬럼에 반드시 인덱스가 있어야 하며, 온라인 소량 트랜잭션(OLTP)에 적합.\n② Sort-Merge vs Hash Join: 대용량 조인 시 정렬(Sort) 부하가 큰 Sort-Merge 대신 동등(=) 조건에서는 Hash Join이 압도적으로 빠르나, 비동등 범위 조건(BETWEEN, >)에서는 Hash Join 사용이 불가능하므로 Sort-Merge Join을 선택해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "데이터베이스 암호화 (DB Encryption) 4대 방식과 키 관리",
    "mnemonic": "애플리케이션(API) · 플러그인(DB내부모듈) · TDE(커널/파일투명암호화) · 하이브리드 / 키분리 보관(KMS/HSM)",
    "definition": "민감정보 유출 방지용 DB 암호화 방식과 키관리 체계",
    "diagramImg": "exam_q100.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 애플리케이션 계층 | API 방식 | 응용 서버에서 DB 전송 전 암·복호화 수행 — DB 서버 부하가 없고 구간 암호화까지 되나 기존 앱 소스코드 대량 수정 필요 |\n| DBMS 내부 계층 | Plug-in (DB 확장모듈) | DBMS 내부에 패키지/함수(UDF)와 뷰·트리거를 설치해 컬럼 단위 암호화 — 앱 수정 최소화되나 DB CPU 부하 발생 |\n| 스토리지·커널 계층 | TDE (투명한 데이터 암호화) | DBMS 엔진 커널이 디스크(데이터파일·백업본) 기록 시 블록/테이블스페이스 단위로 자동 암호화 — 앱·SQL 수정 전혀 없음(투명성) |\n| 한계 및 보완 기술 | 인덱스 스캔 깨짐 & 색인 검색 | 암호화 시 정렬 순서가 깨져 범위 검색(Index Range Scan) 불가 → 형태보존암호(FPE), 순서보존암호(OPE) 또는 해시 인덱스 결합 |\n| 핵심 보안 원칙 | 암·복호화 키 분리 (KMS) | DB 파일과 암호화 키가 같은 서버에 있으면 무의미하므로 반드시 별도 물리 보안 장비(HSM / 외부 KMS)에 키를 분리 보관 |",
    "keywords": [
      "API 방식",
      "Plug-in 방식",
      "TDE(Transparent Data Encryption)",
      "하이브리드 방식",
      "인덱스 깨짐 현상",
      "FPE(형태보존암호)",
      "KMS/HSM"
    ],
    "differentiation": "[유형 A] API/Plug-in(컬럼 암호화) vs TDE(파일 암호화)의 보안 범위 및 성능 트레이드오프\n① TDE의 보안 한계: TDE는 디스크 파일 탈취만 방어할 뿐, 정상 DB 계정이 탈취되거나 SQL Injection 공격 시 DBMS가 자동 복호화해 평문을 반환하므로 접근통제(DB접근제어 솔루션)가 반드시 병행되어야 함.\n② 하이브리드 적용: 성능이 중요한 일반 테이블은 TDE로 전체 보호하고, 주민번호·계좌번호 등 핵심 고유식별정보 컬럼만 API/Plug-in 또는 형태보존암호(FPE)로 이중 암호화."
  },
  {
    "domain": "모의고사",
    "topic": "데이터베이스 정규화 (Normalization, 1NF~5NF)",
    "mnemonic": "정규화: 도부이결다조 (1NF→2NF→3NF→BCNF→4NF→5NF) / 역정규화: 조인성능 향상 위해 의도적 중복 허용(테이블·컬럼·관계)",
    "definition": "함수적 종속성 기반로 데이터 중복과 이상현상 제거 기법",
    "diagramImg": "exam_q101.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 정규화 목적 | 이상현상(Anomaly) 제거 | 데이터 중복 최소화를 통해 삽입 이상(Insertion), 삭제 이상(Deletion), 갱신 이상(Update Anomaly)을 원천 방지 |\n| 정규화 단계 (도부이결다조) | 1NF → 2NF → 3NF | 1NF(도메인 원자값) → 2NF(부분 함수종속 제거: 완전 함수종속) → 3NF(이행적 함수종속 제거: A→B, B→C 끊기) |\n| | BCNF → 4NF → 5NF | BCNF(모든 결정자가 후보키) → 4NF(다치 종속 제거) → 5NF(조인 종속 제거) |\n| 역정규화 (반정규화) | 수행 목적 및 시점 | 정규화 완료 후 과도한 다중 테이블 조인(Join)으로 인해 읽기(조회) 성능이 SLA에 미달할 때 물리 모델링 단계에서 제한적 수행 |\n| | 주요 역정규화 기법 | 테이블 병합(1:1, 1:M 통합)·분할(수직/수평 파티셔닝), 중복 컬럼 추가(계산값·파생컬럼), 중복 관계(지름길 관계) 추가 |",
    "keywords": [
      "삽입·삭제·갱신 이상",
      "도부이결다조",
      "함수적 종속성(FD)",
      "완전/부분/이행 종속",
      "역정규화(반정규화)",
      "정합성 보완(트리거/배치)"
    ],
    "differentiation": "[유형 B] 무분별한 역정규화의 부작용(데이터 무결성 파괴)과 대안적 성능 최적화 우선순위\n① 역정규화 남발의 위험: 조인 몇 번 줄이려고 중복 컬럼·테이블을 남발하면 갱신 시마다 트리거·애플리케이션 이중 수정이 필요해져 데이터 불일치(무결성 붕괴) 발생.\n② 기술사적 원칙: 역정규화는 최후의 수단이어야 하며, 먼저 ① 인덱스 튜닝·SQL 최적화 → ② 클러스터링·파티셔닝 → ③ 구체화된 뷰(Materialized View)나 인메모리 캐시(Redis)를 우선 검토한 뒤 불가피한 경우에만 제한 적용."
  },
  {
    "domain": "모의고사",
    "topic": "데이터베이스 역정규화 (Denormalization)",
    "mnemonic": "정규화: 도부이결다조 (1NF→2NF→3NF→BCNF→4NF→5NF) / 역정규화: 조인성능 향상 위해 의도적 중복 허용(테이블·컬럼·관계)",
    "definition": "조인 성능 향상 위해 정규화 테이블을 의도적 통합 기법",
    "diagramImg": "exam_q101_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 정규화 목적 | 이상현상(Anomaly) 제거 | 데이터 중복 최소화를 통해 삽입 이상(Insertion), 삭제 이상(Deletion), 갱신 이상(Update Anomaly)을 원천 방지 |\n| 정규화 단계 (도부이결다조) | 1NF → 2NF → 3NF | 1NF(도메인 원자값) → 2NF(부분 함수종속 제거: 완전 함수종속) → 3NF(이행적 함수종속 제거: A→B, B→C 끊기) |\n| | BCNF → 4NF → 5NF | BCNF(모든 결정자가 후보키) → 4NF(다치 종속 제거) → 5NF(조인 종속 제거) |\n| 역정규화 (반정규화) | 수행 목적 및 시점 | 정규화 완료 후 과도한 다중 테이블 조인(Join)으로 인해 읽기(조회) 성능이 SLA에 미달할 때 물리 모델링 단계에서 제한적 수행 |\n| | 주요 역정규화 기법 | 테이블 병합(1:1, 1:M 통합)·분할(수직/수평 파티셔닝), 중복 컬럼 추가(계산값·파생컬럼), 중복 관계(지름길 관계) 추가 |",
    "keywords": [
      "삽입·삭제·갱신 이상",
      "도부이결다조",
      "함수적 종속성(FD)",
      "완전/부분/이행 종속",
      "역정규화(반정규화)",
      "정합성 보완(트리거/배치)"
    ],
    "differentiation": "[유형 B] 무분별한 역정규화의 부작용(데이터 무결성 파괴)과 대안적 성능 최적화 우선순위\n① 역정규화 남발의 위험: 조인 몇 번 줄이려고 중복 컬럼·테이블을 남발하면 갱신 시마다 트리거·애플리케이션 이중 수정이 필요해져 데이터 불일치(무결성 붕괴) 발생.\n② 기술사적 원칙: 역정규화는 최후의 수단이어야 하며, 먼저 ① 인덱스 튜닝·SQL 최적화 → ② 클러스터링·파티셔닝 → ③ 구체화된 뷰(Materialized View)나 인메모리 캐시(Redis)를 우선 검토한 뒤 불가피한 경우에만 제한 적용."
  },
  {
    "domain": "모의고사",
    "topic": "데이터베이스 병행제어 (Concurrency Control: 2PL · Timestamp · MVCC · 낙관적 제어)",
    "mnemonic": "비관적(2PL: 성장·축소 / 타임스탬프) vs 낙관적(검증기반) vs 다중버전(MVCC: 스냅샷 읽기·Undo)",
    "definition": "다중 트랜잭션 동시 수행 시 일관성 보장 동시성 기법",
    "diagramImg": "exam_q102.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 병행제어 미비 시 문제 | 4대 부정합 현상 | 갱신 분실(Lost Update), 모순성(Inconsistency), 연쇄 복귀(Cascading Rollback), 현황 파악 오류(Dirty Read) |\n| 잠금 기반 (Locking) | 2단계 로킹 규약 (2PL) | 직렬가능성(Serializability) 보장: 락을 획득만 하는 확장 단계(Growing)와 해제만 하는 축소 단계(Shrinking) 엄격 분리 (교착상태 발생 가능) |\n| 순서 기반 | 타임스탬프 (Timestamp) | 트랜잭션 시작 시간표(TS) 순서대로 데이터 접근 순서를 사전 결정 (교착상태는 없으나 연쇄 복귀·롤백 빈번) |\n| 검증 기반 (Optimistic) | 낙관적 병행제어 (OCC) | 충돌이 드물다고 가정하고 락 없이 실행(Read) 후 커밋 직전 검증(Validate)하여 충돌 시에만 롤백 (읽기 위주 환경 유리) |\n| 다중 버전 기반 | MVCC (다중버전 병행제어) | 변경 시 원본을 덮어쓰지 않고 Undo 영역에 이전 버전 스냅샷을 유지해 읽기(읽기 락 없음)와 쓰기가 서로 블로킹하지 않음 |",
    "keywords": [
      "직렬가능성(Serializability)",
      "2PL(Strict 2PL)",
      "Locking Granularity",
      "Timestamp Ordering",
      "MVCC(다중버전)",
      "읽기-쓰기 무잠금"
    ],
    "differentiation": "[유형 A] 전통적 2PL(잠금 기반) vs 현대 상용 RDBMS 표준인 MVCC 심층 비교\n① 2PL의 한계: 읽기(SELECT)와 쓰기(UPDATE)가 서로 락 경합을 벌여 대용량 웹 서비스에서 심각한 대기 병목과 교착상태(Deadlock)를 유발.\n② MVCC의 혁신(Oracle, PostgreSQL, MySQL InnoDB): 트랜잭션 타임스탬프와 Undo 로그 스냅샷을 통해 '읽기 작업은 쓰기 작업을 절대 막지 않고, 쓰기 작업도 읽기 작업을 절대 막지 않는' 고성능 동시성 달성."
  },
  {
    "domain": "모의고사",
    "topic": "데이터 표준화의 필요성, 구성요소 및 AX 기대효과",
    "mnemonic": "표준단어 · 표준도메인 · 표준용어 · 표준코드 / 일관성·상호운용성 → AI 학습/RAG 신뢰성 확보",
    "definition": "전사 데이터 명칭·형식·코드 규칙 통일하는 품질 활동",
    "details": "[표준 단어사전] + [표준 도메인사전(데이터타입·길이)] ──조합──> [표준 용어사전(논리/물리 컬럼명)] + [표준 코드]\n  * AX 연계 논리: 데이터 표준화 → 전사 데이터 품질·일관성·통합성 확보 → LLM/AI 분석 신뢰성 향상 → AX 경쟁력 강화",
    "tableRows": [
      {
        "category": "필요성 (문제점)",
        "sub": "사일로 및 이음동의어 혼란",
        "desc": "부서마다 동일 개념을 다른 이름(고객번호 vs 회원ID)으로 쓰거나 같은 이름을 다른 의미(동음이의어)로 사용해 데이터 통합·AI 학습 불가"
      },
      {
        "category": "4대 핵심 구성요소",
        "sub": "표준 단어 & 표준 도메인",
        "desc": "현업 업무에서 사용하는 최소 의미 단위의 단어 사전 정의 및 데이터의 유형·길이·허용값 범위(도메인) 그룹화"
      },
      {
        "category": "",
        "sub": "표준 용어 & 표준 코드",
        "desc": "표준 단어들을 조합해 실제 테이블·컬럼에 사용할 표준 용어(한글 논리명 + 영문 물리명) 확정 및 전사 공통 코드값 통일"
      },
      {
        "category": "기대효과 (AX 연계)",
        "sub": "상호운용성 & AI 신뢰성",
        "desc": "이종 시스템 간 인터페이스 매핑 비용 절감, DW/레이크 통합 용이성 확보 및 생성형 AI(NL2SQL·RAG)의 스키마 이해 정확도 극대화"
      }
    ],
    "keywords": [
      "표준단어·도메인·용어·코드",
      "이음동의어·동음이의어 제거",
      "메타데이터 관리",
      "공공데이터 공통표준",
      "NL2SQL 정확도",
      "AX 기반"
    ],
    "differentiation": "[유형 C] 생성형 AI(Text-to-SQL 및 에이전트) 시대에 데이터 표준화가 성패를 가르는 이유\n① 비표준 DB의 AI 실패: 컬럼명이 `C_NO1`, `TMP_FLG`처럼 비표준 암호처럼 되어 있으면 LLM이 자연어 질의를 SQL로 변환(NL2SQL)할 때 심각한 환각과 오작동을 일으킴.\n② 시맨틱 표준화: 표준 용어사전과 비즈니스 메타데이터 설명이 잘 구축된 DB는 LLM 에이전트가 즉시 의미를 해석해 95% 이상의 정확한 데이터 분석 쿼리를 자율 생성."
  },
  {
    "domain": "모의고사",
    "topic": "트랜잭션 고립성 수준 (Transaction Isolation Level, ANSI/ISO SQL 표준)",
    "mnemonic": "단계: RU(Lv0) → RC(Lv1) → RR(Lv2) → Serializable(Lv3) / 이상현상: Dirty Read · Non-Repeatable Read · Phantom Read",
    "definition": "동시 실행 트랜잭션 간 변경 노출 허용 범위 제어 기준",
    "details": "[고립성 낮음 / 동시성 높음] Read Uncommitted ──> Read Committed ──> Repeatable Read ──> Serializable [고립성 최고 / 동시성 낮음]\n  * 발생 이상현상: Dirty Read(미커밋 읽기)      | Non-Repeatable Read(반복읽기 불일치) | Phantom Read(유령 행 출현)",
    "tableRows": [
      {
        "category": "Level 0",
        "sub": "Read Uncommitted",
        "desc": "타 트랜잭션이 아직 커밋하지 않은 수정 중인 데이터까지 읽기 허용 — Dirty Read, Non-Repeatable, Phantom 모두 발생"
      },
      {
        "category": "Level 1 (상용 기본)",
        "sub": "Read Committed",
        "desc": "커밋 완료된 데이터만 읽기 허용 (Oracle, PostgreSQL, SQL Server 기본값) — Dirty Read는 방지하나 Non-Repeatable·Phantom 발생"
      },
      {
        "category": "Level 2",
        "sub": "Repeatable Read",
        "desc": "트랜잭션 내 동일 행을 여러 번 읽어도 항상 같은 값 보장 (MySQL InnoDB 기본값) — Non-Repeatable 방지, 표준상 Phantom Read 발생 가능"
      },
      {
        "category": "Level 3 (최고 격리)",
        "sub": "Serializable",
        "desc": "완전한 순차 실행과 동일한 결과 보장 (범위 락 Predicate/Next-Key Lock 또는 SSI 사용) — 모든 이상현상 방지하나 동시 처리 성능 급감"
      }
    ],
    "keywords": [
      "ANSI SQL 격리수준",
      "Dirty Read",
      "Non-Repeatable Read",
      "Phantom Read",
      "Next-Key Lock",
      "SSI(직렬가능 스냅샷)"
    ],
    "differentiation": "[유형 B] MVCC 기반 DBMS(MySQL InnoDB vs PostgreSQL)에서의 Phantom Read 방어 메커니즘 차이\n① ANSI 표준과 실제 구현의 차이: ANSI 표준 표에서는 Repeatable Read 단계에서 Phantom Read가 발생한다고 정의하나, 실제 현대 DBMS(MySQL InnoDB, PostgreSQL)는 Repeatable Read 단계에서도 MVCC 스냅샷과 갭 락(Gap Lock / Next-Key Lock)을 통해 Phantom Read까지 대부분 차단함.\n② Write Skew(쓰기 왜곡) 주의: Snapshot Isolation(RR)에서도 두 트랜잭션이 서로 다른 행을 읽고 교차 수정하는 Write Skew 이상은 발생할 수 있으므로 금융 정산에서는 명시적 `SELECT FOR UPDATE` 또는 SSI(Serializable Snapshot Isolation)가 필요."
  },
  {
    "domain": "모의고사",
    "topic": "비정형 데이터 마이닝 (텍스트 · 웹 · 오피니언 · 사회연결망 마이닝)",
    "mnemonic": "텍스트(전처리·TF-IDF·임베딩·토픽모델링) · 오피니언(감성극성) · 웹(구조·문서·사용) · SNA(중심성: 연결·근접·매개·위세)",
    "definition": "텍스트·웹·소셜 비정형 데이터서 숨겨진 지식 추출 기법",
    "details": "[비정형 원천(문서·리뷰·웹로그·SNS)] ──> [전처리(형태소분석·불용어제거·임베딩)] ──> [마이닝(텍스트·오피니언·웹·SNA)] ──> [인사이트/지식화]",
    "tableRows": [
      {
        "category": "텍스트 마이닝",
        "sub": "NLP 전처리 & 벡터화",
        "desc": "토큰화·형태소분석·어간추출·불용어 제거 후 BoW/TF-IDF 또는 밀집 임베딩(Word2Vec, BERT, LLM)으로 수치 벡터화"
      },
      {
        "category": "",
        "sub": "토픽 모델링 & 개체명인식",
        "desc": "문서 집합의 잠재 주제를 확률 추출하는 LDA(Latent Dirichlet Allocation) 및 인명·기관명 추출(NER)"
      },
      {
        "category": "오피니언 마이닝",
        "sub": "감성 분석 (Sentiment)",
        "desc": "리뷰·여론 텍스트에서 주관적 태도와 감성 극성(긍정·부정·중립) 및 속성별 감성(ABSA)을 정량 판별"
      },
      {
        "category": "웹 마이닝",
        "sub": "구조 · 콘텐츠 · 사용 마이닝",
        "desc": "하이퍼링크 구조(PageRank), 웹 페이지 본문 내용(Contents), 서버 접속 로그·클릭스트림 경로(Usage) 분석"
      },
      {
        "category": "사회연결망 분석 (SNA)",
        "sub": "4대 중심성 (Centrality)",
        "desc": "노드와 링크 그래프에서 영향력 측정: 연결정도(Degree), 근접(Closeness), 매개(Betweenness: 브로커 역할), 위세/고유벡터(Eigenvector)"
      }
    ],
    "keywords": [
      "Text Mining",
      "TF-IDF",
      "LDA 토픽모델링",
      "오피니언 마이닝(ABSA)",
      "웹 마이닝",
      "SNA(연결·근접·매개·위세 중심성)"
    ],
    "differentiation": "[유형 C] 전통적 통계 기반 텍스트 마이닝(TF-IDF·LDA)에서 LLM 기반 시맨틱 마이닝으로의 진화\n① 기존 방식의 한계: TF-IDF와 LDA는 단어 빈도(Bag-of-Words)에만 의존해 문맥, 반어법, 다의어를 이해하지 못하고 토픽의 의미를 인간이 수동 해석해야 함.\n② BERTopic & LLM 에이전트 결합: 트랜스포머 임베딩과 군집화(UMAP+HDBSCAN)를 결합한 BERTopic 및 LLM 제로샷 분류를 통해 다국어 문맥과 복합 감성·의도를 정밀 추출."
  },
  {
    "domain": "모의고사",
    "topic": "데이터 품질 인증 제도 (DQ 인증: 정형 · 비정형 · AI 학습용 데이터 및 관리체계)",
    "mnemonic": "데이터산업법 제20조 / 대상: 데이터 내용(정형·비정형: Class A·B·C) + 데이터 관리체계(Level 1~5)",
    "definition": "데이터산업법에 의거해 데이터 내용과 관리체계 공인 제도",
    "details": "[데이터산업법 제20조 (과기정통부 지정 인증기관 심사)]\n  ├── [데이터 내용 인증 (Content)] : 정합성·완전성·유효성·정확성 검증 ──> Class A(99%+) · Class B(97%+) · Class C(95%+)\n  └── [데이터 관리체계 인증 (Management, DQC-M)] : 계획·구축·운영·활용 프로세스 성숙도 ──> Level 1(초기) ~ Level 5(최적화)",
    "tableRows": [
      {
        "category": "법적 근거·목적",
        "sub": "데이터산업법 제20조",
        "desc": "데이터 유통·거래 신뢰성 확보 및 AI 학습용 데이터의 고품질 보증을 위해 과기정통부가 지정한 인증기관(KDATA, 씨에이에스 등)이 심사"
      },
      {
        "category": "데이터 내용 인증",
        "sub": "정형 데이터 품질",
        "desc": "값의 정합성(도메인·업무규칙 준수율)을 전수/표본 진단하여 오류율에 따라 Class A(99% 이상), B(97% 이상), C(95% 이상) 부여"
      },
      {
        "category": "",
        "sub": "비정형·AI 학습데이터",
        "desc": "텍스트·이미지·영상·오디오 및 라벨링(어노테이션)의 구문적 정확성·의미적 정확성·다양성·편향성 검증"
      },
      {
        "category": "데이터 관리체계 인증",
        "sub": "성숙도 5단계 (Lv 1~5)",
        "desc": "ISO/IEC 8000 및 DAMA 기반 데이터 표준·품질·메타·보안 관리 프로세스 성숙도를 Level 1(초기)~Level 5(최적화)로 평가"
      }
    ],
    "keywords": [
      "데이터산업법 제20조",
      "DQ 인증",
      "DQC-V(데이터 내용)",
      "DQC-M(관리체계)",
      "구문·의미적 정확성",
      "ISO/IEC 8000"
    ],
    "differentiation": "[유형 A] 정형 데이터 품질인증 vs 비정형(AI 학습용) 데이터 품질인증 심사 기준 비교\n① 정형 데이터: 스키마 제약조건과 비즈니스 규칙(BR) 위배 건수를 SQL 프로파일링으로 정량 산출(정합률 99% 기준).\n② 비정형·AI 학습 데이터: 단순 파일 깨짐(구문 정확성)을 넘어 바운딩 박스/폴리곤 라벨과 실제 객체의 일치도(IoU 등 의미적 정확성) 및 클래스 분포의 통계적 다양성까지 입체적으로 심사."
  },
  {
    "domain": "모의고사",
    "topic": "지식그래프 (Knowledge Graph)와 GraphRAG",
    "mnemonic": "지식그래프(노드·엣지 트리플·명시적 관계·다중홉 추론·설명가능) vs 벡터DB(고차원 임베딩·코사인유사도·ANN·의미검색)",
    "definition": "개체 간 의미 관계를 그래프로 구조화해 추론 지원 기술",
    "details": "[지식그래프 (Symbolic)] : (엔티티 A) ──[관계 Relation]──> (엔티티 B)  |  SPARQL/Cypher 질의 · 정확한 다중 홉(Multi-hop) 인과 추론\n[벡터 DB (Sub-symbolic)] : 텍스트/이미지 ──> [0.12, -0.84, ...] 고차원 밀집 벡터  |  HNSW/IVF 근사 최근접 검색(ANN) · 문맥적 유사도 검색",
    "tableRows": [
      {
        "category": "지식그래프 (KG)",
        "sub": "구조 및 표현 방식",
        "desc": "현실 세계의 개체(Node)와 관계(Edge)를 (주어-술어-목적어) 트리플 네트워크로 구조화 (Neo4j, Amazon Neptune)"
      },
      {
        "category": "",
        "sub": "강점 및 한계",
        "desc": "명확한 사실 관계, 다중 홉(Multi-hop) 복합 추론, 완벽한 출처 설명력(White-box)을 제공하나 구축·온톨로지 설계 비용이 높음"
      },
      {
        "category": "벡터 DB (Vector DB)",
        "sub": "구조 및 표현 방식",
        "desc": "비정형 데이터를 딥러닝 임베딩 모델로 수치 벡터화하여 고차원 공간 거리(코사인·내적·L2)로 검색 (Milvus, Pinecone, Qdrant)"
      },
      {
        "category": "",
        "sub": "강점 및 한계",
        "desc": "비정형 데이터의 자동 적재와 모호한 의미(Semantic) 검색에 탁월하나, 전역적 요약이나 다단계 논리 관계 추론에는 취약"
      }
    ],
    "keywords": [
      "Knowledge Graph",
      "Vector Database",
      "RDF/Property Graph",
      "Cypher/SPARQL",
      "임베딩(Embedding)",
      "ANN(HNSW)",
      "GraphRAG"
    ],
    "differentiation": "[유형 C] 벡터 DB와 지식그래프의 한계를 상호 보완하는 차세대 'GraphRAG' 아키텍처\n① 벡터 전용 RAG의 한계: '전체 문서군에서 주요 테마 간 연결고리가 무엇인가?' 같은 전역적(Global) 질문이나 A→B→C로 이어지는 다중 홉 관계 질문에 답하지 못함.\n② GraphRAG 결합: LLM으로 문서에서 엔티티와 관계를 추출해 지식그래프와 커뮤니티 요약을 구축하고, 벡터 유사도 검색(Local)과 그래프 순회 검색(Global)을 결합하여 검색 정확도와 설명력을 동시에 달성."
  },
  {
    "domain": "모의고사",
    "topic": "벡터 데이터베이스 (Vector Database)",
    "mnemonic": "지식그래프(노드·엣지 트리플·명시적 관계·다중홉 추론·설명가능) vs 벡터DB(고차원 임베딩·코사인유사도·ANN·의미검색)",
    "definition": "고차원 임베딩 벡터 색인해 의미 기반 유사도 검색 DB",
    "details": "[지식그래프 (Symbolic)] : (엔티티 A) ──[관계 Relation]──> (엔티티 B)  |  SPARQL/Cypher 질의 · 정확한 다중 홉(Multi-hop) 인과 추론\n[벡터 DB (Sub-symbolic)] : 텍스트/이미지 ──> [0.12, -0.84, ...] 고차원 밀집 벡터  |  HNSW/IVF 근사 최근접 검색(ANN) · 문맥적 유사도 검색",
    "tableRows": [
      {
        "category": "지식그래프 (KG)",
        "sub": "구조 및 표현 방식",
        "desc": "현실 세계의 개체(Node)와 관계(Edge)를 (주어-술어-목적어) 트리플 네트워크로 구조화 (Neo4j, Amazon Neptune)"
      },
      {
        "category": "",
        "sub": "강점 및 한계",
        "desc": "명확한 사실 관계, 다중 홉(Multi-hop) 복합 추론, 완벽한 출처 설명력(White-box)을 제공하나 구축·온톨로지 설계 비용이 높음"
      },
      {
        "category": "벡터 DB (Vector DB)",
        "sub": "구조 및 표현 방식",
        "desc": "비정형 데이터를 딥러닝 임베딩 모델로 수치 벡터화하여 고차원 공간 거리(코사인·내적·L2)로 검색 (Milvus, Pinecone, Qdrant)"
      },
      {
        "category": "",
        "sub": "강점 및 한계",
        "desc": "비정형 데이터의 자동 적재와 모호한 의미(Semantic) 검색에 탁월하나, 전역적 요약이나 다단계 논리 관계 추론에는 취약"
      }
    ],
    "keywords": [
      "Knowledge Graph",
      "Vector Database",
      "RDF/Property Graph",
      "Cypher/SPARQL",
      "임베딩(Embedding)",
      "ANN(HNSW)",
      "GraphRAG"
    ],
    "differentiation": "[유형 C] 벡터 DB와 지식그래프의 한계를 상호 보완하는 차세대 'GraphRAG' 아키텍처\n① 벡터 전용 RAG의 한계: '전체 문서군에서 주요 테마 간 연결고리가 무엇인가?' 같은 전역적(Global) 질문이나 A→B→C로 이어지는 다중 홉 관계 질문에 답하지 못함.\n② GraphRAG 결합: LLM으로 문서에서 엔티티와 관계를 추출해 지식그래프와 커뮤니티 요약을 구축하고, 벡터 유사도 검색(Local)과 그래프 순회 검색(Global)을 결합하여 검색 정확도와 설명력을 동시에 달성."
  },
  {
    "domain": "모의고사",
    "topic": "AI 학습용 데이터 품질관리 활동 (전주기 프로세스)",
    "mnemonic": "계획(설계·다양성) → 구축(수집·정제·비식별화·라벨링) → 검증(구문·의미·유효성) → 운영(드리프트·계보)",
    "definition": "고성능 AI 구현 위해 데이터 수집·정제·검증하는 활동",
    "details": "[1. 계획/설계(과제정의·스키마·윤리)] ──> [2. 수집/정제(중복제거·비식별화)] ──> [3. 가공/라벨링(오토라벨링·교차검수)] ──> [4. 품질검증(구문·의미·모델유효성)]",
    "tableRows": [
      {
        "category": "1. 계획 및 설계",
        "sub": "획득계획 & 라벨링 가이드",
        "desc": "AI 모델 목적에 맞는 원천 데이터 다양성(성별·연령·환경 분포) 설계, 저작권·개인정보 적법성 검토 및 어노테이션 지침 수립"
      },
      {
        "category": "2. 수집 및 정제",
        "sub": "노이즈 제거 & 비식별화",
        "desc": "흔들림·결측·중복 데이터 필터링 및 개인정보(얼굴·번호판·음성·PII) 가명·익명처리(마스킹·블러링)"
      },
      {
        "category": "3. 가공 (라벨링)",
        "sub": "어노테이션 & 반자동화",
        "desc": "바운딩 박스, 폴리곤, 키포인트, 시맨틱 세그멘테이션, 텍스트 태깅 수행 (초기 모델 기반 Auto-Labeling + 인간 검수 HITL)"
      },
      {
        "category": "4. 품질 진단·검증",
        "sub": "구문 · 의미 · 유효성 검증",
        "desc": "JSON/XML 포맷 무결성(구문), 라벨링 정확도·작업자 간 일치도 Kappa 계수(의미), 실제 참조 AI 모델 학습 시 목표 성능 달성도(유효성)"
      }
    ],
    "keywords": [
      "Data-Centric AI",
      "구문적 정확성",
      "의미적 정확성",
      "유효성(모델 성능)",
      "코헨의 카파(Kappa) 계수",
      "Auto-Labeling",
      "Active Learning"
    ],
    "differentiation": "[유형 B] 대규모 수동 라벨링의 비용·품질 편차 한계와 능동학습(Active Learning) 결합\n① 수동 라벨링 한계: 작업자 숙련도에 따라 라벨 일관성이 흔들리고(작업자 간 일치도 코헨의 카파 계수로 통제 필요), 모든 데이터를 전수 라벨링하면 비용 폭증.\n② Active Learning 파이프라인: 모델이 예측 불확실성(Entropy)이 높은 난이도 높은 샘플만 선별해 인간 전문가에게 라벨링을 요청함으로써 라벨링 비용을 70% 이상 절감하면서 모델 성능을 극대화."
  },
  {
    "domain": "모의고사",
    "topic": "데이터베이스 무결성 제약조건 (Integrity Constraints)",
    "mnemonic": "개체(PK: Not Null+Unique) · 참조(FK: 존재값/NULL) · 도메인(타입·범위 Check) · 고유(Unique) · 키 · 사용자정의(트리거/BR)",
    "definition": "DB 내 부정확한 데이터 유입 차단해 일관성 보장 규칙",
    "details": "[개체 무결성 (Primary Key: NULL 불가, 중복 불가)] <──참조── [참조 무결성 (Foreign Key: 부모 PK에 존재하는 값 또는 NULL만 허용)]\n  + [도메인 무결성 (데이터 타입·길이·CHECK 범위·DEFAULT)] + [릴레이션/업무 규칙 무결성 (Trigger / Stored Procedure)]",
    "tableRows": [
      {
        "category": "핵심 3대 무결성",
        "sub": "개체 무결성 (Entity)",
        "desc": "기본키(Primary Key)를 구성하는 모든 속성은 원자값이어야 하며 절대 NULL 값이나 중복 값을 가질 수 없다는 규칙"
      },
      {
        "category": "",
        "sub": "참조 무결성 (Referential)",
        "desc": "외래키(Foreign Key) 값은 반드시 참조되는 부모 릴레이션의 기본키 값으로 존재하거나 NULL이어야 함 (Cascade / Restrict / Set Null)"
      },
      {
        "category": "",
        "sub": "도메인 무결성 (Domain)",
        "desc": "각 컬럼(속성)의 값은 사전에 정의된 데이터 타입, 길이, NULL 허용 여부, CHECK 제약 범위 내의 값만 허용"
      },
      {
        "category": "확장 무결성",
        "sub": "고유(Unique) & 비즈니스 규칙",
        "desc": "후보키 고유성 보장(NULL은 허용하되 중복 불가) 및 복합 업무 규칙(예: 주문금액 <= 한도액)을 트리거·애플리케이션으로 강제"
      },
      {
        "category": "생성 시 고려사항",
        "sub": "성능 트레이드오프 & 대량적재",
        "desc": "과도한 FK·트리거 설정은 INSERT/UPDATE 시 검증 락과 I/O 부하를 유발하므로 대량 배치 적재 시 제약조건 임시 비활성화나 앱 레벨 검증 병행 검토"
      }
    ],
    "keywords": [
      "개체 무결성(PK)",
      "참조 무결성(FK)",
      "도메인 무결성(CHECK)",
      "Cascade / Restrict",
      "트리거(Trigger)",
      "무결성 vs 성능 트레이드오프"
    ],
    "differentiation": "[유형 B] 대규모 MSA·분산 DB 환경에서 물리적 외래키(FK) 제거 추세와 정합성 보완 전략\n① 물리적 FK의 한계: 초당 수만 건 트랜잭션이 몰리는 서비스나 MSA(서비스별 DB 분리) 환경에서는 물리적 FK 제약으로 인한 부모 테이블 공유 락 경합과 샤딩 불가 문제가 발생.\n② 실무 아키텍처 해법: 물리적 FK는 제거하되 논리적 참조 관계와 인덱스는 유지하고, 서비스 간 데이터 정합성은 이벤트 기반 보상 트랜잭션(Saga 패턴)과 일일 정합성 검증 배치(Reconciliation)로 보장."
  },
  {
    "domain": "모의고사",
    "topic": "논리 데이터 모델링 절차와 데이터 이력 관리 (점진적 · 시점 · 구간 이력)",
    "mnemonic": "절차: 엔터티도출 → 주식별자 → 관계정의 → 속성정의 → 정규화 / 이력: 변경(점) · 발생(건) · 진행(시작~종료 구간)",
    "definition": "업무 요건 논리 구조로 설계하고 시계열 이력 관리 기법",
    "diagramImg": "exam_q110.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 논리 모델링 개념·목적 | 업무 요건의 청사진화 | 개념 모델(핵심 엔터티 골격)을 구체화하여 특정 DBMS에 종속되지 않는 엔터티·속성·관계·식별자를 완성하고 정규화로 중복 제거 |\n| 엔터티 상세화 절차 | 엔터티 → 식별자 → 관계 → 속성 | 핵심/중요/행위 엔터티 도출 → 주식별자(유일·최소·불변·존재성) 확정 → 관계(식별/비식별·기수성·선택성) 연결 → 속성 및 정규화(1NF~BCNF) |\n| 데이터 이력 관리 | 발생 이력 & 변경 이력 | 사건이 발생할 때마다 일시(Timestamp)와 함께 누적 기록(로그·거래내역) 및 마스터 속성 변경 시 이전 값을 보관 |\n| | 선분(구간) 이력 모델링 | 유효시작일자(Start_DT)와 유효종료일자(End_DT, 최종건은 '9999-12-31')를 주식별자에 포함해 특정 시점 기준(BETWEEN) 조인 성능을 극대화 |\n| DW 차원 이력 (SCD) | SCD Type 1 · 2 · 3 | Type 1(단순 덮어쓰기), Type 2(신규 행 추가 + 시작/종료일 및 현재여부 플래그 부여), Type 3(이전값 별도 컬럼 추가) |",
    "keywords": [
      "논리 데이터 모델링",
      "주식별자 4대 특징(유최불존)",
      "식별 vs 비식별 관계",
      "선분이력(시작일~종료일)",
      "점진적 이력",
      "SCD Type 2"
    ],
    "differentiation": "[유형 A] 점 이력(변경일자 단일 컬럼) vs 선분 이력(시작일자 + 종료일자) 모델링 비교\n① 점 이력의 조회 한계: 특정 과거 시점의 유효 데이터를 찾으려면 `MAX(변경일자) <= 기준일` 서브쿼리를 매번 수행해야 하므로 대용량 조인 시 성능이 급격히 저하됨.\n② 선분 이력의 우위: 입력/수정 시 직전 데이터의 종료일자를 갱신해야 하는 쓰기 부하는 약간 추가되나, 조회 시 단순 `기준일 BETWEEN 시작일자 AND 종료일자` 조건만으로 인덱스를 타며 초고속 시점 조회가 가능."
  },
  {
    "domain": "모의고사",
    "topic": "NoSQL 특징, 4대 데이터 모델 및 모델링 패턴",
    "mnemonic": "BASE(Basically Available · Soft-state · Eventually Consistent) / Key-Value · Document · Wide-Column · Graph / Query-Driven 모델링",
    "definition": "스키마 유연성과 수평 확장성을 제공 비관계형 DB 구조",
    "details": "[RDB: Schema-on-Write → 정규화 → Join 중심 (Storage 최적화)]\n[NoSQL: Query-Driven (화면/접근 패턴 먼저 정의) → 역정규화·임베딩(Embedding)·참조(Referencing) 설계 (Read/Scale-out 최적화)]",
    "tableRows": [
      {
        "category": "NoSQL 핵심 특징",
        "sub": "CAP 정리 & BASE 속성",
        "desc": "네트워크 분할(P) 하에서 일관성(C) 대신 가용성(A)과 결과적 일관성(Eventual Consistency, BASE)을 선택해 무한 수평 확장(Sharding) 지원"
      },
      {
        "category": "4대 데이터 모델",
        "sub": "Key-Value & Document",
        "desc": "Key-Value(Redis, DynamoDB: 단순 키 기반 초고속 캐시/세션), Document(MongoDB: JSON/BSON 계층 문서 단위 저장)"
      },
      {
        "category": "",
        "sub": "Wide-Column & Graph",
        "desc": "Column-Family(Cassandra, HBase: 대규모 시계열·쓰기 특화), Graph(Neo4j: 노드·엣지 관계망 탐색)"
      },
      {
        "category": "모델링 절차",
        "sub": "Query-Driven (쿼리 우선)",
        "desc": "① 도메인 파악 → ② 애플리케이션 조회/쓰기 쿼리 패턴(Access Pattern) 식별 → ③ 단일 조회로 끝나도록 문서/컬럼패밀리 역정규화 매핑"
      },
      {
        "category": "핵심 설계 패턴",
        "sub": "Embedding vs Referencing",
        "desc": "1:1 및 1:Few 관계는 한 문서 안에 내장(Embedding: 조인 제거), 1:Many(수만 건 무한 증가)나 자주 단독 수정되는 개체는 ID 참조(Referencing) 분리"
      }
    ],
    "keywords": [
      "CAP 정리 / PACELC",
      "BASE",
      "Key-Value / Document / Column / Graph",
      "Query-Driven Modeling",
      "Embedding vs Referencing",
      "Single-Table Design"
    ],
    "differentiation": "[유형 A] RDBMS 데이터 모델링(데이터 중심) vs NoSQL 데이터 모델링(쿼리 중심) 비교\n① 사고방식의 역전: RDB는 '어떤 데이터가 존재하는가'를 분석해 중복 없이 정규화한 뒤 나중에 SQL Join으로 조합하지만, NoSQL은 Join이 없거나 비싸므로 '애플리케이션 화면이 어떤 쿼리로 데이터를 읽는가'를 먼저 정의한 뒤 그 모양 그대로 데이터를 중복 내장(Embedding)해 저장."
  },
  {
    "domain": "모의고사",
    "topic": "데이터베이스 트랜잭션 회복 (Recovery: REDO/UNDO · 체크포인트 · 그림자 페이징)",
    "mnemonic": "WAL(로그선행쓰기) · Steal(UNDO 필요)/No-Force(REDO 필요) · ARIES(분·재·취) · Checkpoint · Shadow Paging",
    "definition": "장애 발생 시 트랜잭션 원자성과 영속성을 복구하는 기술",
    "details": "[로그 기반 회복 (WAL)] : 수정 전 로그 먼저 디스크 기록 ──> 장애 시 [UNDO (미완료 트랜잭션 취소: 원자성)] + [REDO (커밋 완료 트랜잭션 재반영: 영속성)]\n[검사점 (Checkpoint)] : 주기적으로 메모리 더티 버퍼를 디스크에 Flush하고 로그에 표시 ──> 복구 시 Checkpoint 이후 로그만 스캔해 복구 시간 단축\n[그림자 페이징 (Shadow Paging)] : 로그 없이 현재 페이지 테이블과 그림자 페이지 테이블(디스크 원본) 이중 유지",
    "tableRows": [
      {
        "category": "REDO와 UNDO",
        "sub": "Steal & No-Force 정책",
        "desc": "Steal(미커밋 변경본이 디스크에 먼저 내려갈 수 있음 → 장애 시 UNDO 필수), No-Force(커밋 시점에 데이터 블록을 즉시 디스크에 안 내려도 됨 → 장애 시 REDO 필수)"
      },
      {
        "category": "",
        "sub": "지연갱신 vs 즉시갱신",
        "desc": "지연갱신(커밋 전까지 DB 반영 보류: NO-UNDO / REDO), 즉시갱신(커밋 전에도 DB 반영 허용: UNDO / REDO 모두 수행)"
      },
      {
        "category": "체크포인트 기법",
        "sub": "복구 시간 단축",
        "desc": "장애 시 처음부터 모든 로그를 읽는 오버헤드를 막기 위해 검사점(Checkpoint) 시점의 활성 트랜잭션 목록을 기록하고 그 주변부터만 복구"
      },
      {
        "category": "",
        "sub": "ARIES 회복 알고리즘",
        "desc": "현대 DBMS 표준 3단계 복구: ① Analysis(분석: 더티페이지·활성TX 파악) → ② Redo(역사 반복) → ③ Undo(미완료 TX 역방향 취소)"
      },
      {
        "category": "그림자 페이징",
        "sub": "비로그(Non-Log) 방식",
        "desc": "트랜잭션 수행 중 복사본 페이지에만 수정 후 완료 시 페이지 테이블 포인터만 교체 (로그 오버헤드 없으나 단편화·동시성 한계)"
      }
    ],
    "keywords": [
      "WAL(Write-Ahead Logging)",
      "UNDO(원자성)",
      "REDO(영속성)",
      "Steal / No-Force",
      "Checkpoint",
      "ARIES(Analysis-Redo-Undo)",
      "Shadow Paging"
    ],
    "differentiation": "[유형 A] 로그 기반 회복(WAL/ARIES) vs 그림자 페이징(Shadow Paging) 비교 및 현대 스토리지 응용\n① 그림자 페이징의 한계: 다중 트랜잭션 동시 수행 시 페이지 테이블 경합이 심하고 데이터가 물리적으로 흩어지는 디스크 단편화가 발생해 전통 RDB에서는 WAL(ARIES)이 승리함.\n② Copy-on-Write(CoW)로의 부활: 그러나 덮어쓰기가 불가능한 SSD(NAND 플래시 FTL)와 ZFS/Btrfs 파일시스템, LMDB에서는 그림자 페이징의 원리인 Copy-on-Write 트리가 현대적으로 재부상."
  },
  {
    "domain": "모의고사",
    "topic": "DBMS 성능저하 원인과 계층별 성능 개선 방안 (SQL · DB설계 · 인스턴스 · 인프라)",
    "mnemonic": "목적(처리량↑·응답시간↓) / 원인(불량SQL·인덱스부재·락경합·메모리/IO병목) / 튜닝 4단계(업무·DB설계·메모리/인스턴스·SQL)",
    "definition": "DB 병목 원인을 진단해 SQL과 인덱스를 최적화 기법",
    "diagramImg": "exam_q113.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 성능개선 목적 | 응답시간 단축 & 처리량 증대 | 제한된 하드웨어 자원으로 디스크 I/O 블록 액세스를 최소화하여 온라인 응답 지연(Latency) 단축 및 동시 처리량(TPS) 극대화 |\n| 성능저하 주요 원인 | 비효율 SQL & 인덱스 불량 | 인덱스 컬럼 가공으로 인한 Full Table Scan, 하드 파싱(Hard Parsing) 과다(바인드 변수 미사용), 잘못된 조인 순서·방식 |\n| | 아키텍처·락·인프라 병목 | 과도한 정규화/역정규화 실패, 비좁은 버퍼 캐시(Buffer Cache Hit율 저하), 과도한 락 대기(Lock Contention) 및 디스크 I/O 경합 |\n| 단계별 개선 방안 | SQL 및 인덱스 튜닝 | 바인드 변수 사용(Soft Parsing 유도), 결합 인덱스 컬럼 순서(선정이율·선택도) 최적화, 커버링 인덱스 및 실행계획 힌트 조정 |\n| | DB 설계 & 아키텍처 확장 | 대용량 테이블 파티셔닝(Range/Hash/List), 샤딩, 읽기 전용 복제본(Read Replica) 분리 및 앞단 인메모리 캐시(Redis) 도입 |",
    "keywords": [
      "디스크 I/O 최소화",
      "실행계획(Execution Plan)",
      "인덱스 스캔 vs Full Scan",
      "하드파싱(바인드 변수)",
      "파티셔닝/샤딩",
      "버퍼 캐시 히트율"
    ],
    "differentiation": "[유형 B] 튜닝 비용 대비 효과(ROI)가 가장 높은 단계와 AI 자율 데이터베이스(Autonomous DB) 진화\n① 튜닝 ROI 법칙: 하드웨어 증설은 비용이 가장 많이 들지만 효과는 제한적인 반면, 전체 성능 저하의 70~80%를 차지하는 '악성 SQL 및 인덱스 튜닝'과 '논리/물리 모델링 개선'이 비용 대비 성능 개선 효과가 압도적.\n② AI 기반 DB 옵티마이저: 최근 DBMS는 머신러닝으로 워크로드 패턴을 학습해 누락된 인덱스를 자동 생성·삭제하고 실행계획 오차를 스스로 교정하는 Self-Driving DB로 발전."
  },
  {
    "domain": "모의고사",
    "topic": "트랜잭션 4대 특성 (ACID), 상태전이도 및 보장 기법",
    "mnemonic": "A(원자성: 회복/Undo) · C(일관성: 무결성/병행) · I(고립성: 병행제어/Lock/MVCC) · D(영속성: 회복/Redo/WAL)",
    "definition": "DB 논리적 작업 단위인 트랜잭션의 완전성을 보장 체계",
    "details": "[상태전이] 활동(Active) ──(마지막 연산 실행)──> 부분완료(Partially Committed) ──(로그/디스크 Flush 성공)──> 완료(Committed)\n             │ (오류/인터럽트)                        │ (커밋 중 장애)\n             └──────────────> 실패(Failed) <──────────┘  ──(Undo 롤백 완료)──> 철회(Aborted) ──> 재시작 또는 폐기",
    "tableRows": [
      {
        "category": "ACID 4대 특징",
        "sub": "Atomicity (원자성)",
        "desc": "트랜잭션 연산은 모두 반영되거나 전혀 반영되지 않아야 함(All or Nothing) — 보장 기법: 회복 관리자(Undo 로깅, 그림자 페이징)"
      },
      {
        "category": "",
        "sub": "Consistency (일관성)",
        "desc": "트랜잭션 실행 전후로 DB가 항상 무결성 제약조건과 비즈니스 규칙(예: 이체 전후 계좌 총합 일치)을 만족해야 함 — 보장: 무결성 제약·트리거·병행제어"
      },
      {
        "category": "",
        "sub": "Isolation (고립성/격리성)",
        "desc": "실행 중인 트랜잭션의 중간 결과를 타 트랜잭션이 볼 수 없도록 격리 — 보장 기법: 병행제어(2PL 로킹, 타임스탬프, MVCC)"
      },
      {
        "category": "",
        "sub": "Durability (영속성/지속성)",
        "desc": "성공적으로 커밋된 트랜잭션 결과는 시스템 장애가 발생해도 영구 보존되어야 함 — 보장 기법: WAL 선행로깅 및 Redo 회복, 이중화"
      },
      {
        "category": "상태전이 5단계",
        "sub": "활·부·완 / 실·철",
        "desc": "Active(실행 중) → Partially Committed(연산 완료 직후, 커밋 로그 기록 전) → Committed(최종 확정) 또는 Failed(실패) → Aborted(Undo 롤백 완료)"
      }
    ],
    "keywords": [
      "ACID",
      "All or Nothing",
      "Active / Partially Committed / Committed / Failed / Aborted",
      "Undo / Redo",
      "2PL / MVCC",
      "분산 트랜잭션(2PC/Saga)"
    ],
    "differentiation": "[유형 A] 단일 DB ACID 트랜잭션 vs 마이크로서비스(MSA) 분산 트랜잭션(2PC vs Saga) 비교\n① 부분완료(Partially Committed)가 존재하는 이유: 메모리 버퍼에서만 연산이 끝났을 뿐 아직 디스크 WAL 로그에 커밋 레코드가 기록되기 전 상태를 구분하기 위함.\n② MSA 환경 확장: 이기종 DB로 분리된 MSA에서는 강한 결합을 유발하는 2PC(2단계 커밋) 대신, 각 로컬 트랜잭션의 ACID를 순차 실행하고 실패 시 보상 트랜잭션(Compensating Transaction)으로 되돌리는 Saga 패턴을 채택."
  },
  {
    "domain": "모의고사",
    "topic": "서브네팅 (Subnetting)과 VLSM",
    "mnemonic": "서브네팅(호스트비트 1로 빌림·네트워크 분할·브로드캐스트 축소·VLSM) vs 슈퍼네팅(네트워크비트 0으로 축소·경로요약 Route Aggregation·라우팅테이블 축소)",
    "definition": "IP 주소 낭비 방지 위해 호스트 비트를 분할하는 기법",
    "details": "[서브네팅 (분할)] : [Network ID | Subnet ID(1로 확장) | Host ID] ──> 거대 망을 소규모 브로드캐스트 도메인으로 쪼갬 (VLSM)\n[슈퍼네팅 (병합)] : [공통 Prefix만 남기고 마스크 축소 (/24 여러 개 → /22 1개)] ──> 라우팅 테이블 엔트리 축소 (Route Aggregation)",
    "tableRows": [
      {
        "category": "서브네팅 (Subnetting)",
        "sub": "네트워크 분할 (Mask 확장)",
        "desc": "Host ID 영역의 비트를 빌려(서브넷 마스크 1의 개수 증가, 예: /24 → /26) 하나의 큰 네트워크를 여러 개의 작은 서브넷으로 분할"
      },
      {
        "category": "",
        "sub": "목적 및 VLSM",
        "desc": "브로드캐스트 도메인 축소로 트래픽 혼잡 방지, 보안 격리 및 부서별 호스트 수에 맞춰 가변 길이 마스크(VLSM) 적용해 IP 고갈 완화"
      },
      {
        "category": "슈퍼네팅 (Supernetting)",
        "sub": "네트워크 병합 (Mask 축소)",
        "desc": "연속된 여러 개의 작은 네트워크 프리픽스를 묶어(마스크 1의 개수 감소, 예: 4개의 /24 → 1개의 /22) 단일 큰 네트워크로 통합"
      },
      {
        "category": "",
        "sub": "목적 및 CIDR 경로요약",
        "desc": "인터넷 백본 라우터의 라우팅 테이블 크기 폭발을 막기 위해 경로 요약(Route Summarization / Aggregation) 수행"
      }
    ],
    "keywords": [
      "Subnetting",
      "Supernetting",
      "CIDR",
      "VLSM(가변길이 서브넷마스크)",
      "Route Aggregation(경로요약)",
      "브로드캐스트 도메인"
    ],
    "differentiation": "[유형 A] 서브네팅 vs 슈퍼네팅 비교 및 Longest Prefix Match(최장 프리픽스 일치) 라우팅 원리\n① 방향성 대비: 서브네팅은 조직 '내부'에서 관리·보안을 위해 마스크 길이를 늘려 쪼개는 것이고, 슈퍼네팅은 ISP/백본 '외부'로 경로를 광고(BGP)할 때 마스크 길이를 줄여 하나로 합치는 것.\n② 예외 라우팅: 경로 요약된 슈퍼넷 주소와 세부 서브넷 주소가 라우팅 테이블에 동시에 존재할 때, 라우터는 항상 서브넷 마스크가 가장 긴(가장 구체적인) 경로를 우선 선택(Longest Prefix Match)."
  },
  {
    "domain": "모의고사",
    "topic": "슈퍼네팅 (Supernetting / CIDR 경로 요약)",
    "mnemonic": "서브네팅(호스트비트 1로 빌림·네트워크 분할·브로드캐스트 축소·VLSM) vs 슈퍼네팅(네트워크비트 0으로 축소·경로요약 Route Aggregation·라우팅테이블 축소)",
    "definition": "연속된 소규모 네트워크를 단일 프리픽스로 병합하는 기법",
    "details": "[서브네팅 (분할)] : [Network ID | Subnet ID(1로 확장) | Host ID] ──> 거대 망을 소규모 브로드캐스트 도메인으로 쪼갬 (VLSM)\n[슈퍼네팅 (병합)] : [공통 Prefix만 남기고 마스크 축소 (/24 여러 개 → /22 1개)] ──> 라우팅 테이블 엔트리 축소 (Route Aggregation)",
    "tableRows": [
      {
        "category": "서브네팅 (Subnetting)",
        "sub": "네트워크 분할 (Mask 확장)",
        "desc": "Host ID 영역의 비트를 빌려(서브넷 마스크 1의 개수 증가, 예: /24 → /26) 하나의 큰 네트워크를 여러 개의 작은 서브넷으로 분할"
      },
      {
        "category": "",
        "sub": "목적 및 VLSM",
        "desc": "브로드캐스트 도메인 축소로 트래픽 혼잡 방지, 보안 격리 및 부서별 호스트 수에 맞춰 가변 길이 마스크(VLSM) 적용해 IP 고갈 완화"
      },
      {
        "category": "슈퍼네팅 (Supernetting)",
        "sub": "네트워크 병합 (Mask 축소)",
        "desc": "연속된 여러 개의 작은 네트워크 프리픽스를 묶어(마스크 1의 개수 감소, 예: 4개의 /24 → 1개의 /22) 단일 큰 네트워크로 통합"
      },
      {
        "category": "",
        "sub": "목적 및 CIDR 경로요약",
        "desc": "인터넷 백본 라우터의 라우팅 테이블 크기 폭발을 막기 위해 경로 요약(Route Summarization / Aggregation) 수행"
      }
    ],
    "keywords": [
      "Subnetting",
      "Supernetting",
      "CIDR",
      "VLSM(가변길이 서브넷마스크)",
      "Route Aggregation(경로요약)",
      "브로드캐스트 도메인"
    ],
    "differentiation": "[유형 A] 서브네팅 vs 슈퍼네팅 비교 및 Longest Prefix Match(최장 프리픽스 일치) 라우팅 원리\n① 방향성 대비: 서브네팅은 조직 '내부'에서 관리·보안을 위해 마스크 길이를 늘려 쪼개는 것이고, 슈퍼네팅은 ISP/백본 '외부'로 경로를 광고(BGP)할 때 마스크 길이를 줄여 하나로 합치는 것.\n② 예외 라우팅: 경로 요약된 슈퍼넷 주소와 세부 서브넷 주소가 라우팅 테이블에 동시에 존재할 때, 라우터는 항상 서브넷 마스크가 가장 긴(가장 구체적인) 경로를 우선 선택(Longest Prefix Match)."
  },
  {
    "domain": "모의고사",
    "topic": "6G 이동통신 주요 기술요소와 비전 (IMT-2030)",
    "mnemonic": "1Tbps · 0.1ms · 10^7연결 / Sub-THz · AI-Native(AI-RAN) · 비지상망(NTN/위성) · 센싱통신결합(ISAC) · RIS",
    "definition": "초공간·초지능 구현 위해 위성·AI 융합한 6세대 통신",
    "details": "[IMT-2030(6G) 6대 시나리오] 기존 5G 확장(초광대역+ · 초저지연+ · 초연결+) + 신규 3대 융합(AI와 통신 결합 · 센싱과 통신 결합 ISAC · 유비쿼터스 연결 NTN)]",
    "tableRows": [
      {
        "category": "성능 목표 (KPI)",
        "sub": "5G 대비 혁신 지표",
        "desc": "최대 전송속도 1Tbps(5G의 50배), 체감속도 1Gbps, 무선 지연시간 0.1ms(1/10), 연결밀도 10^7개/km^2, 이동성 1,000km/h"
      },
      {
        "category": "무선·안테나 기술",
        "sub": "어퍼미드밴드 & Sub-THz",
        "desc": "7~24GHz(어퍼미드밴드) 및 100GHz~300GHz(서브 테라헤르츠) 초광대역 주파수 발굴, 초대규모 MIMO(E-MIMO)"
      },
      {
        "category": "",
        "sub": "RIS & 전이중 통신",
        "desc": "전파 반사 각도를 제어해 음영지역을 없애는 지능형 반사 표면(RIS) 및 동시 송수신 전이중 통신(Full-Duplex)"
      },
      {
        "category": "구조·융합 기술",
        "sub": "3차원 비지상망 (NTN)",
        "desc": "지상 기지국과 저궤도 위성(LEO)·성층권 드론(HAPS)을 단일 표준으로 묶어 해상·공중·오지까지 3차원 100% 커버리지 달성"
      },
      {
        "category": "",
        "sub": "AI-Native & ISAC",
        "desc": "네트워크 설계·운영 전 과정에 AI를 내재화(AI-RAN)하고, 전파 반사를 이용해 레이더처럼 주변 물체를 정밀 감지(ISAC: 센싱·통신 융합)"
      }
    ],
    "keywords": [
      "ITU-R IMT-2030",
      "Sub-THz",
      "어퍼미드밴드",
      "NTN(비지상망/저궤도위성)",
      "ISAC(통신·센싱 융합)",
      "RIS(지능형반사표면)",
      "AI-Native"
    ],
    "differentiation": "[유형 A] 5G(IMT-2020) vs 6G(IMT-2030) 패러다임 변화 비교\n① 2차원 지상망에서 3차원 공간망으로: 5G가 지상 기지국 중심(지구 면적의 20% 커버)이었다면, 6G는 저궤도 위성(NTN)을 기본 내재화하여 도심항공교통(UAM)·해상까지 3차원 전 지구 연결을 실현.\n② 통신망의 센서화(ISAC): 별도 카메라·라이다 없이 기지국 전파만으로 자율주행차·드론의 위치와 속도를 cm 단위로 감지하는 통신·센싱 일체화 달성."
  },
  {
    "domain": "모의고사",
    "topic": "TCP 3-Way Handshake (연결 설정 절차)",
    "mnemonic": "3-Way 연결(SYN → SYN+ACK → ACK / SYN Flooding 공격) / 4-Way 해제(FIN → ACK(Close_Wait) → FIN(Last_Ack) → ACK(Time_Wait 2MSL))",
    "definition": "신뢰성 있는 전송 전 양단 간 시퀀스 번호 동기화 절차",
    "details": "[3-Way 연결] Client(SYN, seq=x) ──> Server(SYN_RCVD: SYN+ACK, seq=y, ack=x+1) ──> Client(ESTABLISHED: ACK, ack=y+1)\n[4-Way 해제] 능동종료자(FIN) ──> 수동종료자(ACK: CLOSE_WAIT, 잔여데이터 전송) ──> 수동종료자(FIN: LAST_ACK) ──> 능동종료자(ACK: TIME_WAIT 2MSL 대기 후 CLOSED)",
    "tableRows": [
      {
        "category": "3-Way Handshake",
        "sub": "양방향 연결 수립",
        "desc": "① SYN(클라이언트 초기 순서번호 ISN 전송) → ② SYN+ACK(서버 수락 및 서버 ISN 전송) → ③ ACK(클라이언트 확인, ESTABLISHED)"
      },
      {
        "category": "",
        "sub": "왜 2-Way가 아닌 3-Way인가",
        "desc": "전이중(Full-Duplex) 통신에서 양쪽 모두 자신의 송신 능력과 상대방의 수신 능력(양방향 시퀀스 번호 동기화)을 확인하기 위한 최소 횟수"
      },
      {
        "category": "4-Way Handshake",
        "sub": "독립적 양방향 연결 종료",
        "desc": "① FIN(능동 종료 요청) → ② ACK(수동측 수신 확인, CLOSE_WAIT 진입 후 남은 데이터 마저 전송) → ③ FIN(수동측도 전송 완료 통보) → ④ ACK"
      },
      {
        "category": "",
        "sub": "왜 해제만 4단계인가",
        "desc": "Half-Close(반닫기) 특성 때문: 한쪽이 먼저 보낼 데이터가 끝나 FIN을 보내도 상대방은 아직 보낼 잔여 데이터가 남아있을 수 있어 ACK와 FIN을 분리 전송"
      },
      {
        "category": "핵심 상태 이슈",
        "sub": "TIME_WAIT (2MSL 대기)",
        "desc": "능동 종료자가 마지막 ACK 전송 후 지연 패킷 혼선 방지 및 마지막 ACK 유실 대비를 위해 2×MSL 동안 소켓을 유지하는 상태"
      }
    ],
    "keywords": [
      "3-Way Handshake",
      "4-Way Handshake",
      "ISN(초기순서번호)",
      "Half-Close",
      "TIME_WAIT(2MSL)",
      "CLOSE_WAIT",
      "SYN Flooding"
    ],
    "differentiation": "[유형 B] 대규모 트래픽 서버에서 발생하는 `TIME_WAIT` 및 `CLOSE_WAIT` 소켓 고갈 장애와 해결 방안\n① CLOSE_WAIT 누적 장애: 애플리케이션 코드에서 `socket.close()`를 호출하지 않는 버그로 발생 → 코드 리소스 반납(try-with-resources) 수정 필수.\n② TIME_WAIT 소켓 고갈: 짧은 연결이 반복될 때 포트가 고갈됨 → Connection Pool(Keep-Alive) 재사용을 기본으로 하고, 커널 파라미터(`tcp_tw_reuse`) 활성화로 해결.\n③ QUIC(HTTP/3) 진화: TCP 3-Way + TLS 핸드셰이크의 왕복 지연을 극복하기 위해 UDP 기반 QUIC은 연결 수립과 암호화 협상을 단 1-RTT(재접속 시 0-RTT)로 단축."
  },
  {
    "domain": "모의고사",
    "topic": "TCP 4-Way Handshake (연결 종료와 TIME_WAIT)",
    "mnemonic": "3-Way 연결(SYN → SYN+ACK → ACK / SYN Flooding 공격) / 4-Way 해제(FIN → ACK(Close_Wait) → FIN(Last_Ack) → ACK(Time_Wait 2MSL))",
    "definition": "전이중 TCP 통신 양방향 데이터 채널 안전 종료 절차",
    "details": "[3-Way 연결] Client(SYN, seq=x) ──> Server(SYN_RCVD: SYN+ACK, seq=y, ack=x+1) ──> Client(ESTABLISHED: ACK, ack=y+1)\n[4-Way 해제] 능동종료자(FIN) ──> 수동종료자(ACK: CLOSE_WAIT, 잔여데이터 전송) ──> 수동종료자(FIN: LAST_ACK) ──> 능동종료자(ACK: TIME_WAIT 2MSL 대기 후 CLOSED)",
    "tableRows": [
      {
        "category": "3-Way Handshake",
        "sub": "양방향 연결 수립",
        "desc": "① SYN(클라이언트 초기 순서번호 ISN 전송) → ② SYN+ACK(서버 수락 및 서버 ISN 전송) → ③ ACK(클라이언트 확인, ESTABLISHED)"
      },
      {
        "category": "",
        "sub": "왜 2-Way가 아닌 3-Way인가",
        "desc": "전이중(Full-Duplex) 통신에서 양쪽 모두 자신의 송신 능력과 상대방의 수신 능력(양방향 시퀀스 번호 동기화)을 확인하기 위한 최소 횟수"
      },
      {
        "category": "4-Way Handshake",
        "sub": "독립적 양방향 연결 종료",
        "desc": "① FIN(능동 종료 요청) → ② ACK(수동측 수신 확인, CLOSE_WAIT 진입 후 남은 데이터 마저 전송) → ③ FIN(수동측도 전송 완료 통보) → ④ ACK"
      },
      {
        "category": "",
        "sub": "왜 해제만 4단계인가",
        "desc": "Half-Close(반닫기) 특성 때문: 한쪽이 먼저 보낼 데이터가 끝나 FIN을 보내도 상대방은 아직 보낼 잔여 데이터가 남아있을 수 있어 ACK와 FIN을 분리 전송"
      },
      {
        "category": "핵심 상태 이슈",
        "sub": "TIME_WAIT (2MSL 대기)",
        "desc": "능동 종료자가 마지막 ACK 전송 후 지연 패킷 혼선 방지 및 마지막 ACK 유실 대비를 위해 2×MSL 동안 소켓을 유지하는 상태"
      }
    ],
    "keywords": [
      "3-Way Handshake",
      "4-Way Handshake",
      "ISN(초기순서번호)",
      "Half-Close",
      "TIME_WAIT(2MSL)",
      "CLOSE_WAIT",
      "SYN Flooding"
    ],
    "differentiation": "[유형 B] 대규모 트래픽 서버에서 발생하는 `TIME_WAIT` 및 `CLOSE_WAIT` 소켓 고갈 장애와 해결 방안\n① CLOSE_WAIT 누적 장애: 애플리케이션 코드에서 `socket.close()`를 호출하지 않는 버그로 발생 → 코드 리소스 반납(try-with-resources) 수정 필수.\n② TIME_WAIT 소켓 고갈: 짧은 연결이 반복될 때 포트가 고갈됨 → Connection Pool(Keep-Alive) 재사용을 기본으로 하고, 커널 파라미터(`tcp_tw_reuse`) 활성화로 해결.\n③ QUIC(HTTP/3) 진화: TCP 3-Way + TLS 핸드셰이크의 왕복 지연을 극복하기 위해 UDP 기반 QUIC은 연결 수립과 암호화 협상을 단 1-RTT(재접속 시 0-RTT)로 단축."
  },
  {
    "domain": "모의고사",
    "topic": "오버레이 네트워크 (Overlay Network, VXLAN)",
    "mnemonic": "언더레이(물리적 스위치/라우터·IP/BGP/OSPF 전송기반) vs 오버레이(논리적 가상망·VXLAN/GRE/IPsec 터널링 캡슐화·유연성)",
    "definition": "물리 네트워크 위에 캡슐화 터널링로 구축한 논리 가상망",
    "diagramImg": "exam_q118.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 언더레이 (Underlay) | 물리적 기반 네트워크 | 실제 케이블, 라우터, L2/L3 스위치(Spine-Leaf)로 구성된 물리적 패킷 전달 인프라 (OSPF, IS-IS, BGP, MPLS 구동) |\n| | 역할 및 한계 | 물리적 도달성(IP Reachability)과 고속 포워딩을 책임지나, 테넌트 추가·이동 시 물리 장비 설정을 일일이 변경해야 하는 경직성 존재 |\n| 오버레이 (Overlay) | 논리적 가상 네트워크 | 언더레이 물리망 위에 캡슐화(Encapsulation)와 터널링 기술을 이용해 소프트웨어적으로 추상화해 구축한 가상 네트워크 |\n| | 대표 프로토콜 | 데이터센터 가상화(VXLAN, NVGRE, Geneve: 24비트 VNI로 1,600만 개 논리망 확장), 광역망(SD-WAN, IPsec VPN, GRE) |\n| 상호 동작 원리 | VTEP 캡슐화·역캡슐화 | 출발지 VTEP이 원본 L2 프레임을 UDP/IP 헤더로 감싸(Encap) 언더레이 IP망으로 통과시킨 후 도착지 VTEP에서 벗겨냄(Decap) |",
    "keywords": [
      "Underlay Network",
      "Overlay Network",
      "캡슐화(Encapsulation)",
      "VXLAN(VNI 1,600만개)",
      "VTEP",
      "SD-WAN",
      "Spine-Leaf"
    ],
    "differentiation": "[유형 B] 오버레이 네트워크(VXLAN 등) 도입 시 발생하는 문제점(MTU 단편화·가시성 상실)과 극복 방안\n① MTU 초과 단편화(Fragmentation): VXLAN 캡슐화 시 약 50바이트의 외부 헤더가 추가되어 기본 MTU(1500B)를 초과하면 패킷 분할로 성능이 급락함 → 언더레이 물리 스위치 전체에 점보 프레임(Jumbo Frame, MTU 9000B) 설정 필수.\n② 장애 가시성 확보: 물리 경로 장애가 가상망 전체에 영향을 주므로 언더레이와 오버레이 토폴로지를 통합 매핑해 관제하는 SDN 컨트롤러·성능 모니터링 체계 구축."
  },
  {
    "domain": "모의고사",
    "topic": "언더레이 네트워크 (Underlay Network, Spine-Leaf)",
    "mnemonic": "언더레이(물리적 스위치/라우터·IP/BGP/OSPF 전송기반) vs 오버레이(논리적 가상망·VXLAN/GRE/IPsec 터널링 캡슐화·유연성)",
    "definition": "패킷의 실제 물리적 라우팅과 스위칭 전달 담당 기반망",
    "diagramImg": "exam_q118_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 언더레이 (Underlay) | 물리적 기반 네트워크 | 실제 케이블, 라우터, L2/L3 스위치(Spine-Leaf)로 구성된 물리적 패킷 전달 인프라 (OSPF, IS-IS, BGP, MPLS 구동) |\n| | 역할 및 한계 | 물리적 도달성(IP Reachability)과 고속 포워딩을 책임지나, 테넌트 추가·이동 시 물리 장비 설정을 일일이 변경해야 하는 경직성 존재 |\n| 오버레이 (Overlay) | 논리적 가상 네트워크 | 언더레이 물리망 위에 캡슐화(Encapsulation)와 터널링 기술을 이용해 소프트웨어적으로 추상화해 구축한 가상 네트워크 |\n| | 대표 프로토콜 | 데이터센터 가상화(VXLAN, NVGRE, Geneve: 24비트 VNI로 1,600만 개 논리망 확장), 광역망(SD-WAN, IPsec VPN, GRE) |\n| 상호 동작 원리 | VTEP 캡슐화·역캡슐화 | 출발지 VTEP이 원본 L2 프레임을 UDP/IP 헤더로 감싸(Encap) 언더레이 IP망으로 통과시킨 후 도착지 VTEP에서 벗겨냄(Decap) |",
    "keywords": [
      "Underlay Network",
      "Overlay Network",
      "캡슐화(Encapsulation)",
      "VXLAN(VNI 1,600만개)",
      "VTEP",
      "SD-WAN",
      "Spine-Leaf"
    ],
    "differentiation": "[유형 B] 오버레이 네트워크(VXLAN 등) 도입 시 발생하는 문제점(MTU 단편화·가시성 상실)과 극복 방안\n① MTU 초과 단편화(Fragmentation): VXLAN 캡슐화 시 약 50바이트의 외부 헤더가 추가되어 기본 MTU(1500B)를 초과하면 패킷 분할로 성능이 급락함 → 언더레이 물리 스위치 전체에 점보 프레임(Jumbo Frame, MTU 9000B) 설정 필수.\n② 장애 가시성 확보: 물리 경로 장애가 가상망 전체에 영향을 주므로 언더레이와 오버레이 토폴로지를 통합 매핑해 관제하는 SDN 컨트롤러·성능 모니터링 체계 구축."
  },
  {
    "domain": "모의고사",
    "topic": "CDN (Content Delivery Network) 트래픽 최적화 기술",
    "mnemonic": "캐싱(Push/Pull·Tiered) + 라우팅(GSLB·Anycast) + 전송최적화(HTTP/3 QUIC·TCP 가속·압축·동적가속 DSA) + 보안(Edge WAF/DDoS)",
    "definition": "엣지 서버 콘텐츠 캐싱해 지연 단축·대역폭 최적화 기술",
    "diagramImg": "exam_q119.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 최적 엣지 라우팅 | GSLB & Anycast | DNS 기반 GSLB(지리적 위치·서버 상태·응답시간 측정) 및 BGP Anycast를 통해 사용자와 가장 가까운 최적 Edge PoP 서버로 연결 |\n| 캐싱 아키텍처 | Pull / Push & Tiered Cache | 사용자 최초 요청 시 원본에서 가져오는 Pull, 사전 배포하는 Push 및 오리진 부하 감소를 위한 계층형 캐시(Edge → Regional Shield → Origin) |\n| | Cache Stampede 방지 | 캐시 만료 순간 수만 건 요청이 오리진으로 동시에 몰리는 현상을 Request Coalescing(동일 요청 병합 대기) 및 Stale-While-Revalidate로 차단 |\n| 동적·프로토콜 최적화 | DSA (동적 사이트 가속) | 캐싱 불가능한 개인화·결제 API 트래픽을 위해 엣지~오리진 간 영구 TCP 커넥션 풀링(Keep-Alive), 최적 경로 우회(SureRoute) 적용 |\n| | 차세대 전송 & 미디어 압축 | HTTP/3(QUIC 0-RTT), Brotli 압축, WebP/AVIF 이미지 자동 변환 및 HLS/DASH 적응형 비트레이트(ABR) 스트리밍 |",
    "keywords": [
      "Edge PoP",
      "GSLB / Anycast",
      "Origin Shield(계층형 캐싱)",
      "Request Coalescing",
      "DSA(동적 가속)",
      "HTTP/3 QUIC",
      "Edge Computing(Workers)"
    ],
    "differentiation": "[유형 C] 단순 정적 파일 캐싱에서 '엣지 컴퓨팅 & AI 추론 CDN'으로의 진화\n① 패러다임 확장: 과거 CDN이 이미지·동영상 정적 캐싱에만 쓰였다면, 현대 CDN(Cloudflare Workers, Lambda@Edge)은 전 세계 엣지 노드에서 서버리스 코드와 경량 AI 모델 및 시맨틱 캐시(Semantic Cache)를 직접 실행하여 오리진 서버 도달 전에 개인화 응답과 DDoS/WAF 보안을 완료."
  },
  {
    "domain": "모의고사",
    "topic": "5G 네트워크 슬라이싱 (5G Network Slicing)",
    "mnemonic": "단일 물리망 → 다수 독립 가상망(E2E: RAN+Transport+Core) / eMBB·URLLC·mMTC 맞춤형 SLA / SDN·NFV·MANO",
    "definition": "단일 물리 망을 서비스별 다수 논리 가상망 분할 기술",
    "diagramImg": "exam_q120.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 핵심 개념 | E2E 논리적 전담망 분할 | 하나의 물리적 네트워크 인프라를 단말~기지국(RAN)~전송망~코어망(5GC) 전 구간(End-to-End)에 걸쳐 독립된 가상 네트워크 슬라이스로 분리 |\n| 3대 서비스 슬라이스 | eMBB (초광대역) | UHD 영상, AR/VR 등 대용량 전송 중심 슬라이스 (넓은 대역폭 할당, 캐싱 서버 코어 배치) |\n| | URLLC (초저지연·고신뢰) | 자율주행, 원격수술, 스마트팩토리 제어용 슬라이스 (MEC 기지국 전진 배치로 1ms 지연 및 99.999% 신뢰도 보장) |\n| | mMTC (초연결 IoT) | 스마트시티 검침·센서 등 대규모 저전력 소량 데이터 연결 특화 슬라이스 |\n| 핵심 구현 기술 | NFV · SDN · 식별자(S-NSSAI) | 네트워크 기능 가상화(NFV/VNF·CNF), SDN 경로 분리, 제어/사용자 평면 분리(CUPS) 및 슬라이스 식별자(S-NSSAI / NSI) 기반 오케스트레이션 |",
    "keywords": [
      "End-to-End 가상망",
      "eMBB / URLLC / mMTC",
      "NFV / SDN",
      "CUPS(제어·사용자평면 분리)",
      "S-NSSAI",
      "SLA 보장",
      "격리성(Isolation)"
    ],
    "differentiation": "[유형 A] 전통적 QoS(DiffServ) vs 5G 네트워크 슬라이싱(Network Slicing) 비교\n① 전통적 QoS의 한계: 공유된 단일 파이프 내에서 패킷 우선순위만 조정하므로 타 트래픽 폭주 시 간섭을 완전히 막을 수 없고 코어망 구조까지 바꾸지는 못함.\n② 네트워크 슬라이싱의 차별점: 무선 자원(RB)부터 전송망(Hard/Soft Slicing), 가상화된 코어망 기능(UPF 전진 배치 여부)까지 완전히 격리된 전용 가상 인프라를 생성하여 타 슬라이스에 DDoS 공격이나 폭주가 발생해도 내 슬라이스의 SLA는 100% 완벽히 보호됨."
  },
  {
    "domain": "모의고사",
    "topic": "Wi-Fi 7 (IEEE 802.11be, EHT: Extremely High Throughput)",
    "mnemonic": "46Gbps · 320MHz 대역폭 · 4096-QAM · MLO(다중링크동시전송) · Multi-RU Puncturing",
    "definition": "초고속·초저지연 무선랜 위해 다중링크 결합한 표준 기술",
    "diagramImg": "exam_q121.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 표준 및 주요 사양 | IEEE 802.11be (EHT) | 2.4GHz, 5GHz, 6GHz 3개 대역 모두 활용, 최대 속도 46Gbps(Wi-Fi 6 대비 4.8배), 16×16 MU-MIMO 지원 |\n| 물리 계층 혁신 | 320MHz 초광대역 채널 | 6GHz 대역에서 기존 Wi-Fi 6E(160MHz) 대비 2배 넓어진 320MHz 채널 대역폭 확보 |\n| | 4096-QAM (4K-QAM) | 심볼당 전송 비트 수를 10비트(1024-QAM)에서 12비트(4096-QAM)로 높여 전송 효율 20% 향상 |\n| MAC 계층 핵심기술 | MLO (Multi-Link Operation) | 단말이 2.4GHz·5GHz·6GHz 중 복수 주파수 채널을 동시에 연결해 병합 전송하거나 무중단 채널 전환하여 초저지연·고신뢰 달성 |\n| | Multi-RU & Preamble Puncturing | 채널 내 일부 구간에 간섭이 있어도 전체 채널을 버리지 않고 간섭 구간만 구멍 뚫듯 제외(Puncturing)하여 나머지 주파수 대역을 낭비 없이 활용 |",
    "keywords": [
      "IEEE 802.11be(EHT)",
      "46Gbps",
      "320MHz",
      "4096-QAM",
      "MLO(다중링크동작)",
      "Preamble Puncturing",
      "Multi-RU"
    ],
    "differentiation": "[유형 A] Wi-Fi 6/6E(802.11ax) vs Wi-Fi 7(802.11be)의 결정적 차이점 (MLO의 혁신)\n① 기존 Wi-Fi 6E의 한계: 트라이밴드(2.4/5/6GHz)를 지원하더라도 단말은 한 번에 오직 '하나의 주파수 대역'에만 연결되어 통신할 수 있었음.\n② Wi-Fi 7 MLO(다중 링크 동작): 여러 주파수 대역을 동시에 묶어 데이터 스트림을 분산 전송(대역폭 합산)하거나 가장 혼잡이 없는 링크로 패킷을 즉시 복제·전환함으로써 유선 랜 수준의 극초저지연(XR·클라우드 게이밍·스마트팩토리)을 실현."
  },
  {
    "domain": "모의고사",
    "topic": "MQTT (Message Queuing Telemetry Transport)",
    "mnemonic": "MQTT(TCP·브로커 Pub/Sub·QoS 0/1/2·팩토리수집) vs CoAP(UDP·RESTful Req/Res·초저전력 센서제어) vs XMPP(TCP·XML·메신저/상태확인)",
    "definition": "브로커 기반 발행·구독 구조의 경량 IoT 통신 규약",
    "diagramImg": "exam_q122.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| MQTT | 브로커 기반 Pub/Sub | TCP/IP 기반, 최소 2바이트 초경량 헤더, 중앙 브로커를 통한 토픽 발행/구독(Pub/Sub) 구조 — 스마트팩토리·다수 센서 데이터 수집·배포에 최적 |\n| | 3단계 QoS 보장 | QoS 0(최대 1회 전송: Fire & Forget), QoS 1(최소 1회 전송: 중복 가능), QoS 2(정확히 1회 전송: 4-way 핸드셰이크) |\n| CoAP | 경량 RESTful (Req/Res) | UDP 기반(4바이트 고정 헤더), HTTP REST(GET/POST/PUT/DELETE) 구조를 초경량화 및 DTLS 보안 적용 — 스마트빌딩 1:1 센서 상태 조회·제어에 최적 |\n| | 신뢰성 보완 메커니즘 | UDP 위에서 자체 Confirmable(CON/ACK) 및 Non-confirmable(NON) 메시지 모드와 관찰(Observe) 기능으로 신뢰성 보완 |\n| XMPP | XML 기반 실시간 메시징 | TCP 기반, 확장 가능한 XML 스트리밍 구조로 양방향 실시간 메시징 및 상대방 접속 상태(Presence) 확인에 강점 (인스턴트 메신저·협업·스마트그리드) |",
    "keywords": [
      "MQTT(Pub/Sub, QoS 0~2)",
      "CoAP(UDP, RESTful, DTLS)",
      "XMPP(XML, Presence)",
      "브로커(Broker)",
      "이종 IoT 게이트웨이"
    ],
    "differentiation": "[유형 A] 현장 IoT 아키텍처 설계 시 MQTT vs CoAP vs XMPP 선정 기준\n① 1:N 이벤트 브로드캐스팅 & 데이터 수집: 수천 개 온도·진동 센서가 클라우드로 데이터를 쏘고 여러 대시보드가 구독하는 스마트팩토리 환경에서는 브로커 기반 **MQTT** 선정.\n② 1:1 리소스 제어 & 극초저전력: 배터리로 수년간 동작하며 TCP 연결 유지조차 부담스러운 조명·밸브 스위치의 상태 조회/제어에는 UDP 기반 RESTful **CoAP** 선정.\n③ 기기 간 접속 상태(Online/Offline) 감지 및 실시간 채팅·알림에는 **XMPP** 선정."
  },
  {
    "domain": "모의고사",
    "topic": "CoAP (Constrained Application Protocol)",
    "mnemonic": "MQTT(TCP·브로커 Pub/Sub·QoS 0/1/2·팩토리수집) vs CoAP(UDP·RESTful Req/Res·초저전력 센서제어) vs XMPP(TCP·XML·메신저/상태확인)",
    "definition": "UDP 기반 REST 구조로 동작하는 경량 IoT 규약",
    "diagramImg": "exam_q122_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| MQTT | 브로커 기반 Pub/Sub | TCP/IP 기반, 최소 2바이트 초경량 헤더, 중앙 브로커를 통한 토픽 발행/구독(Pub/Sub) 구조 — 스마트팩토리·다수 센서 데이터 수집·배포에 최적 |\n| | 3단계 QoS 보장 | QoS 0(최대 1회 전송: Fire & Forget), QoS 1(최소 1회 전송: 중복 가능), QoS 2(정확히 1회 전송: 4-way 핸드셰이크) |\n| CoAP | 경량 RESTful (Req/Res) | UDP 기반(4바이트 고정 헤더), HTTP REST(GET/POST/PUT/DELETE) 구조를 초경량화 및 DTLS 보안 적용 — 스마트빌딩 1:1 센서 상태 조회·제어에 최적 |\n| | 신뢰성 보완 메커니즘 | UDP 위에서 자체 Confirmable(CON/ACK) 및 Non-confirmable(NON) 메시지 모드와 관찰(Observe) 기능으로 신뢰성 보완 |\n| XMPP | XML 기반 실시간 메시징 | TCP 기반, 확장 가능한 XML 스트리밍 구조로 양방향 실시간 메시징 및 상대방 접속 상태(Presence) 확인에 강점 (인스턴트 메신저·협업·스마트그리드) |",
    "keywords": [
      "MQTT(Pub/Sub, QoS 0~2)",
      "CoAP(UDP, RESTful, DTLS)",
      "XMPP(XML, Presence)",
      "브로커(Broker)",
      "이종 IoT 게이트웨이"
    ],
    "differentiation": "[유형 A] 현장 IoT 아키텍처 설계 시 MQTT vs CoAP vs XMPP 선정 기준\n① 1:N 이벤트 브로드캐스팅 & 데이터 수집: 수천 개 온도·진동 센서가 클라우드로 데이터를 쏘고 여러 대시보드가 구독하는 스마트팩토리 환경에서는 브로커 기반 **MQTT** 선정.\n② 1:1 리소스 제어 & 극초저전력: 배터리로 수년간 동작하며 TCP 연결 유지조차 부담스러운 조명·밸브 스위치의 상태 조회/제어에는 UDP 기반 RESTful **CoAP** 선정.\n③ 기기 간 접속 상태(Online/Offline) 감지 및 실시간 채팅·알림에는 **XMPP** 선정."
  },
  {
    "domain": "모의고사",
    "topic": "소프트웨어 정의 네트워크 (SDN, Software-Defined Networking)",
    "mnemonic": "제어평면(Control Plane: 두뇌)과 데이터평면(Data Plane: 패킷전달) 분리 / 응용·제어·인프라 3계층 / Northbound(REST)·Southbound(OpenFlow/P4)",
    "definition": "네트워크 제어·데이터 평면을 분리해 중앙 제어하는 기술",
    "details": "[Application Layer (네트워크 앱: 방화벽·로드밸런싱·라우팅 정책)]\n       │  (Northbound Interface: REST API)\n[Control Layer (SDN Controller: ONOS/OpenDaylight — 네트워크 전역 가시성 및 경로 계산 두뇌)]\n       │  (Southbound Interface: OpenFlow / NETCONF / P4Runtime — Flow Table 규칙 하달)\n[Infrastructure / Data Layer (White-box Switch: 패킷 단순 고속 포워딩만 수행)]",
    "tableRows": [
      {
        "category": "핵심 철학",
        "sub": "Control & Data Plane 분리",
        "desc": "개별 라우터/스위치마다 종속되어 있던 제어 기능(두뇌)을 중앙 SDN 컨트롤러로 분리하고, 물리 스위치는 단순 패킷 전달(근육)만 수행"
      },
      {
        "category": "3계층 구조",
        "sub": "인프라 · 제어 · 응용 계층",
        "desc": "인프라 계층(Flow Table 기반 포워딩 스위치) ↔ 제어 계층(네트워크 OS 컨트롤러) ↔ 응용 계층(비즈니스 정책·보안·QoS 앱)"
      },
      {
        "category": "인터페이스 표준",
        "sub": "Southbound & Northbound",
        "desc": "Southbound(컨트롤러↔스위치 제어: OpenFlow, P4, OVSDB, NETCONF), Northbound(컨트롤러↔응용: REST API), East/West(컨트롤러 간 클러스터링)"
      },
      {
        "category": "활용 및 진화",
        "sub": "SD-WAN · 슬라이싱 · IBN",
        "desc": "광역망 최적화(SD-WAN), 5G 네트워크 슬라이싱, 데이터센터 VXLAN 자동화 및 AI 기반 의도 기반 네트워킹(IBN)의 핵심 기반"
      }
    ],
    "keywords": [
      "Control/Data Plane 분리",
      "SDN Controller",
      "OpenFlow",
      "Flow Table",
      "Northbound / Southbound API",
      "P4(데이터평면 프로그래밍)",
      "IBN"
    ],
    "differentiation": "[유형 C] 중앙집중형 SDN 컨트롤러의 단일장애점(SPOF) 극복과 의도 기반 네트워크(IBN: Intent-Based Networking) 진화\n① SPOF 및 확장성 해결: 단일 컨트롤러 장애 시 전체 망 마비를 막기 위해 다중 컨트롤러 분산 클러스터(ONOS, Raft 합의 알고리즘 기반 East-West 동기화) 구성 필수.\n② SDN에서 IBN으로: SDN이 관리자가 경로 설정 스크립트를 직접 짜서 하달하는 '자동화'라면, IBN은 관리자가 비즈니스 의도(Intent: 예 'AI 학습 트래픽 지연 5ms 이하 보장')만 선언하면 AI가 스스로 정책 번역·배포·자가 치유(Closed-Loop)까지 완수."
  },
  {
    "domain": "모의고사",
    "topic": "소켓 (Socket) 통신의 개념, 동작 절차 및 종류 (TCP · UDP · WebSocket)",
    "mnemonic": "5-Tuple(프로토콜·출발지IP/Port·목적지IP/Port) / Stream(TCP) · Datagram(UDP) · Raw · WebSocket(양방향 전이중)",
    "definition": "응용 프로그램이 전송 계층을 통해 데이터 송수신 종단점",
    "details": "[TCP 서버] socket() ──> bind(IP/Port) ──> listen(백로그 큐) ──> accept(연결대기) <──(3-Way)── [TCP 클라이언트] socket() ──> connect()\n             └──> read()/write() (데이터 송수신) ──> close()                                 (UDP는 listen/accept 없이 sendto/recvfrom)",
    "tableRows": [
      {
        "category": "핵심 개념",
        "sub": "OSI 4계층↔7계층 인터페이스",
        "desc": "프로토콜, 로컬 IP/Port, 원격 IP/Port의 5-Tuple로 식별되며, OS 커널이 파일 디스크립터(FD)처럼 추상화하여 제공하는 통신 창구"
      },
      {
        "category": "전통 소켓 유형",
        "sub": "스트림 소켓 (TCP Socket)",
        "desc": "연결지향형(SOCK_STREAM), 3-Way 핸드셰이크, 바이트 스트림 순서 보장 및 오류·흐름·혼잡 제어 제공 (신뢰성 필수 금융·웹 전송)"
      },
      {
        "category": "",
        "sub": "데이터그램 소켓 (UDP)",
        "desc": "비연결형(SOCK_DGRAM), `listen()`/`accept()` 없이 패킷 단위로 즉시 전송하여 오버헤드와 지연시간 최소화 (스트리밍·게임·DNS)"
      },
      {
        "category": "",
        "sub": "로우 소켓 (Raw Socket)",
        "desc": "전송계층(TCP/UDP)을 우회하여 네트워크 계층(IP/ICMP) 헤더를 응용이 직접 조작 (Ping, 네트워크 스니핑·보안 진단 도구)"
      },
      {
        "category": "웹 실시간 소켓",
        "sub": "웹소켓 (WebSocket)",
        "desc": "최초 HTTP 핸드셰이크(Upgrade: websocket) 이후 영구적인 전이중(Full-Duplex) 양방향 TCP 채널을 유지해 실시간 채팅·시세 푸시 구현"
      }
    ],
    "keywords": [
      "5-Tuple",
      "File Descriptor",
      "SOCK_STREAM(TCP)",
      "SOCK_DGRAM(UDP)",
      "Raw Socket",
      "WebSocket",
      "Non-blocking I/O(epoll/IOCP)"
    ],
    "differentiation": "[유형 B] 대규모 동시 접속(C10K/C10M 문제) 처리 시 블로킹(Blocking) 소켓의 한계와 비동기 I/O 멀티플렉싱\n① Thread-per-Socket의 한계: 클라이언트 소켓마다 스레드를 1개씩 할당하는 블로킹 방식은 수만 명 동시 접속 시 문맥교환(Context Switching)과 메모리 고갈로 서버가 다운됨.\n② I/O 멀티플렉싱 해법: 단일/소수 이벤트 루프 스레드가 수만 개의 논블로킹 소켓 이벤트를 감지해 처리하는 Linux `epoll`(또는 `io_uring`), Windows `IOCP` 아키텍처(Nginx, Netty, Node.js 기반)로 고성능 달성."
  },
  {
    "domain": "모의고사",
    "topic": "OSI 2계층 (데이터링크 계층) 링크 오류제어",
    "mnemonic": "2계층(데이터링크: 프레임 단위 · 인접 노드 Hop-by-Hop · 물리회선 비트오류 CRC) vs 4계층(전송: 세그먼트 단위 · 종단간 End-to-End · 라우터 큐 손실/순서뒤바뀜)",
    "definition": "인접 노드 간 물리적 프레임 전송 오류 검출·복구 기법",
    "diagramImg": "exam_q125.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 2계층 오류제어 (Data Link) | 제어 범위 및 데이터 단위 | 인접한 두 노드(Node-to-Node / Hop-by-Hop) 링크 구간에서 프레임(Frame) 단위로 오류 제어 수행 |\n| | 오류 원인 및 검출 기법 | 유·무선 물리 매체의 노이즈·감쇠로 인한 비트 반전(Bit Flip) 검출을 위해 프레임 트레일러에 32비트 CRC(순환중복검사, FCS) 부착 |\n| | 특징 (현대 유선망 변화) | 광케이블 등 현대 유선 이더넷은 비트 오류율이 극히 낮아 2계층에서는 CRC 오류 프레임 즉시 폐기만 수행하고, 무선(Wi-Fi/LTE·5G HARQ)에서는 적극적 재전송 수행 |\n| 4계층 오류제어 (Transport) | 제어 범위 및 데이터 단위 | 출발지 호스트에서 최종 목적지 호스트까지 종단 간(End-to-End) 세그먼트(Segment) 단위로 최종 신뢰성 보장 |\n| | 오류 원인 및 복구 기법 | 중간 라우터 버퍼 오버플로우(혼잡)로 인한 패킷 폐기, 다중 경로 라우팅으로 인한 순서 뒤바뀜을 Checksum, 시퀀스 번호, ACK/타이머 재전송(ARQ)으로 완벽 복구 |",
    "keywords": [
      "ISO 7498",
      "Hop-by-Hop(2계층) vs End-to-End(4계층)",
      "Frame vs Segment",
      "CRC(FCS) vs Checksum",
      "중간 라우터 혼잡 폐기"
    ],
    "differentiation": "[유형 A] 왜 2계층에서 오류제어를 하는데 4계층(TCP)에서 또 오류제어를 해야 하는가 (End-to-End Argument)\n① 결정적 이유: 2계층은 케이블 양 끝단(라우터 A ↔ 라우터 B) 사이의 물리적 전송 무결성만 보장할 뿐, 패킷이 라우터 내부 메모리 큐에 들어간 뒤 '트래픽 폭주(Congestion)로 인해 라우터가 버리는 패킷'이나 '라우팅 경로 변경으로 순서가 뒤바뀌는 현상'은 2계층이 전혀 알 수 없음.\n② 따라서 최종 애플리케이션이 온전한 데이터를 받기 위해서는 반드시 종단 간(End-to-End) 4계층 TCP의 시퀀스 재조립과 재전송이 필수."
  },
  {
    "domain": "모의고사",
    "topic": "OSI 4계층 (전송 계층) 종단 간 오류제어",
    "mnemonic": "2계층(데이터링크: 프레임 단위 · 인접 노드 Hop-by-Hop · 물리회선 비트오류 CRC) vs 4계층(전송: 세그먼트 단위 · 종단간 End-to-End · 라우터 큐 손실/순서뒤바뀜)",
    "definition": "송수신 프로세스 종단 간 세그먼트 유실·순서 복구 기법",
    "diagramImg": "exam_q125_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 2계층 오류제어 (Data Link) | 제어 범위 및 데이터 단위 | 인접한 두 노드(Node-to-Node / Hop-by-Hop) 링크 구간에서 프레임(Frame) 단위로 오류 제어 수행 |\n| | 오류 원인 및 검출 기법 | 유·무선 물리 매체의 노이즈·감쇠로 인한 비트 반전(Bit Flip) 검출을 위해 프레임 트레일러에 32비트 CRC(순환중복검사, FCS) 부착 |\n| | 특징 (현대 유선망 변화) | 광케이블 등 현대 유선 이더넷은 비트 오류율이 극히 낮아 2계층에서는 CRC 오류 프레임 즉시 폐기만 수행하고, 무선(Wi-Fi/LTE·5G HARQ)에서는 적극적 재전송 수행 |\n| 4계층 오류제어 (Transport) | 제어 범위 및 데이터 단위 | 출발지 호스트에서 최종 목적지 호스트까지 종단 간(End-to-End) 세그먼트(Segment) 단위로 최종 신뢰성 보장 |\n| | 오류 원인 및 복구 기법 | 중간 라우터 버퍼 오버플로우(혼잡)로 인한 패킷 폐기, 다중 경로 라우팅으로 인한 순서 뒤바뀜을 Checksum, 시퀀스 번호, ACK/타이머 재전송(ARQ)으로 완벽 복구 |",
    "keywords": [
      "ISO 7498",
      "Hop-by-Hop(2계층) vs End-to-End(4계층)",
      "Frame vs Segment",
      "CRC(FCS) vs Checksum",
      "중간 라우터 혼잡 폐기"
    ],
    "differentiation": "[유형 A] 왜 2계층에서 오류제어를 하는데 4계층(TCP)에서 또 오류제어를 해야 하는가 (End-to-End Argument)\n① 결정적 이유: 2계층은 케이블 양 끝단(라우터 A ↔ 라우터 B) 사이의 물리적 전송 무결성만 보장할 뿐, 패킷이 라우터 내부 메모리 큐에 들어간 뒤 '트래픽 폭주(Congestion)로 인해 라우터가 버리는 패킷'이나 '라우팅 경로 변경으로 순서가 뒤바뀌는 현상'은 2계층이 전혀 알 수 없음.\n② 따라서 최종 애플리케이션이 온전한 데이터를 받기 위해서는 반드시 종단 간(End-to-End) 4계층 TCP의 시퀀스 재조립과 재전송이 필수."
  },
  {
    "domain": "모의고사",
    "topic": "트래픽 폴리싱 (Traffic Policing, 토큰 버킷)",
    "mnemonic": "폴리싱(토큰버킷·초과트래픽 즉시 Drop/Remark·버퍼없음·지연없음·수신단Ingress) vs 쉐이핑(리키버킷·버퍼큐 대기 평탄화·지연발생·손실최소화·송신단Egress)",
    "definition": "약정 대역폭 초과 트래픽을 버퍼링 없이 즉시 폐기 기법",
    "diagramImg": "exam_q126.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 트래픽 폴리싱 (Policing) | 토큰 버킷 기반 즉시 처분 | 약정 속도(CIR)를 초과하는 버스트 트래픽을 버퍼에 저장하지 않고 즉시 폐기(Drop)하거나 낮은 우선순위로 재마킹(DSCP Remark) |\n| | 장단점 및 적용 위치 | 큐 대기 지연(Latency/Jitter)이 전혀 발생하지 않으나 TCP 대량 재전송(톱니바퀴 현상) 유발 가능 — 주로 ISP 수신(Ingress) 인터페이스에 적용 |\n| 트래픽 쉐이핑 (Shaping) | 리키 버킷 기반 버퍼 평탄화 | 약정 속도를 초과하는 버스트 패킷을 버리지 않고 버퍼(Queue)에 일시 저장했다가 일정한 속도(Smooth Rate)로 지연 방출 |\n| | 장단점 및 적용 위치 | 패킷 손실(Drop)과 TCP 재전송을 최소화해 링크 효율이 높으나, 버퍼 대기로 인한 전송 지연(Latency) 발생 — 주로 송신(Egress) 인터페이스에 적용 |",
    "keywords": [
      "Traffic Policing",
      "Traffic Shaping",
      "Token Bucket(토큰버킷)",
      "Leaky Bucket(리키버킷)",
      "CIR / CBS",
      "Ingress vs Egress"
    ],
    "differentiation": "[유형 A] 리키 버킷(Leaky Bucket) vs 토큰 버킷(Token Bucket) 알고리즘 메커니즘 차이\n① 리키 버킷(밑 빠진 독): 물(패킷)이 아무리 한꺼번에 쏟아져 들어와도 구멍 크기만큼 일정한 속도로만 빠져나가므로 출력 트래픽을 완벽히 평탄화(Shaping)함.\n② 토큰 버킷: 버킷에 토큰이 쌓여 있는 한도(Burst Size) 내에서는 일시적인 고속 버스트(Burst) 전송을 허용하되, 토큰이 고갈되면 초과분을 제어하므로 현대 QoS 폴리싱/쉐이핑에서 유연성이 훨씬 높음."
  },
  {
    "domain": "모의고사",
    "topic": "트래픽 쉐이핑 (Traffic Shaping, 리키 버킷)",
    "mnemonic": "폴리싱(토큰버킷·초과트래픽 즉시 Drop/Remark·버퍼없음·지연없음·수신단Ingress) vs 쉐이핑(리키버킷·버퍼큐 대기 평탄화·지연발생·손실최소화·송신단Egress)",
    "definition": "버스트 트래픽을 큐에 저장해 일정 속도로 평탄화 기법",
    "diagramImg": "exam_q126_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 트래픽 폴리싱 (Policing) | 토큰 버킷 기반 즉시 처분 | 약정 속도(CIR)를 초과하는 버스트 트래픽을 버퍼에 저장하지 않고 즉시 폐기(Drop)하거나 낮은 우선순위로 재마킹(DSCP Remark) |\n| | 장단점 및 적용 위치 | 큐 대기 지연(Latency/Jitter)이 전혀 발생하지 않으나 TCP 대량 재전송(톱니바퀴 현상) 유발 가능 — 주로 ISP 수신(Ingress) 인터페이스에 적용 |\n| 트래픽 쉐이핑 (Shaping) | 리키 버킷 기반 버퍼 평탄화 | 약정 속도를 초과하는 버스트 패킷을 버리지 않고 버퍼(Queue)에 일시 저장했다가 일정한 속도(Smooth Rate)로 지연 방출 |\n| | 장단점 및 적용 위치 | 패킷 손실(Drop)과 TCP 재전송을 최소화해 링크 효율이 높으나, 버퍼 대기로 인한 전송 지연(Latency) 발생 — 주로 송신(Egress) 인터페이스에 적용 |",
    "keywords": [
      "Traffic Policing",
      "Traffic Shaping",
      "Token Bucket(토큰버킷)",
      "Leaky Bucket(리키버킷)",
      "CIR / CBS",
      "Ingress vs Egress"
    ],
    "differentiation": "[유형 A] 리키 버킷(Leaky Bucket) vs 토큰 버킷(Token Bucket) 알고리즘 메커니즘 차이\n① 리키 버킷(밑 빠진 독): 물(패킷)이 아무리 한꺼번에 쏟아져 들어와도 구멍 크기만큼 일정한 속도로만 빠져나가므로 출력 트래픽을 완벽히 평탄화(Shaping)함.\n② 토큰 버킷: 버킷에 토큰이 쌓여 있는 한도(Burst Size) 내에서는 일시적인 고속 버스트(Burst) 전송을 허용하되, 토큰이 고갈되면 초과분을 제어하므로 현대 QoS 폴리싱/쉐이핑에서 유연성이 훨씬 높음."
  },
  {
    "domain": "모의고사",
    "topic": "저궤도 위성통신 (LEO, Low Earth Orbit Satellite Communication)",
    "mnemonic": "고도 300~1,500km · 왕복지연 20~40ms · 위성간 레이저링크(ISL) · 위상배열안테나 · 도플러 천이/빈번한 핸드오버 · 6G NTN/D2D",
    "definition": "저고도 군집 위성 배치해 저지연 광대역 통신 제공 기술",
    "diagramImg": "exam_q127.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 궤도별 비교 | GEO(정지궤도) vs LEO(저궤도) | 정지궤도(36,000km: 지연 500ms 이상, 3대로 지구 커버) 대비 저궤도(300~1,500km)는 왕복지연 20~40ms로 지상 광케이블 수준 초저지연 달성 |\n| 핵심 요소 기술 | 위성 간 레이저 링크 (ISL) | 우주 진공 상태에서 위성끼리 레이저 광통신(Inter-Satellite Link)으로 데이터를 직접 주고받아 지상 게이트웨이 없이 대륙 간 초고속 라우팅 |\n| | 전자식 위상배열 안테나 | 시속 27,000km로 고속 이동하는 위성을 기계적 회전 없이 전자적 빔포밍(Beamforming)으로 실시간 추적 및 다중 빔 형성 |\n| | 군집 위성 & 핸드오버 제어 | 고도가 낮아 1대당 커버리지가 좁고 상공을 수 분 만에 통과하므로 수천~수만 대 군집(Mega-Constellation) 배치 및 초고속 핸드오버·도플러 주파수 보정 필수 |\n| 최신 진화 동향 | 스마트폰 직접통신 (D2D) | 별도 위성 접시 안테나 없이 일반 스마트폰(3GPP Rel-17/18 NTN 표준)과 저궤도 위성을 직접 연결해 해상·산간 음영지역 완전 해소 |",
    "keywords": [
      "LEO(300~1,500km)",
      "초저지연(20~40ms)",
      "군집위성(Starlink/OneWeb)",
      "ISL(위성간 레이저링크)",
      "위상배열 안테나",
      "도플러 효과 보정",
      "3GPP NTN / D2D"
    ],
    "differentiation": "[유형 C] 저궤도 위성통신의 기술적 난제(도플러 천이·핸드오버·우주쓰레기)와 6G 지상-비지상 통합망(SATIN) 제언\n① 기술적 난제 극복: 위성의 초고속 이동(7.5km/s)으로 인해 주파수가 왜곡되는 도플러 천이(Doppler Shift)를 AI 기반 사전 보상 알고리즘으로 교정하고, 위성 궤도 예측 기반 선제적 핸드오버(Make-Before-Break) 적용.\n② 국가 안보·백업망 가치: 해저 광케이블 절단이나 전시·재난으로 지상 기지국이 파괴되어도 금융·국방·항공(UAM) 지휘통신을 유지하는 6G 생존 인프라로 활용."
  },
  {
    "domain": "모의고사",
    "topic": "네트워크 프로토콜의 개념, 3대 요소 (구문·의미·타이밍) 및 주요 기능",
    "mnemonic": "3요소: 구문(Syntax: 형식·부호) · 의미(Semantics: 제어·오류처리) · 타이밍(Timing: 속도·순서) / 기능: 단편화·캡슐화·오류/흐름/혼잡제어·동기화·주소지정",
    "definition": "이기종 시스템 간 통신 위해 정의한 규약과 3대 요소",
    "details": "[프로토콜 3대 구성요소] 구문(Syntax: 무엇을 어떻게 표현? 데이터 포맷·신호레벨) + 의미(Semantics: 무엇을 제어? 오류·제어정보 해석) + 타이밍(Timing: 언제 얼마나 빨리? 속도·순서)\n[핵심 기능] 주소지정(Addressing) · 단편화와 재조립(Fragmentation/Reassembly) · 캡슐화(Encapsulation) · 연결/흐름/오류/혼잡 제어 · 동기화 · 다중화",
    "tableRows": [
      {
        "category": "프로토콜 3대 요소",
        "sub": "구문 (Syntax)",
        "desc": "데이터의 구조나 형식(Format), 부호화(Coding), 신호 레벨 등 데이터가 어떤 모양으로 구성되는지 정의 (예: 헤더 20B + 데이터)"
      },
      {
        "category": "",
        "sub": "의미 (Semantics)",
        "desc": "조정(Coordination) 및 오류 처리를 위한 제어 정보의 뜻과 그에 따른 동작(Action) 정의 (예: ACK 수신 시 다음 패킷 전송, 404 코드의 의미)"
      },
      {
        "category": "",
        "sub": "타이밍 (Timing)",
        "desc": "송수신 개체 간 통신 속도 매칭(Flow Rate) 및 메시지 전송 순서(Sequencing)와 응답 제한시간(Timeout) 조정"
      },
      {
        "category": "주요 핵심 기능",
        "sub": "단편화·재조립 & 캡슐화",
        "desc": "상위 대용량 데이터를 하위 계층 최대전송단위(MTU)에 맞춰 분할(Fragmentation) 후 목적지에서 재조립, 계층별 제어 헤더(PCI) 부착(Encapsulation)"
      },
      {
        "category": "",
        "sub": "오류·흐름·혼잡·다중화",
        "desc": "전송 손실 복구(오류제어), 수신자 버퍼 보호(흐름제어), 네트워크 전체 과부하 방지(혼잡제어), 단일 물리 경로 다중 세션 공유(다중화)"
      }
    ],
    "keywords": [
      "Syntax(구문)",
      "Semantics(의미)",
      "Timing(타이밍)",
      "단편화와 재조립(MTU)",
      "캡슐화(PDU = SDU + PCI)",
      "오류·흐름·혼잡 제어"
    ],
    "differentiation": "[유형 A] 흐름제어(Flow Control) vs 혼잡제어(Congestion Control)의 제어 주체 및 목적 비교\n① 흐름제어: '송신자와 수신자 양 끝단(1:1)' 사이에서 수신측 처리 속도나 버퍼 크기(RWND)를 초과해 패킷이 넘치는 것을 막는 기술(Stop-and-Wait, Sliding Window).\n② 혼잡제어: 양 끝단이 아닌 '중간 네트워크 라우터와 링크 전체'의 트래픽 과부하를 감지해 송신 윈도우(CWND)를 조절하는 기술(Slow Start, AIMD, CUBIC, BBR)."
  },
  {
    "domain": "모의고사",
    "topic": "RIP (Routing Information Protocol, 거리 벡터)",
    "mnemonic": "IGP(AS내부: RIP·OSPF) vs EGP(AS간: BGP) / RIP(거리벡터·벨만포드·홉수 15제한·30초주기 전체교환) vs OSPF(링크상태·다익스트라·대역폭비용·이벤트즉시 LSA·Area 계층화)",
    "definition": "벨만-포드 거리 벡터 기반으로 홉 수를 계산하는 라우팅",
    "diagramImg": "exam_q129.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 라우터 & 동적 라우팅 | 목적 및 AS 기준 분류 | 브로드캐스트 도메인 분리 및 이기종 망 간 최적 경로 설정 — 자율시스템(AS) 내부용 IGP(RIP, OSPF)와 AS 간 연동용 EGP(BGP-4)로 구분 |\n| RIP (Distance Vector) | 거리 벡터 & 벨만-포드 | 오직 홉 수(Hop Count, 최대 15홉, 16은 도달불가)만 기준으로 삼으며 30초마다 인접 라우터와 전체 라우팅 테이블 교환 (소규모 망 적합) |\n| | 한계 및 보완책 | 느린 수렴 속도(Slow Convergence) 및 무한 카운트(Count-to-Infinity) 루프 발생 → 스플릿 호라이즌, 포이즌 리버스, 트리거드 업데이트로 완화 |\n| OSPF (Link State) | 링크 상태 & 다익스트라 | 링크 대역폭(Cost)을 반영해 다익스트라(SPF) 알고리즘으로 최단 경로 트리 계산, 토폴로지 변화 시에만 LSA를 멀티캐스트로 즉시 전파 |\n| | 대규모 계층 구조 (Area) | 백본 영역(Area 0)과 하위 Area로 계층 분할하여 라우팅 부하를 격리하고 빠른 수렴과 대규모 엔터프라이즈 망 확장성 보장 |",
    "keywords": [
      "IGP vs EGP(BGP)",
      "Distance Vector(벨만-포드)",
      "Link State(다익스트라 SPF)",
      "RIP(15홉 제한)",
      "OSPF(Area 0, LSA)",
      "Count-to-Infinity(스플릿 호라이즌)"
    ],
    "differentiation": "[유형 A] RIP(거리 벡터) vs OSPF(링크 상태) vs BGP(경로 벡터) 핵심 비교\n① 시야의 차이: RIP는 '이웃이 말해준 거리 소문(인접 라우터 정보)'만 믿고 경로를 정해 루프에 취약하지만, OSPF는 Area 내 모든 라우터가 '전체 네트워크 지도(Link State DB)'를 똑같이 공유한 뒤 각자 다익스트라로 최단 길을 찾아 루프가 원천 배제됨.\n② BGP(Border Gateway Protocol): 국가·ISP 간 연동에서는 단순 최단 거리보다 정치·경제적 계약 정책이 중요하므로 AS 경로 목록(Path Vector) 기반 정책 라우팅을 수행."
  },
  {
    "domain": "모의고사",
    "topic": "OSPF (Open Shortest Path First, 링크 상태)",
    "mnemonic": "IGP(AS내부: RIP·OSPF) vs EGP(AS간: BGP) / RIP(거리벡터·벨만포드·홉수 15제한·30초주기 전체교환) vs OSPF(링크상태·다익스트라·대역폭비용·이벤트즉시 LSA·Area 계층화)",
    "definition": "다익스트라 알고리즘으로 최단 경로 트리 계산하는 라우팅",
    "diagramImg": "exam_q129_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 라우터 & 동적 라우팅 | 목적 및 AS 기준 분류 | 브로드캐스트 도메인 분리 및 이기종 망 간 최적 경로 설정 — 자율시스템(AS) 내부용 IGP(RIP, OSPF)와 AS 간 연동용 EGP(BGP-4)로 구분 |\n| RIP (Distance Vector) | 거리 벡터 & 벨만-포드 | 오직 홉 수(Hop Count, 최대 15홉, 16은 도달불가)만 기준으로 삼으며 30초마다 인접 라우터와 전체 라우팅 테이블 교환 (소규모 망 적합) |\n| | 한계 및 보완책 | 느린 수렴 속도(Slow Convergence) 및 무한 카운트(Count-to-Infinity) 루프 발생 → 스플릿 호라이즌, 포이즌 리버스, 트리거드 업데이트로 완화 |\n| OSPF (Link State) | 링크 상태 & 다익스트라 | 링크 대역폭(Cost)을 반영해 다익스트라(SPF) 알고리즘으로 최단 경로 트리 계산, 토폴로지 변화 시에만 LSA를 멀티캐스트로 즉시 전파 |\n| | 대규모 계층 구조 (Area) | 백본 영역(Area 0)과 하위 Area로 계층 분할하여 라우팅 부하를 격리하고 빠른 수렴과 대규모 엔터프라이즈 망 확장성 보장 |",
    "keywords": [
      "IGP vs EGP(BGP)",
      "Distance Vector(벨만-포드)",
      "Link State(다익스트라 SPF)",
      "RIP(15홉 제한)",
      "OSPF(Area 0, LSA)",
      "Count-to-Infinity(스플릿 호라이즌)"
    ],
    "differentiation": "[유형 A] RIP(거리 벡터) vs OSPF(링크 상태) vs BGP(경로 벡터) 핵심 비교\n① 시야의 차이: RIP는 '이웃이 말해준 거리 소문(인접 라우터 정보)'만 믿고 경로를 정해 루프에 취약하지만, OSPF는 Area 내 모든 라우터가 '전체 네트워크 지도(Link State DB)'를 똑같이 공유한 뒤 각자 다익스트라로 최단 길을 찾아 루프가 원천 배제됨.\n② BGP(Border Gateway Protocol): 국가·ISP 간 연동에서는 단순 최단 거리보다 정치·경제적 계약 정책이 중요하므로 AS 경로 목록(Path Vector) 기반 정책 라우팅을 수행."
  },
  {
    "domain": "모의고사",
    "topic": "전진오류수정 (FEC, Forward Error Correction)",
    "mnemonic": "FEC(송신측 잉여비트 해밍/리드솔로몬/LDPC/폴라 → 수신측 자가복구·역방향채널 불필요) vs ARQ(CRC 검출 후 재전송: Stop&Wait · Go-Back-N · Selective Repeat) → 결합: HARQ",
    "definition": "잉여 패리티 비트 함께 보내 수신측이 스스로 복구 기법",
    "diagramImg": "exam_q130.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 전진오류수정 (FEC) | 수신측 자가 오류 정정 | 송신 시 원본 데이터에 오류정정부호(해밍 코드, 리드-솔로몬, 길쌈부호, 터보, LDPC, 폴라 코드)를 함께 실어 보내 수신측이 재전송 없이 즉시 수정 |\n| | 특징 및 적용 분야 | 역방향(ACK) 채널이 불필요하고 지연시간이 일정하나 잉여 비트로 인한 대역폭 오버헤드 발생 — 실시간 스트리밍·위성·심우주·단방향 방송에 최적 |\n| 자동재전송요구 (ARQ) | 오류 검출 후 재전송 | CRC 등으로 오류만 검출하고, 오류 발견 시 NAK를 보내거나 타임아웃을 통해 송신측에 프레임 재전송을 요청 (신뢰성 100% 보장) |\n| | 3대 ARQ 동작 방식 | Stop-and-Wait(1개씩 확인), Go-Back-N(오류 발생 프레임부터 이후 전송분 전부 재전송), Selective Repeat(오류 난 해당 프레임만 선별 재전송) |\n| 차세대 무선 결합 | H-ARQ (Hybrid ARQ) | 5G/LTE 무선통신 표준: 평소 경량 FEC로 사소한 오류는 즉시 자가 정정하고, 정정 한계 초과 시에만 ARQ 재전송을 요청해 이전 수신 신호와 결합(Chase Combining / IR) 복원 |",
    "keywords": [
      "FEC(전진오류수정)",
      "ARQ(자동재전송요구)",
      "해밍/리드솔로몬/LDPC/Polar 코드",
      "Stop-and-Wait",
      "Go-Back-N",
      "Selective Repeat",
      "H-ARQ(Chase Combining / IR)"
    ],
    "differentiation": "[유형 C] 5G/6G 무선 통신에서 순수 FEC와 순수 ARQ의 한계를 극복한 H-ARQ(Hybrid ARQ) 원리\n① 무선 채널의 딜레마: 무선은 오류율이 높아 순수 ARQ만 쓰면 잦은 재전송으로 지연이 폭증하고, 모든 오류를 막으려고 강력한 FEC만 쓰면 정상 상태에서도 잉여 패리티 비트가 대역폭의 절반을 낭비함.\n② H-ARQ(Incremental Redundancy)의 지혜: 오류 난 첫 패킷을 버리지 않고 버퍼에 보관한 뒤, 재전송된 추가 패리티 비트와 소프트 결합(Soft Combining)하여 복호화 성공률과 주파수 효율을 동시에 극대화."
  },
  {
    "domain": "모의고사",
    "topic": "자동재전송요구 (ARQ)와 하이브리드 ARQ (HARQ)",
    "mnemonic": "FEC(송신측 잉여비트 해밍/리드솔로몬/LDPC/폴라 → 수신측 자가복구·역방향채널 불필요) vs ARQ(CRC 검출 후 재전송: Stop&Wait · Go-Back-N · Selective Repeat) → 결합: HARQ",
    "definition": "오류 검출 시 재전송 요구 및 FEC 결합 복구 기법",
    "diagramImg": "exam_q130_2.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 전진오류수정 (FEC) | 수신측 자가 오류 정정 | 송신 시 원본 데이터에 오류정정부호(해밍 코드, 리드-솔로몬, 길쌈부호, 터보, LDPC, 폴라 코드)를 함께 실어 보내 수신측이 재전송 없이 즉시 수정 |\n| | 특징 및 적용 분야 | 역방향(ACK) 채널이 불필요하고 지연시간이 일정하나 잉여 비트로 인한 대역폭 오버헤드 발생 — 실시간 스트리밍·위성·심우주·단방향 방송에 최적 |\n| 자동재전송요구 (ARQ) | 오류 검출 후 재전송 | CRC 등으로 오류만 검출하고, 오류 발견 시 NAK를 보내거나 타임아웃을 통해 송신측에 프레임 재전송을 요청 (신뢰성 100% 보장) |\n| | 3대 ARQ 동작 방식 | Stop-and-Wait(1개씩 확인), Go-Back-N(오류 발생 프레임부터 이후 전송분 전부 재전송), Selective Repeat(오류 난 해당 프레임만 선별 재전송) |\n| 차세대 무선 결합 | H-ARQ (Hybrid ARQ) | 5G/LTE 무선통신 표준: 평소 경량 FEC로 사소한 오류는 즉시 자가 정정하고, 정정 한계 초과 시에만 ARQ 재전송을 요청해 이전 수신 신호와 결합(Chase Combining / IR) 복원 |",
    "keywords": [
      "FEC(전진오류수정)",
      "ARQ(자동재전송요구)",
      "해밍/리드솔로몬/LDPC/Polar 코드",
      "Stop-and-Wait",
      "Go-Back-N",
      "Selective Repeat",
      "H-ARQ(Chase Combining / IR)"
    ],
    "differentiation": "[유형 C] 5G/6G 무선 통신에서 순수 FEC와 순수 ARQ의 한계를 극복한 H-ARQ(Hybrid ARQ) 원리\n① 무선 채널의 딜레마: 무선은 오류율이 높아 순수 ARQ만 쓰면 잦은 재전송으로 지연이 폭증하고, 모든 오류를 막으려고 강력한 FEC만 쓰면 정상 상태에서도 잉여 패리티 비트가 대역폭의 절반을 낭비함.\n② H-ARQ(Incremental Redundancy)의 지혜: 오류 난 첫 패킷을 버리지 않고 버퍼에 보관한 뒤, 재전송된 추가 패리티 비트와 소프트 결합(Soft Combining)하여 복호화 성공률과 주파수 효율을 동시에 극대화."
  },
  {
    "domain": "모의고사",
    "topic": "TCP 흐름제어 · 슬라이딩 윈도우 · Silly Window Syndrome (SWS)",
    "mnemonic": "RWND(수신윈도우 통보) · 슬라이딩윈도우(연속전송 후 포인터 이동) / SWS(1바이트씩 찔끔 송수신 → 헤더 40B 배보다 배꼽) / 해결: 송신측 Nagle 알고리즘 + 수신측 Clark 해결책",
    "definition": "수신 버퍼에 맞춰 전송량 조절하고 극소 패킷 병목 해법",
    "diagramImg": "exam_q131.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| TCP 흐름제어 개념 | 수신측 버퍼 오버플로우 방지 | 송신측이 수신측의 처리 속도보다 빠르게 데이터를 쏟아부어 수신 버퍼가 넘치는 것을 막기 위해 수신 가능 크기(RWND)를 매 ACK 헤더마다 통보 |\n| 슬라이딩 윈도우 | 연속 전송 및 윈도우 이동 | 매 패킷마다 ACK를 기다리는 Stop-and-Wait의 비효율을 없애기 위해, 수신측이 허용한 윈도우 크기(Window Size)만큼 ACK 없이 연속 전송 후 확인된 만큼 창을 이동 |\n| Silly Window Syndrome | 멍청한 윈도우 증후군 (SWS) | 수신측 앱이 버퍼에서 1바이트씩만 느리게 읽어가거나 송신측이 1바이트씩 생성할 때, TCP+IP 헤더(40B)에 단 1바이트 데이터만 실린 초비효율 패킷이 계속 오가는 현상 |\n| SWS 해결 방안 | 송신측: Nagle 알고리즘 | 첫 문자 전송 후 ACK가 오거나 전송할 데이터가 최대세그먼트크기(MSS)만큼 충분히 모일 때까지 버퍼에 모았다가 한 번에 패킷화해 전송 |\n| | 수신측: Clark의 해결책 | 수신 버퍼에 빈 공간이 1바이트 생겼다고 바로 알리지 않고, 빈 공간이 MSS 크기 이상 확보되거나 버퍼의 절반 이상이 비워질 때까지 윈도우 크기=0(Zero Window)으로 지연 통보 |",
    "keywords": [
      "Flow Control",
      "RWND(수신윈도우)",
      "Sliding Window",
      "Zero Window & Persist Timer",
      "Silly Window Syndrome(SWS)",
      "Nagle 알고리즘",
      "Clark의 해결책"
    ],
    "differentiation": "[유형 B] 실시간 온라인 게임·금융 트레이딩에서 Nagle 알고리즘이 유발하는 지연 문제와 `TCP_NODELAY` 튜닝\n① Nagle 알고리즘의 역효과: Nagle 알고리즘은 대역폭 효율은 높여주지만, 데이터가 MSS만큼 찰 때까지 또는 이전 ACK가 올 때까지(최대 200ms Delayed ACK와 충돌 시) 전송을 강제로 붙잡아두므로 반응속도가 생명인 실시간 게임·고빈도 매매·원격 터미널에서 치명적인 끊김(Lag)을 유발.\n② 실무 소켓 튜닝: 초저지연 인터랙티브 서비스에서는 소켓 옵션에서 `TCP_NODELAY`(Nagle 비활성화)를 설정하여 작은 패킷이라도 대기 없이 즉시 전송하도록 구성."
  },
  {
    "domain": "모의고사",
    "topic": "AI-RAN (인공지능 무선접속망) 개념, 3대 영역 및 기존 RAN과의 차이점",
    "mnemonic": "AI-for-RAN(주파수·빔·에너지 최적화) + AI-and-RAN(기지국 GPU 멀티테넌시 공유) + AI-on-RAN(엣지 AI 서비스) / 기존 전용 하드웨어(ASIC) → GPU 기반 소프트웨어 정의 기지국",
    "definition": "무선접속망에 AI·GPU 융합해 품질·연산 혁신 기술",
    "diagramImg": "exam_q132.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 등장 배경 | AI-RAN 얼라이언스 (6G 핵심) | 엔비디아·소프트뱅크·삼성·에릭슨 등이 주도, 기존 통신 전용 장비(ASIC)로만 쓰이던 기지국을 범용 GPU/가속기 기반 클라우드 인프라로 전환 |\n| 3대 핵심 영역 | AI-for-RAN (망 자체 지능화) | AI 모델로 무선 채널 추정, 대규모 MIMO 빔포밍 최적화, 이동성 예측 핸드오버, 유휴 시간대 기지국 절전 제어를 수행해 주파수·에너지 효율 극대화 |\n| | AI-and-RAN (인프라 자원 공유) | 기지국 연산 자원을 통신 베이스밴드(L1/L2) 처리와 외부 AI 워크로드가 시간·공간적으로 공유(Multi-tenancy)하여 통신사의 설비 가동률(ROI)을 30%에서 90%로 향상 |\n| | AI-on-RAN (기지국 엣지 AI) | 기지국 인프라 위에서 자율주행·로보틱스·XR을 위한 초저지연 생성형 AI 추론 서비스를 직접 구동 |\n| 기존 RAN과 차이점 | 전용 장비 → 범용 AI 플랫폼 | 기존 RAN(단일 목적 통신 처리, 낮은 평균 가동률, 정적 규칙 제어) vs AI-RAN(통신+AI 통합 GPU 서버, 동적 자율 최적화, 새로운 에지 AI 수익 창출) |",
    "keywords": [
      "AI-RAN Alliance",
      "AI-for-RAN",
      "AI-and-RAN",
      "AI-on-RAN",
      "Open RAN(vRAN) 진화",
      "기지국 GPU 공유",
      "6G AI-Native"
    ],
    "differentiation": "[유형 A] 기존 RAN / Open RAN(vRAN) vs AI-RAN 심층 비교 및 통신사 수익모델 혁신\n① Open RAN에서 AI-RAN으로의 도약: Open RAN이 하드웨어 종속을 탈피해 범용 CPU(x86)로 가상화(vRAN)한 단계라면, AI-RAN은 GPU 가속기(Aerial 플랫폼 등)를 도입해 물리계층 신호처리 자체를 신경망으로 대체하고 남는 GPU 자원을 외부 기업에 AI 추론 클라우드로 임대하는 수익 모델 혁신."
  },
  {
    "domain": "모의고사",
    "topic": "네트워크 QoS 제공 모델 (IntServ · DiffServ)과 AI 트래픽 제어",
    "mnemonic": "지표(대역폭·지연·지터·손실률) / IntServ(흐름별 RSVP 자원예약·확장성한계) vs DiffServ(클래스별 DSCP 마킹·PHB 홉별처리·대규모백본) / AI트래픽(학습: 대용량 WFQ/셰이핑 vs 추론: 초저지연 PQ)",
    "definition": "트래픽 중요도별로 대역폭과 지연을 차등 보장하는 체계",
    "details": "[IntServ (흐름별 End-to-End 자원 예약: RSVP 프로토콜 · 완벽 보장이나 백본 확장성 불가)]\n[DiffServ (패킷 IP 헤더 ToS/DSCP 마킹 → 경계 라우터 분류/폴리싱 → 코어 라우터 PHB(EF/AF/BE) 큐잉 · 대규모 인터넷 표준)]\n[AI 네트워크 적용] 실시간 추론 트래픽(EF 마킹 + 우선순위 큐 PQ) vs 대규모 배치 학습 트래픽(AF 마킹 + WFQ 최소대역폭 + 쉐이핑/ECN 혼잡제어)",
    "tableRows": [
      {
        "category": "QoS 4대 품질 지표",
        "sub": "대역폭 · 지연 · 지터 · 손실률",
        "desc": "가용 대역폭(Bandwidth), 전송 지연(Latency), 지연 시간의 변이(Jitter: 음성·영상 핵심), 패킷 손실률(Packet Loss Rate)"
      },
      {
        "category": "QoS 제공 모델 비교",
        "sub": "IntServ (통합 서비스 모델)",
        "desc": "통신 전 RSVP 시그널링으로 송수신 경로상 모든 라우터에 흐름(Flow)별 대역폭을 사전 예약 — 엄격한 QoS 보장하나 상태 유지 부하로 대규모 망 적용 불가"
      },
      {
        "category": "",
        "sub": "DiffServ (차등 서비스 모델)",
        "desc": "개별 흐름 대신 트래픽을 소수 등급(Class)으로 묶어 에지에서 DSCP 비트를 마킹하고 코어 라우터는 PHB(홉별 동작: EF 신속전달, AF 보장전달)만 수행해 확장성 우수"
      },
      {
        "category": "AI 트래픽 환경 적용",
        "sub": "학습 vs 추론 트래픽 분리",
        "desc": "대용량 학습(Elephant Flow: 높은 처리량 필요)과 실시간 추론(Mice Flow: 낮은 꼬리 지연 Tail Latency 필수)이 동일 망 공유 시 추론 패킷이 학습 큐에 밀리는 현상 발생"
      },
      {
        "category": "",
        "sub": "DiffServ + 큐잉·혼잡제어 배치",
        "desc": "추론은 DSCP EF 마킹 후 우선순위 큐(PQ, 기아 방지 상한 설정) 배치, 학습은 WFQ 및 트래픽 쉐이핑·VLAN 분리·ECN/PFC 무손실 제어 적용"
      }
    ],
    "keywords": [
      "Bandwidth / Latency / Jitter / Loss",
      "IntServ(RSVP)",
      "DiffServ(DSCP / PHB)",
      "PQ / WFQ / CBWFQ",
      "Elephant vs Mice Flow",
      "Tail Latency(꼬리지연)",
      "ECN / RoCEv2"
    ],
    "differentiation": "[유형 C] 생성형 AI 학습·추론 혼합 망에서의 QoS 설계 시사점 (평균 지연이 아닌 꼬리 지연 관리)\n① 코끼리와 쥐(Elephant vs Mice) 충돌: 수십 GB의 파라미터를 동기화하는 학습 트래픽(Elephant) 뒤에 사용자 챗봇 추론 패킷(Mice)이 줄을 서면 심각한 Head-of-Line 블로킹과 꼬리 지연(99th Percentile Tail Latency)이 발생함.\n② 기술사적 해결책: DiffServ DSCP 마킹과 CBWFQ(클래스 기반 가중 공정 큐잉) + LLQ(저지연 우선 큐)를 결합해 추론 트래픽에 전용 급행 차선을 부여하고, 패킷 폐기 전 조기 혼잡을 알리는 ECN(명시적 혼잡 알림)으로 재전송 지연을 원천 차단."
  },
  {
    "domain": "모의고사",
    "topic": "교착상태 (Deadlock) 발생 4대 필요충분조건과 해결방안",
    "mnemonic": "4대조건: 상·점·비·환 (상호배제·점유대기·비선점·환형대기) / 해결: 예·회·탐·복·무 (예방·회피·탐지·복구·무시)",
    "definition": "다중 프로세스가 자원을 점유한 채 무한 대기 현상 해법",
    "diagramImg": "deadlock_conditions.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 4대 발생 조건 (상점비환) | 상호배제 & 점유와 대기 | 자원을 한 번에 한 프로세스만 독점 사용(Mutual Exclusion)하며, 할당된 자원을 쥔 채 다른 자원을 기다림(Hold and Wait) |\n| | 비선점 & 환형 대기 | 타 프로세스의 자원을 강제로 빼앗을 수 없으며(No Preemption), 자원 대기 그래프가 원형 고리(Circular Wait)를 형성 |\n| 사전 차단 기법 | 예방 (Prevention) | 4대 발생 조건 중 최소 1가지를 원천 부정 (자원 일괄 할당이나 번호순 요청 강제 등 — 자원 낭비 및 처리량 급감 한계) |\n| | 회피 (Avoidance) | 자원 할당 전 안전 상태(Safe State) 여부를 사전 검사해 안전 순서열이 존재할 때만 할당 (다익스트라 은행가 알고리즘) |\n| 사후 처리 및 실무 | 탐지·복구 & 무시(Ostrich) | 자원할당그래프(RAG)로 사이클 탐지 후 프로세스 강제 종료·자원 선점으로 복구, 현대 범용 OS는 오버헤드 방지를 위해 타조 알고리즘(무시) 채택 |",
    "keywords": [
      "상호배제·점유대기·비선점·환형대기",
      "Deadlock 예방·회피·탐지·복구",
      "은행가 알고리즘",
      "자원할당그래프(RAG)",
      "타조 알고리즘"
    ],
    "differentiation": "[유형 B] 현대 범용 OS(Linux/Windows)가 교착상태 예방·회피 대신 '타조 알고리즘'을 택한 이유와 실무 DB/분산락 대응\n① OS 커널의 선택: 1년에 한 번 일어날까 말까 한 데드락을 막으려고 매 자원 요청마다 은행가 알고리즘($O(N^2)$)을 돌리는 것은 배보다 배꼽이 더 크므로 범용 OS는 사용자/앱에 처리를 위임함.\n② DBMS 및 MSA 실무 해법: 반면 RDBMS는 Wait-for Graph로 데드락을 즉시 탐지해 Undo 비용이 가장 작은 희생자(Victim) 트랜잭션을 자동 롤백하며, 분산 MSA에서는 반드시 분산 락(Redis Redlock)에 TTL(만료 시간)을 부여해 영구 교착을 방지."
  },
  {
    "domain": "모의고사",
    "topic": "프로세스 스레싱 (Thrashing) 원인과 해결방안 (Working Set · PFF)",
    "mnemonic": "다중프로그래밍 정도(MPD) 임계치 초과 → 부재율(Page Fault) 폭증 → 스와핑 I/O만 수행 → CPU 이용률 급락 / 해결: 워킹셋(Δ) · 페이지부재빈도(PFF)",
    "definition": "과도한 페이지 부재로 스와핑 매몰돼 CPU 급락 현상",
    "details": "[CPU 이용률]\n   ▲        /\\  <── 임계점(최적 MPD) 이후 급격한 추락 (Thrashing 구간: CPU는 놀고 디스크 스와핑만 100% 가동)\n   │       /  \\_________\n   └──────┴─────────────► [다중프로그래밍 정도 (MPD: 동시 실행 프로세스 수)]\n  * 핵심 해법: 지역성(Locality) 기반 워킹셋(Working Set) 프레임 보장 또는 페이지 부재 빈도(PFF) 상·하한선 동적 조절",
    "tableRows": [
      {
        "category": "발생 원인",
        "sub": "과도한 MPD & 프레임 부족",
        "desc": "동시 실행 프로세스 수(MPD)가 너무 많아져 각 프로세스에 할당된 물리 프레임 수가 최소 요구량(워킹셋) 미만으로 축소"
      },
      {
        "category": "",
        "sub": "악순환 메커니즘",
        "desc": "연속적 페이지 부재(Page Fault) → 디스크 스왑 I/O 대기 → CPU 이용률 하락 → OS 스케줄러가 CPU가 한가한 줄 착각해 새 프로세스를 더 투입 → 스레싱 악화"
      },
      {
        "category": "핵심 해결 방안",
        "sub": "워킹셋 모델 (Working Set)",
        "desc": "데닝(Denning) 고안, 시간 지역성에 기반해 일정 시간 창(Δ) 동안 집중 참조되는 페이지 집합을 메모리에 한꺼번에 상주 보장"
      },
      {
        "category": "",
        "sub": "PFF (페이지 부재 빈도)",
        "desc": "페이지 부재율의 상한선과 하한선을 설정해 부재율이 상한을 넘으면 프레임을 추가 할당하고, 하한 미만이면 프레임을 회수"
      },
      {
        "category": "물리적·정책적 완화",
        "sub": "지역 교체 & 프로세스 스왑아웃",
        "desc": "전역 교체 대신 지역 교체(Local Replacement)로 타 프로세스 전파를 막고, 가용 프레임 부족 시 일부 프로세스를 통째로 일시 중지(Swap-out)"
      }
    ],
    "keywords": [
      "Thrashing",
      "다중프로그래밍 정도(MPD)",
      "페이지 부재(Page Fault)",
      "시간·공간 지역성",
      "Working Set(워킹셋)",
      "PFF(페이지부재빈도)",
      "OOM Killer"
    ],
    "differentiation": "[유형 B] 클라우드·컨테이너 환경에서의 메모리 스레싱 방지와 Linux 커널 튜닝 전략\n① 컨테이너 스왑 함정: 쿠버네티스(K8s) 노드에서 스왑(Swap)이 켜져 있으면 메모리 부족 시 컨테이너가 죽지 않고 디스크 스레싱에 빠져 전체 노드의 응답시간이 마비됨.\n② 실무 운영 제언: K8s 워크로드에서는 스왑을 비활성화(`vm.swappiness=0`)하고 명확한 `resources.limits.memory`와 OOM Killer 우선순위(QoS Class: Guaranteed)를 설정해 스레싱 전파를 조기 차단."
  },
  {
    "domain": "모의고사",
    "topic": "GPU (Graphics Processing Unit) 병렬 아키텍처",
    "mnemonic": "GPU(수천개 CUDA/Tensor 코어·SIMT 병렬·범용 그래픽/AI·캐시계층) vs TPU(거대 2D 시스톨릭 어레이 Systolic Array·행렬곱 GEMM 특화 ASIC·초저전력 전성비)",
    "definition": "수천 코어 SIMT 구조로 대규모 행렬 병렬 연산 기술",
    "details": "[GPU (SIMT 병렬 구조)] : 다수 SM(스트리밍 멀티프로세서: CUDA 코어 + Tensor 코어) <──반복접근──> 레지스터 파일 & L1/L2 캐시 & HBM\n[TPU (Systolic Array)] : 가중치 고정(Weight Stationary) 2차원 MAC 연산 격자 배열 ──(레지스터 재접근 없이 심장박동처럼 데이터 연속 흐름)──> 초고효율 행렬곱",
    "tableRows": [
      {
        "category": "GPU (Graphics Processing)",
        "sub": "SIMT & 범용 병렬성",
        "desc": "수천 개의 ALU(CUDA 코어)와 텐서 코어가 SIMT(단일 명령 다중 스레드) 방식으로 동작 — 그래픽 렌더링, 과학 시뮬레이션, 다양한 AI 모델에 범용 대응"
      },
      {
        "category": "",
        "sub": "구조적 특징 및 한계",
        "desc": "CUDA 생태계 독점력이 막강하나, 연산마다 레지스터와 캐시에 반복 접근하는 폰노이만 오버헤드로 인해 전력 소모(TDP)가 큼"
      },
      {
        "category": "TPU (Tensor Processing)",
        "sub": "시스톨릭 어레이 (Systolic)",
        "desc": "구글이 딥러닝 행렬 연산(GEMM)만을 위해 설계한 맞춤형 주문형 반도체(ASIC)로 거대한 2차원 곱셈-누산기(MAC) 배열 채택"
      },
      {
        "category": "",
        "sub": "동작 원리 및 강점",
        "desc": "가중치를 PE에 고정해 두고 입력 데이터를 파도(심장박동)처럼 인접 연산기로 직접 흘려보내 레지스터 접근 병목 제거 및 와트당 성능(전성비) 극대화"
      },
      {
        "category": "대규모 상호연결",
        "sub": "NVLink vs ICI (3D Torus)",
        "desc": "GPU는 NVLink/NVSwitch로 클러스터링하고, TPU는 광회로 스위치(OCS) 기반 3D 토러스(Torus) 인터커넥트(ICI)로 수천 칩을 직결"
      }
    ],
    "keywords": [
      "SIMT(GPU)",
      "Systolic Array(시스톨릭 어레이, TPU)",
      "ASIC",
      "CUDA vs XLA",
      "Weight Stationary",
      "HBM",
      "전성비(Perf/Watt)"
    ],
    "differentiation": "[유형 A] GPU vs TPU(NPU) 선택 기준: '연구·아키텍처 탐색 유연성' vs '대규모 트랜스포머 학습·추론 전성비'\n① GPU가 유리한 경우: 새로운 신경망 구조(동적 제어 흐름·비정형 연산)를 실험하거나 PyTorch/CUDA 커스텀 커널 생태계가 필수적인 R&D 환경.\n② TPU/국산 NPU가 유리한 경우: 구조가 확정된 거대 트랜스포머(LLM)의 대규모 반복 추론·서빙에서 전력 비용(TCO)과 탄소 배출을 최소화해야 하는 하이퍼스케일 데이터센터."
  },
  {
    "domain": "모의고사",
    "topic": "TPU (Tensor Processing Unit) 시스톨릭 어레이 구조",
    "mnemonic": "GPU(수천개 CUDA/Tensor 코어·SIMT 병렬·범용 그래픽/AI·캐시계층) vs TPU(거대 2D 시스톨릭 어레이 Systolic Array·행렬곱 GEMM 특화 ASIC·초저전력 전성비)",
    "definition": "심장박동식 2차원 연산 격자로 행렬곱 전성비 극대화 칩",
    "details": "[GPU (SIMT 병렬 구조)] : 다수 SM(스트리밍 멀티프로세서: CUDA 코어 + Tensor 코어) <──반복접근──> 레지스터 파일 & L1/L2 캐시 & HBM\n[TPU (Systolic Array)] : 가중치 고정(Weight Stationary) 2차원 MAC 연산 격자 배열 ──(레지스터 재접근 없이 심장박동처럼 데이터 연속 흐름)──> 초고효율 행렬곱",
    "tableRows": [
      {
        "category": "GPU (Graphics Processing)",
        "sub": "SIMT & 범용 병렬성",
        "desc": "수천 개의 ALU(CUDA 코어)와 텐서 코어가 SIMT(단일 명령 다중 스레드) 방식으로 동작 — 그래픽 렌더링, 과학 시뮬레이션, 다양한 AI 모델에 범용 대응"
      },
      {
        "category": "",
        "sub": "구조적 특징 및 한계",
        "desc": "CUDA 생태계 독점력이 막강하나, 연산마다 레지스터와 캐시에 반복 접근하는 폰노이만 오버헤드로 인해 전력 소모(TDP)가 큼"
      },
      {
        "category": "TPU (Tensor Processing)",
        "sub": "시스톨릭 어레이 (Systolic)",
        "desc": "구글이 딥러닝 행렬 연산(GEMM)만을 위해 설계한 맞춤형 주문형 반도체(ASIC)로 거대한 2차원 곱셈-누산기(MAC) 배열 채택"
      },
      {
        "category": "",
        "sub": "동작 원리 및 강점",
        "desc": "가중치를 PE에 고정해 두고 입력 데이터를 파도(심장박동)처럼 인접 연산기로 직접 흘려보내 레지스터 접근 병목 제거 및 와트당 성능(전성비) 극대화"
      },
      {
        "category": "대규모 상호연결",
        "sub": "NVLink vs ICI (3D Torus)",
        "desc": "GPU는 NVLink/NVSwitch로 클러스터링하고, TPU는 광회로 스위치(OCS) 기반 3D 토러스(Torus) 인터커넥트(ICI)로 수천 칩을 직결"
      }
    ],
    "keywords": [
      "SIMT(GPU)",
      "Systolic Array(시스톨릭 어레이, TPU)",
      "ASIC",
      "CUDA vs XLA",
      "Weight Stationary",
      "HBM",
      "전성비(Perf/Watt)"
    ],
    "differentiation": "[유형 A] GPU vs TPU(NPU) 선택 기준: '연구·아키텍처 탐색 유연성' vs '대규모 트랜스포머 학습·추론 전성비'\n① GPU가 유리한 경우: 새로운 신경망 구조(동적 제어 흐름·비정형 연산)를 실험하거나 PyTorch/CUDA 커스텀 커널 생태계가 필수적인 R&D 환경.\n② TPU/국산 NPU가 유리한 경우: 구조가 확정된 거대 트랜스포머(LLM)의 대규모 반복 추론·서빙에서 전력 비용(TCO)과 탄소 배출을 최소화해야 하는 하이퍼스케일 데이터센터."
  },
  {
    "domain": "모의고사",
    "topic": "인터럽트 (Interrupt) 종류와 처리 과정 (ISR)",
    "mnemonic": "내부(트랩: 예외/폴트·시스템콜 SVC) vs 외부(HW: 전원·타이머·I/O) / 처리: 요청→중단/보존(PCB)→판별(폴링/데이지체인/벡터)→ISR실행→복귀 / Top-Half vs Bottom-Half",
    "definition": "이벤트 발생 시 작업 멈추고 긴급 처리 후 복귀 기법",
    "diagramImg": "exam_q137.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 인터럽트 분류 | 외부 인터럽트 (비동기 HW) | 정전·전원 이상, 기계 착오, 타이머 만료, 입출력(I/O) 완료 등 CPU 외부 하드웨어 신호에 의해 비동기적으로 발생 |\n| | 내부 인터럽트 (동기 Trap) | 0으로 나누기, 오버플로우, 페이지 폴트 등 예외(Exception) 및 사용자 프로그램이 커널 기능을 요청하는 시스템 콜(SVC) |\n| 인터럽트 처리 절차 | 요청 → 상태보존 → ISR → 복귀 | 현재 명령어 실행 완료 → PC·레지스터 문맥을 스택/PCB에 백업 → 인터럽트 벡터로 ISR(서비스 루틴) 실행 → 문맥 복구 후 재개 |\n| 판별 방식 3가지 (Q151) | Polling (소프트웨어식) | CPU가 인터럽트 발생 시 모든 장치를 순차적으로 하나씩 검사 — 하드웨어 추가 비용 없으나 반응 속도가 가장 느림 |\n| | Daisy-Chain (하드웨어 직렬) | 모든 장치를 하나의 직렬 회선으로 연결해 우선순위 높은 장치부터 신호 전달 — 빠르나 앞단 장치 고장 시 뒷단 기아(Starvation) 발생 |\n| | Vector Interrupt (하드웨어 병렬) | 장치가 인터럽트 요청과 동시에 고유 벡터 번호(ISR 주소 포인터)를 버스로 직접 전송 — 가장 빠르고 유연한 현대 표준 방식 |",
    "keywords": [
      "외부 인터럽트 vs 내부 트랩(Trap)",
      "ISR(인터럽트 서비스 루틴)",
      "인터럽트 벡터 테이블(IVT)",
      "Polling",
      "Daisy-Chain",
      "Vectored Interrupt",
      "Top-Half / Bottom-Half"
    ],
    "differentiation": "[유형 B] 고속 네트워크(100GbE)에서 인터럽트 폭풍(Interrupt Storm / Livelock) 문제와 해결 방안(NAPI / Top-Bottom Half)\n① 인터럽트 폭풍 한계: 초당 수백만 개 패킷이 쏟아질 때 매 패킷마다 인터럽트를 걸면 CPU가 ISR 문맥교환만 하다가 정작 애플리케이션 처리를 전혀 못 하는 수신 라이브락(Receive Livelock) 발생.\n② 현대 OS 커널 해법: ① ISR을 긴급한 Top-Half와 지연 가능한 Bottom-Half(Softirq/Tasklet/Workqueue)로 이원화하고, ② 트래픽이 많을 때는 인터럽트를 끄고 폴링(Polling)으로 전환해 묶음 처리하는 Linux NAPI 및 DPDK(커널 바이패스) 기술 적용."
  },
  {
    "domain": "모의고사",
    "topic": "인터럽트 판별 기법 (폴링 · 데이지체인 · 벡터 방식)",
    "mnemonic": "내부(트랩: 예외/폴트·시스템콜 SVC) vs 외부(HW: 전원·타이머·I/O) / 처리: 요청→중단/보존(PCB)→판별(폴링/데이지체인/벡터)→ISR실행→복귀 / Top-Half vs Bottom-Half",
    "definition": "복수 장치 중 인터럽트 요청 원인을 식별해 분기 기법",
    "diagramImg": "exam_q151.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 인터럽트 분류 | 외부 인터럽트 (비동기 HW) | 정전·전원 이상, 기계 착오, 타이머 만료, 입출력(I/O) 완료 등 CPU 외부 하드웨어 신호에 의해 비동기적으로 발생 |\n| | 내부 인터럽트 (동기 Trap) | 0으로 나누기, 오버플로우, 페이지 폴트 등 예외(Exception) 및 사용자 프로그램이 커널 기능을 요청하는 시스템 콜(SVC) |\n| 인터럽트 처리 절차 | 요청 → 상태보존 → ISR → 복귀 | 현재 명령어 실행 완료 → PC·레지스터 문맥을 스택/PCB에 백업 → 인터럽트 벡터로 ISR(서비스 루틴) 실행 → 문맥 복구 후 재개 |\n| 판별 방식 3가지 (Q151) | Polling (소프트웨어식) | CPU가 인터럽트 발생 시 모든 장치를 순차적으로 하나씩 검사 — 하드웨어 추가 비용 없으나 반응 속도가 가장 느림 |\n| | Daisy-Chain (하드웨어 직렬) | 모든 장치를 하나의 직렬 회선으로 연결해 우선순위 높은 장치부터 신호 전달 — 빠르나 앞단 장치 고장 시 뒷단 기아(Starvation) 발생 |\n| | Vector Interrupt (하드웨어 병렬) | 장치가 인터럽트 요청과 동시에 고유 벡터 번호(ISR 주소 포인터)를 버스로 직접 전송 — 가장 빠르고 유연한 현대 표준 방식 |",
    "keywords": [
      "외부 인터럽트 vs 내부 트랩(Trap)",
      "ISR(인터럽트 서비스 루틴)",
      "인터럽트 벡터 테이블(IVT)",
      "Polling",
      "Daisy-Chain",
      "Vectored Interrupt",
      "Top-Half / Bottom-Half"
    ],
    "differentiation": "[유형 B] 고속 네트워크(100GbE)에서 인터럽트 폭풍(Interrupt Storm / Livelock) 문제와 해결 방안(NAPI / Top-Bottom Half)\n① 인터럽트 폭풍 한계: 초당 수백만 개 패킷이 쏟아질 때 매 패킷마다 인터럽트를 걸면 CPU가 ISR 문맥교환만 하다가 정작 애플리케이션 처리를 전혀 못 하는 수신 라이브락(Receive Livelock) 발생.\n② 현대 OS 커널 해법: ① ISR을 긴급한 Top-Half와 지연 가능한 Bottom-Half(Softirq/Tasklet/Workqueue)로 이원화하고, ② 트래픽이 많을 때는 인터럽트를 끄고 폴링(Polling)으로 전환해 묶음 처리하는 Linux NAPI 및 DPDK(커널 바이패스) 기술 적용."
  },
  {
    "domain": "모의고사",
    "topic": "UPS (무정전 전원공급장치, Uninterruptible Power Supply) 구성요소와 동작 방식",
    "mnemonic": "구성: 정류기(AC→DC) · 축전지(Battery) · 인버터(DC→AC) · 절체스위치(STS) / 방식: 오프라인(Standby) · 라인인터랙티브 · 온라인(Double Conversion 무순단)",
    "definition": "정전·전압변동 시에도 서버 교류 전원 무중단 공급 장비",
    "diagramImg": "exam_q138.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 4대 주요 기능 | 무정전 · 정전압 · 정주파수 · 노이즈차단 | 갑작스러운 정전 시 배터리 백업 전원 공급(CVCF: 정전압·정주파수 유지) 및 서지(Surge)·고조파·순간전압강하(Sag) 완벽 필터링 |\n| 4대 핵심 구성요소 | 정류기/충전기 (Rectifier) | 상용 교류 전원(AC)을 직류(DC)로 변환하여 축전지를 충전하고 인버터로 직류 전력 공급 |\n| | 축전지 (Battery: 납산/리튬이온) | 평상시 화학 에너지로 전력을 저장했다가 정전 발생 시 비상 발전기 가동 전까지(통상 15~30분) 직류 전원 방전 |\n| | 인버터 (Inverter) & STS | 직류(DC)를 순수 정현파 교류(AC)로 재변환해 IT 장비에 공급(인버터), 인버터 고장·과부하 시 상용 전원으로 무순단 우회(Static Bypass Switch) |\n| 동작 방식 비교 | 오프라인 vs 온라인(이중변환) | 오프라인은 평시 상용 전원 직결(정전 시 4~10ms 절체 지연 발생), 온라인(Double Conversion)은 상시 정류기→인버터를 거쳐 절체시간 0ms(무순단) 보장 |",
    "keywords": [
      "정류기(AC→DC)",
      "인버터(DC→AC)",
      "축전지(납축전지 vs 리튬이온)",
      "STS(무순단 절체스위치)",
      "온라인 더블컨버전(0ms)",
      "CVCF",
      "비상발전기 연계"
    ],
    "differentiation": "[유형 C] AI 데이터센터의 UPS 트렌드 변화: '납축전지에서 리튬이온(LFP)/울트라커패시터로' 및 고효율 에코 모드\n① 배터리 혁신: 기존 납축전지는 무겁고 수명(3~5년)이 짧으나, 리튬이온(특히 열폭주에 안전한 인산철 LFP) 배터리는 부피·무게를 절반으로 줄이고 수명(10년+)과 BMS 셀 단위 관제를 제공(단, 오프가스 감지기·소화설비 필수).\n② 에너지 손실 극복: 온라인 UPS의 상시 이중변환(AC→DC→AC) 전력 손실(4~6%)을 줄이기 위해 평시 고효율 바이패스로 운전하다 이상 감지 시 2ms 이내에 인버터로 전환하는 고효율 모드 및 HVDC 직류 배전 확산."
  },
  {
    "domain": "모의고사",
    "topic": "경쟁조건 (Race Condition) 발생 원인과 임계영역 해결 조건",
    "mnemonic": "발생원인(커널수행중 인터럽트 · 선점형 커널문맥교환 · 멀티코어 공유메모리) / 임계영역 3대조건: 상·진·한 (상호배제 · 진행 · 한정대기)",
    "definition": "공유 자원 동시 접근해 순서 따라 결과가 깨지는 현상",
    "diagramImg": "exam_q139.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 발생 메커니즘 | 비원자적 Read-Modify-Write | 고급언어의 count++ 한 줄도 기계어로는 Load → Add → Store 3단계로 나뉘어 중간에 문맥교환 시 이전 갱신값이 유실됨 |\n| 커널 내 발생 시나리오 | 인터럽트 & 선점형 커널 | 커널 모드에서 전역 자료구조 수정 중 인터럽트 처리기가 개입하거나, 선점형 커널에서 타 프로세스로 문맥교환될 때 발생 |\n| | 멀티프로세서 (SMP) 환경 | 여러 CPU 코어가 동일 물리 메모리 주소에 동시에 접근할 때 발생 (단순 인터럽트 비활성화만으로는 막을 수 없음) |\n| 해결을 위한 3대 조건 | 상호배제 (Mutual Exclusion) | 한 프로세스가 임계영역(Critical Section)에서 수행 중이면 다른 어떤 프로세스도 진입할 수 없어야 함 |\n| | 진행 (Progress) & 한정대기 | 임계영역이 비어있을 때 진입 결정이 무한 연기되면 안 되며(진행), 특정 프로세스가 무한정 기다리는 기아(Starvation)가 없어야 함(한정대기) |",
    "keywords": [
      "Race Condition",
      "임계영역(Critical Section)",
      "상호배제·진행·한정대기",
      "원자적 연산(CAS / Test-and-Set)",
      "TOCTOU 취약점"
    ],
    "differentiation": "[유형 B] 멀티코어 환경에서 '인터럽트 비활성화'의 한계와 하드웨어 원자적 명령(CAS) 및 TOCTOU 보안 취약점\n① 멀티코어 한계: 단일 코어에서는 인터럽트만 끄면 경쟁조건이 막혔으나, 멀티코어(SMP)에서는 코어 1이 인터럽트를 꺼도 코어 2가 동시에 공유 메모리를 수정하므로 반드시 버스/캐시 잠금 기반 원자적 명령(Test-and-Set, Compare-and-Swap)이나 스핀락이 필요.\n② 보안 관점(TOCTOU): 권한 검사 시점(Time-of-Check)과 실제 파일 사용 시점(Time-of-Use) 사이의 미세한 시간차 경쟁조건을 노려 루트 권한을 탈취하는 TOCTOU 공격 방어를 위해 원자적 시스템 콜(`openat` 등)을 사용해야 함."
  },
  {
    "domain": "모의고사",
    "topic": "은행가 알고리즘 (Banker's Algorithm, 다익스트라 교착상태 회피)",
    "mnemonic": "자료구조: Max · Allocation · Need(=Max-Alloc) · Available / 안전상태(Safe State: Need <= Work 만족하는 안전순서열 존재 여부 검증)",
    "definition": "자원 할당 후 안전 상태 유지 여부를 사전 검증 기법",
    "diagramImg": "exam_q140.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 핵심 원리 | 다익스트라 교착상태 회피 | 은행이 모든 고객의 대출 한도를 충족할 수 있는 현금 흐름(안전 순서열)이 보장될 때만 대출해 주는 원리를 OS 자원 할당에 적용 |\n| 4대 핵심 자료구조 | Max & Allocation | Max(각 프로세스가 실행 완료를 위해 필요한 최대 자원 요구량 사전 신고), Allocation(현재 각 프로세스에 할당된 자원량) |\n| | Need & Available | Need(추가로 더 필요한 남은 자원량 = Max - Allocation), Available(현재 시스템에 남아있는 가용 자원량) |\n| 2단계 검증 알고리즘 | 1. 자원 요청 적격성 검사 | 요청량 Request <= Need (초과 요청 아님) 및 Request <= Available (현재 가용 자원으로 즉시 줄 수 있는지) 확인 |\n| | 2. 안전성 알고리즘 (Safety) | 가상으로 자원을 할당해 본 뒤, Need <= Work(가용자원)인 프로세스를 찾아 종료 후 자원을 반납(Work += Allocation)하는 과정을 반복해 모든 프로세스가 끝나는 '안전 순서열(Safe Sequence)'이 존재할 때만 실제 할당 확정 |",
    "keywords": [
      "Deadlock Avoidance(회피)",
      "다익스트라",
      " 안전 상태(Safe State) vs 불안전 상태",
      "안전 순서열(Safe Sequence)",
      "Max / Allocation / Need / Available"
    ],
    "differentiation": "[유형 B] 안전 상태(Safe State)와 불안전 상태(Unsafe State), 교착상태(Deadlock)의 포함 관계 및 실무 한계\n① 불안전 상태 ≠ 교착상태: 불안전 상태는 '앞으로 프로세스들이 동시에 최대치(Max)를 요구할 경우 교착상태에 빠질 가능성이 있는 상태'일 뿐 그 자체로 당장 데드락이 발생한 것은 아님(반면 안전 상태는 데드락 발생 가능성 0% 보장).\n② 실무 적용이 불가능한 이유: 프로세스가 실행 전에 자신이 쓸 최대 자원량(Max)을 미리 정확히 아는 것이 불가능하며, 자원 수와 프로세스 수가 동적으로 변하고 매 요청마다 $O(M \\times N^2)$ 검증 오버헤드가 발생하기 때문."
  },
  {
    "domain": "모의고사",
    "topic": "파이프라인 해저드 (Pipeline Hazard: 구조적 · 데이터 · 제어 해저드)",
    "mnemonic": "구조적(자원충돌 → 하버드아키텍처 L1 I/D 분리) · 데이터(RAW/WAR/WAW → 전방전달 Forwarding / 레지스터 재명명) · 제어(분기명령 → 분기예측 BTB / 지연분기)",
    "definition": "명령어 파이프라인서 다음 명령어 실행이 지연 병목 해법",
    "diagramImg": "exam_q141.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 명령어 병렬화 진화 | 파이프라인 → 슈퍼스칼라 · VLIW | 단일 파이프라인 → 슈퍼파이프라인(단계 세분화) → 슈퍼스칼라(다중 파이프라인 병렬 인출·비순차 실행 OoO) → VLIW(컴파일러 정적 스케줄링) |\n| 구조적 해저드 (Structural) | 하드웨어 자원 충돌 | 서로 다른 명령어가 동일 클록에 같은 메모리나 ALU를 동시 사용하려 할 때 발생 → 해결: 명령어 캐시(I-Cache)와 데이터 캐시(D-Cache) 물리 분리(하버드 구조) |\n| 데이터 해저드 (Data) | RAW (진성 데이터 의존성) | 앞 명령어의 연산 결과가 레지스터에 쓰이기(WB) 전에 뒤 명령어가 읽으려(Read After Write) 할 때 발생 → 해결: ALU 출력을 다음 입력으로 직결하는 전방전달(Forwarding/Bypassing) |\n| | WAR & WAW (가짜 이름 의존성) | 비순차 실행(Out-of-Order) 시 같은 레지스터 이름을 재사용해 발생하는 반의존성(WAR)·출력의존성(WAW) → 해결: 물리 레지스터 재명명(Register Renaming, Tomasulo) |\n| 제어 해저드 (Control) | 분기 명령어 (Branch) | 조건 분기문(if/loop)의 점프 여부가 결정되기 전까지 다음 인출할 명령어를 몰라 파이프라인이 비워지는(Flush) 현상 → 해결: 동적 분기 예측(BTB), 지연 분기(Delayed Branch) |",
    "keywords": [
      "구조적·데이터·제어 해저드",
      "RAW / WAR / WAW",
      "Forwarding(전방전달)",
      "Register Renaming(레지스터 재명명)",
      "분기 예측(Branch Prediction)",
      "슈퍼스칼라 / VLIW"
    ],
    "differentiation": "[유형 C] 비순차 실행(Out-of-Order)과 투기적 분기 예측(Speculative Execution)이 낳은 하드웨어 보안 취약점(멜트다운·스펙터)\n① 성능 최적화의 역설: 현대 슈퍼스칼라 CPU는 제어 해저드를 숨기기 위해 분기 조건이 확인되기도 전에 미래 명령어를 미리 실행(Speculative Execution)하고 틀리면 롤백함.\n② 스펙터(Spectre) 부채널 공격: 롤백 시 레지스터는 원래대로 돌아가지만 '캐시 메모리에 적재된 흔적'은 그대로 남는 점을 악용해 커널 기밀을 훔쳐내는 부채널 공격이 발생 → 하드웨어 펜스(`lfence`) 및 커널 페이지 테이블 격리(KPTI) 적용."
  },
  {
    "domain": "모의고사",
    "topic": "선점형 스케줄링 (Preemptive Scheduling: RR · SRT · MLQ · MLFQ)",
    "mnemonic": "비선점(FCFS·SJF·HRN) vs 선점(RR·SRT·선점우선순위·MLQ·MLFQ) / 규정시간 할당량(Time Quantum) · 문맥교환 오버헤드 · 에이징(Aging)",
    "definition": "실행 중인 프로세스의 CPU를 강제 회수해 재배분 기법",
    "diagramImg": "exam_q142.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 선점형 개념 및 특징 | 강제 CPU 회수 & 응답성 | 시분할 대화형 시스템 및 실시간 시스템 필수: 높은 우선순위 프로세스 도착 또는 타임 슬라이스 만료 시 타이머 인터럽트로 CPU 강제 선점 |\n| 주요 선점 알고리즘 | RR (Round Robin) | FIFO 큐 + 고정 시간 할당량(Time Quantum $q$) 부여: 할당 시간 내 미완료 시 준비 큐 맨 뒤로 이동 ($q$가 너무 크면 FCFS화, 너무 작으면 문맥교환 오버헤드 폭증) |\n| | SRT (Shortest Remaining Time) | 비선점 SJF의 선점형 버전: 현재 실행 중인 프로세스의 남은 시간보다 더 짧은 실행 시간을 가진 신규 프로세스 도착 시 즉시 CPU 선점 |\n| | MLQ & MLFQ (다단계 피드백 큐) | 우선순위별 다중 큐를 두고, CPU를 오래 쓰는 연산 위주 작업은 하위 큐로 강등시키고 I/O 대화형 작업은 상위 큐에 유지하며 기아 방지를 위해 에이징(Aging) 적용 |\n| 현대 OS 스케줄러 | Linux CFS & EEVDF | 가중치 기반 가상 실행시간(vruntime)이 가장 작은 태스크를 Red-Black 트리에서 $O(1)$로 선택하는 CFS 및 지연시간까지 정밀 보장하는 최신 EEVDF 스케줄러 |",
    "keywords": [
      "Preemptive vs Non-Preemptive",
      "Round Robin(Time Quantum)",
      "SRT",
      "MLFQ(다단계 피드백 큐)",
      "기아 현상(Starvation) & Aging",
      "Linux CFS / EEVDF"
    ],
    "differentiation": "[유형 A] 선점형(Preemptive) vs 비선점형(Non-Preemptive) 비교 및 실시간 OS에서의 우선순위 역전(Priority Inversion) 해결\n① 우선순위 역전 문제: 선점형 스케줄링에서 높은 우선순위 태스크(H)가 낮은 우선순위 태스크(L)가 쥔 뮤텍스 락을 기다리는 동안, 중간 우선순위 태스크(M)가 L을 선점해버려 결과적으로 H가 무한 대기하는 치명적 현상(화성 탐사선 패스파인더호 장애 원인).\n② 해결책(우선순위 상속 Priority Inheritance): L이 H가 필요로 하는 락을 쥐고 있는 동안 일시적으로 L의 우선순위를 H 수준으로 끌어올려 M에게 선점당하지 않고 빨리 임계영역을 빠져나오도록 보장."
  },
  {
    "domain": "모의고사",
    "topic": "고가용성 (HA, High Availability) 클러스터링",
    "mnemonic": "HA(소프트웨어 클러스터링·Active-Standby/Active·수초~수분 Failover 중단허용·합리적비용) vs FTS(하드웨어 물리이중화 Lock-step·절체시간 0초 무중단·데이터유실 0·고비용 미션크리티컬)",
    "definition": "장애 시 예비 노드로 신속 절체해 중단 최소화하는 구조",
    "details": "[HA (고가용성)] : [Active Node] ──(Heartbeat 감시 / 공유 스토리지)──> 장애 시 [Standby Node]로 Failover (수 초~수 분 짧은 순단 발생 가능)\n[FTS (결함허용/내고장성)] : [CPU/메모리 모듈 A + 모듈 B (Lock-step 동일 클록 동시 연산 / TMR 3중 다수결)] ──> 부품 고장 시 0ms 무중단·무손실 지속",
    "tableRows": [
      {
        "category": "HA (High Availability)",
        "sub": "목적 및 장애 시 동작",
        "desc": "장애 발생 시 예비 노드(Standby)로 신속히 절체(Failover)하여 연간 가용률 99.9%~99.99% 달성 — 절체 동안 수 초~수 분의 짧은 중단 및 진행 중 세션 유실 가능"
      },
      {
        "category": "",
        "sub": "구성 방식",
        "desc": "소프트웨어 클러스터링 기반 Active-Standby(비대칭) 또는 Active-Active(대칭 부하분산) 구성 (일반 웹, ERP, DB, 클라우드 표준)"
      },
      {
        "category": "FTS (Fault Tolerant)",
        "sub": "목적 및 장애 시 동작",
        "desc": "단일 하드웨어 부품(CPU·메모리·보드) 고장 시에도 절체 시간 0ms(Zero Downtime)로 인메모리 상태와 트랜잭션 유실 없이 99.999%+ 연속 가동"
      },
      {
        "category": "",
        "sub": "구성 방식 (Lock-step / TMR)",
        "desc": "단일 시스템 내부에 CPU·메모리·버스를 물리적으로 2중(Lock-step 동시 클록 실행) 또는 3중(TMR 다수결 보팅)으로 중복 설계 (항공관제·원자력·금융 원장 코어)"
      },
      {
        "category": "핵심 장애 이슈",
        "sub": "스플릿 브레인 (Split-Brain)",
        "desc": "HA 클러스터에서 하트비트 통신선 단절 시 양쪽 노드가 서로 자신이 Active라며 공유 디스크에 동시 쓰기를 시도해 데이터 파괴 → 쿼럼(Quorum) 및 펜싱(STONITH)으로 차단"
      }
    ],
    "keywords": [
      "HA(High Availability)",
      "FTS(Fault Tolerant System)",
      "Failover(절체)",
      "Active-Active / Active-Standby",
      "Lock-step / TMR",
      "Split-Brain & Fencing(STONITH)"
    ],
    "differentiation": "[유형 B] 클라우드 네이티브 시대의 HA 아키텍처: 스플릿 브레인(Split-Brain) 방지와 카오스 엔지니어링(Chaos Engineering)\n① 스플릿 브레인 해결: 2노드 HA에서는 네트워크 단절 시 누가 살아있는지 판별할 수 없으므로 반드시 홀수(3개 이상) 노드로 구성된 Raft/Paxos 쿼럼(Quorum: 과반수 합의)과 장애 노드 전원을 강제 차단하는 STONITH 펜싱을 적용해야 함.\n② 카오스 엔지니어링: 고가용성 구성이 실제 장애 시 작동하지 않는 현상을 막기 위해 운영 중 의도적으로 컨테이너·가용영역(AZ) 장애를 주입(Chaos Monkey)하여 자동 복구력을 상시 실증."
  },
  {
    "domain": "모의고사",
    "topic": "결함허용시스템 (FTS, Fault Tolerant System)",
    "mnemonic": "HA(소프트웨어 클러스터링·Active-Standby/Active·수초~수분 Failover 중단허용·합리적비용) vs FTS(하드웨어 물리이중화 Lock-step·절체시간 0초 무중단·데이터유실 0·고비용 미션크리티컬)",
    "definition": "하드웨어 물리 이중화로 고장 시에도 무중단 보장 시스템",
    "details": "[HA (고가용성)] : [Active Node] ──(Heartbeat 감시 / 공유 스토리지)──> 장애 시 [Standby Node]로 Failover (수 초~수 분 짧은 순단 발생 가능)\n[FTS (결함허용/내고장성)] : [CPU/메모리 모듈 A + 모듈 B (Lock-step 동일 클록 동시 연산 / TMR 3중 다수결)] ──> 부품 고장 시 0ms 무중단·무손실 지속",
    "tableRows": [
      {
        "category": "HA (High Availability)",
        "sub": "목적 및 장애 시 동작",
        "desc": "장애 발생 시 예비 노드(Standby)로 신속히 절체(Failover)하여 연간 가용률 99.9%~99.99% 달성 — 절체 동안 수 초~수 분의 짧은 중단 및 진행 중 세션 유실 가능"
      },
      {
        "category": "",
        "sub": "구성 방식",
        "desc": "소프트웨어 클러스터링 기반 Active-Standby(비대칭) 또는 Active-Active(대칭 부하분산) 구성 (일반 웹, ERP, DB, 클라우드 표준)"
      },
      {
        "category": "FTS (Fault Tolerant)",
        "sub": "목적 및 장애 시 동작",
        "desc": "단일 하드웨어 부품(CPU·메모리·보드) 고장 시에도 절체 시간 0ms(Zero Downtime)로 인메모리 상태와 트랜잭션 유실 없이 99.999%+ 연속 가동"
      },
      {
        "category": "",
        "sub": "구성 방식 (Lock-step / TMR)",
        "desc": "단일 시스템 내부에 CPU·메모리·버스를 물리적으로 2중(Lock-step 동시 클록 실행) 또는 3중(TMR 다수결 보팅)으로 중복 설계 (항공관제·원자력·금융 원장 코어)"
      },
      {
        "category": "핵심 장애 이슈",
        "sub": "스플릿 브레인 (Split-Brain)",
        "desc": "HA 클러스터에서 하트비트 통신선 단절 시 양쪽 노드가 서로 자신이 Active라며 공유 디스크에 동시 쓰기를 시도해 데이터 파괴 → 쿼럼(Quorum) 및 펜싱(STONITH)으로 차단"
      }
    ],
    "keywords": [
      "HA(High Availability)",
      "FTS(Fault Tolerant System)",
      "Failover(절체)",
      "Active-Active / Active-Standby",
      "Lock-step / TMR",
      "Split-Brain & Fencing(STONITH)"
    ],
    "differentiation": "[유형 B] 클라우드 네이티브 시대의 HA 아키텍처: 스플릿 브레인(Split-Brain) 방지와 카오스 엔지니어링(Chaos Engineering)\n① 스플릿 브레인 해결: 2노드 HA에서는 네트워크 단절 시 누가 살아있는지 판별할 수 없으므로 반드시 홀수(3개 이상) 노드로 구성된 Raft/Paxos 쿼럼(Quorum: 과반수 합의)과 장애 노드 전원을 강제 차단하는 STONITH 펜싱을 적용해야 함.\n② 카오스 엔지니어링: 고가용성 구성이 실제 장애 시 작동하지 않는 현상을 막기 위해 운영 중 의도적으로 컨테이너·가용영역(AZ) 장애를 주입(Chaos Monkey)하여 자동 복구력을 상시 실증."
  },
  {
    "domain": "모의고사",
    "topic": "뉴로모픽 컴퓨팅 (Neuromorphic Computing)과 폰노이만 한계 극복",
    "mnemonic": "폰노이만 병목(CPU-메모리 분리·메모리월·전력소모) → 극복: PIM(메모리내연산) → 뉴로모픽(뇌 모사 뉴런·시냅스 일체화 · SNN 스파이킹 신경망 · 비동기 이벤트기반 · 초저전력)",
    "definition": "인간 뇌의 뉴런·시냅스를 모사해 연산·저장 통합한 기술",
    "details": "[폰노이만 아키텍처] : [CPU] <──(시스템 버스 병목: Memory Wall & 막대한 데이터 이동 전력)──> [Memory]\n[뉴로모픽 아키텍처] : [뉴런(연산 코어) + 시냅스(가중치 비휘발성 메모리 RRAM/PCM/멤리스터) 완전 일체화 크로스바 어레이]\n  * 동작 원리: 클록 동기화 없이 임계치 초과 시에만 이산적 스파이크(Spike) 신호를 발화하는 SNN(Spiking Neural Network) 비동기 이벤트 구동",
    "tableRows": [
      {
        "category": "폰노이만 한계와 극복",
        "sub": "메모리 월 (Memory Wall)",
        "desc": "CPU 연산 속도와 메모리 대역폭 격차로 인해 실제 연산보다 데이터를 나르는 데 에너지의 90% 이상과 시간을 소모하는 병목"
      },
      {
        "category": "",
        "sub": "단계별 극복 기술",
        "desc": "① 캐시 계층·HBM(대역폭 확장) → ② PIM/PNM(메모리 내부 연산기 배치) → ③ 뉴로모픽/양자컴퓨팅(완전한 비폰노이만 패러다임 전환)"
      },
      {
        "category": "뉴로모픽 구조적 특징",
        "sub": "연산·저장 완전 통합",
        "desc": "인간 뇌(1,000억 개 뉴런, 20W 초저전력)를 모사하여 연산 소자(뉴런)와 메모리 소자(시냅스: 멤리스터·PRAM·MRAM)를 크로스바 어레이로 물리 통합"
      },
      {
        "category": "",
        "sub": "SNN & 비동기 이벤트 구동",
        "desc": "전체 노드가 매 클록마다 행렬곱을 수행하는 ANN(DNN)과 달리, 자극이 임계치를 넘을 때만 스파이크 펄스를 발생하는 SNN으로 극초저전력 달성"
      },
      {
        "category": "대표 칩 및 활용",
        "sub": "Intel Loihi 2 · IBM NorthPole",
        "desc": "온디바이스 AI 로봇, 드론, 이벤트 카메라(DVS) 실시간 시각·후각 처리 및 상시 대기형 초저전력 엣지 센서"
      }
    ],
    "keywords": [
      "폰노이만 병목(Memory Wall)",
      "뉴로모픽(Neuromorphic)",
      "SNN(Spiking Neural Network)",
      "뉴런·시냅스 통합",
      "멤리스터(Memristor)",
      "비동기 이벤트 기반",
      "PIM"
    ],
    "differentiation": "[유형 A] 폰노이만(CPU/GPU) vs PIM(Processing-In-Memory) vs 뉴로모픽(Neuromorphic) 비교\n① GPU/PIM: 기존 디지털 이진법과 딥러닝(ANN/Transformer) 소프트웨어 생태계를 그대로 유지하면서 대역폭과 연산 위치만 메모리 내부로 옮겨 데이터센터 LLM 가속에 즉시 상용화됨.\n② 뉴로모픽: 스파이크 시간차(STDP)로 학습하는 SNN 알고리즘 체계가 기존 오차역전파(Backpropagation)와 달라 범용 LLM보다는 배터리로 동작하는 자율 로봇·생체모사 감각 처리(Edge AI)에 특화."
  },
  {
    "domain": "모의고사",
    "topic": "운영체제 동기화 기법 (Mutex · Semaphore · Monitor · Spinlock · RCU)",
    "mnemonic": "HW원자명령(Test&Set·CAS) / 스핀락(바쁜대기 Busy-Waiting) vs 뮤텍스(1개 락·소유권·슬립대기) vs 세마포어(정수변수 S·P/V연산·자원카운팅) vs 모니터(고급언어 캡슐화·조건변수)",
    "definition": "멀티스레드 환경에서 공유 자원의 일관성을 보장하는 기법",
    "details": "[하드웨어 동기화 (CAS / Test-and-Set 원자적 명령)] ──기반──> [저수준 OS 동기화: Spinlock(Busy-wait) | Mutex(잠금 소유자 1명) | Semaphore(카운팅 P/V)]\n                                                        └──> [고수준 언어/커널 동기화: Monitor(synchronized) | Read-Write Lock | RCU(무잠금 읽기)]",
    "tableRows": [
      {
        "category": "바쁜 대기 vs 슬립 대기",
        "sub": "스핀락 (Spinlock)",
        "desc": "락을 얻을 때까지 루프를 돌며 계속 확인(Busy-Waiting) — 문맥교환 오버헤드가 없어 임계영역이 극도로 짧은 멀티코어 커널 인터럽트 핸들러에 사용"
      },
      {
        "category": "",
        "sub": "뮤텍스 (Mutex)",
        "desc": "상호배제 잠금(0 또는 1): 락 획득 실패 시 대기 큐에서 Sleep 상태로 전환되어 CPU 낭비 방지, 오직 락을 건 스레드(Owner)만 해제 가능"
      },
      {
        "category": "카운팅 & 시그널링",
        "sub": "세마포어 (Semaphore)",
        "desc": "다익스트라 고안, 정수형 변수 S와 원자적 P(wait: S--)·V(signal: S++) 연산으로 복수(N개)의 동일 자원 할당 및 스레드 간 실행 순서 동기화 수행"
      },
      {
        "category": "고수준 추상화",
        "sub": "모니터 (Monitor)",
        "desc": "뮤텍스/세마포어의 코딩 실수(데드락·P/V 누락)를 막기 위해 공유 데이터와 접근 프로시저, 조건변수(wait/notify)를 클래스 내부로 캡슐화(Java `synchronized`)"
      },
      {
        "category": "현대 고성능 동기화",
        "sub": "RW Lock & RCU (Lock-Free)",
        "desc": "읽기 다중 허용·쓰기 독점(Read-Write Lock) 및 Linux 커널의 RCU(Read-Copy-Update: 읽기는 락 없이 수행하고 쓰기는 복사본 수정 후 포인터만 교체)"
      }
    ],
    "keywords": [
      "Spinlock(Busy-waiting)",
      "Mutex(소유권)",
      "Semaphore(P/V 연산)",
      "Monitor(조건변수)",
      "CAS(Compare-and-Swap)",
      "Lock-Free / RCU"
    ],
    "differentiation": "[유형 A] 이진 세마포어(Binary Semaphore) vs 뮤텍스(Mutex)의 결정적 차이 및 적응형 뮤텍스(Adaptive Mutex)\n① 소유권(Ownership)과 우선순위 상속: 뮤텍스는 '락을 획득한 바로 그 스레드'만 락을 풀 수 있는 소유권 개념이 있어 우선순위 역전 시 우선순위 상속(Priority Inheritance)이 가능하지만, 세마포어는 소유권이 없어 다른 스레드가 V(signal) 연산을 호출해 깨워줄 수 있음(동기화 신호용).\n② 현대 OS의 Adaptive Mutex: 락을 가진 스레드가 다른 코어에서 실행 중이면 잠시 스핀락처럼 기다리고(문맥교환 절약), 슬립 중이면 즉시 대기 큐로 잠드는 하이브리드 방식 채택."
  },
  {
    "domain": "모의고사",
    "topic": "메모리 단편화 (내부 · 외부 단편화)와 해결방안 (페이징 · 압축 · 버디 · 슬랩)",
    "mnemonic": "내부단편화(고정분할·할당크기>요구크기 남는내부공간 → 슬랩할당자) vs 외부단편화(가변분할·중간중간 쪼개진 빈공간 합은 충분하나 연속공간 부족 → 압축/통합·페이징·버디시스템)",
    "definition": "메모리 할당·해제 시 발생 빈 공간 낭비와 계층별 해법",
    "diagramImg": "exam_q146.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 단편화 2대 유형 | 내부 단편화 (Internal) | 고정 크기 블록(페이지·프레임) 할당 시 프로세스가 요청한 크기보다 큰 블록이 배정되어 할당 블록 '내부'에 남는 낭비 공간 |\n| | 외부 단편화 (External) | 가변 분할 할당과 해제가 반복되면서 물리 메모리 중간중간에 작은 빈 조각(Hole)들이 흩어져, 전체 여유 공간 합은 충분한데도 연속된 큰 블록을 할당하지 못하는 현상 |\n| 가상메모리 해법 | 통합(Coalescing) & 압축 | 인접한 빈 공간을 하나로 합치거나(통합), 사용 중인 프로세스들을 한쪽으로 몰아 큰 연속 공간을 만드는 메모리 압축(Compaction, 이동 오버헤드 큼) |\n| | 비연속 할당: 페이징 (Paging) | 가상메모리와 물리메모리를 고정 크기(4KB) 페이지/프레임으로 나누어 불연속 매핑함으로써 외부 단편화를 100% 완전 제거 (마지막 페이지에 미세한 내부 단편화만 존재) |\n| 커널 물리메모리 해법 | 버디 시스템 + 슬랩 할당자 | 물리 프레임의 외부 단편화는 $2^k$승 분할·병합인 버디 시스템(Buddy System)으로 해결하고, 버디 내부의 작은 커널 객체 내부 단편화는 슬랩 할당자(Slab Allocator) 캐시로 완전 해결 |",
    "keywords": [
      "내부 단편화(Internal)",
      "외부 단편화(External)",
      "통합(Coalescing)과 압축(Compaction)",
      "Paging(페이징)",
      "Buddy System(버디 시스템)",
      "Slab Allocator(슬랩 할당자)"
    ],
    "differentiation": "[유형 A] 왜 페이징으로 외부 단편화를 없앴는데도 Linux 커널에 버디 시스템과 슬랩 할당자가 모두 필요한가\n① DMA와 커널의 물리적 연속성 요구: 일반 사용자 프로세스는 페이징(MMU) 덕분에 물리적으로 흩어져 있어도 되지만, DMA 컨트롤러 버퍼나 커널 페이지 테이블 자체는 '물리적으로 연속된 페이지 프레임'이 반드시 필요하므로 **버디 시스템**이 외부 단편화를 막으며 $2^k$ 연속 프레임을 공급함.\n② 2단계 계층 결합: 버디 시스템은 최소 할당 단위가 4KB(1페이지)이므로 수십 바이트짜리 커널 구조체(`task_struct`, `inode`)를 할당할 때 발생하는 내부 단편화를 **슬랩 할당자**가 받아 조각내어 낭비를 0으로 만듦."
  },
  {
    "domain": "모의고사",
    "topic": "프로세스 메모리 4대 영역 (Code · Data · Heap · Stack)과 동작 메커니즘",
    "mnemonic": "정적할당(컴파일 시 결정: Code 명령어 Read-Only · Data 전역/정적변수 [초기화 Data + 미초기화 BSS]) vs 동적할당(런타임 결정: Heap 낮은주소→높은주소 ↑ · Stack 높은주소→낮은주소 ↓ 마주보며 성장)",
    "definition": "프로그램 실행 시 가상주소공간에 할당 4대 영역 구조",
    "details": "[높은 주소 0xFFFF...] ┌─────────────────────────────┐\n                      │ Stack 영역 (지역변수·매개변수·복귀주소) │ ──(함수 호출 시 아래로 ↓ 확장, LIFO 자동해제 / Stack Overflow)\n                      ├ ─ ─ ─ ─ (유연한 여유 공간) ─ ─ ─ ┤\n                      │ Heap 영역 (malloc/new 동적할당)   │ ──(런타임 위로 ↑ 확장, 개발자/GC 해제 / Memory Leak·단편화)\n                      ├─────────────────────────────┤\n                      │ Data 영역 (전역·static 변수: Data + BSS)│ (프로그램 시작~종료 영구 유지)\n[낮은 주소 0x0000...] └────── Code(Text) 영역 (기계어 코드, Read-Only 공유) ──────┘",
    "tableRows": [
      {
        "category": "정적 할당 영역 (컴파일)",
        "sub": "Code (Text) 영역",
        "desc": "실행할 프로그램의 기계어 명령어(Instruction)가 저장되는 영역 — 임의 변조 방지를 위해 읽기 전용(Read-Only)으로 보호되며 여러 프로세스가 공유 가능"
      },
      {
        "category": "",
        "sub": "Data 영역 (Data & BSS)",
        "desc": "전역 변수(Global)와 정적 변수(Static) 저장 — 초기값이 있는 변수는 Data 영역에, 0이나 초기화되지 않은 변수는 BSS 영역에 분리해 실행 파일 크기 절약"
      },
      {
        "category": "동적 할당 영역 (런타임)",
        "sub": "Heap (힙) 영역",
        "desc": "프로그래머가 런타임에 동적 할당(`malloc`, `new`)하는 영역 — 낮은 주소에서 높은 주소 방향(↑)으로 자라며 미해제 시 메모리 누수(Leak) 및 외부 단편화 발생"
      },
      {
        "category": "",
        "sub": "Stack (스택) 영역",
        "desc": "함수 호출 시 생성되는 스택 프레임(지역변수, 매개변수, 복귀 주소 Return Address) 저장 — 높은 주소에서 낮은 주소 방향(↓)으로 자라며 함수 종료 시 SP만 이동해 초고속 자동 해제"
      }
    ],
    "keywords": [
      "Code(Text) 영역",
      "Data & BSS 영역",
      "Heap 영역",
      "Stack 영역(Stack Frame)",
      "Stack Overflow",
      "Memory Leak(메모리 누수)",
      "ASLR / NX-Bit"
    ],
    "differentiation": "[유형 C] 왜 Heap과 Stack은 서로 마주 보며(↑ vs ↓) 자라도록 설계되었는가 & 메모리 보안 기법(ASLR · Canary · NX)\n① 공간 활용 극대화: 어떤 프로그램은 재귀 호출이 깊어 Stack을 많이 쓰고, 어떤 프로그램은 동적 객체를 많이 만들어 Heap을 많이 쓰므로, 사이에 고정 칸막이를 두지 않고 양 끝에서 마주 보며 자라게 해 가용 가상메모리 공간을 유연하게 공유하도록 설계.\n② 버퍼 오버플로우 방어: 스택의 복귀 주소(Return Address)를 덮어쓰는 해킹을 막기 위해 스택 카나리(Canary), 데이터/스택 영역의 코드 실행을 금지하는 NX-Bit(DEP), 4개 영역의 시작 주소를 실행마다 무작위로 섞는 ASLR을 OS 수준에서 적용."
  },
  {
    "domain": "모의고사",
    "topic": "캐시 메모리 (Cache Memory) 사상·교체 기법 및 지역성 (Locality)",
    "mnemonic": "사상기법(직접 Direct · 완전연관 Associative · 집합연관 Set-Associative) / 교체(LRU·LFU·FIFO) / 쓰기(Write-Through vs Write-Back) / 지역성(시간·공간·순차) / AMAT = Hit Time + Miss Rate × Miss Penalty",
    "definition": "CPU와 주기억장치 속도 차이를 극복 고속 메모리 구조",
    "diagramImg": "exam_q148.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 사상 기법 3가지 (Mapping) | 직접 사상 (Direct Mapping) | 주기억장치 블록이 i mod M 공식에 의해 정해진 단 하나의 캐시 라인에만 매핑 — 회로가 단순하고 빠르나 같은 라인을 번갈아 쓰면 충돌 미스(Thrashing) 다발 |\n| | 완전 연관 사상 (Fully Associative) | 빈 캐시 라인 어디에나 자유롭게 적재 가능 — 충돌 미스는 없으나 모든 태그를 병렬 비교하는 고비용 CAM 회로 필요 |\n| | 집합 연관 사상 (Set-Associative) | 직접 사상과 완전 연관의 장점 결합(현대 CPU 표준: N-Way): 특정 Set으로 인덱싱한 뒤 Set 내부의 N개 Way 중 빈 곳에 적재하고 LRU로 교체 |\n| 교체 & 일관성 정책 | 교체 알고리즘 (LRU / LFU) | 집합 내 Way가 꽉 찼을 때 시간 지역성에 기반해 가장 오랫동안 참조되지 않은 블록(LRU)을 방출 |\n| | 쓰기 정책 (Write-Through vs Back) | 캐시와 메모리에 동시 기록(Write-Through: 일관성 쉬우나 버스 병목) vs 캐시에만 Dirty 비트 표시 후 방출 시 일괄 기록(Write-Back: 고성능 표준, MESI 일관성 프로토콜 필요) |\n| 지역성이 중요한 이유 | 시간적 · 공간적 · 순차적 지역성 | 루프·변수 재참조(시간적)와 배열 인접 참조(공간적: 64B 캐시 라인 단위 블록 인출 및 하드웨어 프리페치) 덕분에 메모리 대비 1% 미만 용량으로도 95%+ 적중률(AMAT 단축) 달성 |",
    "keywords": [
      "Direct / Fully Associative / N-Way Set-Associative",
      "LRU 교체",
      "Write-Through vs Write-Back",
      "MESI 캐시 일관성",
      "시간·공간 지역성",
      "AMAT",
      "Cache Line(64B) & False Sharing"
    ],
    "differentiation": "[유형 B] 멀티코어 프로그래밍에서 공간적 지역성(64B 캐시 라인)이 유발하는 '거짓 공유(False Sharing)' 성능 저하와 해결책\n① 거짓 공유(False Sharing) 현상: 서로 다른 코어의 스레드가 전혀 다른 변수를 수정하더라도, 두 변수가 우연히 동일한 64바이트 캐시 라인 안에 나란히 위치해 있으면 MESI 캐시 일관성 프로토콜에 의해 상대 코어의 캐시 라인 전체가 계속 무효화(Invalidate)되어 성능이 급락함.\n② 소프트웨어 최적화: 멀티스레드가 빈번히 갱신하는 변수 사이에 패딩 바이트(Cache Line Padding, `alignas(64)`)를 넣어 서로 다른 캐시 라인에 분리 배치하고, 다차원 배열 순회 시 메모리 저장 순서(Row-major)에 맞춰 루프 타일링(Loop Tiling)을 수행."
  },
  {
    "domain": "모의고사",
    "topic": "운영체제 문맥교환 (Context Switching) 개념, 발생 시점 및 절차",
    "mnemonic": "문맥(CPU 레지스터·PC·SP·PSW + PCB + 커널스택) / 발생시점(인터럽트 · 시분할 타임슬라이스 만료 · I/O 대기 시스템콜 · 고우선순위 선점) / 오버헤드(캐시/TLB Flush → 스레드·비동기 I/O로 완화)",
    "definition": "CPU 전환 위해 프로세스 실행 상태를 저장·복구 절차",
    "diagramImg": "exam_q149.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 문맥(Context)의 개념·유형 | 하드웨어 & OS 커널 문맥 | 특정 시점 프로세스의 실행 상태 전체: ① 하드웨어 문맥(PC 프로그램카운터, SP 스택포인터, 상태레지스터 PSW, 범용 레지스터) + ② OS 문맥(PCB, 페이지 테이블 포인터 CR3, 커널 스택) |\n| 상태전이도상 발생 시점 | 실행(Running) → 준비(Ready) | 타임 슬라이스(Time Quantum) 만료 타이머 인터럽트 발생 또는 더 높은 우선순위 프로세스 도착으로 인한 강제 선점 시 |\n| | 실행(Running) → 대기(Waiting) | 파일/네트워크 I/O 요청이나 뮤텍스 락 대기로 인해 스스로 CPU를 반납하고 블로킹(Sleep) 상태로 들어갈 때 |\n| 문맥교환 상세 절차 | 1. 중단 → 2. PCB 저장 → 3. 스케줄링 → 4. 복원 | 인터럽트/트랩으로 커널 모드 진입 → 현재 프로세스 P1의 레지스터를 P1의 PCB에 저장 → 스케줄러가 다음 프로세스 P2 선택 → P2의 페이지 테이블(CR3) 및 레지스터를 PCB에서 CPU로 적재 후 사용자 모드 복귀 |",
    "keywords": [
      "Context Switching",
      "PCB(Process Control Block)",
      "상태전이도(Running/Ready/Waiting)",
      "커널 모드 전환 vs 문맥교환",
      "TLB Flush 오버헤드",
      "ASID/PCID",
      "멀티스레드"
    ],
    "differentiation": "[유형 A] '단순 모드 전환(User ↔ Kernel Mode Switch)' vs '문맥교환(Context Switch)' 구별 및 간접 오버헤드(TLB/Cache 오염)\n① 함정 주의: 시스템 콜이나 일반 인터럽트 발생 시 사용자 모드에서 커널 모드로 진입했다가 다시 원래 프로세스로 돌아오는 것은 '모드 전환(Mode Switch)'일 뿐 프로세스가 바뀐 문맥교환이 아님.\n② 진짜 무서운 간접 오버헤드: 레지스터 몇 개를 저장·복원하는 직접 비용보다, 프로세스가 바뀔 때 가상주소 공간(페이지 테이블 CR3)이 바뀌면서 **TLB와 L1/L2 캐시가 무효화(Flush)되어 직후 메모리 접근마다 캐시 미스가 쏟아지는 간접 비용**이 훨씬 큼 → 해결: 멀티프로세스 대신 주소공간을 공유하는 **스레드(Thread) / 코루틴**을 사용하고 하드웨어 **PCID/ASID**(TLB에 프로세스 태그 부착)를 활성화."
  },
  {
    "domain": "모의고사",
    "topic": "병렬 컴퓨팅 (Parallel Computing)과 플린(Flynn)의 분류 및 메모리 구조",
    "mnemonic": "플린 분류(명령어×데이터 흐름): SISD · SIMD(벡터/GPU) · MISD(내고장성) · MIMD(멀티코어/분산클러스터) / 메모리: 공유메모리(SMP·NUMA) vs 분산메모리(MPP·클러스터·MPI) / 암달의 법칙",
    "definition": "다수 프로세서가 문제를 분할해 동시 연산 기술과 분류",
    "diagramImg": "exam_q150.png",
    "details": "| 대분류 | 소분류 | 핵심 기술 및 특징 |\n|---|---|---|\n| 플린(Flynn)의 4대 분류 | SISD & MISD | SISD(단일 명령·단일 데이터: 전통 폰노이만 순차 CPU), MISD(다중 명령·단일 데이터: 우주선 다중 검증용 등 특수 목적 외 실무 거의 없음) |\n| | SIMD (단일 명령 · 다중 데이터) | 하나의 제어장치가 동일한 명령어로 수백 개 데이터 배열을 동시에 연산 — CPU 벡터 확장(AVX-512), GPU(SIMT), 멀티미디어·딥러닝 행렬 연산 |\n| | MIMD (다중 명령 · 다중 데이터) | 여러 프로세서 코어가 각자 서로 다른 명령어와 데이터를 비동기적으로 병렬 처리 — 현대 멀티코어 CPU 및 분산 슈퍼컴퓨터 표준 |\n| 메모리 구조에 따른 분류 | 공유 메모리 (SMP & NUMA) | 모든 코어가 단일 주소 공간을 공유(OpenMP 스레드 통신) — 코어 증가 시 버스 경합 한계로 인해 코어별 로컬 메모리를 둔 NUMA 구조로 발전 |\n| | 분산 메모리 (MPP & Cluster) | 각 노드가 독립된 사설 메모리를 가지며 고속 네트워크(InfiniBand)와 메시지 패싱(MPI)으로 통신 — 무한한 노드 수평 확장 가능 |",
    "keywords": [
      "Flynn의 분류(SISD/SIMD/MISD/MIMD)",
      "SMP vs NUMA",
      "공유메모리(OpenMP) vs 분산메모리(MPI)",
      "암달의 법칙(Amdahl's Law)",
      "구스타프슨 법칙",
      "3D 병렬(DP/TP/PP)"
    ],
    "differentiation": "[유형 B] 병렬 컴퓨팅의 한계를 규정한 '암달의 법칙(Amdahl's Law)'과 초거대 AI 학습의 3차원 병렬화(3D Parallelism)\n① 암달의 법칙: 전체 작업 중 병렬화할 수 없는 순차 구간(직렬 비율 $1-P$, 예: I/O·동기화 락)이 10%만 있어도 프로세서를 무한대($N \\to \\infty$)로 늘릴 때 최대 속도 향상은 $1/(1-P) = 10$배를 절대 넘을 수 없음.\n② 초거대 AI 3D 병렬화: 단일 GPU에 들어가지 않는 조 단위 LLM 학습을 위해 데이터 병렬(DP/ZeRO) + 텐서 병렬(TP: 층 내부 행렬 분할, NVLink) + 파이프라인 병렬(PP: 층별 노드 분할)을 결합한 하이브리드 병렬 컴퓨팅 적용."
  },
  {
    "domain": "모의고사",
    "topic": "HBM (고대역폭 메모리, High Bandwidth Memory)",
    "mnemonic": "원인: 메모리 월(연산속도 vs 메모리 대역폭/용량 격차) → 해결 3총사: HBM(초고대역폭 TSV D램적층) + HBF(초고용량 낸드플래시 HBM식 적층) + CXL 3.0(PCIe 기반 캐시일관성 메모리 풀링·공유)",
    "definition": "DRAM을 TSV 수직 적층해 초고대역폭 제공 메모리",
    "details": "[문제: Memory Wall (GPU 연산속도는 2년마다 3배 폭증 vs DRAM 대역폭/용량은 1.4배 정체 → 데이터 이동 병목)]\n  ├── 1. 대역폭 극대화: [HBM (High Bandwidth Memory)] : D램 다이를 TSV 수직 관통 전극으로 적층 + 인터포저로 GPU 옆 초밀착 (1024-bit 광폭 I/O)\n  ├── 2. 용량·비휘발성 혁신: [HBF (High Bandwidth Flash)] : 고성능 NAND 플래시를 HBM처럼 TSV 수직 적층해 HBM급 대역폭에 수십 배 용량(TB급 가중치 상주) 제공\n  └── 3. 유연한 확장·공유: [CXL 3.0 (Compute Express Link)] : PCIe 6.0 물리계층 위에서 CPU·GPU·메모리를 캐시 일관성(CXL.cache/mem)으로 묶어 패브릭 메모리 풀링(Pooling) 구현",
    "tableRows": [
      {
        "category": "메모리 월 (Memory Wall)",
        "sub": "대역폭 및 용량 장벽",
        "desc": "LLM 파라미터 크기와 연산량(FLOPS)은 기하급수적으로 커지나 메모리 전송 대역폭과 GPU VRAM 용량이 따라가지 못해 비싼 GPU가 데이터를 기다리며 유휴 상태에 빠지는 현상"
      },
      {
        "category": "HBM vs HBF 비교",
        "sub": "HBM (고대역폭 메모리)",
        "desc": "DRAM을 TSV(실리콘 관통 전극)로 8~16단 수직 적층(HBM3E/HBM4)해 압도적 읽기/쓰기 대역폭을 제공하나, 용량 한계(수십~백여 GB)와 초고비용·발열 문제 존재"
      },
      {
        "category": "",
        "sub": "HBF (고대역폭 플래시)",
        "desc": "샌디스크·SK하이닉스 등 차세대 기술: 읽기 위주인 AI 추론(모델 가중치) 특성에 착안해 NAND 플래시를 TSV 다채널 병렬 적층하여 HBM에 준하는 읽기 대역폭과 8~16배 이상의 테라바이트(TB)급 초고용량을 저전력·저비용으로 구현"
      },
      {
        "category": "CXL 3.0",
        "sub": "3대 프로토콜 (.io/.cache/.mem)",
        "desc": "CXL.io(PCIe 기반 장치 발견·초기화), CXL.cache(가속기가 호스트 CPU 메모리 캐시 일관성 접근), CXL.mem(호스트가 CXL 확장 메모리를 바이트 단위로 직접 Load/Store)"
      },
      {
        "category": "",
        "sub": "CXL 3.0의 혁신 (Fabric & 공유)",
        "desc": "PCIe 6.0(PAM4 64GT/s) 기반으로 대역폭 2배 향상, 다계층 스위치 패브릭을 통해 최대 4,096개 노드를 연결하고 여러 서버가 하나의 거대한 메모리 풀을 하드웨어 캐시 일관성(Back-Invalidation)을 유지하며 직접 공유(Memory Sharing)"
      }
    ],
    "keywords": [
      "Memory Wall(메모리 월)",
      "HBM(TSV 적층)",
      "HBF(High Bandwidth Flash)",
      "PIM",
      "CXL 3.0(CXL.io / .cache / .mem)",
      "Memory Pooling & Sharing",
      "PCIe 6.0"
    ],
    "differentiation": "[유형 C] AI 추론 인프라에서 HBM + HBF + CXL 3.0의 계층적 결합(Tiered Memory) 시너지 제언\n① 왜 HBM만으로는 부족한가: 수조 파라미터 LLM과 거대 KV Cache를 모두 고가의 HBM에만 올리면 서버 1대당 수억 원의 비용과 전력 장벽에 부딪힘.\n② 3계층 메모리 아키텍처: ① 실시간 수정되는 활성화 값·핵심 KV Cache는 초고속 **HBM**에, ② 읽기 전용인 수 테라바이트의 거대 LLM 원본 가중치(Weights)는 GPU 패키지에 함께 올린 **HBF(고대역폭 플래시)**에, ③ 컨텍스트 이력과 벡터 DB 인덱스는 **CXL 3.0 공유 메모리 풀**에 배치하여 메모리 월을 완벽히 타파."
  },
  {
    "domain": "모의고사",
    "topic": "HBF (고대역폭 플래시, High Bandwidth Flash)",
    "mnemonic": "원인: 메모리 월(연산속도 vs 메모리 대역폭/용량 격차) → 해결 3총사: HBM(초고대역폭 TSV D램적층) + HBF(초고용량 낸드플래시 HBM식 적층) + CXL 3.0(PCIe 기반 캐시일관성 메모리 풀링·공유)",
    "definition": "낸드 플래시 TSV 적층해 초고용량·대역폭 제공 메모리",
    "details": "[문제: Memory Wall (GPU 연산속도는 2년마다 3배 폭증 vs DRAM 대역폭/용량은 1.4배 정체 → 데이터 이동 병목)]\n  ├── 1. 대역폭 극대화: [HBM (High Bandwidth Memory)] : D램 다이를 TSV 수직 관통 전극으로 적층 + 인터포저로 GPU 옆 초밀착 (1024-bit 광폭 I/O)\n  ├── 2. 용량·비휘발성 혁신: [HBF (High Bandwidth Flash)] : 고성능 NAND 플래시를 HBM처럼 TSV 수직 적층해 HBM급 대역폭에 수십 배 용량(TB급 가중치 상주) 제공\n  └── 3. 유연한 확장·공유: [CXL 3.0 (Compute Express Link)] : PCIe 6.0 물리계층 위에서 CPU·GPU·메모리를 캐시 일관성(CXL.cache/mem)으로 묶어 패브릭 메모리 풀링(Pooling) 구현",
    "tableRows": [
      {
        "category": "메모리 월 (Memory Wall)",
        "sub": "대역폭 및 용량 장벽",
        "desc": "LLM 파라미터 크기와 연산량(FLOPS)은 기하급수적으로 커지나 메모리 전송 대역폭과 GPU VRAM 용량이 따라가지 못해 비싼 GPU가 데이터를 기다리며 유휴 상태에 빠지는 현상"
      },
      {
        "category": "HBM vs HBF 비교",
        "sub": "HBM (고대역폭 메모리)",
        "desc": "DRAM을 TSV(실리콘 관통 전극)로 8~16단 수직 적층(HBM3E/HBM4)해 압도적 읽기/쓰기 대역폭을 제공하나, 용량 한계(수십~백여 GB)와 초고비용·발열 문제 존재"
      },
      {
        "category": "",
        "sub": "HBF (고대역폭 플래시)",
        "desc": "샌디스크·SK하이닉스 등 차세대 기술: 읽기 위주인 AI 추론(모델 가중치) 특성에 착안해 NAND 플래시를 TSV 다채널 병렬 적층하여 HBM에 준하는 읽기 대역폭과 8~16배 이상의 테라바이트(TB)급 초고용량을 저전력·저비용으로 구현"
      },
      {
        "category": "CXL 3.0",
        "sub": "3대 프로토콜 (.io/.cache/.mem)",
        "desc": "CXL.io(PCIe 기반 장치 발견·초기화), CXL.cache(가속기가 호스트 CPU 메모리 캐시 일관성 접근), CXL.mem(호스트가 CXL 확장 메모리를 바이트 단위로 직접 Load/Store)"
      },
      {
        "category": "",
        "sub": "CXL 3.0의 혁신 (Fabric & 공유)",
        "desc": "PCIe 6.0(PAM4 64GT/s) 기반으로 대역폭 2배 향상, 다계층 스위치 패브릭을 통해 최대 4,096개 노드를 연결하고 여러 서버가 하나의 거대한 메모리 풀을 하드웨어 캐시 일관성(Back-Invalidation)을 유지하며 직접 공유(Memory Sharing)"
      }
    ],
    "keywords": [
      "Memory Wall(메모리 월)",
      "HBM(TSV 적층)",
      "HBF(High Bandwidth Flash)",
      "PIM",
      "CXL 3.0(CXL.io / .cache / .mem)",
      "Memory Pooling & Sharing",
      "PCIe 6.0"
    ],
    "differentiation": "[유형 C] AI 추론 인프라에서 HBM + HBF + CXL 3.0의 계층적 결합(Tiered Memory) 시너지 제언\n① 왜 HBM만으로는 부족한가: 수조 파라미터 LLM과 거대 KV Cache를 모두 고가의 HBM에만 올리면 서버 1대당 수억 원의 비용과 전력 장벽에 부딪힘.\n② 3계층 메모리 아키텍처: ① 실시간 수정되는 활성화 값·핵심 KV Cache는 초고속 **HBM**에, ② 읽기 전용인 수 테라바이트의 거대 LLM 원본 가중치(Weights)는 GPU 패키지에 함께 올린 **HBF(고대역폭 플래시)**에, ③ 컨텍스트 이력과 벡터 DB 인덱스는 **CXL 3.0 공유 메모리 풀**에 배치하여 메모리 월을 완벽히 타파."
  },
  {
    "domain": "모의고사",
    "topic": "CXL 3.0 (Compute Express Link) 메모리 풀링·공유",
    "mnemonic": "원인: 메모리 월(연산속도 vs 메모리 대역폭/용량 격차) → 해결 3총사: HBM(초고대역폭 TSV D램적층) + HBF(초고용량 낸드플래시 HBM식 적층) + CXL 3.0(PCIe 기반 캐시일관성 메모리 풀링·공유)",
    "definition": "PCIe 기반 캐시 일관성로 이기종 메모리 풀링 기술",
    "details": "[문제: Memory Wall (GPU 연산속도는 2년마다 3배 폭증 vs DRAM 대역폭/용량은 1.4배 정체 → 데이터 이동 병목)]\n  ├── 1. 대역폭 극대화: [HBM (High Bandwidth Memory)] : D램 다이를 TSV 수직 관통 전극으로 적층 + 인터포저로 GPU 옆 초밀착 (1024-bit 광폭 I/O)\n  ├── 2. 용량·비휘발성 혁신: [HBF (High Bandwidth Flash)] : 고성능 NAND 플래시를 HBM처럼 TSV 수직 적층해 HBM급 대역폭에 수십 배 용량(TB급 가중치 상주) 제공\n  └── 3. 유연한 확장·공유: [CXL 3.0 (Compute Express Link)] : PCIe 6.0 물리계층 위에서 CPU·GPU·메모리를 캐시 일관성(CXL.cache/mem)으로 묶어 패브릭 메모리 풀링(Pooling) 구현",
    "tableRows": [
      {
        "category": "메모리 월 (Memory Wall)",
        "sub": "대역폭 및 용량 장벽",
        "desc": "LLM 파라미터 크기와 연산량(FLOPS)은 기하급수적으로 커지나 메모리 전송 대역폭과 GPU VRAM 용량이 따라가지 못해 비싼 GPU가 데이터를 기다리며 유휴 상태에 빠지는 현상"
      },
      {
        "category": "HBM vs HBF 비교",
        "sub": "HBM (고대역폭 메모리)",
        "desc": "DRAM을 TSV(실리콘 관통 전극)로 8~16단 수직 적층(HBM3E/HBM4)해 압도적 읽기/쓰기 대역폭을 제공하나, 용량 한계(수십~백여 GB)와 초고비용·발열 문제 존재"
      },
      {
        "category": "",
        "sub": "HBF (고대역폭 플래시)",
        "desc": "샌디스크·SK하이닉스 등 차세대 기술: 읽기 위주인 AI 추론(모델 가중치) 특성에 착안해 NAND 플래시를 TSV 다채널 병렬 적층하여 HBM에 준하는 읽기 대역폭과 8~16배 이상의 테라바이트(TB)급 초고용량을 저전력·저비용으로 구현"
      },
      {
        "category": "CXL 3.0",
        "sub": "3대 프로토콜 (.io/.cache/.mem)",
        "desc": "CXL.io(PCIe 기반 장치 발견·초기화), CXL.cache(가속기가 호스트 CPU 메모리 캐시 일관성 접근), CXL.mem(호스트가 CXL 확장 메모리를 바이트 단위로 직접 Load/Store)"
      },
      {
        "category": "",
        "sub": "CXL 3.0의 혁신 (Fabric & 공유)",
        "desc": "PCIe 6.0(PAM4 64GT/s) 기반으로 대역폭 2배 향상, 다계층 스위치 패브릭을 통해 최대 4,096개 노드를 연결하고 여러 서버가 하나의 거대한 메모리 풀을 하드웨어 캐시 일관성(Back-Invalidation)을 유지하며 직접 공유(Memory Sharing)"
      }
    ],
    "keywords": [
      "Memory Wall(메모리 월)",
      "HBM(TSV 적층)",
      "HBF(High Bandwidth Flash)",
      "PIM",
      "CXL 3.0(CXL.io / .cache / .mem)",
      "Memory Pooling & Sharing",
      "PCIe 6.0"
    ],
    "differentiation": "[유형 C] AI 추론 인프라에서 HBM + HBF + CXL 3.0의 계층적 결합(Tiered Memory) 시너지 제언\n① 왜 HBM만으로는 부족한가: 수조 파라미터 LLM과 거대 KV Cache를 모두 고가의 HBM에만 올리면 서버 1대당 수억 원의 비용과 전력 장벽에 부딪힘.\n② 3계층 메모리 아키텍처: ① 실시간 수정되는 활성화 값·핵심 KV Cache는 초고속 **HBM**에, ② 읽기 전용인 수 테라바이트의 거대 LLM 원본 가중치(Weights)는 GPU 패키지에 함께 올린 **HBF(고대역폭 플래시)**에, ③ 컨텍스트 이력과 벡터 DB 인덱스는 **CXL 3.0 공유 메모리 풀**에 배치하여 메모리 월을 완벽히 타파."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = topics;
}
