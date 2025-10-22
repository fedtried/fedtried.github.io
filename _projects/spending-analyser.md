---
layout: project
title: "AI Spending Analyser"
role: "Full-Stack Developer"
duration: "T212 Task"
thumbnail: "/assets/images/projects/spending.png"
link: "https://spending-analyser.streamlit.app/"
github: "https://github.com/fedtried/spending-analyser"
skills: ["Python", "Streamlit", "AI Integration", "Data Analysis", "Pandas", "Plotly", "Gemini AI", "Financial Technology"]
overview: "An AI-powered spending analysis tool designed for financially curious millennials and Gen Z users. The app provides conversational, empathetic financial insights that go beyond traditional budgeting to recognize spending context and offer realistic guidance without judgment."
stats:
  - value: "100%"
    label: "Privacy-First"
  - value: "AI-Powered"
    label: "Natural Language Analysis"
  - value: "Streamlit"
    label: "Interactive Dashboard"
---

## Problem Statement

Target users are financially curious millennials and Gen Z (25–40) who use Monzo/Revolut and may dabble in Trading 212, but feel anxious about spending and find traditional budgeting rigid and judgmental. Key pain points include:

- **Rigid Budgeting Tools** - Traditional apps are inflexible and don't understand context
- **Financial Anxiety** - Users feel judged by spending analysis that doesn't consider life circumstances
- **Lack of Context** - Spending categorization without understanding the "why" behind purchases
- **Complex Interfaces** - Overwhelming dashboards that don't provide actionable insights

## Solution

**AI Spending Analyser** addresses these problems through:

- **Conversational Analysis** - Natural language insights that consider user context and life circumstances
- **Empathetic Approach** - Recognizes spending context (e.g., Friday Pret as self-care) without judgment
- **Visual Pattern Recognition** - Time series visualization showing spending vs income with balance overlay
- **Streaming AI Responses** - Chat-style interface with real-time AI analysis for better user experience
- **Privacy-First Design** - All data processing happens in-memory with no data persistence

## Key Features

### 🧠 AI-Powered Analysis
- **Context-Aware Insights** - AI considers user demographics, location, and spending patterns
- **Natural Language Processing** - Conversational analysis that feels personal and non-judgmental
- **Streaming Responses** - Real-time AI feedback for immediate insights

### 📊 Visual Analytics
- **Time Series Visualization** - Spending vs income with balance overlay to identify patterns
- **Drip Spending Detection** - Visual identification of small, frequent purchases
- **Interactive Filtering** - Dynamic charts that respond to user selections

### 🔒 Privacy & Security
- **In-Memory Processing** - No data persistence, all analysis happens locally
- **Schema Detection** - Automatic CSV format detection with validation
- **Graceful Fallbacks** - Deterministic summaries when AI services are unavailable

## Technical Architecture

### Frontend
- **Streamlit** - Interactive web application with real-time updates
- **Plotly** - Interactive data visualizations
- **Responsive Design** - Mobile-friendly interface

### Backend & Data Processing
- **Pandas** - Data manipulation and analysis
- **Pydantic** - Data validation and schema enforcement
- **Lightweight Ingestion** - Automatic CSV schema detection and normalization

### AI Integration
- **Gemini 2.0 Flash** - Natural language analysis and insights
- **Structured Prompts** - User intent + summarized data + guardrails
- **Error Handling** - Fallback to deterministic summaries for reliability

## Approach

- **User-Centric Design** - Built specifically for millennial/Gen Z financial anxiety
- **AI-First Strategy** - Leveraging AI to provide empathetic, contextual analysis
- **Performance Optimization** - In-memory processing for speed and privacy
- **Iterative Development** - Continuous improvement based on user feedback

## Impact

- **Live Demo Available** - [spending-analyser.streamlit.app](https://spending-analyser.streamlit.app/)
- **Open Source** - Full source code available on GitHub
- **Privacy-Focused** - No data collection or storage
- **Accessible** - Simple interface requiring minimal clicks to get value

## Key Learnings

- **Context Matters in Financial Tools** - Understanding user circumstances is crucial for valuable insights
- **AI Can Be Empathetic** - Proper prompting can create non-judgmental financial guidance
- **Visual Patterns Help** - Time series visualizations reveal spending behaviors that raw data cannot
- **Privacy Builds Trust** - In-memory processing increases user confidence in financial tools

## Technology Stack

- **Frontend**: Streamlit, Plotly
- **Backend**: Python, Pandas, Pydantic
- **AI**: Gemini 2.0 Flash
- **Data Processing**: In-memory with Pandas DataFrames
- **Deployment**: Streamlit Cloud

## Future Plans

- **Enhanced AI Context** - Deeper integration with financial best practices
- **Export Features** - Allow users to save insights and reports
- **Mobile Optimization** - Improved mobile experience
- **Integration APIs** - Connect with popular banking APIs for automatic data import

## The Mission

Financial awareness shouldn't come with judgment. The AI Spending Analyser exists to help users understand their spending patterns through empathetic, contextual analysis that recognizes the human side of money management.

---
