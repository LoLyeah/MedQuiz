import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Send, Flag } from 'lucide-react';
import { Question } from '@/lib/types';

interface Props {
  question: Question;
  onClose: () => void;
  onSubmit: (reason: string) => void;
}

export function FlagModal({ question, onClose, onSubmit }: Props) {
  const [reasonType, setReasonType] = useState('clinical'); // 'clinical', 'difficulty', 'tags', 'grammar', 'other'
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let issueDescription = '';
    switch (reasonType) {
      case 'clinical':
        issueDescription = "The case contains clinical inaccuracies or incorrect medical facts.";
        break;
      case 'difficulty':
        issueDescription = "The case difficulty does not match the expected level.";
        break;
      case 'tags':
        issueDescription = "The generated medical tags are inappropriate or wrong for this case.";
        break;
      case 'grammar':
        issueDescription = "The case text contains typos or grammatical errors.";
        break;
      default:
        issueDescription = "The case has general quality issues.";
        break;
    }
    const finalReason = `Issue: ${issueDescription}`;
    onSubmit(finalReason);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const isLocal = question.source === 'local';

  if (isLocal) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bento-card w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-center py-6 text-slate-800">
            <Flag className="w-10 h-10 mx-auto text-amber-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Flag Built-in Case</h2>
            <p className="text-sm text-slate-500 mb-6 px-4">
              This is a human-provided case. To report an issue with this question, please open an issue in the official GitHub repository.
            </p>
            <a 
              href="https://github.com/LoLyeah/MedQuiz/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-slate-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-900 transition"
            >
              Open GitHub Issues
            </a>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="bento-card w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto"
      >
        {!submitted && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Case Flagged</h3>
            <p className="text-slate-500 text-sm">We&apos;ll regenerate a corrected version of this question at the end of the session.</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">Flag Question</h2>
            <p className="text-sm text-slate-500 mb-6">See an issue with this AI generated case? Flag it and it will be regenerated later.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 mb-4">
                <label className="text-xs font-bold text-slate-600 uppercase">Issue Type</label>
                <select 
                  value={reasonType} 
                  onChange={e => setReasonType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-sm appearance-none bg-white"
                >
                  <option value="clinical">Clinical Inaccuracy</option>
                  <option value="difficulty">Wrong Difficulty</option>
                  <option value="tags">Wrong Tags</option>
                  <option value="grammar">Typo / Grammar</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
              >
                <Flag className="w-4 h-4" /> Flag Case
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
