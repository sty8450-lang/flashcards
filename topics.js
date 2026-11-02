/**
 * 기술사 암기장 - 10대 도메인(AI, CAOS, DB, DS, NW, 경영, 보안, 소공, 통계, 프관) 표준 스키마
 * 1교시형 단일 토픽 (1주제 = 1카드) 구조
 *
 * [토픽 객체 표준 구조]
 * {
 *   domain: "도메인명",
 *   topic: "토픽 제목",
 *   mnemonic: "핵심 두음 키워드",
 *   definition: "25~30자 핵심 정의 ([목적] + [핵심 키워드] + [종결어])",
 *   keywords: ["핵심 키워드1", "핵심 키워드2", ...],
 *   diagram: "상단 다이어그램 / 개념도 텍스트",
 *   tableRows: [
 *     { major: "대분류", minor: "소분류", desc: "핵심 기술 및 특징" }
 *   ]
 * }
 */

const topics = [
  // =========================================================================
  // 1. AI (인공지능)
  // =========================================================================
  {
    domain: "AI",
    topic: "검색 증강 생성 (RAG)",
    mnemonic: "파·청·임·벡 / 검·리·프·생",
    definition: "환각 완화 위해 외부 벡터DB 문서를 결합하는 기술",
    keywords: [
      "환각 현상 완화",
      "청킹 & 임베딩",
      "벡터 DB",
      "하이브리드 검색",
      "리랭커",
      "두음: 파청임벡 검리프생"
    ],
    diagram: `[사전 색인] 원본 문서 → 파싱/청킹(분할) → 임베딩(벡터화) → [벡터 DB 저장]
[실시간 생성] 질문 입력 → 유사문서 검색/리랭킹 → [프롬프트+지식 결합] → LLM 답변 생성`,
    tableRows: [
      { major: "핵심 개념", minor: "정의", desc: "외부 신뢰 지식저장소(벡터 DB)에서 근거 문서를 검색·증강하여 LLM의 환각(거짓말)을 줄이는 기술" },
      { major: "색인 단계", minor: "파싱·청킹", desc: "PDF·문서를 의미 단위의 작은 조각(Chunk)으로 분할하여 검색 정확도 확보" },
      { major: "색인 단계", minor: "임베딩·벡터DB", desc: "텍스트를 고차원 숫자 벡터로 변환 후 유사도 검색이 가능한 벡터 DB에 저장" },
      { major: "검색·생성", minor: "하이브리드 검색", desc: "키워드 검색(BM25)과 의미 기반 벡터 검색(Dense)을 결합해 검색 누락 방지" },
      { major: "검색·생성", minor: "리랭커 (Re-rank)", desc: "검색된 후보 문서들의 문맥 적합도를 재계산하여 최상위 근거만 프롬프트에 주입" }
    ]
  },
  {
    domain: "AI",
    topic: "트랜스포머 (Transformer)",
    mnemonic: "위·셀·피·인·디",
    definition: "장기 의존성 해결 위해 어텐션으로 병렬 처리하는 신경망",
    keywords: [
      "병렬 연산 처리",
      "위치 인코딩 (Positional Encoding)",
      "인코더(BERT) 구조",
      "디코더(GPT) 구조",
      "장기 의존성 해결"
    ],
    diagram: `입력 문장 → [단어 임베딩 + 위치 인코딩]
  ↓
[인코더 블록 × N] (양방향 문맥 이해: BERT)
  ↓
[디코더 블록 × N] (자기회귀 다음 토큰 생성: GPT) → 확률 출력(Softmax)`,
    tableRows: [
      { major: "등장 배경", minor: "RNN 한계 극복", desc: "순차 처리로 인한 학습 속도 저하와 장기 의존성(앞부분 망각) 문제를 병렬 처리 구조로 해결" },
      { major: "입력 처리", minor: "위치 인코딩", desc: "단어를 순차적이 아닌 한꺼번에 입력받기 때문에 단어의 순서(위치) 값을 사인·코사인 벡터로 더해줌" },
      { major: "발전 구조", minor: "인코더 계열 (BERT)", desc: "양방향 문맥 이해에 강점 (문서 분류, 개체명 인식, 질의응답)" },
      { major: "발전 구조", minor: "디코더 계열 (GPT)", desc: "이전 토큰을 바탕으로 다음 단어 예측 및 생성에 강점 (초거대 생성형 AI)" }
    ]
  },
  {
    domain: "AI",
    topic: "어텐션 메커니즘 (Self-Attention)",
    mnemonic: "질·키·값 (Q·K·V)",
    definition: "문맥 파악 위해 질의·키·값 내적으로 중요도 구한 기법",
    keywords: [
      "Query · Key · Value (Q·K·V)",
      "스케일드 닷 프로덕트",
      "멀티 헤드 어텐션",
      "마스크드 어텐션"
    ],
    diagram: `입력 벡터 → [Q(질의) · K(키) · V(값) 가중치 투영]
  ↓
유사도 내적(Q·K^T) → 스케일링(÷√d_k) → Softmax 가중치 → V 결합 → [멀티 헤드 병합]`,
    tableRows: [
      { major: "핵심 원리", minor: "셀프 어텐션", desc: "문장 내 단어들 간의 질의(Q)·키(K)·값(V) 내적을 통해 문맥상 단어 간 연관도와 중요도를 계산" },
      { major: "연산 과정", minor: "Scaled Dot-Product", desc: "Q와 K의 내적값이 커져 기울기가 소실되는 것을 막기 위해 차원수의 제곱근(√d_k)으로 나누어 정규화" },
      { major: "확장 구조", minor: "멀티 헤드 어텐션", desc: "어텐션을 여러 개의 헤드로 병렬 수행하여 문법·의미·지시대명사 등 다양한 관점의 문맥 정보를 동시 포착" },
      { major: "제어 기법", minor: "마스크드 어텐션", desc: "디코더 학습 시 미래 시점의 토큰을 미리 컨닝하지 못하도록 음의 무한대(-∞) 마스킹 처리" }
    ]
  },

  // =========================================================================
  // 2. CAOS (컴퓨터구조·OS)
  // =========================================================================
  {
    domain: "CAOS",
    topic: "캐시 일관성 (Cache Coherency)",
    mnemonic: "공·변·버·디 / 스·디·메",
    definition: "데이터 불일치 방지 위해 멀티코어 캐시 값 맞추는 기술",
    keywords: [
      "멀티코어 캐시 불일치",
      "스누핑 (버스 감시)",
      "디렉터리 기반 프로토콜",
      "거짓 공유 (False Sharing)"
    ],
    diagram: `[코어 1 로컬 캐시]   [코어 2 로컬 캐시]   [코어 3 로컬 캐시]
        ↕                    ↕                    ↕
============= 공용 시스템 버스 (스누핑 감시 / 디렉터리 제어) =============
                             ↕
                     [주기억장치 (RAM)]`,
    tableRows: [
      { major: "핵심 개념", minor: "캐시 일관성 정의", desc: "멀티코어 환경에서 각 코어 로컬 캐시가 동일한 메모리 주소를 참조할 때 최신 데이터 값을 일치시키는 기술" },
      { major: "발생 원인", minor: "데이터 불일치", desc: "코어별 개별 캐시 갱신(Write-Back 등), DMA 입출력, 프로세스 코어 이주 시 구버전 데이터 참조 발생" },
      { major: "유지 기법", minor: "스누핑 & 디렉터리", desc: "• 스누핑(Snooping): 모든 캐시 제어기가 공용 버스를 감시하며 동일 주소 수정 시 무효화/갱신 신호 전파\n• 디렉터리 기반: 중앙 디렉터리에 캐시 블록 공유 상태를 기록·추적 (대규모 코어 확장성 우수)" },
      { major: "성능 이슈", minor: "거짓 공유 (False Sharing)", desc: "서로 다른 변수가 우연히 같은 캐시 라인에 위치해, 한 코어가 수정할 때 다른 코어 캐시까지 통째로 무효화되는 현상 (캐시 패딩으로 해결)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "MESI 프로토콜",
    mnemonic: "메·시 (M·E·S·I)",
    definition: "캐시 일관성 유지 위해 4가지 상태로 제어하는 프로토콜",
    keywords: [
      "수정(M) · 배타(E) · 공유(S) · 무효(I)",
      "상태 전이 프로토콜",
      "무효화 (Invalidate)",
      "두음: 메시(MESI)"
    ],
    diagram: `[I: 무효] ──(단독 읽기 Miss)──▶ [E: 배타(원본일치)] ──(쓰기 수행)──▶ [M: 수정(Dirty)]
   ▲                                  │ (타 코어 읽기)
   └────(타 코어 쓰기 Invalidate)──── [S: 공유(다수 코어 읽기)]`,
    tableRows: [
      { major: "4대 상태", minor: "M (수정, Modified)", desc: "현재 코어 캐시에서만 값이 변경(Dirty)되어 주기억장치(원본)와 다른 상태 (유일 보유, 메모리 반영 의무)" },
      { major: "4대 상태", minor: "E (배타, Exclusive)", desc: "현재 코어 캐시만 단독 보유 중이며 주기억장치 원본과 값이 일치(Clean)하는 상태 (버스 요청 없이 즉시 M 전이 가능)" },
      { major: "4대 상태", minor: "S (공유, Shared)", desc: "두 개 이상 코어의 캐시가 동일한 데이터를 읽기 전용으로 함께 보유하며 주기억장치 원본과 일치하는 상태" },
      { major: "4대 상태", minor: "I (무효, Invalid)", desc: "다른 코어가 해당 주소 값을 수정하여 내 캐시 라인의 데이터가 무효화된 상태 (참조 시 Cache Miss 발생)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "가상 메모리 (Virtual Memory)",
    mnemonic: "할·배·인·교",
    definition: "주기억장치 부족 해결 위해 보조기억장치를 할당하는 공간",
    keywords: [
      "논리 주소 vs 물리 주소",
      "요구 페이징 (Demand Paging)",
      "페이지 폴트 (Page Fault)",
      "할당 · 배치 · 인출 · 교체 (할배인교)"
    ],
    diagram: `[프로세스 논리 주소 공간] ──(필요한 페이지 일부만 적재: 요구 페이징)──▶ [물리 메모리 (RAM)]
                                                                           ↕ (Swap In / Out)
                                                                  [보조기억장치 (디스크)]`,
    tableRows: [
      { major: "핵심 개념", minor: "가상 기억 공간", desc: "물리적 주기억장치(RAM) 용량 한계를 극복하기 위해 실행에 필요한 일부만 적재하고 나머지는 디스크에 두어 큰 메모리처럼 쓰는 기법" },
      { major: "동작 원리", minor: "페이지 폴트 처리", desc: "참조한 페이지가 RAM에 없으면 Page Fault 트랩 발생 → 디스크에서 빈 프레임으로 적재 후 페이지 테이블 갱신" },
      { major: "관리 정책", minor: "할당 · 배치 · 인출 · 교체", desc: "• 할당(Allocation): 연속 할당 vs 불연속 분할(페이징, 세그멘테이션)\n• 배치(Placement): First-Fit, Best-Fit, Worst-Fit, Next-Fit\n• 인출(Fetch): 요구 반입(Demand Fetch) vs 예상 반입(Pre-Fetch)\n• 교체(Replacement): 메모리 포화 시 Victim 페이지 선정" }
    ]
  },
  {
    domain: "CAOS",
    topic: "페이징 (Paging)",
    mnemonic: "고·페·내·외",
    definition: "외부 단편화 해결 위해 고정 크기 블록으로 나누는 기법",
    keywords: [
      "고정 크기 블록 분할",
      "페이지 (Page) & 프레임 (Frame)",
      "페이지 테이블",
      "내부 단편화 발생 / 외부 단편화 해결"
    ],
    diagram: `[가상 주소: 페이지 번호(P) | 변위(d)] ──(페이지 테이블 매핑)──▶ [물리 주소: 프레임 번호(F) | 변위(d)]`,
    tableRows: [
      { major: "핵심 개념", minor: "고정 분할 할당", desc: "가상 메모리는 같은 크기의 페이지(Page)로, 물리 메모리는 동일한 크기의 프레임(Frame)으로 고정 분할하여 매핑하는 기법" },
      { major: "구성 요소", minor: "페이지 테이블", desc: "논리 페이지 번호를 물리 프레임 번호로 변환하는 매핑 테이블 (유효 비트, 수정 비트, 접근 권한 비트 포함)" },
      { major: "장단점", minor: "단편화 특성", desc: "• 강점: 할당과 교체가 빠르고 외부 단편화(External Fragmentation)가 원천 해결됨\n• 한계: 마지막 페이지에 남는 공간인 내부 단편화(Internal Fragmentation) 발생" }
    ]
  },
  {
    domain: "CAOS",
    topic: "세그멘테이션 (Segmentation)",
    mnemonic: "가·세·외·내",
    definition: "내부 단편화 해결 위해 논리적 가변 크기로 나누는 기법",
    keywords: [
      "가변 크기 논리적 분할",
      "세그먼트 테이블 (Base · Limit)",
      "보호 및 공유 용이",
      "외부 단편화 발생 / 내부 단편화 해결"
    ],
    diagram: `[가상 주소: 세그먼트 번호(S) | 변위(d)] ──(d < Limit 검증 후 + Base 시작주소)──▶ [물리 메모리 주소]`,
    tableRows: [
      { major: "핵심 개념", minor: "가변 분할 할당", desc: "프로그램을 코드·데이터·힙·스택 등 논리적 의미 단위(세그먼트)의 가변 크기로 분할하여 메모리에 적재하는 기법" },
      { major: "구성 요소", minor: "세그먼트 테이블", desc: "세그먼트 시작 물리 주소(Base)와 세그먼트 길이(Limit)를 보관하며, 변위가 Limit를 넘으면 트랩(Segmentation Fault) 발생" },
      { major: "장단점", minor: "공유 및 단편화", desc: "• 강점: 내부 단편화가 없으며 의미 단위별 읽기/쓰기/실행 보호 및 프로세스 간 코드 공유가 매우 용이\n• 한계: 다양한 크기의 세그먼트 입출입으로 빈 공간이 쪼개지는 외부 단편화 발생" }
    ]
  },
  {
    domain: "CAOS",
    topic: "페이지 교체 알고리즘",
    mnemonic: "세·랜·피·옵 / L·F·N",
    definition: "메모리 포화 시 부재율 줄이려 교체 페이지 선정 정책",
    keywords: [
      "Victim 페이지 선정",
      "FIFO & Belady의 모순",
      "LRU · LFU",
      "NUR (Clock) · SCR (2차 기회)",
      "두음: 세랜피옵 LRN"
    ],
    diagram: `[Page Fault 발생 & 빈 프레임 없음] ➔ 교체 알고리즘으로 Victim 선정 ➔ 디스크 Swap-Out 후 신규 페이지 적재`,
    tableRows: [
      { major: "기본 기법", minor: "OPT (최적) & FIFO", desc: "• OPT(Optimal): 앞으로 가장 오랫동안 쓰이지 않을 페이지 교체 (이론적 최적, 구현 불가)\n• FIFO: 가장 먼저 적재된 페이지 교체 (프레임을 늘려도 페이지 부재가 증가하는 Belady's Anomaly 발생)" },
      { major: "지역성 기반", minor: "LRU & LFU", desc: "• LRU(Least Recently Used): 가장 오랫동안 참조되지 않은 페이지 교체 (시간 지역성 활용, 적중률 우수)\n• LFU(Least Frequently Used): 참조 횟수가 가장 적은 페이지 교체 (초기 집중 참조 후 안 쓰이는 페이지 잔류 한계)" },
      { major: "근사 기법", minor: "SCR & NUR (Clock)", desc: "• SCR(2차 기회): FIFO 기반이되 참조 비트가 1이면 0으로 초기화하고 큐 맨 뒤로 보내 한 번 더 기회 부여\n• NUR(Not Used Recently): 참조 비트(R)와 변형 비트(M) 2개만 사용해 적은 하드웨어 오버헤드로 LRU 근사 구현" }
    ]
  },
  {
    domain: "CAOS",
    topic: "큐비트 (Qubit)",
    mnemonic: "중·불·얽 / 초·포·퀀·광·중",
    definition: "초고속 연산 위해 0과 1을 동시 중첩한 양자정보 단위",
    keywords: ["중첩(Superposition)", "얽힘(Entanglement)", "블로흐 구(Bloch Sphere)", "초전도", "포획 이온"],
    diagram: "qubit.png",
    tableRows: [
      { category: "양자역학적 특성", sub: "양자 중첩 (Superposition)", desc: "0과 1 정보를 동시에 표현 가능" },
      { category: "", sub: "양자 얽힘 (Entanglement)", desc: "둘 이상의 큐비트 간 강한 상관관계, 비국소적 정보 전달 기반" },
      { category: "주요 알고리즘", sub: "Shor 알고리즘", desc: "소인수분해" },
      { category: "", sub: "Grover 알고리즘", desc: "비정렬 검색" },
      { category: "품질 및 제어", sub: "결맞음 시간 (Coherence Time)", desc: "양자 상태 유지 시간 (T1, T2), 양자 연산 가능 시간 결정" },
      { category: "", sub: "양자 오차 수정 (QEC)", desc: "디코히어런스 극복, 물리 큐비트를 묶어 논리 큐비트 형성" },
      { category: "하드웨어 구현", sub: "초전도 (조셉슨 접합)", desc: "[강점] 빠른 게이트 연산, 상용 클라우드 선도\n[과제] 극저온 냉동기 필수, 짧은 결맞음 시간\n[키워드] 인공 원자, 트랜스몬, 극저온" },
      { category: "", sub: "포획 이온 (전자기장)", desc: "[강점] 압도적 긴 결맞음 시간, 최고 수준 연산 충실도\n[과제] 연산 속도 상대적 느림, 복잡한 광학계 제어\n[키워드] 단일 이온, 광학 격자, 충실도" },
      { category: "", sub: "퀀텀닷 (양자점)", desc: "[강점] 기존 CMOS 팹 호환, 극소형 초고집적\n[과제] 큐비트 간 전자기 누화(Crosstalk), 균일 제어 공정 난제\n[키워드] 반도체 스핀, CMOS 호환성" },
      { category: "", sub: "광자 (위상 변조)", desc: "[강점] 유일한 상온 동작 가능, 장거리 통신 결합\n[과제] 광자간 직접 상호작용 유도 극난, 얽힘 생성 확률적 한계\n[키워드] 비행 큐비트, 상온 퀀텀, 광섬유" },
      { category: "", sub: "중성 원자 (광학 핀셋)", desc: "[강점] 수천 큐비트급 대규모 배열 용이, 물리적 셔틀링 가능\n[과제] 원자 포획 손실률 관리 필요, 게이트 조작 속도 개선\n[키워드] 뤼드베리 상태, 대규모 확장" }
    ]
  },
  {
    domain: "CAOS",
    topic: "결함허용 시스템 (FTS)",
    mnemonic: "탐·진·복 / 셀·티·와 / N·복",
    definition: "업무 중단 방지 위해 장치를 중복 구성한 무중단 시스템",
    keywords: [
      "Fault Tolerant System",
      "물리적 하드웨어 중복 (Lockstep)",
      "절체시간 0초 (No Failover Time)",
      "TMR (3중 모듈 중복)",
      "N-Version 프로그래밍 · Recovery Block",
      "두음: 탐진복 / 셀티와 / N버전N셀프RB"
    ],
    diagram: `[입력] ➔ [모듈 1] & [모듈 2] & [모듈 3] (동시 실행) ➔ [다수결 보터 (Voter)] ➔ 중단 없는 정상 출력 (절체시간 0초)`,
    tableRows: [
      { major: "핵심 개념", minor: "무중단 결함허용", desc: "시스템 주요 부품을 물리적으로 중복 구성하여 HW/SW 결함 발생 시에도 절체시간(0초) 없이 규정된 기능을 지속 수행하는 시스템" },
      { major: "처리 절차", minor: "탐지 → 진단 → 복구", desc: "결함 탐지(Exception 처리) → 결함 진단(모니터링·시뮬레이션) → 결함 복구(격리·교체·롤백)" },
      { major: "하드웨어 기법", minor: "TMR · Self-Purging", desc: "• TMR(3중 모듈 중복): 3개 모듈이 동일 연산 수행 후 다수결 보터(Voter)로 정상 결과 채택\n• 기타: Self-Purging Redundancy, Duplication with Comparison, Watchdog Timer" },
      { major: "소프트웨어 기법", minor: "N-Version · Recovery Block", desc: "• N-Version Programming: 독립 개발된 N개 버전을 동시 실행해 결과 비교\n• Recovery Block: 주 루틴 실패 시 체크포인트로 롤백 후 대체 루틴 실행" }
    ]
  },
  {
    domain: "CAOS",
    topic: "고가용성 (HA)",
    mnemonic: "핫·무·콜·컨",
    definition: "서비스 연속성 위해 장애 시 예비 노드로 절체하는 기술",
    keywords: [
      "High Availability",
      "클러스터 Failover (30~300초)",
      "Heartbeat 장애 감시",
      "Hot / Warm / Cold Standby",
      "Mutual Takeover · Concurrent Access",
      "두음: 핫무콜컨"
    ],
    diagram: `[Active 운영 노드] ──(Heartbeat 주기적 상태 감시 & 공유 스토리지)──▶ [Standby 대기 노드] (장애 시 Failover 절체)`,
    tableRows: [
      { major: "핵심 개념", minor: "고가용성 클러스터", desc: "2대 이상의 범용 서버를 하나의 클러스터로 묶어, 주 시스템 장애 시 예비 시스템으로 신속히 서비스를 절체(Failover)하는 기술" },
      { major: "FTS와 차이", minor: "비용 및 절체시간", desc: "전용 HW를 쓰는 FTS(절체 0초, 고비용)와 달리 범용 HW/OS를 사용하며 절체 시간(수초~수분)이 존재하지만 구축 비용이 합리적" },
      { major: "대기 방식", minor: "Hot · Mutual · Concurrent", desc: "• Hot Standby: 주 서버 가동 + 백업 서버 실시간 대기(장애 시 즉시 인수)\n• Mutual Takeover(상호 인수): 평시 2대가 각자 다른 업무 수행 후 장애 시 상대 업무까지 인수\n• Concurrent Access(동시 수행): 모든 노드가 Active로 동시 병렬 처리" }
    ]
  },
  {
    domain: "CAOS",
    topic: "가용성 Five Nines (99.999%) 달성 아키텍처",
    mnemonic: "무·다·카·자",
    definition: "무중단 위해 단일장애점 제거해 99.999% 보장 구조",
    keywords: [
      "가용도 = MTTF / (MTTF + MTTR)",
      "연간 다운타임 5.26분 이내",
      "단일장애점 (SPOF) 제거",
      "Active-Active 다중 리전",
      "카오스 엔지니어링"
    ],
    diagram: `• 가용도 공식 : Availability = MTTF ÷ MTBF = MTTF ÷ (MTTF + MTTR)
• Five Nines (99.999%) = 고장 간격(MTTF) 극대화 + 자동 감지·무중단 절체로 수리 시간(MTTR → 0) 극소화`,
    tableRows: [
      { major: "가용성 지표", minor: "MTTF · MTTR · MTBF", desc: "• MTTF(평균고장시간): 복구 시점부터 다음 장애 발생 시점까지의 평균 정상 운영 시간\n• MTTR(평균수리시간): 장애 발생부터 복구 완료까지 걸리는 평균 시간\n• MTBF(평균고장간격): MTTF + MTTR" },
      { major: "Five Nines", minor: "99.999%의 의미", desc: "전체 운영 시간 중 고장 없이 운영되는 비율이 99.999%로, 1년 기준 허용 다운타임이 약 5.26분 이내인 초고가용성 수준" },
      { major: "달성 아키텍처", minor: "SPOF 제거 & 자동 복구", desc: "• 인프라: 전 계층(네트워크·서버·DB·전원) 이중화로 단일장애점(SPOF) 완전 제거 및 Active-Active 멀티 리전 구성\n• 애플리케이션: 서킷 브레이커(장애 격리), 무중단 배포(블루그린·카나리), 카오스 엔지니어링 기반 상시 장애 훈련" }
    ]
  },
  {
    domain: "CAOS",
    topic: "메모리 벽 (Memory Wall)",
    mnemonic: "연·메·병 / 적·풀·내",
    definition: "연산·메모리 속도 격차로 데이터 이동 병목 생기는 현상",
    keywords: [
      "폰노이만 병목 현상",
      "프로세서-메모리 속도 격차",
      "대역폭 한계 & 용량 한계",
      "데이터 이동 에너지 소모"
    ],
    diagram: `[CPU/GPU 연산 성능: 매년 급격한 지수적 향상] ◀──(심화되는 속도·대역폭 격차: Memory Wall)──▶ [DRAM 메모리 속도: 완만한 향상]`,
    tableRows: [
      { major: "핵심 개념", minor: "메모리 벽 정의", desc: "멀티코어·AI 가속기의 연산 속도는 급증하는 반면, 메모리의 대역폭과 접근 지연시간 개선이 이를 따라가지 못해 전체 성능이 제한되는 현상" },
      { major: "발생 원인", minor: "대역폭 및 핀 수 한계", desc: "폰노이만 구조에서 데이터 버스를 통한 지속적 데이터 이동이 필요하나, DDR 채널 확장 및 물리적 핀 수 증가에 한계 도달" },
      { major: "극복 방향", minor: "3D 적층 · CXL · PIM", desc: "• 대역폭 돌파: TSV 수직 적층 기반 HBM(고대역폭 메모리) 도입\n• 용량·공유 돌파: CXL 기반 메모리 풀링 및 확장\n• 이동 제거: 메모리 내부에서 직접 연산하는 PIM(Processing-In-Memory) 및 뉴로모픽 도입" }
    ]
  },
  {
    domain: "CAOS",
    topic: "CXL (Compute Express Link)",
    mnemonic: "아·캐·멤 / 풀·티·패",
    definition: "병목 해소 위해 PCIe 기반 캐시일관성 연결하는 기술",
    keywords: [
      "PCIe 5.0/6.0 기반 오픈 인터커넥트",
      "CXL.io · CXL.cache · CXL.mem",
      "Device Type 1 · 2 · 3",
      "메모리 풀링(Pooling) & 패브릭 (CXL 3.0)",
      "캐시 일관성 보장"
    ],
    diagram: `[호스트 CPU] ↕ CXL 통합 프로토콜 (CXL.io / CXL.cache / CXL.mem) ↕ [CXL 스위치 패브릭] ↕ [가속기(Type1/2) · 공유 메모리 풀(Type3)]`,
    tableRows: [
      { major: "핵심 개념", minor: "차세대 통합 인터페이스", desc: "PCIe 물리 계층 위에서 CPU와 가속기(GPU·FPGA), 메모리 확장 장치 간 고속·저지연 통신과 캐시 일관성을 제공하는 오픈 표준" },
      { major: "3대 프로토콜", minor: "CXL.io / .cache / .mem", desc: "• CXL.io: PCIe 기반 장치 탐색·초기화·DMA 제어\n• CXL.cache: 가속기가 호스트 CPU 메모리를 캐시 일관성 있게 접근\n• CXL.mem: 호스트 CPU가 장치 부착 메모리를 Load/Store 명령으로 직접 접근" },
      { major: "장치 유형", minor: "Type 1 · Type 2 · Type 3", desc: "• Type 1: 자체 메모리 없는 가속기 (스마트 NIC, io+cache)\n• Type 2: 자체 메모리 탑재 가속기 (GPU·밀집 연산기, io+cache+mem)\n• Type 3: 메모리 용량·대역폭 확장기 (CXL DRAM 모듈, io+mem)" },
      { major: "CXL 3.0 혁신", minor: "스위치 패브릭 & 풀링", desc: "PCIe 6.0(64GT/s PAM4) 기반 대역폭 2배 향상, 다중 스위치 패브릭 및 백무효화(Back-Invalidation)를 통해 다수 서버 간 동적 메모리 풀링·공유(GFAM) 실현" }
    ]
  },
  {
    domain: "CAOS",
    topic: "메모리 계층구조 (Memory Hierarchy)",
    mnemonic: "레·캐·주·보 / 워·블·페",
    definition: "접근 시간 단축 위해 속도·용량별 기억장치 배치한 구조",
    keywords: [
      "레지스터 · 캐시 · 주기억장치 · 보조기억장치",
      "속도 · 용량 · 비용 Trade-off",
      "지역성 (Locality) 기반 계층 이동",
      "워드(Word) 전송 vs 블록/페이지 전송"
    ],
    diagram: `[CPU 코어] ➔ 레지스터 (가장 빠름/소용량/고가) ➔ 캐시(SRAM) ➔ 주기억장치(DRAM) ➔ 스토리지(SSD/HDD, 대용량/저가)`,
    tableRows: [
      { major: "설계 철학", minor: "속도·비용 최적화", desc: "빠르고 비싼 소용량 메모리(SRAM)를 CPU 가까이에, 느리고 저렴한 대용량 메모리(DRAM/NAND)를 하위에 배치하여 평균 접근 시간 최소화" },
      { major: "전송 단위", minor: "워드 · 블록 · 페이지", desc: "• CPU ↔ 캐시: 워드(Word) 단위 전송\n• 캐시 ↔ 주기억장치: 블록(캐시 라인) 단위 전송\n• 주기억장치 ↔ 보조기억장치: 페이지(Page) 또는 세그먼트 단위 전송" },
      { major: "AI 시대 변화", minor: "계층 경계의 재편", desc: "거대 AI 모델 파라미터 적재를 위해 GPU 인접 HBM 계층이 추가되고, CXL 메모리 티어링 및 HBF가 DRAM-SSD 간 간극을 메움" }
    ]
  },
  {
    domain: "CAOS",
    topic: "고대역 초고속 메모리 (HBM)",
    mnemonic: "적·관·인·베",
    definition: "대역폭 극대화 위해 TSV로 DRAM 적층한 메모리",
    keywords: [
      "High Bandwidth Memory",
      "DRAM 3D 수직 적층",
      "TSV (실리콘 관통 전극)",
      "실리콘 인터포저 (2.5D 패키징)",
      "베이스 로직 다이 (Base Die)",
      "HBM4 (2048-bit · 하이브리드 본딩)"
    ],
    diagram: `[HBM DRAM 코어 다이 적층 (TSV 수직 관통 연결)]
         ↓ (마이크로범프 / 하이브리드 본딩)
[베이스 로직 다이 (PHY 제어)] ⇄ (실리콘 인터포저 2048-bit 초광대역 배선) ⇄ [GPU / AI 가속기]`,
    tableRows: [
      { major: "핵심 개념", minor: "TSV 기반 적층 메모리", desc: "여러 개의 DRAM 다이를 수직으로 쌓고 미세 구멍을 뚫어 전극을 연결하는 TSV(실리콘 관통 전극) 기술로 대역폭을 극대화한 메모리" },
      { major: "구성 요소", minor: "인터포저 & 베이스 다이", desc: "• 실리콘 인터포저: 패키지 기판 위에서 GPU와 HBM을 초미세 배선으로 병렬 연결(2.5D 패키징)\n• 베이스 로직 다이: 최하단에서 상부 DRAM 스택을 제어하고 GPU와 신호 교환" },
      { major: "기술 진화", minor: "HBM4 (6세대) 혁신", desc: "• 입출력(I/O) 통로를 기존 1024-bit에서 2048-bit로 2배 확장\n• 베이스 다이에 파운드리 초미세 로직 공정을 적용(맞춤형 설계)하고 범프 없이 구리를 직접 붙이는 하이브리드 본딩으로 방열·신호 효율 극대화" }
    ]
  },
  {
    domain: "CAOS",
    topic: "고대역폭 플래시 (HBF)",
    mnemonic: "낸·적·관·비",
    definition: "대용량·고대역폭 위해 낸드 플래시를 3D 적층한 메모리",
    keywords: [
      "High Bandwidth Flash",
      "3D NAND 플래시 수직 적층",
      "TSV & 실리콘 인터포저",
      "고대역폭 · 대용량 · 비휘발성 결합",
      "CBA (CMOS directly Bonded to Array)"
    ],
    diagram: `[3D NAND 플래시 코어 다이 적층 (TSV 관통 연결)] ➔ [베이스 로직 다이] ⇄ [실리콘 인터포저] ⇄ [GPU / AI 가속기]`,
    tableRows: [
      { major: "핵심 개념", minor: "HBM 구조의 낸드 플래시", desc: "비휘발성 NAND 플래시 메모리를 HBM과 유사한 TSV 3D 스택 및 인터포저 구조로 패키징하여 고대역폭과 대용량을 동시 달성한 차세대 메모리" },
      { major: "주요 구성", minor: "HBF Core Die & CBA", desc: "• TSV, HBF 코어 다이, 로직 다이(PIM 적용 가능), 마이크로범프, 실리콘 인터포저로 구성\n• CMOS 회로와 셀 어레이를 직접 접합하는 CBA(CMOS directly Bonded to Array) 공정 적용" },
      { major: "도입 효과", minor: "LLM 가중치 저장 병목 해소", desc: "HBM의 용량 한계와 고비용 문제를 보완하여 초거대 AI 모델의 방대한 파라미터를 비휘발성 대용량으로 수용하고 고속 읽기를 지원" }
    ]
  },
  {
    domain: "CAOS",
    topic: "PIM (Processing-In-Memory)",
    mnemonic: "HBM-PIM / 내·연·이·최",
    definition: "데이터 이동 병목 제거 위해 메모리 내 연산기 둔 기술",
    keywords: [
      "메모리 내부 연산기(PU) 집적",
      "CPU-메모리 데이터 이동 최소화",
      "HBM-PIM · PNM (Near-Memory)",
      "폰노이만 병목 및 전력 소모 극복"
    ],
    diagram: `[기존 구조] 메모리 ──(좁은 버스 이동 병목)──▶ CPU/GPU 연산
[PIM 구조]  [메모리 뱅크 + 내장 연산 코어(PIM PU)] ➔ 데이터 이동 없이 메모리 내부에서 즉시 벡터·행렬 연산!`,
    tableRows: [
      { major: "핵심 개념", minor: "메모리 내 연산 기술", desc: "메모리 반도체 내부에 프로세싱 유닛(연산기)을 집적하여 CPU/GPU와 메모리 간 데이터 이동으로 인한 지연과 전력 소모를 줄이는 기술" },
      { major: "구현 유형", minor: "PNM · PIC · HBM-PIM", desc: "• PNM(Processing-Near-Memory): 로직 다이나 컨트롤러 인접 영역에 연산기 배치\n• HBM-PIM: HBM의 고대역폭 구조 내부에 AI 연산 블록을 결합해 대역폭 효율을 수배 향상" },
      { major: "기대 효과", minor: "전성비 및 처리량 향상", desc: "전체 에너지의 대부분을 차지하는 '데이터 이동 에너지'를 획기적으로 절감하고 대규모 AI 추론 속도를 가속" }
    ]
  },
  {
    domain: "CAOS",
    topic: "뉴로모픽 칩 (Neuromorphic Chip)",
    mnemonic: "뉴·시·스·비",
    definition: "초저전력 병렬 연산 위해 뇌 뉴런·시냅스 모사한 반도체",
    keywords: [
      "인간 뇌 신경망(뉴런·시냅스) 모사",
      "스파이킹 신경망 (SNN)",
      "비폰노이만 아키텍처",
      "이벤트 기반 비동기 초저전력 연산"
    ],
    diagram: `[입력 스파이크 신호] ➔ [인공 뉴런(연산) + 시냅스(비휘발성 메모리) 일체형 코어 배열] ➔ 임계치 도달 시에만 스파이크 발화 (초저전력)`,
    tableRows: [
      { major: "핵심 개념", minor: "인간 뇌 구조 모사", desc: "연산장치(CPU)와 기억장치(메모리)가 분리된 폰노이만 구조에서 벗어나, 인간 뇌의 뉴런과 시냅스 연결 구조를 모사한 초저전력 반도체" },
      { major: "동작 원리", minor: "스파이킹 신경망 (SNN)", desc: "클럭 주기에 맞춰 모든 노드를 계산하는 대신, 신호가 임계치를 넘어 스파이크(Spike)가 발생할 때만 비동기적으로 동작하여 전력 소모 극소화" },
      { major: "주요 특징", minor: "연산·기억 융합 & 병렬성", desc: "수많은 저전력 코어가 시냅스 가중치를 자체 보유하며 대규모 병렬 처리 및 온디바이스 실시간 자율 학습에 적합" }
    ]
  },
  {
    domain: "CAOS",
    topic: "NPU (Neural Processing Unit)",
    mnemonic: "행·누·활·스",
    definition: "인공신경망 고속 처리 위해 대규모 행렬 연산 특화된 칩",
    keywords: [
      "인공신경망(DNN/CNN/LLM) 전용 가속기",
      "MAC (곱셈·누적) 행렬 연산기",
      "저정밀도 연산 (INT8 · FP8 · FP16)",
      "온디바이스 AI 핵심 코어"
    ],
    diagram: `[입력 텐서 & 가중치 버퍼] ➔ [대규모 MAC(곱셈·누산) 행렬 연산 엔진] ➔ [활성화 함수(ReLU/Sigmoid LUT) · 풀링 유닛] ➔ [출력]`,
    tableRows: [
      { major: "핵심 개념", minor: "신경망 전용 프로세서", desc: "딥러닝 알고리즘의 핵심인 대규모 행렬 곱셈과 합성곱 연산을 고속·저전력으로 처리하도록 설계된 AI 전용 비메모리 반도체" },
      { major: "내부 구조", minor: "MAC 엔진 & 스케줄러", desc: "• 곱셈과 덧셈을 한 사이클에 처리하는 대규모 MAC(Multiply-Accumulate) 연산 배열\n• Sigmoid/ReLU 활성화 함수용 Look-Up Table(LUT), 가중치 온칩 버퍼, DMA 및 버스 스케줄러" },
      { major: "핵심 강점", minor: "양자화·저전력 최적화", desc: "그래픽 렌더링 파이프라인을 덜어내고 AI 추론에 충분한 저정밀도(FP16, INT8, INT4) 연산에 집중해 GPU 대비 월등한 전성비(성능/와트) 달성" }
    ]
  },
  {
    domain: "CAOS",
    topic: "GPU (Graphics Processing Unit)",
    mnemonic: "스·코·워·쿠 (SM·SP·Warp·CUDA)",
    definition: "대규모 병렬 연산 위해 수천 개 ALU로 구성된 연산기",
    keywords: [
      "수천 개 ALU 코어 병렬 처리",
      "SM (스트리밍 멀티프로세서) · SP",
      "Warp (32개 스레드 스케줄링 단위)",
      "GPGPU & CUDA 플랫폼"
    ],
    diagram: `[CPU (소수 코어 직렬 제어)] ──(커널 함수 오프로딩: CUDA)──▶ [GPU: 다수 SM 블록 → 각 SM 내 수백 개 SP(ALU)가 32스레드(Warp) 단위로 대규모 병렬 연산]`,
    tableRows: [
      { major: "핵심 개념", minor: "대규모 병렬 연산 장치", desc: "직렬 처리에 최적화된 CPU와 달리 수천 개의 산술논리연산장치(ALU/SP) 코어로 구성되어 그래픽 및 범용 대규모 데이터 병렬 처리를 수행하는 장치" },
      { major: "내부 구조", minor: "SM · SP · Warp · Global Mem", desc: "• SM(Stream Multiprocessor): 제어 로직과 명령 캐시를 공유하며 멀티 스레드를 동시 실행하는 블록\n• SP(Stream Processor): 실제 산술·논리 연산을 수행하는 코어\n• Warp: SM에서 스레드를 32개씩 묶어 단일 명령어로 스케줄링(SIMT)하는 단위" },
      { major: "범용 확장", minor: "GPGPU & CUDA", desc: "GPU를 그래픽 외 일반 응용 프로그램 및 AI 행렬 연산에 활용하는 기법(GPGPU)으로, 엔비디아 CUDA 및 OpenCL 표준 플랫폼 활용" }
    ]
  },
  {
    domain: "CAOS",
    topic: "TPU (Tensor Processing Unit)",
    mnemonic: "시·행·레·특",
    definition: "딥러닝 행렬 연산 가속 위해 시스톨릭 어레이 쓴 반도체",
    keywords: [
      "구글 AI 전용 맞춤형 ASIC",
      "시스톨릭 어레이 (Systolic Array)",
      "MXU (행렬 곱셈 유닛)",
      "레지스터 재접근 병목 제거"
    ],
    diagram: `[가중치(Weight) 사전 적재] + [입력 데이터 스트림 유입] ➔ [시스톨릭 어레이 격자 연산기(PE)를 따라 인접 셀로 직접 전달·누산] ➔ [고속 행렬 곱 출력]`,
    tableRows: [
      { major: "핵심 개념", minor: "텐서 연산 특화 가속기", desc: "구글이 딥러닝 신경망의 대규모 행렬(텐서) 연산만을 초고속·저전력으로 처리하기 위해 설계한 맞춤형 ASIC 프로세서" },
      { major: "핵심 아키텍처", minor: "시스톨릭 어레이 (Systolic)", desc: "심장이 혈액을 뿜어내듯 데이터가 그물망처럼 연결된 연산기(PE)들을 통과하며, 매 연산마다 레지스터에 읽고 쓰는 과정 없이 인접 연산기로 중간 결과를 바로 전달" },
      { major: "GPU와 차이", minor: "행렬 특화 전성비 극대화", desc: "범용 그래픽·분기 제어 회로를 완전히 제거하고 대규모 행렬 곱셈 유닛(MXU)과 HBM 대역폭에 집중하여 거대 모델 학습·추론 시 전성비 극대화" }
    ]
  },
  {
    domain: "CAOS",
    topic: "ASIC (Application-Specific Integrated Circuit)",
    mnemonic: "고·맞·초·비",
    definition: "특정 연산 효율 극대화 위해 회로를 고정 제작한 반도체",
    keywords: [
      "주문형 반도체 (맞춤형 집적회로)",
      "회로 구조 고정 (변경 불가)",
      "최고 수준 연산 속도 & 전력 효율",
      "CPU → GPU → FPGA → ASIC 진화"
    ],
    diagram: `[유연성 높음 / 전성비 낮음]  CPU ➔ GPU ➔ FPGA (프로그래밍 가능 게이트) ➔ ASIC (회로 영구 고정, 양산 시 전성비 최고)  [특화성·전성비 최고]`,
    tableRows: [
      { major: "핵심 개념", minor: "주문형 맞춤 반도체", desc: "특정 응용 분야나 알고리즘만을 수행하도록 설계 단계부터 논리 게이트 회로를 맞춤형으로 고정 제작한 반도체 집적회로" },
      { major: "장단점", minor: "고효율 vs 비유연성", desc: "• 강점: 불필요한 범용 제어 로직이 없어 연산 속도, 칩 면적, 전력 효율(성능/W)이 모든 반도체 중 가장 뛰어남\n• 한계: 초기 설계·마스크 제작 비용(NRE)과 개발 기간이 길며, 제작 후 알고리즘 변경 시 회로 수정 불가" },
      { major: "FPGA와 비교", minor: "고정 회로 vs 재구성", desc: "알고리즘이 자주 바뀌는 초기 단계에는 회로 재프로그래밍이 가능한 FPGA를 쓰고, 규격이 확정된 대량 양산 단계에서는 ASIC으로 전환" }
    ]
  },
  {
    domain: "CAOS",
    topic: "멀티 GPU 병렬화 기술",
    mnemonic: "데·텐·파 / 엔·알 (DP·TP·PP)",
    definition: "거대모델 학습 위해 데이터·모델을 GPU에 분산 기법",
    keywords: [
      "데이터 병렬화 (DP · All-Reduce)",
      "텐서 병렬화 (TP) · 파이프라인 병렬화 (PP)",
      "3D 병렬화 & ZeRO / FSDP",
      "NVLink · NVSwitch · GPUDirect RDMA"
    ],
    diagram: `• 데이터 병렬화(DP) : [GPU 1: 전체모델 + 데이터A] & [GPU 2: 전체모델 + 데이터B] ➔ 그래디언트 All-Reduce 동기화
• 모델 병렬화(TP/PP) : 거대 단일 모델을 [레이어 내부 행렬 분할(TP)] 또는 [층별 순차 분할(PP)]하여 다수 GPU에 분산 적재`,
    tableRows: [
      { major: "데이터 병렬화", minor: "DP & ZeRO / FSDP", desc: "• DP: 동일한 모델을 각 GPU에 복제하고 학습 데이터를 분할 처리 후 가중치 갱신값 동기화\n• ZeRO/FSDP: 중복 저장되는 옵티마이저 상태·그래디언트·파라미터를 GPU들에 샤딩(분산)하여 메모리 한계 돌파" },
      { major: "모델 병렬화", minor: "텐서(TP) & 파이프라인(PP)", desc: "• 텐서 병렬화(TP): 단일 트랜스포머 레이어의 거대 행렬 연산을 여러 GPU로 쪼개어 동시 연산 (노드 내 초고속 통신 필수)\n• 파이프라인 병렬화(PP): 모델의 층(Layer)을 순서대로 GPU에 나누어 배치하고 마이크로 배치로 버블(유휴시간) 최소화" },
      { major: "고속 인터커넥트", minor: "NVLink & RDMA", desc: "PCIe 대역폭 한계를 넘기 위해 노드 내 GPU 간에는 NVLink/NVSwitch로 직접 연결하고, 서버 노드 간에는 CPU를 우회하는 GPUDirect RDMA(InfiniBand/RoCE) 사용" }
    ]
  },
  {
    domain: "CAOS",
    topic: "오토 스케일링 (Auto Scaling)",
    mnemonic: "수·수·쿨·예 (HPA·VPA)",
    definition: "자원 효율성 위해 부하에 따라 서버 수를 증감하는 기술",
    keywords: [
      "부하 기반 탄력적 자원 증감",
      "수평 확장 (Scale-Out / HPA)",
      "수직 확장 (Scale-Up / VPA)",
      "쿨다운 (Cooldown) & 플래핑 방지"
    ],
    diagram: `[메트릭 수집 (CPU/GPU 사용률 · 요청 큐)] ➔ [임계치 초과 판단] ➔ [Scale-Out (인스턴스/파드 수 증설) 또는 Scale-Up (자원 스펙 상향)]`,
    tableRows: [
      { major: "핵심 개념", minor: "탄력적 자원 관리", desc: "실시간 워크로드 부하(CPU, 메모리, 네트워크, 커스텀 큐 지표)를 모니터링하여 컴퓨팅 자원을 자동으로 확장(Out/Up)하거나 축소(In/Down)하는 기술" },
      { major: "확장 방식", minor: "수평(HPA) vs 수직(VPA)", desc: "• 수평 확장(Scale-Out / HPA): 실행 중인 서버 인스턴스나 컨테이너 파드(Pod)의 개수를 늘림 (무중단 확장에 유리)\n• 수직 확장(Scale-Up / VPA): 단일 인스턴스에 할당된 CPU 코어 수나 메모리 용량 스펙 자체를 증설" },
      { major: "안정화 제어", minor: "Cooldown & 예측 스케일링", desc: "확장 직후 지표가 안정화될 때까지 추가 변동을 멈추는 쿨다운(Cooldown) 타이머로 잦은 증감 반복(Flapping/Thrashing)을 방지하며, 머신러닝 기반 사전 예측 확장 병행" }
    ]
  },
  {
    domain: "CAOS",
    topic: "페이즈드 어텐션 (PagedAttention)",
    mnemonic: "블·비·공·처",
    definition: "추론 단편화 해결 위해 KV캐시를 블록 분할하는 기법",
    keywords: [
      "LLM 추론 KV 캐시 단편화 해결",
      "OS 가상 메모리 페이징 차용",
      "비연속 블록 할당 (Block Table)",
      "Copy-on-Write 프롬프트 공유",
      "vLLM 추론 엔진 핵심 기술"
    ],
    diagram: `[논리적 KV 블록 (연속된 토큰 시퀀스)] ──(블록 테이블 매핑)──▶ [물리적 GPU 메모리 블록 (비연속 분산 저장)]
➔ 메모리 단편화 제로화 및 배치(Batch) 추론 처리량 2~4배 향상`,
    tableRows: [
      { major: "도입 배경", minor: "KV 캐시 메모리 낭비", desc: "LLM 자기회귀 추론 시 출력 길이를 미리 알 수 없어 KV 캐시를 최대 길이로 연속 할당하면 심각한 내부·외부 단편화(60~80% 낭비) 발생" },
      { major: "핵심 원리", minor: "비연속 페이지 블록화", desc: "OS의 가상 메모리 페이징 기법을 차용하여 KV 캐시를 고정 크기 블록(Page)으로 쪼개고 물리 GPU 메모리에 비연속적으로 배치·관리" },
      { major: "메모리 공유", minor: "Copy-on-Write (CoW)", desc: "동일한 시스템 프롬프트나 병렬 샘플링(Beam Search) 시 KV 블록을 여러 요청이 물리적으로 공유하고 수정 발생 시에만 복제" },
      { major: "기대 효과", minor: "처리량(Throughput) 극대화", desc: "메모리 낭비를 4% 미만으로 줄여 확보된 GPU 여유 공간에 더 많은 동시 요청(Batch Size 확대)을 묶어 처리함으로써 추론 처리량 대폭 향상" }
    ]
  },
  {
    domain: "CAOS",
    topic: "운영체제 CPU 스케줄링",
    mnemonic: "선점(R·S·멀·레) / 비선점(우·기·피·소·히)",
    definition: "자원 효율화 위해 프로세스별 CPU 우선순위 지정 기법",
    keywords: [
      "CPU 이용률 · 처리량 극대화",
      "응답시간 · 대기시간 · 반환시간 최소화",
      "선점형 (RR · SRT · MLQ · MLFQ)",
      "비선점형 (FCFS · SJF · HRN)",
      "두음: 선점(RS멀레) / 비선점(우기피소히)"
    ],
    diagram: `[준비 큐(Ready Queue) 대기 프로세스들] ──(CPU 스케줄러/디스패처)──▶ [CPU 할당 및 문맥교환]
• 비선점형 (스스로 반납할 때까지 유지: FCFS, SJF, HRN) vs 선점형 (타임슬라이스/우선순위로 강제 회수: RR, SRT, MLQ, MLFQ)`,
    tableRows: [
      { major: "스케줄링 목적", minor: "성능 지표 최적화", desc: "• 시스템 관점: CPU 이용률(Utilization) 및 단위 시간당 처리량(Throughput) 극대화\n• 사용자 관점: 반환시간(Turnaround), 대기시간(Waiting), 응답시간(Response) 최소화 및 공정성 보장" },
      { major: "비선점형 기법", minor: "FCFS · SJF · Priority", desc: "• 강점: 문맥교환 오버헤드가 적고 응답시간 예측이 용이 (일괄 처리에 적합)\n• 알고리즘: 도착순(FCFS), 최단 작업 우선(SJF, 평균 대기시간 최소), 비선점 우선순위, HRN" },
      { major: "선점형 기법", minor: "RR · SRT · MLQ · MLFQ", desc: "• 강점: 고우선순위 긴급 작업 및 대화형 시분할 시스템에서 빠른 응답시간 보장\n• 알고리즘: 라운드 로빈(RR, 동일 시간할당량 순환), 최소 잔여시간 우선(SRT), 다단계 큐(MLQ), 다단계 피드백 큐(MLFQ)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "RM (Rate Monotonic) 스케줄링",
    mnemonic: "주·단·정·선",
    definition: "실시간 마감 보장 위해 주기가 짧을수록 우선 배정 기법",
    keywords: [
      "실시간 운영체제 (RTOS) 선점형 스케줄링",
      "정적(고정) 우선순위 할당",
      "실행 주기(Period)의 역수 비례",
      "EDF (동적 마감시간 우선)와 비교"
    ],
    diagram: `• RM (Rate Monotonic) : 실행 주기(Period) T1 < T2 ➔ 주기가 더 짧은 T1에 고정 최우선순위 부여!
• 비교 (EDF)          : 실행 시점마다 남은 마감시간(Deadline)이 가장 임박한 태스크에 동적 최우선순위 부여`,
    tableRows: [
      { major: "핵심 개념", minor: "주기 기반 정적 스케줄링", desc: "실시간 운영체제(RTOS)에서 독립적인 주기적 태스크들의 실행 주기(Period)를 기준으로, 주기가 짧을수록 더 높은 고정 우선순위를 부여하는 선점형 기법" },
      { major: "특징 및 한계", minor: "구현 단순성 vs 이용률 상한", desc: "우선순위가 고정되어 오버헤드가 적으나, 태스크 수가 무한정 늘어날 때 스케줄링 가능한 CPU 이용률 상한이 약 69.3%(ln 2)로 제한됨" },
      { major: "비교 기법", minor: "EDF (Earliest Deadline First)", desc: "마감시간(Deadline)이 가장 임박한 태스크에 동적으로 최우선순위를 부여하는 기법으로, RM과 달리 CPU 이용률을 이론상 100%까지 활용 가능" }
    ]
  },
  {
    domain: "CAOS",
    topic: "다단계 큐 (MLQ, Multi-Level Queue)",
    mnemonic: "성·분·독·불",
    definition: "작업 성격별 처리 위해 준비 큐를 영구 분리하는 기법",
    keywords: [
      "선점형 다중 준비 큐 스케줄링",
      "성격별(전경/배경) 큐 영구 분리",
      "큐 간 프로세스 이동 불가",
      "하위 큐 기아현상(Starvation) 발생"
    ],
    diagram: `[최상위: 시스템 프로세스 큐] ➔ [중위: 전경 대화형 큐 (RR 스케줄링)] ➔ [하위: 배경 일괄처리 큐 (FCFS)]
➔ 큐 간 프로세스 이동이 불가능하고 상위 큐가 비어야 하위 큐가 실행되어 하위 큐 기아현상 발생!`,
    tableRows: [
      { major: "핵심 개념", minor: "고정 다중 큐 분할", desc: "프로세스를 특성에 따라 여러 그룹(시스템, 대화형, 편집, 일괄처리)으로 분류하고, 그룹마다 별도의 독자적인 준비 큐를 할당하는 스케줄링 기법" },
      { major: "동작 방식", minor: "큐별 독립 스케줄링", desc: "각 큐는 자신만의 스케줄링 알고리즘(예: 전경 큐는 RR, 배경 큐는 FCFS)을 가지며, 큐와 큐 사이에는 고정 우선순위 선점형 스케줄링이나 차등 시간 할당 적용" },
      { major: "주요 한계", minor: "유연성 부족 & 기아 발생", desc: "한 번 배정된 큐에서 다른 큐로 프로세스가 이동할 수 없으며, 상위 큐에 작업이 계속 들어오면 하위 큐 작업은 기아 상태에 빠짐 (MLFQ로 해결)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "다단계 피드백 큐 (MLFQ, Multi-Level Feedback Queue)",
    mnemonic: "타·강·승·에",
    definition: "기아 해소 위해 시간할당량 차등 큐 간 이동 허용 기법",
    keywords: [
      "큐 간 프로세스 동적 이동 허용",
      "하위 단계일수록 큰 타임 슬라이스 부여",
      "CPU 버스트 긴 작업 강등",
      "에이징 (Aging) 승격으로 기아 해소"
    ],
    diagram: `[신규 진입 → 최상위 큐 Q0 (타임 슬라이스 8ms)] ──(시간 내 미완료 시 강등)──▶ [중위 큐 Q1 (16ms)] ──▶ [하위 큐 Q2 (FCFS)]
   ▲───────────────────────────────────────(장기 대기 시 상위 큐로 승격: Aging 기법)───────────────────────────────────────┘`,
    tableRows: [
      { major: "핵심 개념", minor: "동적 큐 이동 스케줄링", desc: "다단계 큐(MLQ)의 경직성과 기아 현상을 해결하기 위해, 프로세스의 CPU 사용 성향에 따라 큐 간 이동을 허용한 현대 OS 범용 스케줄링 기법" },
      { major: "강등 메커니즘", minor: "짧은 작업/I/O 우대", desc: "처음 진입한 작업은 최상위 큐(가장 짧은 시간 할당량)에 배치하여 짧은 작업이나 대화형 I/O 작업은 즉시 끝내고, 시간 내에 못 끝낸 긴 연산 작업은 하위 큐(더 긴 시간 할당량)로 점진 강등" },
      { major: "승격 메커니즘", minor: "에이징 (Aging) 기아 방지", desc: "하위 우선순위 큐에서 너무 오랫동안 CPU를 할당받지 못하고 대기한 프로세스는 다시 상위 우선순위 큐로 승격(Boost)시켜 기아 현상 원천 방지" }
    ]
  },
  {
    domain: "CAOS",
    topic: "단일 큐 멀티프로세서 스케줄링 (SQMS)",
    mnemonic: "단·공·락·캐",
    definition: "부하 분산 위해 모든 CPU가 단일 큐 공유 기법",
    keywords: [
      "Single-Queue Multiprocessor Scheduling",
      "단일 전역 준비 큐 공유",
      "락(Lock) 동기화 경합 병목",
      "캐시 친화성 (Cache Affinity) 저하"
    ],
    diagram: `[단일 공용 준비 큐 (Global Ready Queue)] ──(Lock 경합 발생)──▶ [CPU 1] / [CPU 2] / [CPU 3] / [CPU 4]
➔ 프로세스가 실행될 때마다 매번 다른 CPU에 배정되어 로컬 캐시(L1/L2) 및 TLB 무효화 빈발!`,
    tableRows: [
      { major: "핵심 구조", minor: "단일 전역 큐 공유", desc: "멀티코어 환경에서 모든 CPU가 단 하나의 전역 준비 큐(Ready Queue)를 공유하여 다음 실행할 작업을 꺼내가는 스케줄링 방식" },
      { major: "핵심 강점", minor: "설계 단순성 & 자동 부하분산", desc: "기존 단일 CPU 스케줄러 구조를 그대로 재사용할 수 있으며, 노는 CPU가 즉시 큐에서 작업을 가져가므로 부하 불균형이 발생하지 않음" },
      { major: "치명적 한계", minor: "락 경합 & 캐시 친화성 상실", desc: "• 확장성 병목: 코어 수가 많아질수록 공용 큐 접근 시 락(Lock) 경합으로 심각한 성능 저하 발생\n• 캐시 미스: 프로세스가 문맥교환마다 다른 코어로 옮겨 다녀 이전 코어 캐시에 쌓인 데이터를 쓰지 못함(Cache Affinity 저하)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "다중 큐 멀티프로세서 스케줄링 (MQMS)",
    mnemonic: "독·무·친·훔",
    definition: "락 경합 해소와 캐시 친화성 위해 코어별 독립 큐 방식",
    keywords: [
      "Multi-Queue Multiprocessor Scheduling",
      "코어별 독립 준비 큐 보유",
      "락 경합 해소 & 캐시 친화성 극대화",
      "부하 불균형 & 작업 훔치기 (Work Stealing)"
    ],
    diagram: `[큐 1] ──▶ [CPU 1 (동일 프로세스 반복 실행: 캐시 친화성 극대화)]
[큐 2] ──▶ [CPU 2 (유휴 발생 시 큐 1의 대기 작업을 훔쳐옴: Work Stealing)]`,
    tableRows: [
      { major: "핵심 구조", minor: "코어별 독립 큐 배치", desc: "각 CPU 코어마다 독립된 로컬 준비 큐를 배치하여 코어 수 증가에 따른 확장성을 확보한 현대 운영체제 표준 멀티프로세서 스케줄링" },
      { major: "핵심 강점", minor: "무경합 & 캐시 친화성", desc: "• 확장성 우수: 자기 큐만 접근하므로 CPU 간 큐 잠금(Lock) 경합이 전혀 없음\n• 캐시 친화성(Affinity): 같은 프로세스가 동일 CPU에서 계속 재실행되어 L1/L2 캐시 및 TLB 적중률 극대화" },
      { major: "한계와 해결", minor: "부하 불균형 & Work Stealing", desc: "특정 CPU 큐에만 작업이 몰리거나 비어버리는 부하 불균형(Load Imbalance)이 발생할 수 있으며, 한가한 큐가 바쁜 큐의 작업을 가져오는 작업 훔치기(Work Stealing)로 해결" }
    ]
  },
  {
    domain: "CAOS",
    topic: "HRN (Highest Response-ratio Next) 알고리즘",
    mnemonic: "대·서·서 (대기+서비스/서비스)",
    definition: "SJF 기아 보완 위해 대기시간 반영 응답률 배정 기법",
    keywords: [
      "비선점형 스케줄링",
      "SJF의 장시간 작업 기아 보완",
      "우선순위 = (대기시간 + 실행시간) / 실행시간",
      "대기시간 가중치 반영"
    ],
    diagram: `• HRN 응답률 공식 : 우선순위(Response Ratio) = (대기시간 + 예상 실행시간) ÷ 예상 실행시간
➔ 실행시간이 짧을수록 유리(SJF 장점 유지) + 대기시간이 길어질수록 분자가 커져 우선순위 자동 상승!`,
    tableRows: [
      { major: "등장 배경", minor: "SJF의 불평등 해결", desc: "최단 작업 우선(SJF) 스케줄링에서 실행 시간이 긴 작업이 짧은 작업들에 밀려 영구히 CPU를 할당받지 못하는 현상을 해결하기 위해 고안" },
      { major: "핵심 원리", minor: "최고 응답률 우선", desc: "단순히 실행 시간만 비교하지 않고 프로세스가 준비 큐에서 기다린 '대기 시간'을 분자에 더해 응답률(Response Ratio)이 가장 높은 프로세스에 CPU 배정" },
      { major: "장단점", minor: "공정성 vs 계산 오버헤드", desc: "긴 작업도 오래 기다리면 우선순위가 높아져 기아 현상을 막아주지만, 비선점형이며 매 스케줄링 시마다 모든 프로세스의 응답률을 계산해야 하는 오버헤드 존재" }
    ]
  },
  {
    domain: "CAOS",
    topic: "기아현상 (Starvation)",
    mnemonic: "우·대·에 (MLQ·우선순위·SJF)",
    definition: "낮은 우선순위로 인해 프로세스가 CPU 못 받는 현상",
    keywords: [
      "특정 프로세스 무한 대기",
      "우선순위/SJF/MLQ 스케줄링 부작용",
      "교착상태(Deadlock)와의 차이",
      "에이징 (Aging: 대기시간 비례 우선순위 상향)"
    ],
    diagram: `[고우선순위 작업 지속 유입] ➔ [저우선순위 프로세스 무한 대기 (Starvation)] ──(해결: Aging 기법)──▶ 대기 시간마다 우선순위 +1씩 단계적 격상!`,
    tableRows: [
      { major: "핵심 개념", minor: "기아현상 (Starvation)", desc: "프로세스가 실행에 필요한 자원(CPU 등)을 할당받기 위해 준비 상태에서 대기 중이나, 우선순위가 낮아 무기한 연기되는 현상" },
      { major: "비교 구분", minor: "기아현상 vs 교착상태", desc: "• 기아현상: 시스템은 정상 작동 중이나 스케줄링 정책(SJF, SRT, 고정 우선순위, MLQ) 편향으로 특정 프로세스만 소외되는 상태 (Ready 상태 대기)\n• 교착상태: 둘 이상의 프로세스가 서로 점유한 자원을 요구하며 다 같이 멈춰버린 상태 (Wait/Blocked 상태 대기)" },
      { major: "핵심 해결책", minor: "에이징 (Aging) 기법", desc: "오랫동안 자원을 할당받지 못하고 대기한 프로세스의 우선순위를 대기 시간에 비례해 점진적으로 높여주어 유한 시간 내 실행을 보장 (HRN, MLFQ 등에 적용)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "경쟁조건 (Race Condition)",
    mnemonic: "공·쓰·동 / 데·피·램·세·모 / 타·카·인",
    definition: "공유자원 동시 접근 시 순서에 따라 무결성 깨지는 현상",
    keywords: [
      "3대 발생조건 (공유자원 · Write · 동기화 부재)",
      "SW 해결기법 (데피램세모)",
      "HW 해결기법 (타카인: TAS · CAS · 인터럽트)"
    ],
    diagram: "race_condition.png",
    tableRows: [
      { major: "발생 3대 필수조건", minor: "1. 공유자원", desc: "여러 스레드가 동일한 메모리 공간 참조" },
      { major: "", minor: "2. Write Operations", desc: "읽기만 하면 문제 안 생기나, 쓰기 발생 시 문제발생" },
      { major: "", minor: "3. 동기화 부재", desc: "접근순서 제어 규칙이 없다." },
      { major: "SW 해결방안\n(데피램세모)", minor: "데커 (Dekker)", desc: "우선순위 관리" },
      { major: "", minor: "피터슨 (Peterson)", desc: "임계영역 순서 양보" },
      { major: "", minor: "램포트 (Lamport)", desc: "권한부여 관리" },
      { major: "", minor: "세마포어 (Semaphore)", desc: "P, V 함수, S 공유" },
      { major: "", minor: "모니터 (Monitor)", desc: "프로그래밍 가능" },
      { major: "HW 해결방안\n(타카인)", minor: "Test&Set (TAS)", desc: "명령어 상태 점검 후 변경 수행" },
      { major: "", minor: "Compare&Swap (CAS)", desc: "Lock-Free(락 프리) 알고리즘" },
      { major: "", minor: "인터럽트 비활성화", desc: "인터럽트 Disable, 원자성 확보" }
    ]
  },
  {
    domain: "CAOS",
    topic: "운영체제의 동기화",
    mnemonic: "상·진·한 / 데·피·램 / 테·컴·인",
    definition: "공유 데이터 일관성 위해 프로세스 실행 순서 제어 기법",
    keywords: [
      "임계영역 (Critical Section)",
      "3대 해결 조건: 상호배제 · 진행 · 한정대기",
      "HW 동기화 (Test&Set · Compare&Swap)",
      "SW 동기화 (피터슨 · 램포트 빵집)",
      "두음: 상진한 / 데피램 / 테컴인"
    ],
    diagram: `[진입 구역 (Entry: 락 획득 검사)] ➔ [임계 구역 (Critical Section: 공유자원 단독 조작)] ➔ [퇴출 구역 (Exit: 락 해제)]
• 필수 3원칙 : ① 상호배제 (1개만 진입) + ② 진행 (유한 시간 내 진입자 결정) + ③ 한정 대기 (기아 방지 상한선)`,
    tableRows: [
      { major: "개념 및 필요성", minor: "데이터 일관성 보장", desc: "병행 수행되는 프로세스/스레드들 간에 실행 순서를 맞추고 공유 데이터의 일관성(Consistency)과 원자성을 보장하기 위한 운영체제 제어 메커니즘" },
      { major: "임계영역 3조건", minor: "상호배제 · 진행 · 한정대기", desc: "① 상호배제(Mutual Exclusion): 한 프로세스가 임계영역에 있으면 타 프로세스 진입 불가\n② 진행(Progress): 임계영역이 비어 있을 때 진입할 프로세스를 유한 시간 내 결정\n③ 한정 대기(Bounded Waiting): 특정 프로세스가 무한정 기다리지 않도록 대기 횟수 제한" },
      { major: "주요 구현 기법", minor: "HW / SW / OS 동기화", desc: "• 하드웨어 기법: 원자적 명령어(Test-and-Set, Compare-and-Swap), 인터럽트 비활성화\n• 소프트웨어 알고리즘: 데커(Dekker), 피터슨(Peterson), 램포트 빵집(Bakery) 알고리즘\n• OS/언어 동기화 도구: 뮤텍스, 세마포어, 스핀락, 모니터" }
    ]
  },
  {
    domain: "CAOS",
    topic: "뮤텍스 (Mutex)",
    mnemonic: "소·단·슬",
    definition: "임계영역 보호 위해 락 소유자만 해제하는 상호배제 기법",
    keywords: [
      "상호배제 (Mutual Exclusion) 단일 잠금",
      "Lock 소유권 (Ownership) 존재",
      "0 또는 1 상태",
      "스핀락 (Spinlock)과의 비교"
    ],
    diagram: `[스레드 A] ──(lock 획득: 소유자 지정)──▶ [임계영역 단독 실행] ──(스레드 A만 unlock 해제 가능)──▶ [대기 큐의 스레드 B 깨움]`,
    tableRows: [
      { major: "핵심 개념", minor: "소유권 기반 단일 락", desc: "공유 자원에 동시에 단 하나의 스레드만 접근할 수 있도록 잠금(Lock)을 제공하는 동기화 객체로, 락을 획득한 소유자(Owner)만 해제 가능" },
      { major: "동작 특성", minor: "블로킹 대기 (Sleep)", desc: "임계영역이 이미 잠겨 있으면 요청 스레드는 CPU를 양보하고 대기 큐(Sleep)로 들어가며, 락 해제 시 깨어남" },
      { major: "비교 구분", minor: "뮤텍스 vs 스핀락", desc: "• 뮤텍스: 대기 시 Sleep 상태로 전환되어 긴 임계영역에서 CPU 낭비를 막음 (문맥교환 발생)\n• 스핀락(Spinlock): 대기 시 잠들지 않고 루프를 돌며(Busy Waiting) 락을 확인해 짧은 임계영역에서 문맥교환 오버헤드 제거" }
    ]
  },
  {
    domain: "CAOS",
    topic: "세마포어 (Semaphore)",
    mnemonic: "공·점·해 (S·P·V)",
    definition: "임계영역 통제 위해 공유변수와 P·V 연산을 쓰는 기법",
    keywords: [
      "공유 자원 카운팅 변수 (S)",
      "P 연산 (Proberen: wait · 자원 획득)",
      "V 연산 (Verhogen: signal · 자원 반납)",
      "이진 세마포어 vs 계수 세마포어",
      "소유권 없음 (외부 신호 해제 가능)"
    ],
    diagram: `• P(S) 진입 연산 : S ← S - 1 (만약 S < 0 이면 대기 큐에 Block)
• V(S) 퇴출 연산 : S ← S + 1 (만약 S ≤ 0 이면 대기 큐의 프로세스 1개를 Wakeup 깨움)`,
    tableRows: [
      { major: "핵심 개념", minor: "정수형 동기화 변수", desc: "다익스트라가 제안한 기법으로, 가용한 공유 자원의 개수(S)를 나타내는 정수 변수와 두 개의 원자적 연산(P, V)으로 상호배제 및 실행 순서 동기화 수행" },
      { major: "유형 구분", minor: "이진(Binary) vs 계수(Counting)", desc: "• 이진 세마포어: S가 0 또는 1만 가지며 뮤텍스처럼 상호배제에 사용\n• 계수 세마포어: S가 0 이상의 정수(N)를 가지며 N개의 동일한 자원 풀(Pool)을 여러 프로세스에 분배할 때 사용" },
      { major: "뮤텍스와 차이", minor: "소유권 유무 및 한계", desc: "뮤텍스와 달리 락 소유권 개념이 없어 락을 걸지 않은 다른 프로세스가 V 연산으로 신호를 보내 깨울 수 있으며, P·V 호출 순서 실수 시 교착상태 유발 위험 존재" }
    ]
  },
  {
    domain: "CAOS",
    topic: "모니터 (Monitor)",
    mnemonic: "캡·자·조 (wait·signal)",
    definition: "세마포어 오류 보완 위해 자원과 함수를 캡슐화한 기법",
    keywords: [
      "고수준 프로그래밍 언어 동기화 구조",
      "공유 자원 + 접근 프로시저 캡슐화",
      "조건 변수 (wait · signal/notify)",
      "세마포어 타이밍 오류 해결"
    ],
    diagram: `[모니터 캡슐 내부: 공유 데이터 + 동기화 함수(synchronized)]
  ▲
[진입 큐 (한 번에 1개 스레드만 허용)] & [조건 변수 대기 큐: wait()로 양보 / signal()로 재진입 통지]`,
    tableRows: [
      { major: "등장 배경", minor: "세마포어 구현 실수 방지", desc: "개발자가 직접 P·V 연산 코드를 작성할 때 발생하는 누락·순서 역전(교착상태 및 타이밍 오류)을 막기 위해 컴파일러/언어 차원에서 상호배제를 자동화한 구조" },
      { major: "핵심 구조", minor: "캡슐화 & 자동 상호배제", desc: "공유 변수와 이를 조작하는 프로시저들을 하나의 모니터 객체로 묶어, 외부에서 공유 변수에 직접 접근하지 못하고 오직 모니터 내 함수를 통해서만 한 번에 한 프로세스씩 실행하도록 보장" },
      { major: "실행 제어", minor: "조건 변수 (wait / signal)", desc: "모니터 내부에서 특정 조건이 충족될 때까지 일시 양보(wait)하고, 다른 스레드가 조건을 달성한 뒤 깨워주는(signal / Java notify) 조건 변수 큐 제공" }
    ]
  },
  {
    domain: "CAOS",
    topic: "교착상태 (Deadlock)",
    mnemonic: "상·점·비·환 / 예·회·발·복",
    definition: "자원 점유 프로세스가 서로 상대 자원 요청해 멈춘 상태",
    keywords: [
      "4대 조건: 상호배제 · 점유와 대기 · 비선점 · 환형구조 (상점비환)",
      "4대 처리방안: 예방 · 회피 · 발견 · 복구 (예회발복)",
      "Wait-Die / Wound-Wait"
    ],
    diagram: `<img src="deadlock_concept.png" alt="교착상태 개념도"><img src="deadlock_conditions.png" alt="교착상태 4대 조건별 개념도">`,
    tableRows: [
      { major: "발생 4대 조건\n(상·점·비·환)", minor: "상호배제", desc: "• 개념도: P1 ⇄ R(동시성제어) ⇄ P2\n• 프로세스 간 배타적 점유권 관리 미흡" },
      { major: "", minor: "점유와 대기", desc: "• 개념도: P1 ─(점유)→ R ─(대기)→ P2 ─(요청)→ R ─(할당)→ P1\n• 자원 점유와 자원 요청 대기 조건" },
      { major: "", minor: "비선점", desc: "• 개념도: P1 ─(점유)→ R ─(대기)→ P2(낮은우선순위) ─(요청)→ R ─(할당)→ P1\n• CPU 비선점형 조건 / 우선순위 조절" },
      { major: "", minor: "환형구조", desc: "• 개념도: P1 → R → P2 → R → P1\n• 프로세스, 자원 간 환형구조" },
      { major: "예방", minor: "LockTime", desc: "Lock Timeout 조절" },
      { major: "", minor: "실행순서", desc: "실행순서 지정" },
      { major: "", minor: "우선순위", desc: "프로세스 우선순위" },
      { major: "회피", minor: "은행가", desc: "은행가 알고리즘" },
      { major: "", minor: "Wait-Die", desc: "고참 프로세스가 후임 Kill" },
      { major: "", minor: "Wound-Wait", desc: "후임 자원 선점" },
      { major: "발견", minor: "데드락 log", desc: "log 기록 저장" },
      { major: "", minor: "Alarm", desc: "Deadlock 알람" },
      { major: "", minor: "성능모니터링", desc: "모니터링 항목" },
      { major: "복구", minor: "강제 Kill", desc: "둘 중 하나 Kill" },
      { major: "", minor: "자원해제", desc: "해제 처리" },
      { major: "", minor: "프로세스 Kill", desc: "프로세스 Kill" }
    ]
  },
  {
    domain: "CAOS",
    topic: "은행가 알고리즘 (Banker's Algorithm)",
    mnemonic: "에·이·맨 (A·M·A·N)",
    definition: "교착상태 회피 위해 안전 상태 유지할 요청만 수락 기법",
    keywords: [
      "교착상태 회피 (Deadlock Avoidance)",
      "다익스트라 고안",
      "안전 상태 (Safe State) & 안전 수열",
      "Max · Allocation · Need · Available",
      "두음: AMAN (에이맨)"
    ],
    diagram: `• 핵심 수식 : 잔여 요구량 Need[i] = 최대 요구량 Max[i] - 현재 할당량 Allocation[i]
• 검증 절차 : Need[i] ≤ 가용 자원(Available) 인 프로세스부터 순차 실행 → 자원 반납(+Allocation) → 전원 종료 가능한 [안전 수열] 도출!`,
    tableRows: [
      { major: "핵심 개념", minor: "안전 상태 검증 회피법", desc: "은행이 모든 고객의 인출 요구를 감당할 수 있을 때만 대출해 주듯, OS가 자원 할당 후에도 모든 프로세스가 정상 종료될 수 있는 '안전 수열(Safe Sequence)'이 존재할 때만 자원을 할당하는 기법" },
      { major: "4대 자료구조", minor: "Available · Max · Alloc · Need", desc: "• Available: 현재 시스템에 남아있는 가용 자원 수\n• Max: 각 프로세스가 선언한 최대 자원 요구량\n• Allocation: 각 프로세스에 현재 할당된 자원 수\n• Need: 앞으로 추가 필요한 자원 수 (Need = Max - Allocation)" },
      { major: "한계점", minor: "사전 파악 및 오버헤드", desc: "프로세스가 실행 전에 자신의 최대 자원 요구량(Max)을 미리 정확히 알아야 하고, 전체 자원 수가 고정되어야 하며 매 요청마다 안전성 검증 연산 오버헤드가 발생" }
    ]
  },
  {
    domain: "CAOS",
    topic: "우선순위 역전 (Priority Inversion)",
    mnemonic: "임·상·선",
    definition: "동기화 문제로 고순위 작업이 저순위보다 늦게 되는 현상",
    keywords: [
      "선점형 RTOS 동기화 결함",
      "고순위(TH) · 중순위(TM) · 저순위(TL)",
      "중간 우선순위 태스크의 선점",
      "무한 역전 (Unbounded Inversion)",
      "두음: 임상선"
    ],
    diagram: `[1단계] 저순위(TL)가 공유자원 락 획득 실행 ➔ [2단계] 고순위(TH)가 동일 락 요청 후 대기(Block)
[3단계] 락과 무관한 중순위(TM)가 TL을 CPU 선점! ➔ 결국 고순위(TH)가 중순위(TM)보다 늦게 실행되는 역전 발생`,
    tableRows: [
      { major: "핵심 개념", minor: "우선순위 역전 정의", desc: "선점형 우선순위 스케줄링 환경에서 높은 우선순위 태스크(TH)가 낮은 우선순위 태스크(TL)가 점유한 공유 자원을 기다리는 동안, 중간 우선순위 태스크(TM)들에게 밀려 늦게 처리되는 현상" },
      { major: "발생 3대 원인", minor: "임계영역 · 상호배제 · 선점형", desc: "① 공유 자원 임계영역 존재 ② 뮤텍스/세마포어 상호배제 락 대기 ③ 중간 우선순위 태스크(TM)가 저순위 태스크(TL)의 CPU를 빼앗는 선점형 스케줄링" },
      { major: "대표 장애사례", minor: "마르스 패스파인더 리셋", desc: "1997년 화성 탐사선 패스파인더에서 정보 버스 뮤텍스를 둘러싼 우선순위 역전으로 워치독 타이머가 타임아웃되어 시스템이 반복 리셋된 사례" }
    ]
  },
  {
    domain: "CAOS",
    topic: "태스크 우선순위 상속 (Priority Inheritance)",
    mnemonic: "상·올 (상속·올림)",
    definition: "우선순위 역전 해결 위해 락 보유 저순위를 높이는 기법",
    keywords: [
      "우선순위 역전 (Priority Inversion) 해결",
      "우선순위 상속 프로토콜 (PIP)",
      "우선순위 천장/올림 프로토콜 (PCP / Ceiling)",
      "연쇄 블로킹(Chained Blocking) 방지",
      "두음: 상·올"
    ],
    diagram: `• 우선순위 상속(PIP) : 고순위(TH)가 락 대기 시 ➔ 락 보유 저순위(TL)의 우선순위를 TH로 일시 격상 (중순위 TM 선점 차단)
• 우선순위 올림(PCP) : 자원을 획득하는 순간 ➔ 해당 자원의 사전 지정 최고 우선순위(천장값)로 즉시 격상!`,
    tableRows: [
      { major: "사후 동적 격상", minor: "우선순위 상속 (Inheritance)", desc: "고순위 태스크(TH)가 락을 요청해 블록되는 시점에, 현재 락을 쥔 저순위 태스크(TL)에게 TH의 우선순위를 물려주어 중순위(TM)에 선점당하지 않고 빨리 임계영역을 빠져나오게 하는 기법" },
      { major: "사전 즉시 격상", minor: "우선순위 올림 (Ceiling)", desc: "모든 공유 자원마다 그 자원을 사용할 수 있는 태스크들 중 가장 높은 우선순위(Ceiling)를 미리 부여해 두고, 자원을 획득하는 즉시 해당 최고 우선순위로 승격시키는 기법" },
      { major: "비교 구분", minor: "상속(PIP) vs 올림(PCP)", desc: "• 우선순위 상속: 구현이 단순해 일반 RTOS에서 널리 쓰이나 다중 락 사용 시 연쇄 블로킹 및 교착상태 가능성 잔존\n• 우선순위 올림: 모든 태스크의 자원 요구를 사전 파악해야 하나 연쇄 블로킹과 교착상태까지 원천 차단" }
    ]
  },
  {
    domain: "CAOS",
    topic: "메모리 주요 영역",
    mnemonic: "코·데·힙·스",
    definition: "프로세스 실행 위해 코드·데이터·힙·스택으로 나눈 구조",
    keywords: [
      "코드(Text) · 데이터(Data/BSS) · 힙(Heap) · 스택(Stack)",
      "정적 할당 vs 동적 할당 영역",
      "힙 (낮은→높은 주소) vs 스택 (높은→낮은 주소)",
      "두음: 코데힙스"
    ],
    diagram: `[낮은 주소]  코드(Text: 기계어) ➔ 데이터(전역·정적 변수) ➔ 힙(Heap: 동적할당 ↓)  ... 빈 공간 ...  (↑ 호출 프레임) 스택(Stack)  [높은 주소]`,
    tableRows: [
      { major: "정적 할당 영역", minor: "코드 (Code / Text)", desc: "실행할 프로그램의 기계어 명령어 코드가 저장되는 영역 (컴파일 시 크기 결정, 읽기 전용으로 보호)" },
      { major: "정적 할당 영역", minor: "데이터 (Data & BSS)", desc: "전역 변수와 정적(static) 변수가 저장되는 영역으로 프로그램 시작 시 할당되어 종료 시 소멸 (초기화 변수는 Data, 미초기화 변수는 BSS)" },
      { major: "동적 할당 영역", minor: "힙 (Heap)", desc: "프로그래머가 런타임에 동적으로 할당·해제(malloc/new)하는 영역으로 낮은 주소에서 높은 주소 방향으로 자라남 (스레드 간 공유)" },
      { major: "동적 할당 영역", minor: "스택 (Stack)", desc: "함수 호출 시 매개변수, 복귀 주소, 지역 변수가 저장되는 LIFO 영역으로 높은 주소에서 낮은 주소로 자라남 (스레드별 독립 보유)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "메모리 단편화 해결 (슬랩·버디)",
    mnemonic: "슬·버 / 재·메·통·압",
    definition: "단편화 해결 위해 고정 블록과 2의 거듭제곱 할당 기법",
    keywords: [
      "내부 단편화 vs 외부 단편화",
      "버디 메모리 시스템 (2의 거듭제곱 분할)",
      "슬랩 할당자 (커널 객체 캐시)",
      "메모리 압축(Compaction) & 통합(Coalescing)",
      "두음: P고내/세슬 · S가외/페버 · 재메통압"
    ],
    diagram: `• 버디 시스템 (외부 단편화 해결) : [64KB 블록] ➔ 32KB ➔ 16KB ➔ [8KB 할당] (반납 시 인접 짝 'Buddy'와 즉시 병합)
• 슬랩 할당자 (내부 단편화 해결) : [페이지 프레임] ➔ [커널 자료구조(inode, task_struct) 크기별 전용 슬랩 캐시로 세분화 할당]`,
    tableRows: [
      { major: "단편화 유형", minor: "내부 vs 외부 단편화", desc: "• 내부 단편화: 고정 크기 분할(페이징) 시 할당된 블록 내부에서 프로세스가 쓰지 않고 남는 낭비 공간\n• 외부 단편화: 가변 크기 분할(세그먼트) 시 빈 공간들이 잘게 쪼개져 합치면 충분함에도 연속 할당하지 못하는 현상" },
      { major: "외부 단편화 해결", minor: "버디 메모리 알고리즘", desc: "메모리 블록을 2^n(1/2) 단위로 계속 절반씩 쪼개어 요청 크기에 가장 맞는 블록을 할당하고, 해제 시 인접 버디(Buddy) 블록과 빠르게 통합하는 리눅스 커널 페이지 할당 기법" },
      { major: "내부 단편화 해결", minor: "슬랩 할당자 (Slab Allocator)", desc: "버디 시스템으로부터 받은 페이지 프레임을 커널에서 자주 생성·소멸되는 작은 객체(Object) 크기별 캐시(Slab)로 미리 쪼개어 할당함으로써 내부 단편화와 초기화 오버헤드 제거" },
      { major: "공통 해결 기법", minor: "통합 · 압축 · 메모리 풀", desc: "인접 빈 공간을 합치는 통합(Coalescing), 사용 중인 공간을 한쪽으로 몰아넣는 압축(Compaction), 사전 크기별 블록을 확보하는 메모리 풀(Memory Pool) 활용" }
    ]
  },
  {
    domain: "CAOS",
    topic: "스래싱 (Thrashing)",
    mnemonic: "문·하·멀·워·페",
    definition: "프로세스 과다로 페이지 부재 급증해 CPU 멈추는 현상",
    keywords: [
      "과도한 페이지 부재 (Page Fault)",
      "CPU 이용률 급락",
      "다중 프로그래밍 정도 (MPD)",
      "워킹셋 (Working Set)",
      "페이지 부재 빈도 (PFF)"
    ],
    diagram: `[다중 프로그래밍 정도(MPD) 과다 증가] ➔ 프로세스별 프레임 부족 ➔ 연쇄 Page Fault(디스크 스왑 I/O 폭증) ➔ [CPU 이용률 수직 급락: 스래싱!]`,
    tableRows: [
      { major: "핵심 개념", minor: "스래싱 현상 및 원인", desc: "다중 프로그래밍 정도가 임계점을 넘어 각 프로세스에 할당된 물리 프레임이 부족해지면서, CPU가 실제 연산보다 페이지 교체(Swap I/O)에 모든 시간을 허비해 CPU 이용률이 급락하는 현상" },
      { major: "동적 해결 1", minor: "워킹셋 (Working Set) 모델", desc: "시간 지역성에 기반하여 프로세스가 일정 시간 창(Δ) 동안 집중적으로 참조하는 페이지 집합(Working Set) 전체를 메모리에 동시 상주시켜 페이지 부재를 예방 (보장 불가 시 프로세스 Swap-Out)" },
      { major: "동적 해결 2", minor: "PFF (페이지 부재 빈도)", desc: "페이지 부재율(Page Fault Frequency)의 상한선과 하한선을 설정하여, 부재율이 상한선을 넘으면 프레임을 추가 할당하고 하한선보다 낮으면 프레임을 회수하여 직접 제어" }
    ]
  },
  {
    domain: "CAOS",
    topic: "메모리 누수 (Memory Leak)",
    mnemonic: "할·미·고·탐",
    definition: "자원 고갈 방지 위해 누수 메모리를 탐지·해제하는 기법",
    keywords: [
      "힙(Heap) 동적 메모리 미해제",
      "가용 메모리 고갈 (OOM)",
      "댕글링 포인터 · 순환 참조",
      "가비지 컬렉션 (GC) & 스마트 포인터"
    ],
    diagram: `[런타임 Heap 메모리 동적 할당 (malloc/new)] ➔ 참조 포인터 유실 또는 미해제(free 누락) ➔ [Unreachable 가비지 누적] ➔ Out Of Memory 장애!`,
    tableRows: [
      { major: "핵심 개념", minor: "메모리 누수 정의", desc: "프로그램이 동적으로 할당받은 힙(Heap) 메모리를 사용 완료 후 운영체제에 반납하지 않고 참조만 잃어버려, 가용 메모리가 점진적으로 고갈되는 현상" },
      { major: "발생 원인", minor: "미해제 및 강한 참조 잔류", desc: "• C/C++: 할당(malloc/new) 후 해제(free/delete) 누락 또는 예외 발생 시 조기 리턴\n• GC 언어(Java/Python): 정적(Static) 컬렉션에 객체 계속 추가, 이벤트 리스너/클로저 미해제, 순환 참조" },
      { major: "탐지 및 예방", minor: "RAII · 스마트 포인터 · 분석기", desc: "• 네이티브 언어: 스코프 종료 시 자동 해제되는 RAII 패턴 및 스마트 포인터(unique_ptr, shared_ptr/weak_ptr), Valgrind/ASan 정적·동적 분석\n• 매니지드 언어: 힙 덤프(Heap Dump) 프로파일링 및 약한 참조(WeakReference) 활용" }
    ]
  },
  {
    domain: "CAOS",
    topic: "캐시 메모리 (Cache Memory)",
    mnemonic: "시·공·순 / 사·쓰·호·교 / 직·연·집",
    definition: "CPU와 주기억장치 속도 차 완화 위해 둔 고속 메모리",
    keywords: [
      "CPU-주기억장치 속도 완충 (SRAM)",
      "시간 · 공간 · 순차 지역성 (시공순)",
      "사상: 직접 · 완전연관 · 집합연관 (직연집)",
      "Write-Through vs Write-Back",
      "두음: 사쓰호교 / 직연집"
    ],
    diagram: `[CPU 레지스터] ⇄ (워드 전송) ⇄ [L1/L2/L3 캐시 (SRAM)] ⇄ (블록/라인 전송) ⇄ [주기억장치 (DRAM)]
• 캐시 사상 : 직접 사상 (1:1 고정)  |  완전 연관 (어디든 배치)  |  집합 연관 (N-Way 세트 내 자유 배치)`,
    tableRows: [
      { major: "설계 원리", minor: "지역성 (시간·공간·순차)", desc: "• 시간 지역성: 최근 참조된 주소를 곧 다시 참조 (루프, 스택 변수)\n• 공간 지역성: 참조된 주소 주변의 인접 메모리를 연속 참조 (배열 순회, 캐시 블록 프리페치)\n• 순차 지역성: 분기가 없는 한 명령어가 저장된 순서대로 인출" },
      { major: "캐시 사상", minor: "직접 · 연관 · 집합연관", desc: "• 직접 사상(Direct): 메모리 블록이 정해진 단일 캐시 라인에만 매핑 (회로 단순·고속이나 충돌 미스 빈발)\n• 완전 연관(Associative): 빈 캐시 라인 어디든 적재 가능 (적중률 최고이나 전체 태그 비교 비용 큼)\n• 집합 연관(Set-Associative): 정해진 세트 내 N개 라인에 연관 배치하는 실무 표준(N-Way)" },
      { major: "쓰기 정책", minor: "Write-Through vs Write-Back", desc: "• Write-Through(즉시 쓰기): 캐시와 주기억장치에 동시 기록 (일관성 유지 쉬우나 버스 트래픽·쓰기 지연 증가)\n• Write-Back(나중 쓰기): 캐시에만 먼저 기록(Dirty Bit 표시) 후 블록 교체 시점에 주기억장치에 일괄 반영 (고성능)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "MMU (Memory Management Unit)",
    mnemonic: "논·물·베·한",
    definition: "메모리 보호 위해 논리주소를 물리주소로 변환하는 장치",
    keywords: [
      "논리(가상) 주소 → 물리 주소 실시간 변환",
      "재배치 레지스터 (Base Register)",
      "한계 레지스터 (Limit Register)",
      "메모리 보호 및 권한 검증"
    ],
    diagram: `[CPU 논리 주소 요청] ➔ [MMU: 주소 < Limit 검증 (위반 시 Trap) + Base 시작주소 가산 / 페이지 테이블 변환] ➔ [물리 메모리(RAM) 주소]`,
    tableRows: [
      { major: "핵심 개념", minor: "메모리 관리 하드웨어", desc: "CPU 내부에 탑재되어 프로그램 실행 중 발생하는 논리(가상) 주소를 실제 주기억장치의 물리 주소로 동적 변환해 주는 하드웨어 유닛" },
      { major: "메모리 보호", minor: "Base & Limit 레지스터", desc: "• 재배치(Base) 레지스터: 프로세스의 시작 물리 주소를 더해주어 주소 재배치 수행\n• 한계(Limit) 레지스터: 프로세스가 자신에게 허용된 주소 범위를 벗어나 타 프로세스나 커널 영역을 침범하면 즉시 인터럽트(Trap) 발생" },
      { major: "페이지 테이블", minor: "PTBR & 권한 비트", desc: "페이지 테이블 기준 레지스터(PTBR)를 참조하여 가상 페이지를 물리 프레임으로 변환하며 읽기/쓰기/실행(R/W/X) 권한을 하드웨어 수준에서 검증" }
    ]
  },
  {
    domain: "CAOS",
    topic: "TLB (Translation Lookaside Buffer)",
    mnemonic: "고·적·미·폴",
    definition: "주소 변환 단축 위해 최근 페이지 매핑 저장한 캐시",
    keywords: [
      "페이지 테이블 고속 연관 캐시",
      "시간 지역성 기반 주소 변환 가속",
      "TLB Hit / Miss & 유효 접근 시간 (EAT)",
      "TLB Reach (Huge Page) & ASID"
    ],
    diagram: `CPU 가상주소 요청 ➔ [MMU 내 TLB 캐시 조회]
 ├─ TLB Hit  ➔ RAM 페이지 테이블 접근 생략! 즉시 물리 메모리 데이터 접근 (메모리 1회 접근)
 └─ TLB Miss ➔ RAM 페이지 테이블 조회 후 TLB에 등록하고 물리 메모리 접근 (메모리 2회 접근)`,
    tableRows: [
      { major: "핵심 개념", minor: "주소 변환 고속 버퍼", desc: "페이지 테이블이 주기억장치(RAM)에 위치해 데이터 1회 참조 시 메모리에 2번 접근해야 하는 성능 저하를 막기 위해, 최근 변환된 [가상 페이지 → 물리 프레임] 매핑을 저장한 MMU 내부 초고속 캐시" },
      { major: "동작 원리", minor: "완전/집합 연관 탐색", desc: "시간 지역성에 따라 최근 참조한 페이지 번호를 병렬 하드웨어(연관 메모리)로 즉시 검색하여 TLB 적중(Hit) 시 변환 지연을 제거" },
      { major: "성능 최적화", minor: "Huge Page & ASID", desc: "• Huge Page: 페이지 크기를 키워(예: 2MB/1GB) 적은 TLB 엔트리로 넓은 메모리를 커버(TLB Reach 확대)\n• ASID(Address Space ID): 문맥교환 시 TLB 전체가 비워지는(Flush) 오버헤드를 막기 위해 프로세스 식별 태그 부여" }
    ]
  },
  {
    domain: "CAOS",
    topic: "DMA (Direct Memory Access)",
    mnemonic: "버·전·인 / 사·버",
    definition: "CPU 개입 없이 입출력장치와 메모리가 직접 전송 기법",
    keywords: [
      "CPU 개입 없는 고속 I/O 전송",
      "PIO(프로그램 입출력) 병목 해소",
      "DMA 컨트롤러 & 버스 마스터",
      "사이클 스틸링 (Cycle Stealing) · 버스트 모드"
    ],
    diagram: `[CPU] ──(1. 전송 명령 하달)──▶ [DMA 컨트롤러] ──(2. 시스템 버스 제어권 획득 후 직접 고속 전송)──▶ [I/O 장치 ⇄ 주기억장치(RAM)]
                                     └──(3. 전체 블록 전송 완료 후 인터럽트 1회 보고)──▶ [CPU]`,
    tableRows: [
      { major: "핵심 개념", minor: "직접 메모리 접근", desc: "입출력 장치와 주기억장치 간 대량 데이터 전송 시 CPU가 매 워드마다 개입하는 오버헤드를 없애기 위해, DMA 제어기가 직접 버스를 제어해 데이터를 전송하고 완료 시에만 CPU에 인터럽트를 보내는 기법" },
      { major: "동작 절차", minor: "버스 허가 → 전송 → 완료 보고", desc: "① CPU가 DMA에 입출력 주소·크기 전달 ② DMA가 버스 요청(BR) 및 허가(BG) 획득 ③ CPU 개입 없이 메모리-I/O 간 직접 전송 ④ 완료 인터럽트 발생" },
      { major: "전송 모드", minor: "Cycle Stealing & Burst", desc: "• 사이클 스틸링(Cycle Stealing): CPU가 버스를 쓰지 않는 사이클을 양보받아 한 워드씩 전송 (CPU 지연 최소화)\n• 버스트 모드(Burst Mode): 데이터 블록 전체 전송이 끝날 때까지 DMA가 버스를 독점하여 초고속 전송" }
    ]
  },
  {
    domain: "CAOS",
    topic: "파이프라인 해저드 (Pipeline Hazard)",
    mnemonic: "구·데·제 / 전·인·레·분",
    definition: "구조·데이터·제어 문제로 파이프라인 처리 방해하는 현상",
    keywords: [
      "구조적 · 데이터 · 제어 해저드 (구데제)",
      "데이터 의존성 (RAW · WAR · WAW)",
      "전방전달 (Forwarding) & 인터락 (Stall)",
      "레지스터 재명명 (Register Renaming)",
      "분기 예측 (Branch Prediction) & BTB"
    ],
    diagram: `[명령어 파이프라인: IF(인출) → ID(해독) → EX(실행) → MEM(메모리) → WB(기록)]
• 3대 해저드 : 구조적(HW 자원 충돌)  |  데이터(RAW·WAR·WAW 종속)  |  제어(분기 명령어 목적지 미정)`,
    tableRows: [
      { major: "구조적 해저드", minor: "자원 충돌 & 하버드 구조", desc: "• 원인: 명령어 인출과 데이터 접근이 동시에 단일 메모리에 접근하는 등 HW 자원 충돌로 발생\n• 해결: 명령어 캐시와 데이터 캐시 분리(하버드 구조), 메모리 인터리빙, 기능 유닛 추가" },
      { major: "데이터 해저드", minor: "RAW · WAR · WAW", desc: "• 원인: 이전 명령어의 실행 결과에 후속 명령어가 종속되어 발생 (진성 의존성 RAW, 반의존성 WAR, 출력 의존성 WAW)\n• 해결: 연산 직후 결과를 바로 넘기는 전방전달(Forwarding), 하드웨어 인터락(Stall), 레지스터 재명명(WAR/WAW 제거)" },
      { major: "제어 해저드", minor: "분기 예측 & 지연 분기", desc: "• 원인: 조건 분기(Branch) 명령어의 점프 여부가 결정될 때까지 후속 명령어를 인출하지 못해 버블 발생\n• 해결: 동적 분기 예측(Branch Prediction), 분기 타겟 버퍼(BTB), 지연 분기(Delayed Branch)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "병렬처리 시스템 (Parallel Processing System)",
    mnemonic: "단·슈·스·브 / SI·SM·MI·MM",
    definition: "연산 속도 향상 위해 복수 명령·코어를 동시 수행 체계",
    keywords: [
      "플린 분류 (SISD · SIMD · MISD · MIMD)",
      "슈퍼파이프라인 vs 슈퍼스칼라",
      "VLIW (컴파일러 정적 스케줄링)",
      "SMP (대칭형 멀티프로세서) vs MPP"
    ],
    diagram: `• 명령어 수준(ILP) : 슈퍼스칼라 (복수 파이프라인 동시 실행)  |  VLIW (컴파일러가 독립 명령어들을 긴 워드로 묶어 실행)
• 플린(Flynn) 분류 : SISD (단일) / SIMD (단일 명령·다중 데이터 배열, GPU) / MISD / MIMD (멀티코어 SMP · 분산 MPP)`,
    tableRows: [
      { major: "명령어 병렬성", minor: "슈퍼스칼라 vs VLIW", desc: "• 슈퍼스칼라: CPU 내부에 여러 개의 실행 파이프라인을 두고 하드웨어가 동적으로 한 클럭에 복수 명령어 동시 실행(CPI < 1)\n• VLIW: 컴파일러가 컴파일 시점에 동시 수행 가능한 독립 명령어들을 하나의 긴 명령어로 묶어 실행 (HW 구조 단순화)" },
      { major: "Flynn 분류", minor: "SISD · SIMD · MISD · MIMD", desc: "• SIMD: 하나의 명령어로 수많은 데이터 스트림을 동시 연산 (벡터 프로세서, GPU, 멀티미디어 확장 명령)\n• MIMD: 여러 프로세서가 각자 다른 명령어로 다른 데이터를 비동기 병렬 처리 (현대 멀티코어 및 클러스터 표준)" },
      { major: "메모리 결합", minor: "SMP (강결합) vs MPP (약결합)", desc: "• SMP(대칭형 멀티프로세서): 복수 코어가 단일 공유 메모리와 버스를 공유 (캐시 일관성 필요)\n• MPP(대규모 병렬처리): 각 노드가 독립 CPU·메모리를 갖고 고속 네트워크로 메시지 패싱 통신 (초대규모 확장 용이)" }
    ]
  },
  {
    domain: "CAOS",
    topic: "DAS (Direct Attached Storage)",
    mnemonic: "직·케·단·독",
    definition: "구축 단순화 위해 서버와 저장장치를 케이블 직결한 방식",
    keywords: [
      "서버-스토리지 직접 케이블 연결",
      "파일시스템 서버 호스트 직접 관리",
      "SATA · SAS · NVMe 인터페이스",
      "단순·저비용 vs 공유 불가"
    ],
    diagram: `[서버 호스트 (OS 파일시스템)] ──(전용 케이블 직접 연결: SAS / SATA / NVMe)──▶ [외장 디스크 어레이 (DAS)] (타 서버와 직접 공유 불가)`,
    tableRows: [
      { major: "핵심 개념", minor: "직접 연결 스토리지", desc: "네트워크 스위치를 거치지 않고 서버에 저장장치를 전용 케이블로 직접 연결하여 사용하는 방식" },
      { major: "핵심 강점", minor: "속도 및 비용 효율", desc: "네트워크 프로토콜 변환 오버헤드가 없어 초기 속도가 빠르고 구축 비용 및 관리가 가장 단순함" },
      { major: "주요 한계", minor: "스토리지 사일로(Silo)", desc: "다른 서버와 저장 공간을 직접 공유하기 어렵고 연결 포트 수 제한으로 인해 대규모 확장성이 떨어짐" }
    ]
  },
  {
    domain: "CAOS",
    topic: "NAS (Network Attached Storage)",
    mnemonic: "이·파·공·자",
    definition: "네트워크 파일 공유 위해 이더넷 망에 연결된 저장 방식",
    keywords: [
      "이더넷(TCP/IP) 기반 네트워크 연결",
      "파일(File) 단위 스토리지 공유",
      "NFS (리눅스/유닉스) · SMB/CIFS (윈도우)",
      "자체 파일시스템 탑재"
    ],
    diagram: `[다수 클라이언트/서버] ──(일반 LAN TCP/IP 이더넷 스위치: NFS / SMB 프로토콜)──▶ [NAS 스토리지 (자체 OS·파일시스템 탑재)]`,
    tableRows: [
      { major: "핵심 개념", minor: "네트워크 결합 스토리지", desc: "기존 LAN(TCP/IP) 네트워크에 연결되어 여러 클라이언트와 서버에 파일(File) 단위로 저장 공간을 공유하는 전용 파일 서버" },
      { major: "공유 프로토콜", minor: "NFS & SMB/CIFS", desc: "NAS 장비 내부에 자체 파일시스템이 내장되어 있으며, 리눅스/유닉스 환경은 NFS, 윈도우 환경은 SMB/CIFS 프로토콜로 마운트" },
      { major: "장단점", minor: "공유 편의성 vs 대역폭 병목", desc: "• 강점: 이기종 OS 간 파일 공유가 매우 쉽고 구축 비용이 저렴\n• 한계: 일반 이더넷 망을 공유하므로 트래픽 병목과 지연이 발생해 고성능 DB 트랜잭션 처리에는 부적합" }
    ]
  },
  {
    domain: "CAOS",
    topic: "SAN (Storage Area Network)",
    mnemonic: "광·블·스·고",
    definition: "초고속 블록 입출력 위해 광채널 망으로 연결한 스토리지",
    keywords: [
      "광채널(FC) / iSCSI 전용 고속 네트워크",
      "블록(Block) 단위 스토리지 할당",
      "SAN 스위치 · HBA 카드 · LUN",
      "초고속·저지연 엔터프라이즈 DB/HA 최적"
    ],
    diagram: `[업무 서버들 (HBA 카드 장착)] ──(전용 Fibre Channel 광스위치 / iSCSI 고속망)──▶ [대규모 공유 스토리지 풀 (블록 단위 LUN 할당)]`,
    tableRows: [
      { major: "핵심 개념", minor: "스토리지 전용 고속망", desc: "일반 LAN과 분리된 별도의 광채널(FC) 또는 고속 네트워크(iSCSI)로 서버들과 스토리지를 연결해 블록(Block) 단위로 디스크를 할당하는 아키텍처" },
      { major: "동작 특성", minor: "블록 수준 인식 (LUN)", desc: "파일시스템을 서버 호스트가 직접 관리하며, 서버 입장에서는 원격 스토리지 공간(LUN)이 마치 로컬에 장착된 물리 디스크처럼 인식됨" },
      { major: "장단점", minor: "초고성능 vs 구축 고비용", desc: "• 강점: LAN 병목이 전혀 없는 초고속·저지연 I/O를 보장하며 서버 HA 클러스터링 및 미션 크리티컬 DB에 최적\n• 한계: 전용 HBA 어댑터와 FC 스위치 도입 등 초기 구축 및 운영 비용이 높음" }
    ]
  },
  {
    domain: "CAOS",
    topic: "TPM (Trusted Platform Module)",
    mnemonic: "신·측·밀·원",
    definition: "무결성 검증과 암호키 보호 위해 보드에 장착한 보안 칩",
    keywords: [
      "하드웨어 기반 신뢰점 (Root of Trust)",
      "암호키 생성·안전 격리",
      "PCR 레지스터 & 측정 부팅 (Measured Boot)",
      "밀봉 (Sealing) & 원격 증명 (Attestation)",
      "BitLocker 연동"
    ],
    diagram: `[전원 인가] ➔ [BIOS/UEFI → 부트로더 → OS 커널 해시값 순차 측정] ➔ [TPM 내부 PCR 레지스터에 누적 기록] ➔ [무결성 확인 후 암호키 해제]`,
    tableRows: [
      { major: "핵심 개념", minor: "하드웨어 신뢰점 (RoT)", desc: "메인보드에 탑재되어 암호키 생성·보호, 하드웨어 난수 생성, 시스템 무결성 검증을 수행하는 국제 표준(TCG TPM 2.0) 보안 마이크로컨트롤러" },
      { major: "내부 구성", minor: "EK · SRK · PCR 레지스터", desc: "• EK(Endorsement Key): 칩 제조 시 주입되는 고유 불변 식별 키\n• SRK(Storage Root Key): 사용자 암호키들을 계층적으로 보호하는 루트 키\n• PCR(Platform Configuration Register): 부팅 단계별 SW 해시 측정값을 누적 확장(Extend) 기록하는 레지스터" },
      { major: "핵심 보안기능", minor: "측정 부팅 · 밀봉 · 원격 증명", desc: "• 측정 부팅(Measured Boot): 부팅 체인의 해시값을 PCR에 기록해 부트킷·루트킷 변조 탐지\n• 밀봉(Sealing) 및 원격 증명: PCR 값이 정상 상태일 때만 디스크 암호화 키(BitLocker)를 해제하고 외부 서버에 단말 무결성 증명" }
    ]
  },
  {
    domain: "CAOS",
    topic: "가트너(Gartner) 전략 기술 트렌드",
    mnemonic: "에·하·그·양·공",
    definition: "미래 경쟁력 위해 에이전틱AI·차세대 컴퓨팅 조망 체계",
    keywords: [
      "에이전틱 AI (Agentic AI)",
      "하이브리드 컴퓨팅 (Hybrid Computing)",
      "에너지 효율적 컴퓨팅 (Green IT)",
      "양자 이후 암호화 (PQC)",
      "공간 컴퓨팅 & 앰비언트 인텔리전스"
    ],
    diagram: `[AI 지능화] 에이전틱 AI · 거대행동모델 · 다중기능 로봇
[차세대 컴퓨팅/신뢰] 하이브리드 컴퓨팅(CPU+GPU+양자+뉴로모픽) · 에너지 효율 컴퓨팅 · 양자내성암호(PQC) · 허위정보 보안`,
    tableRows: [
      { major: "AI 자율화", minor: "에이전틱 AI & 다중기능 로봇", desc: "인간의 개입 없이 스스로 목표를 분석·계획하고 외부 도구를 호출해 복합 과업을 수행하는 자율형 에이전틱 AI 및 범용 작업 로봇 확산" },
      { major: "컴퓨팅 혁신", minor: "하이브리드 컴퓨팅", desc: "CPU, GPU, AI ASIC, 뉴로모픽, 양자 컴퓨팅, 광학 컴퓨팅 등 서로 다른 연산 패러다임을 조합·오케스트레이션하여 단일 기술 한계를 돌파" },
      { major: "지속가능 인프라", minor: "에너지 효율적 컴퓨팅", desc: "AI 데이터센터의 전력 병목과 탄소 배출을 해결하기 위해 저전력 반도체(NPU/PIM), 액침 냉각, 고효율 그린 알고리즘을 결합하는 아키텍처" },
      { major: "신뢰와 보안", minor: "양자 이후 암호화 (PQC)", desc: "양자 컴퓨터에 의한 기존 공개키 암호(RSA, ECC) 해독 위협에 대응하여 격자 기반 등 양자내성암호(PQC)로의 전환 및 암호 민첩성 확보" }
    ]
  },

  // =========================================================================
  // 3. DB (데이터베이스 - 노션 서브노트 개념도 이미지 및 개별 소분류 전수 반영)
  // =========================================================================
  {
    domain: "DB",
    topic: "트랜잭션 (Transaction & ACID)",
    mnemonic: "원·일·고·영 (ACID)",
    definition: "데이터 무결성 보장 위해 4대 특성 지키는 작업 단위",
    keywords: [
      "원자성(Atomicity) · 일관성(Consistency)",
      "고립성(Isolation) · 영속성(Durability)",
      "All or Nothing (COMMIT / ROLLBACK)"
    ],
    diagram: `<img src="db_tx_acid.png" alt="트랜잭션 ACID 개념도"><img src="db_tx_state.png" alt="트랜잭션 상태전이도">`,
    tableRows: [
      { major: "핵심 정의", minor: "논리적 작업 단위", desc: "여러 데이터 연산을 하나의 논리적 작업으로 묶어 전부 성공 시 확정(Commit)하고 실패 시 전부 취소(Rollback)하는 처리 단위" },
      { major: "ACID 특성\n(원·일·고·영)", minor: "원자성 (Atomicity)", desc: "트랜잭션 연산이 모두 반영되거나 모두 취소되어야 하는 특성 (구현: Undo 로그, Rollback·회복 처리)" },
      { major: "", minor: "일관성 (Consistency)", desc: "트랜잭션 실행 전후에 무결성 제약조건과 업무 규칙을 만족하는 상태로 전이 (구현: 무결성 제약조건, 트리거)" },
      { major: "", minor: "고립성 (Isolation)", desc: "동시 실행 중인 트랜잭션들이 선택한 격리수준에 따라 서로 간섭하지 않도록 제어 (구현: 잠금, MVCC, 충돌 검증)" },
      { major: "", minor: "영속성 (Durability)", desc: "성공적으로 커밋된 결과는 시스템 장애 발생 후에도 영구 보존 (구현: WAL 로그 선기록, 재시작 REDO 회복)" },
      { major: "상태 전이", minor: "활동 (Active)", desc: "트랜잭션이 시작되어 연산을 정상적으로 실행 중인 초기 상태" },
      { major: "", minor: "부분 완료 (Partially Committed)", desc: "마지막 연산까지 실행을 마치고 최종 COMMIT 기록만을 남겨둔 상태" },
      { major: "", minor: "완료 (Committed)", desc: "모든 변경 사항이 영구 반영되고 트랜잭션이 성공적으로 종료된 상태" },
      { major: "", minor: "실패 (Failed)", desc: "논리적 오류나 시스템 장애로 인해 트랜잭션의 정상 실행이 더 이상 불가능한 중단 상태" },
      { major: "", minor: "철회 (Aborted)", desc: "트랜잭션이 실패하여 Rollback 연산을 통해 시작 이전 상태로 완전히 복원된 상태" }
    ]
  },
  {
    domain: "DB",
    topic: "트랜잭션 격리수준 (Isolation Level)",
    mnemonic: "RRRS / DNP (부·비·가)",
    definition: "동시성과 일관성 균형 위해 트랜잭션 간섭 나눈 4단계",
    keywords: [
      "Read Uncommitted · Read Committed",
      "Repeatable Read · Serializable (RRRS)",
      "Dirty Read · Non-repeatable · Phantom (DNP)"
    ],
    diagram: `<img src="db_isolation_graph.png" alt="트랜잭션 격리수준 개념도"><img src="db_isolation_rel.png" alt="격리수준과 이상현상 관계">`,
    tableRows: [
      { major: "낮을 때 문제점\n(DNP / 부·비·가)", minor: "Dirty Read (부정 읽기)", desc: "다른 트랜잭션의 미커밋(Uncommitted) 변경 값을 읽는 현상" },
      { major: "", minor: "Non-repeatable Read (비반복 읽기)", desc: "한 트랜잭션 내 같은 행을 다시 읽을 때 타 트랜잭션의 커밋으로 값이 달라지는 현상" },
      { major: "", minor: "Phantom Read (가상 읽기)", desc: "같은 조건으로 재조회할 때 타 트랜잭션의 삽입/삭제로 결과 행 집합이 달라지는 현상" },
      { major: "격리수준 4단계\n(RRRS)", minor: "0. Read Uncommitted", desc: "미커밋 변경 읽기 허용 (Dirty · Non-repeatable · Phantom 모두 발생 가능)" },
      { major: "", minor: "1. Read Committed", desc: "커밋된 데이터만 읽기 허용 → Dirty Read 방지 (Non-repeatable · Phantom 발생 가능)" },
      { major: "", minor: "2. Repeatable Read", desc: "트랜잭션 내 동일 행 재조회 값 보장 → Dirty · Non-repeatable 방지 (표준상 Phantom 발생 가능)" },
      { major: "", minor: "3. Serializable", desc: "직렬 실행과 동등한 격리 보장 → 모든 읽기 이상 및 직렬화 이상(Write Skew 등) 완벽 방지" }
    ]
  },
  {
    domain: "DB",
    topic: "병행제어 (Concurrency Control)",
    mnemonic: "갱·현·모·연 / 락·2·낙·타·다 / 읽·검·쓰",
    definition: "동시 트랜잭션 충돌 막아 데이터 일관성 보장하는 기법",
    keywords: [
      "부재 시 문제: 갱신손실 · 현황파악오류 · 모순성 · 연쇄복귀",
      "기법: 락킹 · 2PL · 낙관적검증 · 타임스탬프 · MVCC",
      "낙관적 검증 절차: 읽기(Read) → 검증(Validate) → 쓰기(Write)"
    ],
    diagram: `<img src="db_cc_def.png" alt="병행제어 개념도"><img src="db_cc_problems.png" alt="병행제어 미적용 문제점"><img src="db_cc_methods.png" alt="병행제어 기법">`,
    tableRows: [
      { major: "부재 시 문제점\n(갱·현·모·연)", minor: "갱신 손실 (Lost Update)", desc: "두 트랜잭션이 동시에 같은 데이터를 갱신할 때 이전 갱신을 덮어써 변경이 소실되는 현상" },
      { major: "", minor: "현황파악 오류 (Dirty Read)", desc: "롤백될 수 있는 타 트랜잭션의 미확정 변경값을 읽는 현상" },
      { major: "", minor: "모순성 (Inconsistent Analysis)", desc: "여러 데이터를 서로 다른 시점의 불일치 상태로 읽어 집계·분석 결과가 왜곡되는 현상" },
      { major: "", minor: "연쇄 복귀 (Cascading Rollback)", desc: "취소된 트랜잭션의 미커밋 값을 읽은 다른 트랜잭션들까지 연쇄적으로 롤백되는 현상" },
      { major: "병행제어 기법\n(락·2·낙·타·다)", minor: "락킹 (Locking)", desc: "공유 잠금(S-Lock)과 배타 잠금(X-Lock)의 호환성을 이용해 데이터 접근을 직렬화하고 잠금 단위에 따라 동시성 조절" },
      { major: "", minor: "2단계 잠금 규약 (2PL)", desc: "잠금 획득만 허용하는 확장 단계와 해제만 허용하는 축소 단계를 분리하여 충돌 직렬가능성 보장" },
      { major: "", minor: "낙관적 검증 (읽·검·쓰)", desc: "잠금 없이 ①읽기(개인 작업공간 수정) → ②검증(Validation) → ③쓰기(Write) 수행, 충돌 시 재시작" },
      { major: "", minor: "타임스탬프 오더링", desc: "트랜잭션 시작 시각(Timestamp) 순서에 따라 충돌 연산의 실행 순서를 직렬화 (교착상태 없음)" },
      { major: "", minor: "다중버전 제어 (MVCC)", desc: "변경 전후 버전 스냅샷을 유지해 읽기와 쓰기 간 상호 차단을 제거" }
    ]
  },
  {
    domain: "DB",
    topic: "2단계 잠금 규약 (2PL: Two-Phase Locking)",
    mnemonic: "확·축 / Ba·St·Ri·Co",
    definition: "충돌 직렬가능성 보장 위해 잠금 확장·축소 분리 기법",
    keywords: [
      "확장 단계(잠금 획득만) → 잠금점 → 축소 단계(잠금 해제만)",
      "Basic · Strict · Rigorous · Conservative 2PL",
      "충돌 직렬가능성 보장 & 연쇄 복귀/교착 방지"
    ],
    diagram: "db_2pl.png",
    tableRows: [
      { major: "동작 단계\n(확·축)", minor: "확장 단계 (Growing Phase)", desc: "트랜잭션이 새로운 잠금(Lock)을 획득할 수만 있고, 기존 잠금 해제는 금지되는 단계" },
      { major: "", minor: "축소 단계 (Shrinking Phase)", desc: "잠금점(Lock Point) 이후 보유 잠금을 해제할 수만 있고, 새로운 잠금 획득은 절대 금지되는 단계" },
      { major: "4대 변형 기법\n(Ba·St·Ri·Co)", minor: "Basic 2PL", desc: "확장·축소 단계 분리 기본형 → 충돌 직렬가능성 보장, 단 교착상태(Deadlock) 및 연쇄 복귀 가능" },
      { major: "", minor: "Strict 2PL", desc: "배타 잠금(X-Lock)을 COMMIT/ABORT 시점까지 유지 → 연쇄 취소(Cascading Rollback) 완벽 방지 (상용 DBMS 표준)" },
      { major: "", minor: "Rigorous 2PL", desc: "공유(S)·배타(X) 모든 잠금을 COMMIT/ABORT까지 유지 → 커밋 순서 그대로 직렬화 보장" },
      { major: "", minor: "Conservative (Static) 2PL", desc: "트랜잭션 시작 전에 필요한 모든 잠금을 일괄 확보 → 교착상태(Deadlock) 원천 방지" }
    ]
  },
  {
    domain: "DB",
    topic: "다중버전 동시성 제어 (MVCC)",
    mnemonic: "버·스·가 (버전·스냅샷·가시성)",
    definition: "읽기·쓰기 잠금 경합 줄이려 다중 버전 조회하는 기법",
    keywords: [
      "버전 · 스냅샷 · 가시성",
      "읽기·쓰기 상호 차단(Blocking) 해소",
      "오래된 버전 정리 (Vacuum / Undo Purge)"
    ],
    diagram: "db_mvcc.png",
    tableRows: [
      { major: "핵심 원리\n(버·스·가)", minor: "다중 버전 (Multi-Version)", desc: "데이터 변경 시 제자리 덮어쓰기 대신 변경 전후의 버전을 Undo 세그먼트나 별도 튜플로 함께 유지" },
      { major: "", minor: "스냅샷 (Snapshot)", desc: "트랜잭션 또는 질의 시작 시점의 데이터베이스 기준 시점을 포착하여 일관된 읽기 기준점 설정" },
      { major: "", minor: "가시성 판단 (Visibility)", desc: "트랜잭션 ID(XID)나 SCN과 격리수준 규칙을 대조하여 현재 스냅샷에서 볼 수 있는 버전만 선택 반환" },
      { major: "동시성 및 운영", minor: "읽기·쓰기 비차단", desc: "일반 읽기(SELECT)는 잠금을 걸지 않아 쓰기 작업과 상호 차단(Blocking)되지 않음" },
      { major: "", minor: "쓰기·쓰기 충돌 제어", desc: "동일 행에 대한 동시 쓰기(갱신) 충돌은 여전히 행 잠금(Row Lock) 또는 낙관적 검증으로 제어" },
      { major: "", minor: "구버전 정리 (Vacuum/Purge)", desc: "더 이상 어떤 활성 스냅샷에서도 참조하지 않는 오래된 버전 공간을 회수하여 저장공간 팽창 방지" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터베이스 회복 기법 (DB Recovery & ARIES)",
    mnemonic: "로·체·그 / STEAL·NO-FORCE / 분·재·취",
    definition: "장애 후 원자성·영속성 복원 위해 로그 기반 복구 기법",
    keywords: [
      "로그 · 체크포인트 · 그림자페이지 (로체그)",
      "STEAL(→UNDO) · NO-FORCE(→REDO)",
      "WAL(로그 선기록) & ARIES (Analysis → Redo → Undo)"
    ],
    diagram: `<img src="db_recovery_def.png" alt="데이터베이스 회복 개념도"><img src="db_recovery_ckpt.png" alt="체크포인트 회복 개념도">`,
    tableRows: [
      { major: "버퍼 관리 정책", minor: "STEAL 정책", desc: "미커밋 트랜잭션이 수정한 버퍼 페이지도 디스크에 기록 허용 → 원자성 보장 위해 UNDO 필수" },
      { major: "", minor: "NO-STEAL 정책", desc: "미커밋 변경 페이지의 디스크 기록을 금지 → UNDO는 불필요하나 메모리 버퍼 제약 큼" },
      { major: "", minor: "FORCE 정책", desc: "커밋 시 변경된 모든 페이지를 즉시 디스크에 강제 반영 → REDO 불필요하나 랜덤 I/O 부담 극심" },
      { major: "", minor: "NO-FORCE 정책", desc: "커밋 시 로그만 기록하고 데이터 페이지 디스크 반영은 유예 허용 → 영속성 보장 위해 REDO 필수" },
      { major: "회복 3대 기법\n(로·체·그)", minor: "로그 기반 회복 (WAL)", desc: "데이터 페이지 기록 전에 변경 로그를 먼저 안정 저장소에 영구 기록(WAL: Write-Ahead Logging)" },
      { major: "", minor: "체크포인트 (Checkpoint)", desc: "주기적으로 메모리 변경분을 디스크에 동기화하고 로그에 표시하여 장애 회복 시 탐색·재수행 범위를 단축" },
      { major: "", minor: "그림자 페이지 (Shadow Paging)", desc: "원본(그림자) 페이지를 보존하고 새 페이지에 기록 후 포인터만 전환하여 로그 없이 원자성 지원" },
      { major: "ARIES 알고리즘\n(분·재·취)", minor: "1단계: Analysis (분석)", desc: "체크포인트부터 로그를 스캔해 회복 시작점(Smallest RecLSN), 오염 페이지(DPT), 활성 트랜잭션(ATT) 파악" },
      { major: "", minor: "2단계: Redo (재현)", desc: "미완료 거래를 포함해 기록된 모든 변경 이력을 그대로 재수행(Repeating History)하여 장애 직전 상태 복원" },
      { major: "", minor: "3단계: Undo (취소)", desc: "장애 시점 미완료(Loser) 거래들의 변경을 로그 역순으로 취소하고 보상 로그(CLR)를 기록" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터베이스 무결성 제약조건",
    mnemonic: "개·키·도·널·참·사 / 선·절·트",
    definition: "데이터 정확성과 일관성 유지 위해 규칙 강제하는 조건",
    keywords: [
      "개체 · 키 · 도메인 · NULL · 참조 · 사용자정의 (개키도널참사)",
      "선언적 제약 · 절차적 처리 · 트랜잭션 관리 (선절트)",
      "참조무결성 옵션: RESTRICT · CASCADE · SET NULL · SET DEFAULT"
    ],
    diagram: `<img src="db_integrity.png" alt="무결성 제약조건 개념도"><img src="db_ref_integrity.png" alt="참조 무결성 개념도">`,
    tableRows: [
      { major: "6대 무결성 제약\n(개·키·도·널·참·사)", minor: "개체 무결성 (Entity)", desc: "기본키(PRIMARY KEY)를 구성하는 속성은 유일해야 하며 NULL을 가질 수 없음" },
      { major: "", minor: "키 무결성 (Key)", desc: "릴레이션 내 지정한 후보키/대체키 속성 집합의 중복 금지 (UNIQUE)" },
      { major: "", minor: "도메인 무결성 (Domain)", desc: "속성값이 정의된 자료형·허용 범위·형식을 충족 (데이터 타입, CHECK)" },
      { major: "", minor: "NULL 무결성", desc: "필수 입력 속성의 NULL 값 허용 금지 (NOT NULL)" },
      { major: "", minor: "참조 무결성 (Referential)", desc: "자식 외래키(FK) 값은 부모 참조키에 존재하거나 NULL이어야 함 (RESTRICT, CASCADE, SET NULL, SET DEFAULT)" },
      { major: "", minor: "사용자 정의 무결성", desc: "특정 도메인 업무 규칙 및 상태 전이 조건 충족 (CHECK, 트리거, 업무 로직)" },
      { major: "유지 기법\n(선·절·트)", minor: "선언적 제약조건", desc: "테이블 생성/변경 시 PK, FK, UNIQUE, CHECK, NOT NULL을 DDL로 선언하여 DBMS가 자동 강제" },
      { major: "", minor: "절차적 제약 처리", desc: "트리거(Trigger)나 저장 프로시저(Stored Procedure)를 통해 복합 연산 및 다중 테이블 업무 규칙 검증" },
      { major: "", minor: "트랜잭션 관리", desc: "ACID 기반 병행제어와 회복 기법을 통해 동시 실행 및 장애 상황에서도 데이터 일관성을 유지" }
    ]
  },
  {
    domain: "DB",
    topic: "릴레이션 무결성 제약의 분류축",
    mnemonic: "상·과 / 집·튜 / 즉·지",
    definition: "릴레이션 정합성 위해 상태·대상·시점별 분류한 제약",
    keywords: [
      "상태 변화: 상태 제약 ↔ 과도(전이) 제약",
      "적용 대상: 집합 제약 ↔ 튜플 제약",
      "검사 시점: 즉시 제약 ↔ 지연 제약"
    ],
    diagram: "db_rel_integrity.png",
    tableRows: [
      { major: "상태 변화 기준\n(상·과)", minor: "상태 제약 (State)", desc: "한 시점의 데이터베이스 상태가 정적으로 만족해야 하는 규칙 (예: 급여 > 0)" },
      { major: "", minor: "과도 제약 (Transition)", desc: "데이터 변경 전 상태와 변경 후 상태 사이의 전이 과정에서 만족해야 할 규칙 (예: 급여 삭감 불가, 기혼→미혼 변경 불가)" },
      { major: "적용 대상 기준\n(집·튜)", minor: "집합 제약 (Set)", desc: "여러 튜플의 집합 전체에 걸쳐 적용되는 규칙 (예: 기본키 유일성, 부서별 인원 상한)" },
      { major: "", minor: "튜플 제약 (Tuple)", desc: "개별 튜플(행) 하나 내부의 속성값 또는 속성 간 조건만 검사하는 규칙 (예: 종료일 >= 시작일)" },
      { major: "검사 시점 기준\n(즉·지)", minor: "즉시 제약 (Immediate)", desc: "DML 명령문 수행 종료 즉시 제약 위반 여부를 검사" },
      { major: "", minor: "지연 제약 (Deferred)", desc: "트랜잭션 내부의 일시적 위반을 허용하고 COMMIT 시점에 일괄 검사 (순환 FK 입력 등에 활용)" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터 모델링 (Data Modeling)",
    mnemonic: "개·논·물 / 요·개·논·물·검",
    definition: "현실 업무 데이터와 관계를 개념·논리·물리로 설계 과정",
    keywords: [
      "요구분석 → 개념 → 논리 → 물리 → 검증 (요개논물검)",
      "식별 관계(자식 PK에 포함) vs 비식별 관계(일반 FK)",
      "데이터 독립성: 외·개·내 / 논·물"
    ],
    diagram: `<img src="db_modeling.png" alt="데이터 모델링 개념도"><img src="db_modeling_rel.png" alt="식별·비식별 관계 개념도">`,
    tableRows: [
      { major: "모델링 단계\n(요·개·논·물·검)", minor: "개념 데이터 모델링", desc: "업무 주제영역 정의, 핵심 엔터티(Entity)와 관계 도출, 상위 개념 ERD 작성" },
      { major: "", minor: "논리 데이터 모델링", desc: "속성·식별자(Key)·관계 상세화, 정규화(Normalization) 및 이력 관리 정의 (특정 DBMS에 독립적)" },
      { major: "", minor: "물리 데이터 모델링", desc: "대상 DBMS 특성에 맞춘 테이블·컬럼 자료형, 인덱스, 파티셔닝, 성능 향상을 위한 반정규화 수행" },
      { major: "관계 유형 비교", minor: "식별 관계 (Identifying)", desc: "부모 엔터티의 기본키(PK)가 자식 엔터티의 PK 일부로 포함되는 강한 종속 관계 (ERD 실선 표기)" },
      { major: "", minor: "비식별 관계 (Non-Identifying)", desc: "부모 엔터티의 기본키(PK)가 자식 엔터티의 일반 속성(FK)으로만 포함되는 약한 참조 관계 (ERD 점선 표기)" },
      { major: "3단계 스키마\n(외·개·내)", minor: "외부 스키마 (External)", desc: "개별 사용자나 응용프로그램 관점의 개인화된 논리적 데이터 뷰(View) 정의" },
      { major: "", minor: "개념 스키마 (Conceptual)", desc: "조직 전체의 통합된 논리적 데이터 구조와 관계·제약조건 정의 (외부↔개념 사상: 논리적 독립성)" },
      { major: "", minor: "내부 스키마 (Internal)", desc: "실제 저장장치에 기록되는 파일 구조, 인덱스, 블록 배치 정의 (개념↔내부 사상: 물리적 독립성)" }
    ]
  },
  {
    domain: "DB",
    topic: "키(Key) 종류와 도출 절차",
    mnemonic: "결·슈·후·기 / 유·최·대",
    definition: "튜플 식별 위해 유일성·최소성·대표성으로 키 선정 절차",
    keywords: [
      "결정자 → 슈퍼키 → 후보키 → 기본키 (결슈후기)",
      "유일성 → 최소성 → 대표성 (유최대)",
      "대체키 · 외래키"
    ],
    diagram: "db_key.png",
    tableRows: [
      { major: "도출 절차\n(결·슈·후·기\n/ 유·최·대)", minor: "1. 결정자 (Determinant)", desc: "함수 종속 관계(X → Y)에서 다른 속성의 값을 유일하게 결정하는 속성 집합 도출" },
      { major: "", minor: "2. 슈퍼키 (Super Key)", desc: "[유일성 만족] 릴레이션 내 모든 튜플을 유일하게 식별할 수 있는 속성 집합" },
      { major: "", minor: "3. 후보키 (Candidate Key)", desc: "[유일성 + 최소성 만족] 슈퍼키 중에서 꼭 필요한 최소한의 속성만으로 구성된 키" },
      { major: "", minor: "4. 기본키 (Primary Key)", desc: "[유일성 + 최소성 + 대표성] 후보키 중 엔터티를 대표하도록 최종 선정된 키 (NULL 불가, 중복 불가)" },
      { major: "연관 키", minor: "대체키 (Alternate Key)", desc: "후보키 중에서 기본키(PK)로 선택되지 못한 나머지 후보키 (UNIQUE 제약 설정)" },
      { major: "", minor: "외래키 (Foreign Key)", desc: "타 릴레이션의 기본키(PK)를 참조하여 릴레이션 간 관계를 맺고 참조 무결성을 유지하는 속성" }
    ]
  },
  {
    domain: "DB",
    topic: "정규화 (1NF ~ BCNF)",
    mnemonic: "도·부·이·결·다·조 / 무·중·분 / 삽·갱·삭",
    definition: "삽입·갱신·삭제 이상 방지 위해 함수종속 분해하는 과정",
    keywords: [
      "원칙: 무손실 조인 · 중복 제거 · 분리 (무중분)",
      "목적: 삽입 · 갱신 · 삭제 이상 현상 제거 (삽갱삭)",
      "단계: 도메인원자값(1NF) · 부분(2NF) · 이행(3NF) · 결정자(BCNF)"
    ],
    diagram: `<img src="db_norm_fd.png" alt="함수종속성 개념도"><img src="db_norm_steps.png" alt="정규화 단계 개념도">`,
    tableRows: [
      { major: "정규화 3원칙\n(무·중·분)", minor: "무손실 조인 (Lossless Join)", desc: "분해된 릴레이션들을 다시 자연 조인했을 때 허위 튜플 없이 원래 릴레이션이 완벽히 복원되어야 하는 원칙" },
      { major: "", minor: "데이터 중복 제거", desc: "동일한 사실 데이터가 여러 튜플에 반복 저장되는 중복성을 제거하여 저장공간 낭비와 불일치 방지" },
      { major: "", minor: "독립 관계성 분리", desc: "서로 독립적인 함수 종속 관계(하나의 릴레이션에 하나의 주제)를 별도 릴레이션으로 분리" },
      { major: "이상 현상 방지\n(삽·갱·삭)", minor: "삽입 이상 (Insertion Anomaly)", desc: "새 데이터를 삽입할 때 의도하지 않은 불필요한 속성값까지 함께 입력해야 하는 현상 방지" },
      { major: "", minor: "갱신 이상 (Update Anomaly)", desc: "중복된 데이터 중 일부만 수정되어 데이터 간 모순(불일치)이 발생하는 현상 방지" },
      { major: "", minor: "삭제 이상 (Deletion Anomaly)", desc: "특정 튜플을 삭제할 때 꼭 보존해야 할 다른 유용한 정보까지 함께 연쇄 소실되는 현상 방지" },
      { major: "정규화 단계\n(도·부·이·결)", minor: "제1정규형 (1NF: 도메인 원자값)", desc: "릴레이션에 속한 모든 속성의 도메인이 더 이상 쪼갤 수 없는 원자값(Atomic Value)만으로 구성 (반복 그룹 분리)" },
      { major: "", minor: "제2정규형 (2NF: 부분종속 제거)", desc: "1NF를 만족하고, 기본키의 진부분집합에 종속되는 '부분 함수 종속'을 제거하여 완전 함수 종속 달성" },
      { major: "", minor: "제3정규형 (3NF: 이행종속 제거)", desc: "2NF를 만족하고, 기본키가 아닌 일반 속성이 다른 일반 속성을 거쳐 종속되는 '이행 함수 종속(X→Y→Z)'을 제거" },
      { major: "", minor: "BCNF (결정자 후보키)", desc: "3NF를 강화하여 모든 비자명 함수 종속(X→Y)의 결정자(X)가 반드시 후보키(슈퍼키)가 되도록 분해" }
    ]
  },
  {
    domain: "DB",
    topic: "고차 정규화 (4NF · 5NF)",
    mnemonic: "다·조 (독립 집합 · 조인 복원)",
    definition: "다치·조인 종속 제거해 무손실 복원 보장하는 정규형",
    keywords: [
      "제4정규형(4NF): 다치 종속(MVD, X↠Y) 제거",
      "제5정규형(5NF / PJNF): 조인 종속(JD) 제거",
      "허위 튜플(Spurious Tuple) 없는 무손실 복원"
    ],
    diagram: `<img src="db_4nf_before.png" alt="4NF 정규화 전"><img src="db_4nf_after.png" alt="4NF 정규화 후"><img src="db_5nf.png" alt="5NF 조인종속 분해">`,
    tableRows: [
      { major: "제4정규형 (4NF)\n(다치 종속 제거)", minor: "다치 종속 (MVD, X ↠ Y)", desc: "하나의 릴레이션에 두 개 이상의 독립적인 다중값 종속(X ↠ Y, X ↠ Z)이 공존하여 카티션 곱 형태의 중복이 발생하는 현상" },
      { major: "", minor: "4NF 분해 (독립 집합 분리)", desc: "모든 비자명 다치 종속에서 결정자 X가 슈퍼키가 되도록 독립된 두 다중값 집합을 [사원-자격], [사원-언어]로 각각 분리" },
      { major: "제5정규형 (5NF)\n(조인 종속 제거)", minor: "조인 종속 (JD)", desc: "릴레이션을 여러 투영(Projection)으로 쪼갠 뒤 모두 조인해야만 원본이 복원되는 다자간 대칭적 순환 제약" },
      { major: "", minor: "5NF 분해 (무손실 투영 조인)", desc: "모든 비자명 조인 종속이 후보키를 통해서만 성립하도록 분해 (SP·SJ·PJ 3자 조인 시 허위 튜플 없이 완벽 복원)" }
    ]
  },
  {
    domain: "DB",
    topic: "반정규화 (De-normalization)",
    mnemonic: "대·다·반 / 테·컬·관",
    definition: "조회 성능 향상 위해 정규화 모델에 중복·병합하는 기법",
    keywords: [
      "절차: 대상 선정 → 다른 방법 검토 → 반정규화 (대다반)",
      "유형: 테이블(병합·분할·추가) · 컬럼(중복·파생·이력) · 관계(중복)",
      "성능 이익과 정합성 동기화 비용 검증"
    ],
    diagram: `<img src="db_denorm1.png" alt="반정규화 개념도"><img src="db_denorm2.png" alt="반정규화 절차">`,
    tableRows: [
      { major: "적용 절차\n(대·다·반)", minor: "1. 반정규화 대상 선정", desc: "대량 범위 자주 처리, 과다한 테이블 조인, 통계/집계 병목 등 성능 저하 대상을 식별" },
      { major: "", minor: "2. 다른 방법 우선 검토", desc: "모델 구조를 깨기 전에 뷰(View), 클러스터링, 인덱스 조정, 응용 SQL 튜닝으로 해결 가능한지 먼저 검토" },
      { major: "", minor: "3. 반정규화 적용", desc: "테이블·컬럼·관계 반정규화를 수행하고 트리거·배치 등 데이터 정합성 유지 방안을 함께 설계" },
      { major: "테이블 반정규화", minor: "테이블 병합", desc: "조인 빈도가 높은 1:1 관계, 1:M 관계, 슈퍼/서브타입 테이블을 하나로 통합" },
      { major: "", minor: "테이블 분할", desc: "업무 활용 특성에 따라 행 단위 수평 분할 또는 열 단위 수직 분할 수행" },
      { major: "", minor: "테이블 추가", desc: "원격 조인 회피용 중복 테이블, 집계용 통계 테이블, 이력 테이블, 자주 쓰는 부분 테이블 추가" },
      { major: "컬럼·관계 반정규화", minor: "중복 컬럼 추가", desc: "조인 횟수를 줄이기 위해 참조 테이블의 자주 조회되는 컬럼을 자식 테이블에 중복 배치" },
      { major: "", minor: "파생 컬럼 추가", desc: "총금액, 할인액 등 실시간 연산 부하가 큰 계산 결과값을 미리 컬럼으로 저장" },
      { major: "", minor: "이력 기능 컬럼 추가", desc: "대량 이력 테이블에서 최신 여부(Y/N)나 종료일자 등 최근 값 빠른 탐색용 컬럼 추가" },
      { major: "", minor: "중복 관계 (FK) 추가", desc: "데이터 무결성을 해치지 않으면서 다단계 조인 경로를 단축하기 위해 직접 참조 관계(FK)를 추가" }
    ]
  },
  {
    domain: "DB",
    topic: "CRUD Matrix",
    mnemonic: "요·데·프·매 (C·R·U·D)",
    definition: "프로세스와 엔터티 간 생성·조회·갱신·삭제 매핑 도표",
    keywords: [
      "요구분석 → 데이터모델링 → 프로세스모델링 → 매트릭스 작성",
      "Create(생성) · Read(조회) · Update(갱신) · Delete(삭제)",
      "생명주기 누락 점검 & 단위 프로세스 응집도 검증"
    ],
    diagram: `<img src="db_crud.png" alt="CRUD Matrix 개념도"><img src="db_crud_check.png" alt="CRUD Matrix 점검표">`,
    tableRows: [
      { major: "작성 절차\n(요·데·프·매)", minor: "1. 요구사항 분석", desc: "업무 요구사항을 수집하여 시스템이 처리해야 할 기능과 데이터 범위를 정의" },
      { major: "", minor: "2. 데이터 모델링", desc: "업무에서 관리할 핵심 엔터티(Entity)와 테이블 목록을 도출" },
      { major: "", minor: "3. 프로세스 모델링", desc: "업무 기능을 수행하는 단위 프로세스(트랜잭션/화면/API)를 도출" },
      { major: "", minor: "4. 상관 매트릭스 작성", desc: "행(프로세스)과 열(엔터티) 교차점에 C(생성)·R(조회)·U(갱신)·D(삭제) 권한과 액션을 매핑" },
      { major: "검증 및 활용", minor: "생명주기 정합성 점검", desc: "C가 없는 엔터티, R/U/D가 전혀 없는 불필요 엔터티 등 데이터 생명주기 누락 여부를 점검" },
      { major: "", minor: "단위 프로세스 응집도 검증", desc: "아무 엔터티도 건드리지 않거나 과도하게 많은 엔터티를 수정하는 프로세스를 식별해 분할·통합" },
      { major: "", minor: "변경 영향도 분석", desc: "테이블이나 컬럼 구조 변경 시 영향을 받는 애플리케이션 프로세스를 즉시 추적" }
    ]
  },
  {
    domain: "DB",
    topic: "인덱스 (Index & 클러스터드·논클러스터드)",
    mnemonic: "트·해·비 / 함·조·도",
    definition: "검색 속도 향상 위해 키와 주소를 정렬 저장한 자료구조",
    keywords: [
      "형태별: 트리 · 해시 · 비트맵 (트해비)",
      "목적별: 함수기반 · 조인 · 도메인 (함조도)",
      "클러스터드(물리 정렬 일치, 1개) vs 논클러스터드(포인터 참조, 다수)"
    ],
    diagram: `<img src="db_index.png" alt="인덱스 개념도"><img src="db_clustered_index.png" alt="클러스터드 vs 논클러스터드 인덱스">`,
    tableRows: [
      { major: "형태별 유형\n(트·해·비)", minor: "트리 기반 인덱스", desc: "B-Tree, B+Tree 등 균형 트리 구조로 등치(=) 및 범위(BETWEEN, >, <) 검색 모두 우수" },
      { major: "", minor: "해시 기반 인덱스", desc: "컬럼 값에 해시 함수를 적용해 O(1) 단건 등치(=) 검색에 특화 (부등호 범위 검색은 불가)" },
      { major: "", minor: "비트맵 인덱스", desc: "성별·상태코드 등 카디널리티(분포도)가 낮은 컬럼을 0과 1 비트열로 압축 저장 (DW 다중 조건 집계에 유리)" },
      { major: "목적별 유형\n(함·조·도)", minor: "함수 기반 인덱스 (FBI)", desc: "컬럼에 연산식이나 함수(UPPER, SUBSTR 등)를 적용한 결과값 자체를 인덱싱" },
      { major: "", minor: "조인 인덱스 (Join Index)", desc: "두 개 이상 테이블의 조인 결과를 사전 인덱싱하여 조인 탐색 비용 절감" },
      { major: "", minor: "도메인 인덱스", desc: "전문(Full-text)·공간(GIS)·비정형 데이터 등 애플리케이션 특화 사용자 정의 인덱스" },
      { major: "구조 비교", minor: "클러스터드 인덱스", desc: "인덱스 정렬 순서대로 실제 테이블 데이터가 물리적으로 정렬 저장됨 (테이블당 1개만 생성, 리프 노드=데이터 페이지)" },
      { major: "", minor: "논클러스터드 인덱스", desc: "데이터 정렬과 무관하게 별도 인덱스 공간을 두고 리프 노드에 데이터 주소(ROWID)만 저장 (테이블당 여러 개 생성 가능)" }
    ]
  },
  {
    domain: "DB",
    topic: "B-Tree 인덱스",
    mnemonic: "루·브·리 / 전·키·포",
    definition: "탐색 속도 보장 위해 모든 노드에 데이터 둔 균형트리",
    keywords: [
      "루트 · 브랜치 · 리프 노드",
      "균형 다진 탐색 트리 O(log N)",
      "모든 노드에 키와 데이터 포인터 저장"
    ],
    diagram: "db_btree.png",
    tableRows: [
      { major: "노드 구성\n(루·브·리)", minor: "루트 노드 (Root Node)", desc: "트리 최상단에서 탐색이 시작되는 노드로, 하위 브랜치 포인터와 키·데이터 주소를 보유" },
      { major: "", minor: "브랜치 노드 (Branch Node)", desc: "루트와 리프 사이에서 탐색 경로를 분기하는 중간 내부 노드" },
      { major: "", minor: "리프 노드 (Leaf Node)", desc: "트리 최하단 노드로, 모든 리프 노드가 동일한 깊이(Level)에 위치하여 균형 유지" },
      { major: "구조적 특성", minor: "전 노드 데이터 포인터 보유", desc: "루트·브랜치·리프 모든 노드에 인덱스 키값과 실제 테이블 레코드 주소(ROWID/포인터)를 함께 저장" },
      { major: "", minor: "단건 탐색 강점", desc: "상위 노드에서 찾는 키를 만나면 리프까지 내려가지 않고 즉시 탐색 종료 가능" },
      { major: "", minor: "범위 탐색 한계", desc: "노드에 데이터가 함께 들어있어 팬아웃(Fan-out)이 작고, 부등호 범위 검색 시 트리를 상하로 중위 순회해야 함" }
    ]
  },
  {
    domain: "DB",
    topic: "B+Tree 인덱스",
    mnemonic: "내·리·양·범",
    definition: "범위 검색 고속화 위해 리프 노드에 데이터 둔 인덱스",
    keywords: [
      "내부 노드(경로 키)와 리프 노드(데이터) 분리",
      "리프 노드 양방향 연결 리스트",
      "높은 팬아웃 (Fan-out) & 범위 검색 최적화"
    ],
    diagram: "db_bplustree.png",
    tableRows: [
      { major: "노드 분리 구조\n(내·리 분리)", minor: "내부 노드 (Index Set)", desc: "루트·브랜치 노드에는 실제 데이터 포인터 없이 오직 리프 노드로 찾아가는 경로 안내 키(Separator Key)만 저장" },
      { major: "", minor: "리프 노드 (Sequence Set)", desc: "오직 최하단 리프 노드에만 모든 인덱스 키와 실제 데이터(또는 ROWID 주소)를 정렬 상태로 저장" },
      { major: "핵심 강점", minor: "높은 팬아웃 (Fan-out)", desc: "내부 노드에 데이터가 없어 한 블록에 더 많은 자식 포인터를 담아 트리 높이를 낮추고 디스크 I/O 횟수 절감" },
      { major: "", minor: "양방향 연결 리스트", desc: "리프 노드끼리 양방향 연결 리스트(Doubly Linked List)로 이어져 있어 이전·다음 블록 순차 이동 가능" },
      { major: "", minor: "범위 검색 (Range Scan)", desc: "시작 키만 수직 탐색으로 찾으면 리프 연결 리스트를 따라 부등호(BETWEEN, >, <) 및 ORDER BY 스캔을 초고속 수행" }
    ]
  },
  {
    domain: "DB",
    topic: "다차원 색인구조 (Multidimensional Index)",
    mnemonic: "PAM(k·Q·G) / SAM(R·R+·R*)",
    definition: "공간·다차원 데이터 범위·근접 탐색 비용 줄이는 색인",
    keywords: [
      "PAM(점 데이터): k-d 트리 · Quad 트리 · Grid File",
      "SAM(공간 객체): R-Tree · R+ Tree · R* Tree",
      "MBR (Minimum Bounding Rectangle: 최소 경계 사각형)"
    ],
    diagram: "db_multidim_index.png",
    tableRows: [
      { major: "PAM\n(점 데이터 중심)", minor: "k-d 트리 (k-dimensional)", desc: "다차원 공간을 각 축 기준으로 번갈아 이진 분할하여 최근접 이웃(KNN) 및 다차원 범위 탐색 수행" },
      { major: "", minor: "Quad 트리", desc: "2차원 공간을 4개의 사분면(NW, NE, SW, SE)으로 재귀적으로 4등분하여 관리" },
      { major: "", minor: "Grid File", desc: "다차원 공간을 격자(Grid) 셀로 분할하고 디렉터리 배열을 통해 단일 디스크 접근 유도" },
      { major: "SAM\n(공간 객체 중심)", minor: "R-Tree", desc: "공간 객체를 감싸는 최소 경계 사각형(MBR)을 기반으로 계층적 균형 트리로 관리 (GIS·LBS 표준)" },
      { major: "", minor: "R+ Tree", desc: "형제 노드 간 MBR의 중첩(Overlap)을 허용하지 않고 객체를 분할 저장해 단일 경로 탐색 보장" },
      { major: "", minor: "R* Tree", desc: "노드 분할 시 면적·둘레·중첩 최소화와 강제 재삽입(Forced Reinsertion)으로 검색 성능을 최적화" }
    ]
  },
  {
    domain: "DB",
    topic: "옵티마이저 (SQL Optimizer)",
    mnemonic: "RBO·CBO / 변·추·생",
    definition: "SQL 질의에 대해 규칙·비용 기반 최적 실행계획 엔진",
    keywords: [
      "SQL 처리: 구문분석(Parsing) → 실행(Optimizer) → 인출(Fetch)",
      "내부 구성: Query Transformer(변환) → Estimator(추정) → Plan Generator(생성)",
      "RBO(규칙 기반) vs CBO(비용·통계 기반)"
    ],
    diagram: "db_optimizer.png",
    tableRows: [
      { major: "SQL 처리 과정", minor: "1. 구문분석 (Parsing)", desc: "문법(Syntax)·의미(Semantic) 검증 후 Shared Pool 내 기존 실행계획 존재 여부(Soft/Hard Parse) 확인" },
      { major: "", minor: "2. 실행 (Execution)", desc: "옵티마이저가 실행계획을 수립하고 Row Source Generator가 실행 가능한 프로시저를 생성해 블록 I/O 수행" },
      { major: "", minor: "3. 인출 (Fetch)", desc: "실행 결과 집합에서 데이터를 읽어 사용자 애플리케이션으로 반환" },
      { major: "옵티마이저 구조\n(변·추·생)", minor: "Query Transformer (변환기)", desc: "뷰 병합, 서브쿼리 언네스팅, 조건절 푸시다운 등 SQL을 의미가 동일한 더 효율적인 형태로 재작성" },
      { major: "", minor: "Estimator (비용 추정기)", desc: "데이터 딕셔너리 통계정보(건수, 분포도, 히스토그램)를 바탕으로 선택도·카디널리티·I/O 및 CPU 비용 산출" },
      { major: "", minor: "Plan Generator (계획 생성기)", desc: "다양한 접근 경로·조인 순서·조인 방법 후보군 중 총비용(Cost)이 가장 낮은 최적 실행계획 선택" },
      { major: "유형 비교", minor: "RBO (규칙 기반)", desc: "미리 정해진 우선순위 규칙(ROWID > Unique Index > Range Scan > Full Scan 등)만으로 실행계획 결정" },
      { major: "", minor: "CBO (비용 기반)", desc: "테이블·인덱스 통계정보와 시스템 자원 비용 모델을 계산해 최소 비용 실행계획 선택 (현대 DBMS 표준)" }
    ]
  },
  {
    domain: "DB",
    topic: "조인 수행 방식과 인덱스 스캔",
    mnemonic: "네·소·해 / 랜·풀·유·스·디·패",
    definition: "테이블 결합 및 인덱스 탐색 효율화하는 물리 수행 기법",
    keywords: [
      "조인 방식(네소해): Nested Loop · Sort Merge · Hash Join",
      "인덱스 스캔(랜풀유스디패): Range · Full · Unique · Skip · Descending · Fast Full"
    ],
    diagram: "db_index_scan.png",
    tableRows: [
      { major: "조인 수행 방식\n(네·소·해)", minor: "Nested Loop (NL 조인)", desc: "선행(Driving) 집합의 각 행마다 후행 테이블의 인덱스를 통해 반복 탐색 (소량 데이터 온라인 트랜잭션에 유리)" },
      { major: "", minor: "Sort Merge (소트 머지)", desc: "양쪽 집합을 조인 키 기준으로 각각 정렬한 뒤 순차 스캔하며 병합 (인덱스 없거나 비동등 조인 시 활용)" },
      { major: "", minor: "Hash Join (해시 조인)", desc: "작은 집합(Build Input)으로 메모리 해시 테이블을 생성하고 큰 집합(Probe Input)을 스캔하며 탐색 (대용량 동등 조인 최적)" },
      { major: "인덱스 스캔\n(랜·풀·유·스·디·패)", minor: "Index Range Scan", desc: "루트에서 리프까지 수직 탐색 후 필요한 범위만 수평 스캔하는 가장 일반적인 방식 (결과 정렬 보장)" },
      { major: "", minor: "Index Full Scan", desc: "수직 탐색 없이 리프 블록 전체를 처음부터 끝까지 Single Block Read로 수평 스캔 (최적 선두 인덱스 없을 때)" },
      { major: "", minor: "Index Unique Scan", desc: "Unique 인덱스를 동등(=) 조건으로 검색할 때 수직 탐색만으로 단 1건의 데이터를 즉시 추출" },
      { major: "", minor: "Index Skip Scan", desc: "복합 인덱스에서 선두 컬럼 조건이 없어도 선두 컬럼의 Distinct 값이 적을 때 필요한 블록만 골라 스캔" },
      { major: "", minor: "Index Range Scan Descending", desc: "인덱스 리프 블록을 뒤에서부터 역순으로 스캔하여 내림차순(ORDER BY DESC) 정렬 연산을 생략" },
      { major: "", minor: "Index Fast Full Scan", desc: "인덱스 트리 구조를 무시하고 세그먼트 전체를 Multi-Block Read로 고속 스캔 (결과 정렬은 보장 안 됨)" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터베이스 튜닝 (DB Tuning)",
    mnemonic: "설·D·S / 처·처·응·로",
    definition: "처리량 증대와 응답 단축 위해 설계·DB·SQL 최적화",
    keywords: [
      "3대 영역(설DS): 설계(모델링) 튜닝 · DBMS 튜닝 · SQL 튜닝",
      "성능 지표(처처응로): 처리능력 · 처리시간 · 응답시간 · 로드시간"
    ],
    diagram: `<img src="db_tuning.png" alt="DB 튜닝 3단계 개념도"><img src="db_hint_types.png" alt="옵티마이저 힌트 유형">`,
    tableRows: [
      { major: "3대 튜닝 영역\n(설·D·S)", minor: "DB 설계 (모델링) 튜닝", desc: "반정규화, 파티셔닝, 이력테이블 관리, 인덱스 키 구성, FK 잠금 회피, 테이블스페이스 분리 등 구조적 개선" },
      { major: "", minor: "DBMS 환경 튜닝", desc: "Buffer Cache·Shared Pool 등 메모리 최적화, Redo Log·체크포인트 설정, CPU/디스크 I/O 경합 최소화" },
      { major: "", minor: "SQL 튜닝", desc: "비효율 실행계획 개선, 옵티마이저 힌트 적용, 조인 순서·방식 최적화, 인덱스 억제 요인(컬럼 변형) 제거" },
      { major: "옵티마이저 힌트", minor: "최적화 목표 힌트", desc: "ALL_ROWS(전체 리소스 최소화 비용 기반), FIRST_ROWS(첫 행 최단 응답), RULE(규칙 기반 실행)" },
      { major: "", minor: "접근 방법 힌트", desc: "FULL(전체 테이블 스캔), INDEX(인덱스 스캔), INDEX_FFS(Fast Full Scan), HASH(해시 스캔)" },
      { major: "", minor: "조인 순서 힌트", desc: "ORDERED(FROM절 기술 순서대로 조인), LEADING(지정한 테이블을 선행 드라이빙으로 강제)" },
      { major: "", minor: "조인 방법 힌트", desc: "USE_NL(Nested Loop 조인), USE_MERGE(Sort Merge 조인), USE_HASH(Hash 조인 강제)" },
      { major: "성능 평가 지표\n(처·처·응·로)", minor: "처리능력 (Throughput)", desc: "단위 시간당 시스템이 완료하는 트랜잭션 또는 질의 처리 건수 (TPS)" },
      { major: "", minor: "처리시간 (Elapsed Time)", desc: "트랜잭션이나 배치 작업이 시작되어 완전히 종료될 때까지 서버에서 소요된 총 시간" },
      { major: "", minor: "응답시간 (Response Time)", desc: "사용자가 질의를 요청한 시점부터 첫 결과 화면을 반환받기까지 체감하는 대기 시간" },
      { major: "", minor: "로드시간 (Load Time)", desc: "대량의 데이터를 추출·변환하여 데이터베이스에 적재하는 데 소요되는 시간" }
    ]
  },
  {
    domain: "DB",
    topic: "파티셔닝 (DB Partitioning)",
    mnemonic: "레·리·해·복 (수평·수직)",
    definition: "성능과 관리성 위해 대용량 테이블을 나누는 분할 기법",
    keywords: [
      "유형(레리해복): Range(범위) · List(목록) · Hash(해시) · Composite(복합)",
      "방법: 수평 분할(행 분리) vs 수직 분할(열 분리)",
      "파티션 프루닝 (Partition Pruning: 불필요 파티션 스캔 제외)"
    ],
    diagram: "db_partitioning.png",
    tableRows: [
      { major: "4대 분할 유형\n(레·리·해·복)", minor: "Range 파티셔닝 (범위)", desc: "날짜(월별·연도별)나 숫자 구간 등 연속된 값의 범위를 기준으로 분할 (이력 데이터 보관·삭제에 최적)" },
      { major: "", minor: "List 파티셔닝 (목록)", desc: "국가 코드, 지역명, 부서 등 지정된 이산값 목록 집합을 기준으로 분할" },
      { major: "", minor: "Hash 파티셔닝 (해시)", desc: "파티션 키에 해시 함수를 적용한 결과값으로 데이터를 균등 분산 배치 (특정 구간 데이터 쏠림 방지)" },
      { major: "", minor: "Composite 파티셔닝 (복합)", desc: "Range-Hash, Range-List 등 2가지 분할 방식을 결합하여 대분류 후 세부 분할 수행" },
      { major: "분할 방향", minor: "수평 분할 (Horizontal)", desc: "동일 스키마를 유지한 채 행(Row) 단위로 파티션을 나누어 대용량 테이블 스캔 범위를 축소" },
      { major: "", minor: "수직 분할 (Vertical)", desc: "자주 쓰는 핵심 컬럼과 대형(LOB)/저빈도 컬럼을 열(Column) 단위로 분리하여 행 길이 및 I/O 절감" },
      { major: "최적화 원리", minor: "파티션 프루닝 (Pruning)", desc: "옵티마이저가 SQL 조건절(WHERE)의 분할 키를 분석해 필요한 파티션만 읽고 나머지 파티션은 스캔에서 아예 제외" }
    ]
  },
  {
    domain: "DB",
    topic: "샤딩 (Sharding)",
    mnemonic: "호·레·키·디 (범위·해시·디렉토리)",
    definition: "대용량 부하 분산 위해 독립 다중 DB에 수평분할 기법",
    keywords: [
      "물리적으로 독립된 다중 DB 서버에 수평 분할 저장",
      "분할 방식: 범위(Range) · 키/해시(Modular) · 디렉토리(Lookup)",
      "핵심 요소: Shard ID · Shard Key · 마스터(라우팅) 노드"
    ],
    diagram: "db_sharding.png",
    tableRows: [
      { major: "분할 방식\n(레·키·디)", minor: "범위 샤딩 (Range)", desc: "샤드 키의 구간(범위) 기준으로 샤드 배정 → 범위 조회에 유리하나 특정 샤드로 트래픽이 몰리는 핫스팟(쏠림) 주의" },
      { major: "", minor: "모듈러/해시 샤딩 (Hash)", desc: "샤드 키의 해시 함수 결과값으로 분산 → 부하 분산은 균등하나 범위 조회 시 여러 샤드를 방문해야 하며 노드 증설 시 재해싱 필요" },
      { major: "", minor: "디렉토리 샤딩 (Directory)", desc: "별도의 매핑(Lookup) 테이블을 두어 데이터가 저장된 샤드 위치를 조회 → 유연성이 높으나 디렉토리 서버가 단일 장애점(SPOF) 가능" },
      { major: "핵심 구성요소", minor: "Shard Key (샤드 키)", desc: "데이터를 어느 물리 샤드에 배치할지 결정하는 기준 컬럼/필드" },
      { major: "", minor: "Shard ID (샤드 식별자)", desc: "수평 분할된 데이터가 저장되는 개별 물리 데이터베이스 노드 식별자" },
      { major: "", minor: "라우팅(마스터) 노드", desc: "애플리케이션 질의의 샤드 키를 분석해 대상 샤드 DB로 라우팅하고 결과를 병합 반환하는 중개 계층" }
    ]
  },
  {
    domain: "DB",
    topic: "분산 데이터베이스와 투명성 (2PC)",
    mnemonic: "위·복·병·분·장·지 / 요·복·분·위",
    definition: "물리적 분산 DB를 논리적 단일 DB처럼 쓰는 아키텍처",
    keywords: [
      "투명성(위복병분장지): 위치 · 복제 · 병행 · 분할 · 장애 · 지역사상",
      "분산 적용방법(요복분위): 요약 · 복제 · 분할 · 위치 분산",
      "2PC (2단계 커밋): Prepare(준비) → Commit/Abort(결정)"
    ],
    diagram: `<img src="db_distdb.png" alt="분산DB 개념도"><img src="db_2pc.png" alt="2PC 개념도">`,
    tableRows: [
      { major: "분산 DB 투명성\n(위·복·병·분·장·지)", minor: "위치 투명성 (Location)", desc: "접근하려는 데이터의 물리적 저장 위치를 몰라도 논리적인 명칭만으로 접근 가능" },
      { major: "", minor: "복제 투명성 (Replication)", desc: "동일 데이터가 여러 노드에 복제되어 있는지 여부를 사용자가 의식할 필요 없음" },
      { major: "", minor: "병행 투명성 (Concurrency)", desc: "다수의 분산 트랜잭션이 동시에 수행되더라도 결과의 일관성이 유지됨" },
      { major: "", minor: "분할 투명성 (Fragmentation)", desc: "하나의 논리적 릴레이션이 여러 단편(Fragment)으로 분할 저장됨을 의식할 필요 없음" },
      { major: "", minor: "장애 투명성 (Failure)", desc: "특정 지역 노드나 통신 회선에 장애가 발생해도 트랜잭션의 원자성과 무결성 보장" },
      { major: "", minor: "지역사상 투명성 (Local Mapping)", desc: "각 지역 시스템의 로컬 DBMS와 물리적 명칭에 무관하게 접근 가능" },
      { major: "분산 적용 기법\n(요·복·분·위)", minor: "요약 분산 (Summarization)", desc: "지역 또는 서버별로 집계·요약된 데이터를 본사/중앙 노드에 합산 배치" },
      { major: "", minor: "복제 분산 (Replication)", desc: "동일 데이터의 복사본을 여러 원격 노드에 중복 배치하여 조회 성능 및 가용성 향상" },
      { major: "", minor: "분할 분산 (Fragmentation)", desc: "테이블을 수평 또는 수직 조각으로 나누어 서로 다른 물리 노드에 분산 배치" },
      { major: "", minor: "위치 분산 (Location)", desc: "동일 스키마를 유지하되 데이터가 발생·활용되는 지사/지역 위치별로 DB를 분리 배치" },
      { major: "2PC (2단계 커밋)", minor: "1단계: Prepare (준비)", desc: "조정자(Coordinator)가 모든 참여 노드에 커밋 가능 여부를 묻고 각 참여자가 WAL 기록 후 Yes/No 투표" },
      { major: "", minor: "2단계: Commit / Abort", desc: "전원 Yes면 Global Commit, 단 하나라도 No나 타임아웃이면 Global Abort를 전파하여 원자성 보장" }
    ]
  },
  {
    domain: "DB",
    topic: "NoSQL (BASE · 유형 · 모델링 패턴)",
    mnemonic: "BASE / 키·컬·도·그 / 도·쿼·패·기·후·선 / 비·통·조·아·인·복",
    definition: "스키마리스와 분산 확장성 제공하는 비관계형 데이터베이스",
    keywords: [
      "BASE 속성: Basically Available · Soft-state · Eventually Consistent",
      "4대 유형(키컬도그): Key-Value · Column-Family · Document · Graph",
      "모델링 절차(도쿼패기후선) & 패턴(비통조 아인복)"
    ],
    diagram: "db_nosql_types.png",
    tableRows: [
      { major: "BASE 속성", minor: "Basically Available (기본 가용성)", desc: "일부 노드 장애 시에도 시스템 전체가 멈추지 않고 언제나 응답을 반환하는 가용성 최우선 특성" },
      { major: "", minor: "Soft-state (유연 상태)", desc: "외부의 추가 입력이 없더라도 분산 복제 전파 과정에 따라 노드의 상태가 시간에 따라 변할 수 있음" },
      { major: "", minor: "Eventually Consistent (최종 일관성)", desc: "일시적인 불일치를 허용하되 일정 시간이 지나면 모든 복제본이 결국 동일한 값으로 수렴" },
      { major: "4대 유형\n(키·컬·도·그)", minor: "Key-Value Store", desc: "고유 Key와 Value 쌍의 단순 해시 구조로 초고속 조회 지원 (Redis, DynamoDB)" },
      { major: "", minor: "Column-Family Store", desc: "로우 키 아래 대용량 컬럼 묶음(Column Family)을 분산 저장해 시계열·대량 쓰기에 강점 (HBase, Cassandra)" },
      { major: "", minor: "Document Store", desc: "JSON, BSON, XML 등 계층적 문서(Document) 트리 구조로 저장하고 내부 필드 질의 지원 (MongoDB)" },
      { major: "", minor: "Graph Store", desc: "노드(Node), 엣지(Edge), 속성으로 개체 간 관계망과 최단경로·추천을 고속 탐색 (Neo4j)" },
      { major: "모델링 패턴\n(비·통·조·아·인·복)", minor: "비정규화 (Denormalization)", desc: "읽기 시 조인을 제거하기 위해 동일 데이터를 여러 문서/컬럼에 중복 저장" },
      { major: "", minor: "테이블 통합 (Aggregation)", desc: "중첩 문서(Embedded Document)나 유연한 스키마를 활용해 연관 엔터티를 단일 레코드로 병합" },
      { major: "", minor: "애플리케이션 조인 (App Join)", desc: "DBMS 차원의 조인 연산 대신 애플리케이션 계층에서 다중 조회 결과를 결합" },
      { major: "", minor: "원자적 집계 (Atomic Aggregation)", desc: "트랜잭션 보장을 위해 함께 갱신되어야 하는 데이터들을 단일 문서/행 단위로 묶어 배치" },
      { major: "", minor: "인덱스 테이블 (Index Table)", desc: "기본키(Row Key) 외의 조회 조건을 빠르게 검색하기 위해 별도의 역색인 매핑 테이블을 생성" },
      { major: "", minor: "복합 키 (Composite Key)", desc: "구분자(Delimiter)를 사용해 여러 속성을 하나의 키 문자열로 결합하여 범위·계층 검색 지원" }
    ]
  },
  {
    domain: "DB",
    topic: "CAP 이론과 PACELC 이론",
    mnemonic: "C·A·P / PA·EL · PA·EC · PC·EL · PC·EC",
    definition: "분산 DB 장애·정상 시 일관성·가용성·지연 설명 이론",
    keywords: [
      "CAP: 일관성(C) · 가용성(A) · 분할내성(P) (네트워크 분할 시 C↔A 상충)",
      "PACELC: Partition 시 A↔C 선택, Else(정상) 시 Latency(L)↔Consistency(C) 선택",
      "CP(MongoDB, HBase) vs AP(Cassandra, DynamoDB)"
    ],
    diagram: `<img src="db_cap.png" alt="CAP 이론"><img src="db_pacelc.png" alt="PACELC 이론">`,
    tableRows: [
      { major: "CAP 이론\n(C · A · P)", minor: "일관성 (Consistency)", desc: "모든 노드가 같은 시점에 동일한 최신 쓰기 데이터를 조회할 수 있어야 하는 속성 (선형화 가능성)" },
      { major: "", minor: "가용성 (Availability)", desc: "일부 노드에 장애가 나더라도 정상 노드는 모든 요청에 대해 에러 없이 유효한 응답을 반환해야 하는 속성" },
      { major: "", minor: "분할 내성 (Partition Tolerance)", desc: "노드 간 네트워크가 단절되어 메시지가 유실되더라도 시스템이 계속 동작해야 하는 속성 (네트워크 분할 시 C와 A 동시 만족 불가)" },
      { major: "PACELC 이론\n(CAP 한계 보완)", minor: "If P (네트워크 분할 시)", desc: "네트워크 분할(Partition) 발생 시 가용성(A)과 일관성(C) 중 무엇을 우선할지 선택" },
      { major: "", minor: "Else (정상 동작 시)", desc: "네트워크가 정상(Else)일 때도 복제 동기화에 따른 지연시간(Latency, L)과 일관성(Consistency, C) 간 트레이드오프 선택" },
      { major: "DBMS 분류", minor: "PA/EL 유형", desc: "장애 시 가용성(A), 정상 시 저지연(L) 우선 (DynamoDB, Cassandra)" },
      { major: "", minor: "PC/EC 유형", desc: "장애 시 일관성(C), 정상 시에도 일관성(C) 우선 (HBase, Google Spanner, 전통 RDBMS)" },
      { major: "", minor: "PA/EC 유형", desc: "장애 시에는 가용성(A)을 택하고, 정상 통신 시에는 일관성(C)을 우선 보장 (MongoDB 등 설정별)" },
      { major: "", minor: "PC/EL 유형", desc: "장애 시에는 일관성(C)을 택하고, 정상 통신 시에는 빠른 응답 지연시간(L)을 우선 보장 (PNUTS 등)" }
    ]
  },
  {
    domain: "DB",
    topic: "벡터 데이터베이스 (Vector Database: HNSW · IVF)",
    mnemonic: "임·유 / HNSW(계층그래프) · IVF(클러스터역색인)",
    definition: "의미 유사도 검색 위해 고차원 임베딩 저장·탐색 DB",
    keywords: [
      "고차원 벡터 임베딩 & 근사 최근접 이웃(ANN) 검색",
      "HNSW (계층적 스몰월드 그래프 기반 탐색)",
      "IVF (K-Means 클러스터링 기반 역파일 색인)"
    ],
    diagram: `<img src="db_vectordb.png" alt="벡터DB 구성도"><img src="db_hnsw.png" alt="HNSW 개념도"><img src="db_ivf.png" alt="IVF 개념도">`,
    tableRows: [
      { major: "핵심 아키텍처", minor: "벡터 임베딩 (Embedding)", desc: "텍스트·이미지·오디오 등 비정형 데이터를 딥러닝 임베딩 모델로 고차원 실수 배열(벡터)로 변환해 저장" },
      { major: "", minor: "유사도 거리 측정", desc: "코사인 유사도(Cosine Similarity), 유클리드 거리(L2), 내적(Inner Product)으로 벡터 간 문맥 유사도 계산" },
      { major: "", minor: "근사 최근접 이웃 (ANN)", desc: "전수 조사(KNN)의 연산 병목을 해결하기 위해 약간의 정확도를 타협하고 탐색 속도를 비약적으로 높이는 색인 기법" },
      { major: "대표 색인 기법", minor: "HNSW (계층적 그래프)", desc: "상위 희소 계층에서 큰 보폭으로 진입점을 찾은 뒤 하위 밀집 계층(Layer 0)으로 내려오며 탐색하는 다계층 스몰월드 그래프" },
      { major: "", minor: "IVF (역파일 클러스터 색인)", desc: "K-Means로 벡터 공간을 보로노이 셀(클러스터 중심점)로 분할하고 질의와 가까운 클러스터 버킷만 탐색" },
      { major: "", minor: "PQ (Product Quantization)", desc: "고차원 벡터를 여러 저차원 서브벡터로 쪼개어 코드북 대표값으로 양자화함으로써 메모리 사용량을 대폭 압축" }
    ]
  },
  {
    domain: "DB",
    topic: "하이브리드 검색 (Hybrid Search & RRF)",
    mnemonic: "어·의·결·리 (BM25 + Dense + RRF)",
    definition: "정확도·재현율 향상 위해 키워드와 벡터 결합한 검색",
    keywords: [
      "어휘 검색(Sparse: BM25/역색인) + 의미 검색(Dense: 벡터/ANN)",
      "점수 융합(Rank Fusion): RRF(순위 역수 합산) · 가중 선형 결합",
      "2단계 파이프라인: Hybrid Retrieval → Cross-Encoder Reranker"
    ],
    diagram: "db_hybrid.png",
    tableRows: [
      { major: "병렬 검색 결합\n(어·의 결합)", minor: "어휘 검색 (Sparse: BM25)", desc: "역색인 기반으로 고유명사·법령조항·모델번호·에러코드의 정확한 키워드 매칭에 강점 (동의어·문맥 파악은 한계)" },
      { major: "", minor: "의미 검색 (Dense: Vector)", desc: "밀집 임베딩 벡터 기반으로 표현이 달라도 문맥과 의도가 유사한 문서를 찾아내어 재현율(Recall) 향상" },
      { major: "점수 융합 및 정제\n(결·리)", minor: "RRF (상호 순위 융합)", desc: "스케일이 다른 두 검색 점수를 정규화 없이 오직 순위(Rank)의 역수 합산 공식 ∑ 1/(k + rank)로 강건하게 통합" },
      { major: "", minor: "가중 선형 결합", desc: "Min-Max 또는 Z-Score 정규화 후 가중치 α를 곱해 α·Dense + (1-α)·BM25 점수를 합산" },
      { major: "", minor: "Cross-Encoder 리랭커", desc: "1차 하이브리드 검색 상위 후보군(Top-K)을 질의와 문서 쌍으로 정밀 교차 인코딩해 최종 순위를 재정렬" }
    ]
  },
  {
    domain: "DB",
    topic: "공간 데이터베이스 (Spatial DB)",
    mnemonic: "위·집·거·면 (Contains·Intersects·Union)",
    definition: "점·선·다각형 공간 객체 저장 및 위상·거리 연산 DB",
    keywords: [
      "공간 객체: Point(점) · LineString(선) · Polygon(다각형)",
      "공간 연산자: 위상(Contains·Intersects·Touches·Disjoint) · 집합(Union·Intersection) · 거리/면적"
    ],
    diagram: "db_spatial.png",
    tableRows: [
      { major: "위상 연산자\n(Topological)", minor: "Contains (포함)", desc: "기하 객체 A가 기하 객체 B를 내부에 완전히 포함하는지 여부를 판별" },
      { major: "", minor: "Intersects (교차)", desc: "두 공간 객체가 한 점이라도 겹치거나 교차하는 영역이 존재하는지 판별" },
      { major: "", minor: "Touches (접촉)", desc: "두 공간 객체의 내부는 겹치지 않고 오직 경계선(Boundary)에서만 맞닿아 있는지 판별" },
      { major: "", minor: "Disjoint (분리)", desc: "두 공간 객체가 접점이나 겹침 없이 공간적으로 완전히 떨어져 있는지 판별" },
      { major: "집합 연산자", minor: "Union (합집합)", desc: "두 공간 객체의 영역을 하나로 합친 새로운 기하 객체를 반환" },
      { major: "", minor: "Intersection (교집합)", desc: "두 공간 객체가 서로 공통으로 겹치는 교집합 영역만 추출하여 반환" },
      { major: "", minor: "Difference (차집합)", desc: "객체 A 영역에서 객체 B와 겹치는 영역을 뺀 나머지 기하 객체를 반환" },
      { major: "거리·기하 연산", minor: "Distance (최단 거리)", desc: "두 공간 객체 사이의 최단 거리를 계산 (반경 N km 이내 탐색 등에 활용)" },
      { major: "", minor: "Area (면적 계산)", desc: "다각형(Polygon) 공간 객체가 차지하는 내부 영역의 넓이를 계산" },
      { major: "", minor: "Length (길이 계산)", desc: "선형 객체(LineString)의 총 길이나 다각형 외곽선 둘레(Perimeter)를 계산" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터 레이크와 레이크하우스",
    mnemonic: "브·실·골 (메달리온) / Delta·Iceberg·Hudi",
    definition: "원천 데이터 저비용 저장과 ACID 결합한 아키텍처",
    keywords: [
      "데이터 레이크: Schema-on-Read · ELT · 오브젝트 스토리지(S3)",
      "레이크하우스: 레이크(저비용·유연성) + DW(ACID·Time Travel·거버넌스)",
      "메달리온 아키텍처: 브론즈(원천) → 실버(정제/SSOT) → 골드(비즈니스 집계)"
    ],
    diagram: `<img src="db_datalake1.png" alt="데이터 레이크 개념도"><img src="db_datalake2.png" alt="DW vs 데이터 레이크 비교">`,
    tableRows: [
      { major: "아키텍처 비교", minor: "데이터 웨어하우스 (DW)", desc: "저장 시 스키마 강제(Schema-on-Write), ETL 전처리, 정형 데이터 중심의 BI 분석 특화 저장소" },
      { major: "", minor: "데이터 레이크 (Data Lake)", desc: "조회 시 스키마 부여(Schema-on-Read), ELT, 정형·반정형·비정형 원본을 저비용 오브젝트 스토리지에 보존" },
      { major: "", minor: "데이터 레이크하우스", desc: "오브젝트 스토리지 위에 오픈 테이블 포맷(Delta Lake, Iceberg, Hudi)을 얹어 ACID 트랜잭션과 타임 트래블을 지원" },
      { major: "메달리온 아키텍처\n(브·실·골)", minor: "브론즈 (Bronze 계층)", desc: "외부 원천 시스템에서 수집된 Raw 데이터를 스키마 변형 없이 있는 그대로 보존하는 영역" },
      { major: "", minor: "실버 (Silver 계층)", desc: "결측치·중복 제거, 데이터 품질 검증 및 표준화를 거쳐 전사 단일 진실 공급원(SSOT)을 구성하는 정제 영역" },
      { major: "", minor: "골드 (Gold 계층)", desc: "부서별 BI 리포팅, KPI 대시보드, AI 피처 스토어 활용을 위해 비즈니스 목적에 맞게 집계·요약한 영역" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터 늪 (Data Swamp)과 데이터 메시",
    mnemonic: "카·품·리·거 / 도·제·셀·거",
    definition: "거버넌스 부재로 방치된 레이크와 도메인 분산 관리 체계",
    keywords: [
      "데이터 늪(Data Swamp): 메타데이터·정제·계보·거버넌스 부재",
      "해결책(카품리거): 데이터 카탈로그 · 품질관리(DQM) · 리니지 · 거버넌스",
      "데이터 메시 4원칙(도제셀거): 도메인 소유권 · 제품으로서 데이터 · 셀프서비스 플랫폼 · 연합 거버넌스"
    ],
    diagram: `<img src="db_dataswamp.png" alt="데이터 늪 개념도"><img src="db_datamesh.png" alt="데이터 메시 아키텍처">`,
    tableRows: [
      { major: "데이터 늪 해결책\n(카·품·리·거)", minor: "데이터 카탈로그 (메타데이터)", desc: "기술·비즈니스·운영 메타데이터를 자동 수집·태깅하여 전사 데이터 검색 및 탐색 포털 구축" },
      { major: "", minor: "데이터 품질관리 (DQM)", desc: "수집·정제 파이프라인에 스키마 검증, 이상치 탐지, 프로파일링 규칙을 자동화하여 쓰레기 데이터 유입 차단" },
      { major: "", minor: "데이터 리니지 (계보 추적)", desc: "데이터의 원천 출처부터 변환·이동·집계 전 과정을 시각적으로 추적하여 신뢰성과 변경 영향도 확보" },
      { major: "", minor: "데이터 거버넌스", desc: "데이터 스튜어드 지정, 접근권한 통제, 보존주기(TTL) 정책으로 방치 데이터를 체계적 관리" },
      { major: "데이터 메시 4원칙\n(도·제·셀·거)", minor: "도메인 중심 소유권", desc: "중앙 IT 조직이 아닌 데이터를 가장 잘 아는 각 비즈니스 도메인 팀이 데이터의 소유와 품질을 직접 책임" },
      { major: "", minor: "제품으로서의 데이터", desc: "타 도메인 소비자가 쉽게 발견·이해·신뢰·활용할 수 있도록 데이터를 완결된 제품(Data as a Product)으로 제공" },
      { major: "", minor: "셀프서비스 데이터 플랫폼", desc: "도메인 팀이 인프라 구축 부담 없이 자율적으로 데이터 파이프라인을 생성·운영할 수 있는 공통 플랫폼 제공" },
      { major: "", minor: "연합형 전산 거버넌스", desc: "도메인 자율성을 존중하되 전사 표준·보안·상호운용성 정책은 연합 거버넌스 합의를 통해 자동 집행" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터 거버넌스 (Data Governance)",
    mnemonic: "원·조·프 / 표·구·흐·품·베·보",
    definition: "전사 데이터 가치 창출 위해 원칙·조직·절차 관리 체계",
    keywords: [
      "구성 3요소(원조프): 원칙(Principle) · 조직(Organization) · 프로세스(Process)",
      "관리 영역(표구흐품베보): 표준 · 구조 · 흐름 · 품질 · 데이터베이스 · 보안",
      "국제표준: ISO/IEC 38505, TTAK.KO-10.0555"
    ],
    diagram: "db_governance.png",
    tableRows: [
      { major: "핵심 3요소\n(원·조·프)", minor: "원칙 (Principle)", desc: "전사 데이터를 유지·관리하기 위한 지침과 규정 (보안 지침, 품질 기준, 변경관리 정책)" },
      { major: "", minor: "조직 (Organization)", desc: "데이터를 운영·관리하는 역할과 책임 체계 (CDO, 데이터 거버넌스 위원회, 데이터 스튜어드, DA, DBA)" },
      { major: "", minor: "프로세스 (Process)", desc: "데이터 표준화, 품질 진단·개선, 메타데이터 현행화 등 관리 활동의 작업 절차 및 모니터링 체계" },
      { major: "관리 6대 영역\n(표·구·흐·품·베·보)", minor: "데이터 표준 관리", desc: "전사 공통 표준단어, 표준용어, 표준도메인, 표준코드 정의 및 준수 통제" },
      { major: "", minor: "데이터 구조 관리", desc: "전사 데이터 아키텍처(EA/DA), 주제영역, 개념·논리·물리 데이터 모델의 일관성 관리" },
      { major: "", minor: "데이터 흐름 관리", desc: "시스템 간 데이터 연계(EAI/CDC/ETL) 및 데이터 계보(Lineage) 추적 관리" },
      { major: "", minor: "데이터 품질 관리", desc: "데이터 값과 구조의 정합성 프로파일링, 업무규칙(BR) 검증, 오류 데이터 개선 활동" },
      { major: "", minor: "데이터베이스 관리", desc: "물리 DB 생성·운영, 공간 관리, 백업·회복 및 성능 튜닝" },
      { major: "", minor: "데이터 보안 관리", desc: "접근 권한 통제, 개인정보 암호화·비식별화, 감사 로그 및 법규 컴플라이언스 준수" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터 품질관리 (DQM)와 데이터 표준화",
    mnemonic: "데·구·프 / 용·단·도·코 / 명·정·형·규",
    definition: "데이터 정합성 위해 값·구조·프로세스 진단·개선 체계",
    keywords: [
      "DQM 관리 대상(데구프): 데이터 값 · 데이터 구조 · 데이터 관리 프로세스",
      "데이터 표준화 요소(용단도코): 표준용어 · 표준단어 · 표준도메인 · 표준코드",
      "표준화 원칙(명정형규): 명칭 · 정의 · 형식 · 규칙"
    ],
    diagram: `<img src="db_dqm.png" alt="데이터 품질관리 프레임워크"><img src="db_standard.png" alt="데이터 표준화 구성요소"><img src="db_mdm.png" alt="MDM 구성도">`,
    tableRows: [
      { major: "DQM 관리 대상\n(데·구·프)", minor: "데이터 값 (Value)", desc: "결측·오류·중복·불일치 등 실제 저장된 데이터 내용의 정확성·완전성·유효성 관리" },
      { major: "", minor: "데이터 구조 (Structure)", desc: "데이터 모델, 엔터티·속성·식별자·관계 및 무결성 제약조건 설계의 적정성 관리" },
      { major: "", minor: "관리 프로세스 (Process)", desc: "데이터 생성·변경·유통·폐기 전 과정의 표준 준수와 책임·절차 관리" },
      { major: "데이터 표준화\n(용·단·도·코)", minor: "표준 용어 (Term)", desc: "업무에서 사용하는 데이터 항목(컬럼/속성)의 전사 공통 한글명·영문명과 업무적 정의" },
      { major: "", minor: "표준 단어 (Word)", desc: "표준 용어를 조합하기 위한 최소 의미 단위의 단어 사전과 영문 정식명·약어 정의" },
      { major: "", minor: "표준 도메인 (Domain)", desc: "성격이 유사한 데이터 항목들을 그룹화하여 데이터 타입, 길이, 소수점, 허용 범위를 일괄 지정" },
      { major: "", minor: "표준 코드 (Code)", desc: "여러 시스템에서 공통 참조하는 분류 코드값과 코드 의미를 단일 체계로 통합 정의" },
      { major: "표준화 4원칙\n(명·정·형·규)", minor: "명칭 (Name)", desc: "동일한 데이터는 전사적으로 동일한 한글·영문 명칭을 사용하도록 통일 (동의어·동음이의어 배제)" },
      { major: "", minor: "정의 (Definition)", desc: "누구나 동일하게 이해할 수 있도록 데이터 항목의 업무적 의미와 범위를 명확히 기술" },
      { major: "", minor: "형식 (Format)", desc: "데이터 타입, 길이, 소수점 자리수, 표현 포맷을 표준 도메인 기준으로 일관되게 지정" },
      { major: "", minor: "규칙 (Rule)", desc: "허용 가능한 값의 범위, 필수 입력 여부(NOT NULL), 기본값, 참조 코드 규칙을 통일" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터 품질인증 (DQ 인증)",
    mnemonic: "내·관 (내용 Class A·B·C / 관리체계 Lv2~5)",
    definition: "데이터산업법 근거 데이터 내용·관리체계 심사·보증 제도",
    keywords: [
      "데이터산업법 제20조 기반 국가 공인 인증",
      "데이터 내용 인증(1년): 정형·비정형 / Simple·Normal·Complex / Class A·B·C",
      "데이터 관리체계 인증(3년): ISO/IEC 33020 기반 / 성숙도 Lv2 ~ Lv5"
    ],
    diagram: "db_dq_cert.png",
    tableRows: [
      { major: "데이터 내용 인증", minor: "인증 대상 및 유형", desc: "정형 데이터 및 비정형(텍스트·이미지 등) 데이터 대상 (구조 복잡도에 따라 Simple, Normal, Complex 분류)" },
      { major: "", minor: "심사 기준 및 유효기간", desc: "ISO/IEC 25024 및 AI 데이터 품질 표준(ISO/IEC 5259-2) 기반 정합성 심사, 유효기간 1년" },
      { major: "", minor: "인증 등급 (Class A·B·C)", desc: "데이터 정합률 측정 결과에 따라 Class A(최우수), Class B(우수), Class C(보통) 등급 부여" },
      { major: "데이터 관리체계 인증", minor: "심사 기준 및 유효기간", desc: "ISO/IEC 33020 기반 데이터 프로젝트 관리·측정·프로세스 개선 심사, 유효기간 3년" },
      { major: "", minor: "성숙도 등급 (Level 2~5)", desc: "Level 2(실무적 관리) → Level 3(표준 프로세스 수행) → Level 4(정량적 관리) → Level 5(지속적 최적화)" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터 가치평가 (Data Valuation)",
    mnemonic: "시·수·원 (시장·수익·원가) / 품·권·시·경",
    definition: "데이터 자산화 위해 시장·수익·원가로 가치를 산정 기법",
    keywords: [
      "데이터산업법 제14조 근거 무형자산 가치 산정",
      "3대 평가 방법론(시수원): 시장접근법 · 수익접근법 · 원가접근법",
      "4대 평가 요인(품권시경): 데이터 특성(품질) · 법적특성(권리) · 시장환경 · 사업성(경제)"
    ],
    diagram: "db_valuation.png",
    tableRows: [
      { major: "4대 평가 요인\n(품·권·시·경)", minor: "데이터 특성 (품질)", desc: "데이터의 정확성, 완전성, 최신성(갱신주기), 규모 및 결합 활용 유용성 평가" },
      { major: "", minor: "법적 특성 (권리)", desc: "데이터 소유권, 지식재산권, 라이선스 범위, 개인정보 적법성 등 권리 안정성 평가" },
      { major: "", minor: "시장 환경", desc: "데이터가 속한 산업 분야의 시장 규모, 거래 활성화 수준, 데이터의 희소성 및 대체 가능성 평가" },
      { major: "", minor: "사업성 역량 (경제성)", desc: "데이터를 활용한 비즈니스 모델의 매출 기여도, 원가 절감 효과, 경제적 수명 평가" },
      { major: "3대 평가 기법\n(시·수·원)", minor: "시장접근법 (Market)", desc: "유사한 데이터의 실제 시장 거래사례가 존재할 때 비교 지표를 보정하여 가치를 산정" },
      { major: "", minor: "수익접근법 (Income)", desc: "해당 데이터를 활용해 미래에 창출할 것으로 기대되는 현금흐름(수익)을 현재가치로 할인하여 산정" },
      { major: "", minor: "원가접근법 (Cost)", desc: "거래사례나 미래 수익 추정이 어려울 때, 동일 데이터를 재생산·대체하는 데 투입된 원가를 기준으로 산정" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터 스페이스와 데이터 주권",
    mnemonic: "주·분·연 / IDS-RAM · DID · 커넥터",
    definition: "데이터 주권 보장하며 주체 간 안전 공유하는 분산 체계",
    keywords: [
      "데이터 스페이스 3특징(주분연): 데이터 주권 보장 · 분산형 아키텍처 · 연합 거버넌스",
      "핵심 기술: IDS-RAM · IDS Connector · Broker · DID/VC · DAPS",
      "데이터 주권 & 소버린 AI (데이터 레지던시 · PET · 차분프라이버시)"
    ],
    diagram: "db_dataspace.png",
    tableRows: [
      { major: "데이터 스페이스\n3대 특징 (주·분·연)", minor: "데이터 주권 보장", desc: "데이터 제공자가 자기 데이터의 접근권한, 사용목적, 유효기간, 재배포 금지 정책을 직접 통제" },
      { major: "", minor: "분산형 아키텍처", desc: "원본 데이터를 중앙 저장소에 복제·집중시키지 않고 각 참여자의 공간에 둔 채 P2P 커넥터로 안전 연동" },
      { major: "", minor: "연합 거버넌스", desc: "참여 기업·기관 간 공통 데이터 표준, 신원 인증, 스마트 계약 기반 신뢰 생태계(GAIA-X, Catena-X) 구축" },
      { major: "핵심 기술 요소", minor: "IDS Connector (커넥터)", desc: "참여자 경계에서 데이터를 송수신하고 데이터 사용 정책(Usage Control)을 강제 실행하는 게이트웨이" },
      { major: "", minor: "Metadata Broker (중개자)", desc: "원본 데이터는 보관하지 않고 참여자들이 등록한 데이터 카탈로그 검색 및 매칭만 중개" },
      { major: "", minor: "DAPS & DID / VC", desc: "탈중앙 신원증명(DID/VC)과 동적 속성 프로비저닝(DAPS)을 통해 참여자 및 커넥터의 신뢰성 인증" },
      { major: "", minor: "IDS-RAM 참조 아키텍처", desc: "비즈니스 · 기능 · 프로세스 · 정보 · 시스템 5계층과 보안·거버넌스 3관점으로 구성된 국제 표준 모델" }
    ]
  },
  {
    domain: "DB",
    topic: "개인정보 안심구역과 데이터 안심구역",
    mnemonic: "개·보·위(가명정보) vs 과·기·부(미개방데이터)",
    definition: "민감·미개방 데이터를 안전 보안 환경에서 분석하는 제도",
    keywords: [
      "개인정보 안심구역: 개인정보보호위원회 지정 · 가명/민감정보 · 폐쇄망",
      "데이터 안심구역: 과기정통부 지정(데이터산업법) · 미개방 공공/민간 데이터"
    ],
    diagram: `<img src="db_safezone1.png" alt="데이터 안심구역 개념도"><img src="db_safezone2.png" alt="데이터 안심구역 기능 구성도">`,
    tableRows: [
      { major: "개인정보 안심구역", minor: "운영 근거 및 기관", desc: "개인정보보호위원회가 지정·운영하며 가명정보 처리·결합 및 유연한 개인정보 실증 환경을 지원" },
      { major: "", minor: "대상 데이터 및 보안", desc: "가명정보·민감 개인정보를 대상으로 물리적·논리적 망분리(폐쇄망), 다중 인증, PET 기술 및 반출 심사 적용" },
      { major: "데이터 안심구역", minor: "운영 근거 및 기관", desc: "데이터산업법( 및 데이터기본법)에 의거 과학기술정보통신부 등이 지정하는 미개방 데이터 안전 분석 공간" },
      { major: "", minor: "핵심 제공 기능", desc: "미개방 데이터 안전 분석환경 제공, AI 분석도구·GPU 자원 지원, 이용자 반입자료와의 연계 및 분석결과 반출 지원" },
      { major: "", minor: "기술적 지정요건", desc: "보안대책이 구비된 물리적 시설·공간 확보, 데이터 분석 시스템 구축 및 정보보호 대책 수립·시행" },
      { major: "", minor: "운영적 지정요건", desc: "운영책임자·보안책임자 선임을 포함한 4인 이상 전담 조직 구성 및 운영계획·데이터 반출입 통제 정책 수립" }
    ]
  },
  {
    domain: "DB",
    topic: "합성데이터 (Synthetic Data)",
    mnemonic: "통·딥·물 / 충·다·보 (충실도·다양성·보안성)",
    definition: "개인정보 보호와 불균형 해소 위해 알고리즘 생성 데이터",
    keywords: [
      "생성 기법(통딥물): 통계/규칙(SMOTE) · 딥러닝(GAN/VAE/Diffusion) · 물리 시뮬레이션(디지털트윈)",
      "품질 평가 3기준(충다보): 충실도(Fidelity) · 다양성(Diversity) · 보안성(Privacy)",
      "한계점: 모델 붕괴(Model Collapse) · 원천 편향 증폭"
    ],
    diagram: `<img src="db_synthetic1.png" alt="합성데이터 개념도"><img src="db_synthetic2.png" alt="합성데이터 생성 메커니즘">`,
    tableRows: [
      { major: "생성 메커니즘\n(통·딥·물)", minor: "통계 · 규칙 기반", desc: "몬테카를로 시뮬레이션, 베이지안 네트워크, SMOTE(소수 클래스 KNN 보간 오버샘플링) 등 분포 기반 생성" },
      { major: "", minor: "딥러닝 생성형 모델", desc: "GAN(CTGAN), VAE, Diffusion 모델, LLM 등을 활용해 고차원 정형·비정형 데이터의 잠재 분포 학습 후 생성" },
      { major: "", minor: "물리 시뮬레이션 기반", desc: "3D 게임엔진·디지털 트윈 가상환경에서 자율주행 악천후·사고나 제조 결함 등 희귀 엣지 케이스 생성" },
      { major: "품질 평가 3기준\n(충·다·보)", minor: "충실도 (Fidelity)", desc: "원천 데이터의 통계적 분포·상관관계·속성 특성을 얼마나 사실적으로 모사했는지 평가 (KS-검정, FID)" },
      { major: "", minor: "다양성 (Diversity)", desc: "특정 패턴에만 치우치는 모드 붕괴(Mode Collapse) 없이 원천 데이터 분포 공간 전체를 고르게 포괄하는지 검증" },
      { major: "", minor: "보안성 (Privacy)", desc: "원본 데이터 복제 여부(DCR)와 멤버십 추론 공격 방어력을 검증하고 차분 프라이버시(DP)로 재식별 차단" },
      { major: "한계 및 과제", minor: "모델 붕괴 (Model Collapse)", desc: "합성데이터로만 반복 재학습할 경우 희귀 분포 꼬리가 소실되고 생성 품질이 점진적으로 퇴화하는 현상" },
      { major: "", minor: "원천 편향 (Bias) 증폭", desc: "원본 학습 데이터에 내재된 통계적 편향이 합성 생성 과정에서 오히려 확대 재생산될 위험" }
    ]
  },
  {
    domain: "DB",
    topic: "데이터 마이닝 (정형·비정형 · 텍스트 · 오피니언)",
    mnemonic: "수·저·처·분·시 / 비·데·준·모·평·전 / 표·분·수·모·평",
    definition: "대규모 데이터에서 숨겨진 패턴과 유용한 지식 도출 기법",
    keywords: [
      "절차: 수·저·처·분·시 / KDD(선택→전처리→변환→마이닝→평가)",
      "방법론: CRISP-DM(비데준모평전) · SEMMA(표분수모평)",
      "텍스트 마이닝(토픽·지식 추출, TF-IDF·LDA) vs 오피니언 마이닝(주관적 감성·호불호, ABSA)"
    ],
    diagram: "db_mining.png",
    tableRows: [
      { major: "표준 방법론", minor: "KDD 프로세스", desc: "데이터 선택(Selection) → 전처리(Preprocessing) → 변환(Transformation) → 데이터 마이닝 → 해석/평가" },
      { major: "", minor: "CRISP-DM (비·데·준·모·평·전)", desc: "비즈니스 이해 → 데이터 이해 → 데이터 준비 → 모델링 → 평가 → 전개 (6단계 순환형 표준 방법론)" },
      { major: "", minor: "SEMMA (표·분·수·모·평)", desc: "Sample(표본추출) → Explore(탐색) → Modify(변형) → Model(모델링) → Assess(검증/평가) (SAS 주도 통계 중심)" },
      { major: "데이터 유형별", minor: "정형 데이터 마이닝", desc: "RDBMS/DW 정형 테이블을 대상으로 분류(의사결정나무·SVM), 군집(K-Means), 연관(Apriori), 회귀 분석 수행" },
      { major: "", minor: "비정형 데이터 마이닝", desc: "텍스트·웹·SNS·멀티미디어를 토큰화·임베딩 변환하여 숨겨진 문맥 패턴과 관계를 추출" },
      { major: "특화 기법 비교", minor: "텍스트 마이닝 (Text)", desc: "형태소 분석, TF-IDF, LDA 토픽 모델링, 개체명 인식(NER)을 통해 비정형 문서에서 객관적 주제와 사실 지식 추출" },
      { major: "", minor: "오피니언 마이닝 (Opinion)", desc: "리뷰·SNS·VoC 텍스트에서 감성사전 및 속성 기반 감성분석(ABSA)으로 주관적 호불호(긍정·부정·중립) 평판 정량화" }
    ]
  },
  {
    domain: "DB",
    topic: "연관규칙 분석 (Association Analysis)",
    mnemonic: "지·신·향 (P(A∩B) · P(B|A) · Lift)",
    definition: "항목 간 동시 발생 관계를 지·신·향으로 분석하는 기법",
    keywords: [
      "장바구니 분석 (Market Basket Analysis)",
      "지지도(Support) · 신뢰도(Confidence) · 향상도(Lift)",
      "Apriori (후보군 가지치기) · FP-Growth (FP-Tree 기반)"
    ],
    diagram: "db_assoc.png",
    tableRows: [
      { major: "3대 평가 지표\n(지·신·향)", minor: "지지도 (Support)", desc: "전체 거래 중에서 항목 A와 항목 B가 동시에 포함된 거래의 비율: P(A ∩ B)" },
      { major: "", minor: "신뢰도 (Confidence)", desc: "항목 A를 포함한 거래 중에서 항목 B도 함께 포함될 조건부 확률: P(A ∩ B) / P(A) = P(B | A)" },
      { major: "", minor: "향상도 (Lift)", desc: "A와 B가 독립일 때 대비 두 항목이 함께 나타나는 비율: P(A ∩ B) / (P(A) × P(B)) (Lift > 1: 양의 상관)" },
      { major: "대표 알고리즘", minor: "Apriori 알고리즘", desc: "최소 지지도(Min Support)를 만족하는 빈발 항목집합만 확장(가지치기)하나, 후보군 생성 및 반복 DB 스캔 부담 발생" },
      { major: "", minor: "FP-Growth 알고리즘", desc: "DB를 단 2회만 스캔하여 빈발 패턴 트리(FP-Tree)에 압축 저장한 뒤 후보 항목집합 생성 없이 고속 마이닝" }
    ]
  },
  {
    domain: "DB",
    topic: "군집분석 (Cluster Analysis)",
    mnemonic: "분·계·밀 (분할중심 · 계층적 · 밀도기반)",
    definition: "레이블 없는 데이터 유사성을 측정해 그룹으로 묶는 기법",
    keywords: [
      "비지도학습 (내적 유사도 극대화 · 외적 유사도 극소화)",
      "분할중심(K-Means · K-Medoids)",
      "계층적 군집(병합형 · 분할형) & 밀도기반(DBSCAN · DENCLUE)"
    ],
    diagram: "db_clustering.png",
    tableRows: [
      { major: "분할 중심 군집\n(분)", minor: "K-Means 군집화", desc: "사전 지정한 K개 군집의 평균(Centroid) 중심점을 반복 갱신 (속도가 빠르고 구형 군집에 적합하나 이상치에 민감)" },
      { major: "", minor: "K-Medoids (PAM · CLARA)", desc: "평균값 대신 군집 내 실제 존재하는 대표 객체(Medoid)를 중심으로 삼아 이상치(Outlier)와 노이즈에 강건" },
      { major: "계층적 군집\n(계)", minor: "응집형 (Agglomerative)", desc: "각 데이터를 개별 군집으로 시작해 가장 가까운 군집끼리 순차 병합하며 덴드로그램(Dendrogram) 형성 (Bottom-Up)" },
      { major: "", minor: "분할형 (Divisive)", desc: "전체 데이터를 하나의 큰 군집으로 시작해 유사도가 낮은 하위 군집으로 순차 분할 (Top-Down)" },
      { major: "밀도 기반 군집\n(밀)", minor: "DBSCAN", desc: "반경(Epsilon) 내 최소 점 개수(MinPts) 기준으로 고밀도 영역을 연결 (비구형 기하학적 군집 발굴 및 노이즈 분리 강점)" },
      { major: "", minor: "DENCLUE", desc: "데이터 공간 전체에 커널 밀도 추정(KDE) 확률 밀도 함수를 적용해 국소 극댓값(Attractor) 기반으로 군집화" }
    ]
  },

  // =========================================================================
  // 4. DS (디지털서비스·신기술)
  // =========================================================================
  {
    domain: "DS",
    topic: "쿠버네티스 (Kubernetes)",
    mnemonic: "에·스·컨·이 / 큐·프·파",
    definition: "컨테이너 배포·확장·복구를 자동화하는 오케스트레이션",
    keywords: [
      "마스터 노드 (Control Plane)",
      "워커 노드 (Data Plane)",
      "API 서버 · etcd · 스케줄러",
      "큐블릿 · 큐브프록시 · 파드(Pod)",
      "두음: 에스케컨이 / 큐프파"
    ],
    diagram: `[마스터 노드] API 서버(통신 허브) ↔ etcd(상태 저장) / 스케줄러(배치) / 컨트롤러(상태 유지)
                    ↓ 명령 하달
[워커 노드]   큐블릿(노드 에이전트) + 큐브 프록시(네트워크) → [파드(Pod: 컨테이너 캡슐)] 구동`,
    tableRows: [
      { major: "마스터 노드", minor: "kube-apiserver", desc: "모든 내부 컴포넌트와 외부 명령(kubectl)이 거치는 중앙 통신 관문" },
      { major: "마스터 노드", minor: "etcd", desc: "클러스터의 모든 설정값과 현재 상태를 안전하게 보관하는 분산 Key-Value 저장소" },
      { major: "마스터 노드", minor: "스케줄러 & 컨트롤러", desc: "자원 여유를 보고 파드를 노드에 배치(스케줄러)하고 원하는 복제본 개수를 유지(컨트롤러)" },
      { major: "워커 노드", minor: "kubelet & kube-proxy", desc: "마스터 지시를 받아 컨테이너를 실행(큐블릿)하고 파드 간 네트워크 통신 규칙 제어(프록시)" },
      { major: "배포 단위", minor: "파드 (Pod)", desc: "쿠버네티스에서 생성·배포·관리할 수 있는 가장 작은 컨테이너 묶음 단위 (IP·볼륨 공유)" }
    ]
  },
  {
    domain: "DS",
    topic: "클라우드 네이티브 (Cloud Native)",
    mnemonic: "마·컨·씨·데",
    definition: "클라우드 탄력성 위해 MSA·컨테이너·자동화 결합 체계",
    keywords: [
      "MSA · 컨테이너 · CI/CD · 데브옵스",
      "12-Factor App",
      "무중단 배포 (블루그린·카나리)",
      "서비스 메시 & 서버리스",
      "두음: 마컨씨데"
    ],
    diagram: `[설계: MSA] + [패키징: 컨테이너] + [배포: CI/CD 파이프라인] + [문화: DevOps]
➔ 클라우드의 탄력성·민첩성·고가용성을 100% 활용하는 애플리케이션 체계`,
    tableRows: [
      { major: "4대 핵심 기둥", minor: "MSA (마이크로서비스)", desc: "업무 기능별로 서비스를 독립 분리하여 개별 개발·배포·확장성 확보" },
      { major: "4대 핵심 기둥", minor: "컨테이너 (Container)", desc: "실행 환경과 코드를 하나로 묶어 어디서나 동일하고 빠르게 기동" },
      { major: "4대 핵심 기둥", minor: "CI/CD 자동화", desc: "소스 빌드·테스트(CI)부터 운영 환경 무중단 배포(CD)까지 전 과정 자동화" },
      { major: "4대 핵심 기둥", minor: "데브옵스 (DevOps)", desc: "개발 조직과 운영 조직의 장벽을 허물고 자율적·지속적 서비스 개선 수행" }
    ]
  },

  // =========================================================================
  // 5. NW (네트워크)
  // =========================================================================
  {
    domain: "NW",
    topic: "HTTP/3",
    mnemonic: "유·제·로·홀·독·연",
    definition: "앞차막힘 해소 위해 QUIC 기반으로 동작하는 웹표준",
    keywords: [
      "QUIC 전송 계층 기반 차세대 웹 프로토콜",
      "TCP HOLB (앞차 막힘) 근본 해소",
      "QPACK 헤더 압축",
      "TLS 1.3 기본 내장",
      "두음: 유제로홀독연"
    ],
    diagram: `• HTTP/2 : [HTTP/2 (HPACK)] + [TLS 1.2/1.3 별도] + [TCP (패킷 1개 유실 시 전체 스트림 멈춤: TCP HOLB)]
• HTTP/3 : [HTTP/3 (QPACK)] + [QUIC (TLS 1.3 내장 + 독립 스트림 다중화)] + [UDP]`,
    tableRows: [
      { major: "등장 배경", minor: "HTTP/2의 TCP 한계", desc: "HTTP/2는 애플리케이션 계층 다중화를 도입했으나, 하부 전송 계층인 TCP에서 패킷 1개만 유실되어도 전체 스트림이 멈추는 TCP HOLB 병목 발생" },
      { major: "핵심 구조", minor: "QUIC 위에서 동작", desc: "기존 TCP를 과감히 버리고 구글이 설계한 UDP 기반의 QUIC 프로토콜을 전송 계층으로 채택한 IETF 표준 차세대 웹 프로토콜" },
      { major: "헤더 압축", minor: "QPACK 알고리즘", desc: "스트림들이 서로 독립적으로 도착하는 비순차 환경에서도 HOLB 없이 안전하게 HTTP 헤더를 압축·복원하는 QPACK 적용" }
    ]
  },
  {
    domain: "NW",
    topic: "QUIC 프로토콜",
    mnemonic: "유·영·일·독·연",
    definition: "초고속 연결과 다중화 위해 UDP 위에 구현한 프로토콜",
    keywords: [
      "UDP 기반 신뢰성 전송 프로토콜",
      "0-RTT / 1-RTT 초고속 핸드셰이크",
      "TLS 1.3 암호화 일체화",
      "독립 스트림 다중화",
      "연결 ID (Connection Migration)"
    ],
    diagram: `[기존 TCP+TLS] TCP 3-Way 핸드셰이크(1-RTT) + TLS 협상(1~2 RTT) ➔ 총 2~3 RTT 소요
[QUIC 연결]    전송 핸드셰이크 + TLS 1.3 키 교환 통합 ➔ 최초 연결 1-RTT, 재방문 시 0-RTT 즉시 데이터 전송!`,
    tableRows: [
      { major: "핵심 원리", minor: "UDP 위 신뢰성·보안 구현", desc: "커널 수정이 어려운 TCP 대신 UDP를 기반으로 채택하고, 사용자 공간에서 흐름 제어·혼잡 제어·재전송과 TLS 1.3 보안을 직접 구현" },
      { major: "지연 단축", minor: "1-RTT / 0-RTT 연결", desc: "전송 연결 설정과 TLS 1.3 암호화 협상을 단일 핸드셰이크로 합쳐 최초 접속 시 1-RTT, 이전 세션 캐시 보유 시 0-RTT 만에 데이터 전송" },
      { major: "성능 및 이동성", minor: "독립 스트림 & Connection ID", desc: "• 스트림별 개별 손실 복구로 특정 스트림 패킷 유실이 타 스트림을 막지 않음(HOLB 제거)\n• IP·포트 대신 고유 Connection ID로 세션을 식별해 Wi-Fi ↔ 5G 망 전환 시에도 연결 유지" }
    ]
  },
  {
    domain: "NW",
    topic: "소프트웨어 정의 네트워크 (SDN)",
    mnemonic: "응·제·데 / 북·남",
    definition: "네트워크 중앙 관리 위해 제어·데이터 평면 분리한 기술",
    keywords: [
      "제어 영역(Control)과 데이터 영역(Data) 분리",
      "SDN 중앙 컨트롤러",
      "남향 인터페이스 (OpenFlow)",
      "북향 인터페이스 (REST API)"
    ],
    diagram: `[응용 계층 (보안·라우팅 앱)] ↕ 북향 API ↕ [제어 계층 (중앙 컨트롤러)] ↕ 남향 API(OpenFlow) ↕ [데이터 계층 (스위치)]`,
    tableRows: [
      { major: "핵심 원리", minor: "제어·전달 평면 분리", desc: "네트워크 장비에서 경로 결정 두뇌(Control Plane)를 분리해 중앙 소프트웨어 컨트롤러로 통합 관리" },
      { major: "3계층 구조", minor: "데이터 계층 (인프라)", desc: "컨트롤러가 내려준 플로우 테이블 규칙에 따라 패킷 전달(Forwarding)만 고속 수행하는 물리/가상 스위치" },
      { major: "3계층 구조", minor: "제어 계층 (컨트롤러)", desc: "전체 네트워크 토폴로지를 중앙에서 파악하고 최적 경로 및 정책을 계산하는 SDN 두뇌" },
      { major: "인터페이스", minor: "남향(South) & 북향(North)", desc: "• 남향 API: 컨트롤러와 스위치 장비 간 플로우 제어 프로토콜 (OpenFlow 등)\n• 북향 API: 컨트롤러와 상위 네트워크 관리 앱 간의 통신 인터페이스 (REST API)" }
    ]
  },

  // =========================================================================
  // 6. 경영 (IT경영·전략·법제도)
  // =========================================================================
  {
    domain: "경영",
    topic: "전사적 아키텍처 (EA)",
    mnemonic: "업·응·데·기·보 / 성·업·서·데·기",
    definition: "전사 IT자원 표준화 위해 5대 아키텍처 수립하는 체계",
    keywords: [
      "정보기술아키텍처 (ITA)",
      "5대 영역: 업무·응용·데이터·기술·보안",
      "범정부 5대 참조모델 (PRM·BRM·SRM·DRM·TRM)",
      "As-Is → To-Be → 이행계획",
      "두음: 업응데기보 / 성업서데기"
    ],
    diagram: `[비전·원칙 수립] ➔ [현재(As-Is) 분석] ➔ [목표(To-Be) 5대 아키텍처 설계] ➔ [이행계획 및 거버넌스]`,
    tableRows: [
      { major: "5대 아키텍처", minor: "업무 (BA) & 응용 (AA)", desc: "조직의 업무 프로세스 구조(BA)와 이를 지원하는 애플리케이션 체계(AA) 정의" },
      { major: "5대 아키텍처", minor: "데이터(DA)·기술(TA)·보안(SA)", desc: "전사 데이터 표준(DA), 인프라 기술 표준(TA), 보안 통제 체계(SA) 설계" },
      { major: "5대 참조모델", minor: "PRM · BRM · SRM · DRM · TRM", desc: "성과 참조모델(PRM), 업무 참조모델(BRM), 서비스 참조모델(SRM), 데이터 참조모델(DRM), 기술 참조모델(TRM)" },
      { major: "추진 절차", minor: "이행계획 수립", desc: "현황(As-Is)과 목표(To-Be) 간의 격차(Gap)를 분석하여 단계별 전환 로드맵 도출" }
    ]
  },
  {
    domain: "경영",
    topic: "정보보호 및 개인정보보호 관리체계 (ISMS-P)",
    mnemonic: "관·보·개 101",
    definition: "정보보호와 개인정보 보호 위해 101개 기준 심사 체계",
    keywords: [
      "관리체계 수립·운영 (16개)",
      "보호대책 요구사항 (64개)",
      "개인정보 처리단계 (21개)",
      "총 101개 통제 항목",
      "두음: 관보개 101"
    ],
    diagram: `ISMS-P 총 101개 기준 = [1. 관리체계 수립·운영 (16)] + [2. 보호대책 요구사항 (64)] + [3. 개인정보 생명주기 (21)]`,
    tableRows: [
      { major: "인증 영역 1", minor: "관리체계 수립·운영", desc: "기반 마련, 위험 관리(자산식별→위험평가→대책선정), 운영, 점검 및 개선 (16개 항목)" },
      { major: "인증 영역 2", minor: "보호대책 요구사항", desc: "정책·조직, 인적·물리보안, 인증·접근통제, 암호화, 개발·사고대응 등 (64개 항목)" },
      { major: "인증 영역 3", minor: "개인정보 처리단계", desc: "개인정보 수집 → 보유·이용 → 제공·위탁 → 파기 → 정보주체 권리보호 (21개 항목)" },
      { major: "비교 구분", minor: "ISMS vs ISMS-P", desc: "영역 1+2만 심사하면 ISMS(80개), 영역 3(개인정보 21개)까지 포함하면 ISMS-P(101개)" }
    ]
  },

  // =========================================================================
  // 7. 보안 (정보보안)
  // =========================================================================
  {
    domain: "보안",
    topic: "제로 트러스트 보안 (Zero Trust)",
    mnemonic: "명·최·가 / 미·지·모",
    definition: "모든 접근을 매번 검증하고 최소 권한만 주는 보안 체계",
    keywords: [
      "Never Trust, Always Verify",
      "정책 결정 지점 (PDP: PE+PA)",
      "정책 집행 지점 (PEP)",
      "마이크로 세그멘테이션",
      "두음: 명최가 미지모"
    ],
    diagram: `[접속 주체(사용자+단말)] ➔ [PDP (정책 결정 두뇌: 신뢰도 평가)] ➔ [PEP (정책 집행 관문)] ➔ [기업 리소스(최소 권한 접근)]`,
    tableRows: [
      { major: "3대 핵심 원칙", minor: "명시적 검증 & 최소 권한", desc: "모든 접근 요청의 신원·단말·맥락을 매번 검증하고, 세션별로 꼭 필요한 최소 권한만 부여" },
      { major: "3대 핵심 원칙", minor: "침해 가정 (Assume Breach)", desc: "내부망도 이미 침투당했다고 가정하고 구역을 잘게 쪼개어(마이크로 세그멘테이션) 측면 이동(Lateral Movement) 차단" },
      { major: "논리 구성요소", minor: "PDP (정책 결정 지점)", desc: "제어 영역(Control Plane): 정책 엔진(PE)과 관리자(PA)가 신뢰도를 평가해 접근 승인 여부 결정" },
      { major: "논리 구성요소", minor: "PEP (정책 집행 지점)", desc: "데이터 영역(Data Plane): PDP의 결정에 따라 실제 보안 세션을 연결하거나 차단하는 관문" }
    ]
  },
  {
    domain: "보안",
    topic: "국가 망보안체계 (N2SF)",
    mnemonic: "기(C)·민(S)·공(O)",
    definition: "공공 AI 활용 위해 업무 중요도 3등급 차등 보안체계",
    keywords: [
      "획일적 망분리 개선",
      "업무 중요도 3등급 (C·S·O)",
      "기밀(C) · 민감(S) · 공개(O)",
      "차등 보안 통제"
    ],
    diagram: `[기존: 물리적 획일 망분리] ➔ [N2SF 전환: 업무·데이터 중요도에 따라 기밀(C) / 민감(S) / 공개(O) 3등급 차등 보안]`,
    tableRows: [
      { major: "도입 배경", minor: "기존 망분리 한계", desc: "일률적 인터넷 차단으로 인해 공공 분야의 클라우드 및 생성형 AI 도입이 가로막힘" },
      { major: "3등급 분류", minor: "기밀 (Classified)", desc: "국가 안보·외교 등 유출 시 치명적인 정보 → 최고 수준의 격리 및 망분리 통제 유지" },
      { major: "3등급 분류", minor: "민감 (Sensitive)", desc: "개인정보·비공개 행정정보 → 제로트러스트 기반 다층 보안통제 하에 외부 클라우드 연계" },
      { major: "3등급 분류", minor: "공개 (Open)", desc: "대민 공개 자료 및 일반 업무 → 인터넷 및 상용 AI 서비스를 자유롭게 활용" }
    ]
  },

  // =========================================================================
  // 8. 소공 (소프트웨어공학)
  // =========================================================================
  {
    domain: "소공",
    topic: "마이크로서비스 아키텍처 (MSA)",
    mnemonic: "독·분·자·격 / 폴·데·C",
    definition: "독립 개발·배포 위해 단일 앱을 소규모로 분리한 구조",
    keywords: [
      "API 게이트웨이",
      "서비스 메시 (Sidecar)",
      "사가 패턴 (Saga)",
      "CQRS & 이벤트 소싱",
      "서킷 브레이커",
      "두음: 독분자격 폴데C"
    ],
    diagram: `[클라이언트] → [API 게이트웨이] → [주문 서비스(DB)] / [결제 서비스(DB)] / [배송 서비스(DB)] (이벤트 브로커 연동)`,
    tableRows: [
      { major: "진입·통신", minor: "API 게이트웨이", desc: "단일 진입점 역할을 수행하며 인증, 라우팅, 속도 제한, 로드밸런싱을 통합 처리" },
      { major: "진입·통신", minor: "서비스 메시 (Service Mesh)", desc: "비즈니스 코드 수정 없이 사이드카 프록시를 통해 서비스 간 통신·암호화(mTLS)·추적 제어" },
      { major: "데이터 정합성", minor: "사가 패턴 (Saga)", desc: "분산된 DB 간 트랜잭션을 이벤트로 순차 실행하고, 실패 시 보상 트랜잭션으로 취소" },
      { major: "데이터 정합성", minor: "CQRS 패턴", desc: "데이터 변경(Command) 모델과 조회(Query) 모델을 분리하여 조회 성능 극대화" },
      { major: "장애 복원력", minor: "서킷 브레이커", desc: "특정 서비스 장애 시 호출을 즉시 차단(두꺼비집 원리)하여 전체 시스템 연쇄 장애 방지" }
    ]
  },
  {
    domain: "소공",
    topic: "클린 아키텍처 (Clean Architecture)",
    mnemonic: "엔·유·어·프 / 단·역",
    definition: "도메인 규칙 보호 위해 의존성을 안쪽으로만 향한 구조",
    keywords: [
      "관심사 분리",
      "단방향 의존성 규칙 (바깥 → 안쪽)",
      "의존성 역전 원칙 (DIP)",
      "엔티티 · 유스케이스 · 어댑터 · 인프라"
    ],
    diagram: `[외부 프레임워크/DB/UI] ──(의존성 방향)──▶ [인터페이스 어댑터] ──▶ [유스케이스(응용 규칙)] ──▶ [엔티티(핵심 비즈니스 도메인)]`,
    tableRows: [
      { major: "핵심 철학", minor: "단방향 의존성 규칙", desc: "모든 소스코드 의존성은 반드시 바깥쪽(저수준 기술·인프라)에서 안쪽(고수준 도메인 규칙)으로만 향해야 함" },
      { major: "내부 코어", minor: "엔티티 & 유스케이스", desc: "외부 DB나 웹 프레임워크가 교체되어도 절대 변하지 않는 핵심 비즈니스 규칙과 애플리케이션 시나리오" },
      { major: "경계 분리", minor: "의존성 역전 (DIP)", desc: "내부 유스케이스가 외부 DB를 직접 호출하지 않고 추상 인터페이스에 의존하여 비즈니스 로직의 순수성 및 테스트 용이성 보장" }
    ]
  },
  {
    domain: "소공",
    topic: "헥사고날 아키텍처 (포트 앤 어댑터)",
    mnemonic: "인·아·포·어",
    definition: "외부 종속 제거 위해 도메인 내외부를 포트·어댑터 연결",
    keywords: [
      "도메인 중심 육각형 구조",
      "인바운드 / 아웃바운드 포트 (Port)",
      "프라이머리 / 세컨더리 어댑터 (Adapter)",
      "외부 기술 교체 용이성"
    ],
    diagram: `[외부 요청 (REST/웹 UI: 인바운드 어댑터)] ──▶ (인바운드 포트) ──▶ [도메인 코어] ──▶ (아웃바운드 포트) ──▶ [DB/외부 API: 아웃바운드 어댑터]`,
    tableRows: [
      { major: "핵심 개념", minor: "포트 앤 어댑터 패턴", desc: "비즈니스 도메인 코어를 중앙에 두고, 모든 외부 세계(UI, DB, 메시지큐)와의 연결을 포트와 어댑터로 분리하는 아키텍처" },
      { major: "규격 정의", minor: "포트 (Port)", desc: "내부 애플리케이션 코어가 외부와 소통하기 위해 정의한 추상 인터페이스 규격 (인바운드 UseCase 포트 / 아웃바운드 SPI 포트)" },
      { major: "기술 구현", minor: "어댑터 (Adapter)", desc: "포트 인터페이스를 실제 외부 기술에 맞게 구현한 모듈 (웹 컨트롤러, JPA Repository 구현체, 외부 API 클라이언트 등)" }
    ]
  },

  // =========================================================================
  // 9. 통계 (통계·데이터분석)
  // =========================================================================
  {
    domain: "통계",
    topic: "가설검정 (Hypothesis Testing)",
    mnemonic: "귀·대·유·기",
    definition: "모집단 판정 위해 유의확률로 귀무가설 기각 결정 기법",
    keywords: [
      "귀무가설(H0) vs 대립가설(H1)",
      "유의수준(α) & 유의확률(p-value)",
      "기각역 & 임계값",
      "양측검정 vs 단측검정"
    ],
    diagram: `[가설 설정: H0(차이 없음) vs H1(차이 있음)] ➔ [검정통계량 및 유의확률(p-value) 산출] ➔ p-value < 유의수준(α, 0.05) 이면 H0 기각, H1 채택!`,
    tableRows: [
      { major: "가설 설정", minor: "귀무가설(H0) & 대립가설(H1)", desc: "기존 통념·차이 없음(H0)과 연구자가 강한 근거로 입증하려는 새로운 주장·차이 있음(H1)" },
      { major: "판정 지표", minor: "유의수준(α) & 유의확률(p-value)", desc: "• 유의수준(α): 귀무가설을 기각하는 기준이 되는 최대 허용 오류 확률 (통상 0.05 또는 0.01)\n• 유의확률(p-value): 귀무가설이 참일 때 현재 표본처럼 극단적인 결과가 우연히 관측될 확률" },
      { major: "의사 결정", minor: "기각 여부 판정", desc: "p-value < α 이면 우연히 일어날 확률이 매우 희박하므로 귀무가설(H0)을 기각하고 대립가설(H1)을 통계적으로 유의하다고 채택" }
    ]
  },
  {
    domain: "통계",
    topic: "제1종 오류와 제2종 오류",
    mnemonic: "귀참기1 / 대참채2",
    definition: "가설검정 시 참인 귀무가설 기각·대립가설 놓치는 오류",
    keywords: [
      "제1종 오류 (α, 위양성 False Positive)",
      "제2종 오류 (β, 위음성 False Negative)",
      "검정력 (Power = 1 - β)",
      "α와 β의 상충관계 (Trade-off)",
      "두음: 귀참기1 / 대참채2"
    ],
    diagram: `• 제1종 오류(α) : 귀무가설(H0)이 참인데 기각 (무죄인 사람을 유죄 판결)
• 제2종 오류(β) : 대립가설(H1)이 참인데 H0 채택 (유죄인 범인을 무죄 방면)  |  검정력(1-β) = 진짜 효과를 찾아낼 확률`,
    tableRows: [
      { major: "오류 유형", minor: "제1종 오류 (α)", desc: "귀무가설(H0)이 실제로는 참인데도 이를 잘못 기각하는 오류 (효과가 없는데 있다고 오판, 유의수준 α로 통제)" },
      { major: "오류 유형", minor: "제2종 오류 (β)", desc: "대립가설(H1)이 실제로는 참인데도 귀무가설을 기각하지 못하는 오류 (진짜 있는 효과를 놓침)" },
      { major: "검정 능력", minor: "검정력 (1 - β) & 관계", desc: "• 검정력(1-β): 대립가설이 참일 때 이를 올바르게 채택할 확률\n• 표본 크기가 고정된 상태에서 α를 줄이면 β가 커지는 상충관계(Trade-off)가 존재하며, 둘 다 줄이려면 표본 크기(n)를 늘려야 함" }
    ]
  },
  {
    domain: "통계",
    topic: "회귀분석 (Regression Analysis)",
    mnemonic: "선·독·등·정",
    definition: "변수 간 인과관계 규명 위해 최소제곱법 쓰는 분석 기법",
    keywords: [
      "독립변수(X) · 종속변수(Y)",
      "최소제곱법 (OLS)",
      "4대 기본가정 (선형성·독립성·등분산성·정규성)",
      "결정계수 (R²) & 수정된 R²",
      "두음: 선독등정"
    ],
    diagram: `[독립변수 X1, X2, ...] ➔ [선형 회귀모형 Y = β0 + β1X1 + ... + ε (OLS 잔차제곱합 최소화)] ➔ [F-검정(모형) · t-검정(회귀계수) · R² 평가]`,
    tableRows: [
      { major: "핵심 원리", minor: "최소제곱법 (OLS)", desc: "독립변수(원인 X)와 종속변수(결과 Y) 간의 선형 함수식을 도출하기 위해 실제값과 예측값의 차이인 잔차 제곱합(SSE)을 최소화하는 계수 추정" },
      { major: "4대 기본가정", minor: "선 · 독 · 등 · 정", desc: "① 선형성(X와 Y의 선형 관계) ② 잔차 독립성(자기상관 없음, 더빈-왓슨 검정) ③ 잔차 등분산성(분산 일정) ④ 잔차 정규성(정규분포 충족)" },
      { major: "모형 적합도", minor: "결정계수 (R²)", desc: "총변동(SST) 중 회귀모형에 의해 설명되는 변동(SSR)의 비율(0~1)로, 독립변수 수 증가에 따른 과대평가를 보정하기 위해 수정된 결정계수(Adjusted R²) 활용" }
    ]
  },
  {
    domain: "통계",
    topic: "다중공선성 (Multicollinearity)",
    mnemonic: "상·팽·제·주·규",
    definition: "독립변수 간 강한 상관성으로 회귀계수 분산 팽창 현상",
    keywords: [
      "독립변수 간 강한 상관관계",
      "회귀계수 분산 팽창 (불안정성)",
      "분산팽창요인 (VIF ≥ 10)",
      "주성분 분석(PCA) · 릿지(L2) · 라쏘(L1)"
    ],
    diagram: `[독립변수 X1 ↔ X2 강한 상관관계 발생] ➔ 회귀계수 추정치 왜곡 ➔ [진단: VIF = 1 ÷ (1 - R_i²) ≥ 10] ➔ [해결: 변수 제거 · PCA · 정규화(Ridge/Lasso)]`,
    tableRows: [
      { major: "핵심 개념", minor: "다중공선성 정의", desc: "다중회귀분석에서 독립변수들끼리 서로 독립적이지 않고 강한 선형 상관관계를 가져 회귀계수 추정의 표준오차가 비정상적으로 커지는 현상" },
      { major: "진단 지표", minor: "분산팽창요인 (VIF)", desc: "특정 독립변수를 다른 독립변수들로 회귀분석했을 때의 결정계수(R_i²)를 이용한 지표로, 통상 VIF ≥ 10 이면 심각한 다중공선성 존재로 판정" },
      { major: "해결 방안", minor: "변수 선택 · 차원축소 · 규제", desc: "• 상관성이 높은 중복 독립변수 제거 또는 단계적 변수 선택법 적용\n• 주성분 회귀(PCR/PCA)로 서로 직교하는 주성분 도출\n• 가중치 크기에 페널티를 부여하는 릿지(Ridge, L2 규제) 또는 라쏘(Lasso, L1 규제) 회귀 적용" }
    ]
  },

  // =========================================================================
  // 10. 프관 (프로젝트관리)
  // =========================================================================
  {
    domain: "프관",
    topic: "기성고 관리 (EVM)",
    mnemonic: "계·획·실 / 일·원·편·지",
    definition: "일정·원가 측정 위해 계획·획득·실제비용 비교 기법",
    keywords: [
      "Earned Value Management",
      "계획가치(PV) · 획득가치(EV) · 실제비용(AC)",
      "일정편차(SV) & 일정성과지수(SPI)",
      "원가편차(CV) & 원가성과지수(CPI)",
      "완료시점 추정치 (EAC · ETC)",
      "두음: 계획실 / 일원편지"
    ],
    diagram: `• 일정 성과 : SV = EV - PV (>0 앞섬)  |  SPI = EV ÷ PV (>1.0 양호)
• 원가 성과 : CV = EV - AC (>0 절감)  |  CPI = EV ÷ AC (>1.0 양호)  |  최종예상비용 EAC = BAC ÷ CPI`,
    tableRows: [
      { major: "3대 기본지표", minor: "PV · EV · AC", desc: "• 계획가치(PV): 기준 시점까지 계획된 예산\n• 획득가치(EV): 실제 완료된 작업량의 화폐 가치(기성고)\n• 실제비용(AC): 작업 수행에 실제 지출된 총비용" },
      { major: "성과 분석", minor: "일정(SV·SPI) & 원가(CV·CPI)", desc: "• 일정 분석: 획득가치(EV)에서 계획가치(PV)를 빼거나 나누어 진척도 평가\n• 원가 분석: 획득가치(EV)에서 실제비용(AC)을 빼거나 나누어 예산 효율성 평가" },
      { major: "미래 예측", minor: "BAC · ETC · EAC", desc: "완료시점 총예산(BAC), 잔여작업 예상비용(ETC), 현재 원가효율 지속 시 최종 예상 총비용(EAC = BAC ÷ CPI)" }
    ]
  },
  {
    domain: "프관",
    topic: "주공정법 (CPM)",
    mnemonic: "전·후·여·주",
    definition: "공사기간 산정 위해 여유시간 0인 최장 경로 도출 기법",
    keywords: [
      "Critical Path Method",
      "주공정 (Critical Path: 최장 경로)",
      "ES · EF (조기 시작·종료)",
      "LS · LF (만기 시작·종료)",
      "총 여유시간 (Total Float / Slack = 0)"
    ],
    diagram: `[전진 계산 (Forward Pass): ES · EF 도출] ➔ [후진 계산 (Backward Pass): LF · LS 도출]
➔ 여유시간(Float = LS - ES = LF - EF)이 '0'인 작업들을 연결한 최장 경로 = [주공정 (Critical Path)]`,
    tableRows: [
      { major: "핵심 개념", minor: "주공정 (Critical Path)", desc: "프로젝트 네트워크 다이어그램에서 시작부터 종료까지 가장 긴 시간이 소요되는 경로로, 프로젝트 전체 최소 완료 기간을 결정함" },
      { major: "일정 계산", minor: "전진 계산 & 후진 계산", desc: "• 전진 계산: 시작부터 끝으로 진행하며 가장 빠른 시작(ES)·종료(EF) 시간 산출\n• 후진 계산: 종료 시점부터 역산하며 전체 일정을 늦추지 않는 가장 늦은 시작(LS)·종료(LF) 시간 산출" },
      { major: "여유 시간", minor: "총 여유시간 (Total Float)", desc: "전체 프로젝트 완료일을 지연시키지 않고 특정 활동을 늦출 수 있는 시간(LS - ES)으로, 주공정 위의 모든 활동은 여유시간이 0임" }
    ]
  },
  {
    domain: "프관",
    topic: "크래싱 (Crashing)",
    mnemonic: "자·투·원·단",
    definition: "일정 단축 위해 주공정 작업에 추가 자원을 투입한 기법",
    keywords: [
      "일정 단축 기법 (Schedule Compression)",
      "주공정(Critical Path) 활동 자원 추가 투입",
      "비용-일정 교환 (Time-Cost Trade-off)",
      "직접 원가 상승 위험"
    ],
    diagram: `[주공정 작업 A (정상 10일 / 100만원)] ──(인력·장비·특근 자원 추가 투입: Crashing)──▶ [단축 작업 A (5일 / 180만원)]
➔ 작업 순서는 그대로 유지하면서 직접 비용(Cost)을 추가 투입해 주공정 기간 단축!`,
    tableRows: [
      { major: "핵심 개념", minor: "자원 투입형 일정 단축", desc: "프로젝트 범위(Scope)를 축소하지 않고, 주공정(Critical Path) 상의 활동에 인력·장비·초과근무 등 추가 자원을 투입하여 최소의 추가 비용으로 최대의 일정을 단축하는 기법" },
      { major: "적용 원칙", minor: "비용 기울기 (Cost Slope)", desc: "단위 기간(1일) 단축 시 증가하는 비용 기울기[(급속비용-정상비용) ÷ (정상기간-급속기간)]가 가장 작은 주공정 활동부터 우선 단축" },
      { major: "핵심 리스크", minor: "원가 상승 & 수확체감", desc: "직접 원가(비용)가 상승하며, 과도한 인력 투입 시 의사소통 채널 증가(브룩스의 법칙)로 인해 오히려 효율이 저하될 수 있음" }
    ]
  },
  {
    domain: "프관",
    topic: "패스트 트래킹 (Fast Tracking)",
    mnemonic: "병·중·재·단",
    definition: "일정 단축 위해 순차 수행할 주공정 작업 병행하는 기법",
    keywords: [
      "일정 단축 기법 (Schedule Compression)",
      "순차 공정의 병행(중첩) 수행",
      "FS(종료-시작) → SS(시작-시작) 관계 변경",
      "재작업(Rework) 및 품질 저하 위험"
    ],
    diagram: `• 기존 순차 수행 : [설계 완료] ──▶ [개발 착수] ──▶ [테스트] (전체 기간 10주)
• 패스트 트래킹  : [설계 진행 중] + [설계 확정 부분부터 개발 동시 병행 착수!] (전체 기간 7주로 단축, 재작업 리스크 증가)`,
    tableRows: [
      { major: "핵심 개념", minor: "공정 중첩형 일정 단축", desc: "원래 순차적으로 수행할 계획이었던 주공정 상의 활동이나 단계들을 일정 부분 겹쳐서(Overlapping) 동시에 병행 수행함으로써 전체 일정을 단축하는 기법" },
      { major: "적용 방식", minor: "선후행 관계 조정", desc: "선행 작업이 100% 끝나기 전에 후행 작업을 앞당겨 시작(Lead Time 부여, FS 관계를 SS+지연 관계로 전환)" },
      { major: "핵심 리스크", minor: "재작업(Rework) & 품질 저하", desc: "추가 자원 투입 비용은 들지 않으나, 앞 단계 산출물이 변경될 경우 대규모 재작업(Rework)이 발생하고 프로젝트 리스크와 품질 저하 위험이 커짐" }
    ]
  }
];
