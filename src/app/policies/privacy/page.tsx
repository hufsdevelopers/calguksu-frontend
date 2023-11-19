'use client';
import { PolicyLayout } from '@/styles/ui.styles';
import { PolicyContent, PolicyTitle } from '@/styles/policy.styles';

export default function PrivacyPage() {
  return <PolicyLayout>
    <PolicyTitle>Calguksu 개인정보 처리방침</PolicyTitle>
    <PolicyContent style={{ marginTop: '42px' }}>
      <strong>1. 개인정보의 처리 목적</strong><br /><br />
      CALGUKSU(calguksu.com)서비스는 훕스디벨로퍼스(hufsdevelopers,&nbsp;
      <a href='https://hufsdevelopers.org' target='_blank'>https://hufsdevelopers.org</a>)
      &nbsp;이하 &quot;훕스디벨로퍼스&quot;에서 운영하는 서비스입니다. 우리는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.<br />
      <li>고객의 캘린더 구독 의사 확인, 구독 자격 유지 및 관리</li>
      <br />

      <strong>2. 개인정보의 처리 및 보유 기간</strong><br /><br />
      ① ‘훕스디벨로퍼스’는 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.<br />
      ② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.<br />
      <li>고객의 캘린더 구독 : 고객이 캘린더를 구독하고 있는 상태가 유지되는 경우, 1년간 마지막 갱신일로부터 추가 갱신이 없는 경우 고객이 캘린더를 구독하지 않는 상태로 보고 지체없이 파기함.</li>
      <br />

      <strong>3. 정보주체의 열람 등의 권리 행사</strong><br /><br />
      정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.<br />
      ① 정보주체는 ‘훕스디벨로퍼스’에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.<br />
      <li>개인정보 열람 요구</li>
      <li>오류 등이 있을 경우 정정 요구</li>
      <li>삭제 요구</li>
      <li>처리 정지 요구</li>
      ② 정보주체는 개인정보처리책임자에게 전화 또는 이메일 등의 방법으로 연락하여 수정, 삭제할 수 있으며, 개인정보 처리정리를 요구할 수 있습니다.
      <br /><br />

      <strong>4. 처리하는 개인정보의 항목</strong><br /><br />
      ① ‘훕스디벨로퍼스’는 &quot;칼국수&quot; 서비스에서 다음의 개인정보 항목을 처리하고 있습니다.
      <li>&quot;칼국수&quot; 서비스 내 캘린더 구독 정보 - 필수항목 : 이메일</li>
      <br />

      <strong>5. 개인정보의 파기</strong><br /><br />
      <li>사용자가 1년간 구독한 캘린더를 갱신하지 않는 경우 개인정보 지체 없이 파기</li>
      <br />

      <strong>6. 개인정보 보호책임자 선임 현황</strong><br /><br />
      ① ‘훕스디벨로퍼스’는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.<br />
      <li>개인정보 보호책임자 성명 : 김경록, 직책 : 관리자, 직급 : 관리자 연락처 : 010-4684-1248, <a href='mailto:support@hufsdevelopers.org'
                                                                          target='_blank'>support@hufsdevelopers.org</a><br />
        ※ 개인정보 보호 담당부서로 연결됩니다.
      </li>
      <li>개인정보 보호 담당부서 부서명 : 훕스디벨로퍼스, 개인정보 관리팀담당자 : 김경록, 연락처 : 010-4684-1248, <a
        href='mailto:support@hufsdevelopers.org' target='_blank'>support@hufsdevelopers.org</a></li>
      ② 정보주체께서는 ‘훕스디벨로퍼스’의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
      ‘훕스디벨로퍼스’는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
      <br />
    </PolicyContent>
  </PolicyLayout>;
}