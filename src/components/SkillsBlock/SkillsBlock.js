import React, {Component} from 'react';
import vis from 'vis';
import icon1 from './img/skill_icon.png';
import reacticon from './img/react.png';
import git from './img/git.png';
import github from './img/github1.png';
import bitbucket from './img/bitbucket.png';
import reduxicon from './img/redux.png';
import gulp from './img/gulp.png';
import npm from './img/npm.png';
import js from './img/js.png';
import htmlic from './img/html.png';
import cssic from './img/css.png';
import asic from './img/as.png';
import sassic from './img/sass.png';
import webpack from './img/web.png';
import ps from './img/ph.png';
import pr from './img/pr.png';
import fl from './img/fl.png';
import less from './img/less.png';
import photoic from './img/phic.png';
import desic from './img/designic.png';
import tech from './img/tech.png';

import './SkillsBlock.css';

class SkillsBlock extends Component {

    render() {
        return (
            <div className="skills_block w-back container back">
                <div className=" col-12">
                    <span className="about_title">
                        <img src={icon1} alt="kartinka" height="40px"/>Навыки
                    </span>
                </div>

                <div className="center">
                    <div className="skills_list" ref={el => this.net = el}/>
                    <div className="head">
                        <div className="skills_tit"> <button className="demo">Дизайн</button></div>
                        <div className="skills_tit"><button className="signup">Разработка</button></div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const {net: netElement} = this;
        let nodes = null;
        let edges = null;
        let network = null;

        let clusterIndex = 0;
        let clusters = [];
        let lastClusterZoomLevel = 0;
        let clusterFactor = 0.9;
        // Called when the Visualization API is loaded.
        function draw() {
            // create people.
            // value corresponds with the age of the person
            nodes = new vis.DataSet([
                {id: 0,  shape: 'text', label:"skills", x: -100, y: 0, fixed: true, font: {size: 35, color: '#444b54'}, hover: false },
                {id: 11,  shape: 'text', value: 50, label:"design", font: {size: 30, color: '#444b54'}},
                {id: 22,  shape: 'text',  value: 50, label:"development", color: {border:'#444b54'}, font: {size: 30, color: '#444b54'}},
                {id: 5,  shape: 'circularImage', image: sassic, label:"Sass", color: {border:'#444b54'} },
                {id: 6,  shape: 'circularImage', image: reduxicon, label:"Redux", color: {border:'#444b54'}},
                {id: 7,  shape: 'circularImage', image: reacticon, label:"React", color: {border:'#444b54'}},
                {id: 101, shape: 'circularImage', image: photoic, label:"фото/видео-съемка", color: {border:'#fcdb74'}},
                {id: 102, shape: 'circularImage', image: ps, label:"PS", color: {border:'#fcdb74'}},
                {id: 103, shape: 'circularImage', image: pr, label:"PR", color: {border:'#fcdb74'}},
                {id: 201, shape: 'circularImage', image: git, label:"Git", color: {border:'#444b54'}},
                {id: 202, shape: 'circularImage', image: github, label:"GitHub", color: {border:'#444b54'}},
                {id: 203, shape: 'circularImage', image: bitbucket, label:"Bitbucket", color: {border:'#444b54'}},
                {id: 301, shape: 'circularImage', image: npm, label:"npm", color: {border:'#444b54'}},
                {id: 302, shape: 'circularImage', image: gulp, label:"Gulp", color: {border:'#444b54'}},
                {id: 303, shape: 'circularImage', image: webpack, label:"Webpack", color: {border:'#444b54'}},
                {id: 401, shape: 'circularImage', image: asic, label:"AS", color: {border:'#fcdb74'}},
                {id: 402, shape: 'circularImage', image: fl, label:"FL", color: {border:'#fcdb74'}},
                {id: 501, shape: 'circularImage', image: htmlic, label:"HTML", color: {border:'#444b54'}},
                {id: 502, shape: 'circularImage', image: cssic, label:"CSS", color: {border:'#444b54'}},
                {id: 503, shape: 'circularImage', image: less, label:"Less", color: {border:'#444b54'}},
                {id: 601, shape: 'circularImage', image: js, label:"JS", color: {border:'#444b54'}},
                {id: 701, shape: 'circularImage', image:  tech, label:"техдизайн", color: {border:'#fcdb74'}},
                {id: 702, shape: 'circularImage', image: desic, label:"графический", color: {border:'#fcdb74'}},
            ]);

            // create connections between skills
            // value corresponds with the amount of contact between two skills
            edges = [
                {from: 0, to: 22, color: {color:'#444b54'}},
                {from: 0, to: 11, color: {color:'#fcdb74'}},
                {from: 11, to: 101,  color: {color:'#fcdb74'}},
                {from: 11, to: 102, color: {color:'#fcdb74'}},
                {from: 101, to: 103, color: {color:'#fcdb74'}},
                {from: 22, to: 201,  color: {color:'#444b54'}},
                {from: 201, to: 202, color: {color:'#444b54'}},
                {from: 201, to: 203, color: {color:'#444b54'}},
                {from: 22, to: 301,  color: {color:'#444b54'}},
                {from: 301, to: 302, color: {color:'#444b54'}},
                {from: 301, to: 303, color: {color:'#444b54'}},
                {from: 11, to: 401,  color: {color:'#fcdb74'}},
                {from: 401, to: 402, color: {color:'#fcdb74'}},
                {from: 401, to: 601, color: {color:'#444b54'}},
                {from: 22, to: 501,  color: {color:'#444b54'}},
                {from: 501, to: 502, color: {color:'#444b54'}},
                {from: 501, to: 601, color: {color:'#444b54'}},
                {from: 502, to: 5, color: {color:'#444b54'}},
                {from: 502, to: 503, color: {color:'#444b54'}},
                {from: 22, to: 601, color: {color:'#444b54'}},
                {from: 601, to: 7, color: {color:'#444b54'}},
                {from: 7, to: 6, color: {color:'#444b54'}},
                {from: 6, to: 601, color: {color:'#444b54'}},
                {from: 102, to: 701,  color: {color:'#fcdb74'}},
                {from: 102, to: 702,  color: {color:'#fcdb74'}},
            ];

            // create a network
            const container = netElement;
            const data = {
                nodes: nodes,
                edges: edges
            };
            const options = {
                interaction: {
                    hoverConnectedEdges: false
                },
                manipulation: {enabled: true},
                layout: {
                    randomSeed: 8
                },
                physics:{
                    adaptiveTimestep:false,
                    stabilization: {iterations: 150}
                },
                nodes: {
                    borderWidth: 1,
                    borderWidthSelected: 1,
                    color: {
                        border: '#cecece',
                        background: '#ffffff',
                        highlight: {},
                    },
                    shadow: true,
                    size: 50,
                    font:{color:'#220405'},
                    fixed: {
                        y: false,
                        x: false,
                    },
                    shapeProperties: {
                        borderRadius: 0,
                    },
                },
                edges: {
                    color: '#444b54',
                    length: 200,
                }
            };
            network = new vis.Network(container, data, options);

            // //Get the canvas HTML element
            const networkCanvas = netElement.getElementsByTagName("canvas")[0];

            function changeCursor(newCursorStyle) {
                networkCanvas.style.cursor = newCursorStyle;
            }

            network.on("hoverNode", function (params) {
                changeCursor('pointer');
            });
            network.on('blurNode', function() {
                changeCursor('default');
            });

            // set the first initial zoom level
            network.once('initRedraw', function() {
                if (lastClusterZoomLevel === 0) {
                    lastClusterZoomLevel = network.getScale();
                }
            });

            // we use the zoom event for our clustering
            network.on('zoom', function (params) {
                if (params.direction === '-') {
                    if (params.scale < lastClusterZoomLevel*clusterFactor) {
                        makeClusters(params.scale);
                        lastClusterZoomLevel = params.scale;
                    }
                }
                else {
                    openClusters(params.scale);
                }
            });

            // if we click on a node, we want to open it up!
            network.on("selectNode", function (params) {
                if (params.nodes.length === 1) {
                    if (network.isCluster(params.nodes[0]) === true) {
                        network.openCluster(params.nodes[0])
                    }
                }
            });


            // make the clusters
            function makeClusters(scale) {
                var clusterOptionsByData = {
                    processProperties: function (clusterOptions, childNodes) {
                        clusterIndex = clusterIndex + 1;
                        var childrenCount = 0;
                        for (var i = 0; i < childNodes.length; i++) {
                            childrenCount += childNodes[i].childrenCount || 1;
                        }
                        clusterOptions.childrenCount = childrenCount;
                        clusterOptions.label = "# " + childrenCount + "";
                        clusterOptions.font = {size: childrenCount*5+30};
                        clusterOptions.id = 'cluster:' + clusterIndex;
                        clusters.push({id:'cluster:' + clusterIndex, scale:scale});
                        return clusterOptions;
                    },
                    clusterNodeProperties: {borderWidth: 3, shape: 'database', font: {size: 30}}
                };
                network.clusterOutliers(clusterOptionsByData);
                const stabilizeCheckbox = document.getElementById('stabilizeCheckbox');
                if (stabilizeCheckbox && stabilizeCheckbox.checked === true) {
                    // since we use the scale as a unique identifier, we do NOT want to fit after the stabilization
                    network.setOptions({physics:{stabilization:{fit: false}}});
                    network.stabilize();
                }
            }

            // open them back up!
            function openClusters(scale) {
                var newClusters = [];
                var declustered = false;
                for (var i = 0; i < clusters.length; i++) {
                    if (clusters[i].scale < scale) {
                        network.openCluster(clusters[i].id);
                        lastClusterZoomLevel = scale;
                        declustered = true;
                    }
                    else {
                        newClusters.push(clusters[i])
                    }
                }
                clusters = newClusters;
                const stabilizeCheckbox = document.getElementById('stabilizeCheckbox');
                if (declustered === true && stabilizeCheckbox && stabilizeCheckbox.checked === true) {
                    // since we use the scale as a unique identifier, we do NOT want to fit after the stabilization
                    network.setOptions({physics:{stabilization:{fit: false}}});
                    network.stabilize();
                }
            }


        }

        draw();
    }
}

export default SkillsBlock;

