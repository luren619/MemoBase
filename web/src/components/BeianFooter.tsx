// 备案信息由实际部署者配置，不沿用其他站点的登记信息。
const ICP_NUMBER = import.meta.env.VITE_ICP_NUMBER?.trim() ?? ''
const POLICE_NUMBER = import.meta.env.VITE_POLICE_NUMBER?.trim() ?? ''
const POLICE_CODE = import.meta.env.VITE_POLICE_CODE?.trim() ?? ''

interface Props {
  dark?: boolean // 深色背景下用浅色文字
}

export default function BeianFooter({ dark }: Props) {
  const showPolice = Boolean(POLICE_NUMBER && POLICE_CODE)
  if (!ICP_NUMBER && !showPolice) return null
  const color = dark ? 'rgba(255,255,255,0.55)' : '#98A2B3'
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        fontSize: 12,
        lineHeight: 1.6,
        color,
      }}
    >
      {ICP_NUMBER && <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noreferrer"
        style={{ color, textDecoration: 'none' }}
      >
        {ICP_NUMBER}
      </a>}
      {showPolice && (
        <a
          href={`https://beian.mps.gov.cn/#/query/webSearch?code=${POLICE_CODE}`}
          target="_blank"
          rel="noreferrer"
          style={{ color, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
        >
          {POLICE_NUMBER}
        </a>
      )}
    </div>
  )
}
