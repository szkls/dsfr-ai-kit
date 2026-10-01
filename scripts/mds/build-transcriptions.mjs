// Transcriptions textuelles des sept vidéos (six tutos et la présentation générale).
import { releve, esc, ind, lien, page, ecrire, lienRetour, brief, conception, docComposant } from './lib.mjs';
export const VIDEOS = [['laConnexion', 'mds-transcription'], ['pageAccueil', 'mds-transcription-page-accueil'], ['vosDroits', 'mds-transcription-vos-droits'], ['votreSimulateur', 'mds-transcription-votre-simulateur'], ['vosRessources', 'mds-transcription-vos-ressources'], ['vosSignalements', 'mds-transcription-vos-signalements'], ['presentationGenerale', 'mds-transcription-presentation-generale']];
for (const [id, ecran] of VIDEOS) {
  const r = releve('tr-' + id); const L = r.lignes;
  const titre = r.h1[0]; const sous = L.find((l) => l.startsWith('## Transcription')).slice(3);
  const sections = []; let dedans = false;
  for (const l of L) {
    if (l.startsWith('## Transcription')) { dedans = true; continue; }
    if (!dedans || l.startsWith('[lien "Haut de page"') || l.startsWith('[bouton')) continue;
    if (l.startsWith('## ')) { sections.push({ titre: l.slice(3), lignes: [] }); continue; }
    if (l.startsWith('#')) continue;
    if (sections.length) sections[sections.length - 1].lignes.push(l.replace(/ \{fr-[^}]*\}$/, ''));
  }
  const qsn = id === 'presentationGenerale';
  const parent = qsn ? { label: 'Qui sommes-nous ?', href: lien('mds-qui-sommes-nous') } : { label: 'Les tutos vidéos', href: lien('mds-tutos-videos') };
  ecrire(ecran, 'index.html', page({ titre: sous, fil: [parent, { label: titre }], main: `        <div class="fr-container fr-mt-4v fr-mb-8v">
            <div class="fr-grid-row fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-lg-8">
                    <h1>${esc(titre)}</h1>
                    <p class="fr-text--lead">${esc(sous)}</p>
                    <nav class="fr-summary" role="navigation" aria-labelledby="fr-summary-title">
                        <h2 class="fr-summary__title" id="fr-summary-title">Sommaire</h2>
                        <ol>
${sections.map((s, i) => `                            <li>
                                <a class="fr-summary__link" id="summary-link-${i + 1}" href="#section-${i + 1}">${esc(s.titre)}</a>
                            </li>`).join('\n')}
                        </ol>
                    </nav>
${sections.map((s, i) => `                    <h2 id="section-${i + 1}" class="fr-mt-6v">${esc(s.titre)}</h2>
                    <ul>
${s.lignes.map((l) => `                        <li>${esc(l)}</li>`).join('\n')}
                    </ul>`).join('\n')}
                    <p class="fr-mt-6v">
                        ${lienRetour(qsn ? 'Revenir à Qui sommes-nous ?' : 'Retour aux tutos vidéos', parent.href)}
                    </p>
                </div>
            </div>
        </div>` }));
  ecrire(ecran, 'brief.md', brief({ titre: `Transcription « ${titre} », traduite en DSFR`, source: r.url, story: "En tant qu'usager qui ne peut pas voir ou entendre la vidéo, je veux lire sa transcription complète, afin d'accéder à la même information.", depart: 'Gabarit « transcription » du prototype (même que mds-transcription).', contenus: `Fil d'Ariane : Accueil > ${parent.label} > ${titre}. Titre (h1) : ${titre}. Chapô : ${sous}. Sommaire puis ${sections.length} sections : ${sections.map((s) => `${s.titre} (${s.lignes.length} lignes)`).join(' ; ')}. Lien de retour.`, etats: 'Un seul état.' }));
  ecrire(ecran, 'conception.md', conception({ titre: `Transcription ${titre}`, intro: 'Gabarit « transcription » commun aux sept vidéos.', composants: docComposant('summary', 'Sommaire', 'sommaire à un niveau, titre h2 « Sommaire », ancres identiques aux titres h2 des sections, largeur 8 colonnes.'), note: '**Retenus** : sections h2 du site, une ligne de transcription par élément de liste. **Écartés** : aucun. **Écarts assumés** : le titre en capitales répété par le site n\'est affiché qu\'une fois. **Questions ouvertes** : aucune.' }));
}
console.log(VIDEOS.length, 'transcriptions écrites');
