# Ritardi dei treni – dataviz Radar QN

Sei dataviz interattive per il pezzo Radar sui ritardi ferroviari e sul tempo perso dai pendolari: la mappa della soddisfazione per regione, la puntualità delle linee Intercity, il calcolatore delle ore perse, la puntualità entro 5 minuti per tipo di treno, l'andamento del ritardo medio dal 2018, le cause dei ritardi dell'Alta velocità. Pagine statiche in D3 v7 con gli assets condivisi della skill radar-dataviz, pubblicate su GitHub Pages dalla root di `main`.

Indice con anteprime e snippet da copiare: https://elena-aquilanti.github.io/treni/

## Dataviz (nell'ordine del testo)

| # | Dataviz | URL | Dati | Altezza iniziale |
|---|---|---|---|---|
| 1 | Treni, solo un passeggero su due è soddisfatto della puntualità | https://elena-aquilanti.github.io/treni/trova-la-tua-regione/ | data/istat_regioni.csv, data/regioni.geojson | 765px |
| 2 | Intercity, nove linee su dieci sotto l'obiettivo | https://elena-aquilanti.github.io/treni/linee-intercity/ | data/intercity_direttrici.csv | 775px |
| 3 | Quante ore perdi in un anno sul treno | https://elena-aquilanti.github.io/treni/ore-perse/ | data/ritardo_medio.csv, data/intercity_direttrici.csv | 472px |
| 4 | L'Alta velocità è la meno puntuale | https://elena-aquilanti.github.io/treni/puntualita-5-minuti/ | data/rfi_segmenti.csv | 472px |
| 5 | Frecce e Intercity, il ritardo medio sale; i regionali restano a 2 minuti | https://elena-aquilanti.github.io/treni/dieci-anni/ | data/ritardo_medio.csv | 571px |
| 6 | Alta velocità, un ritardo su tre dipende dalla rete | https://elena-aquilanti.github.io/treni/cause-ritardi/ | data/cause_ritardi_av.csv | 400px |

## Dati

CSV UTF-8 con separatore `;` e virgola decimale, in `data/`. Ogni valore viene dalla scheda dati approvata del pezzo (Fase 2); fra parentesi le righe di riferimento. I CSV sono generati da `fase4/code/csv_dati.py` (archivio del pezzo).

- `istat_regioni.csv`: utenti del treno di 14 anni e più soddisfatti della puntualità, per regione e Italia, 2017-2025. ISTAT, Aspetti della vita quotidiana (D67-D89; 2024 dall'Annuario statistico italiano 2025, D136; 2025 da IstatData, D137). È un sondaggio; nelle regioni piccole il campione è ridotto.
- `intercity_direttrici.csv`: Intercity del contratto di servizio arrivati entro 30 minuti, per direttrice, 2017-2024. Ministero delle infrastrutture e dei trasporti (D119-D128). Napoli-Puglia solo dal 2023.
- `ritardo_medio.csv`: ritardo medio in arrivo dei treni Trenitalia, regionali e media e lunga percorrenza, 2018-2025, standard B1 (esclusi scioperi ed eventi eccezionali). Trenitalia (D54-D57).
- `cause_ritardi_av.csv`: cause dei ritardi dell'Alta velocità, 2026 fino al 31 luglio, valori arrotondati. Camera dei deputati, risposta 5-05808 (D12-D14). La quota senza causa indicata è calcolata in pagina (C45).
- `rfi_segmenti.csv`: treni arrivati entro 5 minuti, misura «Nessuna esclusione», 2024 e 2025. RFI (D24-D34). «Intercity pagati dallo Stato» è il segmento RFI «OSP LP».
- `regioni.geojson`: confini regionali semplificati (openpolis, su dati ISTAT).

I capolinea delle direttrici Intercity sono ricostruiti dai nomi delle direttrici.

## Struttura

```
index.html            indice con anteprima desktop e mobile e snippet "Copia"
data/                 CSV sorgente e confini
assets/radar.css      stile Radar (skill radar-dataviz, non modificato)
assets/radar.js       funzioni Radar (skill radar-dataviz, non modificato)
assets/embed.js       script per la pagina ospite (versione leggibile)
assets/embed.min.js   script per la pagina ospite (quello degli snippet)
assets/treni.css      componenti di questo pezzo (mappa, riquadro, classifica, calcolatore)
assets/treni.js       funzioni comuni (tooltip, CSV largo, animazione al primo ingresso)
<slug>/index.html     una cartella per dataviz
```

## Snippet per il CMS

Ogni snippet contiene l'iframe e lo script inline che adatta l'altezza e passa il tema del sito. Si copiano dall'indice ({BASE}). Se in un articolo ci sono più dataviz, lo script può restare in ognuna: grazie al controllo `__radarQNv2` lavora una volta sola.
