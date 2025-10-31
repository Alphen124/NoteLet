/* eslint-disable max-lines */
"use client";

import React from 'react';
import styled from 'styled-components';

// --------------------------------------------------
// SVG Icons (เราสร้างเป็น Component เพื่อความสะอาด)
// --------------------------------------------------

// SVG จำลองสำหรับ Logo (คุณสามารถแทนที่ด้วย SVG จริงจาก Figma)
const LogoIcon = () => (
  <svg
    width="37"
    height="29"
    viewBox="0 0 37 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', left: '0.5px', top: '2px' }}
  >
    <path
      d="M1 28V1H14.5V11.5M36 1V28H22.5V17.5"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

// SVG จำลองสำหรับ Hamburger Icon (สำหรับจอมือถือ)
const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21M3 6H21M3 18H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --------------------------------------------------
// Styled Components (ปรับแก้ให้เป็น Responsive)
// --------------------------------------------------

// /* หน้า Home การเช่า */
const HomeRentPageContainer = styled.div`
  position: relative;
  width: 100%; /* ✅ ทำให้ยืดได้ */
  max-width: 1920px; /* ✅ จำกัดความกว้างสูงสุด */
  min-height: 100vh; /* ✅ ให้สูงเต็มจอเป็นอย่างน้อย */
  margin: 0 auto; /* ✅ จัดกลาง */
  background: #ffffff;
  overflow-x: hidden; /* ✅ ป้องกันการเลื่อนซ้าย-ขวาโดยไม่จำเป็น */
`;

// /* Header */
const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* ✅ ใช้ padding ที่ยืดหยุ่น */
  padding: 16px 5%;
  position: absolute;
  width: 100%; /* ✅ ทำให้เต็มความกว้าง */
  height: 92px;
  left: 0px;
  top: 0px;
  background: #043873;
  box-sizing: border-box;
`;

// /* Logo */
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 191px;
  height: 34px;
  position: relative;
  flex: none;
`;

// /* NOTELET */
const LogoText = styled.div`
  position: absolute;
  width: 130px;
  height: 34px;
  left: 60.5px;
  top: 0px;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
`;

// /* Search Bar (Btn-free-trial) */
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  height: 60px;
  background: #ffffff;
  border-radius: 8px;
  flex: none;
  order: 1;
  /* ✅ ทำให้ยืดหยุ่นในพื้นที่ที่เหลือ */
  flex-grow: 1;
  max-width: 407px;
  margin: 0 30px;

  /* 📱 ซ่อนบนจอมือถือ */
  @media (max-width: 768px) {
    display: none;
  }
`;

// /* Search Icon Placeholder */
const SearchIcon = styled.div`
  width: 18px;
  height: 18px;
  background: #000000;
  flex: none;
`;

// /* Search Text */
const SearchText = styled.span`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

// /* Right Nav & Buttons Container */
const RightNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  height: 60px;
  flex: none;
  order: 2;

  /* 📱 ซ่อนบนจอมือถือ */
  @media (max-width: 768px) {
    display: none;
  }
`;

// /* Nav-menu */
const NavMenu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
`;

// /* Nav Item (Resources / Pricing) */
const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const NavText = styled.span`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
`;

// /* Down Arrow */
const DownArrow = styled.div`
  width: 9px;
  height: 4px;
  border: 1px solid #ffffff;
`;

// /* Buttons Container (Btn) */
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

// /* Btn-free-trial (Rent out) */
const RentButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  height: 60px;
  background: #4f9cf9;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
`;

// /* Btn-login */
const LoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  gap: 10px;
  height: 60px;
  background: #ffe492;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  color: #043873;
`;

// /* Hamburger Menu (สำหรับจอมือถือ) */
const HamburgerMenu = styled.div`
  display: none; /* ✅ ปกติซ่อนไว้ */
  cursor: pointer;
  order: 3; /* ให้อยู่ขวาสุด */

  @media (max-width: 768px) {
    display: block; /* 📱 แสดงเฉพาะบนจอมือถือ */
  }
`;

// /* Testimonial Section */
const TestimonialSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* ✅ ใช้ padding ที่ยืดหยุ่น และ clamp() */
  padding: clamp(100px, 15vh, 140px) 5%;
  gap: 60px;
  width: 100%; /* ✅ ทำให้เต็ม */
  box-sizing: border-box;
  /* ✅ เว้นที่จาก Header (92px) */
  margin-top: 92px; 

  @media (max-width: 768px) {
    padding: 60px 20px; /* 📱 ลด padding บนมือถือ */
    gap: 40px;
  }
`;

// /* Renting Service (Title) */
const Title = styled.h1`
  width: 100%; /* ✅ ทำให้เต็ม */
  font-family: 'Inter';
  font-weight: 700;
  font-size: 70px; /* ✅ ขนาดเริ่มต้น */
  line-height: 1.2;
  text-align: center;
  color: #212529;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 50px; /* 📱 ลดขนาดบน Tablet */
  }

  @media (max-width: 768px) {
    font-size: 36px; /* 📱 ลดขนาดบน Mobile */
  }
`;

// /* Content (Cards Container) */
const Content = styled.div`
  display: flex;
  flex-direction: row; /* ✅ ปกติเรียงแนวนอน */
  align-items: center;
  justify-content: center; /* ✅ จัดกลาง */
  flex-wrap: wrap; /* ✅ ถ้าล้นให้ขึ้นบรรทัดใหม่ (เผื่อไว้) */
  gap: 32px;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column; /* 📱 เปลี่ยนเป็นแนวตั้งบน Tablet */
    align-items: center;
  }
`;

// /* Client Card */
const ClientCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 40px;
  gap: 60px;
  width: 100%; /* ✅ ให้เต็มพื้นที่ */
  max-width: 471px; /* ✅ จำกัดขนาดสูงสุด (เพื่อให้ดูเหมือน 3 คอลัมน์) */
  height: auto; /* ✅ ให้ความสูงเป็นไปตามเนื้อหา */
  background: #ffffff;
  box-shadow: 15px 10px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;

  @media (max-width: 992px) {
    padding: 40px 20px;
    gap: 40px;
    max-width: 450px; /* 📱 ปรับขนาดบน Tablet */
  }
`;

// /* Image-container */
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* ✅ ให้เต็มความกว้างการ์ด */
  aspect-ratio: 4 / 3; /* ✅ ใช้ aspect-ratio แทน height ตายตัว */
  background: #c4defd;
`;

// /* Name-box */
const NameBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; /* ✅ ให้เต็ม */
  height: 36px;
`;

// /* Item Name (Notebook, Tablet, Others) */
const ItemName = styled.h3`
  width: 100%;
  height: 36px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #212529;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px; /* 📱 ลดขนาดตัวอักษรบนมือถือ */
  }
`;

// --------------------------------------------------
// React Component
// --------------------------------------------------

const HomeRentPage: React.FC = () => {
  // หมายเหตุ: เรายังไม่ได้ทำฟังก์ชันเมนูมือถือ แค่แสดง/ซ่อน UI
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HomeRentPageContainer>
      <Header>
        <LogoContainer>
          <LogoIcon />
          <LogoText>NOTELET</LogoText>
        </LogoContainer>

        <SearchBar>
          <SearchIcon />
          <SearchText>Search</SearchText>
        </SearchBar>

        <RightNavContainer>
          <NavMenu>
            <NavItem>
              <NavText>Cart</NavText>
              <DownArrow />
            </NavItem>
            <NavItem>
              <NavText>Favorites</NavText>
              <DownArrow />
            </NavItem>
          </NavMenu>
          <ButtonContainer>
            <RentButton>Rent out</RentButton>
            <LoginButton>User</LoginButton>
          </ButtonContainer>
        </RightNavContainer>

        {/* ปุ่ม Hamburger จะแสดงอัตโนมัติบนจอมือถือ */}
        <HamburgerMenu>
          <HamburgerIcon />
        </HamburgerMenu>
      </Header>

      <TestimonialSection>
        <Title>Renting Service</Title>
        <Content>
          <ClientCard>
            <ImageContainer />
            <NameBox>
              <ItemName>Notebook</ItemName>
            </NameBox>
          </ClientCard>
          <ClientCard>
            <ImageContainer />
            <NameBox>
              <ItemName>Tablet</ItemName>
            </NameBox>
          </ClientCard>
          <ClientCard>
            <ImageContainer />
            <NameBox>
              <ItemName>Others</ItemName>
            </NameBox>
          </ClientCard>
        </Content>
      </TestimonialSection>
    </HomeRentPageContainer>
  );
};

export default HomeRentPage;