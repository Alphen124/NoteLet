/* eslint-disable max-lines */
"use client";

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

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
// Header Section
// --------------------------------------------------
const SearchPageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  background: #ffffff;
`;
//overflow: hidden;


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
// Search Content Section
// --------------------------------------------------
const SearchResultSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 160px;
  height: calc(100vh - 92px);
  box-sizing: border-box;
  gap: 40px;
`;

const Title = styled.h1`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 64px;
  line-height: 1.2;
  text-align: center;
  color: #212529;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  flex-wrap: nowrap;
`;

// --------------------------------------------------
// Card Components
// --------------------------------------------------
const SearchCardBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  gap: 24px;
  width: 370px;
  height: 420px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const SearchCardWhite = styled(SearchCardBase)`
  background: #ffffff;
  box-shadow: 15px 10px 50px rgba(0, 0, 0, 0.1);
  cursor: pointer; 
`;

const SearchCardBlue = styled(SearchCardBase)`
  background: #4f9cf9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer; /* ✅ 1. เพิ่ม cursor */
`;

const CardImage = styled.div`
  width: 100%;
  height: 188px;
  background: #c4defd;
  border-radius: 6px;
`;

const CardCommentSection = styled.div`
  width: 100%;
  border-bottom: 1px solid #212529;
  padding-bottom: 12px;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #212529;
`;

const CardCommentSectionBlue = styled(CardCommentSection)`
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
`;

const AvatarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: #d9d9d9;
  border-radius: 50%;
`;

const LessorName = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 20px;
  color: #212529;
`;

const LessorNameBlue = styled(LessorName)`
  color: #ffffff;
`;

// Slider
const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const SliderDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const DotActive = styled(SliderDot)`
  background: #043873;
`;

const DotInactive = styled(SliderDot)`
  background: #4f9cf9;
`;

// --------------------------------------------------
// React Component
// --------------------------------------------------
const SearchPage: React.FC = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/renter');
  };

  const handleSearchClick = () => {
    router.push('/renter/search');
  };

  const handleWhiteCardClick = () => {
    router.push('/renter/renting');
  };

  // ✅ 2. เพิ่มฟังก์ชันนี้
  const handleBlueCardClick = () => {
    router.push('/renter/borrowing');
  };

  return (
    <SearchPageContainer>
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

      <SearchResultSection>
        <Title>Search Result</Title>
        <Content>

          <SearchCardWhite onClick={handleWhiteCardClick}>
            <CardImage />
            <CardCommentSection>Device Name Price</CardCommentSection>
            <AvatarBox>
              <Avatar />
              <LessorName>Lessor Name</LessorName>
            </AvatarBox>
          </SearchCardWhite>

          {/* ✅ 3. เพิ่ม onClick ที่นี่ */}
          <SearchCardBlue onClick={handleBlueCardClick}>
            <CardImage />
            <CardCommentSectionBlue>Device Name</CardCommentSectionBlue>
            <AvatarBox>
              <Avatar />
              <LessorNameBlue>ComSci, KMITL</LessorNameBlue>
            </AvatarBox>
          </SearchCardBlue>

          {/* ✅ 3. เพิ่ม onClick ที่นี่ */}
          <SearchCardBlue onClick={handleBlueCardClick}>
            <CardImage />
            <CardCommentSectionBlue>Device Name</CardCommentSectionBlue>
            <AvatarBox>
              <Avatar />
              <LessorNameBlue>ComSci, KMITL</LessorNameBlue>
            </AvatarBox>
          </SearchCardBlue>
        </Content>

        <SliderContainer>
          <DotInactive />
          <DotActive />
          <DotInactive />
        </SliderContainer>
      </SearchResultSection>
    </SearchPageContainer>
  );
};

export default SearchPage;