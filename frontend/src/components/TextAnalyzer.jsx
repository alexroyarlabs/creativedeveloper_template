import { useState } from 'react'
import Button from './Button'
import InsightCard from './InsightCard'

const SAMPLE_TEXT = `CharacterCounter is a powerful text analysis tool designed for writers, developers, and content creators. Whether you're writing a blog post, coding documentation, or crafting social media content, our tool provides instant insights into your text. Analyze character counts, word frequencies, readability scores, and much more with just a few clicks. Make your content better with data-driven insights.`

export default function TextAnalyzer() {
  const [text, setText] = useState('')
  
  // Calculate all metrics
  const metrics = {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0,
    paragraphs: text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0,
    lines: text.split(/\n/).length,
  }
  
  // Calculate average word length
  const words = text.trim().split(/\s+/).filter(w => w.length > 0)
  const avgWordLength = words.length > 0
    ? (words.reduce((sum, word) => sum + word.length, 0) / words.length).toFixed(1)
    : 0
  
  // Calculate reading time (average reading speed: 200 words per minute)
  const readingTime = Math.ceil(metrics.words / 200) || 0
  
  // Simple tone analysis based on word patterns
  const getTone = () => {
    if (!text.trim()) return 'Neutral'
    const lowerText = text.toLowerCase()
    
    const positiveWords = ['great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'good', 'best', 'love', 'happy', 'perfect']
    const negativeWords = ['bad', 'terrible', 'awful', 'worst', 'hate', 'poor', 'negative', 'difficult', 'problem', 'issue']
    const technicalWords = ['function', 'code', 'algorithm', 'data', 'system', 'API', 'development', 'software', 'technical']
    
    const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length
    const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length
    const technicalCount = technicalWords.filter(word => lowerText.includes(word)).length
    
    if (technicalCount > 2) return 'Technical'
    if (positiveCount > negativeCount) return 'Positive'
    if (negativeCount > positiveCount) return 'Negative'
    return 'Neutral'
  }
  
  // Calculate readability score (simplified Flesch Reading Ease)
  const getReadabilityScore = () => {
    if (metrics.words < 10) return { score: 'N/A', level: 'Too short to analyze' }
    
    const avgWordsPerSentence = metrics.sentences > 0 ? metrics.words / metrics.sentences : 0
    const avgSyllablesPerWord = parseFloat(avgWordLength) / 2.5 // Rough estimate
    
    const score = 206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord
    
    let level
    if (score >= 80) level = 'Very Easy'
    else if (score >= 60) level = 'Easy'
    else if (score >= 50) level = 'Fairly Easy'
    else if (score >= 30) level = 'Difficult'
    else level = 'Very Difficult'
    
    return { score: Math.round(score), level }
  }
  
  const readability = getReadabilityScore()
  const tone = getTone()
  
  const handleSampleText = () => {
    setText(SAMPLE_TEXT)
  }
  
  const handleClear = () => {
    setText('')
  }
  
  return (
    <div className="space-y-6">
      {/* Text Input Area */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
        <div className="bg-slate-900/50 px-6 py-3 border-b border-slate-700/50 flex justify-between items-center flex-wrap gap-3">
          <h3 className="text-lg font-semibold text-light-text">Text Editor</h3>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={handleSampleText} className="text-sm px-4 py-2">
              Sample Text
            </Button>
            <Button variant="ghost" onClick={handleClear} className="text-sm px-4 py-2">
              Clear
            </Button>
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="w-full h-64 px-6 py-4 bg-transparent text-light-text placeholder-slate-500 focus:outline-none resize-none"
          aria-label="Text input for analysis"
        />
      </div>
      
      {/* Basic Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <InsightCard label="Characters" value={metrics.characters.toLocaleString()} />
        <InsightCard label="No Spaces" value={metrics.charactersNoSpaces.toLocaleString()} />
        <InsightCard label="Words" value={metrics.words.toLocaleString()} />
        <InsightCard label="Sentences" value={metrics.sentences.toLocaleString()} />
        <InsightCard label="Paragraphs" value={metrics.paragraphs.toLocaleString()} />
        <InsightCard label="Lines" value={metrics.lines.toLocaleString()} />
      </div>
      
      {/* Advanced Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <InsightCard 
          label="Avg Word Length" 
          value={`${avgWordLength} chars`}
          subtext="Average characters per word"
        />
        <InsightCard 
          label="Reading Time" 
          value={`${readingTime} min`}
          subtext="At 200 words/min"
        />
        <InsightCard 
          label="Tone" 
          value={tone}
          subtext="Detected text sentiment"
        />
        <InsightCard 
          label="Readability" 
          value={readability.score}
          subtext={readability.level}
        />
      </div>
    </div>
  )
}
