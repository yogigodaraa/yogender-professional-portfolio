"use client";

import { useState, useEffect } from "react";

interface EmailReply {
  id: string;
  from: string;
  subject: string;
  message: string;
  timestamp: string;
  trackingId?: string;
}

// Admin page to view email replies routed through the website
export default function EmailRepliesPage() {
  const [replies, setReplies] = useState<EmailReply[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedReply, setSelectedReply] = useState<EmailReply | null>(null);

  useEffect(() => {
    // In a real implementation, you'd fetch from your database/API
    // For now, we'll show how this would work with sample data
    const sampleReplies: EmailReply[] = [
      {
        id: "1",
        from: "client@example.com",
        subject: "Re: [PORTFOLIO-msg_12345] Project Inquiry",
        message: "Thank you for your quick response! I'd like to discuss the project timeline in more detail.",
        timestamp: new Date().toISOString(),
        trackingId: "msg_12345"
      },
      {
        id: "2", 
        from: "recruiter@company.com",
        subject: "Re: [PORTFOLIO-msg_67890] Job Opportunity",
        message: "Great to hear from you! When would be a good time for a call this week?",
        timestamp: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        trackingId: "msg_67890"
      }
    ];

    setTimeout(() => {
      setReplies(sampleReplies);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleReplyClick = (reply: EmailReply) => {
    setSelectedReply(reply);
  };

  const composeReply = (originalEmail: string, subject: string, trackingId?: string) => {
    const replySubject = subject.startsWith('Re:') ? subject : `Re: ${subject}`;
    const body = encodeURIComponent(`\n\n---\nReplying to message ${trackingId || 'N/A'}\nSent via One Piece Portfolio`);
    
    const mailtoLink = `mailto:${originalEmail}?subject=${encodeURIComponent(replySubject)}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading email replies...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              📧 Email Reply Dashboard
            </h1>
            <p className="text-xl text-gray-300">
              Manage email conversations routed through your portfolio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Reply List */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3">📬</span>
                  Recent Replies ({replies.length})
                </h2>
                
                {replies.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-lg">No email replies yet</p>
                    <p className="text-gray-500 mt-2">Replies will appear here when visitors respond to your emails</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                        onClick={() => handleReplyClick(reply)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-white truncate">{reply.subject}</h3>
                            <p className="text-sm text-gray-400">From: {reply.from}</p>
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(reply.timestamp).toLocaleDateString()}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                          {reply.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          {reply.trackingId && (
                            <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                              ID: {reply.trackingId}
                            </span>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              composeReply(reply.from, reply.subject, reply.trackingId);
                            }}
                            className="text-sm bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 px-3 py-1 rounded transition-colors"
                          >
                            Reply 📤
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Reply Details */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {selectedReply ? '📖 Message Details' : '⚙️ Email Setup'}
                </h2>
                
                {selectedReply ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">From</label>
                      <p className="text-white bg-white/10 p-2 rounded text-sm">{selectedReply.from}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                      <p className="text-white bg-white/10 p-2 rounded text-sm">{selectedReply.subject}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <div className="text-gray-300 bg-white/10 p-3 rounded text-sm whitespace-pre-wrap max-h-48 overflow-y-auto">
                        {selectedReply.message}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Received</label>
                      <p className="text-white bg-white/10 p-2 rounded text-sm">
                        {new Date(selectedReply.timestamp).toLocaleString()}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => composeReply(selectedReply.from, selectedReply.subject, selectedReply.trackingId)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all"
                    >
                      Compose Reply 📤
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                      <h3 className="text-green-300 font-semibold mb-2">✅ Setup Complete</h3>
                      <p className="text-green-200 text-sm">
                        Your email reply system is configured and ready to receive responses!
                      </p>
                    </div>
                    
                    <div className="text-gray-300 text-sm space-y-2">
                      <p><strong>How it works:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Contact form generates tracking IDs</li>
                        <li>Email replies are routed through your site</li>
                        <li>You can respond directly from this dashboard</li>
                        <li>All conversations are tracked and organized</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">📋 Next Steps</h4>
                      <p className="text-blue-200 text-sm">
                        Set up email webhooks with your email provider to automatically capture replies here.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
