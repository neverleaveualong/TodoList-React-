import { style } from "@vanilla-extract/css";
import { vars } from "../../../App.css";

export const taskForm = style({
  display: "flex", // 요소를 flexbox로 설정
  flexDirection: "column", // 요소들이 세로 방향으로 배치되도록 설정
  height: "max-content", // 높이를 자식 요소의 최대 크기에 맞게 설정
  borderRadius: 4, // 모서리를 4px로 둥글게 설정
  marginTop: vars.spacing.small, // 위쪽 마진을 'small' 값으로 설정
  fontSize: vars.fontSizing.T3, // 글꼴 크기를 'T3'로 설정
  padding: vars.spacing.medium, // 안쪽 여백(padding)을 'medium' 값으로 설정
});
export const listForm = style({
  display: "flex", // Flexbox 레이아웃 사용
  flexDirection: "column", // 세로 방향으로 정렬
  marginRight: vars.spacing.listSpacing, // 오른쪽 마진 설정
  padding: vars.spacing.big2, // 내부 여백 설정
  width: "max-content", // 내용물만큼만 너비 설정
  height: "max-content", // 내용물만큼만 높이 설정
  borderRadius: 20, // 테두리 둥글기 20px
  backgroundColor: vars.color.list, // 배경 색상 설정
});

export const input = style({
  padding: vars.spacing.medium,
  fontSize: vars.fontSizing.P1, // 글자 크기
  minHeight: 60, // 최소 높이
  marginBottom: vars.spacing.medium, // 아래쪽 마진
  border: "none", // 테두리 없음
  boxShadow: vars.shadow.basic, // 그림자 효과
  borderRadius: 4, // 둥근 테두리
  resize: "none", // 크기 조절 비활성화 (textarea용)
  overflow: "hidden", // 넘치는 내용 숨김
  wordWrap: "break-word", // 단어가 길면 줄바꿈
});

export const button = style({
  width: 150, // 버튼 너비
  color: vars.color.brightText, // 글자 색
  padding: vars.spacing.medium, // 내부 여백
  fontSize: vars.fontSizing.T3, // 글꼴 크기
  backgroundColor: vars.color.mainDarker, // 배경 색
  border: "none", // 테두리 없음
  cursor: "pointer", // 마우스 포인터 손모양
  ":hover": {
    backgroundColor: vars.color.mainFaded, // 호버 시 배경색 변경
  },
});

export const buttons = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const close = style({
  marginLeft: vars.spacing.big2,
  fontSize: vars.fontSizing.T1,
  opacity: 0.5,
  ":hover": {
    opacity: 0.7,
  },
});
