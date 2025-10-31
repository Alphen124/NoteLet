/* eslint-disable max-lines */
"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

// --------------------------------------------------
// SVG Icons (เหมือนเดิม)
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

const DownArrowIcon = ({ color = "#FFFFFF" }) => (
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

const StarIcon = ({ color = "#FFC000" }) => (
  <svg 
    width="53" 
    height="52" 
    viewBox="0 0 53 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M26.5 2L32.0622 13.1733L44.0019 14.8267L35.2509 23.2267L37.1245 35.1L26.5 29.2933L15.8755 35.1L17.7491 23.2267L8.99812 14.8267L20.9378 13.1733L26.5 2Z" 
      fill={color} 
      stroke={color} 
      strokeWidth="2" 
      strokeLinejoin="round"
    />
  </svg>
);


// --------------------------------------------------
// Header Section (เหมือนเดิม)
// --------------------------------------------------
const HistoryPageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
  background: #ffffff;
  overflow-x: hidden;
`;

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
// History Content Section (เหมือนเดิม)
// --------------------------------------------------

const HistorySection = styled.section`
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

const HistoryCardBase = styled.div`
  flex: 1; 
  min-width: 280px; 
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 40px;
  gap: 60px;
  height: auto;
  border-radius: 12px;
  box-sizing: border-box;
`;

const HistoryCardWhite = styled(HistoryCardBase)`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
`;

const HistoryCardBlue = styled(HistoryCardBase)`
  background: #4f9cf9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CardImage = styled.div`
  width: 100%;
  height: 188px;
  background: #c4defd;
  flex-shrink: 0;
  border-radius: 8px;
`;

const CardCommentSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 40px;
  gap: 32px;
  width: 100%;
  border-bottom: 1px solid #212529;
`;

const CardCommentSectionBlue = styled(CardCommentSection)`
  border-bottom: 1px solid #ffffff;
`;

const DeviceInfo = styled.div`
  width: 100%;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #212529;
  white-space: pre-line;
  height: 183px;
`;

const DeviceInfoBlue = styled(DeviceInfo)`
  color: #ececec;
`;

const AvatarBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 42px;
  width: 100%;
  height: 95px;
`;

const Avatar = styled.div`
  width: 95px;
  height: 95px;
  background: #d9d9d9;
  border-radius: 50%;
  flex-shrink: 0;
`;

const LessorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  flex-grow: 1;
`;

const LessorName = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #212529;
`;

const LessorNameBlue = styled(LessorName)`
  color: #ffffff;
`;

const ReviewButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  gap: 10px;
  width: 126px;
  height: 37px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  cursor: pointer;
`;

// --------------------------------------------------
// Pop-up Modal Components
// --------------------------------------------------

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 60px;
  gap: 45px;
  width: 90%;
  max-width: 1042px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 15px 10px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ModalHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 40px;
  gap: 32px;
  width: 100%;
  border-bottom: 1px solid #212529;
`;

const ModalTitle = styled.h2`
  width: 100%;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #212529;
  margin: 0;
`;

const ModalLessorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 42px;
  height: 95px;
`;

const ModalAvatar = styled.div`
  width: 95px;
  height: 95px;
  background: #d9d9d9;
  border-radius: 50%;
  flex-shrink: 0;
`;

const ModalLessorName = styled.h3`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #212529;
  margin: 0;
`;

const StarRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

const ReviewTextArea = styled.textarea`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  width: 100%;
  height: 266px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #212529;

  &::placeholder {
    color: #888;
  }
`;

// ✅ 1. เพิ่ม Styled Component สำหรับปุ่ม
const ModalSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* ให้ปุ่มเต็มความกว้าง Modal */
  height: 60px;
  background: #000000;
  border-radius: 8px;
  border: none;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  margin-top: -16px; /* (ปรับ gap นิดหน่อย) */
`;

// --------------------------------------------------
// React Component สำหรับ Modal
// --------------------------------------------------
interface ReviewModalProps {
  onClose: () => void;
  lessorName: string;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ onClose, lessorName }) => {

  // ✅ 2. เพิ่มฟังก์ชันสำหรับ Handle การ Submit
  const handleSubmitReview = () => {
    // (ในอนาคต คุณสามารถเพิ่มโค้ดส่งข้อมูล API ที่นี่)
    console.log("Review Submitted!");
    onClose(); // ปิด Modal หลังจาก Submit
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        
        <ModalHeader>
          <ModalTitle>Review Owner</ModalTitle>
        </ModalHeader>

        <ModalLessorInfo>
          <ModalAvatar />
          <ModalLessorName>{lessorName}</ModalLessorName>
        </ModalLessorInfo>

        <StarRatingContainer>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </StarRatingContainer>

        <ReviewTextArea placeholder="Write your review" />

        {/* ✅ 3. เพิ่มปุ่ม Submit ที่นี่ */}
        <ModalSubmitButton onClick={handleSubmitReview}>
          Confirm
        </ModalSubmitButton>

      </ModalContent>
    </ModalOverlay>
  );
};


// --------------------------------------------------
// React Component (HistoryPage)
// --------------------------------------------------
const HistoryPage: React.FC = () => {
  const router = useRouter();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <HistoryPageContainer>
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

      <HistorySection>
        <Title>Device History</Title>
        
        <Content>

          {/* Card 1 (White) */}
          <HistoryCardWhite>
            <CardImage />
            <CardCommentSection>
              <DeviceInfo>
                {`Device Name
Renting Duration
Status
Pick up or return time
Pick up or return Location
Total Price`}
              </DeviceInfo>
            </CardCommentSection>
            <AvatarBox>
              <Avatar />
              <LessorInfo>
                <LessorName>Owner Name</LessorName>
                <ReviewButton onClick={() => setIsModalOpen(true)}>
                  Review
                </ReviewButton>
              </LessorInfo>
            </AvatarBox>
          </HistoryCardWhite>

          {/* Card 2 (Blue) */}
          <HistoryCardBlue>
            <CardImage />
            <CardCommentSectionBlue>
              <DeviceInfoBlue>
                {`Device Name
Borrowing Duration
Status
Pick up or return time
Pick up or return Location`}
              </DeviceInfoBlue>
            </CardCommentSectionBlue>
            <AvatarBox>
              <Avatar />
              <LessorInfo>
                <LessorNameBlue>ComSci, KMITL</LessorNameBlue>
              </LessorInfo>
            </AvatarBox>
          </HistoryCardBlue>

          {/* Card 3 (Blue) */}
          <HistoryCardBlue>
            <CardImage />
            <CardCommentSectionBlue>
              <DeviceInfoBlue>
                {`Device Name
Borrowing Duration
Status
Pick up or return time
Pick up or return Location`}
              </DeviceInfoBlue>
            </CardCommentSectionBlue>
            <AvatarBox>
              <Avatar />
              <LessorInfo>
                <LessorNameBlue>ComSci, KMITL</LessorNameBlue>
              </LessorInfo>
            </AvatarBox>
          </HistoryCardBlue>

        </Content>
      </HistorySection>

      {isModalOpen && (
        <ReviewModal 
          onClose={() => setIsModalOpen(false)} 
          lessorName="Owner Name" 
        />
      )}

    </HistoryPageContainer>
  );
};

export default HistoryPage;