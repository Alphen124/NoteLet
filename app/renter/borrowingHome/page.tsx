/* eslint-disable max-lines */
"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation"; // ✅ ใช้สำหรับเปลี่ยนหน้า

// --------------------------------------------------
// SVG Logo
// --------------------------------------------------
const LogoIcon = () => (
  <svg
    width="37"
    height="29"
    viewBox="0 0 37 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", left: "0.5px", top: "2px" }}
  >
    <path
      d="M1 28V1H14.5V11.5M36 1V28H22.5V17.5"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

// --------------------------------------------------
// Styled Components
// --------------------------------------------------

// หน้า Home การเช่า
const HomeRentPageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
  background: #ffffff;
  overflow-x: hidden;
`;

// Header
const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 5%;
  position: absolute;
  width: 100%;
  height: 92px;
  left: 0px;
  top: 0px;
  background: #043873;
  box-sizing: border-box;
`;

// Logo
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 191px;
  height: 34px;
  position: relative;
`;

const LogoText = styled.div`
  position: absolute;
  width: 130px;
  height: 34px;
  left: 60.5px;
  top: 0px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  background: #ffffff;
  border-radius: 8px;
  width: 407px;
  height: 60px;
  cursor: pointer;
`;

const SearchIcon = styled.div`
  width: 18px;
  height: 18px;
  background: #000000;
`;

const SearchText = styled.span`
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

// Navigation
const RightNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  height: 60px;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const NavText = styled.span`
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
`;

const DownArrow = styled.div`
  width: 9px;
  height: 4px;
  border: 1px solid #ffffff;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

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
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
`;

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
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  color: #043873;
`;

// --------------------------------------------------
// Section: Renting Service
// --------------------------------------------------
const TestimonialSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(100px, 15vh, 140px) 5%;
  gap: 64px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 92px;
`;

const Title = styled.h1`
  width: 100%;
  font-family: "Inter";
  font-weight: 700;
  font-size: 56px;
  line-height: 1.2;
  text-align: center;
  color: #212529;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0 40px;
`;

const ClientCard = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 40px;
  gap: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #cce5ff;
  border-radius: 8px;
`;

const NameBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;
`;

const ItemName = styled.h3`
  width: 100%;
  height: 36px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #212529;
  margin: 0;
`;

// --------------------------------------------------
// React Component
// --------------------------------------------------
const HomeRentPage: React.FC = () => {
  const router = useRouter();

  const handleSearchClick = () => {
    // 👇👇👇 แก้ไขจุดนี้ครับ 👇👇👇
    router.push("/renter/search"); // ✅ เปลี่ยนหน้าไปที่ /app/renter/search/page.tsx
  };

  return (
    <HomeRentPageContainer>
      <Header>
        <LogoContainer>
          <LogoIcon />
          <LogoText>NOTELET</LogoText>
        </LogoContainer>

        {/* ✅ onClick ถูกต้องแล้ว */}
        <SearchBar onClick={handleSearchClick}>
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
      </Header>

      <TestimonialSection>
        <Title>Borrowing Service</Title>
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