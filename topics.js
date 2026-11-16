const topics = [
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
