<template>
    <div class="bg-bg-landing">
        <!-- ── 1. Hero ──────────────────────────────────────────────────────── -->
        <section
            class="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center"
        >
            <h1
                class="max-w-4xl text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase leading-tight tracking-wide text-brand-light"
            >
                Explore new ways
                <span class="block text-[clamp(2rem,6vw,4rem)]">
                    of <strong>active recall</strong> studying
                </span>
            </h1>
            <p class="max-w-xl text-body text-brand-muted">
                Join our passionate community that constantly grows with our platform
            </p>
            <UiButton>Get started for free</UiButton>
        </section>

        <!-- ── 2. Why Mnemio ───────────────────────────────────────────────── -->
        <section class="relative overflow-hidden bg-brand-dark px-6 py-20 lg:px-16">
            <div class="relative z-10 mx-auto max-w-screen-lg">
                <h2 class="mb-12 max-w-xl text-h1 font-bold text-neutral-0">
                    Start your learning journey with mnemio.
                </h2>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div
                        v-for="feature in whyFeatures"
                        :key="feature.title"
                        :class="[
                            'rounded-2xl border border-brand-muted p-6',
                            feature.small ? 'flex items-center justify-center' : '',
                        ]"
                    >
                        <template v-if="feature.small">
                            <div
                                class="size-8 rounded border-2 border-b-0 border-r-0 border-brand-muted"
                            />
                        </template>
                        <template v-else>
                            <h3 class="mb-3 text-h3 text-neutral-0">{{ feature.title }}</h3>
                            <p class="text-body text-brand-muted">{{ feature.description }}</p>
                        </template>
                    </div>
                </div>
            </div>

            <!-- Decorative diagonal stripes -->
            <div class="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                <div
                    v-for="(stripe, i) in stripes"
                    :key="i"
                    class="absolute h-[200%] w-16 -rotate-[30deg]"
                    :style="stripe"
                />
            </div>
        </section>

        <!-- ── 3. Smart Features ───────────────────────────────────────────── -->
        <section class="px-6 py-20 lg:px-16">
            <div class="mx-auto max-w-screen-lg">
                <div class="mb-16 text-center">
                    <h2 class="mb-3 text-h1 font-bold text-neutral-0">Smart features</h2>
                    <p class="text-body text-brand-muted">
                        Use wide variety of actually useful features that help you stay consistent
                    </p>
                </div>

                <div class="flex flex-col items-center gap-10 lg:flex-row">
                    <!-- Arc selector -->
                    <div class="relative w-full shrink-0 lg:w-72">
                        <svg
                            viewBox="0 0 380 700"
                            class="w-full max-w-xs overflow-visible lg:max-w-none"
                        >
                            <g v-for="(seg, i) in arcSegments" :key="seg.label">
                                <path
                                    :d="seg.path"
                                    :fill="seg.color"
                                    class="cursor-pointer transition-opacity"
                                    :opacity="activeFeature === i ? 1 : 0.7"
                                    @click="activeFeature = i"
                                />
                                <text
                                    :x="seg.labelX + 10"
                                    :y="seg.labelY + 5"
                                    fill="#CEB2BD"
                                    font-size="16"
                                    font-family="Nunito Sans, sans-serif"
                                    class="cursor-pointer select-none"
                                    @click="activeFeature = i"
                                >
                                    {{ seg.label }}
                                </text>
                            </g>
                        </svg>
                    </div>

                    <!-- Feature card -->
                    <div class="flex flex-1 items-center justify-center">
                        <div
                            class="w-full max-w-md rounded-2xl border border-brand-muted p-10 text-center"
                        >
                            <h3 class="mb-3 text-h2 text-neutral-0">
                                {{ smartFeatures[activeFeature]!.title }}
                            </h3>
                            <p class="text-body text-brand-muted">
                                {{ smartFeatures[activeFeature]!.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 4. App preview ──────────────────────────────────────────────── -->
        <section class="flex min-h-[600px] items-center justify-center bg-brand-dark px-6 py-20">
            <div class="h-[420px] w-[340px] rounded-xl bg-accent-pale/40" />
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'landing' });

// ── Why Mnemio features ──────────────────────────────────────────────────────
const whyFeatures = [
    {
        title: 'Free',
        description:
            'Quizlet puts most of its features behind a paywall. On Mnemio, every study mode is fully unlocked — no trial period, no plan upgrade, no card required.',
    },
    {
        title: 'AI-first',
        description:
            "It's not a bolt-on feature. AI is woven into everything — building decks, generating quizzes, remembering what you struggle with. It's there from the first card to the last.",
    },
    {
        title: 'No ads',
        description:
            'No banners, no promoted content, nothing competing for your attention. Just your decks and a clean place to study.',
    },
    { title: '', description: '', small: true },
];

// ── Decorative stripes ───────────────────────────────────────────────────────
const stripes = [
    { right: '38%', top: '-25%', background: '#8E7692', opacity: '0.25' },
    { right: '28%', top: '-25%', background: '#8E7692', opacity: '0.18' },
    { right: '18%', top: '-25%', background: '#CEB2BD', opacity: '0.15' },
    { right: '8%', top: '-25%', background: '#CEB2BD', opacity: '0.12' },
    { right: '-2%', top: '-25%', background: '#E2D2C8', opacity: '0.10' },
];

// ── Smart features arc ───────────────────────────────────────────────────────
const activeFeature = ref(0);

const smartFeatures = [
    {
        title: 'Active Recall',
        description:
            'Test yourself instead of re-reading. Forces your brain to retrieve information and strengthens memory pathways.',
    },
    {
        title: 'Spaced Repetition',
        description:
            'Cards you struggle with appear more often. Cards you know well fade into the background. Study smarter, not longer.',
    },
    {
        title: 'AI Generation',
        description:
            'Paste any text and let AI build a full deck in seconds — summaries, definitions, Q&A cards, all ready to study.',
    },
    {
        title: 'Progress Tracking',
        description:
            'See how your retention improves over time with clear stats per deck, topic, and session.',
    },
    {
        title: 'Collaborative',
        description:
            "Share decks with classmates or study groups. Learn together and benefit from each other's knowledge.",
    },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function donutPath(cx: number, cy: number, outerR: number, innerR: number, a1: number, a2: number) {
    const o1 = polarToCartesian(cx, cy, outerR, a1);
    const o2 = polarToCartesian(cx, cy, outerR, a2);
    const i1 = polarToCartesian(cx, cy, innerR, a1);
    const i2 = polarToCartesian(cx, cy, innerR, a2);
    const large = a2 - a1 > 180 ? 1 : 0;
    return `M ${o1.x.toFixed(1)} ${o1.y.toFixed(1)} A ${outerR} ${outerR} 0 ${large} 1 ${o2.x.toFixed(1)} ${o2.y.toFixed(1)} L ${i2.x.toFixed(1)} ${i2.y.toFixed(1)} A ${innerR} ${innerR} 0 ${large} 0 ${i1.x.toFixed(1)} ${i1.y.toFixed(1)} Z`;
}

const arcColors = ['#482A41', '#572E54', '#8E7692', '#CEB2BD', '#E2D2C8'];
const cx = 0;
const cy = 350;
const outerR = 340;
const innerR = 220;
const startAngle = -65;
const segAngle = 27;
const gap = 2;

const arcSegments = smartFeatures.map((f, i) => {
    const a1 = startAngle + i * (segAngle + gap);
    const a2 = a1 + segAngle;
    const mid = (a1 + a2) / 2;
    const labelPos = polarToCartesian(cx, cy, outerR + 28, mid);
    return {
        label: f.title,
        path: donutPath(cx, cy, outerR, innerR, a1, a2),
        color: arcColors[i],
        labelX: labelPos.x,
        labelY: labelPos.y,
    };
});
</script>
