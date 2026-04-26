import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface Props {
  questionId: string;
  onClose: () => void;
}

export function ReportModal({ questionId, onClose }: Props) {
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending report
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
      <div className="bento-card w-full max-w-md p-6 relative">
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
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Report Submitted</h3>
            <p className="text-slate-500 text-sm">Thank you for helping us improve our medical accuracy.</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">Report Error</h2>
            <p className="text-sm text-slate-500 mb-6">See a clinical inaccuracy in question <b>{questionId}</b>? Let us know.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                 <textarea
                  required
                  value={reason}
                  onChange={e => setReason(e.target.value)}
                  placeholder="Describe the inaccuracy or issue..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition text-sm min-h-[120px] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-slate-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-900 transition shadow-lg shadow-slate-200"
              >
                Submit Internal Review
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
