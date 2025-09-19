
export const securityMisconceptions = [
  {
    "category": "네트워크 및 인프라 관련 착각",
    "description": "이 카테고리는 네트워크 구조와 인프라 보안에 대한 오해를 다룹니다. 실무에서 네트워크 설계 오류가 40%의 사고 원인입니다.",
    "total": 8,
    "items": [
      {
        "id": 1,
        "misconception": "방화벽만 설치하면 네트워크가 안전하다.",
        "reality": "다층 방어가 필요.",
        "case": "중소 금융사 피싱으로 랜섬웨어 침투; IDS/IPS 도입으로 재발 방지."
      },
      {
        "id": 3,
        "misconception": "내부 네트워크는 외부보다 안전하다.",
        "reality": "제로 트러스트 모델 필요.",
        "case": "대기업 USB 악성코드 유출; MFA 제한으로 보안 강화."
      },
      {
        "id": 10,
        "misconception": "오픈소스 소프트웨어는 안전하다.",
        "reality": "종속성 관리 필수.",
        "case": "Log4j 취약점 해킹; SCA 도입으로 관리."
      },
      {
        "id": 27,
        "misconception": "강력한 방화벽이 모든 네트워크 공격을 막는다.",
        "reality": "다층 방어가 필수.",
        "case": "은행 내부 피싱 침투; IDS/IPS 추가."
      },
      {
        "id": 40,
        "misconception": "사이버 공격은 외부 해커만의 일이다.",
        "reality": "내부/공급망 위협 50%.",
        "case": "공급망 침투; 감사 실시."
      },
      {
        "id": 42,
        "misconception": "IoT 기기는 별도 보안이 필요 없다.",
        "reality": "세그먼테이션 필수.",
        "case": "IoT 카메라 해킹; 격리 네트워크 구축."
      },
      {
        "id": 46,
        "misconception": "보안 사고는 공개하지 않아도 된다.",
        "reality": "공개 의무와 투명성 필요.",
        "case": "은폐로 평판 손실; 공개 정책 수립."
      },
      {
        "id": 50,
        "misconception": "사이버 위협은 과장된 것이다.",
        "reality": "평균 유출 비용 4.45백만 달러.",
        "case": "과소평가로 랜섬웨어 피해; 위협 인식 워크숍."
      }
    ]
  },
  {
    "category": "인증 및 접근 제어 관련 착각",
    "description": "이 카테고리는 사용자 인증과 권한 관리에 대한 오해를 다룹니다. 2025년 크리덴셜 탈취 공격이 35% 증가했습니다.",
    "total": 7,
    "items": [
      {
        "id": 2,
        "misconception": "강력한 비밀번호만으로 인증이 충분하다.",
        "reality": "MFA 필수.",
        "case": "제조사 비밀번호 유출로 스파이 행위; MFA 도입으로 90% 감소."
      },
      {
        "id": 11,
        "misconception": "VPN만 사용하면 원격 작업이 안전하다.",
        "reality": "엔드포인트 보안과 MFA 필요.",
        "case": "VPN 멀웨어로 내부 감염; EDR/MFA 결합."
      },
      {
        "id": 13,
        "misconception": "피싱 공격은 구식 위협이다.",
        "reality": "AI/딥페이크 피싱 90% 원인.",
        "case": "은행 딥페이크로 자금 이체; 시뮬레이션 교육."
      },
      {
        "id": 15,
        "misconception": "모바일 기기 보안은 불필요하다.",
        "reality": "모바일 공격 50%.",
        "case": "스마트폰 해킹으로 이메일 유출; MDM 도입."
      },
      {
        "id": 19,
        "misconception": "보안 교육은 시간 낭비다.",
        "reality": "인적 요소 92% 원인.",
        "case": "교육 생략으로 피싱 유출; 연간 시뮬레이션 실시."
      },
      {
        "id": 47,
        "misconception": "모바일 보안은 PC만큼 중요하지 않다.",
        "reality": "모바일 공격 50%.",
        "case": "모바일 앱 해킹; MDM 도입."
      },
      {
        "id": 41,
        "misconception": "보안 교육은 한 번으로 충분하다.",
        "reality": "연간 교육 필수.",
        "case": "1회 후 피싱 증가; 연간 프로그램 도입."
      }
    ]
  },
  {
    "category": "클라우드 및 공급망 관련 착각",
    "description": "이 카테고리는 클라우드와 공급망 보안에 대한 오해를 다룹니다. 2025년 공급망 공격 29% 증가.",
    "total": 8,
    "items": [
      {
        "id": 5,
        "misconception": "클라우드 제공자가 모든 보안을 책임진다.",
        "reality": "공유 책임 모델.",
        "case": "S3 공개 유출; CSPM 도입."
      },
      {
        "id": 20,
        "misconception": "클라우드 보안은 제공자가 알아서 한다.",
        "reality": "고객 책임.",
        "case": "설정 오류 유출; 공유 책임 교육."
      },
      {
        "id": 23,
        "misconception": "클라우드 서비스는 자동으로 안전하다.",
        "reality": "설정 오류 40% 원인.",
        "case": "S3 공개 유출; 자동 감사 구축."
      },
      {
        "id": 32,
        "misconception": "클라우드 백업은 항상 안전하다.",
        "reality": "오프라인 백업 필수.",
        "case": "설정 오류 손실; 하이브리드 전략."
      },
      {
        "id": 40,
        "misconception": "사이버 공격은 외부 해커만의 일이다. (공급망 중복 배치)",
        "reality": "공급망 위협 50%.",
        "case": "공급망 침투; 감사 실시."
      },
      {
        "id": 26,
        "misconception": "소규모 기업은 해커의 타겟이 아니다. (공급망 진입점)",
        "reality": "SMB 43% 타겟.",
        "case": "공급망 유출; 기본 패키지 도입."
      },
      {
        "id": 43,
        "misconception": "클라우드 마이그레이션으로 보안이 자동 강화된다.",
        "reality": "설정 오류 위험.",
        "case": "마이그레이션 후 유출; 보안 감사."
      },
      {
        "id": 29,
        "misconception": "오픈소스 소프트웨어는 무료라서 위험하다. (공급망 관점)",
        "reality": "관리 부족 위험.",
        "case": "오픈소스 피하다 독점 취약; 종속성 관리."
      }
    ]
  },
  {
    "category": "인적 요소 및 교육 관련 착각",
    "description": "이 카테고리는 사람 중심 보안에 대한 오해를 다룹니다. 인적 오류가 92% 원인.",
    "total": 7,
    "items": [
      {
        "id": 6,
        "misconception": "보안은 IT 부서만의 책임이다.",
        "reality": "조직 전체 문화.",
        "case": "피싱으로 해킹; 전사 교육 설계."
      },
      {
        "id": 13,
        "misconception": "피싱 공격은 구식 위협이다.",
        "reality": "AI 피싱 90% 원인.",
        "case": "딥페이크 이체; 시뮬레이션 교육."
      },
      {
        "id": 19,
        "misconception": "보안 교육은 시간 낭비다.",
        "reality": "인적 요소 92%.",
        "case": "교육 생략 유출; 연간 시뮬레이션."
      },
      {
        "id": 33,
        "misconception": "보안은 기술자만의 일이다.",
        "reality": "모든 직원 참여.",
        "case": "비기술직 피싱; 전사 교육."
      },
      {
        "id": 41,
        "misconception": "보안 교육은 한 번으로 충분하다.",
        "reality": "연간 교육 필수.",
        "case": "1회 후 증가; 연간 프로그램."
      },
      {
        "id": 36,
        "misconception": "내부자 위협은 드물다.",
        "reality": "내부자 30%.",
        "case": "데이터 도용; 행동 분석 도입."
      },
      {
        "id": 45,
        "misconception": "보안 전문가를 고용하면 모든 문제가 해결된다.",
        "reality": "조직 참여 필요.",
        "case": "문화 미변화 실패; 전사 프로그램."
      }
    ]
  },
  {
    "category": "도구 및 기술 관련 착각",
    "description": "이 카테고리는 기술 도구에 대한 과신을 다룹니다. 2025년 AI 오탐 25%.",
    "total": 6,
    "items": [
      {
        "id": 4,
        "misconception": "안티바이러스 소프트웨어만 있으면 안전.",
        "reality": "AI 헌팅 필요.",
        "case": "파일리스 랜섬웨어; EDR 도입."
      },
      {
        "id": 12,
        "misconception": "보안 제품을 많이 사면 더 안전.",
        "reality": "통합 플랫폼 효과적.",
        "case": "설정 오류 취약; 통합 솔루션 추천."
      },
      {
        "id": 17,
        "misconception": "AI가 모든 보안 문제를 해결한다.",
        "reality": "인간 감독 필요.",
        "case": "AI 조작 오탐; 하이브리드 접근."
      },
      {
        "id": 24,
        "misconception": "AI 보안 도구가 모든 것을 자동 해결.",
        "reality": "보조 도구.",
        "case": "오탐 영업 피해; 하이브리드 설계."
      },
      {
        "id": 37,
        "misconception": "무료 보안 도구가 충분하다.",
        "reality": "기업급 필요.",
        "case": "무료 AV 감염; 유료 EDR 전환."
      },
      {
        "id": 48,
        "misconception": "오픈소스 코드는 항상 안전하다.",
        "reality": "검증 필요.",
        "case": "오픈소스 악용; 코드 검토 도입."
      }
    ]
  },
  {
    "category": "운영 및 유지보수 관련 착각",
    "description": "이 카테고리는 일상 운영에 대한 오해를 다룹니다. 패치 지연 40% 사고 원인.",
    "total": 6,
    "items": [
      {
        "id": 7,
        "misconception": "한 번 보안 설정하면 영원히 안전.",
        "reality": "지속 모니터링 필요.",
        "case": "지연 랜섬웨어; SOC 구축."
      },
      {
        "id": 14,
        "misconception": "백업이 없어도 데이터 안전.",
        "reality": "오프라인 백업 필수.",
        "case": "랜섬웨어 손실; 전략 설계."
      },
      {
        "id": 25,
        "misconception": "보안은 한 번 투자하면 끝난다.",
        "reality": "지속 업데이트 필요.",
        "case": "3년 미업데이트 감염; 감사 프로그램 도입."
      },
      {
        "id": 35,
        "misconception": "보안 소프트웨어 업데이트 불필요.",
        "reality": "지연 주요 원인.",
        "case": "미루다 감염; 자동 정책 수립."
      },
      {
        "id": 38,
        "misconception": "보안은 속도를 저하시킨다.",
        "reality": "DevSecOps로 효율 향상.",
        "case": "지연 착각; 파이프라인 도입."
      },
      {
        "id": 49,
        "misconception": "보안은 IT 예산 일부만 차지하면 된다.",
        "reality": "15% 이상 필요.",
        "case": "부족 피해; 증액 설득."
      }
    ]
  },
  {
    "category": "규제 및 준수 관련 착각",
    "description": "이 카테고리는 준수에 대한 과신을 다룹니다. 인증 후 미준수 40% 사고.",
    "total": 4,
    "items": [
      {
        "id": 18,
        "misconception": "규제 준수만 하면 보안 완벽.",
        "reality": "최소 기준, 위협 중심 필요.",
        "case": "준수만 하다 APT 취약; 인텔리전스 도입."
      },
      {
        "id": 30,
        "misconception": "보안 인증서가 있으면 안전.",
        "reality": "지속 준수 핵심.",
        "case": "미준수 취약 발견; 재인증 강화."
      },
      {
        "id": 43,
        "misconception": "보안은 법규 준수만 하면 된다.",
        "reality": "현실적 위협 중심.",
        "case": "준수만 하다 신종 공격; 인텔리전스 통합."
      },
      {
        "id": 8,
        "misconception": "보안 투자는 비용만 발생시킨다. (준수 비용 관점)",
        "reality": "ROI 높음.",
        "case": "예산 줄여 손실; 분석 설득."
      }
    ]
  },
  {
    "category": "신흥 기술 관련 착각",
    "description": "이 카테고리는 AI·IoT 등 신기술에 대한 오해를 다룹니다. AI 악용 70% 증가.",
    "total": 4,
    "items": [
      {
        "id": 16,
        "misconception": "IoT 기기는 해킹되지 않는다.",
        "reality": "취약점 70%.",
        "case": "카메라 해킹; 격리 구축."
      },
      {
        "id": 21,
        "misconception": "Mac/iOS는 바이러스 안 걸린다.",
        "reality": "Mac 멀웨어 50% 증가.",
        "case": "피싱 감염; 크로스플랫폼 스캔."
      },
      {
        "id": 34,
        "misconception": "양자 컴퓨팅은 먼 미래.",
        "reality": "2025년 준비 필요.",
        "case": "무시 노출; 안전 알고리즘 도입."
      },
      {
        "id": 44,
        "misconception": "클라우드 마이그레이션으로 보안 자동 강화.",
        "reality": "설정 오류 위험.",
        "case": "마이그레이션 유출; 보안 감사."
      }
    ]
  }
]
