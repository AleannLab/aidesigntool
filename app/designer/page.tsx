"use client"

import React, {useEffect, useState} from 'react';
import {Card, CardHeader, CardTitle, CardContent, CardSidebar} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight, Wand2 } from 'lucide-react';
import axios from "axios";

const LingerieDesigner = () => {
    const categories: any = {
        bras: {
            attributes: [
                {
                    name: 'Type',
                    options: ['T-Shirt Bra', 'Balconette', 'Plunge', 'Bralette', 'Push-Up', 'Strapless', 'Wireless', 'Longline', 'Demi Cup', 'Triangle', 'Sports Bra', 'Bandeau', 'Corset']
                },
                {
                    name: 'Style',
                    options: ['Classic', 'Romantic', 'Minimalist', 'Fashion-forward']
                },
                {
                    name: 'Material',
                    options: ['Lace', 'Mesh', 'Satin', 'Cotton', 'Microfiber']
                },
                {
                    name: 'Color',
                    options: ['Black', 'Nude', 'White', 'Red', 'Navy', 'Pink']
                },
                {
                    name: 'Details',
                    options: ['Embroidery', 'Bow accents', 'Seamless', 'Removable padding']
                },
                {
                    name: 'Coverage',
                    options: ['Full coverage', 'Demi', 'Light', 'Medium']
                }
            ]
        },
        panties: {
            attributes: [
                {
                    name: 'Type',
                    options: ['Brief', 'Thong', 'Boyshort', 'Bikini', 'High-waisted', 'Brazilian', 'Hipster', 'String', 'Tanga', 'G-string']
                },
                {
                    name: 'Style',
                    options: ['Classic', 'Cheeky', 'Seamless', 'Lacy']
                },
                {
                    name: 'Material',
                    options: ['Lace', 'Cotton', 'Silk', 'Mesh', 'Modal']
                },
                {
                    name: 'Color',
                    options: ['Black', 'Nude', 'White', 'Red', 'Navy', 'Pink']
                },
                {
                    name: 'Rise',
                    options: ['Low', 'Mid', 'High']
                },
                {
                    name: 'Details',
                    options: ['Plain', 'Embroidered', 'Bow detail', 'Scalloped edges']
                }
            ]
        },
        bodysuits: {
            attributes: [
                {
                    name: 'Type',
                    options: ['Classic Bodysuit', 'Teddy', 'Shapewear Bodysuit', 'Lace Bodysuit', 'Mesh Bodysuit']
                },
                {
                    name: 'Style',
                    options: ['Elegant', 'Romantic', 'Modern', 'Athletic']
                },
                {
                    name: 'Material',
                    options: ['Lace', 'Mesh', 'Microfiber', 'Cotton Blend', 'Satin']
                },
                {
                    name: 'Color',
                    options: ['Black', 'Nude', 'White', 'Red', 'Navy', 'Pink']
                },
                {
                    name: 'Coverage',
                    options: ['Full', 'Medium', 'Low']
                },
                {
                    name: 'Details',
                    options: ['Underwired', 'Wireless', 'Adjustable straps', 'Snap closure']
                }
            ]
        },
        hosiery: {
            attributes: [
                {
                    name: 'Type',
                    options: ['Stockings', 'Tights', 'Thigh Highs', 'Pantyhose', 'Knee Highs', 'Fishnet']
                },
                {
                    name: 'Style',
                    options: ['Classic', 'Patterned', 'Sheer', 'Opaque']
                },
                {
                    name: 'Denier',
                    options: ['Ultra Sheer (7-10)', 'Sheer (15-20)', 'Semi Opaque (30-40)', 'Opaque (50+)', 'Thick (100+)']
                },
                {
                    name: 'Color',
                    options: ['Black', 'Nude', 'White', 'Navy', 'Skin Tone']
                },
                {
                    name: 'Features',
                    options: ['Plain', 'With Garter Belt', 'Stay Up', 'Control Top', 'Seamed']
                },
                {
                    name: 'Pattern',
                    options: ['None', 'Floral', 'Geometric', 'Fishnet', 'Polka Dot']
                }
            ]
        },
        sleepwear: {
            attributes: [
                {
                    name: 'Type',
                    options: ['Nightgown', 'Pajama Set', 'Romper', 'Slip', 'Robe', 'Sleep Shirt']
                },
                {
                    name: 'Style',
                    options: ['Elegant', 'Cozy', 'Feminine', 'Modern']
                },
                {
                    name: 'Material',
                    options: ['Silk', 'Cotton', 'Modal', 'Satin', 'Bamboo']
                },
                {
                    name: 'Length',
                    options: ['Mini', 'Knee-length', 'Full-length', 'Short']
                },
                {
                    name: 'Details',
                    options: ['Lace trim', 'Buttons', 'Ribbon details', 'Plain']
                }
            ]
        }
    };


    const [
        generatedImage, setGeneratedImage
    ] = useState();


    const [selectedPath, setSelectedPath] = useState<string[]>([]);
    const [selections, setSelections] = useState({});
    const [customPrompt, setCustomPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [
        balance, setBalance
    ] = useState<null | number>(null)

    const fetchBalance = async () => {
        const {data} = await axios.get('/api/balance');
        setBalance(data.balance);
    };

    useEffect(() => {

        fetchBalance();

        const interval = setInterval(() => {
            fetchBalance();
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const getCurrentOptions = () => {
        if (selectedPath.length === 0) {
            return Object.keys(categories);
        }

        const category = selectedPath[0].toLowerCase();
        if (categories[category]) {
            return categories[category].attributes;
        }

        return [];
    };

    const handleSelection = (option: string) => {
        const newPath = [...selectedPath, option];
        setSelectedPath(newPath);
    };

    const handleAttributeSelection = (attribute: string, value: string) => {
        setSelections(prev => ({
            ...prev,
            [attribute]: value
        }));
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {

            const {data} = await axios.post('/api/generate', {
                selections,
                customPrompt,
                selectedPath
            });


            setGeneratedImage(data.generatedImage);
            await fetchBalance();


        } catch (err) {
            console.error(err);
        }
        setIsGenerating(false);

    };

    const handleReset = () => {
        setSelectedPath([]);
        setSelections({});
        setCustomPrompt('');
    };

    const currentOptions = getCurrentOptions();
    const isAttributeSelection = selectedPath.length === 1;

    return (
        <Card>
            <CardSidebar>
                <CardHeader>
                    <CardTitle>AI Lingerie Designer. {
                        balance !== null ? `Balance: ${balance}` : ''
                    }</CardTitle>
                    <div className="flex gap-2 text-sm text-gray-500">
                        {selectedPath.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <span>{item}</span>
                                {index < selectedPath.length - 1 && <ChevronRight className="w-4 h-4" />}
                            </div>
                        ))}
                    </div>
                </CardHeader>
                {selectedPath.length === 0 ? (
                    <div className="flex flex-wrap justify-center gap-4 px-[60px] py-[32px]">
                        {currentOptions.map((category) => (
                            <div key={category} className="w-[130px] h-[130px]">
                                <Button
                                    key={category}
                                    variant="outline"
                                    className="h-24 capitalize"
                                    onClick={() => handleSelection(category)}
                                >
                                    {category}
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : isAttributeSelection ? (
                    <div className="space-y-6">
                        {currentOptions.map((attribute) => (
                            <div key={attribute.name} className="space-y-2">
                                <h3 className="font-medium">{attribute.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {attribute.options.map((option) => (
                                        <Button
                                            key={option}
                                            variant={selections[attribute.name] === option ? "default" : "outline"}
                                            onClick={() => handleAttributeSelection(attribute.name, option)}
                                            className="text-sm"
                                        >
                                            {option}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="space-y-2">
                            <h3 className="font-medium">Custom Details</h3>
                            <Textarea
                                placeholder="Add any additional details or preferences..."
                                value={customPrompt}
                                onChange={(e) => setCustomPrompt(e.target.value)}
                                className="h-24"
                            />
                        </div>
                        <div className="flex gap-4">
                            <Button
                                onClick={handleReset}
                                variant="outline"
                                className="w-32"
                            >
                                Reset
                            </Button>
                            <Button
                                onClick={handleGenerate}
                                disabled={isGenerating}
                                className="w-full"
                            >
                                <Wand2 className="w-4 h-4 mr-2" />
                                {isGenerating ? 'Generating...' : 'Generate Your Design'}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {currentOptions.map((option) => (
                            <Button
                                key={option}
                                variant="outline"
                                className="h-16"
                                onClick={() => handleSelection(option)}
                            >
                                {option}
                            </Button>
                        ))}
                    </div>
                )}
            </CardSidebar>
            <CardContent>
                {
                    generatedImage ? (
                        <img
                        src={generatedImage}
                         alt="demo"
                        />
                        ) : (
                        <span>Use the design panel to start</span>
                    )
                }
            </CardContent>
        </Card>
    );
};

export default LingerieDesigner;