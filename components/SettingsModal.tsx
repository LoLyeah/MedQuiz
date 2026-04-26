import React, { useState } from 'react';
import { AppSettings } from '@/lib/types';
import { X } from 'lucide-react';

interface Props {
  settings: AppSettings;
  onSave: (settings: Partial<AppSettings>) => void;
  onClose: () => void;
}

export function SettingsModal({ settings, onSave, onClose }: Props) {
  const [diff, setDiff] = useState(settings.difficulty);
  const [useCustom, setUseCustom] = useState(settings.useCustomApi);
  const [endpoint, setEndpoint] = useState(settings.customApiEndpoint || '');
  const [key, setKey] = useState(settings.customApiKey || '');

  const handleSave = () => {
    onSave({
      difficulty: diff,
      useCustomApi: useCustom,
      customApiEndpoint: endpoint,
      customApiKey: key,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
      <div className="bento-card w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-xl font-bold text-slate-800 mb-6 tracking-tight">App Settings</h2>
        
        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
              Difficulty
            </label>
            <div className="flex gap-2">
              {(['easy', 'medium', 'hard'] as const).map(d => (
                <button
                  key={d}
                  onClick={() => setDiff(d)}
                  className={`flex-1 py-2 px-4 rounded-xl border-2 text-sm font-bold capitalize transition-all ${
                    diff === d 
                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                      : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-300'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
              API Connection
            </label>
            <div className="flex items-center gap-3 mb-4">
              <input
                type="checkbox"
                id="useCustom"
                checked={useCustom}
                onChange={e => setUseCustom(e.target.checked)}
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="useCustom" className="text-sm font-medium text-slate-700">
                Use Custom AI Endpoint
              </label>
            </div>

            {useCustom && (
              <div className="space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">API Endpoint URL</label>
                  <input
                    type="url"
                    value={endpoint}
                    onChange={e => setEndpoint(e.target.value)}
                    placeholder="https://api.openai.com/v1/chat/completions"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">API Key (optional)</label>
                  <input
                    type="password"
                    value={key}
                    onChange={e => setKey(e.target.value)}
                    placeholder="sk-..."
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-sm"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
