import React from "react";
import "./KimchiPremium.css";

export default function KimchiPremium() {
  // contact 섹션으로 스크롤 이동 함수
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">
          <span>킴치프리미엄 서비스</span>
        </div>
        <div className="nav-links">
          <a href="#hero">처음</a>
          <a href="#features">소개</a>
          <a href="#comparison">가격</a>
          <a href="#contact">문의</a>
          <button className="login-btn">로그인</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <h1>킴치프리미엄</h1>
        <p>
          자산 관리에서 수익률을 강화하다!
              </p>
        <div>
          <img src="/api/placeholder/400/100" alt="서비스 일러스트레이션" />
        </div>
        <button className="cta-button" onClick={scrollToContact}>
          무료로 시작하기 →
        </button>
      </section>

      {/* Feature Cards */}
      <div className="features" id="features">
        <div className="feature-card">
          <h3>
            <span>1</span> 어떻게 작동 하나요
          </h3>
          <p>
            킴치프리미엄은 국내외 디지털 자산 거래소 간의 시세 차이를 활용하여
            수익을 창출하는 서비스입니다. 복잡한 과정 없이 간편하게 시작하세요.
          </p>
        </div>
        <div className="feature-card">
          <h3>
            <span>2</span> 무엇이 다른가요?
          </h3>
          <p>
            자동화된 시스템으로 24시간 모니터링하며 최적의 거래 타이밍을
            포착합니다. 전문가 없이도 효율적인 자산 관리가 가능합니다.
          </p>
          <button className="btn">자세히 알아보기 →</button>
        </div>
      </div>

      {/* What is Section */}
      <section className="what-is">
        <h2>킴치프리미엄(Kimchi Premium)이란?</h2>
        <div className="info-box">
          <p>
            킴치프리미엄이란 일반적으로 한국 거래소의 디지털 자산 가격이 해외
            거래소보다 높게 형성되는 현상을 말합니다. 이러한 가격 차이를
            활용하여 수익을 창출할 수 있습니다.
          </p>
          <p>
            예시: 해외 거래소 1 BTC = $50,000 / 한국 거래소 1 BTC = ₩60,000,000
            (환율 ₩1,100/$1 기준으로 $54,545)
          </p>
        </div>
        <div className="warning-box">
          <h4>주의사항</h4>
          <ul>
            <li>가격 차이는 시장 상황에 따라 변동될 수 있습니다</li>
            <li>거래소 이용 수수료 및 송금 비용이 발생할 수 있습니다</li>
            <li>자산 이동 시 일정 시간이 소요될 수 있습니다</li>
          </ul>
        </div>
        <button className="cta-button">킴치프리미엄 시작하기</button>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>킴치마진의 장점들 무엇</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <img src="/api/placeholder/24/24" alt="아이콘" />
            </div>
            <h3>빠른 거래 처리</h3>
            <p>평균 처리 시간 3분</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <img src="/api/placeholder/24/24" alt="아이콘" />
            </div>
            <h3>안전한 보안 시스템</h3>
            <p>다중 보안 및 인증</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <img src="/api/placeholder/24/24" alt="아이콘" />
            </div>
            <h3>전문가 수준의 분석</h3>
            <p>실시간 시장 정보</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <img src="/api/placeholder/24/24" alt="아이콘" />
            </div>
            <h3>24시간 고객 지원</h3>
            <p>언제든지 문의 가능</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison" id="comparison">
        <h2>가격 비교표</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>기능</th>
              <th>무료</th>
              <th>프리미엄</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>기본 기능</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>프리미엄 기능 1</td>
              <td>✗</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>프리미엄 기능 2</td>
              <td>✗</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>고급 데이터 분석</td>
              <td>제한적</td>
              <td>무제한</td>
            </tr>
            <tr>
              <td>거래 수수료</td>
              <td>1.5%</td>
              <td>0.5%</td>
            </tr>
          </tbody>
        </table>
        <button className="cta-button">프리미엄 계정 만들기</button>
      </section>

      {/* Blue Section (CTA) */}
      <section className="blue-section">
        <h2>그럼에 그게, 시작해볼까요 함께!</h2>
        <div className="cards-container">
          <div className="blue-card">
            <h3>손쉬운 시작</h3>
            <p>간단한 가입 절차로 5분 만에 시작할 수 있습니다.</p>
          </div>
          <div className="blue-card">
            <h3>안전한 거래</h3>
            <p>검증된 거래소와 안전한 시스템으로 안심하고 이용하세요.</p>
          </div>
          <div className="blue-card">
            <h3>높은 수익률</h3>
            <p>전문 트레이더 수준의 수익을 경험해보세요.</p>
          </div>
        </div>
        <button className="cta-button">지금 시작하기</button>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>고객 후기</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "킴치프리미엄 서비스를 사용한 지 6개월 됐는데, 정말 만족스러운
              수익률을 경험하고 있습니다. 처음에는 반신반의했지만 이제는 제 투자
              포트폴리오의 핵심 전략이 되었습니다."
            </p>
            <div className="testimonial-profile">
              <img src="/api/placeholder/40/40" alt="프로필" />
              <div>
                <strong>김** 님</strong>
                <p>서울, 회사원</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              "복잡한 거래 과정을 자동화해주는 시스템이 정말 편리합니다. 바쁜
              일상 속에서도 효율적인 자산 관리가 가능해졌고, 수익도 꾸준히 늘고
              있어요. 다른 서비스와 달리 고객 지원도 빠르고 친절합니다."
            </p>
            <div className="testimonial-profile">
              <img src="/api/placeholder/40/40" alt="프로필" />
              <div>
                <strong>이** 님</strong>
                <p>부산, 자영업</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form" id="contact">
        <h2>무료 상담 신청</h2>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" placeholder="이름을 입력하세요" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">연락처</label>
            <input type="tel" id="phone" placeholder="연락처를 입력하세요" />
          </div>
          <div className="form-group">
            <label htmlFor="inquiry-type">문의 유형</label>
            <select id="inquiry-type">
              <option value="">문의 유형을 선택하세요</option>
              <option value="service">서비스 이용 문의</option>
              <option value="payment">결제 문의</option>
              <option value="technical">기술 지원</option>
              <option value="other">기타</option>
            </select>
          </div>
          <button className="submit-btn">상담 신청하기</button>
        </div>
      </section>

      {/* Footer Links */}
      <div className="footer-links">
        <a href="#hero">서비스 소개</a>
        <a href="#comparison">이용약관</a>
        <button type="button" className="footer-link-btn">
          개인정보처리방침
        </button>
        <a href="#contact">고객센터</a>
      </div>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>지금 바로 시작</h2>
        <p>킴치프리미엄으로 더 효율적인 자산 관리를 경험해보세요</p>
        <button className="cta-button">무료로 시작하기</button>
      </section>

      {/* App Preview */}
      <section className="app-preview">
        <div className="app-info">
          <h2>
            언제 어디서나
            <br />
            쉽고 빠르게
          </h2>
          <p>
            킴치프리미엄 모바일 앱으로 이동 중에도 자산을 관리하세요. 실시간
            알림과 편리한 거래 기능을 제공합니다.
          </p>
          <button className="cta-button">앱 다운로드</button>
        </div>
        <div className="app-screenshot">
          <img src="/api/placeholder/300/600" alt="앱 스크린샷" />
        </div>
      </section>
    </>
  );
}
