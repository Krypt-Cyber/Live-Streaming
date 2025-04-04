import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Video, Users, Shield, ArrowRight } from 'lucide-react';

export function LandingPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="pt-20 pb-24 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Next Generation Video Platform
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-12">
              Experience the future of content creation and streaming with our cutting-edge platform.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                to="/auth"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold flex items-center gap-2 transform hover:scale-105 transition-all"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-full font-semibold flex items-center gap-2">
                Learn More <Play className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-on-scroll opacity-0 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
              <Video className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">HD Streaming</h3>
              <p className="text-gray-400">
                Crystal clear video quality up to 4K resolution with adaptive streaming technology.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
              <Users className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Global Community</h3>
              <p className="text-gray-400">
                Connect with millions of creators and viewers from around the world.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
              <Shield className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Secure Platform</h3>
              <p className="text-gray-400">
                Enterprise-grade security and content protection for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Streaming?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of content creators who are already using our platform to reach their audience.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all"
          >
            Create Your Account <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}