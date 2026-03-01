export type ProductLine = 'laser-sensors' | 'fixed-scanners' | 'scan-modules' | 'handheld-scanners';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  model: string;
  name: { en: string; ko: string; 'zh-TW': string };
  tagline: { en: string; ko: string; 'zh-TW': string };
  description: { en: string; ko: string; 'zh-TW': string };
  features: { en: string[]; ko: string[]; 'zh-TW': string[] };
  specs: ProductSpec[];
  image: string;
  accentColor: string;
}

export interface ProductLineData {
  id: ProductLine;
  name: { en: string; ko: string; 'zh-TW': string };
  tagline: { en: string; ko: string; 'zh-TW': string };
  heroImage: string;
  products: Product[];
  applications: { en: ApplicationItem[]; ko: ApplicationItem[]; 'zh-TW': ApplicationItem[] };
  showWhyLaser?: boolean;
}

export interface ApplicationItem {
  title: string;
  description: string;
  icon: string;
}

export const productLines: ProductLineData[] = [
  {
    id: 'laser-sensors',
    showWhyLaser: true,
    name: {
      en: 'Laser Sensors',
      ko: '레이저 센서',
      'zh-TW': '雷射感測器',
    },
    tagline: {
      en: 'Precision sensing beyond limits.',
      ko: '한계를 초월한 정밀 감지.',
      'zh-TW': '突破極限的精密感測。',
    },
    heroImage: '/images/products/zx-td0200n-sheet.png',
    products: [
      {
        id: 'zx-pe0040n',
        model: 'ZX-PE0040N',
        name: {
          en: 'Laser Sensor',
          ko: '레이저 센서',
          'zh-TW': '雷射感測器',
        },
        tagline: {
          en: 'Ultra-precise point detection at 40mm.',
          ko: '40mm에서의 초정밀 포인트 감지.',
          'zh-TW': '40mm 超精密點感測。',
        },
        description: {
          en: 'The ZX-PE0040N photoelectric sensor delivers pinpoint 0.1mm spot accuracy at its rated 40mm detection range. Built for high-density component detection on PCB lines and precision assembly systems.',
          ko: 'ZX-PE0040N 광전 센서는 40mm 정격 감지 거리에서 0.1mm 스팟 정밀도를 제공합니다. PCB 라인과 정밀 조립 시스템에서의 고밀도 부품 감지를 위해 설계되었습니다.',
          'zh-TW': 'ZX-PE0040N 光電感測器在 40mm 額定偵測距離下提供精準的 0.1mm 光點精度。專為 PCB 生產線和精密組裝系統上的高密度元件偵測所設計。',
        },
        features: {
          en: [
            'IEC standard photoelectric sensing',
            '0.1mm ultra-fine spot at 40mm distance',
            'Laser Red 650nm, Class 2 — safe & precise',
            '< 1ms response time for high-speed lines',
            'IP66 protection — dust-tight & jet-water resistant',
            'Operating range: −10°C to 55°C',
          ],
          ko: [
            'IEC 표준 광전 감지',
            '40mm 거리에서 0.1mm 초미세 스팟',
            '레이저 레드 650nm, Class 2 — 안전하고 정밀함',
            '고속 라인을 위한 < 1ms 응답 시간',
            'IP66 보호 — 방진 및 방수젯',
            '작동 범위: −10°C ~ 55°C',
          ],
          'zh-TW': [
            'IEC 標準光電感測',
            '40mm 距離下 0.1mm 超細光點',
            '雷射紅光 650nm，Class 2 — 安全且精確',
            '< 1ms 響應時間，適用於高速生產線',
            'IP66 防護 — 防塵且耐水柱噴射',
            '工作範圍：−10°C 至 55°C',
          ],
        },
        specs: [
          { label: 'Working Principle', value: 'Photoelectric Sensor' },
          { label: 'Detection Range', value: '40 mm' },
          { label: 'Light Source', value: 'Laser Red 650nm, Class 2' },
          { label: 'Spot Size', value: '~0.1mm @ 40mm' },
          { label: 'Sensitivity', value: '8-turn potentiometer' },
          { label: 'Response Time', value: '< 1 ms' },
          { label: 'Operating Temp', value: '−10°C to 55°C' },
          { label: 'Protection', value: 'IP66' },
        ],
        image: '/images/products/zx-pe0040n.png',
        accentColor: '#D4192C',
      },
      {
        id: 'zx-td0200n',
        model: 'ZX-TD0200N',
        name: {
          en: 'TOF Laser Sensor',
          ko: 'TOF 레이저 센서',
          'zh-TW': 'TOF 雷射感測器',
        },
        tagline: {
          en: 'Time-of-Flight precision up to 2000mm.',
          ko: '2000mm까지의 비행 시간 정밀도.',
          'zh-TW': '飛行時間精度達 2000mm。',
        },
        description: {
          en: 'The ZX-TD0200N uses Time-of-Flight (TOF) technology to deliver reliable detection across multi-material, multi-color targets up to 2 meters away — where LED sensors fail. Perfect for conveyor height checks, pallet sensing, and AGV applications.',
          ko: 'ZX-TD0200N은 비행 시간(TOF) 기술을 사용하여 최대 2미터 떨어진 다중 재질, 다중 색상 목표에 걸쳐 신뢰할 수 있는 감지를 제공합니다. 컨베이어 높이 확인, 팔레트 감지, AGV 응용 프로그램에 적합합니다.',
          'zh-TW': 'ZX-TD0200N 採用飛行時間（TOF）技術，在最遠 2 公尺距離的多材質、多顏色目標上提供可靠偵測——這是 LED 感測器無法做到的。完美適用於輸送帶高度檢查、棧板感測和 AGV 應用。',
        },
        features: {
          en: [
            'TOF (Time-of-Flight) principle — material & color independent',
            'Detection range: 100–2000 mm',
            'Spot size: 5mm @ 200mm — focused beam',
            '< 1ms response for real-time control',
            'IP64 protection — industrial-grade',
            'Operating: −10°C to 55°C (No Freezing)',
            'Light Source: Laser Red 650nm, Class 2',
          ],
          ko: [
            'TOF (비행 시간) 원리 — 재질 및 색상 독립적',
            '감지 범위: 100–2000 mm',
            '스팟 크기: 200mm에서 5mm — 집중 빔',
            '실시간 제어를 위한 < 1ms 응답',
            'IP64 보호 — 산업용 등급',
            '작동: −10°C ~ 55°C (동결 없음)',
            '광원: 레이저 레드 650nm, Class 2',
          ],
          'zh-TW': [
            'TOF（飛行時間）原理 — 與材質和顏色無關',
            '偵測範圍：100–2000 mm',
            '光點大小：200mm 處 5mm — 聚焦光束',
            '< 1ms 響應，用於實時控制',
            'IP64 防護 — 工業級別',
            '工作溫度：−10°C 至 55°C（無冷凍）',
            '光源：雷射紅光 650nm，Class 2',
          ],
        },
        specs: [
          { label: 'Working Principle', value: 'TOF (Time to Flight)' },
          { label: 'Detection Range', value: '100 ~ 2000 mm' },
          { label: 'Light Source', value: 'Laser Red 650nm, Class 2' },
          { label: 'Spot Size', value: '5mm @ 200mm' },
          { label: 'Response Time', value: '< 1 ms' },
          { label: 'Button', value: 'Button Setting' },
          { label: 'Operating Temp', value: '−10°C to 55°C' },
          { label: 'Protection', value: 'IP64' },
        ],
        image: '/images/products/zx-td0200n.png',
        accentColor: '#D4192C',
      },
    ],
    applications: {
      en: [
        {
          title: 'Conveyor Belt Monitoring',
          description: 'Detect package height, presence, and gaps on high-speed conveyor lines without false triggers from belt surfaces or ambient light.',
          icon: '🏭',
        },
        {
          title: 'AGV & Robot Navigation',
          description: 'Provide precise distance feedback for autonomous guided vehicles and robotic arms requiring reliable obstacle detection up to 2 meters.',
          icon: '🤖',
        },
        {
          title: 'PCB Component Inspection',
          description: 'Ultra-fine 0.1mm spot size enables detection of micro-components on circuit boards — critical for surface-mount technology lines.',
          icon: '🔬',
        },
        {
          title: 'Pallet & Rack Sensing',
          description: 'Confirm pallet presence and positioning in warehouse racking systems, with color-independent TOF sensing for all pallet materials.',
          icon: '📦',
        },
      ],
      ko: [
        {
          title: '컨베이어 벨트 모니터링',
          description: '벨트 표면이나 주변광의 오작동 없이 고속 컨베이어 라인에서 패키지 높이, 존재 여부 및 간격을 감지합니다.',
          icon: '🏭',
        },
        {
          title: 'AGV 및 로봇 내비게이션',
          description: '최대 2미터까지 신뢰할 수 있는 장애물 감지가 필요한 자율 유도 차량 및 로봇 팔에 정확한 거리 피드백을 제공합니다.',
          icon: '🤖',
        },
        {
          title: 'PCB 부품 검사',
          description: '0.1mm 초미세 스팟 크기로 회로 기판의 마이크로 부품 감지 가능 — 표면 실장 기술 라인에 필수적입니다.',
          icon: '🔬',
        },
        {
          title: '팔레트 및 랙 감지',
          description: '모든 팔레트 재질에 대한 색상 독립적 TOF 감지로 창고 선반 시스템에서 팔레트 존재 및 위치를 확인합니다.',
          icon: '📦',
        },
      ],
      'zh-TW': [
        {
          title: '輸送帶監控',
          description: '在高速輸送帶生產線上偵測包裝高度、存在情況和間隙，不受皮帶表面或環境光線的誤觸發影響。',
          icon: '🏭',
        },
        {
          title: 'AGV 和機器人導航',
          description: '為需要可靠障礙物偵測（最遠 2 公尺）的自主導引車和機械臂提供精確的距離回饋。',
          icon: '🤖',
        },
        {
          title: 'PCB 元件檢測',
          description: '超細 0.1mm 光點大小，可偵測電路板上的微型元件——對於表面貼裝技術生產線至關重要。',
          icon: '🔬',
        },
        {
          title: '棧板和貨架感測',
          description: '以與顏色無關的 TOF 感測確認倉庫貨架系統中所有棧板材質的棧板存在和定位。',
          icon: '📦',
        },
      ],
    },
  },

  {
    id: 'fixed-scanners',
    name: {
      en: 'Fixed Industrial Scanners',
      ko: '고정형 산업용 스캐너',
      'zh-TW': '固定式工業掃描器',
    },
    tagline: {
      en: 'Always-on intelligence for automated lines.',
      ko: '자동화 라인을 위한 상시 작동 인텔리전스.',
      'zh-TW': '自動化生產線的持續智慧監控。',
    },
    heroImage: '/images/products/zx-3020-sheet.png',
    products: [
      {
        id: 'zx-1060',
        model: 'ZX-1060',
        name: {
          en: '2D Image Fixed Industrial Scanner',
          ko: '2D 이미지 고정형 산업용 스캐너',
          'zh-TW': '2D 影像固定式工業掃描器',
        },
        tagline: {
          en: 'Fast, precise, and drop-proof.',
          ko: '빠르고, 정밀하며, 낙하 방지.',
          'zh-TW': '快速、精確且防摔。',
        },
        description: {
          en: 'The ZX-1060 delivers real-time solutions with fast, precise focusing for high-throughput automation lines. IP67-rated and validated to survive 1.8m drops, it thrives in demanding factory environments where uptime is non-negotiable.',
          ko: 'ZX-1060은 고처리량 자동화 라인을 위해 빠르고 정밀한 포커싱으로 실시간 솔루션을 제공합니다. IP67 등급이며 1.8m 낙하를 견딜 수 있어, 가동 시간이 필수적인 까다로운 공장 환경에서 활약합니다.',
          'zh-TW': 'ZX-1060 為高吞吐量自動化生產線提供具有快速精準對焦的即時解決方案。IP67 等級，經驗證可承受 1.8m 跌落，在對停機時間要求嚴格的惡劣工廠環境中表現卓越。',
        },
        features: {
          en: [
            'Real-time fast, precise auto-focus',
            'Withstands 1.8m multiple drop tests',
            'IP67 — dust-tight & full water immersion',
            'Advanced DPM (Direct Part Marking) decoding',
            'Modbus, Ethernet/IP, PROFINET support',
            'USB-A & WiFi Auto-Forward connectivity',
          ],
          ko: [
            '실시간 빠르고 정밀한 자동 포커스',
            '1.8m 다중 낙하 테스트 통과',
            'IP67 — 방진 및 완전 방수',
            '고급 DPM (직접 부품 마킹) 디코딩',
            'Modbus, Ethernet/IP, PROFINET 지원',
            'USB-A 및 WiFi Auto-Forward 연결',
          ],
          'zh-TW': [
            '即時快速精準自動對焦',
            '承受 1.8m 多次跌落測試',
            'IP67 — 防塵且完全防水浸泡',
            '先進的 DPM（直接零件標記）解碼',
            '支援 Modbus、Ethernet/IP、PROFINET',
            'USB-A 和 WiFi 自動轉發連線',
          ],
        },
        specs: [
          { label: 'Image Sensor', value: 'CMOS' },
          { label: 'Interface', value: 'USB-A, WiFi (Auto Fwd.)' },
          { label: 'IP Rating', value: 'IP67' },
          { label: 'Drop Resistance', value: '1.8m multiple drops' },
          { label: 'Decoding', value: 'All 1D/2D + DPM' },
          { label: 'Protocol', value: 'Modbus, Ethernet/IP, PROFINET' },
        ],
        image: '/images/products/zx-1060.png',
        accentColor: '#1A1A2E',
      },
      {
        id: 'zx-3020',
        model: 'ZX-3020',
        name: {
          en: '2D Image Fixed Industrial Scanner',
          ko: '2D 이미지 고정형 산업용 스캐너',
          'zh-TW': '2D 影像固定式工業掃描器',
        },
        tagline: {
          en: 'AI vision. Adaptive focus. Zero dead angles.',
          ko: 'AI 비전. 적응형 포커스. 제로 데드 앵글.',
          'zh-TW': 'AI 視覺。自適應對焦。零死角。',
        },
        description: {
          en: 'The ZX-3020 redefines fixed-mount scanning with AI-powered image processing, one-key smart light setup, and flexible 10–100cm working distance with zero dead zones. Four light sources with 8 configurable modes adapt to any barcode, DPM, or surface.',
          ko: 'ZX-3020은 AI 기반 이미지 처리, 원키 스마트 조명 설정, 그리고 제로 데드존의 10–100cm 유연한 작업 거리로 고정형 스캐닝을 재정의합니다. 8가지 구성 가능한 모드의 4가지 광원이 모든 바코드, DPM 또는 표면에 적응합니다.',
          'zh-TW': 'ZX-3020 憑藉 AI 影像處理、一鍵智慧光源設定和 10–100cm 零死角彈性工作距離，重新定義固定式掃描。4 組光源配備 8 種可配置模式，適應任何條碼、DPM 或表面。',
        },
        features: {
          en: [
            'AI image processing — instant color & code recognition',
            'Smart focus: adjustable lens, 100–1500mm DOF',
            'One-key light source configuration',
            '4 light sources × 8 modes for any surface',
            '10–100cm flexible working distance, zero dead angles',
            'RS232, Ethernet, Profibus, EtherNet/IP, PROFINET, EtherCAT',
            'CE, FCC, VCCI, BSMI, UKCA certified',
          ],
          ko: [
            'AI 이미지 처리 — 즉각적인 색상 및 코드 인식',
            '스마트 포커스: 조정 가능한 렌즈, 100–1500mm DOF',
            '원키 광원 구성',
            '모든 표면을 위한 4가지 광원 × 8가지 모드',
            '10–100cm 유연한 작업 거리, 제로 데드 앵글',
            'RS232, Ethernet, Profibus, EtherNet/IP, PROFINET, EtherCAT',
            'CE, FCC, VCCI, BSMI, UKCA 인증',
          ],
          'zh-TW': [
            'AI 影像處理 — 即時色彩和條碼識別',
            '智慧對焦：可調鏡頭，DOF 100–1500mm',
            '一鍵光源配置',
            '4 組光源 × 8 種模式，適應任何表面',
            '10–100cm 彈性工作距離，零死角',
            '支援 RS232、Ethernet、Profibus、EtherNet/IP、PROFINET、EtherCAT',
            'CE、FCC、VCCI、BSMI、UKCA 認證',
          ],
        },
        specs: [
          { label: 'Image Sensor', value: '1280 × 800 CMOS' },
          { label: 'DOF', value: '100–1500mm (Adjustable Focus)' },
          { label: 'Dimension', value: '55 × 55.5 × 65 mm' },
          { label: 'Weight', value: '229 g' },
          { label: 'Power', value: '24 VDC / 15W' },
          { label: 'Interface', value: 'RS232, Ethernet, EtherCAT, PROFINET, Modbus TCP' },
          { label: 'IP Rating', value: 'IP65' },
          { label: 'Certification', value: 'CE, FCC, VCCI, BSMI, UKCA' },
        ],
        image: '/images/products/zx-3020.png',
        accentColor: '#D4192C',
      },
      {
        id: 'zx-3050',
        model: 'ZX-3050',
        name: {
          en: '2D Image Fixed Industrial Scanner',
          ko: '2D 이미지 고정형 산업용 스캐너',
          'zh-TW': '2D 影像固定式工業掃描器',
        },
        tagline: {
          en: 'Quad-core speed meets wide-field vision.',
          ko: '쿼드 코어 속도가 광각 비전을 만나다.',
          'zh-TW': '四核心速度結合寬視野視覺。',
        },
        description: {
          en: 'The ZX-3050 combines a quad-linear high-speed processor with a high-resolution sensor, dual red and white lighting, and a wide field of view to deliver industrial-grade scanning at unmatched throughput. IP65-rated for water and dust protection.',
          ko: 'ZX-3050은 쿼드 리니어 고속 프로세서와 고해상도 센서, 이중 적색/백색 조명, 광각 시야를 결합하여 탁월한 처리량으로 산업용 스캐닝을 제공합니다. 방수 및 방진 IP65 등급.',
          'zh-TW': 'ZX-3050 結合四線性高速處理器和高解析度感測器、紅白雙光照明及寬視野，以無與倫比的吞吐量提供工業級掃描。IP65 等級，防水防塵。',
        },
        features: {
          en: [
            'Quad-linear high-speed processor',
            'High-resolution CMOS sensor',
            'Dual lighting: red + white illumination',
            'Wide FOV with large depth of field',
            'One-touch autofocus setup',
            'IP65 industrial-grade water & dust protection',
          ],
          ko: [
            '쿼드 리니어 고속 프로세서',
            '고해상도 CMOS 센서',
            '이중 조명: 적색 + 백색 조명',
            '대형 피사계 심도의 광각 FOV',
            '원터치 자동 포커스 설정',
            'IP65 산업용 방수 및 방진',
          ],
          'zh-TW': [
            '四線性高速處理器',
            '高解析度 CMOS 感測器',
            '雙光照明：紅光 + 白光',
            '大景深寬視野 FOV',
            '一鍵自動對焦設置',
            'IP65 工業級防水防塵',
          ],
        },
        specs: [
          { label: 'Processor', value: 'Quad-linear High-Speed' },
          { label: 'Sensor', value: 'High-Resolution CMOS' },
          { label: 'Lighting', value: 'Dual Red + White' },
          { label: 'IP Rating', value: 'IP65' },
          { label: 'Interface', value: 'Ethernet' },
          { label: 'Focus', value: 'One-Touch Autofocus' },
        ],
        image: '/images/products/zx-3050.png',
        accentColor: '#1A1A2E',
      },
    ],
    applications: {
      en: [
        {
          title: 'Automotive Assembly Lines',
          description: 'Track VIN plates, part labels, and DPM codes stamped directly on engine blocks and chassis — even with oil, grease, or laser-etched surfaces.',
          icon: '🚗',
        },
        {
          title: 'Pharmaceutical Packaging',
          description: 'Verify 2D DataMatrix and QR codes on blister packs and vials at line speed. Ensure traceability compliance across every serialized item.',
          icon: '💊',
        },
        {
          title: 'E-Commerce Fulfillment Centers',
          description: 'Capture barcodes on packages moving at high speed across multiple conveyor lanes with zero-angle dead zones and adaptive focus.',
          icon: '📫',
        },
        {
          title: 'Electronics Manufacturing',
          description: 'Read micro DPM codes laser-etched or chemically marked on PCBs, chips, and connectors with advanced image processing.',
          icon: '⚡',
        },
      ],
      ko: [
        {
          title: '자동차 조립 라인',
          description: '오일, 그리스 또는 레이저 에칭 표면에서도 엔진 블록 및 섀시에 직접 각인된 VIN 플레이트, 부품 라벨 및 DPM 코드를 추적합니다.',
          icon: '🚗',
        },
        {
          title: '제약 포장',
          description: '라인 속도에서 블리스터 팩과 바이알의 2D 데이터 매트릭스 및 QR 코드를 확인합니다. 직렬화된 모든 항목에 걸쳐 추적 가능성 준수를 보장합니다.',
          icon: '💊',
        },
        {
          title: '전자상거래 이행 센터',
          description: '제로 앵글 데드존과 적응형 포커스로 여러 컨베이어 레인을 고속으로 이동하는 패키지의 바코드를 캡처합니다.',
          icon: '📫',
        },
        {
          title: '전자 제조',
          description: '고급 이미지 처리로 PCB, 칩 및 커넥터에 레이저 에칭 또는 화학적으로 마킹된 마이크로 DPM 코드를 읽습니다.',
          icon: '⚡',
        },
      ],
      'zh-TW': [
        {
          title: '汽車裝配線',
          description: '追蹤直接刻印在引擎缸體和底盤上的 VIN 銘牌、零件標籤和 DPM 代碼——即使在沾有油污、油脂或雷射蝕刻的表面也能讀取。',
          icon: '🚗',
        },
        {
          title: '藥品包裝',
          description: '以生產線速度驗證泡殼包裝和小瓶上的 2D DataMatrix 和 QR 碼。確保每個序列化項目的可追溯性合規。',
          icon: '💊',
        },
        {
          title: '電商履行中心',
          description: '以零死角和自適應對焦捕獲多條輸送帶上高速移動包裹的條碼。',
          icon: '📫',
        },
        {
          title: '電子製造',
          description: '以先進影像處理讀取 PCB、晶片和連接器上雷射蝕刻或化學標記的微型 DPM 代碼。',
          icon: '⚡',
        },
      ],
    },
  },

  {
    id: 'scan-modules',
    name: {
      en: 'Scan Modules',
      ko: '스캔 모듈',
      'zh-TW': '掃描模組',
    },
    tagline: {
      en: 'Embed scanning intelligence anywhere.',
      ko: '어디서나 스캔 인텔리전스를 내장.',
      'zh-TW': '隨處嵌入掃描智慧。',
    },
    heroImage: '/images/products/product-lineup.png',
    products: [
      {
        id: 'z-5552-plus',
        model: 'Z-5552 Plus',
        name: {
          en: '2D Image Scan Module',
          ko: '2D 이미지 스캔 모듈',
          'zh-TW': '2D 影像掃描模組',
        },
        tagline: {
          en: 'The brain behind your kiosk or self-checkout.',
          ko: '키오스크 또는 셀프체크아웃의 두뇌.',
          'zh-TW': '您的自助服務機或自助結帳背後的大腦。',
        },
        description: {
          en: 'Z-5552 Plus is a high-performance scan engine designed for embedding into kiosks, ATMs, vending machines, POS terminals, and self-checkout systems. Exceptional motion tolerance and screen-barcode reading capability make it ideal for modern omnichannel retail and smart hospitality.',
          ko: 'Z-5552 Plus는 키오스크, ATM, 자판기, POS 단말기 및 셀프 체크아웃 시스템에 내장하기 위해 설계된 고성능 스캔 엔진입니다. 탁월한 모션 내성과 화면 바코드 읽기 기능으로 현대적인 옴니채널 소매 및 스마트 호스피탈리티에 이상적입니다.',
          'zh-TW': 'Z-5552 Plus 是一款高效能掃描引擎，專為嵌入自助服務機、ATM、自動販賣機、POS 終端機和自助結帳系統而設計。卓越的動態容錯能力和螢幕條碼讀取功能，使其成為現代全通路零售和智慧款待業的理想選擇。',
        },
        features: {
          en: [
            'Exceptional motion tolerance for moving targets',
            'Reads 1D & 2D codes from screens (phone, tablet, monitor)',
            'Captures barcodes off any display surface',
            'Designed for kiosk, ATM & POS integration',
            'Wide-angle 1280 × 800 CMOS sensor',
            'Flexible DOF: 40–440mm (Code 39 3mil)',
          ],
          ko: [
            '이동 목표를 위한 탁월한 모션 내성',
            '화면(휴대폰, 태블릿, 모니터)에서 1D 및 2D 코드 읽기',
            '모든 디스플레이 표면에서 바코드 캡처',
            '키오스크, ATM 및 POS 통합을 위해 설계',
            '광각 1280 × 800 CMOS 센서',
            '유연한 DOF: 40–440mm (Code 39 3mil)',
          ],
          'zh-TW': [
            '卓越的動態容錯能力，適用於移動目標',
            '讀取螢幕（手機、平板、監視器）上的 1D 和 2D 條碼',
            '捕獲任何顯示表面的條碼',
            '專為自助服務機、ATM 和 POS 整合設計',
            '廣角 1280 × 800 CMOS 感測器',
            '彈性 DOF：40–440mm（Code 39 3mil）',
          ],
        },
        specs: [
          { label: 'Image Sensor', value: '1280 × 800 CMOS' },
          { label: 'DOF (Code 39 3mil)', value: '40–440 mm' },
          { label: 'DOF (EAN-13)', value: '80–110 mm' },
          { label: 'DOF (Code 128 8mil)', value: '40–110 mm' },
          { label: 'DOF (Code 128 6mil)', value: '40–220 mm' },
          { label: 'Min. Resolution', value: '3 mil (30:)' },
          { label: 'Screen Reading', value: 'Mobile, Tablet, Monitor' },
        ],
        image: '/images/products/z-5552-plus.png',
        accentColor: '#D4192C',
      },
    ],
    applications: {
      en: [
        {
          title: 'Self-Checkout & Retail POS',
          description: 'Deliver fast, reliable scanning in self-checkout kiosks and retail POS terminals — reads both printed labels and mobile wallet barcodes from any angle.',
          icon: '🏪',
        },
        {
          title: 'Smart Vending & ATM',
          description: 'Enable contactless QR code redemption in vending machines and ATMs, capturing codes from cracked, worn, or screen-displayed sources.',
          icon: '🏧',
        },
        {
          title: 'Healthcare & Patient ID Kiosks',
          description: 'Read patient wristband barcodes, insurance cards, and e-prescriptions reliably in clinical environments with high hygiene demands.',
          icon: '🏥',
        },
        {
          title: 'Event & Ticketing Gates',
          description: 'Process mobile tickets, QR passes, and NFC codes at access control points with zero-miss scanning under varied lighting conditions.',
          icon: '🎫',
        },
      ],
      ko: [
        {
          title: '셀프 체크아웃 및 소매 POS',
          description: '셀프 체크아웃 키오스크와 소매 POS 단말기에서 빠르고 신뢰할 수 있는 스캐닝을 제공합니다 — 어떤 각도에서도 인쇄 라벨과 모바일 지갑 바코드를 모두 읽습니다.',
          icon: '🏪',
        },
        {
          title: '스마트 자판기 및 ATM',
          description: '자판기와 ATM에서 비접촉 QR 코드 사용을 가능하게 하며, 긁힌, 마모된 또는 화면 표시된 소스에서 코드를 캡처합니다.',
          icon: '🏧',
        },
        {
          title: '의료 및 환자 ID 키오스크',
          description: '위생 요구가 높은 임상 환경에서 환자 팔찌 바코드, 보험 카드 및 전자 처방전을 안정적으로 읽습니다.',
          icon: '🏥',
        },
        {
          title: '이벤트 및 티켓팅 게이트',
          description: '다양한 조명 조건에서 제로 미스 스캐닝으로 액세스 제어 지점에서 모바일 티켓, QR 패스 및 NFC 코드를 처리합니다.',
          icon: '🎫',
        },
      ],
      'zh-TW': [
        {
          title: '自助結帳和零售 POS',
          description: '在自助結帳自助服務機和零售 POS 終端機中提供快速可靠的掃描——從任意角度讀取印刷標籤和行動錢包條碼。',
          icon: '🏪',
        },
        {
          title: '智慧自動販賣機和 ATM',
          description: '在自動販賣機和 ATM 中實現非接觸式 QR 碼兌換，捕獲破損、磨損或螢幕顯示來源的條碼。',
          icon: '🏧',
        },
        {
          title: '醫療和患者 ID 自助服務機',
          description: '在衛生要求高的臨床環境中可靠地讀取患者手環條碼、保險卡和電子處方。',
          icon: '🏥',
        },
        {
          title: '活動和票務閘門',
          description: '在不同照明條件下，以零遺漏掃描在門禁控制點處理行動票券、QR 通行證和 NFC 碼。',
          icon: '🎫',
        },
      ],
    },
  },

  {
    id: 'handheld-scanners',
    name: {
      en: 'Handheld Scanners',
      ko: '핸드헬드 스캐너',
      'zh-TW': '手持式掃描器',
    },
    tagline: {
      en: 'Built rugged. Reads everything.',
      ko: '견고하게 제작. 모든 것을 읽다.',
      'zh-TW': '堅固耐用。讀取一切。',
    },
    heroImage: '/images/products/handheld-lineup.png',
    products: [
      {
        id: 'z-3572',
        model: 'Z-3572',
        name: {
          en: '2D Image Handheld Scanner (Full Range)',
          ko: '2D 이미지 핸드헬드 스캐너 (풀레인지)',
          'zh-TW': '2D 影像手持掃描器（全距離）',
        },
        tagline: {
          en: 'Dual-lens. From 14cm to 3 meters.',
          ko: '듀얼 렌즈. 14cm에서 3미터까지.',
          'zh-TW': '雙鏡頭。從 14cm 到 3 公尺。',
        },
        description: {
          en: 'The Z-3572 features a unique dual-CMOS lens system giving it full-range reading capability from close-up 14cm detail work to warehouse-spanning 3-meter distance reads. IP54-rated rugged housing survives drops, dust, and demanding environments.',
          ko: 'Z-3572는 독특한 듀얼 CMOS 렌즈 시스템으로 근접 14cm 세부 작업에서 창고를 가로지르는 3미터 거리 읽기까지 전 범위 읽기 기능을 제공합니다. IP54 등급 견고한 하우징으로 낙하, 먼지, 까다로운 환경을 견딥니다.',
          'zh-TW': 'Z-3572 具備獨特的雙 CMOS 鏡頭系統，提供全距離讀取能力，從近距離 14cm 細節工作到橫跨倉庫 3 公尺距離讀取。IP54 等級堅固外殼可承受跌落、灰塵和惡劣環境。',
        },
        features: {
          en: [
            'Dual-CMOS lens: close-range + long-range in one device',
            'Full reading range: 14cm to 3,000cm (Code 128)',
            'Extended DOF for versatile workspaces',
            'IP54 — dust & splash resistant',
            'Rugged housing for peak performance anywhere',
            'Decodes all standard 1D & 2D symbologies',
          ],
          ko: [
            '듀얼 CMOS 렌즈: 하나의 장치에 근거리 + 장거리',
            '전체 읽기 범위: 14cm ~ 3,000cm (Code 128)',
            '다재다능한 작업 공간을 위한 확장된 DOF',
            'IP54 — 방진 및 방수 스플래시',
            '어디서나 최고의 성능을 위한 견고한 하우징',
            '모든 표준 1D 및 2D 심볼로지 디코딩',
          ],
          'zh-TW': [
            '雙 CMOS 鏡頭：一台設備兼顧近距離 + 遠距離',
            '全讀取範圍：14cm 至 3,000cm（Code 128）',
            '延伸 DOF，適用於多種工作場所',
            'IP54 — 防塵且防濺水',
            '堅固外殼，隨處表現卓越',
            '解碼所有標準 1D 和 2D 符號系統',
          ],
        },
        specs: [
          { label: 'Image Sensor', value: '1280 × 1080 Dual-CMOS' },
          { label: 'DOF (Code 39 3mil)', value: '140–400 mm' },
          { label: 'DOF (Code 128 8mil)', value: '120–1,000 mm' },
          { label: 'DOF (Code 128 6mil)', value: '40–3,000 mm' },
          { label: 'Min. Resolution', value: '10 mil (20:)' },
          { label: 'IP Rating', value: 'IP54' },
        ],
        image: '/images/products/z-3572.png',
        accentColor: '#D4192C',
      },
      {
        id: 'z-3502',
        model: 'Z-3502',
        name: {
          en: '2D Image Handheld Scanner',
          ko: '2D 이미지 핸드헬드 스캐너',
          'zh-TW': '2D 影像手持掃描器',
        },
        tagline: {
          en: 'Drop-proof. Waterproof. DPM-ready.',
          ko: '낙하 방지. 방수. DPM 준비.',
          'zh-TW': '防摔。防水。支援 DPM。',
        },
        description: {
          en: 'The Z-3502 is engineered for the toughest handheld environments. IP54-rated and verified to survive 1.8m drops to concrete. Flexible lighting adapts to any reflective or non-reflective surface, while advanced DPM decoding handles direct part marks in automotive, aerospace, and electronics.',
          ko: 'Z-3502는 가장 까다로운 핸드헬드 환경을 위해 설계되었습니다. IP54 등급이며 콘크리트에 1.8m 낙하를 견디는 것이 검증되었습니다. 유연한 조명이 반사 또는 비반사 표면에 적응하며, 고급 DPM 디코딩은 자동차, 항공우주 및 전자 산업의 직접 부품 마크를 처리합니다.',
          'zh-TW': 'Z-3502 專為最嚴苛的手持環境而設計。IP54 等級，經驗證可承受 1.8m 跌落至混凝土地面。彈性照明適應任何反射或非反射表面，同時先進的 DPM 解碼處理汽車、航太和電子行業的直接零件標記。',
        },
        features: {
          en: [
            'IP54: dust-tight & water-jet protected',
            'Survives 1.8m drops to concrete — multiple times',
            'Flexible lighting for reflective & non-reflective surfaces',
            'Advanced DPM decoding for stamped/etched marks',
            '1280 × 1080 CMOS high-res sensor',
            'Reading range up to 1,000mm (Code GR 13mil)',
          ],
          ko: [
            'IP54: 방진 및 수류 보호',
            '콘크리트에 1.8m 낙하를 여러 번 견딤',
            '반사 및 비반사 표면을 위한 유연한 조명',
            '각인/에칭 마크를 위한 고급 DPM 디코딩',
            '1280 × 1080 CMOS 고해상도 센서',
            '최대 1,000mm 읽기 범위 (Code GR 13mil)',
          ],
          'zh-TW': [
            'IP54：防塵且耐水柱噴射保護',
            '可多次承受 1.8m 跌落至混凝土地面',
            '彈性照明，適應反射和非反射表面',
            '先進的 DPM 解碼，適用於刻印/蝕刻標記',
            '1280 × 1080 CMOS 高解析度感測器',
            '讀取範圍達 1,000mm（Code GR 13mil）',
          ],
        },
        specs: [
          { label: 'Image Sensor', value: '1280 × 1080 CMOS' },
          { label: 'DOF (GR 3mil)', value: '40–100 mm' },
          { label: 'DOF (GR 13mil)', value: '40–1,000 mm' },
          { label: 'Min. Resolution', value: '5 mil (30:)' },
          { label: 'IP Rating', value: 'IP54' },
          { label: 'Drop Resistance', value: '1.8m multiple drops' },
        ],
        image: '/images/products/z-3502.png',
        accentColor: '#1A1A2E',
      },
    ],
    applications: {
      en: [
        {
          title: 'Warehouse & Logistics',
          description: 'Scan labels at ground level or overhead racking with the Z-3572 dual-lens system, eliminating the need for multiple scanners in one facility.',
          icon: '🏭',
        },
        {
          title: 'Field Service & Maintenance',
          description: 'Read DPM codes on machinery, pipes, and components in tight spaces or harsh outdoor conditions with Z-3502\'s IP54 rugged housing.',
          icon: '🔧',
        },
        {
          title: 'Aerospace & Defense MRO',
          description: 'Track serialized aircraft parts with laser-etched DPM codes that Z-3502 decodes reliably — even on curved, anodized, or low-contrast surfaces.',
          icon: '✈️',
        },
        {
          title: 'Retail & Inventory Management',
          description: 'Speed up cycle counts and receiving workflows in retail backrooms and distribution centers with high-motion-tolerance scanning.',
          icon: '🏬',
        },
      ],
      ko: [
        {
          title: '창고 및 물류',
          description: 'Z-3572 듀얼 렌즈 시스템으로 지상 레벨 또는 머리 위 랙에서 라벨을 스캔하여 한 시설에서 여러 스캐너의 필요성을 제거합니다.',
          icon: '🏭',
        },
        {
          title: '현장 서비스 및 유지 보수',
          description: 'Z-3502의 IP54 견고한 하우징으로 좁은 공간이나 가혹한 야외 조건의 기계, 파이프 및 부품의 DPM 코드를 읽습니다.',
          icon: '🔧',
        },
        {
          title: '항공우주 및 방위 MRO',
          description: 'Z-3502가 곡면, 양극 처리된 또는 낮은 대비 표면에서도 안정적으로 디코딩하는 레이저 에칭 DPM 코드로 직렬화된 항공기 부품을 추적합니다.',
          icon: '✈️',
        },
        {
          title: '소매 및 재고 관리',
          description: '높은 모션 내성 스캐닝으로 소매 후방 창고 및 유통 센터에서 재고 조사 및 수령 워크플로우를 가속화합니다.',
          icon: '🏬',
        },
      ],
      'zh-TW': [
        {
          title: '倉儲和物流',
          description: '使用 Z-3572 雙鏡頭系統掃描地面或頭頂貨架標籤，消除一個設施中需要多台掃描器的需求。',
          icon: '🏭',
        },
        {
          title: '現場服務和維護',
          description: '使用 Z-3502 的 IP54 堅固外殼，在狹小空間或惡劣戶外條件下讀取機械、管道和元件上的 DPM 代碼。',
          icon: '🔧',
        },
        {
          title: '航太和國防 MRO',
          description: '追蹤帶有雷射蝕刻 DPM 代碼的序列化飛機零件，Z-3502 可在彎曲、陽極氧化或低對比表面上可靠解碼。',
          icon: '✈️',
        },
        {
          title: '零售和庫存管理',
          description: '以高動態容錯掃描加速零售後室和配送中心的盤點和收貨工作流程。',
          icon: '🏬',
        },
      ],
    },
  },
];
