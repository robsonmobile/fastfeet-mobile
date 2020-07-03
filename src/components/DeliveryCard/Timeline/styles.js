import styled from 'styled-components/native';

import { colors } from '~/styles/colors';

export const Container = styled.View`
  flex-direction: column;
  align-self: stretch;
  margin-top: 15px;
  padding: 0 20px;
`;

export const Line = styled.View`
  height: 1px;
  background: ${colors.primary};
  border: 1px solid ${colors.primary};
  margin-left: 23px;
  margin-right: 16px;
  margin-top: 0px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -6px;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  background: ${(props) => (props.filled ? colors.primary : colors.background)};
  margin-bottom: 5px;
`;

export const LabelContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.Text`
  color: #999999;
  font-weight: bold;
  font-size: 8px;
  max-width: 50px;
  text-align: center;
`;
