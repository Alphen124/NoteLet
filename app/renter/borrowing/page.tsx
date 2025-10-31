/* eslint-disable max-lines */
"use client";

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

// --------------------------------------------------
// SVG Icons
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

const DownArrowIcon = ({ color = "#000000" }) => (
  <svg 
    width="9" 
    height="5" 
    viewBox="0 0 9 5" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M1 1L4.5 4L8 1" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);


// --------------------------------------------------
// Header Section (เหมือนกับไฟล์ก่อนๆ)
// --------------------------------------------------
const BorrowingPageContainer = styled.div`
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
  z-index: 10;
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
  cursor: pointer;
  flex-shrink: 0;
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
  width: 100%;
  max-width: 407px;
  height: 60px;
  cursor: pointer;
  margin: 0 32px;
`;

const SearchIcon = styled.div`
  width: 18px;
  height: 18px;
  background: #000000;
  flex-shrink: 0;
`;

const SearchText = styled.span`
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Navigation
const RightNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  height: 60px;
  flex-shrink: 0;
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
// Borrowing Content Section (สร้างใหม่ตาม CSS dump)
// --------------------------------------------------

const ContentSection = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 130px 5% 60px; 
  margin-top: 92px;
  gap: 48px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

// --- คอลัมน์ซ้าย (รูปภาพ & รายละเอียด) ---
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 724px;
  flex: 2;
`;

const TopNavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 56px;
`;

const TopNavLink = styled.a`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
  cursor: pointer;
`;

const MainImage = styled.div`
  width: 100%;
  height: 488px;
  background: #c4defd;
  border-radius: 8px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
`;

const ThumbnailImage = styled.div`
  flex: 1;
  height: 188px;
  background: #c4defd;
  border-radius: 8px;
`;

const DetailsTabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;
  margin-top: 60px;
  border-bottom: 1px solid #e0e0e0;
`;

const TabButton = styled.button`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 40px;
  color: #1e1e1e;
  background: none;
  border: none;
  padding-bottom: 16px;
  cursor: pointer;
`;

const DetailsText = styled.p`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.6;
  color: #1e1e1e;
  margin-top: 32px;
`;

// --- คอลัมน์ขวา (จอง & ราคา) ---
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 504px;
  flex: 1;
`;

const TextBrand = styled.p`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
  margin: 0;
`;

const TextDeviceName = styled.h1`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  color: #1e1e1e;
  margin: 0;
`;

// ✅ (ใหม่) Department Name
const TextDepartmentName = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #1e1e1e;
  margin: 0;
`;

const DateSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px; /* (เพิ่มระยะห่าง) */
`;

const DateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  cursor: pointer;
  box-sizing: border-box;
`;

const TimeSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 32px;
`;

const TimeLabel = styled.label`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
  display: block;
  margin-bottom: 8px;
`;

const TimeButton = styled.button`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 5px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  cursor: pointer;
`;

// ✅ (ใหม่) Make Request Button
const MakeRequestButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  gap: 10px;
  width: 100%;
  height: 72px;
  background: #000000;
  border-radius: 8px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 16px;
`;

// ✅ (ใหม่) Remaining Text
const TextRemaining = styled.span`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
  margin-top: 16px;
`;


// --------------------------------------------------
// React Component
// --------------------------------------------------
const BorrowingPage: React.FC = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/renter');
  };

  const handleSearchClick = () => {
    router.push('/renter/search');
  };

  const handleUserClick = () => {
    router.push('/renter/history');
  };

  return (
    <BorrowingPageContainer>
      <Header>
        <LogoContainer onClick={handleLogoClick}>
          <LogoIcon />
          <LogoText>NOTELET</LogoText>
        </LogoContainer>

        <SearchBar onClick={handleSearchClick}>
          <SearchIcon />
          <SearchText>Search</SearchText>
        </SearchBar>

        <RightNavContainer>
          <NavMenu>
            <NavItem>
              <NavText>Cart</NavText>
              <DownArrowIcon color="#FFFFFF" />
            </NavItem>
            <NavItem>
              <NavText>Favorites</NavText>
              <DownArrowIcon color="#FFFFFF" />
            </NavItem>
          </NavMenu>
          <ButtonContainer>
            <RentButton>Rent out</RentButton>
            <LoginButton onClick={handleUserClick}>User</LoginButton>
          </ButtonContainer>
        </RightNavContainer>
      </Header>

      <ContentSection>
        {/* --- คอลัมน์ซ้าย --- */}
        <LeftColumn>
          <TopNavMenu>
            <TopNavLink>Notebook</TopNavLink>
            <TopNavLink>Tablet</TopNavLink>
            <TopNavLink>Others</TopNavLink>
          </TopNavMenu>
          <MainImage />
          <ThumbnailContainer>
            <ThumbnailImage />
            <ThumbnailImage />
            <ThumbnailImage />
          </ThumbnailContainer>
          <DetailsTabs>
            <TabButton>Details</TabButton>
            {/* ❌ ลบแท็บ Reviews ออก */}
          </DetailsTabs>
          <DetailsText>
            Description Specification Location to pick up and return *Fine if
            return late*
          </DetailsText>
        </LeftColumn>

        {/* --- คอลัมน์ขวา (ปรับปรุง) --- */}
        <RightColumn>
          <TextBrand>Brand Name</TextBrand>
          <TextDeviceName>Device Name</TextDeviceName>
          
          {/* ❌ ลบ RatingContainer และ TextPrice */}
          {/* ✅ เพิ่ม Department Name */}
          <TextDepartmentName>Department Name</TextDepartmentName>

          <DateSelectionContainer>
            <DateButton>8 ต.ค.</DateButton>
            <DateButton>9 ต.ค.</DateButton>
            <DateButton>10 ต.ค.</DateButton>
            <DateButton>11 ต.ค.</DateButton>
          </DateSelectionContainer>

          <TimeSelectionContainer>
            <div style={{ flex: 1 }}>
              <TimeLabel>Pick up time</TimeLabel>
              <TimeButton>
                00:00 <DownArrowIcon color="#000000" />
              </TimeButton>
            </div>
            <div style={{ flex: 1 }}>
              <TimeLabel>Return time</TimeLabel>
              <TimeButton>
                00:00 <DownArrowIcon color="#000000" />
              </TimeButton>
            </div>
          </TimeSelectionContainer>
          
          {/* ❌ ลบ AddToCartButton */}
          {/* ✅ เพิ่ม MakeRequestButton */}
          <MakeRequestButton>Make a request</MakeRequestButton>

          {/* ❌ ลบ InfoRow (Total) */}
          {/* ✅ เพิ่ม TextRemaining */}
          <TextRemaining>Remaining 10</TextRemaining>

          {/* ❌ ลบ ReviewBarContainer */}
          
        </RightColumn>
      </ContentSection>
    </BorrowingPageContainer>
  );
};

export default BorrowingPage;