import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const GoBackHeader = styled.TouchableOpacity.attrs({ activeOpacity: 0.6 })`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.display.padding_app}px;
`;

export const GoBackTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;
`;

export const Inputs = styled.View`
  padding: ${({ theme }) => theme.display.padding_app}px;
  flex: 1;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: center;
`;