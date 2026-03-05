import { useState } from 'react'
import {
  PLAN_LIST,
  PLAN_NAMES,
  PURPOSES,
  FEATURES,
  isAvail,
  featsByPurpose,
  allAvail,
  type PlanId,
} from './data'
import './catalog.css'

type Screen = 'welcome' | 'plan' | 'purposes' | 'features' | 'summary'

export default function Catalog() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null)
  const [currentPurpose, setCurrentPurpose] = useState<string | null>(null)
  const [viewingPlan, setViewingPlan] = useState<PlanId | null>(null)

  function go(next: Screen) {
    if ((next === 'purposes' || next === 'features' || next === 'summary') && !selectedPlan) return
    setScreen(next)
  }

  function selectPlan(planId: PlanId) {
    setSelectedPlan(planId)
    setViewingPlan(planId)
  }

  function openPurpose(purposeId: string) {
    setCurrentPurpose(purposeId)
    setViewingPlan(selectedPlan)
    setScreen('features')
  }

  function restart() {
    setScreen('plan')
    setSelectedPlan(null)
    setCurrentPurpose(null)
    setViewingPlan(null)
  }

  return (
    <div className="catalog-app" style={{ background: 'var(--gray10)', minHeight: '100vh' }}>
      {screen === 'welcome' && <WelcomeScreen onStart={() => go('plan')} />}
      {screen === 'plan' && (
        <PlanScreen
          selectedPlan={selectedPlan}
          onSelect={selectPlan}
          onBack={() => go('welcome')}
          onNext={() => go('purposes')}
        />
      )}
      {screen === 'purposes' && selectedPlan && (
        <PurposeScreen
          plan={selectedPlan}
          onOpenPurpose={openPurpose}
          onBack={() => go('plan')}
          onSummary={() => go('summary')}
        />
      )}
      {screen === 'features' && selectedPlan && currentPurpose && viewingPlan && (
        <FeatureScreen
          purposeId={currentPurpose}
          userPlan={selectedPlan}
          viewPlan={viewingPlan}
          onChangeViewPlan={setViewingPlan}
          onBack={() => go('purposes')}
        />
      )}
      {screen === 'summary' && selectedPlan && (
        <SummaryScreen
          plan={selectedPlan}
          onOpenPurpose={openPurpose}
          onBack={() => go('purposes')}
          onRestart={restart}
        />
      )}
    </div>
  )
}

function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="screen screen-center">
      <div className="card welcome-section">
        <div className="welcome-logo">one-stream</div>
        <h1 className="welcome-title">全機能カタログ</h1>
        <p className="welcome-desc">プランごとに使える全機能を</p>
        <p className="welcome-desc">目的別にわかりやすく確認できます。</p>
        <div className="welcome-steps">
          <div className="welcome-step">
            <span className="welcome-step-num">1</span>
            <span className="welcome-step-text">プランを選択</span>
          </div>
          <div className="welcome-step">
            <span className="welcome-step-num">2</span>
            <span className="welcome-step-text">目的から機能を探す</span>
          </div>
        </div>
        <button className="btn btn-primary btn-full" onClick={onStart}>はじめる</button>
      </div>
    </div>
  )
}

function PlanScreen({
  selectedPlan,
  onSelect,
  onBack,
  onNext,
}: {
  selectedPlan: PlanId | null
  onSelect: (id: PlanId) => void
  onBack: () => void
  onNext: () => void
}) {
  return (
    <div className="screen screen-center">
      <div className="card" style={{ width: '100%' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 4 }}>プランを選択</h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--gray60)' }}>プランに応じた機能一覧を表示します</p>
        <div className="plan-grid">
          {PLAN_LIST.map(p => {
            const cnt = allAvail(p.id).length
            return (
              <div
                key={p.id}
                className={`plan-card ${selectedPlan === p.id ? 'selected' : ''}`}
                onClick={() => onSelect(p.id)}
              >
                <div className="plan-radio"><div className="plan-radio-dot" /></div>
                <div style={{ flex: 1 }}>
                  <div className="plan-name">
                    {p.name}
                    <span style={{ fontWeight: 400, fontSize: '0.8rem', color: 'var(--gray60)', marginLeft: 8 }}>
                      {cnt} 機能
                    </span>
                  </div>
                  <div className="plan-desc">{p.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="plan-nav">
          <button className="btn btn-secondary" onClick={onBack}>戻る</button>
          <button className="btn btn-primary" onClick={onNext} disabled={!selectedPlan}>次へ</button>
        </div>
      </div>
    </div>
  )
}

function PurposeScreen({
  plan,
  onOpenPurpose,
  onBack,
  onSummary,
}: {
  plan: PlanId
  onOpenPurpose: (id: string) => void
  onBack: () => void
  onSummary: () => void
}) {
  const total = allAvail(plan).length
  const allTotal = FEATURES.length

  return (
    <div className="screen">
      <div className="card">
        <div className="purpose-hero">
          <div className="purpose-hero-plan">{plan} プラン</div>
          <div className="purpose-hero-count">{total} / {allTotal} 機能が利用可能</div>
        </div>
        <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 4 }}>目的から機能を探す</div>
        <p style={{ fontSize: '0.8rem', color: 'var(--gray60)', marginBottom: 12 }}>カテゴリを選んで詳細を確認</p>
        <div className="purpose-list">
          {PURPOSES.map(p => {
            const feats = featsByPurpose(p.id)
            const totalCnt = feats.length
            const availCnt = feats.filter(f => isAvail(f, plan)).length
            const pct = Math.round((availCnt / totalCnt) * 100)
            return (
              <div key={p.id} className="purpose-item" onClick={() => onOpenPurpose(p.id)}>
                <div className="purpose-icon-wrap">{p.icon}</div>
                <div className="purpose-body">
                  <div className="purpose-name">{p.name}</div>
                  <div className="purpose-desc">{p.desc}</div>
                </div>
                <div className="purpose-meta">
                  <div className="purpose-count">
                    {availCnt}<span style={{ fontWeight: 400, color: 'var(--gray50)' }}>/{totalCnt}</span>
                  </div>
                  <div className="purpose-bar">
                    <div className="purpose-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          <button className="btn btn-secondary" style={{ flex: 1 }} onClick={onBack}>戻る</button>
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={onSummary}>全体を見る</button>
        </div>
      </div>
    </div>
  )
}

function FeatureScreen({
  purposeId,
  userPlan,
  viewPlan,
  onChangeViewPlan,
  onBack,
}: {
  purposeId: string
  userPlan: PlanId
  viewPlan: PlanId
  onChangeViewPlan: (plan: PlanId) => void
  onBack: () => void
}) {
  const purpose = PURPOSES.find(p => p.id === purposeId)
  if (!purpose) return null

  const feats = featsByPurpose(purpose.id)
  const included = feats.filter(f => isAvail(f, viewPlan))
  const notIncluded = feats.filter(f => !isAvail(f, viewPlan))

  return (
    <div className="screen">
      <div className="card">
        <div className="fl-header">
          <span className="fl-icon">{purpose.icon}</span>
          <span className="fl-title">{purpose.name}</span>
        </div>
        <p className="fl-desc">{purpose.desc}</p>
        <div className="fl-plan-tabs">
          {PLAN_NAMES.map(pn => (
            <div
              key={pn}
              className={`fl-plan-tab ${pn === viewPlan ? 'active' : ''}`}
              onClick={() => onChangeViewPlan(pn)}
            >
              {pn}{pn === userPlan && <span style={{ fontSize: '0.65rem', fontWeight: 400 }}> (現在)</span>}
            </div>
          ))}
        </div>
        <div>
          {included.length > 0 ? (
            included.map(f => (
              <div key={f.key} className="fl-feature">
                <div className="fl-check included">&#10003;</div>
                <div className="fl-body">
                  <div className="fl-name">{f.name}</div>
                  <div className="fl-fdesc">{f.desc}</div>
                </div>
                <span className="fl-plan-tag included">{f.plan}</span>
              </div>
            ))
          ) : (
            <div className="fl-empty">このプランで利用可能な機能はありません</div>
          )}
          {notIncluded.length > 0 && (
            <>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray60)', padding: '12px 14px 4px', fontWeight: 600 }}>
                上位プランで利用可能
              </div>
              {notIncluded.map(f => (
                <div key={f.key} className="fl-feature unavailable">
                  <div className="fl-check not-included">&minus;</div>
                  <div className="fl-body">
                    <div className="fl-name">{f.name}</div>
                    <div className="fl-fdesc">{f.desc}</div>
                  </div>
                  <span className="fl-plan-tag upgrade">{f.plan}~</span>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="fl-nav">
          <button className="btn btn-secondary" onClick={onBack}>戻る</button>
        </div>
      </div>
    </div>
  )
}

function SummaryScreen({
  plan,
  onOpenPurpose,
  onBack,
  onRestart,
}: {
  plan: PlanId
  onOpenPurpose: (id: string) => void
  onBack: () => void
  onRestart: () => void
}) {
  const [showAll, setShowAll] = useState(false)
  const total = allAvail(plan).length
  const allTotal = FEATURES.length
  const upgrades = FEATURES.filter(f => !isAvail(f, plan))
  const upgradeTop = upgrades.slice(0, 5)
  const upgradeRest = upgrades.slice(5)

  return (
    <div className="screen">
      <div className="summary-hero">
        <div className="summary-hero-label">one-stream 全機能カタログ</div>
        <div className="summary-hero-plan">{plan} プラン</div>
        <div className="summary-hero-count">{total} / {allTotal} 機能が利用可能</div>
      </div>

      <div className="summary-section card">
        <div className="summary-section-title">
          <span>{'\u{1F4DA}'}</span> カテゴリ別 機能数
        </div>
        <div>
          {PURPOSES.map(p => {
            const feats = featsByPurpose(p.id)
            const availCnt = feats.filter(f => isAvail(f, plan)).length
            const totalCnt = feats.length
            return (
              <div key={p.id} className="cat-summary" onClick={() => onOpenPurpose(p.id)}>
                <span className="cat-icon">{p.icon}</span>
                <div className="cat-body">
                  <div className="cat-name">{p.name}</div>
                  <div className="cat-count">{availCnt} / {totalCnt} 機能が利用可能</div>
                </div>
                <span className="cat-arrow">{'\u203A'}</span>
              </div>
            )
          })}
        </div>
      </div>

      {upgrades.length > 0 && (
        <div className="summary-section card upgrade-section">
          <div className="summary-section-title">
            <span>{'\u{1F680}'}</span> 上位プランで使える機能（{upgrades.length}件）
          </div>
          <div>
            {upgradeTop.map(f => (
              <div key={f.key} className="upgrade-item">
                <div className="upgrade-body">
                  <div className="upgrade-name-row">
                    <span className="upgrade-name">{f.name}</span>
                    <span className="upgrade-plan-tag">{f.plan}~</span>
                  </div>
                  <div className="upgrade-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {showAll && upgradeRest.map(f => (
            <div key={f.key} className="upgrade-item">
              <div className="upgrade-body">
                <div className="upgrade-name-row">
                  <span className="upgrade-name">{f.name}</span>
                  <span className="upgrade-plan-tag">{f.plan}~</span>
                </div>
                <div className="upgrade-desc">{f.desc}</div>
              </div>
            </div>
          ))}
          {upgradeRest.length > 0 && (
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? '閉じる' : `他 ${upgradeRest.length} 件を表示`}
            </button>
          )}
        </div>
      )}

      <div className="summary-actions">
        <button className="btn btn-secondary btn-full" onClick={onBack}>カテゴリ選択に戻る</button>
        <button className="btn btn-secondary btn-full" onClick={onRestart}>プラン選択に戻る</button>
      </div>
    </div>
  )
}
