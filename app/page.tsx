'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useGameState } from '@/hooks/useGameState';
import { SettingsModal } from '@/components/SettingsModal';
import { ReportModal } from '@/components/ReportModal';
import { Play, Activity, Trophy, Settings, Wifi, WifiOff, FileWarning, Medal, LayoutDashboard, Library, Globe, CheckCircle2, XCircle, AlertCircle, Tag, RefreshCw } from 'lucide-react';

export default function Home() {
  const gameState = useGameState();
  const [showSettings, setShowSettings] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'library'>('dashboard');
  
  // Game interaction state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const {
    stats, settings, currentStreak, questions, currentQuestion, 
    currentIndex, isGameOver, isLoading, isOnline, bankSize, questionBank,
    startGame, handleAnswer, nextQuestion, updateSettings, finishGame,
    refreshBank, isRefreshing
  } = gameState;

  const onSelectOption = (option: string) => {
    if (hasAnswered) return;
    setSelectedOption(option);
    setHasAnswered(true);
    handleAnswer(option === currentQuestion.answer);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    nextQuestion();
  };

  const accuracy = stats.gamesPlayed > 0 
    ? Math.round((stats.score / (stats.gamesPlayed * 10)) * 100) // Rough approximation, normally based on total questions answered
    : (stats.score > 0 ? 100 : 0);

  const sessionAccuracy = Math.round((gameState.sessionScore / (gameState.sessionQuestionsCount || 1)) * 100);
  
  const getEvalMeta = (perc: number) => {
    if (perc === 100) return { 
       label: "Perfect Master!", 
       title: "Flawless Execution",
       desc: "You have diagnosed every single case correctly. Excellent clinical reasoning!",
       tip: "You should consider sharing your expertise or creating custom extreme-difficulty sets.",
       color: "text-fuchsia-500", 
       bg: "bg-fuchsia-50 border-fuchsia-200",
       icon: Trophy,
       iconColor: "text-fuchsia-500",
       iconBg: "bg-fuchsia-100",
       isRainbow: true
    };
    if (perc >= 80) return { 
       label: "Excellent!", 
       title: "Brilliant Work",
       desc: "Great diagnostic accuracy. You're showing strong clinical acumen.",
       tip: "Review the few cases you missed, then increase the difficulty setting for your next session.",
       color: "text-blue-600", 
       bg: "bg-blue-50 border-blue-100",
       icon: Medal,
       iconColor: "text-blue-600",
       iconBg: "bg-blue-100"
    };
    if (perc >= 60) return { 
       label: "Good Target", 
       title: "Solid Performance",
       desc: "Good grasp of the concepts, but there's room for improvement in edge cases.",
       tip: "Focus your next study session solely on the organ systems or specialities related to your incorrect diagnoses.",
       color: "text-emerald-600", 
       bg: "bg-emerald-50 border-emerald-100",
       icon: CheckCircle2,
       iconColor: "text-emerald-600",
       iconBg: "bg-emerald-100"
    };
    if (perc >= 40) return { 
       label: "Average", 
       title: "Keep Studying",
       desc: "You got a few right, but reviewing the study library will help solidify your knowledge.",
       tip: "Use the Study Library to re-read the differential explanations for cases you missed.",
       color: "text-amber-600", 
       bg: "bg-amber-50 border-amber-100",
       icon: LayoutDashboard,
       iconColor: "text-amber-600",
       iconBg: "bg-amber-100"
    };
    if (perc > 10) return { 
       label: "Needs Work", 
       title: "Back to the Books",
       desc: "A challenging session. Review the explanations in the study library carefully.",
       tip: "Don't guess! Try to formulate a diagnosis before looking at the options.",
       color: "text-orange-600", 
       bg: "bg-orange-50 border-orange-100",
       icon: AlertCircle,
       iconColor: "text-orange-600",
       iconBg: "bg-orange-100"
    };
    return { 
       label: "Poor", 
       title: "Tough Luck",
       desc: "Don't be discouraged. Everyone starts somewhere. Keep practicing!",
       tip: "Switch to 'Easy' mode and focus heavily on understanding the classic presentations.",
       color: "text-red-600", 
       bg: "bg-red-50 border-red-100",
       icon: XCircle,
       iconColor: "text-red-600",
       iconBg: "bg-red-100"
    };
  };
  
  const evalMeta = getEvalMeta(sessionAccuracy);
  const EvalIcon = evalMeta.icon;

  // If we haven't loaded questions properly or on dashboard
  if (isGameOver) {
    return (
      <div className="flex flex-col md:flex-row h-screen w-full bg-slate-50 font-sans p-4 md:p-6 overflow-hidden">
        <Sidebar 
          isOnline={isOnline} 
          onOpenSettings={() => setShowSettings(true)} 
          engineName={settings.useCustomApi ? 'Custom API' : 'Gemini Flash'} 
          currentView={currentView}
          onSetView={(v) => setCurrentView(v as any)}
        />
        {gameState.showEvaluation ? (
          <main className="flex-1 overflow-y-auto mt-4 md:mt-0 pl-0 md:pl-4 flex flex-col">
             <div className="my-auto flex flex-col items-center w-full max-w-2xl mx-auto py-8">
               <motion.div 
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  className={`bento-card p-6 md:p-12 text-center w-full border-2 ${evalMeta.bg} relative z-10`}
               >
                <div className={`w-20 h-20 md:w-28 md:h-28 ${evalMeta.iconBg} ${evalMeta.iconColor} rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-inner relative`}>
                   {sessionAccuracy === 100 && (
                     <motion.div 
                       className="absolute inset-0 rounded-full border-4 border-fuchsia-400"
                       animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                       transition={{ repeat: Infinity, duration: 1.5 }}
                     />
                   )}
                   <EvalIcon className="w-14 h-14" />
                </div>
                <motion.h2 
                   className={`text-3xl md:text-5xl font-black mb-3 tracking-tight ${evalMeta.color}`}
                   animate={evalMeta.isRainbow ? { color: ['#8b5cf6', '#d946ef', '#f97316', '#8b5cf6'] } : {}}
                   transition={evalMeta.isRainbow ? { repeat: Infinity, duration: 3, ease: 'linear' } : undefined}
                >
                   {evalMeta.title}
                </motion.h2>
                <p className="text-slate-600 mb-8 md:mb-10 text-base md:text-lg max-w-md mx-auto leading-relaxed">{evalMeta.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10 w-full">
                   <div className="bg-white/80 backdrop-blur border border-white/50 rounded-3xl p-4 md:p-6 shadow-sm">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Score</p>
                      <motion.p 
                         initial={{ scale: 0.5, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         transition={{ delay: 0.2, type: 'spring' }}
                         className="text-4xl md:text-5xl font-black text-slate-800"
                      >
                         {gameState.sessionScore} <span className="text-xl md:text-2xl text-slate-400">/ {gameState.sessionQuestionsCount}</span>
                      </motion.p>
                   </div>
                   <div className="bg-white/80 backdrop-blur border border-white/50 rounded-3xl p-4 md:p-6 shadow-sm flex flex-col items-center justify-center">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Accuracy
                      </p>
                      <motion.p 
                         initial={{ scale: 0.5, opacity: 0 }}
                         animate={evalMeta.isRainbow 
                            ? { scale: 1, opacity: 1, color: ['#8b5cf6', '#d946ef', '#f97316', '#8b5cf6'] } 
                            : { scale: 1, opacity: 1 }
                         }
                         transition={evalMeta.isRainbow 
                            ? { scale: { delay: 0.3, type: 'spring' }, opacity: { delay: 0.3 }, color: { repeat: Infinity, duration: 3, ease: 'linear' } } 
                            : { delay: 0.3, type: 'spring' }
                         }
                         className={`text-4xl md:text-5xl font-black ${evalMeta.color}`}
                      >
                         {sessionAccuracy}%
                      </motion.p>
                      <motion.span 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.5 }}
                         className={`mt-2 text-sm font-bold px-3 py-1 rounded-full ${evalMeta.iconBg} ${evalMeta.iconColor}`}
                      >
                         {evalMeta.label}
                      </motion.span>
                   </div>
                </div>

                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.6 }}
                   className="bg-white/70 border border-slate-100 rounded-3xl p-4 md:p-6 mb-8 md:mb-10 text-left"
                >
                   <div className="flex items-center gap-3 mb-2">
                     <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                       <Activity className="w-4 h-4" />
                     </span>
                     <h3 className="font-bold text-slate-700">Actionable Tip</h3>
                   </div>
                   <p className="text-slate-600 sm:pl-11 text-sm md:text-base">{evalMeta.tip}</p>
                </motion.div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                     gameState.setShowEvaluation(false);
                     setCurrentView('dashboard');
                  }}
                  className="bg-slate-800 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-slate-900 transition shadow-xl shadow-slate-200"
                >
                  Return to Dashboard
                </motion.button>
             </motion.div>
             </div>
          </main>
        ) : currentView === 'dashboard' ? (
        <main className="flex-1 flex flex-col gap-4 pl-0 md:pl-4 overflow-y-auto mt-4 md:mt-0">
           <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="flex-1 bento-card p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-sm"
              style={{ padding: '2.5rem' }} // To ensure styling independence from border flickers if any
           >
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Medal className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-2 mt-4 tracking-tight">MedQuiz Diagnostics</h2>
              <p className="text-slate-500 mb-6 md:mb-8 max-w-md mx-auto text-sm md:text-base">
                Test your clinical reasoning skills with real-world case studies powered by AI. Play offline or online.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                 <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 min-w-[120px] md:min-w-[140px]">
                    <p className="text-2xl md:text-3xl font-black text-slate-800">{stats.xp}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Total XP</p>
                 </div>
                 <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 min-w-[120px] md:min-w-[140px]">
                    <p className="text-2xl md:text-3xl font-black text-slate-800">Lvl {stats.level}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Rank</p>
                 </div>
                 <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 min-w-[120px] md:min-w-[140px]">
                    <p className="text-2xl md:text-3xl font-black text-slate-800">{stats.longestStreak}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Best Streak</p>
                 </div>
              </div>


              <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
                <div className="flex flex-col items-center w-full">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Select Difficulty</p>
                  <div className="flex bg-slate-100 border border-slate-200 rounded-full p-1.5 shadow-sm w-full">
                    <button 
                      onClick={() => updateSettings({ difficulty: 'easy' })}
                      className={`flex-1 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all ${settings.difficulty === 'easy' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                    >
                      Easy
                    </button>
                    <button 
                      onClick={() => updateSettings({ difficulty: 'medium' })}
                      className={`flex-1 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all ${settings.difficulty === 'medium' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                    >
                      Medium
                    </button>
                    <button 
                      onClick={() => updateSettings({ difficulty: 'hard' })}
                      className={`flex-1 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all ${settings.difficulty === 'hard' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                    >
                      Hard
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <button 
                    onClick={startGame}
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-50 w-full"
                  >
                    {isLoading ? 'Preparing Cases...' : <><Play className="w-5 h-5 fill-current" /> Start Evaluation</>}
                  </button>
                  <button 
                    onClick={refreshBank}
                    disabled={isRefreshing || !isOnline}
                    className="text-slate-500 hover:text-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition disabled:opacity-50 h-10"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} /> 
                    {isRefreshing ? 'Generating New Cases...' : `Refresh AI Cases (${bankSize} ready)`}
                  </button>
                </div>
              </div>
           </motion.div>
        </main>
        ) : (
          <main className="flex-1 overflow-auto pl-0 md:pl-4 pb-10 mt-4 md:mt-0">
             <div className="mb-6 flex justify-between items-end">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">Study Library</h2>
                  <p className="text-slate-500 mt-1">Review {stats.solvedCases?.length || 0} clinical cases you&apos;ve encountered.</p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-4 custom-scrollbar">
                {questionBank.filter(q => stats.solvedCases?.includes(q.id)).map((q, i) => (
                   <div key={q.id} className="bento-card p-6 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                         <span className="badge bg-blue-100 text-blue-600">Case #{i + 1}</span>
                         <span className={`badge ${q.difficulty === 'hard' ? 'bg-red-100 text-red-600' : q.difficulty === 'medium' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>{q.difficulty}</span>
                         {q.tags && q.tags.map(t => (
                           <span key={t} className="badge bg-slate-100 text-slate-600 uppercase text-[9px] tracking-wide flex items-center gap-1">
                              <Tag className="w-2.5 h-2.5" /> {t}
                           </span>
                         ))}
                      </div>
                      <p className="font-medium text-slate-700 leading-relaxed max-w-4xl">{q.caseStudy}</p>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 max-w-4xl">
                         <p className="text-sm font-bold text-blue-600 mb-1">Diagnosis: {q.answer}</p>
                         <p className="text-sm text-slate-600">{q.explanation}</p>
                      </div>
                   </div>
                ))}
             </div>
          </main>
        )}
        {showSettings && <SettingsModal settings={settings} onSave={updateSettings} onClose={() => setShowSettings(false)} />}
      </div>
    );
  }

  // Active Game State
  const progressPercent = Math.round((currentIndex / questions.length) * 100) || 0;

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-slate-50 font-sans p-4 md:p-6 overflow-hidden">
      <Sidebar 
          isOnline={isOnline} 
          onOpenSettings={() => setShowSettings(true)} 
          engineName={settings.useCustomApi ? 'Custom API' : 'Gemini Flash'} 
          currentView="quiz"
          onSetView={(v) => setCurrentView(v as any)}
      />
      
      <main className="flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-4 pl-0 md:pl-4 overflow-y-auto mt-4 md:mt-0 items-start">
        <div className="lg:col-span-8 flex flex-col gap-4 w-full">
          {/* Top Header / Progress */}
          <div className="bento-card p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1 w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs md:text-sm font-bold text-slate-600 uppercase tracking-tight">Case {currentIndex + 1} of {questions.length}</span>
                <span className="text-xs md:text-sm font-bold text-blue-600">{progressPercent}% Session</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
            <div className="sm:ml-8 flex gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <div className="text-left sm:text-center">
                <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">Difficulty</p>
                <div className="flex gap-1 mt-1 justify-start sm:justify-center">
                  <div className={`w-3 h-1.5 md:w-4 md:h-1.5 rounded-full ${settings.difficulty !== 'easy' ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
                  <div className={`w-3 h-1.5 md:w-4 md:h-1.5 rounded-full ${settings.difficulty === 'hard' || settings.difficulty === 'medium' ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                  <div className={`w-3 h-1.5 md:w-4 md:h-1.5 rounded-full ${settings.difficulty === 'hard' ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="bento-card p-4 md:p-8 flex flex-col min-h-[400px]">
            {currentQuestion && (
              <>
                <div className="mb-4 md:mb-6">
                  <div className="flex justify-between items-start mb-3 md:mb-4 gap-2 flex-wrap">
                    <span className={`badge text-[10px] md:text-xs ${currentQuestion.difficulty === 'hard' ? 'bg-red-100 text-red-600' : currentQuestion.difficulty === 'medium' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'} inline-block`}>
                      {currentQuestion.difficulty} Case
                    </span>
                    {currentQuestion.source === 'ai' && (
                       <span className="badge bg-purple-100 text-purple-600 flex items-center gap-1 text-[10px] md:text-xs">
                          <Activity className="w-3 h-3" /> AI Generated
                       </span>
                    )}
                    <div className="flex-1 flex gap-1.5 md:gap-2 flex-wrap justify-end">
                       {currentQuestion.tags && currentQuestion.tags.map(t => (
                          <span key={t} className="badge bg-slate-100 text-slate-600 uppercase text-[8px] md:text-[9px] tracking-wide inline-flex items-center gap-1">
                             <Tag className="w-2 md:w-2.5 h-2 md:h-2.5" /> {t}
                          </span>
                       ))}
                    </div>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-800 leading-relaxed mb-4 md:mb-6">
                    {currentQuestion.caseStudy}
                  </h2>
                </div>


                <div className="grid grid-cols-1 gap-3 space-y-1">
                  {currentQuestion.options.map((option, idx) => {
                    let btnClass = "choice-btn";
                    if (hasAnswered) {
                      if (option === currentQuestion.answer) {
                        btnClass += " correct";
                      } else if (option === selectedOption) {
                        btnClass += " wrong";
                      } else {
                          btnClass += " opacity-50"; // Dim others
                      }
                    } else if (option === selectedOption) {
                      btnClass += " selected";
                    }

                    return (
                      <button 
                        key={idx} 
                        onClick={() => onSelectOption(option)}
                        disabled={hasAnswered}
                        className={btnClass}
                      >
                        <span className="font-bold mr-2 md:mr-3 opacity-50 shrink-0">{String.fromCharCode(65 + idx)}.</span>
                        <span className="text-left">{option}</span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            <div className="mt-auto pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 gap-4">
              <button 
                onClick={() => setShowReport(true)}
                className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1 transition order-2 sm:order-1"
              >
                <FileWarning className="w-4 h-4" /> Report Case
              </button>
              <div className="flex gap-2 md:gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap justify-between sm:justify-end order-1 sm:order-2">
                <button 
                  onClick={finishGame}
                  className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition whitespace-nowrap text-sm md:text-base flex-1 sm:flex-none text-center"
                >
                  End Session
                </button>
                {hasAnswered && (
                  <button 
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2 flex-1 sm:flex-none text-sm md:text-base"
                  >
                    Proceed <Activity className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4 w-full">
          {/* Stats */}
          <div className="bento-card p-4 md:p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-50 rounded-full flex items-center justify-center mb-2 md:mb-3 text-2xl md:text-3xl shadow-inner border border-amber-100">
              {currentStreak >= 3 ? '🔥' : '🩺'}
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-800">{currentStreak > 0 ? `${currentStreak} STREAK` : 'EVALUATING'}</h3>
            <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">{stats.level >= 5 ? 'Master Diagnostician' : 'Clinical Resident'}</p>
            <div className="mt-4 w-full h-px bg-slate-100"></div>
            <div className="flex gap-4 md:gap-6 mt-4 w-full justify-center">
              <div className="text-center flex-1">
                <p className="text-lg md:text-xl font-black text-slate-800">{stats.xp}</p>
                <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total XP</p>
              </div>
              <div className="w-px h-8 bg-slate-100 self-center"></div>
              <div className="text-center flex-1">
                <p className="text-lg md:text-xl font-black text-slate-800">{currentScoreAcc(stats.score, currentIndex)}</p>
                <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Score</p>
              </div>
            </div>
          </div>

          {/* Clinical Insight */}
          <div className="bento-card p-4 md:p-6 bg-slate-800 text-white flex flex-col relative overflow-hidden min-h-[300px]">
           {/* Decorator element */}

           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-blue-400">
               <Activity className="w-5 h-5" />
            </div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-slate-400">Clinical Insight</h4>
          </div>
          
          <div className="flex-1 overflow-y-auto relative z-10 pr-2 custom-scrollbar">
            {hasAnswered ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600/50">
                  <p className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wide">Diagnosis</p>
                  <p className="text-lg font-bold text-white mb-1">
                    {currentQuestion.answer}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {selectedOption === currentQuestion.answer ? (
                       <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded inline-flex items-center gap-1 font-bold">
                          <CheckCircle2 className="w-3 h-3" /> Correct
                       </span>
                    ) : (
                        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded inline-flex items-center gap-1 font-bold">
                          <XCircle className="w-3 h-3" /> Incorrect
                       </span>
                    )}
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {currentQuestion.explanation}
                </p>
                <div className="mt-6 pt-4 border-t border-slate-700 text-center">
                   <p className="text-[10px] text-slate-500 italic">Explanations are for educational purposes and should not replace clinical judgment.</p>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50 px-4">
                <Activity className="w-12 h-12 text-slate-600 mb-3" />
                <p className="text-sm font-medium text-slate-400">Select a diagnosis to reveal clinical insights.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>

      {showSettings && <SettingsModal settings={settings} onSave={updateSettings} onClose={() => setShowSettings(false)} />}
      {showReport && currentQuestion && <ReportModal questionId={currentQuestion.id} onClose={() => setShowReport(false)} />}
    </div>
  );
}

function Sidebar({ isOnline, onOpenSettings, engineName, currentView, onSetView }: { isOnline: boolean, onOpenSettings: () => void, engineName: string, currentView: string, onSetView: (v: string) => void }) {
  return (
    <aside className="w-full md:w-64 flex flex-row md:flex-col shrink-0 bg-slate-50 gap-4 justify-between md:justify-start">
        <div className="flex items-center gap-2 md:gap-3 px-2 md:mb-8 mt-1 md:mt-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg shadow-blue-200">
            <Activity className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
          </div>
          <h1 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight hidden sm:block">MedQuiz AI</h1>
        </div>

        <nav className="flex flex-row md:flex-col gap-1 md:flex-1 w-full overflow-x-auto custom-scrollbar items-center md:items-stretch py-1 md:py-0">
          <div className={`sidebar-item flex-shrink-0 flex items-center gap-2 ${currentView === 'dashboard' || currentView === 'quiz' ? 'active' : ''}`} onClick={() => currentView !== 'quiz' && onSetView('dashboard')}>
             <LayoutDashboard className="w-4 h-4 md:w-5 md:h-5" />
             <span className="text-sm md:text-base">Dashboard</span>
          </div>
          <div className={`sidebar-item flex-shrink-0 flex items-center gap-2 md:mt-4 ${currentView === 'library' ? 'active' : ''}`} onClick={() => currentView !== 'quiz' && onSetView('library')}>
             <Library className="w-4 h-4 md:w-5 md:h-5" />
             <span className="text-sm md:text-base">Study Library</span>
          </div>
          <div className="md:mt-4 md:px-4 hidden md:block">
             <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                 {isOnline ? <Globe className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                 Cases Bank ({engineName})
             </div>
             <span className="text-xs px-2 py-1 rounded font-bold bg-slate-200 text-slate-600 inline-block">
                Local Cache
             </span>
          </div>
        </nav>

        <div className="mt-auto md:pt-6 hidden md:block">
          <div className="bento-card p-4 flex flex-col gap-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
               <Settings className="w-3 h-3" /> Settings
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700 truncate pr-2">{engineName}</span>
              <div className="w-8 h-4 bg-blue-600 rounded-full relative flex-shrink-0">
                <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <button 
              onClick={onOpenSettings}
              className="text-xs text-blue-600 font-bold hover:text-blue-700 transition"
            >
              Configure Connection →
            </button>
          </div>
        </div>
      </aside>
  )
}

function currentScoreAcc(score: number, index: number) {
    if (index === 0 && score === 0) return 0;
    return score;
}
