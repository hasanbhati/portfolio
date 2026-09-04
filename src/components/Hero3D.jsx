import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowRight, Download, ShieldCheck, Activity, Send } from 'lucide-react';
import { sound } from '../utils/audio';
import { personalInfo } from '../data/portfolioData';

export const Hero3D = ({ onOpenCV }) => {
  const mountRef = useRef(null);
  const [timeWroclaw, setTimeWroclaw] = useState('');
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Real-time Wrocław CET clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Europe/Warsaw',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      setTimeWroclaw(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- THREE.JS SCENE SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Cyberpunk color palette
    const colors = {
      coreOuter: 0x00f2fe, // Cyan
      coreInner: 0xa855f7, // Violet
      nucleus: 0x38bdf8,
      satellites: [
        { color: 0xf43f5e, ringColor: 0xf43f5e, name: "Enterprise CRM" },
        { color: 0x00f2fe, ringColor: 0x00f2fe, name: "SaaS API Engine" },
        { color: 0x10b981, ringColor: 0x10b981, name: "Data Warehouse" },
        { color: 0xa855f7, ringColor: 0xa855f7, name: "AI Guidance Matrix" },
        { color: 0xf59e0b, ringColor: 0xf59e0b, name: "Cloud Gateway" },
      ],
      stars: 0x94a3b8,
      coreOpacity: 0.45,
      starOpacity: 0.35,
    };

    // 1. Central Multi-Color Polyhedral Architecture Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer wireframe icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(3.5, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: colors.coreOuter,
      wireframe: true,
      transparent: true,
      opacity: colors.coreOpacity,
    });
    const icoMesh = new THREE.Mesh(icoGeom, icoMat);
    coreGroup.add(icoMesh);

    // Inner wireframe dodecahedron
    const innerGeom = new THREE.DodecahedronGeometry(2.3, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: colors.coreInner,
      wireframe: true,
      transparent: true,
      opacity: colors.coreOpacity + 0.15,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerMesh);

    // Central glowing nucleus
    const nucleusGeom = new THREE.BufferGeometry();
    const nucleusCount = 350;
    const nucleusPos = new Float32Array(nucleusCount * 3);
    const nucleusColors = new Float32Array(nucleusCount * 3);
    const palette = [
      new THREE.Color(colors.coreOuter),
      new THREE.Color(colors.coreInner),
      new THREE.Color(0x10b981),
      new THREE.Color(0xf59e0b)
    ];

    for (let i = 0; i < nucleusCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.3;
      nucleusPos[i] = r * Math.sin(phi) * Math.cos(theta);
      nucleusPos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      nucleusPos[i + 2] = r * Math.cos(phi);

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      nucleusColors[i] = chosenColor.r;
      nucleusColors[i + 1] = chosenColor.g;
      nucleusColors[i + 2] = chosenColor.b;
    }
    nucleusGeom.setAttribute('position', new THREE.BufferAttribute(nucleusPos, 3));
    nucleusGeom.setAttribute('color', new THREE.BufferAttribute(nucleusColors, 3));
    const nucleusMat = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.09,
      transparent: true,
      opacity: 0.9,
    });
    const nucleusPoints = new THREE.Points(nucleusGeom, nucleusMat);
    coreGroup.add(nucleusPoints);

    // 2. Multi-Colored Orbiting Satellites
    const satelliteConfig = [
      { radius: 6.2, speed: 0.75, angle: 0, inclination: 0.35 },
      { radius: 7.5, speed: -0.55, angle: 2.1, inclination: -0.4 },
      { radius: 5.6, speed: 0.85, angle: 4.2, inclination: 0.55 },
      { radius: 8.2, speed: -0.45, angle: 1.2, inclination: -0.25 },
      { radius: 6.8, speed: 0.65, angle: 3.4, inclination: 0.45 }
    ];

    const satellites = [];

    colors.satellites.forEach((satData, idx) => {
      const config = satelliteConfig[idx];
      
      const satGeom = new THREE.SphereGeometry(0.32, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({ color: satData.color });
      const satMesh = new THREE.Mesh(satGeom, satMat);
      scene.add(satMesh);

      const orbitRingGeom = new THREE.BufferGeometry();
      const ringPts = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const x = Math.cos(theta) * config.radius;
        const z = Math.sin(theta) * config.radius;
        const y = Math.sin(theta) * config.radius * config.inclination;
        ringPts.push(new THREE.Vector3(x, y, z));
      }
      orbitRingGeom.setFromPoints(ringPts);
      const orbitRingMat = new THREE.LineBasicMaterial({
        color: satData.ringColor,
        transparent: true,
        opacity: 0.25,
      });
      const orbitLine = new THREE.Line(orbitRingGeom, orbitRingMat);
      scene.add(orbitLine);

      const conduitGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0)
      ]);
      const conduitMat = new THREE.LineDashedMaterial({
        color: satData.color,
        dashSize: 0.3,
        gapSize: 0.2,
        transparent: true,
        opacity: 0.45,
      });
      const conduit = new THREE.Line(conduitGeom, conduitMat);
      scene.add(conduit);

      satellites.push({
        ...config,
        mesh: satMesh,
        conduit: conduit
      });
    });

    // 3. Shimmering Particle Field
    const starCount = 800;
    const starGeom = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 60;
      starPositions[i + 1] = (Math.random() - 0.5) * 45;
      starPositions[i + 2] = (Math.random() - 0.5) * 40 - 5;
    }
    starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: colors.stars,
      size: 0.055,
      transparent: true,
      opacity: colors.starOpacity,
    });
    const starField = new THREE.Points(starGeom, starMat);
    scene.add(starField);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 1.5;
      targetY = y * 1.2;
      setCoords({ x: Math.round(x * 100), y: Math.round(y * 100) });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Click pulse
    const handleClick = () => {
      sound.playClick();
      icoMesh.scale.set(1.15, 1.15, 1.15);
      setTimeout(() => {
        icoMesh.scale.set(1, 1, 1);
      }, 220);
    };
    container.addEventListener('click', handleClick);

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      camera.position.x = mouseX * 2;
      camera.position.y = mouseY * 2;
      camera.lookAt(0, 0, 0);

      coreGroup.rotation.y = elapsedTime * 0.22;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2;
      innerMesh.rotation.y = -elapsedTime * 0.35;
      innerMesh.rotation.z = Math.cos(elapsedTime * 0.2) * 0.3;

      satellites.forEach((sat) => {
        const currentAngle = sat.angle + elapsedTime * sat.speed * 0.5;
        const x = Math.cos(currentAngle) * sat.radius;
        const z = Math.sin(currentAngle) * sat.radius;
        const y = Math.sin(currentAngle) * sat.radius * sat.inclination;
        sat.mesh.position.set(x, y, z);

        const positions = new Float32Array([0, 0, 0, x, y, z]);
        sat.conduit.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        sat.conduit.computeLineDistances();
      });

      starField.rotation.y = elapsedTime * 0.02;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleClick);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid">
      
      {/* 3D WebGL Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0 pointer-events-auto cursor-grab active:cursor-grabbing opacity-90"
        title="Interactive 3D Multi-Color Architecture Core (Drag or Move Mouse)"
      />

      {/* Subtle Gradient Fog */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#07090e]/30 via-transparent to-[#07090e]"></div>

      {/* Floating HUD Badges (Desktop) */}
      <div className="hidden xl:block absolute top-28 left-8 z-20 pointer-events-none">
        <div className="glass-panel p-4 rounded-2xl font-mono text-[11px] space-y-1.5 border-l-4 border-l-cyan-500 shadow-lg">
          <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 font-extrabold">
            <Activity size={14} className="animate-pulse text-cyan-500" />
            <span>SYSTEM TELEMETRY // LIVE</span>
          </div>
          <div className="text-slate-700 dark:text-slate-300 font-medium">CORE: <span className="font-bold text-slate-950 dark:text-slate-100">SAAS ARCHITECTURE MATRIX</span></div>
          <div className="text-slate-700 dark:text-slate-300 font-medium">WROCŁAW TIME: <span className="text-emerald-700 dark:text-emerald-400 font-bold">{timeWroclaw || '20:30:00'} CET</span></div>
          <div className="text-slate-700 dark:text-slate-300 font-medium">PARALLAX: <span className="text-indigo-700 dark:text-indigo-300 font-bold">X:{coords.x} Y:{coords.y}</span></div>
        </div>
      </div>

      <div className="hidden xl:block absolute top-28 right-8 z-20 pointer-events-none">
        <div className="glass-panel p-4 rounded-2xl font-mono text-[11px] space-y-1.5 border-r-4 border-r-purple-500 text-right shadow-lg">
          <div className="flex items-center justify-end gap-2 text-purple-700 dark:text-purple-300 font-extrabold">
            <span>ENTERPRISE SCOPE</span>
            <ShieldCheck size={14} className="text-purple-500" />
          </div>
          <div className="text-slate-700 dark:text-slate-300 font-medium">ROLE: <span className="font-bold text-slate-950 dark:text-slate-100">SOLUTION ARCHITECT</span></div>
          <div className="text-slate-700 dark:text-slate-300 font-medium">CLIENTS: <span className="text-amber-700 dark:text-amber-400 font-bold">FORTUNE 500 / GLOBAL</span></div>
          <div className="text-slate-700 dark:text-slate-300 font-medium">LOCATION: <span className="text-cyan-700 dark:text-cyan-400 font-bold">WROCŁAW, POLAND</span></div>
        </div>
      </div>

      {/* Main Content Card / Hero Copy */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
        
        {/* Top Ticker Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse"></span>
          <span className="font-bold tracking-wider">ENTERPRISE SAAS ARCHITECTURE & DIGITAL TRANSFORMATION</span>
        </div>

        {/* Primary Name Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase font-sans mb-4">
          <span className="block text-slate-100 drop-shadow-sm">HASAN ATUL BHATI</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-2xl sm:text-3xl md:text-4xl font-mono font-bold tracking-normal mt-2">
            Solution Architect & Project Manager
          </span>
        </h1>

        {/* Value Proposition Description */}
        <p className="max-w-3xl mx-auto text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-9">
          Architecting resilient, scalable enterprise SaaS ecosystems. Specialized in translating high-stakes business requirements into seamless technical blueprints for <span className="text-cyan-400 font-bold">Microsoft, Bosch, Ring, Kärcher</span>, and global leaders from technical discovery to production adoption.
        </p>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs sm:text-sm">
          <a
            href="#architecture"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold tracking-wider uppercase shadow-lg hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explore Blueprints</span>
            <ArrowRight size={16} />
          </a>

          <button
            onClick={() => {
              sound.playClick();
              onOpenCV();
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel border border-slate-300 dark:border-white/15 text-slate-900 dark:text-slate-100 hover:border-cyan-500 active:scale-95 transition-all cursor-pointer shadow-md font-bold"
          >
            <Download size={16} className="text-cyan-600 dark:text-cyan-400" />
            <span>Executive C.V.</span>
          </button>

          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel border border-slate-300 dark:border-white/15 text-slate-900 dark:text-slate-100 hover:border-purple-500 active:scale-95 transition-all cursor-pointer shadow-md font-bold"
          >
            <Send size={16} className="text-purple-600 dark:text-purple-400" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Quick Multi-Color Stats Banner */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {personalInfo.stats.map((stat, idx) => {
            const statColors = [
              'text-cyan-700 dark:text-cyan-400 border-t-cyan-500',
              'text-purple-700 dark:text-purple-400 border-t-purple-500',
              'text-emerald-700 dark:text-emerald-400 border-t-emerald-500',
              'text-amber-700 dark:text-amber-400 border-t-amber-500'
            ];
            return (
              <div 
                key={idx}
                className={`glass-panel p-4 sm:p-5 rounded-2xl border-t-4 ${statColors[idx % statColors.length]} hover:scale-105 transition-all text-center group shadow-md`}
              >
                <div className={`text-2xl sm:text-3xl font-black font-mono ${statColors[idx % statColors.length].split(' ')[0]}`}>
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-950 dark:text-slate-100 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-medium hidden sm:block">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
