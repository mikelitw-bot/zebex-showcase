export type Lang = 'en' | 'ko' | 'zh-TW' | 'de';

export const translations = {
  en: {
    nav: {
      laserSensors: 'Laser Sensors',
      fixedScanners: 'Fixed Scanners',
      scanModules: 'Scan Modules',
      handheldScanners: 'Handheld Scanners',
    },
    hero: {
      tagline: 'Turn Input Into Insight Instantly',
      subtitle: 'Smart scanning unlocks valuable, actionable data throughout every operation seamlessly.',
      cta: 'Explore Products',
    },
    productNav: {
      overview: 'Overview',
      specs: 'Specifications',
      applications: 'Applications',
    },
    whyLaser: {
      badge: 'Technology Advantage',
      title: 'Why Laser Sensor?',
      subtitle: 'Laser BGS (Background Suppression) vs LED Red Light — designed for precision industrial automation.',
      laser: 'Laser BGS',
      led: 'LED Red Light',
      laserDesc: 'A high-precision sensing technology utilizing focused laser beams to detect objects based on distance, effectively ignoring distracting backgrounds.',
      ledDesc: 'A standard sensing solution using a more diffuse visible red light beam, typically suited for general-purpose detection at shorter ranges.',
      comparison: [
        {
          category: 'Beam Precision & Spot Size',
          laserVal: 'Highly concentrated, small light spot for detecting minute parts.',
          ledVal: 'Wider, more diffuse beam.',
          laserWin: true,
        },
        {
          category: 'Sensing Range & Depth',
          laserVal: 'Extended sensing distances and superior depth resolution.',
          ledVal: 'Limited range and standard depth resolution.',
          laserWin: true,
        },
        {
          category: 'Material & Color Sensitivity',
          laserVal: 'Significantly less affected by target color or surface reflectivity.',
          ledVal: 'May struggle with varying target colors or surface reflectivity.',
          laserWin: true,
        },
      ],
      advantages: [
        {
          title: 'Superior Background Suppression',
          desc: 'Ignores any object beyond the set focal point, eliminating false triggers from conveyor belts or machine frames.',
          icon: 'shield',
        },
        {
          title: 'Micro-Object Detection',
          desc: 'Narrow laser beam allows for the precise detection of extremely small components or features that an LED sensor would overlook.',
          icon: 'target',
        },
        {
          title: 'Operational Reliability',
          desc: 'Ensures consistent performance in high-speed environments, reducing downtime and increasing overall system throughput.',
          icon: 'zap',
        },
      ],
    },
    applications: {
      title: 'Industrial Applications',
      subtitle: 'Engineered for the environments where precision matters most.',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to find the right solution for your operation?',
      role: 'Sales Manager',
      email: 'mike.lee@zebex.com',
      cta: 'Send an Email',
    },
    specs: 'Specifications',
    keyFeatures: 'Key Features',
    viewSpecs: 'View Full Specs',
    learnMore: 'Learn More',
  },

  ko: {
    nav: {
      laserSensors: '레이저 센서',
      fixedScanners: '고정형 스캐너',
      scanModules: '스캔 모듈',
      handheldScanners: '핸드헬드 스캐너',
    },
    hero: {
      tagline: '입력을 즉시 인사이트로 전환',
      subtitle: '스마트 스캐닝으로 모든 운영 과정에서 귀중하고 실행 가능한 데이터를 원활하게 제공합니다.',
      cta: '제품 살펴보기',
    },
    productNav: {
      overview: '개요',
      specs: '사양',
      applications: '응용 분야',
    },
    whyLaser: {
      badge: '기술 우위',
      title: '왜 레이저 센서인가?',
      subtitle: '레이저 BGS(배경 억제) vs LED 적색광 — 정밀 산업 자동화를 위해 설계되었습니다.',
      laser: '레이저 BGS',
      led: 'LED 적색광',
      laserDesc: '거리를 기반으로 물체를 감지하는 집중 레이저 빔을 활용하는 고정밀 감지 기술로, 방해가 되는 배경을 효과적으로 무시합니다.',
      ledDesc: '더 분산된 가시적 적색광 빔을 사용하는 표준 감지 솔루션으로, 일반적으로 단거리 범용 감지에 적합합니다.',
      comparison: [
        {
          category: '빔 정밀도 및 스팟 크기',
          laserVal: '미세 부품 감지를 위한 고도로 집중된 작은 광점.',
          ledVal: '더 넓고 분산된 빔.',
          laserWin: true,
        },
        {
          category: '감지 범위 및 깊이',
          laserVal: '확장된 감지 거리와 우수한 깊이 해상도.',
          ledVal: '제한된 범위와 표준 깊이 해상도.',
          laserWin: true,
        },
        {
          category: '재질 및 색상 민감도',
          laserVal: '목표 색상 또는 표면 반사율에 훨씬 덜 영향받음.',
          ledVal: '다양한 목표 색상이나 표면 반사율에 어려움을 겪을 수 있음.',
          laserWin: true,
        },
      ],
      advantages: [
        {
          title: '우수한 배경 억제',
          desc: '설정된 초점 이상의 모든 물체를 무시하여 컨베이어 벨트나 기계 프레임의 오작동 감지를 제거합니다.',
          icon: 'shield',
        },
        {
          title: '초소형 물체 감지',
          desc: '좁은 레이저 빔으로 LED 센서가 놓칠 수 있는 매우 작은 부품이나 특징을 정밀하게 감지합니다.',
          icon: 'target',
        },
        {
          title: '운영 신뢰성',
          desc: '고속 환경에서 일관된 성능을 보장하여 다운타임을 줄이고 전체 시스템 처리량을 높입니다.',
          icon: 'zap',
        },
      ],
    },
    applications: {
      title: '산업 응용 분야',
      subtitle: '정밀도가 가장 중요한 환경을 위해 설계되었습니다.',
    },
    contact: {
      title: '문의하기',
      subtitle: '귀사의 운영에 맞는 솔루션을 찾을 준비가 되셨나요?',
      role: '영업 매니저',
      email: 'mike.lee@zebex.com',
      cta: '이메일 보내기',
    },
    specs: '사양',
    keyFeatures: '주요 기능',
    viewSpecs: '전체 사양 보기',
    learnMore: '자세히 보기',
  },

  'zh-TW': {
    nav: {
      laserSensors: '雷射感測器',
      fixedScanners: '固定式掃描器',
      scanModules: '掃描模組',
      handheldScanners: '手持式掃描器',
    },
    hero: {
      tagline: '即時將輸入轉化為洞察',
      subtitle: '智慧掃描在每個作業環節中無縫解鎖有價值、可執行的資料。',
      cta: '探索產品',
    },
    productNav: {
      overview: '概覽',
      specs: '規格',
      applications: '應用場景',
    },
    whyLaser: {
      badge: '技術優勢',
      title: '為什麼選擇雷射感測器？',
      subtitle: '雷射 BGS（背景抑制）vs LED 紅光 — 專為精密工業自動化設計。',
      laser: '雷射 BGS',
      led: 'LED 紅光',
      laserDesc: '一種高精度感測技術，利用聚焦雷射光束根據距離偵測物體，有效忽略干擾背景。',
      ledDesc: '使用較分散的可見紅光光束的標準感測解決方案，通常適用於較短距離的一般用途偵測。',
      comparison: [
        {
          category: '光束精度與光點大小',
          laserVal: '高度集中的小光點，用於偵測微小零件。',
          ledVal: '較寬、較分散的光束。',
          laserWin: true,
        },
        {
          category: '感測範圍與深度',
          laserVal: '更長的感測距離和更優越的深度解析度。',
          ledVal: '有限的範圍和標準深度解析度。',
          laserWin: true,
        },
        {
          category: '材質與顏色靈敏度',
          laserVal: '受目標顏色或表面反射率影響顯著較小。',
          ledVal: '可能難以處理不同的目標顏色或表面反射率。',
          laserWin: true,
        },
      ],
      advantages: [
        {
          title: '優越的背景抑制',
          desc: '忽略設定焦點以外的任何物體，消除來自輸送帶或機器框架的誤觸發。',
          icon: 'shield',
        },
        {
          title: '微型物體偵測',
          desc: '窄雷射光束可精確偵測 LED 感測器無法識別的極小元件或特徵。',
          icon: 'target',
        },
        {
          title: '作業可靠性',
          desc: '確保在高速環境中的持續性能，減少停機時間並提高整體系統吞吐量。',
          icon: 'zap',
        },
      ],
    },
    applications: {
      title: '工業應用場景',
      subtitle: '專為精度最重要的環境所設計。',
    },
    contact: {
      title: '聯絡我們',
      subtitle: '準備好為您的作業尋找合適的解決方案了嗎？',
      role: '業務經理',
      email: 'mike.lee@zebex.com',
      cta: '發送電子郵件',
    },
    specs: '規格',
    keyFeatures: '主要特點',
    viewSpecs: '查看完整規格',
    learnMore: '了解更多',
  },

  de: {
    nav: {
      laserSensors: 'Lasersensoren',
      fixedScanners: 'Stationäre Scanner',
      scanModules: 'Scan-Module',
      handheldScanners: 'Handscanner',
    },
    hero: {
      tagline: 'Input sofort in Erkenntnisse umwandeln',
      subtitle: 'Intelligentes Scannen erschließt wertvolle, umsetzbare Daten in jedem Betriebsablauf nahtlos.',
      cta: 'Produkte entdecken',
    },
    productNav: {
      overview: 'Übersicht',
      specs: 'Technische Daten',
      applications: 'Anwendungen',
    },
    whyLaser: {
      badge: 'Technologievorteil',
      title: 'Warum Lasersensor?',
      subtitle: 'Laser BGS (Hintergrundunterdrückung) vs. LED-Rotlicht — entwickelt für präzise Industrieautomation.',
      laser: 'Laser BGS',
      led: 'LED-Rotlicht',
      laserDesc: 'Eine hochpräzise Sensortechnologie mit fokussierten Laserstrahlen zur entfernungsbasierten Objekterkennung, die störende Hintergründe effektiv ignoriert.',
      ledDesc: 'Eine Standard-Sensoarlösung mit einem breiter gestreuten sichtbaren Rotlichtstrahl, typischerweise geeignet für Allzweckerkennung auf kürzeren Entfernungen.',
      comparison: [
        {
          category: 'Strahlpräzision & Punktgröße',
          laserVal: 'Hochkonzentrierter, kleiner Lichtpunkt zur Erkennung kleinster Teile.',
          ledVal: 'Breiterer, stärker gestreuter Strahl.',
          laserWin: true,
        },
        {
          category: 'Erfassungsreichweite & Tiefe',
          laserVal: 'Erweiterte Erfassungsdistanzen und überlegene Tiefenauflösung.',
          ledVal: 'Begrenzte Reichweite und Standard-Tiefenauflösung.',
          laserWin: true,
        },
        {
          category: 'Material- & Farbempfindlichkeit',
          laserVal: 'Deutlich weniger beeinflusst von Zielfarbe oder Oberflächenreflexion.',
          ledVal: 'Kann bei unterschiedlichen Zielfarben oder Oberflächenreflexionen Probleme haben.',
          laserWin: true,
        },
      ],
      advantages: [
        {
          title: 'Überlegene Hintergrundunterdrückung',
          desc: 'Ignoriert alle Objekte jenseits des eingestellten Fokuspunkts und eliminiert Fehlauslösungen durch Förderbänder oder Maschinenrahmen.',
          icon: 'shield',
        },
        {
          title: 'Mikro-Objekterkennung',
          desc: 'Der schmale Laserstrahl ermöglicht die präzise Erkennung extrem kleiner Bauteile, die ein LED-Sensor übersehen würde.',
          icon: 'target',
        },
        {
          title: 'Betriebszuverlässigkeit',
          desc: 'Gewährleistet gleichmäßige Leistung in Hochgeschwindigkeitsumgebungen, reduziert Ausfallzeiten und erhöht den Systemdurchsatz.',
          icon: 'zap',
        },
      ],
    },
    applications: {
      title: 'Industrieanwendungen',
      subtitle: 'Entwickelt für Umgebungen, in denen Präzision an erster Stelle steht.',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Bereit, die richtige Lösung für Ihren Betrieb zu finden?',
      role: 'Vertriebsleiter',
      email: 'mike.lee@zebex.com',
      cta: 'E-Mail senden',
    },
    specs: 'Technische Daten',
    keyFeatures: 'Hauptmerkmale',
    viewSpecs: 'Vollständige Spezifikationen',
    learnMore: 'Mehr erfahren',
  },
};
