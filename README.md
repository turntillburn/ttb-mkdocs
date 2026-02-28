# TURNTILLBURN Website – Lokale Entwicklung mit MkDocs

Dieses Repository enthält die TURNTILLBURN Website.

Die Inhalte werden mit **MkDocs** erstellt.  
Die Website basiert auf **Markdown-Dateien**, die automatisch in eine fertige Website umgewandelt werden.

Dieses Dokument ist bewusst sehr detailliert geschrieben.

Es richtet sich an:

- Linux-User
- Windows-User

Ziel dieses Dokuments:

Jede Person soll in der Lage sein,

1. Inhalte zu ändern  
2. Einen Commit zu machen  
3. Die Website zu bauen (`mkdocs build`)  
4. Die fertige Website auf den Server zu kopieren  

Ohne technisches Vorwissen.

---

# ⚡ QUICK START (Kurzversion)

Wenn bereits alles installiert ist:

## Ubuntu

```bash
cd ttb-mkdocs
source .venv/bin/activate
mkdocs serve
```

## Windows (PowerShell)

```powershell
cd ttb-mkdocs
.\.venv\Scripts\Activate.ps1
mkdocs serve
```

Im Browser öffnen:

```
http://127.0.0.1:8000/
```

Website bauen:

```bash
mkdocs build
```

Fertige Website liegt im Ordner:

```
ttb-mkdocs/site/
```

Nur diesen Ordner auf den Server kopieren.

---

# 1) Grundprinzip verstehen

Die Website funktioniert so:

- Texte liegen im Ordner `docs/`
- MkDocs erzeugt daraus eine Website
- Die fertige Website liegt nach dem Build im Ordner `site/`
- Nur der Inhalt von `site/` wird auf den Server kopiert

Wichtig:

- Niemals Dateien direkt im Ordner `site/` ändern
- Immer nur im Ordner `docs/` arbeiten

---

# 2) EINMALIGE Installation

Diese Installation muss nur einmal pro Computer gemacht werden.

---

# 3) Installation unter Ubuntu

## 3.1 Repository herunterladen

```bash
git clone https://github.com/turntillburn/ttb-mkdocs.git
cd ttb-mkdocs
```

## 3.2 Virtuelle Umgebung erstellen

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Wenn links im Terminal `(.venv)` steht, ist alles korrekt.

## 3.3 Abhängigkeiten installieren

```bash
pip install -r requirements.txt
```

## 3.4 Test: Lokalen Server starten

```bash
mkdocs serve
```

Browser öffnen:

```
http://127.0.0.1:8000/
```

Mit `Ctrl + C` beenden.

Wenn das funktioniert → Installation abgeschlossen.

---

# 4) Installation unter Windows

Diese Schritte nur einmal durchführen.

## 4.1 Git installieren

„Git for Windows“ installieren.

## 4.2 Python installieren

Python 3 installieren.

Wichtig beim Installieren:

✔ „Add Python to PATH“ aktivieren

Test in PowerShell:

```powershell
python --version
pip --version
```

## 4.3 Repository herunterladen

```powershell
git clone https://github.com/turntillburn/ttb-mkdocs.git
cd ttb-mkdocs
```

## 4.4 Virtuelle Umgebung erstellen

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

Falls Windows blockiert:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Danach erneut aktivieren.

## 4.5 Abhängigkeiten installieren

```powershell
pip install -r requirements.txt
```

## 4.6 Test starten

```powershell
mkdocs serve
```

Browser öffnen:

```
http://127.0.0.1:8000/
```

---

# 5) Inhalte ändern

## 5.1 Eine bestehende Seite bearbeiten

1. Datei im Ordner `docs/` öffnen  
2. Text ändern  
3. Speichern  
4. Browser aktualisieren  

Fertig.

---

# 6) Änderungen speichern (Commit machen)

## 6.1 Status prüfen

```bash
git status
```

Geänderte Dateien erscheinen rot.

## 6.2 Änderungen hinzufügen

```bash
git add -A
```

## 6.3 Commit erstellen

```bash
git commit -m "Kurze Beschreibung der Änderung"
```

Beispiel:

```bash
git commit -m "Text in Medizin-Sektion angepasst"
```

## 6.4 Änderungen zu GitHub hochladen

```bash
git push
```

Jetzt sind die Änderungen online gespeichert.

---

# 7) Website bauen (Build)

Bevor die Website auf den Server kopiert wird:

```bash
mkdocs build
```

Danach befindet sich die fertige Website im Ordner:

```
site/
```

Dieser Ordner enthält:

- index.html
- alle Unterseiten
- CSS
- JavaScript
- Bilder

---

# 8) Website auf den Server kopieren

Wichtig:

Nur den Inhalt des Ordners `site/` hochladen.

Nicht hochladen:

- docs/
- .venv/
- mkdocs.yml

Typischer Ablauf:

1. Mit FTP-Programm (z.B. FileZilla) verbinden  
2. Inhalt von `site/` auswählen  
3. Auf den Webserver hochladen  
4. Vorhandene Dateien überschreiben 

oder

scp -r site/ <user>@<host>:/path/to/htdocs/www.turntillburn.ch/

dann die PDF kopieren

ssh <user>@<host>
cp Buch-Vertical-secrects-PDF/*.pdf www.turntillburn.ch/verticalsecrets/assets/pdf/.

---

# 9) Nach längerer Pause wieder starten

```bash
cd ttb-mkdocs
```

Ubuntu:

```bash
source .venv/bin/activate
```

Windows:

```powershell
.\.venv\Scripts\Activate.ps1
```

Dann:

```bash
pip install -r requirements.txt
mkdocs serve
```

---

# 10) Wichtige Regeln

- Niemals direkt im Ordner `site/` arbeiten  
- Immer im Ordner `docs/` arbeiten  
- Vor dem Hochladen immer `mkdocs build` ausführen  
- Nach Änderungen immer committen  

---

# 11) Notfallhilfe

Problem: mkdocs wird nicht gefunden  
→ Virtuelle Umgebung aktivieren

Problem: Fehlermeldung bei Plugin  
→ `pip install -r requirements.txt` erneut ausführen

Problem: Port 8000 blockiert  

```bash
mkdocs serve -a 127.0.0.1:8001
```