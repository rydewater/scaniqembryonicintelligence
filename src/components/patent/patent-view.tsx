import type { ReactNode } from "react";
import { Download, Printer } from "lucide-react";
import { AppChrome } from "@/components/app-chrome";
import { Button } from "@/components/ui/button";

const TOC = [
  { id: "notice", label: "Notice" },
  { id: "title", label: "Title" },
  { id: "field", label: "Field" },
  { id: "background", label: "Background" },
  { id: "summary", label: "Summary" },
  { id: "drawings", label: "Drawings" },
  { id: "detailed", label: "Detailed description" },
  { id: "claims", label: "Claims" },
  { id: "abstract", label: "Abstract" },
];

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-border py-10 last:border-b-0">
      <p className="text-[11px] font-medium tracking-[0.2em] text-primary uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl text-fg italic">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export function PatentView() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <AppChrome view="patent" />
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <aside className="no-print sticky top-6 hidden h-fit w-52 shrink-0 lg:block">
          <p className="mb-3 text-[11px] tracking-[0.18em] text-muted uppercase">Contents</p>
          <nav className="flex flex-col gap-1">
            {TOC.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="rounded-sm px-2 py-2 text-sm text-muted hover:bg-panel hover:text-fg">
                {t.label}
              </a>
            ))}
          </nav>
        </aside>
        <article className="min-w-0 flex-1">
          <div className="no-print mb-8 flex flex-wrap items-center gap-3 rounded-lg bg-panel p-4 shadow-[var(--shadow-border)]">
            <div className="min-w-0 flex-1">
              <p className="text-xs tracking-[0.16em] text-gold uppercase">First provisional draft</p>
              <p className="text-sm text-muted">For patent counsel. Not filed. Not legal advice.</p>
            </div>
            <Button variant="outline" asChild>
              <a href="/patent/ScanIQ-Provisional-Patent-Draft.txt" download>
                <Download className="size-4" />
                Download
              </a>
            </Button>
            <Button variant="ghost" onClick={() => window.print()}>
              <Printer className="size-4" />
              Print
            </Button>
          </div>

          <Section id="notice" kicker="Status" title="Attorney-review draft">
            <p>
              This document is a first provisional patent specification prepared for ScanIQ LLC. It is intended to
              capture invention groups, embodiments, and a broad-to-narrow claim tree so counsel can file a U.S.
              provisional application. It is not a filed application, an issued patent, or a freedom-to-operate
              opinion. MagIQ / ASW language is excluded except as internal inspiration for differential magnetometry.
            </p>
            <p>
              Proposed inventor: John Antaramian. Proposed assignee: ScanIQ LLC. Filing date to be inserted by counsel.
              Priority: September 2026 concept documents.
            </p>
          </Section>

          <Section
            id="title"
            kicker="Title of the invention"
            title="Additive manufacturing of topological chiral metamaterial resonators for near-field terahertz spectroscopy and quantum-assisted developmental phenotyping"
          >
            <p>
              Cross-reference: this draft is intended as a U.S. provisional application. Related ScanIQ research
              summaries dated September 8, 2026 and September 2026 partnership decks are incorporated as internal
              disclosure for counsel, not as published prior art.
            </p>
          </Section>

          <Section id="field" kicker="Field" title="Technical field">
            <p>
              The disclosure relates to additive micromanufacturing, topological metamaterials, and non-invasive
              biomedical metrology. More specifically, it relates to systems and methods for manufacturing functionally
              graded, chiral silk-nanofiber topological resonators using dynamic field-assisted extrusion, and using
              those resonators in opposed near-field terahertz polarimetry, broadband impedance spectroscopy, and
              nitrogen-vacancy diamond quantum magnetometry to assess biological developmental state without biopsy.
            </p>
          </Section>

          <Section id="background" kicker="Background" title="The unmet measurement problem">
            <p>
              In livestock embryo production — particularly bovine embryo transfer and equine ICSI or flushing
              programs — quality is still inferred mainly from exterior morphology and cleavage timing. Those visible
              markers are late. A recipient cow or mare is occupied whether the transferred embryo is alive or already
              stalled. Biopsy-based genetic tests nick the embryo and are not run continuously. Spent-media assays are
              episodic and dilute.
            </p>
            <p>
              Electrical impedance spectroscopy has already shown that developmental state can move a measurable
              spectrum. Uzzaman, Rahman, and Ohta (IEEE EMBC 2024) reported a decrease in real differential impedance
              near 1.49 MHz correlated with increasing bovine embryonic cell mass. Medaka studies mapped changing
              impedance across developmental stages and distinguished living from dead embryos. Frequency-resolved
              oocyte phenotyping up to 30 MHz has distinguished healthy from freeze-thaw-injured porcine oocytes.
            </p>
            <p>
              Those measurements still use conventional electrodes. Planar electrodes suffer polarization impedance and
              limited spatial selectivity. Terahertz radiation can probe macromolecular vibrations, but liquid water
              absorbs strongly (approximately 150–300 cm⁻¹ at 1 THz), so bulk transmission through culture droplets
              extinguishes the signal. There is a need for a passive, continuous, non-invasive instrument that extracts
              a developmental electromechanical fingerprint without assuming a single “magic frequency,” and without
              pumping energy through bulk aqueous media.
            </p>
            <p>
              Prior art exists separately for NV microfluidic magnetometers, resonant dielectric biosensors, magnetic
              field-assisted printing, silk fibroin THz metamaterials, Möbius resonators, and embryo-viability
              biomarkers. The present invention is the closed-loop combination: field-native co-design of geometry and
              chirality; manufactured topological resonators; differential multimodal sensing; temporal mapping to
              developmental trajectories; and measured-response redesign of the material field.
            </p>
          </Section>

          <Section id="summary" kicker="Summary" title="What is actually claimed as a system">
            <p>
              A bio-resonance metrology platform integrating (i) continuous signed-distance-field (SDF) and spatial
              material-tensor design, (ii) field-aligned biomimetic nanocomposites, (iii) topological Möbius or other
              non-orientable resonators, (iv) evanescent near-field RF/THz polarimetry and broadband impedance, (v)
              optional differential NV-diamond magnetometry with environmental cancellation, and (vi) a temporal
              multimodal model that outputs stage, trajectory deviation, and competence probability.
            </p>
            <p>
              In one embodiment, a micro-aperture printhead is surrounded by a dynamically rotating electromagnetic
              “roto-field” that aligns anisotropic silk fibroin and aramid nanofibers in a photopolymerizable resin,
              locking orientation by in-situ cure. The printed Möbius geometry imposes a geometric Berry phase of π,
              lifting CW/CCW degeneracy into fractional half-integer, chirality-selective modes.
            </p>
            <p>
              In another embodiment, opposed resonators sit above and below a microfluidic incubation channel. The
              evanescent tail interrogates the specimen boundary rather than transmitting through bulk water. Dual NV
              nodes form a synthetic gradiometer. Schumann resonances (~7.83 Hz fundamental) and laboratory EMI are
              logged as environmental features and cancelled as common-mode, not treated as the embryo’s biological
              clock. An AI discriminator maps the multimodal time series against separate meiotic and mitotic atlases.
            </p>
            <p>
              Optimization objective is information about developmental state per unit electromagnetic exposure, not
              maximum Q alone. Intentional stimulation or growth-enhancement is a later, separately hypothesized
              research branch and is not required by the sensing claims.
            </p>
          </Section>

          <Section id="drawings" kicker="Figures" title="Brief description of the drawings">
            <div className="grid gap-6 sm:grid-cols-2">
              <figure>
                <img src="/images/printhead.jpg" alt="FIG. 1 field-assisted aperture printhead" className="w-full rounded-md object-cover" />
                <figcaption className="mt-2 text-xs text-muted">
                  FIG. 1 — Field-assisted additive manufacturing apparatus: micro-aperture printhead, roto-field stator,
                  coaxial photopolymerization.
                </figcaption>
              </figure>
              <figure>
                <img src="/images/mobius.jpg" alt="FIG. 2 Möbius resonator" className="w-full rounded-md object-cover" />
                <figcaption className="mt-2 text-xs text-muted">
                  FIG. 2 — Manufactured Möbius strip resonator with programmed nanofiber director and chiral domains.
                </figcaption>
              </figure>
              <figure>
                <img src="/images/cassette.jpg" alt="FIG. 3 opposed sensing cassette" className="w-full rounded-md object-cover" />
                <figcaption className="mt-2 text-xs text-muted">
                  FIG. 3 — Opposed-resonator microfluidic cassette, evanescent interaction zone, and dual NV nodes.
                </figcaption>
              </figure>
              <figure>
                <img src="/images/trajectory.jpg" alt="FIG. 4 developmental trajectory" className="w-full rounded-md object-cover" />
                <figcaption className="mt-2 text-xs text-muted">
                  FIG. 4 — Multimodal developmental trajectory: healthy manifold versus early arrest deviation.
                </figcaption>
              </figure>
            </div>
            <p>
              Additional figures for counsel: FIG. 5 THz pulse-modulation and Stokes polarimetry chain; FIG. 6
              adaptive Schumann/EMI cancellation; FIG. 7 MCAT-Net architecture; FIG. 8 1.49 MHz ΔRe(Z) plots.
            </p>
          </Section>

          <Section id="detailed" kicker="Embodiments" title="Detailed description of preferred embodiments">
            <h3 className="font-sans text-base font-semibold text-fg">A. Field-native design kernel</h3>
            <p>
              A processor maintains an implicit signed distance function f(x) defining the boundary of a topological
              resonator, co-registered with a material tensor field M(x) = {"{"}φ_f, v_fiber, χ, ε_r, σ_e{"}"} encoding
              fiber volume fraction, director orientation, handedness, permittivity, and conductivity. Gradient-informed
              slicing translates those fields into toolpaths, coil currents, and cure dose without an intermediate
              polygon mesh. Manufacturing metrology (optical, SEM, VNA) can be written back into the field so as-built
              geometry becomes part of the next iteration.
            </p>
            <h3 className="font-sans text-base font-semibold text-fg">B. Aperture printhead and roto-field</h3>
            <p>
              Feedstock comprises methacrylated silk fibroin and functionalized aramid nanofibers with a photoinitiator.
              Kotov fused-silk work reports flexural strength on the order of 510 MPa and THz optical activity; the
              present process is not limited to that chemistry. A vertical micro-aperture (about 50–250 μm) is
              surrounded by a multi-pole stator generating B_roto(t) and optionally E_roto(t). Fiber alignment torque
              τ = p × E + m × B programs v_fiber(x). Coaxial 365/405 nm illumination crosslinks the matrix within
              milliseconds, locking chirality before relaxation. Prior art covers magnetic alignment during printing;
              novelty is SDF/voxel-driven, voxel-wise chirality and resonant-response targeting.
            </p>
            <h3 className="font-sans text-base font-semibold text-fg">C. Topological resonator</h3>
            <p>
              A ribbon of circumference L, width w, thickness t is given an odd multiple of 180° twist and joined,
              yielding a single-sided non-orientable manifold. Polarization must travel 2L to close, accumulating
              geometric phase γ = π and supporting fractional modes f ∝ (m + 1/2). Opposed copies may be placed above
              and below a 100–170 μm culture channel matching mammalian oocyte/blastocyst scale.
            </p>
            <h3 className="font-sans text-base font-semibold text-fg">D. Evanescent interrogation</h3>
            <p>
              A photoconductive or other THz/RF source (illustratively 0.1–3.0 THz, and separately kHz–tens of MHz for
              EIS) couples into the resonator. Polarization is modulated between LCP and RCP. The specimen perturbs
              complex eigenfrequency ω̃ = ω₀ + Δω + iΔΓ. Detection records Δf_r, ΔQ, S11/S21, phase, and Stokes vector
              [S0, S1, S2, S3], extracting THz circular dichroism ΔS3. Q is defined for the combined resonator-sample
              system, Q = f₀/Δf, not as “Q of the mitochondrion.”
            </p>
            <h3 className="font-sans text-base font-semibold text-fg">E. Quantum reference channel</h3>
            <p>
              Optional NV⁻ ensembles under the well (sensing node) and offset by a gradiometer baseline (reference
              node, e.g. ~30 mm) perform ODMR vector magnetometry. An adaptive filter subtracts correlated ambient
              field, including geomagnetic variation, 50/60 Hz, and Schumann modes logged as environmental features.
              Range is near-field; the disclosure does not claim long-standoff organelle magnetometry.
            </p>
            <h3 className="font-sans text-base font-semibold text-fg">F. Developmental digital phenotype</h3>
            <p>
              Synchronized streams — Z(f,t), f_r, Q, φ, THz/CD, B_bio, images, T/pH/EMI — enter a temporal multimodal
              model (illustratively a cross-attention transformer). Separate atlases are maintained for gamete meiosis
              and embryonic mitosis. Outputs include stage probability, Mahalanobis trajectory deviation, arrest risk,
              and uncertainty. Labels may include blastocyst formation, viability, and, under proper oversight,
              transfer-related endpoints in cattle and horses. Discovery models are walled off from production claims.
            </p>
            <h3 className="font-sans text-base font-semibold text-fg">G. Closed-loop redesign</h3>
            <p>
              Measured transfer function error updates M(x) and the print recipe until a target electromagnetic
              response or information-per-exposure objective is met. That loop is an independent claim family even
              without a biological specimen.
            </p>
            <h3 className="font-sans text-base font-semibold text-fg">H. Responsible-development boundary</h3>
            <p>
              Immediate embodiments are sensing and characterization of livestock embryos, beginning with bovine
              production and then equine. The specification does not assume electromagnetic or acoustic exposure
              improves embryo viability. Controlled perturbation is postponed until passive sensing and exposure safety
              are characterized.
            </p>
          </Section>

          <Section id="claims" kicker="What is claimed" title="Claim tree">
            <ol className="list-decimal space-y-4 pl-5 text-fg marker:text-gold">
              <li>
                A resonant biofabrication and developmental sensing system, comprising: an additive manufacturing
                apparatus comprising an extrusion aperture, an electromagnetic orientation assembly configured to apply
                a dynamically rotating vector field within an extrusion print zone, and an irradiation source configured
                to initiate in-situ photopolymerization of an extrudable composite feedstock containing anisotropic
                microstructures to fabricate a solid topological resonator; a sensing fixture comprising at least one
                manufactured topological resonator positioned adjacent to a biological incubation chamber; an
                electromagnetic source operably coupled to pump modulated high-frequency signals through the topological
                resonator to establish an evanescent near-field within the biological incubation chamber; and a
                detection subsystem configured to measure perturbations in a quality factor (Q-factor), an eigenmode
                resonance frequency, and a polarization state of the topological resonator induced by a biological
                specimen positioned within the biological incubation chamber.
              </li>
              <li>
                The system of claim 1, wherein the topological resonator comprises a Möbius strip geometry having a
                single-sided non-orientable surface and an accumulated geometric Pancharatnam-Berry phase of π,
                supporting fractional half-integer electromagnetic modes.
              </li>
              <li>
                The system of claim 1, wherein the extrudable composite feedstock comprises regenerated silk fibroin,
                aramid nanofibers (ANFs), and a photoinitiator, wherein the cured topological resonator exhibits a
                flexural strength of at least 450 MPa.
              </li>
              <li>
                The system of claim 1, wherein the electromagnetic orientation assembly comprises a multi-pole stator
                array that generates a rotating magnetic vector field at a frequency between 0.1 Hz and 100 Hz,
                orienting the anisotropic microstructures along a three-dimensional vector field defined by an implicit
                signed distance function.
              </li>
              <li>
                The system of claim 1, wherein the electromagnetic source comprises a pulsed terahertz emitter operating
                within a frequency range of 0.1 THz to 3.0 THz, and wherein the detection subsystem comprises a
                polarimetric electro-optic sampling detector configured to measure time-resolved Stokes parameters [S0,
                S1, S2, S3].
              </li>
              <li>
                The system of claim 1, further comprising a quantum magnetometry subsystem, the subsystem comprising: a
                primary diamond substrate comprising an ensemble of nitrogen-vacancy (NV) color centers positioned
                adjacent to the biological incubation chamber; a secondary reference diamond substrate comprising an
                ensemble of NV color centers spaced apart from the biological incubation chamber; and a differential
                processing unit configured to perform optically detected magnetic resonance (ODMR) vector magnetometry
                and execute adaptive common-mode cancellation of environmental baseline electromagnetic fields.
              </li>
              <li>
                The system of claim 6, wherein the environmental baseline electromagnetic fields canceled by the
                differential processing unit comprise Earth-ionosphere Schumann resonances having a fundamental
                frequency of approximately 7.83 Hz.
              </li>
              <li>
                The system of claim 1, further comprising an artificial intelligence discriminator stored in a
                non-transitory memory and executed by a processor, configured to: ingest time-series streams of the
                measured Q-factor, resonance frequency, polarization state, wideband electrical impedance spectra, and
                optical time-lapse morphokinetics from the biological specimen; and map the time-series streams against
                a calibrated developmental trajectory to output a predictive score of biological viability.
              </li>
              <li>
                The system of claim 8, wherein the wideband electrical impedance spectra include differential real
                impedance measurements sampled across a frequency band encompassing 1.49 MHz.
              </li>
              <li>
                A method for non-invasively assessing biological developmental viability, comprising: positioning an
                embryonic specimen within a microfluidic sensing well positioned between an opposed pair of 3D-printed
                topological Möbius resonators; coupling polarization-modulated terahertz pulses into the opposed
                topological Möbius resonators to generate an evanescent electromagnetic field that interacts with the
                embryonic specimen; measuring shifts in a complex resonance frequency (Δf_r), a quality factor (ΔQ),
                and a terahertz circular dichroism (ΔS3) parameter across a developmental monitoring period; measuring
                localized vector magnetic field transients using a differential nitrogen-vacancy diamond quantum
                magnetometer, canceling ambient Schumann resonance baselines; and processing the measured resonance
                shifts, quality factor, circular dichroism, vector magnetic field transients, and synchronized optical
                time-lapse frames through a temporal transformer model to calculate a developmental trajectory deviation
                metric.
              </li>
              <li>
                The method of claim 10, wherein the opposed pair of topological Möbius resonators are
                additive-manufactured from a synthetic silk fibroin and aramid nanofiber composite whose internal
                molecular director orientation is steered via a rotating electromagnetic field during micro-extrusion.
              </li>
              <li>
                The method of claim 10, wherein the temporal transformer model maintains separate, decoupled latent
                training representations for gamete meiotic maturation and embryonic mitotic cleavage.
              </li>
              <li>
                A non-transitory computer-readable storage medium storing instructions that, when executed by one or
                more processors, cause the one or more processors to: compile an implicit signed distance field (SDF)
                and a spatial material orientation field representing a topological Möbius resonator; translate the SDF
                and spatial material orientation field into synchronized machine toolpaths for an additive manufacturing
                apparatus, controlling vertical printhead translation, in-situ photopolymerization dosage, and dynamic
                multi-axis coil currents in an electromagnetic orientation head; ingest multi-modal sensory data
                comprising terahertz circular dichroism, resonator Q-factor, wideband electrical impedance, and
                nitrogen-vacancy quantum magnetometry signals from a biological specimen positioned adjacent to the
                topological Möbius resonator; adaptively filter common-mode environmental noise from the quantum
                magnetometry signals utilizing an Earth-ionosphere Schumann resonance baseline model; and compute an
                embryonic developmental stage classification and a viability prediction score utilizing a multi-modal
                cross-attention neural network.
              </li>
            </ol>
            <p className="pt-2">
              Counsel should add dependent claims covering: information-per-exposure optimization; closed-loop
              redesign without a biological sample; Helmholtz acoustic as an orthogonal mechanical channel; bovine
              and equine production-lab fixtures; and other livestock or food-embryo uses of the same resonator kernel.
            </p>
          </Section>

          <Section id="abstract" kicker="Abstract" title="Abstract">
            <p>
              Systems and methods manufacture a topologically chiral resonator from a field-native geometry and
              spatial material orientation, using a roto-field aperture printhead and in-situ polymerization of a
              hierarchical silk or polymer composite. The resonator is positioned adjacent to a biological specimen and
              interrogated by evanescent RF/THz and impedance measurements, optionally with differential NV-diamond
              magnetometry and environmental cancellation. A temporal multimodal model maps spectral perturbations to a
              developmental-state trajectory and viability estimate. Measured electromagnetic response can update the
              material field for subsequent fabrication.
            </p>
          </Section>
        </article>
      </div>
    </div>
  );
}
