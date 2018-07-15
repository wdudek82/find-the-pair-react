import styled, { css } from 'styled-components';

export const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 180px;
  perspective: 500px;
`;

// function hideCard(p) {
//   const display = setTimeout(() => 'none', 1500)

//   return display;
// }

export const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 8rem;
    width: 130px;
    height: 160px;
    user-select: none;
    cursor: ${(p) => (!p.matched && 'pointer')};
    transform: ${(p) => (p.activated || p.matched ? 'rotateY(180deg)' : 'rotateY(0)')};
    transform-style: preserve-3d;
    transition: transform 300ms;
`;

const Face = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 #999;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  opacity: 1;

  animation: ${(p) => (p.matched && 'fadeout')} 1s ease-in-out 500ms forwards;

  @keyframes fadeout {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

export const Front = styled.div`
  ${Face}
  background: var(--mango);

  h4 {
    color: #fff;
  }
`;

export const Back = styled.div`
  ${Face}

  background-color: var(--mango);
  background-image: url("${(p) => p.bgImg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transform: rotateY(180deg);
`;
