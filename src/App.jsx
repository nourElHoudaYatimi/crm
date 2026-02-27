import { useState } from 'react'
import './App.css'

function App() {
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <div className="crm-container">
      {/* Header */}
      <header className="crm-header">
        <div className="header-left">
          <div className="logo">CRM Hub</div>
          <span className="role-badge">Préventionniste</span>
        </div>
        <div className="header-right">
          <button className="header-btn primary">Assistant IA Rédaction</button>
          <button className="header-btn success">Nouvelle Tournée GPS</button>
          <button className="header-btn orange">Marketplace</button>
          <div className="user-menu">
            <div className="user-avatar">Z</div>
            <span className="username">Zayna</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="crm-main">
        {/* Title Section */}
        <div className="title-section">
          <div>
            <h1>Dashboard Missions</h1>
            <p className="subtitle">Bienvenue Zayna sellami - Missions et Interventions</p>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="kpi-cards">
          <div className="kpi-card">
            <div className="kpi-icon">💰</div>
            <div className="kpi-content">
              <p className="kpi-label">Revenus du mois</p>
              <h3 className="kpi-value">0,00 €</h3>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon">🎯</div>
            <div className="kpi-content">
              <p className="kpi-label">Missions actives</p>
              <h3 className="kpi-value">1</h3>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon">⏳</div>
            <div className="kpi-content">
              <p className="kpi-label">En attente</p>
              <h3 className="kpi-value">2 000,00 €</h3>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon">⭐</div>
            <div className="kpi-content">
              <p className="kpi-label">Score IA</p>
              <h3 className="kpi-value">85/100</h3>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="action-btn">📊 Vue d'ensemble</button>

        {/* Navigation Menu */}
        <nav className="crm-nav">
          <button className="nav-item">🎯 Mes missions</button>
          <button className="nav-item">📄 Rapports IA</button>
          <button className="nav-item">⏳ En attente</button>
          <button className="nav-item">📅 Calendrier</button>
          <button className="nav-item">📦 Bons de Commande</button>
          <button className="nav-item">📈 Timeline Validation</button>
          <button className="nav-item">🗺️ Cartographie</button>
          <button className="nav-item">💬 Messages</button>
          <button className="nav-item">🎥 Visioconférences</button>
          <button className="nav-item">🏪 Marketplace</button>
          <button className="nav-item">📋 Plans PDF</button>
          <button className="nav-item">📁 Projets</button>
          <button className="nav-item">📜 CGU Contrats</button>
        </nav>

        {/* Main Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* KPIs Temps Réel */}
            <section className="card-section">
              <h2 className="section-title">📊 KPIs Temps Réel</h2>
              <div className="kpi-grid">
                <div className="kpi-tile light-blue">
                  <h4>0</h4>
                  <p>Missions terminées (mois)</p>
                </div>
                <div className="kpi-tile light-green">
                  <h4>1</h4>
                  <p>Missions actives</p>
                </div>
                <div className="kpi-tile light-purple">
                  <h4>0%</h4>
                  <p>Taux utilisation IA</p>
                </div>
                <div className="kpi-tile light-orange">
                  <h4><span className="bar"></span> 85</h4>
                  <p>Performance Score</p>
                </div>
              </div>
            </section>

            {/* Tournées en cours */}
            <section className="card-section">
              <h2 className="section-title">🧭 Tournées en cours</h2>
              <div className="empty-state">
                <div className="empty-icon">🔗</div>
                <p>Aucune tournée planifiée</p>
                <button className="btn-create">Créer une tournée</button>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Missions récentes */}
            <section className="card-section">
              <h2 className="section-title">🎯 Missions récentes</h2>
              <div className="mission-item">
                <h4>Projet sans titre</h4>
                <div className="mission-meta">
                  <span className="badge orange">En cours</span>
                  <span className="badge purple">Audit</span>
                  <span className="date">Créée: 15/07/2025 19:05</span>
                </div>
              </div>
            </section>

            {/* Missions en attente */}
            <section className="card-section">
              <h2 className="section-title">⏳ Missions en attente</h2>
              <div className="empty-state">
                <div className="empty-icon">⏱️</div>
                <p>Aucune mission en attente</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Floating Chat Button */}
      <button className="floating-btn">💬</button>
    </div>
  )
}

export default App
