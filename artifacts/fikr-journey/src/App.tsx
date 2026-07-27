import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BarChart3, Bike, Check, CheckCircle2, ChevronRight, CircleDollarSign, Clock3, Eye, GraduationCap, Heart, House, Landmark, Lightbulb, LockKeyhole, Map, RotateCcw, Ship, Sparkles, Store, Target, Trophy, X } from 'lucide-react';
import younisFullBody from '@assets/ChatGPT_Image_Jul_27,_2026,_10_33_01_PM_1785182296436.png';

type Scene = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const sceneMeta = [
  { id: 1, label: 'Welcome' },
  { id: 2, label: 'Meet Younis' },
  { id: 3, label: 'Island hub' },
  { id: 4, label: 'The choice' },
  { id: 5, label: 'Reward' },
  { id: 6, label: 'Parent view' },
  { id: 7, label: 'The pitch' },
];

const backgrounds: Record<Scene, string> = {
  1: '/official-overhead-island.jpeg',
  2: '/official-younis-street.jpeg',
  3: '/official-overhead-island.jpeg',
  4: '/official-bakery-plaza.jpeg',
  5: '/official-bakery-plaza.jpeg',
  6: '/official-city-street.jpeg',
  7: '/official-city-street.jpeg',
};

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="brand-chip" style={{ color: dark ? '#172a3e' : undefined }} data-testid="text-fikr-logo">
      <span className="brand-dot">F</span>
      <span>FIKR</span>
    </div>
  );
}

function CoinPill({ value }: { value: number }) {
  return (
    <span className="coin-pill" data-testid="text-coin-balance">
      <span className="coin-mark">C</span>{value} coins
    </span>
  );
}

function JumpBar({ scene, onJump }: { scene: Scene; onJump: (id: Scene) => void }) {
  return (
    <div className="topbar">
      <Logo />
      <nav className="jumpbar" aria-label="Presentation scenes" data-testid="nav-scene-jumpbar">
        {sceneMeta.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`jump-button ${scene === item.id ? 'active' : ''}`}
            onClick={() => onJump(item.id as Scene)}
            data-testid={`button-jump-scene-${item.id}`}
          >
            <span>0{item.id}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

function NextButton({ label, onClick, icon = <ArrowRight size={16} /> }: { label: string; onClick: () => void; icon?: ReactNode }) {
  return (
    <button type="button" className="primary-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm" onClick={onClick} data-testid={`button-${label.toLowerCase().replaceAll(' ', '-')}`}>
      {label} {icon}
    </button>
  );
}

function SceneOne({ go }: { go: (scene: Scene) => void }) {
  return (
    <div className="scene-content scene-transition">
      <div className="float-in w-[min(82%,540px)] text-center">
        <img
          src="/fikr-emblem.png"
          alt="FIKR emblem"
          className="mx-auto mb-7 h-28 w-28 rounded-full object-cover shadow-[0_14px_38px_rgba(0,0,0,.32)]"
          data-testid="img-fikr-emblem"
        />
        <div className="eyebrow mb-4" data-testid="text-scene-eyebrow">A little island. A big future.</div>
        <p className="mx-auto mt-5 max-w-[420px] text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-white/85" data-testid="text-tagline">Smart money habits for kids — built one brave choice at a time.</p>
        <div className="mt-9 flex flex-col items-center gap-4">
          <NextButton label="Start journey" onClick={() => go(2)} icon={<ChevronRight size={18} />} />
          <span className="font-mono text-[10px] uppercase tracking-[.2em] text-white/55" data-testid="text-landing-note">A product story by FIKR</span>
        </div>
      </div>
      <div className="absolute bottom-6 left-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-white/60">
        <Map size={13} /> Follow the path. Find your reason.
      </div>
    </div>
  );
}

function SceneTwo({ go }: { go: (scene: Scene) => void }) {
  return (
    <div className="scene-content scene-two-layout scene-transition px-[6%]">
      <div className="younis-stage" data-testid="stage-younis">
        <motion.div
          className="younis-character"
          animate={{
            y: [0, -9, 0],
            scale: [1, 1.012, 1],
            rotateZ: [0, -0.55, 0.55, 0],
            rotateY: [0, 1.8, -1.8, 0],
          }}
          transition={{ duration: 5.2, ease: 'easeInOut', repeat: Infinity }}
          whileHover={{ y: -14, rotateY: 5, rotateZ: -0.7, scale: 1.025 }}
          whileTap={{ scale: 0.995 }}
          style={{ transformPerspective: 900, transformStyle: 'preserve-3d' }}
        >
          <img
            src={younisFullBody}
            alt="Younis standing and smiling"
            className="younis-image"
            data-testid="img-younis-full-body"
          />
        </motion.div>
        <motion.div
          className="younis-shadow"
          animate={{ scaleX: [1, 0.86, 1], scaleY: [1, 0.92, 1], opacity: [0.4, 0.25, 0.4] }}
          transition={{ duration: 5.2, ease: 'easeInOut', repeat: Infinity }}
          aria-hidden="true"
        />
      </div>
      <div className="glass-card float-in scene-two-card max-w-[465px] rounded-3xl p-7 md:p-9" data-testid="card-younis-intro">
        <div className="mb-6 flex items-center justify-between">
          <div className="eyebrow">Chapter 01 / A reason to save</div>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-[10px] text-white/65">DAY 01</span>
        </div>
        <div className="mb-5 flex items-center gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#fff7e9]" data-testid="heading-younis">Meet Younis.</h2>
            <p className="text-sm text-white/60" data-testid="text-younis-age">9 years old · curious by nature</p>
          </div>
        </div>
        <p className="text-[17px] leading-relaxed text-white/86" data-testid="text-younis-goal">He has one bright idea: save <strong className="text-[#f6b75c]">100 coins</strong> for a bicycle and ride it all the way to the lighthouse.</p>
        <div className="mt-7 border-t border-white/12 pt-5">
          <div className="mb-2 flex items-center justify-between text-[11px] text-white/60"><span>Goal progress</span><span className="font-mono text-[#f6b75c]">0 / 100</span></div>
          <div className="progress-track"><div className="progress-fill" style={{ width: '0%' }} /></div>
        </div>
         <div className="mt-7 flex justify-end"><NextButton label="Enter world" onClick={() => go(3)} /></div>
      </div>
    </div>
  );
}

function HubStats({ coins }: { coins: number }) {
  return (
    <div className="absolute left-6 top-[17%] z-10 flex flex-wrap gap-2">
      <CoinPill value={coins} />
      <span className="stat-chip"><Target size={13} className="text-[#ef786e]" /> Level 2</span>
      <span className="stat-chip"><Trophy size={13} className="text-[#f6b75c]" /> Smart saver</span>
    </div>
  );
}

type HubModalId = 'bank' | 'academy' | 'market' | 'port';

function HubModal({
  modal,
  coins,
  onClose,
  onDeposit,
  onCompleteMission,
  onWishlist,
  onNotify,
  deposited,
  missionComplete,
  wishlisted,
  notified,
}: {
  modal: HubModalId;
  coins: number;
  onClose: () => void;
  onDeposit: () => void;
  onCompleteMission: () => void;
  onWishlist: () => void;
  onNotify: () => void;
  deposited: boolean;
  missionComplete: boolean;
  wishlisted: boolean;
  notified: boolean;
}) {
  const content = {
    bank: {
      icon: <Landmark size={21} />,
      eyebrow: 'Bank / Treasury',
      title: "Younis's Savings Account",
      description: 'A safe place for every coin that gets Younis closer to his bicycle.',
    },
    academy: {
      icon: <GraduationCap size={21} />,
      eyebrow: 'Lighthouse / Academy',
      title: 'Financial Missions & Lessons',
      description: 'Learn one smart money idea, then put it into practice around the island.',
    },
    market: {
      icon: <Store size={21} />,
      eyebrow: 'Store / Marketplace',
      title: 'Wishlist & Rewards Store',
      description: 'Choose a goal, track your progress, and make thoughtful purchases when you are ready.',
    },
    port: {
      icon: <Ship size={21} />,
      eyebrow: 'Port / Boats',
      title: 'Investment & Trade',
      description: 'The port is getting ready for bigger money decisions in the next level.',
    },
  }[modal];

  return (
    <motion.div
      className="hub-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      data-testid="hub-modal-backdrop"
    >
      <motion.div
        className="hub-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hub-modal-title"
        initial={{ opacity: 0, y: 18, scale: .96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: .97 }}
        transition={{ type: 'spring', stiffness: 360, damping: 28 }}
        onClick={(event) => event.stopPropagation()}
        data-testid={`modal-hub-${modal}`}
      >
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-start gap-3">
            <div className="hub-modal-icon">{content.icon}</div>
            <div>
              <div className="eyebrow">{content.eyebrow}</div>
              <h2 id="hub-modal-title" className="mt-2 font-display text-2xl font-bold tracking-tight text-[#fff7e9]">{content.title}</h2>
            </div>
          </div>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close popup" data-testid="button-close-hub-modal">
            <X size={18} />
          </button>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-white/70">{content.description}</p>

        {modal === 'bank' && (
          <>
            <div className="hub-account-card mt-6">
              <div>
                <span className="hub-modal-label">Balance</span>
                <strong className="hub-account-value">{coins} coins</strong>
              </div>
              <div className="text-right">
                <span className="hub-modal-label">Daily interest</span>
                <strong className="text-lg text-[#55c4b3]">+1 coin</strong>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="text-xs text-white/55">{deposited ? 'Deposit recorded. Keep building your habit.' : 'Add a little to your future today.'}</span>
              <button type="button" className="primary-btn inline-flex shrink-0 items-center gap-2 px-4 py-2.5 text-xs" onClick={onDeposit} data-testid="button-bank-deposit">
                <CircleDollarSign size={15} /> {deposited ? 'Deposit +10' : 'Deposit'}
              </button>
            </div>
          </>
        )}

        {modal === 'academy' && (
          <div className="hub-feature-card mt-6">
            <div className="flex items-start gap-3">
              <div className="hub-feature-icon bg-[#f6b75c]/15 text-[#f6b75c]"><Lightbulb size={18} /></div>
              <div>
                <div className="text-sm font-extrabold text-white">Needs vs. wants</div>
                <p className="mt-1 text-xs leading-relaxed text-white/60">Complete a quick quiz to practice pausing before a purchase.</p>
              </div>
            </div>
            <button type="button" className="primary-btn mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-xs" onClick={onCompleteMission} disabled={missionComplete} data-testid="button-complete-financial-quiz">
              {missionComplete ? <><CheckCircle2 size={15} /> Quiz complete · +20 coins</> : <>Complete quiz to earn 20 coins <ArrowRight size={15} /></>}
            </button>
          </div>
        )}

        {modal === 'market' && (
          <div className="hub-feature-card mt-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="hub-feature-icon bg-[#55c4b3]/15 text-[#55c4b3]"><Bike size={18} /></div>
                <div>
                  <div className="text-sm font-extrabold text-white">Bicycle</div>
                  <div className="mt-1 text-xs text-white/55">Your big dream</div>
                </div>
              </div>
              <strong className="font-mono text-sm text-[#f6b75c]">100 coins</strong>
            </div>
            <div className="mt-5 flex items-center justify-between text-[11px] text-white/60"><span>Progress</span><span className="font-mono text-[#f6b75c]">0 / 100</span></div>
            <div className="progress-track mt-2"><div className="progress-fill" style={{ width: '0%' }} /></div>
            <button type="button" className="secondary-btn mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-xs" onClick={onWishlist} data-testid="button-add-bicycle-wishlist">
              {wishlisted ? <><Check size={15} /> Added to wishlist</> : <><Bike size={15} /> Add bicycle to wishlist</>}
            </button>
          </div>
        )}

        {modal === 'port' && (
          <div className="hub-feature-card mt-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#55c4b3]/15 text-[#55c4b3]"><Ship size={22} /></div>
            <div className="mt-4 text-sm font-extrabold text-white">Coming Soon in Level 2</div>
            <p className="mt-2 text-xs leading-relaxed text-white/60">Soon Younis will learn how investments and trade can help money grow over time.</p>
            <button type="button" className="secondary-btn mt-5 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs" onClick={onNotify} data-testid="button-notify-port">
              {notified ? <><Check size={15} /> You’re on the list</> : <>Notify me for Level 2 <ArrowRight size={15} /></>}
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function SceneThree({ coins, go, addCoins }: { coins: number; go: (scene: Scene) => void; addCoins: (amount: number) => void }) {
  const [modal, setModal] = useState<HubModalId | null>(null);
  const [deposited, setDeposited] = useState(false);
  const [missionComplete, setMissionComplete] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [notified, setNotified] = useState(false);

  const openModal = (nextModal: HubModalId) => setModal(nextModal);
  const deposit = () => {
    addCoins(10);
    setDeposited(true);
  };
  const completeMission = () => {
    if (missionComplete) return;
    addCoins(20);
    setMissionComplete(true);
  };

  return (
    <div className="scene-content scene-transition">
      <HubStats coins={coins} />
      <div className="absolute bottom-[9%] left-[7%] z-10 max-w-[290px]">
        <button type="button" className="glass-card hub-mission-card rounded-2xl p-4 text-left" onClick={() => openModal('academy')} data-testid="button-open-current-mission">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#f6b75c]"><Sparkles size={13} /> Current mission</div>
          <p className="text-sm leading-relaxed text-white/85">A choice is waiting in the plaza. Small decisions can move big dreams.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#f6b75c]">Open academy <ArrowRight size={12} /></span>
        </button>
      </div>
      <button type="button" className="hotspot hub-hotspot left-[28%] top-[48%] h-12 w-12 rounded-2xl" onClick={() => openModal('market')} data-testid="button-hotspot-marketplace" aria-label="Open store and marketplace">
        <Store size={20} className="mx-auto" />
        <span className="hotspot-label">Wishlist & rewards</span>
      </button>
      <button type="button" className="hotspot hub-hotspot left-[48%] top-[35%] h-14 w-14 rounded-full" onClick={() => openModal('bank')} data-testid="button-hotspot-bank" aria-label="Open bank and treasury">
        <Landmark size={24} className="mx-auto" />
        <span className="hotspot-label">Bank / treasury</span>
      </button>
      <button type="button" className="hotspot hub-hotspot left-[68%] top-[39%] h-14 w-14 rounded-full" onClick={() => openModal('academy')} data-testid="button-hotspot-academy" aria-label="Open lighthouse academy">
        <GraduationCap size={23} className="mx-auto" />
        <span className="hotspot-label">Financial academy</span>
      </button>
      <button type="button" className="hotspot hub-hotspot left-[79%] top-[58%] h-12 w-12 rounded-2xl" onClick={() => openModal('port')} data-testid="button-hotspot-port" aria-label="Open port and boats">
        <Ship size={20} className="mx-auto" />
        <span className="hotspot-label">Investment & trade</span>
      </button>
      <button type="button" className="glass-card absolute right-6 top-[19%] z-10 flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-white transition hover:-translate-y-1 hover:bg-white/15" onClick={() => go(6)} data-testid="button-parent-insight">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ef786e]"><Eye size={17} /></span>
        <span><span className="block text-[10px] font-bold uppercase tracking-[.1em] text-white/55">Parent view</span><span className="block text-xs font-bold">See the progress</span></span>
      </button>
      <div className="absolute bottom-7 right-7 z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-white/70"><House size={13} /> Sunbeam street</div>
      <AnimatePresence>
        {modal && (
          <HubModal
            modal={modal}
            coins={coins}
            onClose={() => setModal(null)}
            onDeposit={deposit}
            onCompleteMission={completeMission}
            onWishlist={() => setWishlisted((current) => !current)}
            onNotify={() => setNotified((current) => !current)}
            deposited={deposited}
            missionComplete={missionComplete}
            wishlisted={wishlisted}
            notified={notified}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function SceneFour({ go }: { go: (scene: Scene) => void }) {
  return (
    <div className="scene-content scene-transition bg-[#101d2c]/65 backdrop-blur-[3px]">
      <div className="glass-card float-in w-[min(90%,600px)] rounded-3xl p-7 text-center md:p-10" data-testid="card-challenge">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ef786e] text-[#fff7e9]"><Lightbulb size={24} /></div>
        <div className="eyebrow mb-4">A moment to think</div>
        <h2 className="font-display text-[clamp(1.7rem,3.7vw,3rem)] font-bold leading-[1.06] tracking-[-.04em] text-[#fff7e9]" data-testid="heading-challenge">Younis wants a 40-coin toy today.</h2>
        <p className="mx-auto mt-4 max-w-[470px] text-sm leading-relaxed text-white/72" data-testid="text-challenge">His target is a 100-coin bicycle. Which choice helps future Younis get there?</p>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          <button type="button" className="secondary-btn group flex min-h-[116px] flex-col items-start justify-between p-4 text-left" onClick={() => go(3)} data-testid="button-choice-buy-toy">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#f6b75c]"><Store size={17} /></span>
            <span><span className="block text-sm font-extrabold">Buy the toy</span><span className="mt-1 block text-xs text-white/55">Fun right now</span></span>
          </button>
          <button type="button" className="primary-btn flex min-h-[116px] flex-col items-start justify-between p-4 text-left" onClick={() => go(5)} data-testid="button-choice-save-bonus">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#172a3e]/15 text-[#172a3e]"><LockKeyhole size={17} /></span>
            <span><span className="block text-sm font-extrabold">Save & earn +10</span><span className="mt-1 block text-xs text-[#172a3e]/65">Build the bicycle fund</span></span>
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[.15em] text-white/45"><Clock3 size={12} /> No wrong turns. Just new information.</div>
      </div>
    </div>
  );
}

function Confetti() {
  const pieces = useMemo(() => Array.from({ length: 24 }, (_, index) => ({
    id: index,
    left: `${10 + ((index * 37) % 80)}%`,
    top: `${8 + ((index * 19) % 18)}%`,
    color: ['#f6b75c', '#ef786e', '#55c4b3', '#fff7e9'][index % 4],
    drift: `${(index % 2 ? 1 : -1) * (30 + (index * 9) % 90)}px`,
    delay: `${(index % 7) * .08}s`,
  })), []);
  return <>{pieces.map((piece) => <span key={piece.id} className="confetti" style={{ left: piece.left, top: piece.top, background: piece.color, animationDelay: piece.delay, ['--drift' as string]: piece.drift }} />)}</>;
}

function SceneFive({ go, coins }: { go: (scene: Scene) => void; coins: number }) {
  return (
    <div className="scene-content scene-transition">
      <Confetti />
      <div className="glass-card float-in w-[min(88%,530px)] rounded-3xl p-8 text-center md:p-10" data-testid="card-reward">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6b75c] text-[#172a3e] shadow-[0_0_0_10px_rgba(246,183,92,.16)]"><Check size={31} strokeWidth={3} /></div>
        <div className="eyebrow mb-3">Mission complete</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-.05em] text-[#fff7e9]" data-testid="heading-reward">That was a smart save.</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/72" data-testid="text-ai-praise">“Younis chose his big dream over a quick want. That is how money confidence grows.”</p>
        <div className="my-7 flex items-center justify-center gap-3">
          <div className="rounded-2xl border border-[#f6b75c]/35 bg-[#f6b75c]/15 px-5 py-3"><div className="font-mono text-3xl font-medium text-[#f6b75c]" data-testid="text-reward-coins">{coins} coins</div><div className="mt-1 text-[10px] uppercase tracking-[.16em] text-white/55">new balance</div></div>
          <div className="text-2xl text-white/35">+</div>
          <div className="rounded-2xl border border-[#55c4b3]/35 bg-[#55c4b3]/15 px-5 py-3"><div className="font-mono text-3xl font-medium text-[#55c4b3]">+10</div><div className="mt-1 text-[10px] uppercase tracking-[.16em] text-white/55">bonus coins</div></div>
        </div>
          <NextButton label="See the parent view" onClick={() => go(6)} icon={<BarChart3 size={16} />} />
      </div>
    </div>
  );
}

function SceneSix({ go }: { go: (scene: Scene) => void }) {
  return (
    <div className="scene-content scene-transition">
      <div className="dashboard-shell float-in text-white" data-testid="card-parent-dashboard">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div><div className="eyebrow mb-3">For the grown-ups</div><h2 className="font-display text-[clamp(2rem,4.3vw,4.25rem)] font-bold leading-none tracking-[-.06em]" data-testid="heading-parent-dashboard">A clearer view of<br /><span className="text-[#f6b75c]">growing confidence.</span></h2></div>
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-xs font-bold text-white/75"><div className="h-2 w-2 rounded-full bg-[#55c4b3]" /> Younis · age 9</div>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <div className="metric-card"><div className="mb-7 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.13em] text-white/48"><span>Savings rate</span><CircleDollarSign size={16} className="text-[#55c4b3]" /></div><div className="font-mono text-4xl text-white" data-testid="metric-savings-rate">85%</div><div className="mt-2 text-xs text-[#55c4b3]">+12% this week</div></div>
          <div className="metric-card"><div className="mb-7 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.13em] text-white/48"><span>Decision speed</span><Clock3 size={16} className="text-[#f6b75c]" /></div><div className="font-mono text-4xl text-white" data-testid="metric-decision-speed">1.8<span className="text-base text-white/50"> sec</span></div><div className="mt-2 text-xs text-[#f6b75c]">Thoughtful, not rushed</div></div>
          <div className="metric-card"><div className="mb-7 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.13em] text-white/48"><span>Streak</span><Trophy size={16} className="text-[#ef786e]" /></div><div className="font-mono text-4xl text-white" data-testid="metric-streak">6<span className="text-base text-white/50"> days</span></div><div className="mt-2 text-xs text-[#ef786e]">New personal best</div></div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-2xl border border-[#f6b75c]/25 bg-[#f6b75c]/10 p-5"><div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.13em] text-[#f6b75c]"><Sparkles size={14} /> AI parent insight</div><p className="max-w-[570px] text-sm leading-relaxed text-white/78" data-testid="text-parent-insight">Younis is pausing before purchases and connecting today’s choices to a future goal. Try asking, “What would your bicycle make possible?”</p></div>
          <div className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/5 p-5"><div><div className="text-[10px] font-bold uppercase tracking-[.13em] text-white/48">Next milestone</div><div className="mt-2 text-sm font-bold">Bicycle fund · 60 / 100</div></div><Bike size={32} className="text-[#55c4b3]" /></div>
        </div>
        <div className="mt-7 flex justify-end"><NextButton label="Continue to the big idea" onClick={() => go(7)} icon={<ArrowRight size={16} />} /></div>
      </div>
    </div>
  );
}

function SceneSeven({ reset }: { reset: () => void }) {
  return (
    <div className="scene-content scene-transition">
      <div className="float-in w-[min(88%,770px)] text-center">
        <div className="eyebrow mb-5">FIKR / Financial confidence, early</div>
        <h2 className="display-title text-[clamp(2.7rem,7vw,6.8rem)]" data-testid="heading-closing-pitch">Small choices.<br /><span className="text-[#f6b75c]">Brighter futures.</span></h2>
        <p className="mx-auto mt-6 max-w-[520px] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-white/72" data-testid="text-closing-pitch">FIKR turns everyday money moments into confidence that stays with a child — and reassurance that stays with a parent.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button type="button" className="primary-btn inline-flex items-center gap-2 px-6 py-3.5 text-sm" onClick={reset} data-testid="button-reset-journey"><RotateCcw size={16} /> Reset journey</button>
          <button type="button" className="secondary-btn inline-flex items-center gap-2 px-6 py-3.5 text-sm" onClick={() => window.open('mailto:hello@fikr.example', '_self')} data-testid="button-talk-to-fikr"><Heart size={16} /> Talk to FIKR</button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-6 font-mono text-[10px] uppercase tracking-[.17em] text-white/45"><span>Learn</span><span className="h-1 w-1 rounded-full bg-[#f6b75c]" /><span>Choose</span><span className="h-1 w-1 rounded-full bg-[#f6b75c]" /><span>Grow</span></div>
      </div>
    </div>
  );
}

function App() {
  const [scene, setScene] = useState<Scene>(1);
  const [coins, setCoins] = useState(50);

  const go = (next: Scene) => {
    if (next === 5) setCoins(60);
    setScene(next);
  };
  const addCoins = (amount: number) => setCoins((current) => current + amount);
  const reset = () => {
    setCoins(50);
    setScene(1);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setScene((current) => Math.min(7, current + 1) as Scene);
      if (event.key === 'ArrowLeft') setScene((current) => Math.max(1, current - 1) as Scene);
      if (event.key === 'Escape') reset();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="app-shell">
      <div className="cinema-frame" data-testid="fikr-cinema-frame">
        <img className="scene-image" src={backgrounds[scene]} alt="" data-testid={`img-scene-background-${scene}`} />
        <div className="scene-vignette" />
         <JumpBar scene={scene} onJump={go} />
        {scene === 1 && <SceneOne go={go} />}
        {scene === 2 && <SceneTwo go={go} />}
         {scene === 3 && <SceneThree coins={coins} go={go} addCoins={addCoins} />}
        {scene === 4 && <SceneFour go={go} />}
         {scene === 5 && <SceneFive coins={coins} go={go} />}
        {scene === 6 && <SceneSix go={go} />}
        {scene === 7 && <SceneSeven reset={reset} />}
        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5" aria-label="Scene progress">
          {sceneMeta.map((item) => <span key={item.id} className={`h-1 rounded-full transition-all ${scene === item.id ? 'w-7 bg-[#f6b75c]' : 'w-1.5 bg-white/45'}`} data-testid={`progress-scene-${item.id}`} />)}
        </div>
      </div>
    </main>
  );
}

export default App;