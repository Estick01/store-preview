import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chair-setup',
  templateUrl: './chair-setup.component.html',
  styleUrls: ['./chair-setup.component.css']
})
export class ChairSetupComponent {
  @ViewChild('hilos') hilos!: ElementRef;
  @ViewChild('sillaImages') sillaImages!: ElementRef;
  @ViewChild('costuraImages') costuraImages!: ElementRef;
  @ViewChild('buton_cogineria') cogineria!: ElementRef;
  @ViewChild('MaterialColor') material!: ElementRef;
  @ViewChild('CosturaColor') costura!: ElementRef;
  TipoTextura = "";
  TipoTextura1 = "";

  public changeEstadoAll() {
    const estadoButon = this.cogineria.nativeElement.querySelectorAll("li");
    estadoButon.forEach((element: HTMLElement) => {
      element.setAttribute('estado', 'false');
      element.classList.remove('ButonCogines');
    });
    const estadoCogineria = this.cogineria.nativeElement.querySelector("#all");
    estadoCogineria.setAttribute('estado', 'true');
    estadoCogineria.classList.add('ButonCogines');
    const estadoElements = this.sillaImages.nativeElement.querySelectorAll("img");
    estadoElements.forEach((element: HTMLElement) => {
      element.setAttribute('estado', 'true');
    });
  }
  public changeEstadoById(id: string) {
    const estadoButon = this.cogineria.nativeElement.querySelectorAll("li");
    const estadoElements = this.sillaImages.nativeElement.querySelectorAll("img");
    estadoElements.forEach((element: HTMLElement) => {
      element.setAttribute('estado', 'false');
    });
    estadoButon.forEach((element: HTMLElement) => {
      element.setAttribute('estado', 'false');
      element.classList.remove('ButonCogines');
    });
    const estado = this.sillaImages.nativeElement.querySelectorAll("#" + id);
    estado.forEach((element: HTMLElement) => {
      element.setAttribute('estado', 'true');
    });
    const estadoCogineria = this.cogineria.nativeElement.querySelector("#" + id);
    estadoCogineria.setAttribute('estado', 'true');
    estadoCogineria.classList.add('ButonCogines');
  }
  public changeColor(selector: string, hue: number, saturate: number, brightness: number, contrast: number) {
    const elements = this.sillaImages.nativeElement.querySelectorAll(selector);
    elements.forEach((element: HTMLElement) => {
      const estado = element.getAttribute('estado');
      if (estado === 'true') {
        element.style.filter = `saturate(${saturate}%) hue-rotate(${hue}deg) brightness(${brightness}%) contrast(${contrast}%)`;
        element.style.transition = '0.5s';
      }

    });
  }
  public textura(id: string) {
    if(id === 'microperforado' )
        {
          this.TipoTextura1 = id
        }
        else{
          this.TipoTextura1 = 'colores/rojo'
        }
        this.TipoTextura = id
    const estadoButton = this.cogineria.nativeElement.querySelector("#all");
    const elements = this.sillaImages.nativeElement.querySelectorAll(".cuadros");
    
    if (estadoButton.getAttribute('estado') === 'true' && estadoButton.getAttribute('modificado') === 'true') {
      estadoButton.setAttribute('modificado', 'false');
      elements.forEach((element: HTMLElement) => {
        element.removeAttribute('modificado');
        element.removeAttribute('style');
          });
    }
    elements.forEach((element: HTMLElement) => {
      const estado = element.getAttribute('estado');
      const modificado = element.getAttribute('modificado');
  
      if (estado === 'true') {
        if (modificado === null) {
          element.style.opacity = '1';
          element.setAttribute('modificado', 'false');
        } else if ((modificado === 'true' && element.style.opacity === '0') || modificado === null) {
          element.style.opacity = '1';
          element.setAttribute('modificado', 'false');
        } else if (element.style.opacity === '1' && modificado === 'false') {
          element.style.opacity = '0';
          element.setAttribute('modificado', 'true');
          estadoButton.setAttribute('modificado', 'true');
        }
      } else if (estado === 'false' && modificado === 'false' && element.style.opacity === '1') {
        element.style.opacity = '1';
        element.setAttribute('modificado', 'false');
      }
    });
  }
  public changeTextura(id: string, selector: string) {
    this.textura(selector)
  }
  public changeColorCostura(hue: number, saturate: number, brightness: number, contrast: number) {
    this.changeColor(".costura", hue, saturate, brightness, contrast);
  }
  public checkColorMaterial(id: string) {
    const Color = this.material.nativeElement.querySelectorAll("li");
    Color.forEach((element: HTMLElement) => {
      element.setAttribute('estado', 'false');
      element.classList.remove('SelectColor');
    });
    const estadoMaterial = this.material.nativeElement.querySelector("#" + id);
    estadoMaterial.setAttribute('estado', 'true');
    estadoMaterial.classList.add('SelectColor');
  }

  public checkColorCostura(id: string) {
    const Color = this.costura.nativeElement.querySelectorAll("li");
    Color.forEach((element: HTMLElement) => {
      element.setAttribute('estado', 'false');
      element.classList.remove('SelectColor');
    });
    const estadoMaterial = this.costura.nativeElement.querySelector("#" + id);
    estadoMaterial.setAttribute('estado', 'true');
    estadoMaterial.classList.add('SelectColor');
  }
  public rojo(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'false');
    this.changeColor(".silla img", 0, 100, 100, 100);
    this.checkColorMaterial(id)
  }
  public verde(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'false');
    this.changeColor(".silla img", 120, 100, 100, 100);
    this.checkColorMaterial(id)
  }
  public azul(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'false');
    this.changeColor(".silla img", 240, 100, 100, 100);
    this.checkColorMaterial(id)
  }
  public amarillo(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'false');
    this.changeColor(".silla img", 64, 141, 200, 118);
    this.checkColorMaterial(id)
  }
  public tomate(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'false');
    this.changeColor(".silla img", 30, 80, 150, 100);
    this.checkColorMaterial(id)
  }
  public negro(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'false');
    this.changeColor(".silla img", 130, 0, 55, 97);
    this.checkColorMaterial(id)
  }
  public gris(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'false');
    this.changeColor(".silla img", 150, 2.43, 100, 100);
    this.checkColorMaterial(id)
  }
  public costuraRoja(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'true');
    this.changeColorCostura(171, 1200, 80, 500);
    this.checkColorCostura(id)
  }
  public costuraVerde(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'true');
    this.changeColorCostura(282, 1200, 80, 500);
    this.checkColorCostura(id)
  }
  public costuraAzul(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'true');
    this.changeColorCostura(40, 1200, 70, 500);
    this.checkColorCostura(id)
  }
  public costuraAmarillo(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'true');
    this.changeColorCostura(230, 1200, 100, 500);
    this.checkColorCostura(id)
  }
  public costuraTomate(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'true');
    this.changeColorCostura(230, 1200, 90, 500);
    this.checkColorCostura(id)
  }
  public costuraNegro(id: string) {
    this.hilos.nativeElement.setAttribute('estado', 'true');
    this.changeColorCostura(0, 0, 0, 500);
    this.checkColorCostura(id)
  }
  public texturaRoja(id: string) {
   

  }
  public texturaVerde(id: string) {

  }
  public texturaAzul(id: string) {

  }
  public texturaAmarillo(id: string) {

  }
  public texturaTomate(id: string) {

  }
  public texturaNegro(id: string) {

  }

}  