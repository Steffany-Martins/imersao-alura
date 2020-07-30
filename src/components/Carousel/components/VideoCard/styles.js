import styled from "styled-components";

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;

  height: 200px;
  transition: opacity 0.3s;
  &:hover {
    z-index: 1;
    transition: 1.2s ease-in-out;
    margin: 0 30px;
    height: 30vh;
  }
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 1px 1px 8px 2px var(--primary);
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  &:hover,
  &:focus {
    opacity: 0.5;
    width: 300px;
    zoom: 500px;
    box-shadow: 8 2px 8px 0 rgba(0, 0, 0, 0.16), 0 0 0 9px rgba(0, 0, 0, 0.08);
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
