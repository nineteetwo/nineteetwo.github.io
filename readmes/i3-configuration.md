## i3 WM Configuration
<div align="center">
  <b>
    <a href="README.md">English</a> |
    <a href="README-TR.md">Türkçe</a> |
    <a href="README-JP.md">日本語</a> |
    <a href="README-DE.md">Deutsch</a>
  </b> 
</div><br>
<div align="center">
  <img src="Screenshot from 2026-01-19 02-14-07.png" width="45%">
  <img src="Screenshot from 2026-01-19 10-35-21.png" width="45%">
</div> <br>
A simple and minimal i3 window manager configuration. <br>
Based on <a href="https://github.com/nineteetwo/MagiOS-concepts-i3">my previous ricing.</a> <br>

### Requirements

- i3
- picom
- polybar
- alacritty
- neofetch
- rofi
- feh
- autotiling

### Installation

#### Ubuntu / Debian-based Distributions

```bash
sudo apt-get update
sudo apt-get install autotiling i3 feh polybar rofi alacritty picom neofetch
```
#### Arch-based Distributions
```bash
sudo pacman -S i3 polybar feh rofi alacritty picom neofetch
```
### Setup

Copy all configuration files (except the screenshots directory) into your ~/.config directory.
```bash
cp -r * ~/.config
```
**Make sure to back up your existing configuration files before copying.<br>
Make sure to adjust your display settings in the i3 config using xrandr.<br>
This config uses PulseAudio by default. Modify it if you are using PipeWire.**<br>
### Usage

- **Mod key:** Super (Windows key)
- **Super + X:** Open rofi
- **Super + Enter:** Open alacritty
- **Super + Shift + Q:** Close the currently focused application
- **Super + Shift + Number:** Move the focused application to the specified workspace
- **Super + Shift + E:** Log out
- **Super + Shift + R:** Restart i3
- **Super + Shift + Arrow Keys:** Move the focused window

❤️ I hope you enjoy using this configuration. ❤️

